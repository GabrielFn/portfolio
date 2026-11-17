export const site = {
  url: "https://gabrielfn.dev", // [trocar pelo domínio final]
  name: "Gabriel Fernandes da Silva",
  shortName: "Gabriel Fernandes",
  role: "Desenvolvedor front-end React/TypeScript",
  description:
    "Desenvolvedor front-end React/TypeScript com 12 anos em sistemas financeiros: micro frontends, design systems, React Native e desenvolvimento assistido por IA.",
  email: "gabrielxfds@gmail.com",
  linkedin: "https://www.linkedin.com/in/gabriel-fernandes-da-silva-33336882",
  github: "https://github.com/GabrielFn",
  cv: "/gabriel-fernandes-cv.pdf",
  availability: "Disponível para vagas remotas",
};

export const nav = [
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#stack", label: "Stack" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export const intro =
  "Doze anos construindo o front-end de sistemas financeiros: consórcios na Newcon e pagamentos B2B na Blu. Nas horas vagas, publico meus próprios produtos.";

export const highlights = [
  { value: "12 anos", label: "em sistemas financeiros, de consórcios a pagamentos B2B" },
  { value: "25 → 5 min", label: "de deploy na Blu, depois que migrei 10+ módulos para micro frontends" },
  { value: "264 mil", label: "instalações do Manual Téc. do Mecânico, meu app na Play Store" },
  { value: "~100 mil", label: "downloads por ano do Ocean DS, o design system open source da Blu" },
];

export const experience = [
  {
    company: "Blu Pagamentos",
    role: "Desenvolvedor de Software",
    period: "set 2018 – set 2026",
    items: [
      "Migrei 10+ módulos do sistema principal para micro frontends (single-spa) com deploy independente; o deploy caiu de ~25 para ~5 minutos.",
      "Front-end de Pix, transferências, boletos e configurações de conta em React/TypeScript com React Query, Jest e Testing Library.",
      "Testes E2E em Cypress nos fluxos críticos de pagamento, rodando no pipeline de CI.",
      "Pipeline de validação de documentos de cadastro com IA generativa, com versionamento de prompts e controle de custo.",
      "Fluxos regulatórios de cadastro empresarial (sócios, procuração digital e prova de vida) em web, Android e iOS com React Native.",
      "Desenvolvimento assistido por IA com Spec-Driven Development: escrevo a especificação, a IA implementa e eu reviso arquitetura, acessibilidade, performance e testes.",
    ],
    tags: ["React", "TypeScript", "single-spa", "React Native", "Cypress", "IA"],
  },
  {
    company: "Newcon Software",
    role: "Desenvolvedor Full-Stack",
    period: "out 2013 – ago 2018",
    items: [
      "Interfaces em React/Redux para o sistema de gestão de consórcios.",
      "APIs REST em C#/ASP.NET para as plataformas de e-commerce de consórcio.",
      "Consultas e procedures em SQL Server para processos críticos, como o sorteio das assembleias.",
      "Integrações via Web Services WCF/SOAP.",
    ],
    tags: ["React", "Redux", "C#", "ASP.NET", "SQL Server"],
  },
];

export const ocean = {
  name: "Ocean DS",
  text: "Design system open source da Blu, com cerca de 100 mil downloads por ano no npm. Criei componentes como Chips, Contextual Hero e listas com ações, além dos ícones de Pix e tributos, com documentação no Storybook, testes e foco em acessibilidade.",
  npm: "https://www.npmjs.com/package/@useblu/ocean-react",
  storybook: "https://ocean-ds.github.io/ocean-web/",
};

export type Project = {
  slug: string;
  name: string;
  kind: string;
  summary: string;
  stats?: { value: string; label: string }[];
  stack: string;
  link?: { href: string; label: string };
  color: string;
  ink: string;
  soft: string;
};

export const projects: Project[] = [
  {
    slug: "manual-tec-do-mecanico",
    name: "Manual Téc. do Mecânico",
    kind: "App Android",
    summary: "[Que problema o app resolve, em duas frases.] Público principal no Brasil e em Angola.",
    stats: [
      { value: "264 mil", label: "instalações" },
      { value: "4,36", label: "nota na loja" },
      { value: "2,6 mil", label: "avaliações" },
    ],
    stack: "React Native",
    link: { href: "#", label: "Ver na Play Store" },
    color: "#F2B705",
    ink: "#2B2200",
    soft: "#FFF3C4",
  },
  {
    slug: "pmoc-rapido",
    name: "PMOC Rápido",
    kind: "SaaS web",
    summary:
      "Técnicos de ar-condicionado montam o Plano de Manutenção, Operação e Controle exigido por lei, sem planilha.",
    stack: "[stack]",
    link: { href: "https://pmocrapido.com.br", label: "pmocrapido.com.br" },
    color: "#7FD3F0",
    ink: "#12313E",
    soft: "#EEF8FC",
  },
  {
    slug: "tal-dono-tal-pet",
    name: "Tal Dono, Tal Pet",
    kind: "Web app com IA",
    summary: "Você manda uma foto sua e outra do seu pet, e a IA diz o quanto vocês se parecem. Pacote premium pago via Pix.",
    stack: "Next.js, IA generativa, Pix",
    link: { href: "https://tal-dono-tal-pet.vercel.app", label: "Abrir o app" },
    color: "#F59AB4",
    ink: "#45182A",
    soft: "#FDEFF3",
  },
  {
    slug: "sacou",
    name: "Sacou",
    kind: "App mobile, em desenvolvimento",
    summary:
      "Organiza o racha de vôlei: lista de presença, sorteio de times, fila de quem perde sai, rotação e placar sincronizado.",
    stack: "React Native, Unistyles, ASP.NET Core (DDD), PostgreSQL",
    color: "#8EA6FF",
    ink: "#FFFFFF",
    soft: "#F4C430",
  },
];

export const stack = [
  { area: "Front-end", items: "React, TypeScript, JavaScript, Redux, React Query, micro frontends (single-spa, Module Federation), design systems, Storybook" },
  { area: "Mobile", items: "React Native" },
  { area: "Back-end", items: "C#, ASP.NET Core, APIs REST, SQL Server, PostgreSQL" },
  { area: "IA", items: "Claude Code, Spec-Driven Development, pipelines com LLMs, engenharia de prompts" },
  { area: "Qualidade", items: "Jest, Testing Library, Cypress, acessibilidade, Sentry, Datadog" },
  { area: "Infra", items: "Docker, Kubernetes, Harness (CI/CD), Git e GitHub" },
];

export const about = [
  "Comecei com C#/.NET e React em sistemas de consórcio. Nos últimos anos foquei em front-end com React e TypeScript, micro frontends e apps mobile, conduzindo funcionalidades da especificação técnica ao deploy.",
  "Hoje trabalho com desenvolvimento assistido por IA seguindo Spec-Driven Development: antes de gerar código, escrevo requisitos, contratos de componentes e critérios de aceite. A IA implementa a partir disso, e eu defino a arquitetura e reviso todo o código.",
];

export const education = [
  { title: "Pós-graduação em Engenharia de IA Aplicada", place: "UNIPDS", year: "previsão 2027" },
  { title: "Bacharelado em Sistemas de Informação", place: "FACCAT", year: "2016" },
  { title: "Técnico em Informática para Internet", place: "ETEC Prof. Massuyuki Kawano", year: "2012" },
];
