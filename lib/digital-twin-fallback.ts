function hasAny(text: string, terms: string[]) {
  return terms.some((term) => text.includes(term));
}

const workHistoryAnswers = [
  {
    terms: ["bottomline", "digital project specialist"],
    answer:
      "At Bottomline SA, the work was about getting a client's business online properly and quickly: a corporate website plus the digital marketing strategy around it, all inside a tight 4-month window.\n\nMy role sat across the full project shape: requirements, budgets, schedules, planning, reporting, client and team coordination, supplier relationships, market research, and risk management. It was one of those roles where delivery discipline mattered as much as the digital work itself.",
  },
  {
    terms: ["wetpaint", "wet paint", "analytics", "reporting"],
    answer:
      "At Wet Paint, I was focused on analytics, tracking, and reporting quality. The goal was to assess what had already been implemented for clients, improve it where needed, and build clearer reports using new reporting software.\n\nA lot of the value was in making the numbers trustworthy: checking report accuracy, investigating issues, finding trends, training people on new systems, and turning raw data into something management and clients could actually use.",
  },
  {
    terms: ["kadraa", "digital & tech consultant", "digital and tech consultant"],
    answer:
      "At Kadraa, I was there to help the executive team better understand digital and technical hiring requirements.\n\nThat meant running workshops around web development roles, helping junior team members identify stronger technical candidates, and joining client conversations where a more technical read of the hiring need was useful.",
  },
  {
    terms: ["xynaty", "client relations"],
    answer:
      "At Xynaty, the work was client-relationship heavy and covered UK, Australian, Canadian, and US markets.\n\nThe job was to keep long-term customer relationships healthy: understand client needs, resolve issues, create plans, advise on better processes, support up-sell and cross-sell opportunities, keep contract expectations aligned, and work with internal teams when customers needed something fixed or improved.",
  },
  {
    terms: ["search kings", "searchkings", "google ads", "ppc"],
    answer:
      "At Search Kings Africa, my focus was performance: improving Google Ads accounts and getting better ROI from paid media.\n\nThat included managing Google Ads campaigns, optimizing landing pages, improving PPC and display campaigns, reading performance data, and developing paid search strategies that increased visibility without wasting budget.",
  },
  {
    terms: ["red september"],
    answer:
      "At Red September, I worked on campaign performance and digital project execution.\n\nThe role involved running campaigns across search, social, and mobile channels, setting up conversion tracking, using Google Analytics to understand campaign effectiveness, reporting on results, and looking for patterns in customer data that could improve traffic, leads, and sales.",
  },
  {
    terms: ["bpd", "social media"],
    answer:
      "At BPD Advertising, I handled social media strategy with a performance lens, not just posting content.\n\nI worked on KPIs, content planning, campaign measurement, SEO and engagement signals, collaboration with copy/design/marketing/sales teams, industry networking, and training or guiding team members where needed.",
  },
  {
    terms: ["digital lead", "channel development"],
    answer:
      "As Digital Lead at Neapolitan Digital, the work was about improving the digital customer experience across channels.\n\nI looked at contact trends, customer behavior, service improvement opportunities, operational drivers, baselining, and channel strategy. It was a useful bridge between data, customer experience, operations, and technical delivery.",
  },
  {
    terms: ["straight twisted", "senior developer"],
    answer:
      "At Straight Twisted, I moved into a more senior development and team-lead role.\n\nI was still hands-on with HTML, JavaScript, PHP, CSS, websites, and apps, but the role also involved leading other developers, delegating work, keeping projects on deadline, handling client and team meetings, bringing new technical ideas into the team, and owning quality control.",
  },
  {
    terms: ["wordpress", "word press", "neapolitan"],
    answer:
      "The WordPress years at Neapolitan Digital were the foundation of my technical career.\n\nI built front ends and back ends, created themes and plugins, handled site architecture, integrations, database and server work, security updates, performance testing, troubleshooting, client training, and live-site monitoring. That period gave me a very practical sense of how digital systems behave after launch.",
  },
];

const projectAnswers = [
  {
    terms: ["fanbrain", "fan brain", "football", "soccer", "prediction", "world cup"],
    answer:
      "FanBrain AI is a mobile-first football prediction game built around the 2026 World Cup — you call scorelines before kickoff, earn points when the real result lands, climb a global leaderboard, compete in private leagues with friends, and unlock a shareable 'fan personality' profile, plus AI verdicts, optional (non-abusive) roasts, and post-match debriefs. No betting, just bragging rights. I designed and built it solo, from a blank repo to a live, continuously-deployed product.\n\nIt's a Next.js App Router app (TypeScript strict) with Tailwind, Supabase for Postgres, Auth and row-level security, OpenAI called server-side only, web push, and a Serwist PWA — all on Vercel with a cron job. The whole thing is built around one principle: the AI is never the source of truth. Structured facts come from the database and a real fixtures API; AI is commentary layered on top.\n\nThe parts I'm proudest of are the engineering decisions. Authorization lives in Postgres, not app code — every table has RLS, private-league operations run through SECURITY DEFINER functions, and the kickoff lock-out is a BEFORE trigger, so you physically can't write a prediction after kickoff. Scoring is deterministic (5 exact, 3 right outcome, 0 wrong) and the AI never awards points — the same escalate-only discipline as ScamCheck. A single idempotent cron endpoint imports fixtures and results, settles points, and fires batched push notifications without ever double-notifying. And the viral share loop uses token-gated pages with server-rendered Open Graph images built from real user data. It's a solo personal project, live in production.\n\nLive site: https://fanbrainai.com/",
  },
  {
    terms: ["scamcheck", "scam", "phishing", "link check", "link safe"],
    answer:
      "ScamCheck is an AI scam and phishing detector — paste a suspicious link, or the whole message it arrived in, and you get back a plain-language verdict (Safe, Suspicious, or Dangerous), a 0–100 risk score, and a breakdown of each finding with a non-technical explanation and a 'what to look for next time' tip.\n\nUnder the hood, three deterministic sources run concurrently and aggregate into the score: Google Web Risk, VirusTotal (70+ engines), and my own heuristics — newly-registered domains via WHOIS, typosquatting by edit distance, raw-IP hosts, expanded URL shorteners, punycode/homograph characters, embedded-credential tricks, and invalid certs. If you paste the surrounding message, a fourth AI source flags social-engineering patterns. React + Vite frontend, Python/FastAPI backend, Anthropic Claude (Haiku 4.5 and Sonnet 4.6), Upstash Redis for abuse and cost controls, on Vercel.\n\nThe part I'm proudest of is the guardrail: the AI can only escalate risk, never downgrade it — enforced through the scoring math, not by trusting the model — and a clean result says 'no known threats found,' never 'this link is safe.' It's a solo personal project, built outside the curriculum and live in production.\n\nLive site: https://scamcheck-three.vercel.app/",
  },
  {
    terms: ["finally", "trading", "stock"],
    answer:
      "FinAlly is a real-time AI trading workstation — a Bloomberg-style portfolio screen where you manage holdings by talking to the system.\n\nIt streams live prices over SSE, visualises a portfolio as a heatmap and P&L chart, and adds an LLM assistant that analyses positions and executes simulated trades from natural-language instructions. Next.js and FastAPI run together in a single Docker container, with structured-output LLM calls driving the trade logic. Built as a course capstone, entirely via agentic coding workflows.\n\nThe useful signal is end-to-end agentic product delivery: real-time data, a stateful simulated portfolio, and an LLM wired safely into actions rather than just chat.\n\nLive site: https://finally-beryl.vercel.app/",
  },
  {
    terms: ["prelegal", "legal", "contract", "nda"],
    answer:
      "PreLegal is a live AI legal document builder — a SaaS where you pick from eleven agreement types (NDAs, service contracts, GDPR DPA, HIPAA BAA, licensing, and more), or let the AI help you choose, and end up with a finished downloadable PDF.\n\nAn AI assistant guides document selection and walks the user through the fields. Behind that, an LLM with Structured Outputs (gpt-4.1) populates the template, renders a live preview, and outputs the final PDF. FastAPI, Docker, SQLite, auth. Features were specced in Jira and shipped via GitHub PRs through a 7-step process with unit and integration tests.\n\nIt is a useful example of where applied AI work meets a real operational pain: not 'AI that answers questions,' but 'AI that produces usable legal work.'\n\nLive site: https://prelegal-zeta.vercel.app/login/",
  },
  {
    terms: ["abbotsford"],
    answer:
      "The Abbotsford is a property development showcase for exclusive duplex living.\n\nFor me, it represents the kind of digital product work where presentation, clarity, and trust matter. A site like that needs to communicate the offer quickly and make the development feel tangible.\n\nIt's also a complete lead-to-CRM sales system: the register-interest form pushes every enquiry into Zoho CRM as a structured sales lead via a custom Zoho CRM API integration — custom fields I built in Zoho, with the OAuth token flow set up in Postman.\n\nLive site: https://theabbotsford.vercel.app/",
  },
  {
    terms: ["renoclean", "cleaning"],
    answer:
      "RenoClean SA is a live service site for post-renovation and construction cleaning in Cape Town.\n\nIt is a good example of practical service positioning: make the offer clear, show who it is for, and help the user understand the value without making them work too hard.\n\nLike The Abbotsford, it's a complete lead-to-CRM sales system — the enquiry form feeds every lead into Zoho CRM as a structured sales lead via a custom Zoho CRM API integration, with custom fields and an OAuth token flow I set up in Postman.\n\nLive site: https://renoclean-sa.vercel.app/",
  },
  {
    terms: ["medical aid navigator", "medical aid", "medical scheme", "medical-aid", "claim", "icd-10", "icd10"],
    answer:
      "Medical Aid Navigator is an educational, AI-assisted tool that helps South African medical-aid members understand what to ask, check, and document before, during, and after using their benefits. You pick one of ten real situations — an emergency, a specialist referral, registering a chronic condition, a rejected claim — or describe your own and let an AI classifier route you, answer a few guided questions, and get a tailored, plain-English checklist: the questions to put to your scheme, the ICD-10 and tariff codes and authorisation numbers to request, and the co-payment and network risks to watch. You can export it as a PDF. It's deliberately scheme-neutral and explicitly not medical, broker, legal, or financial advice. I designed and built it solo and ship it as a live MVP.\n\nIt's Next.js 15 (App Router, TypeScript) on Vercel, with a provider-agnostic AI layer defaulting to Anthropic Claude Sonnet 4.6, an editable markdown knowledge base, optional anonymous Supabase feedback, and client-side PDF export. It's stateless and POPIA-aware — no accounts, no member or ID numbers.\n\nIn a health-and-money domain the engineering is the safety architecture, and that's the point. Safety doesn't depend on the AI: emergency detection is fully deterministic and runs before the model is ever called, so someone describing chest pain or a child not breathing gets static, hard-coded urgent-care guidance even if the AI is down or manipulated. Generation is grounded only in my own curated knowledge base and forbidden from inventing scheme rules, plan names, benefit limits, or codes — I deliberately don't encode any named scheme's plan data, because it changes yearly and can't be guaranteed, so the tool teaches the right questions to ask instead. And every output is scanned by a validation layer that softens claim guarantees, diagnosis, and broker advice before it ever reaches you. It's the same escalate-only, fact-over-commentary discipline as ScamCheck and FanBrain, applied where the stakes are highest. A solo personal project, live as an MVP.\n\nLive site: https://medical-aid-navigator.vercel.app/",
  },
  {
    terms: ["clinical emergencies", "home medical equipment", "medical equipment"],
    answer:
      "Clinical Emergencies is a live site for home medical equipment and support for South African families.\n\nThat kind of project needs clarity and trust. The user is likely solving a real and sometimes urgent problem, so the digital experience has to be straightforward and confidence-building. It also runs a complete lead-to-CRM sales system — enquiries feed straight into Zoho CRM as structured leads, with custom fields I built and an OAuth token flow I set up in Postman against the Zoho CRM API.\n\nLive site: https://clinical-emergencies.vercel.app/",
  },
];

export function generateFallbackTwinAnswer(userPrompt: string): string {
  const prompt = userPrompt.toLowerCase();

  const roleMatch = workHistoryAnswers.find((item) => hasAny(prompt, item.terms));
  if (roleMatch) {
    return roleMatch.answer;
  }

  const projectMatch = projectAnswers.find((item) => hasAny(prompt, item.terms));
  if (projectMatch) {
    return projectMatch.answer;
  }

  if (hasAny(prompt, ["portfolio", "projects", "project work", "live work", "work that you do"])) {
    return [
      "My portfolio is a mix of live product builds, service sites, workflow tools, and digital transformation work.",
      "",
      "The public AI product case studies are FinAlly (a real-time AI trading workstation and AI Builder capstone), PreLegal (an AI legal document builder built during the AI Coder track), ScamCheck (an AI scam/phishing link checker, a solo personal project live in production), FanBrain AI (an AI football prediction game built around the 2026 World Cup, a solo personal project live in production at fanbrainai.com), and Medical Aid Navigator (an educational, AI-assisted tool for South African medical-aid members, a solo personal project shipped as a live MVP). The wider portfolio also includes The Abbotsford, RenoClean SA, and Clinical Emergencies across property, specialist services, and medical support.",
      "",
      "Each portfolio entry links to the live project and to a short write-up that walks through the problem, the approach, and the result.",
      "",
      "The thread across them is practical shipping: understand the user, shape the experience, build the thing, and keep the work grounded in what the business actually needs. The live project links are public, and I still avoid inventing or repeating private client details that are not part of the portfolio context.",
    ].join("\n");
  }

  if (hasAny(prompt, ["curriculum", "ed donner", "ai builder", "ai coder", "training", "course", "courses"])) {
    return [
      "The strongest AI training signal is the applied AI engineering curriculum I completed through Ed Donner.",
      "",
      "I completed three tracks: AI Builder - Agents, Voice Agents & Automation (n8n), AI Coder - Claude Code & Coding Agents, and AI Leadership - Strategy, Decision-Making & Governance. The AI Builder track covered autonomous agents, RAG-powered voice agents, a multi-agent go-to-market system, LLM integration, Supabase vector RAG, MCP, webhooks, and JSON data pipelines. FinAlly was the capstone build.",
      "",
      "The AI Coder track covered Claude Code, MCP, skills, sub-agents, multi-agent orchestration, and the Claude Agent SDK. Through that track I built and shipped live curriculum projects with agentic coding workflows, including this portfolio site and its digital twin, and the PreLegal assistant. The AI Leadership track covered AI strategy, investment frameworks, governance, and architecture decisions from a commercial perspective.",
      "",
      "I describe that honestly as curriculum and training-grade AI work, not as production-scale client AI deployments.",
    ].join("\n");
  }

  if (hasAny(prompt, ["work with", "working with", "personality", "style", "how are you", "what are you like"])) {
    return [
      "I am probably at my best when there is a messy operational problem that needs structure.",
      "",
      "I tend to move between the technical detail and the business reality: what the system needs to do, who needs to trust it, where it can fail, and how to get it into day-to-day use without making the team fight the process.",
      "",
      "The short version: practical, direct, delivery-minded, and interested in AI that actually survives contact with a real business environment.",
    ].join("\n");
  }

  if (hasAny(prompt, ["add value", "value fastest", "where would you", "best fit", "hire", "use you"])) {
    return [
      "I would add value fastest where AI ambition has already arrived, but the operating model around it is still unclear.",
      "",
      "That usually means shaping the workflow, defining guardrails, connecting the assistant or automation to real context, and making sure the output is reliable enough for people to use. My background helps because I have worked across software, digital operations, reporting, stakeholders, and project delivery rather than only one slice of the problem.",
    ].join("\n");
  }

  if (hasAny(prompt, ["think about ai", "approach ai", "ai project", "ai projects", "ai delivery"])) {
    return [
      "I do not see AI projects as model demos. I see them as systems that need a job, a workflow, context, controls, and adoption.",
      "",
      "The model matters, but the real work is around it: retrieval, prompt strategy, evaluation, cost control, human oversight, and the handover into operations. That is where a useful AI tool becomes something the business can actually depend on.",
    ].join("\n");
  }

  if (hasAny(prompt, ["current role", "current focus", "what do you do now", "present role"])) {
    return [
      "Right now I am a Project Manager at Merchants, where I have been since April 2023.",
      "",
      "The direction I am pushing hardest is AI systems engineering: agentic workflows, LLM-powered tools, and automation that plugs into real operational processes. I am less interested in flashy AI demos and more interested in systems that are reliable, governed, affordable to run, and useful after the first week.",
    ].join("\n");
  }

  if (hasAny(prompt, ["career", "journey", "experience", "timeline", "background"])) {
    return [
      "The thread through my career is that I have kept moving closer to the place where technology, delivery, and business outcomes meet.",
      "",
      "- 2023-Present: Project Manager at Merchants, leading end-to-end delivery and governance.",
      "- 2022-2023: Digital Project Manager and Reporting Specialist roles focused on digital execution and operational clarity.",
      "- 2018-2021: Independent Digital Consultant driving omnichannel growth strategies.",
      "- 2015-2018: Senior software and digital strategy roles across development, social, and campaign leadership.",
      "- 2010-2015: WordPress Developer building custom web platforms, integrations, and client enablement.",
      "",
      "That mix is useful for AI work because I can talk implementation, but I do not lose sight of stakeholders, adoption, controls, and whether the thing will actually work in production.",
    ].join("\n");
  }

  if (hasAny(prompt, ["cv", "resume", "résumé"])) {
    return [
      "My CV reads as a blend of senior software development, digital transformation, project delivery, analytics, and applied AI.",
      "",
      "I started with hands-on web development: WordPress, front-end and back-end builds, custom themes and plugins, PHP, JavaScript, HTML, CSS, integrations, performance testing, troubleshooting, and client training. I then moved through senior software development, digital strategy, paid media, analytics/reporting, client relations, and project management.",
      "",
      "The current direction is Applied AI and Automation: GenAI workflows, agentic engineering, AI-assisted development with Claude Code and Codex, Next.js builds, Python, backend APIs, context strategy, guardrails, and practical automation that can survive inside real business operations.",
    ].join("\n");
  }

  if (hasAny(prompt, ["skill", "strength", "expertise", "specialize", "tech stack", "technical skills", "developer skills"])) {
    return [
      "My skillset is strongest where development, AI workflow design, and delivery execution overlap.",
      "",
      "- AI application builds: LLM assistants, retrieval-augmented generation, OpenAI API, context strategy, guardrail design, and workflow automation.",
      "- Agentic engineering: agent workflows, tool orchestration, task decomposition, memory and context design, evaluation loops, and reliability thinking.",
      "- AI coding environments: Claude Code, Codex, repo-aware development, AI pair programming, prompt iteration, and AI-assisted debugging.",
      "- Delivery and product shaping: rapid prototyping, product shaping, human-in-the-loop QA, requirements workshops, quality control, client handover and training.",
      "- Engineering foundations: TypeScript and JavaScript, Python, React and Next.js, Node.js and backend APIs, database and server integration, WordPress (themes, plugins, architecture), HTML, CSS, and PHP.",
      "",
      "The useful part is that I can move from a rough business problem into a working prototype, then shape it into something reliable enough to hand over and use.",
    ].join("\n");
  }

  if (hasAny(prompt, ["agentic", "agent", "agents", "agent workflow", "tool orchestration"])) {
    return [
      "Agentic engineering, for me, is about designing the workflow around the model so it can do useful work with enough structure and control.",
      "",
      "That includes task decomposition, tool orchestration, memory and context design, evaluation loops, guardrails, controlled outputs, and deciding where a human should stay in the loop. I am interested in agents as operational systems, not just demos that look clever in isolation.",
    ].join("\n");
  }

  if (hasAny(prompt, ["vibe", "vibe engineering", "vibe coding", "ai pair programming", "ai-assisted coding"])) {
    return [
      "The way I actually work with AI coding tools: start with the product feel or workflow intent, prototype quickly with Claude Code or Codex, then keep tightening the result until it is usable, coherent, and technically sound.",
      "",
      "I treat AI pair programming as a real part of the build loop — repo-aware iteration, debugging, refactoring, and fast product shaping. The important part is still judgement: checking the output, testing it, refining the interaction, and making sure the final product actually serves the user.",
    ].join("\n");
  }

  if (hasAny(prompt, ["cert", "certificate", "qualification", "credential"])) {
    return [
      "My strongest applied AI training signal is the Ed Donner AI engineering curriculum: AI Builder - Agents, Voice Agents & Automation (n8n), and AI Coder - Claude Code & Coding Agents.",
      "",
      "My highlighted certifications also include:",
      "- PRINCE2 Foundation Certification Training",
      "- Generative AI for Project Managers",
      "- GenAI for Consultants — NTT DATA (applied GenAI for consulting engagements)",
      "- AI Change Management: Leading the Transformation",
      "- Responsible Use of AI",
      "",
      "The full credential archive is available on my LinkedIn profile.",
    ].join("\n");
  }

  if (hasAny(prompt, ["education", "study", "university", "stanford", "stellenbosch"])) {
    return [
      "My education includes:",
      "- Stellenbosch University: Certificate in Digital Marketing (2012)",
      "- Stanford Online: Computer Science coursework (2015)",
      "- HFPA: Diploma in Exercise Science (2010-2012)",
    ].join("\n");
  }

  if (hasAny(prompt, ["contact", "email", "linkedin", "phone", "whatsapp"])) {
    return [
      "The easiest way to reach me is email, LinkedIn, or WhatsApp.",
      "",
      "- Email: underhill.justin@gmail.com",
      "- LinkedIn: https://www.linkedin.com/in/justinunderhill",
      "- WhatsApp: https://wa.me/27814812165",
    ].join("\n");
  }

  return [
    "I can answer that best if we keep it tied to Justin's career, AI focus, delivery background, work style, certifications, or education.",
    "",
    "The useful summary is this: Justin is an AI Engineer & Builder based in Johannesburg who builds and ships production AI end-to-end, comfortable working close to the customer from an ambiguous problem to a deployed product. His edge is the blend of full-stack software development, backend/API experience, AI-assisted engineering with tools like Claude Code and Codex, plus client-facing delivery and practical AI implementation.",
  ].join("\n");
}
