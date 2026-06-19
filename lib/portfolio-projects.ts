export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  detail: string;
  liveUrl: string;
  overview: string;
  problem?: string;
  approach?: string;
  result?: string;
  architecture?: string;
  deepDives?: { title: string; body: string }[];
  nextSteps?: string[];
  catalog?: string[];
  processNote?: string;
  buildFocus?: string[];
  skills: string[];
  proofPoints?: string[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "fanbrain",
    title: "FanBrain AI",
    category: "AI Football Prediction Game",
    detail:
      "Predict World Cup scores, track your picks, join private leagues, and let AI reveal what kind of fan you really are — no betting, just bragging rights.",
    liveUrl: "https://fanbrainai.com/",
    overview:
      "A mobile-first prediction game for the 2026 World Cup, live in production at fanbrainai.com. Fans call scorelines before kickoff, get an AI football pundit's verdict (and an optional roast), earn points when the real result lands, climb a global leaderboard, compete in private leagues with friends, and unlock a shareable \"fan personality\" profile generated from how they actually predict. I designed, built, and shipped the entire product solo — product thinking, data model, AI system, full-stack app, auth and security, background jobs, push notifications, PWA, and the viral share loop — and run it as a live, continuously-deployed service. This write-up goes deep on the engineering, because the engineering is the point.",
    problem:
      "Big tournaments generate enormous fan energy, but most of the apps that channel it are gambling products. FanBrain is the opposite: a prediction game built for entertainment, where the AI does something genuinely useful — it interprets, explains, classifies, and entertains — instead of being a chatbot bolted onto a CRUD app. That framing drove one hard architectural principle that shows up everywhere in the code: the AI is never the source of truth. Structured facts come from the database; AI is commentary layered on top.",
    approach:
      "Next.js App Router (TypeScript, strict) + Tailwind on the front, Supabase (Postgres, Auth, row-level security) for data and identity, OpenAI for all generative text, and Vercel for hosting and cron — continuously deployed on main. Match data is imported from a real fixtures API (football-data.org); points are awarded by deterministic, testable code; and the LLM is explicitly forbidden from inventing scores, fixtures, injuries, or odds. Every AI call runs server-side through its own route handler, and all prompts live in one reviewable file so the safety rules sit in a single place rather than scattered through components.",
    result:
      "A live, production product that wires an LLM into a real game loop with a clean separation of concerns — the AI entertains and characterises while a deterministic engine owns the competitive truth. The global leaderboard is populated with real users and predictions, private leagues give it a social loop, web push brings people back when their result lands, and the PWA plus mobile polish make it feel like a native app rather than a prototype.",
    architecture:
      "The app runs on Next.js App Router — server components for data and auth, dedicated server route handlers for every AI call, and a Serwist service worker for the PWA layer. Supabase Postgres holds the data behind row-level security; OpenAI (gpt-4.1-mini) is called server-side only; and a single Vercel Cron endpoint imports fixtures and results from football-data.org, settles points deterministically, and fires batched push notifications. The boundary is deliberate: facts flow from Postgres and the fixtures API, never from the model.",
    deepDives: [
      {
        title: "Security designed at the database layer, not the app layer",
        body: "Authorization lives in Postgres, not in hand-written if-checks scattered through route handlers. Every table has row-level security enabled with deliberately narrow grants — users can only read and write their own predictions and profile. Operations that can't be expressed as a simple row policy run through SECURITY DEFINER functions: joining a private league by invite, creating one, transferring ownership, and the members-only leaderboard all route through definer functions with explicit checks inside, so there's intentionally no blanket insert grant on league membership. The membership check is itself a definer function so its RLS policy can't recurse into itself. Share tokens are unguessable UUIDs read only via the service-role client server-side, and the kickoff lock-out is enforced by a BEFORE trigger — you physically cannot write a prediction after kickoff, no matter how you craft the request. The principle: make the wrong thing impossible at the lowest layer, not merely discouraged at the highest.",
      },
      {
        title: "Deterministic scoring, generative commentary — strictly separated",
        body: "scorePrediction() is about ten lines of pure, testable logic: an exact score is worth 5, the right outcome 3, otherwise 0. The AI never awards points — it only ever produces text. That keeps scoring auditable and reproducible while leaving the LLM free to be creative without ever being load-bearing for correctness. It's the single most important design decision in the product, and the same discipline as ScamCheck's escalate-only AI.",
      },
      {
        title: "Prompt engineering as a guardrail surface",
        body: "All prompts live in one file so the safety rules are reviewable in one place. Each one pins the persona and a word budget, and hard-codes its prohibitions inline: no betting or odds language, no fabricated team news or match events, no claims of certainty. The roast prompt is told to roast the pick, not the person — no profanity, no slurs, no protected-class insults. The personality classifier returns structured JSON (an archetype plus four 0–100 scores and a summary) and is instructed to use only prediction behaviour, never sensitive personal traits. The constraints are part of the contract, not an afterthought.",
      },
      {
        title: "An idempotent background job that does four things safely",
        body: "A single Vercel Cron endpoint imports fixtures and results (upsert on a stable external ID, safe to re-run), settles points for newly-final matches but only writes when the computed points actually differ, sends \"your result is in\" push notifications guarded by an idempotency column, and sends deadline reminders guarded by a log table keyed on user-and-match. The notification steps are wrapped in try/catch so a push-delivery hiccup can never fail the sync that already settled the points, and the endpoint is auth'd with a shared secret and accepts both the scheduled trigger and manual runs. Idempotent, partially-degradable, and re-runnable without fear — production-grade job design.",
      },
      {
        title: "The viral loop: dynamic Open Graph image generation",
        body: "Growth was a first-class feature, not an afterthought. Every shareable artifact — your fan profile, an individual prediction, your leaderboard rank — has a public, token-gated page and a server-rendered Open Graph image generated on the fly from your real data. Drop the link in a group chat and it unfurls into a rich, branded card. (I also tracked down a real gotcha here: ImageResponse routes need connection() or they 404 under next start — the kind of sharp edge you only find by shipping.)",
      },
      {
        title: "Pragmatic, honestly-documented trade-offs",
        body: "The in-memory rate limiter is my favourite example of judgement over dogma. It's a sliding-window limiter living in process memory, and the code documents exactly what that means in serverless: it's per-instance, not a strict global guarantee, so it reliably blunts naive request loops but isn't a hard cross-region cap. The comment even names the upgrade path — back it with Upstash/Vercel KV, and the call sites won't change. Shipping the right-sized solution and being honest about its limits is worth more than gold-plating under time pressure.",
      },
    ],
    nextSteps: [
      "Back the rate limiter with a shared store (Upstash) to make it a strict global cap.",
      "A lightweight test harness around the scoring and streak logic — already pure functions, built to be tested.",
      "AI match previews and team-form context fed as structured input, preserving the no-fabrication rule.",
      "Server-side analytics on the share loop to measure k-factor and tune the Open Graph cards.",
    ],
    processNote:
      "Designed and built solo, from blank repo to live product. It's continuously deployed on main — private leagues, push notifications, the share loop, and the PWA were layered onto a working core loop rather than big-banged, and I deploy and check the running product, not just the test suite. The codebase is heavily commented with the why behind each decision, not just the what.",
    skills: [
      "Next.js (App Router)",
      "TypeScript (strict)",
      "Tailwind CSS",
      "Supabase (Auth, Postgres, RLS)",
      "Postgres (RLS, SECURITY DEFINER, triggers)",
      "OpenAI API",
      "Deterministic scoring engine",
      "Idempotent cron jobs",
      "Web push (VAPID)",
      "Dynamic Open Graph images",
      "PWA / Serwist service worker",
      "Vercel (hosting + cron)",
    ],
    proofPoints: [
      "Ambiguity to product, solo: started from a one-line ambition and made every call myself — the no-betting positioning, the seven fan archetypes, the points scheme, and the retention mechanics (streaks, leagues, push).",
      "AI integrated responsibly: the LLM is treated as a component with a contract and guardrails, kept strictly non-load-bearing for correctness, with a fact/commentary boundary that makes it safe to put in front of real users.",
      "Full-stack ownership end to end: data modelling, row-level security, auth, background jobs, push infrastructure, PWA, and front-end polish — no layer handed off.",
      "Ship, observe, iterate: continuously deployed and live, with real users on the leaderboard, and growth engineered in through token-gated share pages and dynamic Open Graph cards.",
    ],
  },
  {
    slug: "scamcheck",
    title: "ScamCheck",
    category: "AI Scam / Phishing Detector",
    detail:
      "Paste a suspicious link or message and ScamCheck tells you in plain language whether it's safe, suspicious, or dangerous — and why.",
    liveUrl: "https://scamcheck-three.vercel.app/",
    overview:
      "A single-page web app where a non-technical person can paste a URL — or the whole message it arrived in — and get back a clear risk verdict with specific, plain-language reasons and a learning tip for each finding. It aggregates professional threat-intelligence sources, in-house heuristics, and an AI layer behind one calm, jargon-free interface, built for everyday people who have no fast way to sanity-check a link before clicking. A solo personal project, live in production.",
    problem:
      "Non-technical people get caught by phishing and scam links every day and have no trustworthy, fast way to verify a URL before clicking or handing over personal and payment details. Existing tools are either too technical or buried in security-vendor dashboards. ScamCheck gives a plain answer in seconds — and teaches users what makes a link suspicious so they get better at spotting scams themselves.",
    approach:
      "Three deterministic sources run concurrently and aggregate into a single 0–100 risk score with documented thresholds: Google Web Risk (Google's live phishing/malware blocklist), VirusTotal (verdicts from 70+ engines), and in-house heuristics with no external call — newly-registered domains via WHOIS, leetspeak-aware typosquatting by edit distance, raw-IP hosts, excessive subdomains, expanded URL shorteners, abused TLDs, punycode/homograph characters, embedded-credential tricks, and invalid HTTPS certs. When the user pastes the surrounding message, a fourth AI source flags social-engineering patterns. The defining design choice is the guardrail: AI can only escalate risk, never downgrade it — enforced mechanically through the scoring math (AI findings carry non-negative weights and the model never emits a standalone 'safe' verdict), not by trusting the model. Sources that are down or rate-limited are reported as unavailable rather than failing the request, and a clean result says 'no known threats found,' never 'this link is safe.'",
    result:
      "A working, deployed consumer tool that proves out a multi-source detection pipeline with a genuinely safe AI integration — one where the LLM adds insight and plain-language explanation without ever being able to overrule the deterministic threat data. It demonstrates applied LLM engineering with hard guardrails, real third-party API integration, and production-grade abuse and cost protection, not a prompt-wrapper demo.",
    skills: [
      "React 18 + Vite",
      "TypeScript",
      "FastAPI (async)",
      "Anthropic Claude (Haiku 4.5 + Sonnet 4.6)",
      "Google Web Risk API",
      "VirusTotal API",
      "Upstash Redis",
      "Threat heuristics (WHOIS, homograph, typosquatting)",
      "Vercel serverless",
    ],
    proofPoints: [
      "Safe-by-design AI: the escalate-only invariant is enforced through the scoring math, not by trusting the model — a concrete, demonstrable guardrail.",
      "Concurrent multi-source aggregation with graceful degradation — combines Google Web Risk, VirusTotal, heuristics, and AI in parallel, and still returns a useful verdict when a source is down.",
      "Production abuse and cost engineering: per-IP rate limits, free-tier caps, and a global AI-spend interlock on a serverless-friendly Redis store, with a deliberate fail-open (user limits) vs. fail-closed (AI budget) split.",
    ],
  },
  {
    slug: "finally",
    title: "FinAlly",
    category: "AI Trading Workstation",
    detail:
      "A real-time trading workstation where you manage a portfolio by talking to it.",
    liveUrl: "https://finally-beryl.vercel.app/",
    overview:
      "A Bloomberg-style trading workstation that streams live prices and lets an LLM assistant analyse holdings and execute trades from natural-language instructions. Built as a course capstone, entirely via agentic coding workflows.",
    problem:
      "Trading interfaces are dense and intimidating, and the gap between 'seeing your positions' and 'acting on them' usually means menus, forms, and manual order entry.",
    approach:
      "Built a Bloomberg-style workstation that streams live prices over SSE, visualises a portfolio as a heatmap and P&L chart, and adds an LLM assistant that analyses holdings and executes trades from natural-language instructions — Next.js + FastAPI in a single Docker container, with structured-output LLM calls driving the trade logic.",
    result:
      "Demonstrates end-to-end agentic product delivery — real-time data streaming, a stateful simulated portfolio, and an LLM wired safely into actions rather than just chat. Built entirely via coding agents as a course capstone.",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "FastAPI",
      "SQLite",
      "SSE streaming",
      "LiteLLM / OpenRouter",
      "Docker",
      "Structured-output LLM calls",
    ],
  },
  {
    slug: "prelegal",
    title: "PreLegal",
    category: "AI Legal Document Builder",
    detail:
      "Pick from eleven agreement types, or let the AI help you choose, and get a finished downloadable contract.",
    liveUrl: "https://prelegal-zeta.vercel.app/login/",
    overview:
      "A SaaS document builder for routine legal agreements — NDAs, service contracts, GDPR DPAs, HIPAA BAAs, licensing, and more — where an AI assistant guides the user to the right document, fills the fields via structured generation, and outputs a finished PDF.",
    problem:
      "Routine legal documents — NDAs, service agreements, DPAs, HIPAA BAAs, licensing — are template-driven but still leave people unsure which document they need and how to complete it correctly. Slow, error-prone, and not worth a lawyer's hourly rate for standard agreements.",
    approach:
      "Built a SaaS document builder with a catalog of eleven agreement types spanning confidentiality, commercial services, data-protection compliance (GDPR DPA, HIPAA BAA), IP and licensing, and an AI-specific addendum. An AI assistant helps the user choose the right document and walks them through the fields, then an LLM with Structured Outputs populates the template, renders a live preview, and produces a downloadable PDF.",
    result:
      "A working multi-document legal-drafting product covering regulated domains end to end — catalog-driven, AI-guided selection, structured generation mapped to real contract fields, and a finished PDF deliverable. Proves the pattern that turns an LLM from \"answers questions\" into \"produces usable legal work.\"",
    catalog: [
      "Mutual NDA",
      "Cloud Service Agreement",
      "Data Processing Agreement (GDPR)",
      "Professional Services Agreement",
      "Service Level Agreement",
      "Design Partner Agreement",
      "Partnership Agreement",
      "Pilot Agreement",
      "Business Associate Agreement (HIPAA)",
      "Software License Agreement",
      "AI-Specific Addendum",
    ],
    processNote:
      "Built via an agentic coding workflow — features specced in Jira, developed through a 7-step process with unit and integration tests, and shipped via GitHub PRs.",
    skills: [
      "FastAPI",
      "Docker",
      "SQLite",
      "OpenAI Structured Outputs (gpt-4.1)",
      "PDF generation",
      "Authentication",
    ],
  },
  {
    slug: "the-abbotsford",
    title: "The Abbotsford",
    category: "Property marketing + lead-to-CRM sales system",
    detail:
      "Marketing site for a 16-unit Johannesburg duplex development — gallery, floor plans, unit pricing and availability, and a register-interest form that feeds every enquiry into Zoho CRM as a structured sales lead.",
    liveUrl: "https://theabbotsford.vercel.app/",
    overview:
      "Marketing site for The Abbotsford, a Johannesburg development of 16 new duplex residences. The site walks a buyer from \"urban sanctuary\" positioning through gallery and amenities, into floor plans, unit availability and pricing, and out to the sales agents via a register-interest form and WhatsApp. That form is the front of a complete lead-to-CRM sales system: every enquiry is captured on site and pushed into Zoho CRM as a structured, qualified lead via a custom Zoho CRM API integration, so agents follow up from the CRM instead of chasing inbox messages.",
    buildFocus: [
      "Creating a polished property presentation without overwhelming the visitor.",
      "Balancing premium positioning with practical information hierarchy.",
      "Designing a visual flow that supports enquiry intent while protecting contact privacy here.",
      "Routing every register-interest enquiry into Zoho CRM as a structured sales lead, mapped to custom fields built for the development.",
    ],
    processNote:
      "Lead capture runs through a complete lead-to-CRM sales system: I built the custom lead fields in Zoho CRM, set up the OAuth client and self-client flow in Postman to mint the authorization and refresh tokens, and wired the register-interest form to post structured leads into the CRM via the Zoho CRM API.",
    skills: [
      "Landing page design",
      "Visual hierarchy",
      "Responsive UI",
      "Conversion flow",
      "Zoho CRM API",
      "OAuth 2.0 token flow",
      "Postman",
      "Lead-capture integration",
    ],
    proofPoints: [
      "Demonstrates ability to build a high-trust marketing experience.",
      "Shows judgement around product/place presentation and buyer intent.",
      "Delivers a working sales pipeline, not just a brochure — enquiries land in Zoho CRM ready for follow-up.",
    ],
  },
  {
    slug: "renoclean-sa",
    title: "RenoClean SA",
    category: "Specialist service + lead-to-CRM sales system",
    detail:
      "Service site for a Cape Town post-renovation cleaning specialist — clear offer, trust signals, and an enquiry form that feeds every lead into Zoho CRM as a structured sales lead.",
    liveUrl: "https://renoclean-sa.vercel.app/",
    overview:
      "Service-business site for RenoClean SA, a Cape Town post-renovation and construction cleaning specialist. Built to make the offer clear, build trust quickly, and give visitors a direct path to enquiry without exposing client contact details from the live portfolio entry. Enquiries flow through a complete lead-to-CRM sales system: each one is captured on site and pushed into Zoho CRM as a structured, qualified lead via a custom Zoho CRM API integration, ready for follow-up.",
    buildFocus: [
      "Clarifying the service offer for a specific customer need.",
      "Building trust through concise service framing and professional presentation.",
      "Creating a conversion-minded page flow that gives the live service site a clear commercial path.",
      "Routing every enquiry into Zoho CRM as a structured sales lead via a custom API integration.",
    ],
    processNote:
      "Lead capture runs through a complete lead-to-CRM sales system: custom lead fields built in Zoho CRM, the OAuth client and self-client flow set up in Postman to mint the authorization and refresh tokens, and the enquiry form wired to post structured leads into the CRM via the Zoho CRM API.",
    skills: [
      "Service positioning",
      "Conversion UX",
      "Responsive design",
      "Zoho CRM API",
      "OAuth 2.0 token flow",
      "Postman",
      "Lead-capture integration",
    ],
    proofPoints: [
      "Shows practical small-business web delivery capability.",
      "Demonstrates service clarity and conversion-focused information hierarchy.",
      "Delivers a working sales pipeline, not just a brochure — enquiries land in Zoho CRM ready for follow-up.",
    ],
  },
  {
    slug: "clinical-emergencies",
    title: "Clinical Emergencies",
    category: "Healthcare support + lead-to-CRM sales system",
    detail:
      "Healthcare information site prioritising fast, clear access to urgent service details for South African families, with enquiries wired straight into a complete lead-to-CRM sales system on Zoho CRM.",
    liveUrl: "https://clinical-emergencies.vercel.app/",
    overview:
      "Healthcare-support site for urgent medical assistance and home medical equipment, aimed at South African families. The core design problem is clarity under pressure: a visitor needs to understand the service, trust the offer, and find the right path quickly. Enquiries don't just land in an inbox — they're pushed into Zoho CRM as structured leads so nothing slips between the website and follow-up.",
    buildFocus: [
      "Prioritising accessible, direct service information.",
      "Designing for users who may be making decisions under time pressure.",
      "Balancing professional credibility with simple navigation and clear next steps.",
      "Capturing enquiries directly into Zoho CRM as qualified leads, mapped to custom fields built for this business.",
    ],
    processNote:
      "Lead capture runs through a complete lead-to-CRM sales system: I built the custom lead fields in Zoho CRM, set up the OAuth client and self-client flow in Postman to mint the authorization and refresh tokens, and wired form submissions to post structured leads into the CRM via the Zoho CRM API.",
    skills: [
      "UX clarity",
      "Healthcare service design",
      "Information hierarchy",
      "Responsive UI",
      "Zoho CRM API",
      "OAuth 2.0 token flow",
      "Postman",
      "Lead-capture integration",
    ],
    proofPoints: [
      "Demonstrates sensitivity to high-trust, high-urgency user contexts.",
      "Shows ability to structure service information for fast comprehension.",
      "Connects a marketing front end to a real CRM lead pipeline via custom API integration.",
    ],
  },
];

export function getPortfolioProject(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}
