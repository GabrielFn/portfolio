import type { Dict } from "./pt";
import { pt } from "./pt";

// Project colors are shared with the Portuguese version; only text changes here.
const color = (slug: string) => {
  const p = pt.projects.find((x) => x.slug === slug)!;
  return { color: p.color, ink: p.ink, soft: p.soft };
};

export const en: Dict = {
  lang: "en",
  locale: "en_US",
  path: "/en/",
  altPath: "/",
  altLabel: "PT",
  altLang: "pt-BR",
  role: "Front-end developer, React/TypeScript",
  description:
    "Front-end developer (React/TypeScript) with 12 years in financial software: micro frontends, design systems, React Native and AI-assisted development.",
  titleSuffix: "Front-end developer",
  availability: "Open to remote roles",
  nav: [
    { href: "#experiencia", label: "Experience" },
    { href: "#projetos", label: "Projects" },
    { href: "#stack", label: "Stack" },
    { href: "#sobre", label: "About" },
    { href: "#contato", label: "Contact" },
  ],
  ui: {
    skip: "Skip to content",
    navLabel: "Main",
    altLangName: "Versão em português",
    contact: "Get in touch",
    downloadCv: "Download CV",
    highlights: "Highlights",
    experience: "Experience",
    experienceNote: "Twelve years building financial products, from consortium systems to B2B payments.",
    technologies: "Technologies",
    npm: "View on npm",
    storybook: "Open Storybook",
    projects: "Projects",
    projectsNote: "Products I built and maintain on my own, from idea to launch.",
    stack: "Stack",
    about: "About",
    education: "Education",
    contactLead: "Want to talk about a role or a project?",
    copy: "Copy email",
    copied: "Copied",
    footer: "Built with Next.js, hosted on Vercel",
    oceanTabs: ["Chips", "Contextual Hero", "Action list", "Icons"],
    oceanTabsLabel: "Ocean DS components",
  },
  intro:
    "Twelve years building the front end of financial software: consortium systems at Newcon and B2B payments at Blu. On the side, I ship my own products.",
  highlights: [
    { value: "12 years", label: "in financial software, from consortium systems to B2B payments" },
    { value: "25 → 5 min", label: "deploy time at Blu after I moved 10+ modules to micro frontends" },
    { value: "264k", label: "installs of Manual Téc. do Mecânico, my app on Google Play" },
    { value: "~100k", label: "yearly npm downloads of Ocean DS, Blu's open source design system" },
  ],
  experience: [
    {
      company: "Blu Pagamentos",
      role: "Software Developer",
      period: "Sep 2018 – Sep 2026",
      items: [
        "Moved 10+ modules of the main system to micro frontends (single-spa) with independent deploys, cutting deploy time from ~25 to ~5 minutes.",
        "Built the front end for Pix (Brazil's instant payments), transfers, boleto payments and account settings in React/TypeScript with React Query, Jest and Testing Library.",
        "Added Cypress end-to-end tests for critical payment flows, running in the CI pipeline.",
        "Built a pipeline that validates onboarding documents with generative AI, with prompt versioning and cost tracking.",
        "Shipped regulatory business onboarding flows (partners, digital power of attorney and liveness check) on web, Android and iOS with React Native.",
        "Work with AI-assisted development using Spec-Driven Development: I write the spec, the AI implements it, and I review architecture, accessibility, performance and tests.",
      ],
      tags: ["React", "TypeScript", "single-spa", "React Native", "Cypress", "AI"],
    },
    {
      company: "Newcon Software",
      role: "Full-Stack Developer",
      period: "Oct 2013 – Aug 2018",
      items: [
        "Built React/Redux interfaces for the consortium management system.",
        "Built C#/ASP.NET REST APIs for consortium e-commerce platforms.",
        "Wrote and tuned SQL Server queries and stored procedures for critical processes such as the monthly consortium draw.",
        "Integrated systems through WCF/SOAP web services.",
      ],
      tags: ["React", "Redux", "C#", "ASP.NET", "SQL Server"],
    },
  ],
  ocean: {
    name: "Ocean DS",
    text: "Blu's open source design system, with around 100k npm downloads a year. I built components such as Chips, Contextual Hero and action lists, plus the Pix and tax icons, with Storybook docs, tests and a focus on accessibility.",
    npm: pt.ocean.npm,
    storybook: pt.ocean.storybook,
  },
  projects: [
    {
      slug: "manual-tec-do-mecanico",
      name: "Manual Téc. do Mecânico",
      kind: "Android app",
      summary: "[What problem the app solves, in two sentences.] Main audience in Brazil and Angola.",
      stats: [
        { value: "264k", label: "installs" },
        { value: "4.36", label: "store rating" },
        { value: "2.6k", label: "reviews" },
      ],
      stack: "React Native",
      link: { href: "#", label: "View on Google Play" },
      ...color("manual-tec-do-mecanico"),
    },
    {
      slug: "pmoc-rapido",
      name: "PMOC Rápido",
      kind: "Web SaaS",
      summary:
        "Air conditioning technicians build the maintenance plan (PMOC) required by Brazilian law without spreadsheets.",
      stack: "[stack]",
      link: { href: "https://pmocrapido.com.br", label: "pmocrapido.com.br" },
      ...color("pmoc-rapido"),
    },
    {
      slug: "tal-dono-tal-pet",
      name: "Tal Dono, Tal Pet",
      kind: "AI web app",
      summary:
        "Upload a photo of yourself and one of your pet, and the AI tells you how much you look alike. Premium pack paid via Pix.",
      stack: "Next.js, generative AI, Pix",
      link: { href: "https://tal-dono-tal-pet.vercel.app", label: "Open the app" },
      ...color("tal-dono-tal-pet"),
    },
    {
      slug: "sacou",
      name: "Sacou",
      kind: "Mobile app, in development",
      summary:
        "Runs pickup volleyball games: attendance list, team draw, winner-stays queue, rotation and a synced scoreboard.",
      stack: "React Native, Unistyles, ASP.NET Core (DDD), PostgreSQL",
      ...color("sacou"),
    },
  ],
  stack: [
    {
      area: "Front end",
      items:
        "React, TypeScript, JavaScript, Redux, React Query, micro frontends (single-spa, Module Federation), design systems, Storybook",
    },
    { area: "Mobile", items: "React Native" },
    { area: "Back end", items: "C#, ASP.NET Core, REST APIs, SQL Server, PostgreSQL" },
    { area: "AI", items: "Claude Code, Spec-Driven Development, LLM pipelines, prompt engineering" },
    { area: "Quality", items: "Jest, Testing Library, Cypress, accessibility, Sentry, Datadog" },
    { area: "Infra", items: "Docker, Kubernetes, Harness (CI/CD), Git and GitHub" },
  ],
  about: [
    "I started with C#/.NET and React on consortium systems. In recent years I've focused on the front end with React and TypeScript, micro frontends and mobile apps, owning features from technical spec to deploy.",
    "Today I work with AI-assisted development using Spec-Driven Development: before any code is generated, I write the requirements, component contracts and acceptance criteria. The AI implements from that, and I own the architecture and review all of the code.",
  ],
  education: [
    { title: "Postgraduate degree in Applied AI Engineering", place: "UNIPDS", year: "expected 2027" },
    { title: "Bachelor's in Information Systems", place: "FACCAT", year: "2016" },
    { title: "Technical degree in Web Development", place: "ETEC Prof. Massuyuki Kawano", year: "2012" },
  ],
};
