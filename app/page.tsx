import Link from "next/link";
import { DigitalTwinChat } from "./components/digital-twin-chat";

const keyStats = [
  { label: "Years In Digital & Delivery", value: "12+", cue: "High score" },
  { label: "Cross-Functional Roles", value: "10", cue: "Career tracks" },
  { label: "Current Core Focus", value: "Agentic AI", cue: "Now playing" },
  { label: "Region", value: "Johannesburg", cue: "Broadcast from" },
];

const capabilities = [
  {
    code: "01",
    title: "Agentic AI Systems",
    detail:
      "Designing multi-agent workflows and orchestration patterns that solve real operational problems.",
  },
  {
    code: "02",
    title: "LLM Application Engineering",
    detail:
      "Building practical assistants and decision-support systems with reliable context handling and controlled outputs.",
  },
  {
    code: "03",
    title: "AI Automation Architecture",
    detail:
      "Integrating automation layers into existing business workflows to improve speed, quality, and consistency.",
  },
  {
    code: "04",
    title: "Project & Delivery Leadership",
    detail:
      "Leading full project lifecycles, stakeholder alignment, and handovers that keep strategy tied to execution.",
  },
  {
    code: "05",
    title: "Data & Performance Thinking",
    detail:
      "Using analytics, reporting, and KPI frameworks to measure impact and continuously improve outcomes.",
  },
  {
    code: "06",
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
  "PRINCE2 Foundation Certification Training",
  "Generative AI for Project Managers",
  "GenAI Academy: Yellow Belt Level 2 for Consultants",
  "AI Change Management: Leading the Transformation",
  "Responsible Use of AI",
];

const education = [
  "Stellenbosch University - Certificate in Digital Marketing",
  "Stanford Online - Computer Science coursework",
  "HFPA - Diploma in Exercise Science (Personal Training)",
];

const certificationArchiveUrl =
  "https://www.linkedin.com/in/justinunderhill/details/certifications/";

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

const broadcastItems = [
  "VHS memory",
  "Mixtape logic",
  "Arcade focus",
  "AI delivery",
  "Johannesburg signal",
];

const calibrationNotes = [
  {
    label: "Movie Era",
    title: "Cinematic framing",
    copy:
      "The layout uses posters, frames, tracking lines, and bold title treatments to make the first impression feel directed rather than templated.",
  },
  {
    label: "Music Era",
    title: "Mixtape structure",
    copy:
      "Expertise is arranged like a tracklist so the work feels curated, personal, and easy to scan without losing professional substance.",
  },
  {
    label: "Tech Era",
    title: "Terminal intelligence",
    copy:
      "The Digital Twin keeps the modern AI capability visible, but presents it through a retro terminal language that fits the story.",
  },
];

export default function Home() {
  return (
    <div className="retro-shell">
      <div className="vhs-noise" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />

      <header className="top-nav reveal">
        <a className="brand" href="#home" aria-label="Justin Underhill homepage">
          <span className="brand-mark">JU</span>
          <span className="brand-copy">
            <strong>1979 Signal</strong>
            <small>AI systems engineer</small>
          </span>
        </a>

        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#tracks">Capabilities</a>
          <a href="#journey">Experience</a>
          <a href="#twin">Twin</a>
          <a href="#portfolio">Portfolio</a>
        </nav>
      </header>

      <main>
        <section className="hero reveal" id="home">
          <div className="hero-copy-panel">
            <p className="eyebrow">Signal from 1979</p>
            <h1>Justin Underhill</h1>
            <p className="hero-title">
              Born analog. Raised on cinema, mixtapes, arcades, and early digital signals.
              Building intelligent systems for the AI era.
            </p>
            <p className="hero-copy">
              I design and deploy practical AI systems that fit inside real business
              environments. The work is modern, but the operating style is shaped by an
              era of bold interfaces, memorable soundtracks, and technology that felt
              like discovery.
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
                Contact Justin
              </a>
            </div>

            <dl className="hero-meta" aria-label="Profile signal details">
              <div>
                <dt>Origin year</dt>
                <dd>1979</dd>
              </div>
              <div>
                <dt>Format</dt>
                <dd>Analog to AI</dd>
              </div>
              <div>
                <dt>Signal</dt>
                <dd>Human-led systems</dd>
              </div>
            </dl>
          </div>

          <aside className="signal-stack" aria-label="Current focus">
            <div className="poster-card poster-card-primary">
              <div className="poster-billing">
                <span>Delivery</span>
                <span>Automation</span>
                <span>AI</span>
              </div>
              <span>Feature</span>
              <strong>Agentic AI</strong>
              <small>Now showing</small>
            </div>
            <div className="cassette">
              <div className="cassette-label">
                <span>Side A</span>
                <strong>Systems</strong>
              </div>
              <div className="cassette-window" aria-hidden="true">
                <span />
                <span />
              </div>
              <p>Multi-agent workflows / LLM apps / automation architecture</p>
            </div>
            <div className="poster-row">
              <div className="mini-poster">VHS</div>
              <div className="mini-poster">CRT</div>
              <div className="mini-poster">AI</div>
            </div>
          </aside>
        </section>

        <section className="broadcast-strip reveal" aria-label="Broadcast themes">
          <span>On Air</span>
          <div>
            {[...broadcastItems, ...broadcastItems].map((item, index) => (
              <strong key={`${item}-${index}`}>{item}</strong>
            ))}
          </div>
        </section>

        <section className="scoreboard reveal" aria-label="Key highlights">
          {keyStats.map((item, index) => (
            <article
              className="score-card"
              key={item.label}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <p className="score-cue">{item.cue}</p>
              <p className="score-value">{item.value}</p>
              <p className="score-label">{item.label}</p>
            </article>
          ))}
        </section>

        <section className="panel liner-notes reveal" id="about">
          <div className="section-head">
            <p className="eyebrow">Liner Notes</p>
            <h2>The analog-to-AI arc</h2>
          </div>

          <div className="side-grid">
            <article>
              <p className="side-label">Side A</p>
              <h3>Digital craft and delivery</h3>
              <p>
                My background spans software development, digital strategy, reporting,
                performance thinking, and enterprise project leadership. That range lets
                me move between technical detail and operational reality without losing
                the thread.
              </p>
            </article>
            <article>
              <p className="side-label">Side B</p>
              <h3>AI systems that can be trusted</h3>
              <p>
                I believe AI initiatives succeed when they are treated as engineered
                systems with clear reliability standards, governance, human oversight,
                and measurable adoption inside the business.
              </p>
            </article>
          </div>
        </section>

        <section className="panel calibration reveal">
          <div className="section-head">
            <p className="eyebrow">Signal Calibration</p>
            <h2>How the era shows up in the interface</h2>
          </div>

          <div className="calibration-grid">
            {calibrationNotes.map((item) => (
              <article className="calibration-card" key={item.title}>
                <p>{item.label}</p>
                <h3>{item.title}</h3>
                <span aria-hidden="true" />
                <small>{item.copy}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="panel mixtape reveal" id="tracks">
          <div className="section-head">
            <p className="eyebrow">Mixtape</p>
            <h2>Core expertise, track by track</h2>
          </div>

          <div className="track-list">
            {capabilities.map((item, index) => (
              <article
                className="track"
                key={item.title}
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <span className="track-code">{item.code}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="panel film-reel reveal" id="journey">
          <div className="section-head">
            <p className="eyebrow">Film Reel</p>
            <h2>Scenes from the career archive</h2>
          </div>

          <div className="timeline">
            {journey.map((item, index) => (
              <article
                className="timeline-item"
                key={`${item.role}-${item.period}`}
                style={{ animationDelay: `${index * 70}ms` }}
              >
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
          <article className="panel sleeve-panel">
            <div className="section-head">
              <p className="eyebrow">Credits</p>
              <h2>Certifications</h2>
            </div>
            <p className="credential-note">
              Selected credentials are shown here. The full certification archive
              lives on LinkedIn and can be opened as the complete source of record.
            </p>
            <ul className="tag-list">
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
              Full credential archive
            </a>
          </article>

          <article className="panel sleeve-panel">
            <div className="section-head">
              <p className="eyebrow">Archive</p>
              <h2>Education</h2>
            </div>
            <ul className="tag-list">
              {education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="panel terminal-panel reveal" id="twin">
          <div className="section-head">
            <p className="eyebrow">Retro Terminal</p>
            <h2>Chat with Justin&apos;s career twin</h2>
          </div>
          <p className="twin-intro">
            A modern AI assistant presented like a late-night terminal: grounded in
            Justin&apos;s professional profile and ready to answer questions about his
            experience, strengths, and career journey.
          </p>
          <DigitalTwinChat />
        </section>

        <section className="panel video-shelf reveal" id="portfolio">
          <div className="section-head">
            <p className="eyebrow">Video Shelf</p>
            <h2>Future case studies and build logs</h2>
          </div>

          <div className="shelf-grid">
            {portfolioRoadmap.map((item, index) => (
              <article
                className="case-tape"
                key={item.title}
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <p className="status-pill">Coming Soon</p>
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
          <p className="eyebrow">Final Frame</p>
          <h2>Ready to turn AI capability into operational advantage?</h2>
          <p>
            Based in Johannesburg and open to collaboration on AI systems,
            automation architecture, and strategic delivery programs.
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

      <a className="back-to-top" href="#home" aria-label="Back to top">
        <span aria-hidden="true">▲</span>
        Top
      </a>
    </div>
  );
}
