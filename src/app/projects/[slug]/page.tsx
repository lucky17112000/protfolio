import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="portfolio-shell">
      <div className="bg-grid" aria-hidden="true" />
      <section className="section container project-detail-section reveal">
        <div className="project-detail-top">
          <Link href="/#projects" className="btn btn-secondary">
            Back to Projects
          </Link>
          <span className="project-detail-tag">Project Details</span>
        </div>

        <article className="card glass project-detail-card">
          <div className="project-detail-image-wrap" aria-hidden="true">
            <Image
              className="project-image-media"
              src={project.imageSrc}
              alt={`${project.name} screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 920px"
            />
          </div>

          <h1 className="project-detail-title">{project.name}</h1>
          <p className="project-detail-desc">{project.detailDescription}</p>

          <div className="project-detail-links">
            <a
              className="btn btn-primary"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Project
            </a>
            <a
              className="btn btn-secondary"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </div>

          <section className="project-detail-block">
            <h2>Main Technology Stack</h2>
            <ul className="chip-list">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </section>

          <section className="project-detail-block">
            <h2>Challenges Faced</h2>
            <ul className="project-detail-list">
              {project.challenges.map((challenge) => (
                <li key={challenge}>{challenge}</li>
              ))}
            </ul>
          </section>

          <section className="project-detail-block">
            <h2>Potential Improvements and Future Plans</h2>
            <ul className="project-detail-list">
              {project.improvements.map((plan) => (
                <li key={plan}>{plan}</li>
              ))}
            </ul>
          </section>
        </article>
      </section>
    </main>
  );
}
