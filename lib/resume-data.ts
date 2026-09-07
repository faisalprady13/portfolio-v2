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
  {
    period: "2026",
    degree: "Java Development — Professional Training",
    school: "neuefische GmbH — School and Pool for Digital Talent",
    detail: "04.2026 – 08.2026 · Java, Spring Boot, React, MongoDB, Docker",
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
      { name: "Headless CMS (Strapi, DatoCMS, Drupal)" },
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
    category: "Engineering Practices & Tools",
    skills: [
      { name: "Software Architecture" },
      { name: "Clean Code" },
      { name: "Code Reviews" },
      { name: "Agile/Scrum" },
      { name: "Accessibility (WCAG 2.1/2.2 AA)" },
      { name: "Responsive Design" },
      { name: "Management tools (Confluence, Jira)" },
    ],
  },
]

export const languageSkills = [
  { name: "German", level: "Advanced" },
  { name: "English", level: "Proficient" },
  { name: "Indonesian", level: "Native" },
] as const

export const experience = [
  // {
  //   period: "2026",
  //   range: "04.2026 – 08.2026",
  //   title: "Java Development — Professional Training",
  //   company: "Neuefische",
  //   location: "Berlin, Germany",
  //   bullets: [
  //     "Intensive full-time professional training in Java and full-stack development, covering Java, Spring Boot, REST APIs, databases, testing, React, TypeScript, Docker, DevOps, and AI-assisted development.",
  //     "Capstone Project: Built a full-stack RAG recipe assistant with Java 25, Spring Boot 4, Spring AI, PostgreSQL/pgvector, Spring Security, React, and TypeScript, including JWT/OAuth2 authentication, AI tool calling, persistent conversations, and Docker/GitHub Actions CI/CD.",
  //   ],
  // },
  {
    period: "2025",
    range: "03.2025 – 11.2025",
    title: "Frontend Engineer",
    company: "Arbolitics",
    location: "Berlin, Germany · Hybrid",
    bullets: [
      "Proposed and drove frontend modernization of the farm analytics platform, introducing Zustand, Server Components/Actions, and a structured component architecture.",
      "Built dashboards, maps, authentication, forms, REST API integrations, and internationalization using React, TypeScript, and Next.js.",
      "Established Atomic Design with shadcn/ui and introduced ESLint, Prettier, and frontend coding standards to improve consistency and maintainability.",
      "Introduced Jest and CI-based testing with coverage thresholds, increasing test coverage from 0% to 80%+.",
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
      "Mentored three junior developers/interns, supporting onboarding, technical guidance, task assignment, and code reviews across projects.",
      "Delivered 8+ client projects across frontend and full-stack development, collaborating with cross-functional teams and adapting to different technologies and requirements.",
      "Developed and maintained a real-time passenger information system for S-Bahn networks across five major German cities, building disruption management, alternative-route workflows, dashboards, forms, and tables with Vue.js and Pinia.",
      "Contributed to the migration from Vue 2 to Vue 3, refactoring existing frontend features and updating the associated test suite while maintaining production functionality.",
      "Developed the React/TypeScript frontend for HandsOnMetrology, a multilingual marketing and product-guidance platform for GOM/ZEISS, supporting 8 languages and responsive experiences for users worldwide.",
      "Built and maintained product pages, search/filtering, forms, tutorial content, and CMS-driven components, integrating React with Drupal and GraphQL for content delivery.",
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
