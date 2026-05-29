import Link from "next/link";
import { portfolioProjects } from "@/lib/portfolio-projects";

export default function PortfolioPage() {
  return (
    <main className="shell portfolio-shell" id="top">
      <div className="portfolio-hero">
        <span className="label">{"// portfolio"}</span>
        <h1>Work that I do</h1>
        <p>
          Live project work across AI products, legal tooling, property,
          specialist services, and medical support — each card opens a short
          problem-to-result write-up alongside the live site.
        </p>
      </div>
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
