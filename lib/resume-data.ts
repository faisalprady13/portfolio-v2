export const profile = {
  name: "Muhammad Faisal Ibnu Prady",
  title: "Fullstack Engineer",
  location: "Berlin, Germany",
  email: "faisalprady@gmail.com",
  website: "faisalprady.vercel.app",
  summary:
    "Fullstack Engineer with 5+ years building production web applications across startups and agencies in Berlin. At Arbolitics, a German agrotech startup, I built interactive dashboards for irrigation planning and yield prediction, wiring up ML-based scoring APIs and shipping with full test coverage via Playwright and Jest. Before that, I spent close to four years at gravity&storm delivering full-stack products — from passenger information systems for German S-Bahn trains to booking tools and configurators — across React, Vue.js, Next.js and Nest.js. I'm currently deepening my backend fundamentals through an intensive Java & Spring Boot bootcamp at neuefische.",
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

export const technicalSkills: { name: string; featured?: boolean }[] = [
  { name: "Next.js", featured: true },
  { name: "React", featured: true },
  { name: "TypeScript", featured: true },
  { name: "Java", featured: true },
  { name: "Spring Boot", featured: true },
  { name: "JavaScript" },
  { name: "Node.js" },
  { name: "Vue.js" },
  { name: "Nest.js" },
  { name: "Zustand" },
  { name: "MongoDB" },
  { name: "Docker" },
  { name: "Playwright" },
  { name: "Jest" },
  { name: "Git" },
]

export const languageSkills = [
  { name: "English", level: "Professional working proficiency" },
  { name: "German", level: "Limited working proficiency" },
  { name: "Indonesian", level: "Native speaker" },
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
    title: "Frontend Web Developer",
    company: "HeavenHR",
    location: "Berlin, Germany · Work Study",
    bullets: [
      "Worked on the frontend with React.js and AJAX-driven data fetching.",
    ],
  },
  {
    period: "2018 – 2019",
    range: "Oct 2018 – Feb 2019",
    title: "Augmented Reality Developer — Bachelor Thesis",
    company: "Vonderlabs",
    location: "Berlin Area · Work Study",
    bullets: [
      "Researched and built an AR gamification project as part of the bachelor thesis.",
    ],
  },
  {
    period: "2018",
    range: "Mar 2018 – Aug 2018",
    title: "Virtual Reality Development Intern",
    company: "Vonderlabs",
    location: "Berlin Area · Internship",
    bullets: ["Prototyped virtual reality experiences and tooling."],
  },
  {
    period: "2017",
    range: "Apr 2017 – Aug 2017",
    title: "Virtual Reality Developer — University Project",
    company: "HTW Berlin, in collaboration with ImmobilienScout24",
    location: "Berlin Metropolitan Area · Course Project",
    bullets: [
      "Built a virtual reality property tour as a university course project set by ImmobilienScout24, not a role held at the company.",
    ],
  },
] as const
