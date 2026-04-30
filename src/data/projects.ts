export type ProjectItem = {
  slug: string;
  name: string;
  shortDescription: string;
  detailDescription: string;
  stack: string[];
  github: string;
  live: string;
  imageSrc: string;
  challenges: string[];
  improvements: string[];
  upcoming?: boolean;
};

export const projects: ProjectItem[] = [
  {
    slug: "ecospark",
    name: "Ecospark",
    shortDescription:
      "Sustainability-focused web app with clean UX and production-ready frontend deployment.",
    detailDescription:
      "Ecospark is a sustainability platform focused on awareness, eco-friendly tips, and community engagement. I developed a backend-first architecture to support fast APIs, clean data modeling, and reliable deployment workflows.",
    stack: ["Node.js", "Express", "TypeScript", "PostgreSQL"],
    github: "https://github.com/lucky17112000/ecospark-backend",
    live: "https://ecospark-frontend-ruddy.vercel.app/",
    imageSrc: "/ecospark.jpg",
    challenges: [
      "Designing scalable API routes while keeping responses lightweight.",
      "Keeping backend data contracts stable during iterative frontend changes.",
      "Balancing performance, validation, and maintainability in controller logic.",
    ],
    improvements: [
      "Add role-based dashboards and advanced analytics.",
      "Introduce caching for high-traffic endpoints.",
      "Expand automated test coverage for critical API flows.",
    ],
  },
  {
    slug: "Tutor-Tracker-Dashboard",
    name: "Tutor Tracker Dashboard",
    shortDescription:
      "A platform that connects students with qualified tutors through smart search and seamless communication.",
    detailDescription:
      "Built a powerful platform that connects students with the right tutors through intelligent search and seamless interaction.Engineered a high-performance tutor discovery system enabling fast, accurate, and efficient tutor matching.Developed a scalable tutor-finding platform focused on precision search, real-time communication, and user experience.Created a dynamic system that bridges students and tutors with smart filtering and smooth connectivity ",
    stack: ["Next.js", "TypeScript", "REST API", "PostgreSQL"],
    github: "https://github.com/lucky17112000/assingment-4",
    live: "https://assingment-4-frontend.vercel.app/",
    imageSrc: "/tutor.jpg",
    challenges: [
      "Normalizing data from different platforms with different response formats.",
      "Building responsive visual summaries without hurting page performance.",
      "Handling edge cases where a user has sparse or private profile data.",
    ],
    improvements: [
      "Add platform comparison charts and custom date filters.",
      "Support account linking for more coding platforms.",
      "Add historical trend export as PDF and CSV.",
    ],
  },
  {
    slug: "dockerized-url-service",
    name: "Dockerized URL Service",
    shortDescription:
      "Upcoming backend project. Details and full deployment will be added soon.",
    detailDescription:
      "Dockerized URL Service is a backend microservice project focused on URL shortening and usage analytics. It is designed as an upcoming production-ready service with containerized deployment and robust data handling.",
    stack: ["Node.js", "Express", "Docker", "PostgreSQL"],
    github: "https://github.com/",
    live: "https://example.com/",
    imageSrc: "/doctor.jpg",
    upcoming: true,
    challenges: [
      "Planning id generation to avoid collisions under scale.",
      "Designing observability and health checks for containerized services.",
      "Creating a secure API design for public URL submissions.",
    ],
    improvements: [
      "Add custom aliases and expiration policies.",
      "Integrate rate limiting and abuse prevention.",
      "Enable horizontal scaling with shared cache support.",
    ],
  },
];
