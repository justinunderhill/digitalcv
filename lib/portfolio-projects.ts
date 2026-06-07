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
      "Predict match scores and AI hands back a verdict, a safe roast, and a read on what kind of fan you really are — no betting, just bragging rights.",
    liveUrl: "https://fanbrainai.vercel.app/",
    overview:
      "A mobile-first football prediction game built around the 2026 World Cup. Fans predict scorelines, earn points on a deterministic scoring system, and get back AI-generated verdicts, playful (non-abusive) roasts, match debriefs, and an evolving fan-personality profile. Auth, a leaderboard, and a fixture model sit behind it. A solo personal project — a working MVP deployed on Vercel with a seeded starter fixture set and a documented path to a live fixture API.",
    problem:
      "There's a gap between casually watching football and actually engaging with it, and the apps that fill that gap mostly do it with gambling. FanBrain gamifies match predictions without money on the line — turning a scoreline guess into AI analysis, banter, and bragging rights.",
    approach:
      "Next.js App Router + TypeScript + Tailwind front end, with Supabase handling auth (magic link / email-password), the Postgres schema, row-level security, and seed data. Four purpose-built OpenAI route handlers turn a single prediction into distinct outputs — a verdict, a safe roast, a match debrief, and a fan-personality profile. The defining design choice: AI never awards points. Scoring is fully deterministic in scoring.ts (5 for an exact score, 3 for the right outcome, 0 for wrong), so the model only ever adds colour and personality and can never move the standings. Provider secrets stay server-side and match data is cached in Supabase rather than called from the client.",
    result:
      "A working, deployed MVP that wires an LLM into a real product loop with clear separation of concerns — the AI entertains and characterises, while a deterministic engine owns the competitive truth. Demonstrates a full auth + leaderboard + RLS data model on Supabase and multiple task-specific AI outputs from one user action, not a single chat box.",
    skills: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Supabase (Auth, Postgres, RLS)",
      "OpenAI API",
      "Deterministic scoring engine",
      "Vercel",
    ],
    proofPoints: [
      "AI stays in its lane: scoring is deterministic and the LLM can never award or change points — the same separation-of-concerns discipline as ScamCheck's escalate-only AI.",
      "Four task-specific AI outputs (verdict, safe roast, debrief, fan-personality profile) from one prediction — purpose-built generation, not a generic chatbot.",
      "Full auth + leaderboard on a Supabase RLS data model, with provider secrets kept server-side and match data cached rather than called from the client.",
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
