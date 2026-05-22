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

export function generateFallbackTwinAnswer(userPrompt: string): string {
  const prompt = userPrompt.toLowerCase();

  const roleMatch = workHistoryAnswers.find((item) => hasAny(prompt, item.terms));
  if (roleMatch) {
    return roleMatch.answer;
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

  if (hasAny(prompt, ["skill", "strength", "expertise", "specialize"])) {
    return [
      "My strongest value is connecting technical AI ideas to operational execution.",
      "",
      "- Agentic AI systems and automation architecture",
      "- LLM application engineering and retrieval integration",
      "- Project and delivery leadership in cross-functional teams",
      "- Data-informed optimization and performance management",
      "",
      "I am comfortable going from a rough business problem to a structured delivery path: what to build, what to measure, where the risks are, and how to get people using it properly.",
    ].join("\n");
  }

  if (hasAny(prompt, ["cert", "certificate", "qualification", "credential"])) {
    return [
      "My highlighted certifications include:",
      "- PRINCE2 Foundation Certification Training",
      "- Generative AI for Project Managers",
      "- GenAI Academy: Yellow Belt Level 2 for Consultants",
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
    "The useful summary is this: Justin is an AI Systems Engineer and AI Automation Architect based in Johannesburg, currently working as a Project Manager at Merchants. His edge is the blend of software, digital strategy, project delivery, and practical AI implementation.",
  ].join("\n");
}
