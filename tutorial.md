# Beginner Tutorial: How This Website Was Built

## 1. What You Are Looking At

This project is a **modern personal website** built with:

- A polished, responsive marketing-style homepage
- A dedicated portfolio placeholder page
- An AI-powered "Digital Twin" chat that can answer career questions
- A fallback mode so chat still responds even when OpenAI is unavailable

You can run it locally with:

```bash
npm install
npm run dev
```

Then open: `http://localhost:3000`

---

## 2. Technology Summary (Beginner-Friendly)

### Next.js
- Next.js is a React framework that helps you build full websites.
- It handles both frontend pages and backend API routes in one project.
- This project uses the `app/` router style.

### React
- React builds UI using components.
- A component is a reusable piece of the interface (for example the Digital Twin chat box).

### TypeScript
- TypeScript is JavaScript with types.
- Types reduce bugs by making data shape explicit.

### CSS (Global + Custom Design System)
- Styling lives mainly in `app/globals.css`.
- We use CSS variables (`--accent`, `--bg-main`, etc.) for color consistency.
- Responsive rules (`@media`) make it mobile-friendly.
- Subtle animations and motion effects create a modern feel.

### OpenAI API
- The server route `app/api/digital-twin/route.ts` sends chat prompts to OpenAI.
- Model used: `GPT-5.3-Codex`.
- If API auth/model access fails, route returns profile-grounded fallback answers.

---

## 3. Project Structure

```text
app/
  api/
    digital-twin/route.ts      # Server endpoint for chat
  components/
    digital-twin-chat.tsx      # Client chat UI
  portfolio/
    page.tsx                   # Portfolio placeholder page
  globals.css                  # Main design + animation styles
  layout.tsx                   # App shell, fonts, metadata
  page.tsx                     # Main homepage
lib/
  digital-twin-context.ts      # System prompt / profile context for OpenAI
  digital-twin-fallback.ts     # Fallback answers when OpenAI unavailable
package.json
```

---

## 4. Step-by-Step: What Was Built

## Step 1: App shell and fonts
The app shell is in `app/layout.tsx`.

```tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"] });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Justin Underhill | AI Systems Engineer",
  description: "AI Systems Engineer, Agentic AI Developer, and AI Automation Architect...",
};
```

What this does:
- Loads fonts once for the whole app
- Loads global styles
- Sets browser metadata (title/description)

---

## Step 2: Homepage sections
The main page (`app/page.tsx`) is built from arrays + mapped components.

```tsx
const keyStats = [
  { label: "Years In Digital & Delivery", value: "12+" },
  { label: "Cross-Functional Roles", value: "10" },
  { label: "Current Core Focus", value: "Agentic AI" },
  { label: "Region", value: "Johannesburg" },
];

<section className="stats reveal" aria-label="Key highlights">
  {keyStats.map((item, index) => (
    <article className="stat-card" key={item.label} style={{ animationDelay: `${index * 80}ms` }}>
      <p className="stat-value">{item.value}</p>
      <p className="stat-label">{item.label}</p>
    </article>
  ))}
</section>
```

Why this pattern is useful:
- Easier to update content (change data, not HTML blocks)
- Cleaner code and less repetition

The homepage includes:
- Hero section
- About section
- Expertise cards
- Career timeline
- Certifications + education
- Digital Twin section
- Portfolio roadmap
- Contact call-to-action

---

## Step 3: Global design system + modern animation
Most styling is in `app/globals.css`.

```css
:root {
  --bg-main: #e7eefc;
  --bg-alt: #d8e7f7;
  --accent: #0eb6ff;
  --accent-strong: #0a6dff;
  --signal: #ff8d4d;
  --mint: #22d3a6;
}

.panel {
  border-radius: var(--radius-xl);
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.76), rgba(244, 250, 255, 0.68));
  transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
}

.panel:hover {
  transform: translateY(-2px);
}
```

What this gives you:
- Consistent colors and spacing
- Hover polish
- Modern card glass effect

Animation examples:

```css
@keyframes ambient-drift {
  0% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(0, -8px, 0); }
  100% { transform: translate3d(0, 0, 0); }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

This is important for accessibility.

---

## Step 4: Client chat component (frontend behavior)
The chat UI is `app/components/digital-twin-chat.tsx`.

Core state:

```tsx
const [messages, setMessages] = useState<Message[]>([initialMessage]);
const [input, setInput] = useState("");
const [isSending, setIsSending] = useState(false);
const [mode, setMode] = useState<TwinMode>("openai");
const [statusNote, setStatusNote] = useState<string | null>(null);
```

Send flow:

```tsx
const response = await fetch("/api/digital-twin", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ messages: [...history, { role: "user", content: text }] }),
});
```

Keyboard UX:

```tsx
function handleInputKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    void sendMessage();
  }
}
```

Extra UX improvements:
- Auto-scroll to newest message
- Starter prompt chips
- Error note shown in UI
- Status badge (`OpenAI Live` vs `Profile Fallback`)

---

## Step 5: API route (backend logic)
The server endpoint is `app/api/digital-twin/route.ts`.

Request sanitization:

```tsx
function sanitizeMessages(messages: unknown): ChatMessage[] {
  if (!Array.isArray(messages)) return [];
  return messages
    .filter((message): message is ChatMessage => {
      const candidate = message as Record<string, unknown>;
      return (
        (candidate.role === "user" || candidate.role === "assistant") &&
        typeof candidate.content === "string" &&
        candidate.content.trim().length > 0
      );
    })
    .slice(-14);
}
```

OpenAI request:

```tsx
const response = await client.responses.create({
  model: "GPT-5.3-Codex",
  input: [
    { role: "system", content: digitalTwinSystemPrompt },
    ...conversation.map((message) => ({
      role: message.role,
      content: message.content,
      ...(message.role === "assistant" ? { phase: "final_answer" as const } : {}),
    })),
  ],
  reasoning: { effort: "medium" },
});
```

Why this is good:
- Strong system prompt context
- Preserves conversation history
- Limits message count to reduce token usage and latency

---

## Step 6: Prompt engineering and context
`lib/digital-twin-context.ts` stores a long, structured prompt.

It includes:
- Role and behavior constraints
- Verified profile facts
- Career timeline
- Skills, certifications, education

This improves answer quality and reduces hallucination.

---

## Step 7: Fallback mode (reliability)
`lib/digital-twin-fallback.ts` returns deterministic profile answers if OpenAI fails.

Example:

```ts
if (hasAny(prompt, ["career", "journey", "experience"])) {
  return [
    "Here is a concise view of my career journey:",
    "- 2023-Present: Project Manager at Merchants...",
    "- 2022-2023: Digital Project Manager...",
  ].join("\n");
}
```

In the API route, if auth/model/network fails, it returns:

```ts
return NextResponse.json({
  mode: "fallback",
  warning: "OpenAI authentication failed...",
  message: generateFallbackTwinAnswer(latestPrompt),
});
```

Result:
- Users still get answers
- UI clearly indicates fallback mode
- Better resilience in local/demo environments

---

## Step 8: Portfolio placeholder page
A separate route (`app/portfolio/page.tsx`) was added for future case studies.

This is useful because:
- You can link to it now
- Expand into a full portfolio later without redesigning navigation

---

## 5. Detailed Code Review (Beginner Lens)

### A. Separation of concerns
Good:
- UI logic in component file
- API logic in route file
- Prompt and fallback knowledge split into `lib/`

Why it matters:
- Easier debugging
- Easier future changes

### B. Type safety
Good:
- Explicit message types (`role`, `content`)
- Sanitization before processing user input

Potential beginner takeaway:
- Even simple type definitions prevent many runtime bugs.

### C. User experience
Good:
- Keyboard shortcuts
- Loading indicators
- Error visibility
- Status mode visibility
- Responsive design

### D. Styling architecture
Good:
- CSS variables for consistency
- Component class patterns (`.twin-*`, `.panel`, `.button`)
- Animations are subtle, not distracting
- Reduced-motion support included

### E. Reliability strategy
Good:
- OpenAI-first with graceful fallback
- No silent failures
- Keeps the app useful even under auth/network issues

---

## 6. How to Continue Learning from This Project

If you are a beginner, try these exercises in order:

1. Change one stat card value in `app/page.tsx`.
2. Add one new starter prompt in `digital-twin-chat.tsx`.
3. Add one new fallback intent in `digital-twin-fallback.ts`.
4. Change one accent color in `globals.css` and see the theme update.
5. Add one more section (for example: "Projects") to the homepage.

---

## 7. Self-Review: 5 Improvements to Make Next

1. Add persistent chat history.
Store messages in local storage (or a database) so conversation survives page refresh.

2. Add streaming responses.
Use server-sent events or streaming response handling so users see tokens appear live.

3. Strengthen input/output safety.
Add stricter validation/rate limiting and content filtering for production use.

4. Extract reusable UI components.
Move repeated section/card patterns into reusable components to reduce page file size.

5. Add automated tests.
Create unit tests for fallback logic and integration tests for `/api/digital-twin` behavior.

---

If you want, I can also generate a second file called `tutorial-advanced.md` that explains the same project from a mid-level engineer perspective (architecture decisions, performance, and production-hardening). 
