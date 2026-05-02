import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <section className="panel portfolio-hub reveal">
        <p className="eyebrow">Video Shelf</p>
        <h1>Case studies are being prepared.</h1>
        <p>
          This section will showcase production AI systems, automation
          architecture decisions, and measurable delivery outcomes as a set of
          release-ready build logs.
        </p>

        <ul>
          <li>Agentic workflow blueprint with design rationale and implementation notes.</li>
          <li>LLM assistant deployment case with guardrails, context strategy, and QA outcomes.</li>
          <li>Automation impact dashboards showing baseline-to-improvement metrics.</li>
        </ul>

        <div className="hero-actions">
          <Link className="button button-primary" href="/">
            Back to homepage
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
      </section>
    </div>
  );
}
