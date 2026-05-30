import OpenAI from "openai";
import { NextResponse } from "next/server";
import { digitalTwinSystemPrompt } from "@/lib/digital-twin-context";
import { generateFallbackTwinAnswer } from "@/lib/digital-twin-fallback";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const MODEL_NAME = process.env.OPENAI_MODEL ?? "gpt-5.4-mini";
const MAX_MESSAGES = 14;
const MAX_MESSAGE_LENGTH = 1_500;
const MAX_BODY_BYTES = 24_000;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 8;
const FALLBACK_WARNING =
  "Using profile-grounded fallback responses while live AI is temporarily unavailable.";

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

export const maxDuration = 20;

function getClientId(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const realIp = request.headers.get("x-real-ip")?.trim();
  return forwardedFor || realIp || "local";
}

function checkRateLimit(clientId: string) {
  const now = Date.now();

  for (const [key, entry] of rateLimitStore) {
    if (entry.resetAt <= now) {
      rateLimitStore.delete(key);
    }
  }

  const existing = rateLimitStore.get(clientId);

  if (!existing || existing.resetAt <= now) {
    const nextEntry = { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS };
    rateLimitStore.set(clientId, nextEntry);
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (existing.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((existing.resetAt - now) / 1000),
    };
  }

  existing.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}

function logFallback(reason: string, detail?: unknown) {
  console.warn("[digital-twin] fallback mode activated", { reason, detail });
}

function sanitizeOpenAIErrorMessage(message: string): string {
  return message.replace(/sk-[a-zA-Z0-9_-]+/g, "[redacted]");
}

function normalizeApiKey(rawKey: string | undefined): string {
  if (!rawKey) {
    return "";
  }

  const trimmed = rawKey.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1).trim();
  }

  return trimmed;
}

function hasPlausibleApiKeyFormat(apiKey: string): boolean {
  return apiKey.startsWith("sk-") && apiKey.length > 20;
}

function sanitizeMessages(messages: unknown): ChatMessage[] {
  if (!Array.isArray(messages)) {
    return [];
  }

  return messages
    .filter((message): message is ChatMessage => {
      if (!message || typeof message !== "object") {
        return false;
      }

      const candidate = message as Record<string, unknown>;
      return (
        (candidate.role === "user" || candidate.role === "assistant") &&
        typeof candidate.content === "string" &&
        candidate.content.trim().length > 0
      );
    })
    .slice(-MAX_MESSAGES)
    .map((message) => ({
      role: message.role,
      content: message.content.trim().slice(0, MAX_MESSAGE_LENGTH),
    }));
}

function extractResponseText(response: OpenAI.Responses.Response): string {
  if (response.output_text && response.output_text.trim().length > 0) {
    return response.output_text.trim();
  }

  const textBlocks: string[] = [];
  for (const item of response.output ?? []) {
    if (item.type !== "message") {
      continue;
    }

    for (const content of item.content ?? []) {
      if (content.type === "output_text" && content.text) {
        textBlocks.push(content.text);
      }
    }
  }

  return textBlocks.join("\n").trim();
}

export async function POST(request: Request) {
  let conversation: ChatMessage[] = [];

  try {
    const clientId = getClientId(request);
    const rateLimit = checkRateLimit(clientId);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please wait before trying again." },
        {
          status: 429,
          headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
        },
      );
    }

    const contentLength = Number(request.headers.get("content-length") ?? 0);
    if (contentLength > MAX_BODY_BYTES) {
      return NextResponse.json(
        { error: "Request body is too large. Please send a shorter conversation." },
        { status: 413 },
      );
    }

    const body = await request.json();
    conversation = sanitizeMessages(body?.messages);
    if (conversation.length === 0) {
      return NextResponse.json(
        { error: "Please provide at least one user message." },
        { status: 400 },
      );
    }

    const latestPrompt = conversation[conversation.length - 1]?.content ?? "";
    const apiKey = normalizeApiKey(process.env.OPENAI_API_KEY);
    if (!apiKey) {
      logFallback("missing_api_key");
      return NextResponse.json({
        mode: "fallback",
        warning: FALLBACK_WARNING,
        message: generateFallbackTwinAnswer(latestPrompt),
      });
    }

    if (!hasPlausibleApiKeyFormat(apiKey)) {
      logFallback("invalid_api_key_format");
      return NextResponse.json({
        mode: "fallback",
        warning: FALLBACK_WARNING,
        message: generateFallbackTwinAnswer(latestPrompt),
      });
    }

    const client = new OpenAI({ apiKey });
    const response = await client.responses.create({
      model: MODEL_NAME,
      input: [
        {
          role: "system",
          content: digitalTwinSystemPrompt,
        },
        ...conversation.map((message) => ({
          role: message.role,
          content: message.content,
        })),
      ],
    });

    const message = extractResponseText(response);
    if (!message) {
      return NextResponse.json(
        { error: "The Digital Twin returned an empty response." },
        { status: 502 },
      );
    }

    return NextResponse.json({ mode: "openai", message });
  } catch (error) {
    const latestPrompt = conversation[conversation.length - 1]?.content ?? "";

    if (error instanceof OpenAI.APIError) {
      if (error.status === 401 || error.status === 403) {
        logFallback("auth_failed", { status: error.status });
        return NextResponse.json({
          mode: "fallback",
          warning: FALLBACK_WARNING,
          message: generateFallbackTwinAnswer(latestPrompt),
        }, { status: 502 });
      }

      if (error.status === 404) {
        logFallback("model_access_issue", { status: error.status, model: MODEL_NAME });
        return NextResponse.json({
          mode: "fallback",
          warning: FALLBACK_WARNING,
          message: generateFallbackTwinAnswer(latestPrompt),
        }, { status: 502 });
      }

      logFallback("openai_api_error", {
        status: error.status,
        message: sanitizeOpenAIErrorMessage(error.message),
      });
      return NextResponse.json({
        mode: "fallback",
        warning: FALLBACK_WARNING,
        message: generateFallbackTwinAnswer(latestPrompt),
      }, { status: 502 });
    }

    logFallback("unexpected_error", error instanceof Error ? error.message : error);
    return NextResponse.json({
      mode: "fallback",
      warning: FALLBACK_WARNING,
      message: generateFallbackTwinAnswer(latestPrompt),
    }, { status: 500 });
  }
}
