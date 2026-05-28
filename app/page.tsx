import Link from "next/link";
import { portfolioProjects } from "@/lib/portfolio-projects";
import { DigitalTwinChat } from "./components/digital-twin-chat";

const capabilities = [
  {
    title: "Agent workflows",
    detail:
      "Building AI agents that close the loop on a real task — combining LLM reasoning with tool use, retrieval, and execution behind a single surface.",
  },
  {
    title: "LLM applications",
    detail:
      "Practical assistants and decision-support tools with grounded context, retrieval where it matters, and outputs the user can trust.",
  },
  {
    title: "AI automation",
    detail:
      "Connecting AI into existing business workflows so they run faster, more consistently, and with less manual handling.",
  },
  {
    title: "Project & delivery leadership",
    detail:
      "Leading full project lifecycles, stakeholder alignment, and handovers that keep strategy tied to execution.",
  },
  {
    title: "Data & performance thinking",
    detail:
      "Using analytics, reporting, and KPI frameworks to measure impact and continuously improve outcomes.",
  },
  {
    title: "Digital product foundations",
    detail:
      "Hands-on background in software and web development with strong full-stack and platform fundamentals.",
  },
];

const developerSkillsets = [
  {
    title: "AI application builds",
    skills: [
      "LLM assistants",
      "Retrieval-augmented generation",
      "OpenAI API",
      "Context strategy",
      "Guardrail design",
      "Workflow automation",
    ],
  },
  {
    title: "Agentic engineering",
    skills: [
      "Agent workflows",
      "Tool orchestration",
      "Task decomposition",
      "Memory & context design",
      "Evaluation loops",
    ],
  },
  {
    title: "AI coding environments",
    skills: [
      "Claude Code",
      "Codex",
      "Repo-aware development",
      "AI pair programming",
      "Prompt iteration",
      "AI-assisted debugging",
    ],
  },
  {
    title: "Delivery & product shaping",
    skills: [
      "Rapid prototyping",
      "Product shaping",
      "Human-in-the-loop QA",
      "Requirements workshops",
      "Quality control",
      "Client handover & training",
    ],
  },
  {
    title: "Engineering foundations",
    skills: [
      "TypeScript / JavaScript",
      "Python",
      "React / Next.js",
      "Node.js & backend APIs",
      "Database & server integration",
      "WordPress (themes, plugins, architecture)",
      "HTML / CSS / PHP",
    ],
  },
];

const journey = [
  {
    period: "Apr 2023 — Present",
    role: "Project Manager",
    company: "Merchants",
    detail:
      "Leading end-to-end delivery, stakeholder governance, and operational handovers across complex initiatives.",
  },
  {
    period: "Aug 2022 — Mar 2023",
    role: "Digital Project Manager",
    company: "Bottomline SA",
    detail:
      "Drove digital transitions with precise scheduling, budget control, and cross-team alignment.",
  },
  {
    period: "May 2022 — Jul 2022",
    role: "Reporting & Dashboard Specialist",
    company: "Wetpaint",
    detail:
      "Built reporting clarity and trained teams during new system rollouts.",
  },
  {
    period: "Jan 2022 — Mar 2022",
    role: "Digital & Tech Consultant",
    company: "Kadraa Recruitment",
    detail:
      "Facilitated technical workshops and strengthened hiring requirements for web-focused roles.",
  },
  {
    period: "Nov 2018 — Oct 2021",
    role: "Independent Digital Consultant",
    company: "NetSum",
    detail:
      "Delivered digital growth strategies through freelance consulting and omni-channel campaign execution.",
  },
  {
    period: "2016 — 2018",
    role: "Digital Lead / Strategist",
    company: "Neapolitan Digital, BPD Advertising, Red September",
    detail:
      "Led channel strategy, social performance, and data-informed campaign execution across multiple organizations.",
  },
  {
    period: "Nov 2015 — Oct 2016",
    role: "Senior Software Developer",
    company: "Straight Twisted",
    detail:
      "Managed full-stack project delivery, team leadership, and quality assurance under demanding timelines.",
  },
  {
    period: "Aug 2010 — Oct 2015",
    role: "WordPress Developer",
    company: "Neapolitan Digital",
    detail:
      "Built custom websites, plugins, and client-ready digital platforms with strong UX and performance focus.",
  },
];

const certifications = [
  "PRINCE2 Foundation",
  "Generative AI for Project Managers",
  "GenAI for Consultants — NTT DATA",
  "AI Change Management: Leading the Transformation",
  "Responsible Use of AI",
];

const education = [
  { school: "Stellenbosch University", line: "Certificate in Digital Marketing" },
  { school: "Stanford Online", line: "Computer Science coursework" },
  { school: "HFPA", line: "Diploma in Exercise Science" },
];

const certificationArchiveUrl =
  "https://www.linkedin.com/in/justinunderhill/details/certifications/";

export default function Home() {
  return (
    <>
      <header className="top-nav">
        <div className="shell top-nav-inner">
          <a className="brand" href="#top" aria-label="Justin Underhill homepage">
            <span className="brand-mark">JU</span>
            <span className="brand-name">Justin Underhill</span>
          </a>
          <nav aria-label="Primary">
            <a href="#about">about</a>
            <a href="#skills">skills</a>
            <a href="#experience">experience</a>
            <a href="#portfolio">portfolio</a>
            <a className="nav-feature" href="#twin">twin</a>
            <a href="#contact">contact</a>
          </nav>
        </div>
      </header>

      <main className="shell" id="top">
        <section className="hero" aria-labelledby="hero-name">
          <div className="section-content">
            <span className="label">{"// signal"}</span>
            <h1 id="hero-name">Justin Underhill</h1>
            <p className="hero-role">
              Applied AI & Automation Consultant
            </p>
            <p className="hero-lede">
              I build practical AI tools and agent workflows that fit inside real
              business environments — LLM applications, retrieval-backed assistants,
              and automation that connects to existing processes.
            </p>
            <p className="hero-detail">
              Based in Johannesburg. Background spans senior software development,
              digital strategy, and enterprise project delivery, now focused on
              applied AI: grounded outputs, sensible guardrails, and tools the
              business will actually use.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href="https://www.linkedin.com/in/justinunderhill"
                target="_blank"
                rel="noreferrer"
              >
                View LinkedIn
              </a>
              <a
                className="button button-ghost"
                href="#contact"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>

        <section id="about" aria-labelledby="about-heading">
          <div className="section-content">
            <span className="label">{"// about"}</span>
            <h2 id="about-heading">From digital craft to AI systems</h2>
            <p>
              My background spans software development, digital strategy, reporting,
              performance thinking, and enterprise project leadership. That range lets
              me move between technical detail and operational reality without losing
              the thread.
            </p>
            <p>
              I treat AI initiatives as engineered systems — with reliability standards,
              governance, human oversight, and measurable adoption inside the business.
              The interesting work is rarely the model itself; it&apos;s the surrounding
              architecture that makes the model dependable.
            </p>
          </div>
        </section>

        <section id="capabilities" aria-labelledby="capabilities-heading">
          <div className="section-content section-content-wide">
            <span className="label">{"// capabilities"}</span>
            <h2 id="capabilities-heading">Where I focus</h2>
            <ul className="list-clean capability-grid">
              {capabilities.map((item, index) => (
                <li className="capability" key={item.title}>
                  <span className="capability-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="skills" aria-labelledby="skills-heading">
          <div className="section-content section-content-wide">
            <span className="label">{"// skillset"}</span>
            <h2 id="skills-heading">Developer skillset</h2>
            <p className="skillset-intro">
              Hands-on development skills built across software delivery,
              WordPress engineering, AI tooling, and production web projects.
            </p>
            <div className="skillset-grid">
              {developerSkillsets.map((group) => (
                <article className="skillset-card" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" aria-labelledby="experience-heading">
          <div className="section-content section-content-wide">
            <span className="label">{"// experience"}</span>
            <h2 id="experience-heading">Career timeline</h2>
            <div className="timeline">
              <svg
                aria-hidden="true"
                className="timeline-road"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <path d="M50 0 C8 12 92 24 50 36 C8 48 92 60 50 72 C18 82 82 91 50 100" />
              </svg>
              {journey.map((item) => (
                <article className="timeline-item" key={`${item.role}-${item.period}`}>
                  <span className="timeline-period">{item.period}</span>
                  <div>
                    <h3>
                      {item.role} <span className="at">· {item.company}</span>
                    </h3>
                    <p>{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="twin-hub-section" id="twin" aria-labelledby="twin-heading">
          <div className="twin-hub">
            <div className="twin-hub-copy">
              <span className="label">{"// digital twin"}</span>
              <h2 id="twin-heading">Step into the conversation</h2>
              <p>
                Ask about the work, the decisions, the skills, and the way I think.
              </p>
            </div>
            <DigitalTwinChat />
          </div>
        </section>

        <section
          className="portfolio-preview-section"
          id="portfolio"
          aria-labelledby="portfolio-heading"
        >
          <div className="section-content section-content-wide">
            <span className="label">{"// portfolio"}</span>
            <h2 id="portfolio-heading">Work that I do</h2>
            <p className="portfolio-note">
              Live project work across AI products, legal tooling, property,
              specialist services, and medical support — each opens a short
              problem-to-result write-up alongside the live site.
            </p>
            <div className="case-study-list">
              {portfolioProjects.map((item, index) => (
                <article
                  className="case-study-link"
                  key={item.title}
                >
                  <span className="case-study-topline">
                    <span className="case-study-kicker">live project</span>
                    <span className="case-study-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <Link
                    className="case-study-title-link"
                    href={`/portfolio/${item.slug}`}
                  >
                    <strong>{item.title}</strong>
                  </Link>
                  <span className="case-study-detail">{item.detail}</span>
                  <div className="case-study-actions">
                    <Link className="case-study-cta" href={`/portfolio/${item.slug}`}>
                      View project
                    </Link>
                    <a
                      className="case-study-cta case-study-live"
                      href={item.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit live site
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <Link className="archive-link" href="/portfolio">
              Open portfolio hub →
            </Link>
          </div>
        </section>

        <section id="credentials" aria-labelledby="credentials-heading">
          <div className="section-content">
            <span className="label">{"// credentials"}</span>
            <h2 id="credentials-heading">Education & certifications</h2>
            <div className="curriculum-block">
              <div className="curriculum-header">
                <h3>AI engineering curriculum</h3>
                <span className="curriculum-source">Ed Donner</span>
              </div>
              <ul className="curriculum-tracks">
                <li>
                  <strong>AI Builder — Agents, Voice Agents & Automation (n8n)</strong>
                  <p>
                    Built autonomous agents, RAG-powered voice agents, and a
                    multi-agent go-to-market system. Covered LLM integration
                    (OpenAI, Gemini, Anthropic), Supabase vector RAG, MCP,
                    webhooks, and JSON data pipelines.
                  </p>
                </li>
                <li>
                  <strong>AI Coder — Claude Code & Coding Agents</strong>
                  <p>
                    Shipped live products with agentic coding workflows —
                    including this site and its digital twin, and the PreLegal
                    assistant. Covered Claude Code, MCP, skills, sub-agents,
                    multi-agent orchestration, and the Claude Agent SDK.
                  </p>
                </li>
              </ul>
              <p className="curriculum-note">
                Two completed tracks of an applied AI engineering curriculum.
                The FinAlly and PreLegal portfolio projects above were built as
                part of it.
              </p>
            </div>
            <div className="split">
              <div>
                <h3>Education</h3>
                <ul className="compact-list">
                  {education.map((item) => (
                    <li key={item.school}>
                      <strong>{item.school}</strong>
                      <br />
                      {item.line}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Selected certifications</h3>
                <ul className="compact-list">
                  {certifications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a
                  className="archive-link"
                  href={certificationArchiveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Full archive on LinkedIn →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-heading">
          <div className="section-content contact">
            <span className="label">{"// contact"}</span>
            <h2 id="contact-heading">Available for AI and delivery engagements</h2>
            <p>
              Based in Johannesburg, available for consulting engagements across
              applied AI builds, automation workflows, and delivery-led programs.
            </p>
            <div className="contact-grid">
              <div className="contact-item">
                <span className="contact-item-label">email</span>
                <a href="mailto:underhill.justin@gmail.com">
                  underhill.justin@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-item-label">whatsapp</span>
                <a
                  className="whatsapp-contact-button"
                  href="https://wa.me/27814812165"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Message Justin on WhatsApp"
                >
                  <svg
                    aria-hidden="true"
                    className="whatsapp-icon"
                    viewBox="0 0 32 32"
                    focusable="false"
                  >
                    <path d="M16.02 4.5c-6.33 0-11.47 5.03-11.47 11.22 0 2.18.64 4.22 1.75 5.94L4.5 27.5l6.06-1.88a11.7 11.7 0 0 0 5.46 1.34c6.33 0 11.48-5.03 11.48-11.24S22.35 4.5 16.02 4.5Zm0 20.56c-1.77 0-3.44-.49-4.88-1.35l-.35-.2-3.5 1.08 1.05-3.36-.23-.36a9.11 9.11 0 0 1-1.65-5.15c0-5.15 4.29-9.34 9.56-9.34s9.57 4.19 9.57 9.34-4.29 9.34-9.57 9.34Zm5.32-6.98c-.29-.14-1.72-.83-1.98-.92-.27-.1-.46-.14-.66.14-.19.28-.76.92-.93 1.11-.17.18-.34.21-.63.07-.29-.14-1.23-.44-2.34-1.41a8.66 8.66 0 0 1-1.62-1.97c-.17-.28-.02-.43.13-.57.13-.13.29-.34.43-.5.15-.16.2-.28.29-.47.1-.18.05-.35-.02-.49-.07-.14-.66-1.55-.9-2.13-.24-.56-.48-.48-.66-.49h-.56c-.19 0-.5.07-.76.35-.27.28-1 1-1 2.42s1.03 2.8 1.17 2.99c.15.18 2.03 3.03 4.92 4.25.69.29 1.22.46 1.64.59.69.21 1.31.18 1.8.11.55-.08 1.72-.68 1.96-1.35.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.55-.33Z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-item-label">linkedin</span>
                <a
                  href="https://www.linkedin.com/in/justinunderhill"
                  target="_blank"
                  rel="noreferrer"
                >
                  justinunderhill
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footer-inner">
          <span className="footer-location">
            <span className="sa-flag" aria-hidden="true">
              <span className="sa-flag-red" />
              <span className="sa-flag-blue" />
              <span className="sa-flag-green" />
              <span className="sa-flag-gold" />
              <span className="sa-flag-black" />
            </span>
            <span>Johannesburg · ZA</span>
          </span>
        </div>
      </footer>

      <a className="back-to-top" href="#top" aria-label="Back to top">
        <span aria-hidden="true">↑</span>
        <span>top</span>
      </a>
    </>
  );
}
