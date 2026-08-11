export type Project = {
  slug: string
  title: string
  role: string
  context: string
  summary: string
  description: string[]
  stack: string[]
  url?: string
  githubUrl?: string
  image?: string
  cardImage?: string
  demoUrl?: string
  architectureDescription?: string[]
  architectureImages?: string[]
  icon:
    | "Leaf"
    | "TrendingUp"
    | "LayoutTemplate"
    | "TrainFront"
    | "Users"
    | "Frame"
    | "Ruler"
    | "ChefHat"
}

export const projects: Project[] = [
  {
    slug: "food-rag",
    title: "Food RAG",
    role: "Fullstack Developer",
    context: "Personal project",
    summary:
      "AI-powered recipe assistant that combines conversational search with retrieval-augmented generation over a vector database, letting users discover and chat about Indonesian recipes using their own OpenAI API key.",
    description: [
      "A full-stack recipe discovery app that combines conversational AI with semantic search. Users ask questions about Indonesian recipes in natural language, and the system retrieves relevant recipes from a vector database, generates grounded answers, and lets them save favorites — all powered by their own OpenAI API key.",
      "Built the backend with Spring Boot 4 and Spring AI on Java 25, using PostgreSQL with the pgvector extension for semantic search and Flyway for schema migrations. The React 19 frontend uses TanStack Query for data fetching and Zustand for state, with authentication via email/password and OAuth2 (Google, GitHub).",
      "Conversation memory tracks recipe IDs from search results so follow-ups like \"save number 2\" resolve correctly, and chat history persists with auto-generated titles, pinning, and deletion. Each user's OpenAI API key is encrypted at rest, so there's no shared billing dependency. The whole app ships as a single Docker image serving both frontend and backend, deployed via GitHub Actions to Supabase-hosted Postgres.",
    ],
    architectureDescription: [
      "The retrieval-augmented generation pipeline embeds each recipe with OpenAI's embedding model and stores the vectors in PostgreSQL via pgvector. A user's question is embedded the same way, matched against the recipe vectors with a similarity search, and the top results are injected into the prompt so the model answers from real recipe data instead of guessing.",
      "Because every user supplies their own OpenAI API key — encrypted at rest and used to build a per-user chat client — there's no shared LLM billing or rate limit to manage. The Spring Boot backend and the Vite-built React frontend are packaged into one multi-stage Docker image, so the whole app deploys as a single container.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Spring AI",
      "PostgreSQL",
      "pgvector",
      "React",
      "TypeScript",
      "Vite",
      "TanStack Query",
      "Zustand",
      "Tailwind",
      "Docker",
    ],
    url: "https://indo-dish-latest.onrender.com/",
    githubUrl: "https://github.com/faisalprady13/indonesian-food-rag",
    icon: "ChefHat",
    image: "/projects/indonesian-food-rag.png",
    architectureImages: ["/projects/indonesian-food-rag-architecture.png"],
  },
  {
    slug: "finance-arbolitics",
    title: "Finance Arbolitics",
    role: "Frontend Developer",
    context: "Professional project during work at Arbolitics GmbH",
    summary:
      "Data-driven farm analytics platform that helps farmers, banks, and investors assess farm performance and potential using machine learning insights.",
    description: [
      "A data-driven farm analytics platform that helps farmers, banks, and investors assess farm performance and potential using weather, soil health, and satellite-driven machine learning insights.",
      "Implemented authentication with Auth.js, persistent client state with Zustand, and interactive Leaflet maps for field boundaries. Shipped with Jest and Playwright coverage, and full internationalization via i18next.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Shadcn/ui",
      "Tailwind",
      "Zustand",
      "Auth.js",
      "Leaflet",
      "Jest",
      "Playwright",
      "I18Nexus",
      "react-i18next",
    ],
    icon: "TrendingUp",
    image: "/projects/gcm_app_map.webp",
    demoUrl: "/projects/finance-arbolitics-dashboard.html",
  },

  {
    slug: "train-information-system",
    title: "Train Information System",
    role: "Fullstack Developer",
    context: "Professional project during work at gravity&storm",
    summary:
      "A passenger information system for S-Bahn trains across Germany, distributing disruption and route data in real time.",
    description: [
      "A fullstack passenger information system for S-Bahn trains across Germany. The system allows data about disruptions and alternative routes to be sent directly to the information displays in trains and at train stations.",
      "Built the frontend with Vue.js and Pinia for state management, backed by a Nest.js API, with Jest and Vitest covering unit and integration tests.",
    ],
    stack: [
      "Vue.js",
      "Nest.js",
      "Node.js",
      "Pinia",
      "Jest",
      "Vitest",
      "TypeScript",
    ],
    icon: "TrainFront",
    // image: "/projects/db-systel.png",
  },
  {
    slug: "handsonmetrology",
    title: "HandsOnMetrology",
    role: "Frontend Developer",
    context: "Professional project during work at gravity&storm",
    summary:
      "A React frontend on a Drupal backend for a metrology company, including newsletter integration.",
    description: [
      "Development of a React-based frontend on top of a Drupal-based backend for a metrology company.",
      "Included integration of newsletters based on Azure and SendGrid, with designs handed off through Zeplin.",
    ],
    stack: [
      "Next.js",
      "React",
      "Node.js",
      "MobX",
      "GraphQL",
      "Drupal",
      "Docker",
      "Zeplin",
      "TypeScript",
    ],
    url: "https://www.handsonmetrology.com/",
    icon: "Ruler",
    image: "/projects/handsonmetrology.jpeg",
    cardImage: "/projects/handsonmetrology.png",
    demoUrl: "https://www.handsonmetrology.com/",
  },
  {
    slug: "arbolitics-website",
    title: "Arbolitics Website",
    role: "Frontend Developer",
    context: "Professional project during work at Arbolitics GmbH",
    summary:
      "Designed and developed the company's main website with multilingual support (English and Spanish).",
    description: [
      "Designed and developed the company's main website with multilingual support for English and Spanish, aimed at growers, banks, and investors evaluating Arbolitics' agtech offering.",
      "Built the UI on top of shadcn/ui and Tailwind, and wired up translations with i18next so content editors could manage copy across both languages.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Shadcn/ui",
      "Tailwind",
      "I18Nexus",
      "react-i18next",
    ],
    url: "https://www.arbolitics.com/",
    icon: "Leaf",
    image: "/projects/arbolitics_website.png",
  },
  {
    slug: "tour-guides-dispatcher",
    title: "Tour Guides Dispatcher App",
    role: "Frontend Developer",
    context: "Professional project during work at gravity&storm",
    summary:
      "A dispatcher web application for coordinating city tour guides, with authentication and a roles/rights concept.",
    description: [
      "A dispatcher web application for coordinating city tour guides, including authentication and a roles/rights concept for dispatchers, guides, and admins.",
      "Business logic ran on Vercel serverless functions, with Sequelize on top of a relational database, and SendGrid for transactional email.",
    ],
    stack: [
      "Next.js",
      "React",
      "MobX",
      "Material UI",
      "Sequelize",
      "Node.js",
      "Auth0",
      "SendGrid",
      "TypeScript",
    ],
    icon: "Users",
    // image: "/projects/vive-berlin.png",
  },
  {
    slug: "picture-frame-configurator",
    title: "Picture Frame Configurator",
    role: "Frontend Developer",
    context: "Professional project during work at gravity&storm",
    summary:
      "A React-based configurator for custom picture frames, with designs persisted to AWS S3.",
    description: [
      "A React-based configurator that lets customers design custom picture frames and preview them before ordering.",
      "Implemented the integration with AWS S3 to persist customer designs, with MobX managing configurator state and a GraphQL API tying it together.",
    ],
    stack: [
      "Next.js",
      "React",
      "Node.js",
      "MobX",
      "GraphQL",
      "Docker",
      "TypeScript",
    ],
    icon: "Frame",
    // image: "/projects/frameworks-berlin.jpeg",
  },
]
