import Link from "next/link";
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

const liveCaseStudies = [
  {
    title: "Finally",
    url: "https://finally-beryl.vercel.app/",
    detail: "Live deployed project hosted on Vercel.",
  },
];

const portfolioQueue = [
  "Agent-driven workflow blueprint with design rationale and implementation notes.",
  "LLM assistant deployment with guardrails, context strategy, and QA outcomes.",
  "Automation impact dashboards showing baseline-to-improvement metrics.",
];

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
            <a href="#experience">experience</a>
            <a href="#twin">twin</a>
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
              AI systems engineer · agentic AI developer · automation architect
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
                href="mailto:underhill.justin@gmail.com"
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
          <div className="section-content">
            <span className="label">{"// capabilities"}</span>
            <h2 id="capabilities-heading">Where I focus</h2>
            <ul className="list-clean">
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

        <section id="experience" aria-labelledby="experience-heading">
          <div className="section-content">
            <span className="label">{"// experience"}</span>
            <h2 id="experience-heading">Career timeline</h2>
            <div className="timeline">
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

        <section id="twin" aria-labelledby="twin-heading">
          <div className="section-content">
            <span className="label">{"// digital twin"}</span>
            <h2 id="twin-heading">Ask my career twin</h2>
            <p>
              An assistant grounded in my professional profile. Ask about experience,
              focus areas, certifications, or how I approach AI delivery.
            </p>
            <DigitalTwinChat />
          </div>
        </section>

        <section id="portfolio" aria-labelledby="portfolio-heading">
          <div className="section-content">
            <span className="label">{"// portfolio"}</span>
            <h2 id="portfolio-heading">Case studies in development</h2>
            <p className="portfolio-note">
              I&apos;m preparing a small set of build logs covering production AI work,
              automation architecture decisions, and measurable delivery outcomes.
            </p>
            <div className="case-study-list">
              {liveCaseStudies.map((item) => (
                <a
                  className="case-study-link"
                  href={item.url}
                  key={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="case-study-kicker">live project</span>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </a>
              ))}
            </div>
            <p className="portfolio-note portfolio-note-secondary">Queued case studies:</p>
            <ul className="portfolio-queue">
              {portfolioQueue.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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
                <span className="contact-item-label">phone</span>
                <a href="tel:+27814812165">+27 81 481 2165</a>
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
          <span>{"// justinunderhill.com"}</span>
          <span>Johannesburg · ZA</span>
        </div>
      </footer>
    </>
  );
}
