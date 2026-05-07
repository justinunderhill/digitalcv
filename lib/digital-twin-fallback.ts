function hasAny(text: string, terms: string[]) {
  return terms.some((term) => text.includes(term));
}

export function generateFallbackTwinAnswer(userPrompt: string): string {
  const prompt = userPrompt.toLowerCase();

  if (hasAny(prompt, ["current role", "current focus", "what do you do now", "present role"])) {
    return [
      "My current role is Project Manager at Merchants (since April 2023), and my focus is on AI systems engineering in practical business environments.",
      "",
      "I am mainly focused on:",
      "- Agentic AI systems and multi-agent workflows",
      "- LLM-powered applications and assistants",
      "- AI automation integrated into existing operational workflows",
    ].join("\n");
  }

  if (hasAny(prompt, ["career", "journey", "experience", "timeline", "background"])) {
    return [
      "Here is a concise view of my career journey:",
      "- 2023-Present: Project Manager at Merchants, leading end-to-end delivery and governance.",
      "- 2022-2023: Digital Project Manager and Reporting Specialist roles focused on digital execution and operational clarity.",
      "- 2018-2021: Independent Digital Consultant driving omnichannel growth strategies.",
      "- 2015-2018: Senior software and digital strategy roles across development, social, and campaign leadership.",
      "- 2010-2015: WordPress Developer building custom web platforms, integrations, and client enablement.",
    ].join("\n");
  }

  if (hasAny(prompt, ["skill", "strength", "expertise", "specialize"])) {
    return [
      "My strongest areas are:",
      "- Agentic AI systems and automation architecture",
      "- LLM application engineering and retrieval integration",
      "- Project and delivery leadership in cross-functional teams",
      "- Data-informed optimization and performance management",
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

  if (hasAny(prompt, ["contact", "email", "linkedin", "phone"])) {
    return [
      "You can reach me here:",
      "- Email: underhill.justin@gmail.com",
      "- LinkedIn: https://www.linkedin.com/in/justinunderhill",
      "- Phone: +27 81 481 2165",
    ].join("\n");
  }

  return [
    "I can help with questions about my career journey, current role, AI focus, skills, certifications, and education.",
    "",
    "A quick summary:",
    "- AI Systems Engineer and AI Automation Architect based in Johannesburg.",
    "- Current Project Manager at Merchants with a strong delivery and governance background.",
    "- 12+ years across software engineering, digital strategy, and AI-oriented project leadership.",
  ].join("\n");
}
