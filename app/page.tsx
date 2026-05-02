import Link from "next/link";
import { DigitalTwinChat } from "./components/digital-twin-chat";

const keyStats = [
  { label: "Years In Digital & Delivery", value: "12+" },
  { label: "Cross-Functional Roles", value: "10" },
  { label: "Current Core Focus", value: "Agentic AI" },
  { label: "Region", value: "Johannesburg" },
];

const capabilities = [
  {
    title: "Agentic AI Systems",
    detail:
      "Designing multi-agent workflows and orchestration patterns that solve real operational problems.",
  },
  {
    title: "LLM Application Engineering",
    detail:
      "Building practical assistants and decision-support systems with reliable context handling and controlled outputs.",
  },
  {
    title: "AI Automation Architecture",
    detail:
      "Integrating automation layers into existing business workflows to improve speed, quality, and consistency.",
  },
  {
    title: "Project & Delivery Leadership",
    detail:
      "Leading full project lifecycles, stakeholder alignment, and handovers that keep strategy tied to execution.",
  },
  {
    title: "Data & Performance Thinking",
    detail:
      "Using analytics, reporting, and KPI frameworks to measure impact and continuously improve outcomes.",
  },
  {
    title: "Digital Product Foundations",
    detail:
      "Hands-on background in software and web development with strong full-stack and platform fundamentals.",
  },
];

const journey = [
  {
    period: "Apr 2023 - Present",
    role: "Project Manager",
    company: "Merchants",
    highlight:
      "Leading end-to-end delivery, stakeholder governance, and operational handovers across complex initiatives.",
  },
  {
    period: "Aug 2022 - Mar 2023",
    role: "Digital Project Manager",
    company: "Bottomline SA",
    highlight:
      "Drove digital transitions with precise scheduling, budget control, and cross-team alignment.",
  },
  {
    period: "May 2022 - Jul 2022",
    role: "Reporting & Dashboard Specialist",
    company: "Wetpaint",
    highlight:
      "Built reporting clarity and trained teams during new system rollouts.",
  },
  {
    period: "Jan 2022 - Mar 2022",
    role: "Digital & Tech Consultant",
    company: "Kadraa Recruitment",
    highlight:
      "Facilitated technical workshops and strengthened hiring requirements for web-focused roles.",
  },
  {
    period: "Nov 2018 - Oct 2021",
    role: "Independent Digital Consultant",
    company: "NetSum",
    highlight:
      "Delivered digital growth strategies through freelance consulting and omni-channel campaign execution.",
  },
  {
    period: "2016 - 2018",
    role: "Digital Lead / Strategist",
    company: "Neapolitan Digital, BPD Advertising, Red September",
    highlight:
      "Led channel strategy, social performance, and data-informed campaign execution across multiple organizations.",
  },
  {
    period: "Nov 2015 - Oct 2016",
    role: "Senior Software Developer",
    company: "Straight Twisted",
    highlight:
      "Managed full-stack project delivery, team leadership, and quality assurance under demanding timelines.",
  },
  {
    period: "Aug 2010 - Oct 2015",
    role: "WordPress Developer",
    company: "Neapolitan Digital",
    highlight:
      "Built custom websites, plugins, and client-ready digital platforms with strong UX and performance focus.",
  },
];

const certifications = [
  "Prompt Engineering for Business",
  "GenAI Academy: White Belt",
  "Project Management Essentials Certified (PMEC)",
  "Scrum Fundamentals Certified",
  "Digital Marketing Certification",
];

const education = [
  "Stellenbosch University - Certificate in Digital Marketing",
  "Stanford University - CS Online",
  "HFPA - Diploma in Exercise Science (Personal Training)",
];

const portfolioRoadmap = [
  {
    title: "AI Workflow Blueprint",
    scope: "Case study on agent-driven orchestration for operational teams.",
  },
  {
    title: "LLM Assistant Framework",
    scope: "A reusable architecture for enterprise-ready assistants.",
  },
  {
    title: "Automation Impact Dashboard",
    scope: "Before/after metrics pack showing AI adoption outcomes.",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <div className="ambient" aria-hidden="true" />

      <header className="top-nav reveal">
        <a className="brand" href="#home">
          JU
          <span>AI Systems Engineer</span>
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#journey">Journey</a>
          <a href="#twin">Digital Twin</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero panel reveal" id="home">
          <div>
            <p className="eyebrow">Enterprise delivery with an edge</p>
            <h1>Justin Underhill</h1>
            <p className="hero-title">
              AI Systems Engineer | Agentic AI Developer | AI Automation Architect
            </p>
            <p className="hero-copy">
              I design and deploy practical AI systems that fit inside real business environments.
              My focus is turning AI from experimentation into dependable operational capability.
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
              <a className="button button-ghost" href="mailto:underhill.justin@gmail.com">
                underhill.justin@gmail.com
              </a>
            </div>
          </div>

          <aside className="hero-focus">
            <p className="focus-title">Current Focus</p>
            <ul>
              <li>Agentic AI systems and multi-agent workflows</li>
              <li>Production-ready LLM applications</li>
              <li>AI automation embedded in existing operations</li>
              <li>Reliable, measurable delivery with human oversight</li>
            </ul>
          </aside>
        </section>

        <section className="stats reveal" aria-label="Key highlights">
          {keyStats.map((item, index) => (
            <article className="stat-card" key={item.label} style={{ animationDelay: `${index * 80}ms` }}>
              <p className="stat-value">{item.value}</p>
              <p className="stat-label">{item.label}</p>
            </article>
          ))}
        </section>

        <section className="panel reveal" id="about">
          <div className="section-head">
            <p className="eyebrow">About Me</p>
            <h2>Engineering AI that delivers in the real world</h2>
          </div>
          <p>
            My approach combines systems thinking, structured delivery, and modern AI engineering.
            I believe AI initiatives succeed when they are treated as engineered systems with clear
            reliability standards, governance, and operational fit.
          </p>
          <p>
            With a background spanning software development, digital strategy, and enterprise
            project leadership, I bridge technical depth with practical execution to create solutions
            that teams can adopt, trust, and scale.
          </p>
        </section>

        <section className="panel reveal">
          <div className="section-head">
            <p className="eyebrow">Core Expertise</p>
            <h2>Where I create the most impact</h2>
          </div>

          <div className="card-grid">
            {capabilities.map((item, index) => (
              <article className="info-card" key={item.title} style={{ animationDelay: `${index * 70}ms` }}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel reveal" id="journey">
          <div className="section-head">
            <p className="eyebrow">Career Journey</p>
            <h2>Built across delivery, digital, and engineering</h2>
          </div>

          <div className="timeline">
            {journey.map((item, index) => (
              <article className="timeline-item" key={`${item.role}-${item.period}`} style={{ animationDelay: `${index * 70}ms` }}>
                <p className="timeline-period">{item.period}</p>
                <h3>
                  {item.role} <span>@ {item.company}</span>
                </h3>
                <p>{item.highlight}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="split reveal">
          <article className="panel">
            <div className="section-head">
              <p className="eyebrow">Credentials</p>
              <h2>Certifications</h2>
            </div>
            <ul className="tag-list">
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="panel">
            <div className="section-head">
              <p className="eyebrow">Education</p>
              <h2>Academic Foundations</h2>
            </div>
            <ul className="tag-list">
              {education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="panel reveal" id="twin">
          <div className="section-head">
            <p className="eyebrow">AI Digital Twin</p>
            <h2>Chat with Justin&apos;s career twin</h2>
          </div>
          <p className="twin-intro">
            This assistant is powered by OpenAI and grounded in Justin&apos;s professional profile
            so you can quickly explore his experience, strengths, and career journey.
          </p>
          <DigitalTwinChat />
        </section>

        <section className="panel reveal" id="portfolio">
          <div className="section-head">
            <p className="eyebrow">Portfolio (In Progress)</p>
            <h2>Future case studies and build logs</h2>
          </div>

          <div className="card-grid portfolio-grid">
            {portfolioRoadmap.map((item, index) => (
              <article className="info-card portfolio-card" key={item.title} style={{ animationDelay: `${index * 70}ms` }}>
                <p className="status-pill">Roadmap</p>
                <h3>{item.title}</h3>
                <p>{item.scope}</p>
              </article>
            ))}
          </div>

          <div className="portfolio-actions">
            <Link className="button button-secondary" href="/portfolio">
              Open Portfolio Hub
            </Link>
          </div>
        </section>

        <section className="cta panel reveal" id="contact">
          <p className="eyebrow">Let&apos;s Build</p>
          <h2>Ready to turn AI capability into operational advantage?</h2>
          <p>
            Based in Johannesburg and open to collaboration on AI systems, automation architecture,
            and strategic delivery programs.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:underhill.justin@gmail.com">
              Start a conversation
            </a>
            <a className="button button-ghost" href="tel:+27814812165">
              +27 81 481 2165
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
