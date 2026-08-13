export const profile = {
  name: "Muhammad Faisal Ibnu Prady",
  title: "Fullstack Engineer",
  location: "Berlin, Germany",
  email: "faisalprady@gmail.com",
  website: "faisalprady.vercel.app",
  github: "github.com/faisalprady13",
  linkedin: "linkedin.com/in/faisalprady",
  summary:
    "Full-stack engineer with 5+ years of experience building production web applications using React, TypeScript, Next.js, Java, Spring Boot, and Node.js. Experienced in data-driven applications, REST APIs, authentication, cloud services, and AI-powered systems using RAG, Spring AI, and vector databases. Focused on building scalable, maintainable, and user-friendly software.",
} as const

export const education = [
  // {
  //   period: "2026",
  //   degree: "Java Development Bootcamp",
  //   school: "neuefische GmbH — School and Pool for Digital Talent",
  //   detail: "04.2026 – 08.2026 · Java, Spring Boot, React, MongoDB, Docker",
  // },
  {
    period: "2019",
    degree: "B.Sc. International Media and Computing",
    school: "Hochschule für Technik und Wirtschaft Berlin",
    detail: "2015 – 2019",
  },
] as const

export const technicalSkillCategories: {
  category: string
  skills: { name: string; featured?: boolean }[]
}[] = [
  {
    category: "Frontend Architecture",
    skills: [
      { name: "TypeScript", featured: true },
      { name: "React", featured: true },
      { name: "Next.js", featured: true },
      { name: "Vue.js" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS" },
      { name: "shadcn/ui" },
      { name: "Material UI" },
      { name: "TanStack Query" },
      { name: "State Management (Redux, Zustand, Pinia)" },
    ],
  },
  {
    category: "Backend Engineering",
    skills: [
      { name: "Java", featured: true },
      {
        name: "Spring Boot (Spring Security, Spring Data JPA, Spring AI)",
        featured: true,
      },
      { name: "Node.js" },
      { name: "NestJS" },
      { name: "Python" },
      { name: "REST APIs" },
      { name: "GraphQL" },
      { name: "OAuth 2.0" },
      { name: "JWT Authentication" },
    ],
  },
  {
    category: "AI Systems & Search",
    skills: [
      { name: "Retrieval-Augmented Generation (RAG)", featured: true },
      { name: "LLM Integration" },
      { name: "AI-powered Applications" },
      { name: "Prompt Engineering" },
      { name: "pgvector" },
      { name: "Claude Code" },
      { name: "GitHub Copilot" },
      { name: "OpenAI API" },
    ],
  },
  {
    category: "Data & Infrastructure",
    skills: [
      { name: "PostgreSQL (pgvector)", featured: true },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Hibernate" },
      { name: "Flyway" },
      { name: "Docker" },
      { name: "CI/CD (GitHub Actions)" },
      { name: "AWS S3" },
      { name: "Vercel" },
      { name: "DigitalOcean" },
      { name: "Supabase" },
    ],
  },
  {
    category: "Testing & Reliability",
    skills: [
      { name: "Vitest" },
      { name: "Jest" },
      { name: "JUnit" },
      { name: "Zod" },
      { name: "Automated Testing" },
      { name: "Test-Driven Development (TDD)" },
    ],
  },
  {
    category: "Engineering Practices",
    skills: [
      { name: "Software Architecture" },
      { name: "Clean Code" },
      { name: "Code Reviews" },
      { name: "Agile/Scrum" },
      { name: "Accessibility (WCAG 2.1/2.2 AA)" },
      { name: "Responsive Design" },
    ],
  },
]

export const languageSkills = [
  { name: "German", level: "Advanced" },
  { name: "English", level: "Proficient" },
  { name: "Indonesian", level: "Native" },
] as const

export const experience = [
  {
    period: "2026",
    range: "04.2026 – 08.2026",
    title: "Java Development — Professional Training",
    company: "Neuefische",
    location: "Berlin, Germany",
    bullets: [
      "Intensive full-time professional training in Java and full-stack development, covering Java, Spring Boot, REST APIs, databases, testing, React, TypeScript, Docker, DevOps, and AI-assisted development.",
      "Capstone Project: Built a full-stack RAG recipe assistant with Java 25, Spring Boot 4, Spring AI, PostgreSQL/pgvector, Spring Security, React, and TypeScript, including JWT/OAuth2 authentication, AI tool calling, persistent conversations, and Docker/GitHub Actions CI/CD.",
    ],
  },
  {
    period: "2025",
    range: "03.2025 – 11.2025",
    title: "Frontend Engineer",
    company: "Arbolitics",
    location: "Berlin, Germany · Hybrid",
    bullets: [
      "Built interactive dashboards and tools for irrigation planning, yield prediction, and farm scoring, powered by weather, soil health, and satellite data.",
      "Implemented Zustand for persistent data flow and clear state management.",
      "Integrated Auth.js for secure authentication and session handling.",
      "Collaborated with backend and data engineers to connect machine-learning-based APIs for productivity and yield scoring.",
      "Ensured app reliability with Playwright E2E tests and Jest unit/integration tests.",
      "Contributed to Leaflet-based map visualizations showing field boundaries and performance insights.",
    ],
    impact:
      "Delivered a smooth, data-rich user experience that turns complex farm data into clear insights for better agricultural and financial decisions.",
  },
  {
    period: "2020 – 2024",
    range: "09.2020 – 06.2024",
    title: "Full Stack Engineer",
    company: "gravity&storm",
    location: "Berlin, Germany",
    bullets: [
      "Developed passenger information systems for S-Bahn trains across Germany with Vue.js & Nest.js.",
      "Created a Next.js-based dispatcher web application for coordinating city tour guides.",
      "Built a collaborative audio application for the web using React.",
      "Engineered a React-based configurator for a photo-frame company.",
      "Built a website with a React frontend and Drupal backend for a metrology company.",
    ],
  },
  {
    period: "2019 – 2020",
    range: "03.2019 – 03.2020",
    title: "IT Support",
    company: "HeavenHR",
    location: "Berlin, Germany · Work Study",
    bullets: [],
  },
  {
    period: "2018",
    range: "03.2018 – 08.2018",
    title: "Virtual Reality Development Intern",
    company: "Vonderlabs",
    location: "Berlin Area · Internship",
    bullets: [],
  },
] as const
