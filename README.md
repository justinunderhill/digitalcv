# Justin Underhill Portfolio

A Next.js portfolio site for Justin Underhill, focused on AI systems engineering, agentic AI development, AI automation architecture, and delivery leadership.

The site includes a profile-driven Digital Twin chat. When `OPENAI_API_KEY` is configured, the chat uses OpenAI's Responses API. If the key is missing or OpenAI is unavailable, the API serves deterministic fallback answers grounded in the local profile context.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- OpenAI Node SDK
- ESLint with Next.js rules

## Local Setup

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
OPENAI_API_KEY=your_api_key_here
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Project Structure

- `app/page.tsx` - main portfolio homepage
- `app/portfolio/page.tsx` - portfolio hub placeholder
- `app/components/digital-twin-chat.tsx` - client chat component
- `app/api/digital-twin/route.ts` - server route for Digital Twin responses
- `lib/digital-twin-context.ts` - profile context for OpenAI grounding
- `lib/digital-twin-fallback.ts` - local fallback response logic

## Production Notes

- Keep `.env` files out of version control.
- Configure `OPENAI_API_KEY` in the deployment environment.
- The chat API includes a simple in-memory rate limit. For a multi-instance production deployment, replace it with a shared store or edge-layer rate limiting.
- Remote font fetching is intentionally avoided so builds remain deterministic in restricted or offline CI environments.

## Deployment

This app can be deployed to Vercel or any platform that supports Next.js App Router applications.
