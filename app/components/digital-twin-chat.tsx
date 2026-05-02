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
  "What is your current role and focus?",
  "Walk me through your career journey.",
  "Which AI and project delivery strengths stand out most?",
];

const initialMessage: Message = {
  id: "intro",
  role: "assistant",
  content:
    "Hi, I am Justin's Digital Twin. Ask me anything about his career journey, AI focus, certifications, or experience.",
};

function makeId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

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
      if (!response.ok || !data.message) {
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
            "I could not complete that request right now. Please try again in a moment, or refresh the page.",
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

  return (
    <div className="twin-chat">
      <div className="twin-head">
        <div>
          <p className="twin-head-label">Digital Twin Chat</p>
          <p className="twin-head-subtitle">Ask career questions in natural language</p>
        </div>
        <p
          className={`twin-mode ${
            mode === "openai" ? "is-openai" : mode === "fallback" ? "is-fallback" : "is-checking"
          }`}
        >
          {mode === "openai" ? "OpenAI Live" : mode === "fallback" ? "Profile Fallback" : "Status Pending"}
        </p>
      </div>

      {statusNote ? <p className="twin-warning">{statusNote}</p> : null}

      <div className="twin-messages" aria-live="polite" ref={scrollRef}>
        {messages.map((message) => (
          <article
            className={`twin-message ${message.role === "assistant" ? "is-assistant" : "is-user"}`}
            key={message.id}
          >
            <span className="twin-avatar">{message.role === "assistant" ? "JT" : "You"}</span>
            <div className="twin-bubble">
              <p>{message.content}</p>
            </div>
          </article>
        ))}
        {isSending ? (
          <article className="twin-message is-assistant is-thinking">
            <span className="twin-avatar">JT</span>
            <div className="twin-bubble">
              <p>Thinking...</p>
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

      <form className="twin-form" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="twin-input">
          Ask Justin&apos;s digital twin
        </label>
        <textarea
          id="twin-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={handleInputKeyDown}
          placeholder="Ask about career history, AI projects, leadership, or certifications..."
          rows={3}
          disabled={isSending}
          required
        />
        <button className="button button-primary" type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Ask Digital Twin"}
        </button>
      </form>

      {error ? <p className="twin-error">Connection note: {error}</p> : null}
    </div>
  );
}
