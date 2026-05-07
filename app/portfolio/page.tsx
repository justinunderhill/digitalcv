import Link from "next/link";

const liveCaseStudies = [
  {
    title: "Finally",
    url: "https://finally-beryl.vercel.app/",
    detail: "Live deployed project hosted on Vercel.",
  },
];

const queuedCaseStudies = [
  "Agent-driven workflow blueprint with design rationale and implementation notes.",
  "LLM assistant deployment with guardrails, context strategy, and QA outcomes.",
  "Automation impact dashboards showing baseline-to-improvement metrics.",
];

export default function PortfolioPage() {
  return (
    <main className="shell portfolio-shell">
      <span className="label">{"// portfolio"}</span>
      <h1>Case studies in development</h1>
      <p>
        This space will hold a small set of build logs covering production AI
        systems, automation architecture, and measurable delivery outcomes —
        each written as a release-ready post with design rationale, tradeoffs,
        and results.
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
        {queuedCaseStudies.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="hero-actions">
        <Link className="button button-primary" href="/">
          Back to home
        </Link>
        <a
          className="button button-ghost"
          href="https://www.linkedin.com/in/justinunderhill"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn profile
        </a>
      </div>
    </main>
  );
}
