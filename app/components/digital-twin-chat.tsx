"use client";

import { FormEvent, KeyboardEvent, useEffect, useMemo, useRef, useState } from "react";

type Role = "user" | "assistant";

type Message = {
  id: string;
  role: Role;
  content: string;
};

type TwinMode = "checking" | "openai" | "fallback";

const starterPrompts = [
  "Your story",
  "Your builds",
  "Your AI lens",
];

const initialMessage: Message = {
  id: "intro",
  role: "assistant",
  content:
    "Hey, I'm Justin. Ask me about the work, the projects, or how I think through AI and delivery.",
};

function makeId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

const MAX_INPUT_LENGTH = 1500;

export function DigitalTwinChat() {
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<TwinMode>("checking");
  const [statusNote, setStatusNote] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const history = useMemo(
    () =>
      messages
        .filter((message) => message.id !== "intro")
        .map(({ role, content }) => ({ role, content })),
    [messages],
  );

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isSending]);

  async function sendMessage(prompt?: string) {
    const text = (prompt ?? input).trim();
    if (!text || isSending) {
      return;
    }

    const userMessage: Message = {
      id: makeId(),
      role: "user",
      content: text,
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setIsSending(true);
    setError(null);

    try {
      const response = await fetch("/api/digital-twin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...history, { role: "user", content: text }],
        }),
      });

      const data = (await response.json()) as {
        message?: string;
        error?: string;
        warning?: string;
        mode?: TwinMode;
      };
      const hasFallbackMessage = data.mode === "fallback" && Boolean(data.message);

      if ((!response.ok && !hasFallbackMessage) || !data.message) {
        throw new Error(data.error || "The assistant failed to respond.");
      }

      setMode(data.mode ?? "openai");
      setStatusNote(data.warning ?? null);

      const assistantMessage: Message = {
        id: makeId(),
        role: "assistant",
        content: data.message,
      };

      setMessages([...nextMessages, assistantMessage]);
    } catch (requestError) {
      const message =
        requestError instanceof Error ? requestError.message : "Unexpected request error.";
      setError(message);
      setMessages([
        ...nextMessages,
        {
          id: makeId(),
          role: "assistant",
          content:
            "I couldn't complete that request. Please try again in a moment, or refresh the page.",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  }

  function handleInputKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage();
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage();
  }

  const modeLabel =
    mode === "openai" ? "live" : mode === "fallback" ? "fallback" : "checking";

  return (
    <div className="twin-orbital">
      <div className="twin-screen-glow" aria-hidden="true" />
      <div className="twin-card">
        <div className="twin-head">
          <span className="twin-head-avatar" aria-hidden="true">
            JU
          </span>
          <div className="twin-title-group">
            <span className="twin-head-title">Justin Underhill</span>
            <span className="twin-kicker">Digital twin</span>
          </div>
          <span className={`twin-mode is-${mode}`}>{modeLabel}</span>
        </div>

        {statusNote ? <p className="twin-warning">{statusNote}</p> : null}

        <div className="twin-messages" aria-live="polite" ref={scrollRef}>
          {messages.map((message) => (
            <article
              className={`twin-message ${
                message.role === "assistant" ? "is-assistant" : "is-user"
              }`}
              key={message.id}
            >
              <span className="twin-avatar">
                {message.role === "assistant" ? "JT" : "You"}
              </span>
              <div className="twin-bubble">
                <p>{message.content}</p>
              </div>
            </article>
          ))}
          {isSending ? (
            <article className="twin-message is-assistant is-thinking">
              <span className="twin-avatar">JT</span>
              <div className="twin-bubble">
                <p>Thinking…</p>
              </div>
            </article>
          ) : null}
        </div>

        <div className="twin-prompts">
          {starterPrompts.map((prompt) => (
            <button
              className="twin-chip"
              key={prompt}
              onClick={() => void sendMessage(prompt)}
              type="button"
              disabled={isSending}
            >
              {prompt}
            </button>
          ))}
        </div>

        {error ? <p className="twin-error">Connection note: {error}</p> : null}

        <form className="twin-form" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="twin-input">
            Ask Justin&apos;s digital twin
          </label>
          <div className="twin-input-wrap">
            <textarea
              id="twin-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleInputKeyDown}
              placeholder="Ask Justin anything..."
              rows={2}
              disabled={isSending}
              maxLength={MAX_INPUT_LENGTH}
              required
            />
            <button className="button button-primary" type="submit" disabled={isSending}>
              {isSending ? "Sending…" : "Send"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
