import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getPortfolioProject,
  portfolioProjects,
} from "@/lib/portfolio-projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) {
    return {
      title: "Portfolio project",
    };
  }

  return {
    title: `${project.title} | Justin Underhill Portfolio`,
    description: project.detail,
  };
}

export default async function PortfolioProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="shell portfolio-detail-shell" id="top">
      <div className="portfolio-detail-hero">
        <Link className="archive-link" href="/portfolio">
          ← Back to portfolio
        </Link>
        <span className="label">{"// project showcase"}</span>
        <p className="project-category">{project.category}</p>
        <h1>{project.title}</h1>
        <p className="portfolio-detail-lede">{project.overview}</p>
        <div className="hero-actions portfolio-detail-actions">
          <a
            className="button button-primary"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            Visit live site
          </a>
          <Link className="button button-ghost" href="/portfolio">
            Back to portfolio hub
          </Link>
        </div>
      </div>

      {project.problem && project.approach && project.result ? (
        <section className="portfolio-detail-band" aria-labelledby="story-heading">
          <div>
            <span className="label">{"// the story"}</span>
            <h2 id="story-heading">Problem, approach, result</h2>
          </div>
          <div className="portfolio-detail-grid portfolio-story-grid">
            <article className="portfolio-detail-card">
              <span className="case-study-kicker">problem</span>
              <p>{project.problem}</p>
            </article>
            <article className="portfolio-detail-card">
              <span className="case-study-kicker">approach</span>
              <p>{project.approach}</p>
            </article>
            <article className="portfolio-detail-card">
              <span className="case-study-kicker">result</span>
              <p>{project.result}</p>
            </article>
          </div>
        </section>
      ) : null}

      {project.buildFocus && project.buildFocus.length > 0 ? (
        <section className="portfolio-detail-band" aria-labelledby="build-focus-heading">
          <div>
            <span className="label">{"// build focus"}</span>
            <h2 id="build-focus-heading">How it works</h2>
          </div>
          <div className="portfolio-detail-grid">
            {project.buildFocus.map((item, index) => (
              <article className="portfolio-detail-card" key={item}>
                <span className="capability-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {project.catalog && project.catalog.length > 0 ? (
        <section className="portfolio-detail-band" aria-labelledby="catalog-heading">
          <div>
            <span className="label">{"// in the catalog"}</span>
            <h2 id="catalog-heading">What it can produce</h2>
          </div>
          <ul className="project-skill-list">
            {project.catalog.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="portfolio-detail-band" aria-labelledby="skills-used-heading">
        <div>
          <span className="label">{"// tech & skills"}</span>
          <h2 id="skills-used-heading">Built with</h2>
        </div>
        <ul className="project-skill-list">
          {project.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      {project.processNote ? (
        <section className="portfolio-detail-band" aria-labelledby="process-heading">
          <div>
            <span className="label">{"// engineering process"}</span>
            <h2 id="process-heading">How it was built</h2>
          </div>
          <p className="portfolio-process-note">{project.processNote}</p>
        </section>
      ) : null}

      {project.proofPoints && project.proofPoints.length > 0 ? (
        <section className="portfolio-detail-band" aria-labelledby="proof-heading">
          <div>
            <span className="label">{"// proof points"}</span>
            <h2 id="proof-heading">Why it matters</h2>
          </div>
          <div className="portfolio-proof-list">
            {project.proofPoints.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </section>
      ) : null}

      <aside className="privacy-note">
        This write-up focuses on Justin&apos;s build and delivery work. The
        linked live site is public and may include the client&apos;s own contact
        routes, managed separately from this portfolio.
      </aside>
    </main>
  );
}
