export const profile = {
  name: "Muhammad Faisal Ibnu Prady",
  title: "Fullstack Engineer",
  location: "Berlin, Germany",
  email: "faisalprady@gmail.com",
  website: "faisalprady.vercel.app",
  github: "github.com/faisalprady13",
  linkedin: "linkedin.com/in/faisalprady",
  summary:
    "Fullstack Engineer with 5+ years building production web applications across startups and agencies in Berlin. At Arbolitics, a German agrotech startup, I built interactive dashboards for irrigation planning and yield prediction. Before that, I spent close to four years at gravity&storm delivering full-stack products — from passenger information systems for German S-Bahn trains to booking tools and configurators — across React, Vue.js, Next.js and Nest.js. I recently completed an intensive Java & Spring Boot bootcamp at neuefische, deepening my backend fundamentals.",
} as const

export const education = [
  {
    period: "2026",
    degree: "Java Development Bootcamp",
    school: "neuefische GmbH — School and Pool for Digital Talent",
    detail: "Apr – Aug 2026 · Java, Spring Boot, React, MongoDB, Docker",
  },
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
    period: "2025",
    range: "Mar 2025 – Nov 2025",
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
    range: "Sep 2020 – Jun 2024",
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
    range: "Mar 2019 – Mar 2020",
    title: "IT Support",
    company: "HeavenHR",
    location: "Berlin, Germany · Work Study",
    bullets: [],
  },
  {
    period: "2018",
    range: "Mar 2018 – Aug 2018",
    title: "Virtual Reality Development Intern",
    company: "Vonderlabs",
    location: "Berlin Area · Internship",
    bullets: [],
  },
] as const
