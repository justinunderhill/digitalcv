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
    slug: "medical-aid-navigator",
    title: "Medical Aid Navigator",
    category: "Medical Aid Navigator",
    detail:
      "Pick your medical-aid situation — an emergency, a specialist referral, registering a chronic condition, a rejected claim — and get a plain-English checklist of exactly what to ask, which codes and documents to request, and what to watch out for before you use your benefits.",
    liveUrl: "https://medical-aid-navigator.vercel.app/",
    overview:
      "An educational, AI-assisted tool that helps South African medical-aid members understand what to ask, check, and document before, during, and after using their benefits. A member picks one of ten real situations (or describes their own and lets an AI classifier route them), answers a few guided questions, and gets a tailored, plain-English checklist — the questions to put to their scheme, the ICD-10 and tariff codes and authorisation numbers to request, the co-payment and network risks to watch — which they can export as a PDF. It is deliberately scheme-neutral and explicitly not medical, broker, legal, or financial advice, and not a guarantee of any claim outcome. I designed and built it solo and ship it as a live MVP, currently gathering real-world feedback. This write-up goes deep on the engineering, because in a health-and-money domain the engineering — specifically the safety architecture — is the point.",
    problem:
      "Medical-aid documents are detailed, technical, and hard to interpret in the moment — and most people only go looking for answers when they're already stressed, sick, injured, or trying to help a family member. That's exactly the moment to not drop a chatbot that confidently invents benefit limits or tells someone a claim \"will be covered.\" The hard problem isn't generating helpful text; it's building an AI tool for a high-stakes domain that stays safe even when the AI is wrong, down, or manipulated.",
    approach:
      "A safety-first request pipeline where the AI is the last and least-trusted component. Every request runs: rate limit → deterministic emergency detection that never calls the AI → grounded AI generation fed only my own curated knowledge base → an output validator that scans and softens forbidden phrasing → a disclaimer appended to every result. The LLM is explicitly forbidden from inventing scheme rules, plan names, benefit limits, codes, or PMB status, and the app is scheme-neutral by design — it teaches the right questions to ask rather than encoding any named scheme's plan data. Stack: Next.js 15 (App Router, TypeScript) on Vercel, a provider-agnostic AI layer defaulting to Anthropic Claude Sonnet 4.6 (OpenAI swappable), an editable markdown knowledge base, optional anonymous Supabase feedback, and client-side PDF export. Stateless and POPIA-aware: no accounts, no member or ID numbers.",
    result:
      "A live MVP that demonstrates how to put an LLM into a health-and-money context responsibly — where it explains and asks good questions but is mechanically prevented from diagnosing, guaranteeing claims, giving broker advice, or burying an emergency. The same fact/commentary discipline as my other AI work, applied where the stakes are highest: structured safety guidance comes from deterministic code, and AI is layered on top, never load-bearing for the parts that could hurt someone.",
    architecture:
      "The app runs on Next.js App Router on Vercel serverless (Node runtime). POST /api/navigate is the spine: rate limit, then detectEmergency() (pure, no network), then grounded generation through the AIProvider interface, then JSON parse with a safe fallback checklist, then validateOutput() on every field, then the standard disclaimer. A second route, /api/classify-scenario, routes free-text \"I'm not sure\" input to a scenario — but checks for emergencies deterministically first, so a crisis is never routed through the LLM. Content (scenarios, concept explainers, the system prompt, emergency keywords) lives in editable files separate from logic, so the knowledge base can be tuned without touching code.",
    deepDives: [
      {
        title: "Safety that does not depend on the AI",
        body: "The single most important design decision. Emergency detection is fully deterministic — keyword, scenario, and structured-flag matching with no network call — and runs before the AI is ever invoked. If someone describes chest pain or a child not breathing, they get static, hard-coded urgent-care guidance (call 10177 / 112, don't delay for benefits) even if the AI provider is down, slow, rate-limited, or manipulated by injected input. The layer is deliberately tuned to allow false positives (a needless emergency notice is cheap) but never false negatives (missing a real one). Even the AI's fallback path — when generation fails or returns unparseable output — leads with an always-safe urgent-care message, because a fallback can't know whether the keyword scan missed something.",
      },
      {
        title: "Grounded generation, scheme-neutral by design",
        body: "The LLM is fed only my own curated /content knowledge base and is forbidden from inventing scheme rules, plan names, benefit limits, prices, codes, or formulary details — if it isn't grounded, it must say so and tell the user to confirm with their scheme. I deliberately don't encode any named scheme's plan limits: they change yearly, vary by plan, and can't be reliably guaranteed from public information, so encoding them is both an accuracy risk and a legal one. Instead the tool teaches the right questions to ask your own scheme. That's a judgement call to ship less and be correct, rather than more and be wrong.",
      },
      {
        title: "Output validation as a second wall",
        body: "Never trust the prompt alone. After generation, every field is scanned by a rules layer for phrasing that would turn educational navigation into something dangerous: claim guarantees (\"will be covered\" becomes \"may be covered — confirm with your scheme\"), self-declared PMB status, telling someone they don't need care, broker or scheme-switching advice, and accusatory scheme-blaming. Hard violations are auto-softened and flagged for monitoring; softer cautions are logged. The system prompt forbids these and this layer catches anything that slips through — belt and braces. It's the same escalate-only discipline as ScamCheck, enforced in code rather than trusted to the model.",
      },
      {
        title: "A provider-agnostic AI layer behind a clean interface",
        body: "All AI sits behind a single AIProvider interface; the rest of the app never knows which model is active. Anthropic Claude Sonnet 4.6 is the default because it adheres more reliably to the refusal and guardrail instructions that matter here, with OpenAI swappable via one env var. User free text is wrapped in explicit delimiters and treated as data, not instructions, and the system prompt is told to ignore any embedded attempt to change its rules — a pragmatic prompt-injection posture for an MVP.",
      },
    ],
    nextSteps: [
      "Broaden and deepen the grounding knowledge base, and add structured per-scheme question sets while keeping the no-fabrication rule.",
      "Act on real-world feedback from the live MVP to decide what's genuinely useful before expanding scope.",
      "Back the in-memory rate limiter with a shared store (Upstash / Vercel KV) for a strict cross-instance cap.",
      "Expand the automated safety test suite around emergency detection and the output validator.",
    ],
    processNote:
      "Designed and built solo as a live MVP, and shipped to gather real feedback before deciding what to build next. Safety, knowledge, AI, and data are cleanly separated layers, and the entire knowledge base — scenarios, explainers, the system prompt, even the emergency keyword list — lives in editable content files so the guidance can be tuned without touching application logic. The code is heavily commented with the why behind each safety decision.",
    skills: [
      "Next.js (App Router)",
      "TypeScript",
      "Anthropic Claude (Sonnet 4.6)",
      "Provider-agnostic AI abstraction",
      "Deterministic safety layer",
      "Prompt engineering as guardrails",
      "Output validation / content filtering",
      "Grounded generation (RAG-style)",
      "Supabase",
      "PDF generation (jsPDF)",
      "Vercel serverless",
      "POPIA-aware / stateless design",
    ],
    proofPoints: [
      "Safety-first AI architecture: the LLM is the last and least-trusted component — emergency guidance is deterministic and AI-independent, so the tool stays safe even if the model is down, wrong, or manipulated.",
      "Guardrails enforced in code, not hoped for in a prompt: grounded generation plus a post-generation validator that mechanically softens claim guarantees, diagnosis, and broker advice.",
      "Judgement in a regulated domain: scheme-neutral by deliberate choice, explicitly not advice, POPIA-aware and stateless — shipping the correct-and-honest thing over the impressive-but-risky one.",
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
