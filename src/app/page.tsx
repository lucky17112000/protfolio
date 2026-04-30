import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

const sliderProjects = [...projects, ...projects];

const skills = {
  Frontend: [
    { name: "Next.js", level: 78 },
    { name: "React", level: 80 },
    { name: "TypeScript", level: 74 },
    { name: "TanStack Query", level: 50 },
  ],
  Backend: [
    { name: "Node.js", level: 88 },
    { name: "Express.js", level: 84 },
    { name: "REST API", level: 90 },
    { name: "JWT/Auth", level: 82 },
  ],
  DatabasesAndTools: [
    { name: "PostgreSQL", level: 82 },
    { name: "MongoDB", level: 79 },
    { name: "Docker", level: 68 },
    { name: "Git/GitHub", level: 88 },
  ],
};

const academicQualifications = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institute: "American International University-Bangladesh (AIUB)",
    timeline: "2022 - 2026 (Expected)",
    details:
      "Core focus: algorithms, data structures, database systems, software engineering, and system design.",
  },
  {
    degree: "Higher Secondary Certificate (Science)",
    institute: "National Curriculum, Bangladesh",
    timeline: "Completed",
    details:
      "Built strong fundamentals in mathematics, physics, and analytical problem-solving that now support my software engineering approach.",
  },
];

const experiences = [
  {
    role: "Backend Developer (Project-Based)",
    timeline: "2023 - Present",
    org: "Personal and Academic Projects",
    points: [
      "Designed and implemented backend APIs for full-stack applications.",
      "Structured database schemas with scalability and maintainability in mind.",
      "Managed deployment-ready workflows using Git, CI-friendly structure, and clean code practices.",
    ],
  },
  {
    role: "Competitive Programming Practitioner",
    timeline: "2021 - Present",
    org: "Codeforces | Pupil(1200+ rating) | CodeChef (2-star)",
    points: [
      "Solved 1000+ algorithmic problems across multiple platforms.",
      "Improved under-pressure problem decomposition and optimization skills.",
      "Applied algorithmic thinking to real software engineering tasks.",
    ],
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
        <a className="brand" href="#hero" aria-label="Go to hero section">
          <span className="brand-name">ALAMIN MUSTAFA RAHIM</span>
        </a>
        <nav className="menu" aria-label="Primary navigation">
          <a className="menu-link" href="#about">
            About
          </a>
          <a className="menu-link" href="#skills">
            Skills
          </a>
          <a className="menu-link" href="#academic">
            Education
          </a>
          <a className="menu-link" href="#experience">
            Experience
          </a>
          <a className="menu-link" href="#projects">
            Projects
          </a>
          <a className="menu-link" href="#contact">
            Contact
          </a>
        </nav>
        <a
          className="btn btn-nav-resume"
          href="/https://www.codechef.com/users/lucky10000"
          download
        >
          Resume
        </a>
        <details className="mobile-nav">
          <summary>Menu</summary>
          <div className="mobile-nav-menu glass">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#academic">Education</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="/resume.pdf" download>
              Resume
            </a>
          </div>
        </details>
      </header>

      <section
        id="hero"
        className="section hero container reveal"
        style={{ animationDelay: "140ms" }}
      >
        <div className="hero-grid">
          <div className="hero-content">
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
              clean architecture, and reliable product engineering.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#projects">
                View Projects
              </a>
              <a
                className="btn btn-resume cta-btn-equal"
                href="https://www.codechef.com/users/lucky10000"
                target="_blank"
                rel="noopener noreferrer"
              >
                CodeChef
              </a>
              <a
                className="btn btn-secondary cta-btn-equal"
                href="https://github.com/lucky17112000?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="btn btn-codeforces cta-btn-equal"
                href="https://codeforces.com/profile/AxonOops"
                target="_blank"
                rel="noopener noreferrer"
              >
                Codeforces
              </a>
              <a
                className="btn btn-secondary cta-btn-equal"
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
              alt="Portrait of Alamin Mustafa Rahim"
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
          <article className="card glass about-main ">
            <h3 className="academic-timeline">ABOUT ME</h3>
            <p>
              I am a backend-focused software engineer who enjoys turning
              complex requirements into clean, production-ready systems. My
              workflow blends practical API engineering with competitive
              programming discipline, helping me write fast, reliable, and
              scalable solutions.
            </p>
            <p>
              Outside programming, I enjoy strategy games, following sports, and
              exploring productivity systems that help me work with focus. I try
              to bring the same mindset to software: practical, calm, and
              quality-oriented.
            </p>
            <p className="about-highlight">
              <strong>Competitive programming</strong>,{" "}
              <strong>European football</strong>,<strong>Real Madrid</strong>,{" "}
              <strong>jogging</strong>, <strong>playing football</strong>, and{" "}
              <strong>calisthenics</strong> are important parts of my routine.
              They keep me focused, active, and disciplined while I work and
              learn.
            </p>
          </article>
          <article className="card glass about-quick-facts">
            <h2 className="academic-timeline">Profile Focus</h2>
            {/* <h3 className="academic-timeline">ABOUT ME</h3> */}
            <ul className="about-points">
              <li>
                Design and build scalable backend systems with clean
                architecture
              </li>
              <li>DSA-driven optimization mindset</li>
              <li>
                Develop secure and efficient RESTful APIs with real-world use
                cases
              </li>
              <li>
                Apply DSA and problem-solving techniques for optimized
                solutionss
              </li>
              <li>
                Maintain consistency in competitive programming (Codeforces)
              </li>
              <li>Write clean, maintainable, and production-ready code</li>
              <li>
                Hands-on experience with deployment tools (Docker, Vercel)
              </li>
              <li>
                Ensure performance, scalability, and code quality in every
                project
              </li>
              <li>
                Knowledge of authentication, authorization, and secure API
                practices
              </li>
              <li>Clean code with deployment readiness</li>
            </ul>
          </article>
          <article className="card glass about-quick-facts">
            <h2 className="academic-timeline">Personal Traits</h2>
            <ul className="about-points">
              <li>Self-motivated and quick learner</li>
              <li>Consistent and disciplined in daily practice</li>
              <li>Able to work under pressure and meet deadlines</li>
              <li>Good communication and teamwork skills</li>
              {/* <li>Detail-oriented with focus on code quality</li> */}
              <li>Adaptable to new technologies and challenges</li>
              <li>
                Growth-oriented mindset with continuous self-improvement through
                practice and learning
              </li>
              <li>
                Detail-focused approach ensuring high-quality, bug-resistant
                code
              </li>
              <li>
                Thinks in systems, not just code — focuses on scalability and
                architecture
              </li>
              <li>
                Takes end-to-end ownership of projects (design → development →
                deployment)
              </li>
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
              <h3 className="academic-timeline">
                {category === "DatabasesAndTools"
                  ? "Databases & Tools"
                  : category}
              </h3>
              <ul className="skill-meter-list">
                {items.map((item) => (
                  <li key={item.name} className="skill-meter-item">
                    <div className="skill-meter-head">
                      <span>{item.name}</span>
                      <span>{item.level}%</span>
                    </div>
                    <div className="skill-meter-track" aria-hidden="true">
                      <span
                        className="skill-meter-fill"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
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
          <h2>Educational Qualification</h2>
          <a className="btn btn-secondary" href="#contact">
            Contact for CV
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
        id="experience"
        className="section container reveal"
        style={{ animationDelay: "320ms" }}
      >
        <div className="section-head">
          <h2>Experience</h2>
          <a className="btn btn-secondary" href="#contact">
            Open to Opportunities
          </a>
        </div>
        <div className="experience-grid">
          {experiences.map((item, index) => (
            <article
              key={item.role}
              className={`card glass experience-card ${
                index === 1 ? "card-shadow" : ""
              }`}
            >
              <p className="academic-timeline">{item.timeline}</p>
              <h3>{item.role}</h3>
              <p className="academic-institute">{item.org}</p>
              <ul className="about-points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="section container reveal"
        style={{ animationDelay: "340ms" }}
      >
        <div className="section-head">
          <h2>Projects</h2>
          <a
            className="btn btn-secondary"
            href="https://github.com/lucky17112000?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            All Repositories
          </a>
        </div>
        <div className="project-slider" aria-label="Featured projects slider">
          <div className="project-slider-track">
            {sliderProjects.map((project, index) => (
              <article
                key={`${project.slug}-${index}`}
                className="slider-card glass"
              >
                <Image
                  className="slider-image"
                  src={project.imageSrc}
                  alt={`${project.name} preview`}
                  fill
                  sizes="(max-width: 768px) 84vw, 340px"
                />
                <div className="slider-mini-info">
                  <span>{project.name}</span>
                  <a
                    className="slider-mini-button"
                    href={
                      project.upcoming
                        ? `/projects/${project.slug}`
                        : project.live
                    }
                    target={project.upcoming ? undefined : "_blank"}
                    rel={project.upcoming ? undefined : "noopener noreferrer"}
                  >
                    {project.upcoming ? "Details" : "Live Demo"}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="project-grid project-grid-static ">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="card glass project-card relative card-hover"
            >
              <div className="project-image-placeholder" aria-hidden="true">
                <Image
                  className="project-image-media"
                  src={project.imageSrc}
                  alt={`${project.name} screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <h3>{project.name}</h3>
              {project.upcoming ? (
                <p className="project-status project-status-upcoming absolute top-6 right-6 z-10 px-2 py-1 text-xs rounded-md bg-yellow-500 text-black font-medium ">
                  Upcoming
                </p>
              ) : null}
              <p>{project.shortDescription}</p>
              <ul className="chip-list">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className=" flex flex-col gap-2 mt-auto ">
                <Link
                  className="btn btn-primary"
                  href={`/projects/${project.slug}`}
                >
                  View More
                </Link>
                <a
                  className="btn btn-secondary"
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          ))}
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
            Email: alaminmustafa17112000@gmail.com
          </a>
          <a className="card glass link-underline" href="tel:+8801797160713">
            Phone: +880 1797160713
          </a>
          <a
            className="card glass link-underline"
            href="https://wa.me/8801797160713"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp: +880 1797160713
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
