import Link from "next/link";
import { portfolioProjects } from "@/lib/portfolio-projects";
import { DigitalTwinChat } from "./components/digital-twin-chat";

const capabilities = [
  {
    title: "Agentic AI systems",
    detail:
      "Designing multi-agent workflows and orchestration patterns that solve real operational problems.",
  },
  {
    title: "LLM application engineering",
    detail:
      "Building practical assistants and decision-support systems with reliable context handling and controlled outputs.",
  },
  {
    title: "AI automation architecture",
    detail:
      "Integrating automation layers into existing business workflows to improve speed, quality, and consistency.",
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
    title: "Languages & UI",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "React", "Next.js"],
  },
  {
    title: "Backend & integration",
    skills: [
      "PHP",
      "Node.js",
      "Backend APIs",
      "API integration",
      "Database integration",
      "Server integration",
    ],
  },
  {
    title: "WordPress engineering",
    skills: [
      "Custom themes",
      "Custom plugins",
      "Website architecture",
      "Security updates",
      "Content troubleshooting",
    ],
  },
  {
    title: "AI application builds",
    skills: [
      "LLM assistants",
      "OpenAI API",
      "Context strategy",
      "Workflow automation",
      "Guardrail design",
    ],
  },
  {
    title: "AI coding environments",
    skills: [
      "Claude Code",
      "Codex",
      "Prompt iteration",
      "Repo-aware development",
      "AI-assisted debugging",
    ],
  },
  {
    title: "Vibe engineering",
    skills: [
      "Rapid prototyping",
      "Product shaping",
      "AI pair programming",
      "Iterative refinement",
      "Human-in-the-loop QA",
    ],
  },
  {
    title: "Agentic engineering",
    skills: [
      "Agent workflows",
      "Tool orchestration",
      "Task decomposition",
      "Memory/context design",
      "Evaluation loops",
    ],
  },
  {
    title: "Delivery quality",
    skills: [
      "Performance testing",
      "Quality control",
      "Client handover",
      "Technical training",
      "Requirements workshops",
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
  "GenAI Academy: Yellow Belt Level 2 for Consultants",
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
              Applied AI & Automation Consultant · GenAI Workflow Builder ·
              Digital Transformation Project Manager · Senior Software Developer
            </p>
            <p className="hero-lede">
              I design and deploy practical AI systems that fit inside real business
              environments — agent-driven workflows, LLM-powered tools, and automation
              layers that connect to existing processes.
            </p>
            <p className="hero-detail">
              Based in Johannesburg. Background spans software engineering, digital
              strategy, and enterprise project delivery, now focused on operational AI
              outcomes: reliability, controlled outputs, and sustainable cost.
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
              <h2 id="twin-heading">Talk to the version of me that never runs out of context</h2>
              <p>
                This is the part of the site with a pulse. Ask about my CV,
                developer skillset, portfolio projects, AI tooling, career path, or how I
                would approach an AI delivery problem.
              </p>
              <div className="twin-hub-rail" aria-label="Digital twin capabilities">
                <span>CV context</span>
                <span>project memory</span>
                <span>developer skillset</span>
                <span>AI systems lens</span>
              </div>
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
              Live project work and capability snapshots across AI workflows,
              legal tooling, property, specialist services, and medical support.
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
                      Open capability snapshot
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
            <h2 id="contact-heading">Open to AI systems and delivery work</h2>
            <p>
              Based in Johannesburg, available for collaboration on AI systems,
              automation architecture, and strategic delivery programs.
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
