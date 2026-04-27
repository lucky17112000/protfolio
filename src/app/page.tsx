import Image from "next/image";

const projects = [
  {
    name: "Ecospark",
    description:
      "Sustainability-focused web app with clean UX and production-ready frontend deployment.",
    stack: ["Node.js", "Express", "TypeScript", "PostgreSQL"],
    github: "https://github.com/lucky17112000/ecospark-backend",
    live: "https://ecospark-frontend-ruddy.vercel.app/",
    imageLabel: "screenshot-1",
    imageSrc: "/ecospark.jpg",
  },
  {
    name: "Contest Tracker Dashboard",
    description:
      "A dashboard to monitor solved problems, rating progress, and contest history across multiple CP platforms.",
    stack: ["Next.js", "TypeScript", "REST API", "MongoDB"],
    github: "https://github.com/lucky17112000/assingment-4",
    live: "https://assingment-4-frontend.vercel.app/",
    imageLabel: "screenshot-2",
    imageSrc: "/tutor.jpg",
  },
  {
    name: "Dockerized URL Service",
    description:
      "Upcoming backend project. Details and full deployment will be added soon.",
    stack: ["Node.js", "Express", "Docker", "PostgreSQL"],
    github: "https://github.com/",
    live: "https://example.com/",
    imageLabel: "screenshot-3",
    imageSrc: "/doctor.jpg",
    upcoming: true,
  },
];

const sliderProjects = [...projects, ...projects];

const skills = {
  Backend: ["Node.js", "Express.js", "REST API", "JWT"],
  Languages: ["C++", "JavaScript", "TypeScript", "Python"],
  Databases: ["MongoDB", "PostgreSQL", "MySQL", "SQL"],
  Tools: ["Git", "GitHub", "Docker", "Postman"],
  Concepts: ["Data Structures", "Algorithms"],
};

const academicQualifications = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institute: "American International University-Bangladesh (AIUB)",
    timeline: "2022 - 2026 (Expected)",
    details:
      "Core focus: algorithms, data structures, database systems, software engineering, and system design.",
  },
];

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="portfolio-shell">
      <div className="bg-grid" aria-hidden="true" />

      <header
        className="nav container reveal"
        style={{ animationDelay: "80ms" }}
      >
        <a className="brand link-underline" href="#hero">
          ALAMIN MUSTAFA RAHIM
        </a>
        <nav className="menu">
          <a className="link-underline" href="#about">
            About
          </a>
          <a className="link-underline" href="#academic">
            Academics
          </a>
          <a className="link-underline" href="#projects">
            Projects
          </a>
          <a className="link-underline" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <section
        id="hero"
        className="section hero container reveal"
        style={{ animationDelay: "140ms" }}
      >
        <div className="hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Software Engineering Portfolio</p>
            <h1>
              <span className="hero-name">ALAMIN MUSTAFA RAHIM</span>
              <span className="hero-caret" aria-hidden="true">
                _
              </span>
              <span className="hero-line">
                Software Engineer | Backend Developer | Competitive Programmer
              </span>
            </h1>
            <p className="lead">
              I build robust backend systems and solve algorithmic problems with
              speed, precision, and consistency. My focus is scalable APIs,
              clean architecture, and competitive programming discipline.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#projects">
                View Projects
              </a>
              <a
                className="btn btn-secondary"
                href="https://github.com/lucky17112000?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="btn btn-codeforces"
                href="https://codeforces.com/profile/AxonOops"
                target="_blank"
                rel="noopener noreferrer"
              >
                Codeforces
              </a>
              <a
                className="btn btn-secondary"
                href="https://www.linkedin.com/in/alamin-mustafa-rahim-433407271/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <aside className="hero-photo glass" aria-label="Profile photo">
            <Image
              className="hero-photo-image"
              src="/pexels-gabriel-passos-71368745-14737807.jpg"
              alt="Profile visual"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 760px"
            />
          </aside>
        </div>
      </section>

      <section
        id="about"
        className="section container reveal"
        style={{ animationDelay: "200ms" }}
      >
        <div className="section-head">
          <h2>About</h2>
          <a className="btn btn-secondary" href="#contact">
            Let&apos;s Work Together
          </a>
        </div>
        <div className="about-grid">
          <article className="card glass about-main">
            <p>
              I am a backend-focused software engineer who enjoys turning
              complex requirements into clean, production-ready systems. My
              workflow blends practical API engineering with competitive
              programming discipline, helping me write fast, reliable, and
              scalable solutions.
            </p>
            <p>
              I care deeply about architecture quality, maintainability, and
              performance. From authentication services to database-driven
              applications, I build systems that are structured for growth and
              real-world use.
            </p>
          </article>
          <article className="card glass about-quick-facts">
            <h3>Profile Focus</h3>
            <ul className="about-points">
              <li>Backend architecture and API design</li>
              <li>DSA-driven optimization mindset</li>
              <li>Competitive programming consistency</li>
              <li>Clean code with deployment readiness</li>
            </ul>
          </article>
        </div>
      </section>

      <section
        id="skills"
        className="section container reveal"
        style={{ animationDelay: "260ms" }}
      >
        <div className="section-head">
          <h2>Skills</h2>
          <a className="btn btn-secondary" href="#projects">
            Explore Projects
          </a>
        </div>
        <div className="skill-grid">
          {Object.entries(skills).map(([category, items]) => (
            <article key={category} className="card glass skill-card-pop">
              <h3>{category}</h3>
              <ul className="chip-list skill-chip-list">
                {items.map((item) => (
                  <li key={item} className="skill-pill">
                    <span className="skill-dot" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        id="academic"
        className="section container reveal"
        style={{ animationDelay: "300ms" }}
      >
        <div className="section-head">
          <h2>Academic Qualification</h2>
          <a className="btn btn-secondary" href="#contact">
            View Full Details
          </a>
        </div>
        <div className="academic-grid">
          {academicQualifications.map((item) => (
            <article key={item.degree} className="card glass academic-card">
              <p className="academic-timeline">{item.timeline}</p>
              <h3>{item.degree}</h3>
              <p className="academic-institute">{item.institute}</p>
              <p>{item.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="section container reveal"
        style={{ animationDelay: "320ms" }}
      >
        <div className="section-head">
          <h2>Projects</h2>
          <a
            className="btn btn-secondary"
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            All Repositories
          </a>
        </div>
        <div className="project-slider" aria-label="Project slider">
          <div className="project-slider-track">
            {sliderProjects.map((project, index) => (
              <a
                key={`${project.name}-${index}`}
                className="slider-link-card glass"
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open live project: ${project.name}`}
              >
                <div
                  className="project-image-placeholder slider-image"
                  aria-hidden="true"
                >
                  {project.imageSrc ? (
                    <Image
                      className="project-image-media"
                      src={project.imageSrc}
                      alt={`${project.name} screenshot`}
                      fill
                      sizes="(max-width: 768px) 84vw, 340px"
                    />
                  ) : (
                    <span>{project.imageLabel}</span>
                  )}
                </div>
                <div className="slider-mini-info">
                  <span>{project.name}</span>
                  <small>{project.upcoming ? "Upcoming" : "Live Demo"}</small>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="project-grid project-grid-static">
          {projects.map((project) => (
            <article
              key={`static-${project.name}`}
              className="card glass project-card"
            >
              <div className="project-image-placeholder" aria-hidden="true">
                {project.imageSrc ? (
                  <Image
                    className="project-image-media"
                    src={project.imageSrc}
                    alt={`${project.name} screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                ) : (
                  <span>{project.imageLabel}</span>
                )}
              </div>
              <h3>{project.name}</h3>
              {project.upcoming ? (
                <p className="project-status project-status-upcoming">
                  Upcoming
                </p>
              ) : null}
              <p>{project.description}</p>
              <ul className="chip-list">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <a
                className="btn btn-primary"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </article>
          ))}
        </div>
      </section>

      <section
        id="cp"
        className="section container reveal"
        style={{ animationDelay: "380ms" }}
      >
        <div className="section-head">
          <h2>Competitive Programming</h2>
          <a className="btn btn-secondary" href="#contact">
            Collaborate
          </a>
        </div>
        <div className="cp-grid">
          <article className="card glass">
            <h3>Profiles</h3>
            <p>
              Codeforces and LeetCode profile links with active contest and
              problem-solving participation.
            </p>
            <div className="cta-row">
              <a
                className="btn btn-secondary"
                href="https://codeforces.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Codeforces
              </a>
              <a
                className="btn btn-secondary"
                href="https://leetcode.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LeetCode
              </a>
            </div>
          </article>
          <article className="card glass metrics">
            <h3>Highlights</h3>
            <p>
              <strong>Problems Solved:</strong> 1000+
            </p>
            <p>
              <strong>Best Rating (Pupil on Codeforces):</strong> 1200+
            </p>
            <p>
              <strong>Contest Experience:</strong> Regular online contests and
              timed practice.
            </p>
          </article>
        </div>
      </section>

      <section
        id="contact"
        className="section container reveal"
        style={{ animationDelay: "500ms" }}
      >
        <div className="section-head">
          <h2>Contact</h2>
          <a
            className="btn btn-primary"
            href="mailto:alaminmustafa17112000@gmail.com"
          >
            Send Message
          </a>
        </div>
        <div className="contact-grid">
          <a
            className="card glass link-underline"
            href="mailto:alaminmustafa17112000@gmail.com"
          >
            alaminmustafa17112000@gmail.com
          </a>
          <a
            className="card glass link-underline"
            href="https://github.com/lucky17112000?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/lucky17112000
          </a>
          <a
            className="card glass link-underline"
            href="https://www.linkedin.com/in/alamin-mustafa-rahim-433407271/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/alamin-mustafa-rahim-433407271/
          </a>
        </div>
      </section>

      <footer
        className="footer container reveal"
        style={{ animationDelay: "560ms" }}
      >
        <p className="footer-copy">
          © {currentYear} Alamin Mustafa Rahim. Crafted with precision.
        </p>
        <div className="footer-links">
          <a
            className="link-underline"
            href="https://github.com/lucky17112000?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="link-underline"
            href="https://www.linkedin.com/in/alamin-mustafa-rahim-433407271/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="link-underline"
            href="mailto:alaminmustafa17112000@gmail.com"
          >
            Email
          </a>
        </div>
      </footer>
    </main>
  );
}
