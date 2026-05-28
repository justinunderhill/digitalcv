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
    category: "Property showcase",
    detail:
      "Marketing site for a 16-unit Johannesburg duplex development — gallery, floor plans, unit pricing and availability, and a direct route to the sales agents.",
    liveUrl: "https://theabbotsford.vercel.app/",
    overview:
      "Marketing site for The Abbotsford, a Johannesburg development of 16 new duplex residences. The site walks a buyer from \"urban sanctuary\" positioning through gallery and amenities, into floor plans, unit availability and pricing, and out to the sales agents via a register-interest form and WhatsApp.",
    buildFocus: [
      "Creating a polished property presentation without overwhelming the visitor.",
      "Balancing premium positioning with practical information hierarchy.",
      "Designing a visual flow that supports enquiry intent while protecting contact privacy here.",
    ],
    skills: ["Landing page design", "Visual hierarchy", "Responsive UI", "Conversion flow", "Content structure"],
    proofPoints: [
      "Demonstrates ability to build a high-trust marketing experience.",
      "Shows judgement around product/place presentation and buyer intent.",
      "Highlights design consistency across desktop and mobile layouts.",
    ],
  },
  {
    slug: "renoclean-sa",
    title: "RenoClean SA",
    category: "Specialist service",
    detail:
      "Service site for a Cape Town post-renovation cleaning specialist — clear offer, trust signals, and a direct path to enquiry.",
    liveUrl: "https://renoclean-sa.vercel.app/",
    overview:
      "Service-business site for RenoClean SA, a Cape Town post-renovation and construction cleaning specialist. Built to make the offer clear, build trust quickly, and give visitors a direct path to enquiry without exposing client contact details from the live portfolio entry.",
    buildFocus: [
      "Clarifying the service offer for a specific customer need.",
      "Building trust through concise service framing and professional presentation.",
      "Creating a conversion-minded page flow that gives the live service site a clear commercial path.",
    ],
    skills: ["Service positioning", "Conversion UX", "Responsive design", "SEO fundamentals", "Trust signals"],
    proofPoints: [
      "Shows practical small-business web delivery capability.",
      "Demonstrates service clarity and conversion-focused information hierarchy.",
      "Connects digital marketing experience with front-end execution.",
    ],
  },
  {
    slug: "clinical-emergencies",
    title: "Clinical Emergencies",
    category: "Healthcare support",
    detail:
      "Healthcare information site prioritising fast, clear access to urgent service details for South African families.",
    liveUrl: "https://clinical-emergencies-vert.vercel.app/",
    overview:
      "Healthcare-support site for urgent medical assistance and home medical equipment, aimed at South African families. The core design problem is clarity under pressure: a visitor needs to understand the service, trust the offer, and find the right path quickly.",
    buildFocus: [
      "Prioritising accessible, direct service information.",
      "Designing for users who may be making decisions under time pressure.",
      "Balancing professional credibility with simple navigation and clear next steps.",
    ],
    skills: ["UX clarity", "Healthcare service design", "Information hierarchy", "Responsive UI", "Accessibility thinking"],
    proofPoints: [
      "Demonstrates sensitivity to high-trust, high-urgency user contexts.",
      "Shows ability to structure service information for fast comprehension.",
      "Reflects practical judgement around tone, layout, and user confidence.",
    ],
  },
];

export function getPortfolioProject(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}
