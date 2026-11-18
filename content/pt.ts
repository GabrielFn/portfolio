import type { Project } from "./site";

export const pt = {
  lang: "pt-BR",
  locale: "pt_BR",
  path: "/",
  altPath: "/en/",
  altLabel: "EN",
  altLang: "en",
  role: "Desenvolvedor front-end React/TypeScript",
  description:
    "Desenvolvedor front-end React/TypeScript com 12 anos em sistemas financeiros: micro frontends, design systems, React Native e desenvolvimento assistido por IA.",
  titleSuffix: "Desenvolvedor front-end",
  availability: "Disponível para vagas remotas",
  nav: [
    { href: "#experiencia", label: "Experiência" },
    { href: "#projetos", label: "Projetos" },
    { href: "#stack", label: "Stack" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ],
  ui: {
    skip: "Pular para o conteúdo",
    navLabel: "Principal",
    altLangName: "English version",
    contact: "Entrar em contato",
    downloadCv: "Baixar CV",
    highlights: "Destaques",
    experience: "Experiência",
    experienceNote:
      "Doze anos em produtos financeiros, de consórcios a pagamentos B2B.",
    technologies: "Tecnologias",
    npm: "Ver no npm",
    storybook: "Abrir o Storybook",
    projects: "Projetos",
    projectsNote:
      "Produtos que criei e mantenho sozinho, da ideia à publicação.",
    stack: "Stack",
    about: "Sobre",
    education: "Formação",
    contactLead: "Quer conversar sobre uma vaga ou projeto?",
    copy: "Copiar e-mail",
    copied: "Copiado",
    footer: "Feito com Next.js, hospedado na Vercel",
    oceanTabs: ["Chips", "Contextual Hero", "Lista com ações", "Ícones"],
    oceanTabsLabel: "Componentes do Ocean DS",
    wip: "Em desenvolvimento",
    prototype: "Protótipo de design",
  },
  intro:
    "Doze anos construindo o front-end de sistemas financeiros: consórcios na Newcon e pagamentos B2B na Blu. Nas horas vagas, publico meus próprios produtos.",
  highlights: [
    {
      value: "12 anos",
      label: "em sistemas financeiros, de consórcios a pagamentos B2B",
    },
    {
      value: "25 → 5 min",
      label:
        "de deploy na Blu, depois que migrei 10+ módulos para micro frontends",
    },
    {
      value: "264 mil",
      label: "instalações do Manual Téc. do Mecânico, meu app na Play Store",
    },
    {
      value: "~100 mil",
      label:
        "downloads por ano do Ocean DS, o design system open source da Blu",
    },
  ],

  experience: [
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
      tags: [
        "React",
        "TypeScript",
        "single-spa",
        "React Native",
        "Cypress",
        "IA",
      ],
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
  ],

  ocean: {
    name: "Ocean DS",
    text: "Design system open source da Blu, com cerca de 100 mil downloads por ano no npm. Criei componentes como Chips, Contextual Hero e listas com ações, além dos ícones de Pix e tributos, com documentação no Storybook, testes e foco em acessibilidade.",
    npm: "https://www.npmjs.com/package/@useblu/ocean-react",
    storybook: "https://ocean-ds.github.io/ocean-web/",
  },

  projects: [
    {
      slug: "manual-tec-do-mecanico",
      name: "Manual Téc. do Mecânico",
      kind: "App Android",
      summary:
        "Manuais de mecânica e elétrica automotiva, vídeos de manutenção e mais de 2.800 códigos de falha OBD-II em português, com causas prováveis e dicas de reparo. Feito para mecânicos, eletricistas automotivos e estudantes.",
      stats: [
        { value: "264 mil", label: "instalações" },
        { value: "4,4", label: "nota na Play Store" },
        { value: "2,6 mil", label: "avaliações" },
      ],
      stack: "",
      links: [{ href: "https://play.google.com/store/apps/details?id=com.guiadomecanico", label: "Ver na Play Store" }],
      store: { os: "Android", category: "AutomotiveApplication", rating: 4.4, ratingCount: 2670 },
      icon: "https://play-lh.googleusercontent.com/EV-kkQxJI0nTd6p7ih0WxJkxwYqXdPJAkbMswkcnG3Ox4d3Nfwi-WkABaT_xozYPwLj6oueZx3at3kMAmxNqCg",
      shots: [
        "https://play-lh.googleusercontent.com/0Wyi_0Oh78OwqKaLC23tK5hTntQn4NmRrJfBukzeqUwj7fpLR4-VJ1pJuTcmTlCf_QDqKGk7pGK4ek9Py7BicA",
        "https://play-lh.googleusercontent.com/cYaOPnac-l7FakZhYeN1t0X2FZHauzLeCJ25TfcgEBgJv5pII_-aafIWt6DMXYb4AKtbi6pztQ-xoK4qhmZwiQ",
        "https://play-lh.googleusercontent.com/Ox_48OshE_5erIrhVkzSK997Md2qosd9h10hggPxEF6Rqt-URAILf4GJE-WDhorkmRWz4LlFZJ0h9Bsp3MHywTs",
      ],
      color: "#F2B705",
      ink: "#2B2200",
      soft: "#FFF3C4",
    },
    {
      slug: "pmoc-rapido",
      name: "PMOC Rápido",
      kind: "App Android",
      summary:
        "O técnico de ar-condicionado gera o PMOC no celular, com seu registro, logo, QR Code e cronograma, e sai do cliente com o PDF pronto. Funciona sem internet, registra visitas com fotos e assinatura e tem um portal para o cliente consultar os documentos.",
      stack: "",
      links: [
        { href: "https://play.google.com/store/apps/details?id=br.app.pmocrapido", label: "Ver na Play Store" },
        { href: "https://pmocrapido.com.br", label: "pmocrapido.com.br" },
      ],
      store: { os: "Android", category: "BusinessApplication" },
      icon: "https://play-lh.googleusercontent.com/tvASfhiRfbjcef1F-K1_wGvq00236KpifkOpqbEBOI2YURFclGSmMhLGiSJ1KFa5jLmB_OYqcd7ea1_uOpLtijg",
      shots: [
        "https://play-lh.googleusercontent.com/90rlzXunH-XoiLrRnRznFWbrVWROezhP3JIvdtobYe5GzSl554JTmeycuL_cnK7IXMrXOit3NIjbHqxzx2YRhA",
        "https://play-lh.googleusercontent.com/7kWr-QqVDu_PJp1ZJVvJPWHPsvtVOsCmVpQJJ6k5Qs8ZvT4-HfEMvl9s8geUf_mBN_b0UnKoewgDuhtJyJaSeeI",
        "https://play-lh.googleusercontent.com/VSGN0kkaE24gOp0x1HNENz1bfqAebRR-jhxP5MXFh3TwCNL6-dy83JhbjYygD3DDtvtJWd7mTr_SlbVZGcZqAA",
      ],
      color: "#7FD3F0",
      ink: "#12313E",
      soft: "#EEF8FC",
    },
    {
      slug: "tal-dono-tal-pet",
      name: "Tal Dono, Tal Pet",
      kind: "Web app com IA",
      summary:
        "Você manda uma foto sua e outra do seu pet, e a IA diz o quanto vocês se parecem. Pacote premium pago via Pix.",
      stack: "Next.js, IA generativa, Pix",
      links: [{ href: "https://tal-dono-tal-pet.vercel.app", label: "Abrir o app" }],
      shots: ["/projetos/tal-dono-1.webp", "/projetos/tal-dono-2.webp"],
      color: "#F59AB4",
      ink: "#45182A",
      soft: "#FDEFF3",
    },
    {
      slug: "sacou",
      name: "Sacou",
      kind: "App mobile",
      process: {
        title: "Como estou desenvolvendo com IA",
        items: [
          "Antes do código, a pesquisa de concorrentes e a proposta de UX/UI foram feitas e revisadas uma contra a outra, e as 43 telas do piloto foram desenhadas.",
          "O Claude Code atua como orquestrador: para cada tarefa do backlog, chama agentes separados de análise, desenvolvimento, revisão, revisão de segurança e testes. Revisor e testador são sempre agentes novos, que não viram o raciocínio de quem implementou.",
          "Se a revisão ou os testes reprovam, a tarefa volta ao desenvolvedor; depois de 3 ciclos reprovados, a decisão sobe para mim. Eu decido produto, custos, acessos e qualquer passo irreversível.",
          "Cada sessão começa do zero e tudo fica no repositório: 62 ADRs, diário das sessões, modelo de ameaças, checklist ASVS/MASVS e inventário LGPD.",
          "As regras do vôlei existem em TypeScript, no app, e em C#, na API. Testes diferenciais compararam as duas em 7.808 partidas simuladas, sem nenhuma diferença.",
        ],
      },
      links: [{ href: "https://github.com/GabrielFn/sacouapp", label: "Ver o código no GitHub" }],
      wip: true,
      shots: ["/projetos/sacou-login.webp"],
      summary:
        "Organiza o racha de vôlei: lista de presença, sorteio de times, fila de quem perde sai, rotação e placar sincronizado.",
      stack: "React Native (Expo), TypeScript, ASP.NET Core (.NET 10), EF Core, PostgreSQL, monorepo pnpm + Turborepo",
      color: "#FF7A45",
      ink: "#FFFFFF",
      soft: "#F4C430",
    },
  ] as Project[],

  stack: [
    {
      area: "Front-end",
      items:
        "React, TypeScript, JavaScript, Redux, React Query, micro frontends (single-spa, Module Federation), design systems, Storybook",
    },
    { area: "Mobile", items: "React Native" },
    {
      area: "Back-end",
      items: "C#, ASP.NET Core, APIs REST, SQL Server, PostgreSQL",
    },
    {
      area: "IA",
      items:
        "Claude Code, Spec-Driven Development, pipelines com LLMs, engenharia de prompts",
    },
    {
      area: "Qualidade",
      items: "Jest, Testing Library, Cypress, acessibilidade, Sentry, Datadog",
    },
    {
      area: "Infra",
      items: "Docker, Kubernetes, Harness (CI/CD), Git e GitHub",
    },
  ],

  about: [
    "Comecei com C#/.NET e React em sistemas de consórcio. Nos últimos anos foquei em front-end com React e TypeScript, micro frontends e apps mobile, conduzindo funcionalidades da especificação técnica ao deploy.",
    "Hoje trabalho com desenvolvimento assistido por IA seguindo Spec-Driven Development: antes de gerar código, escrevo requisitos, contratos de componentes e critérios de aceite. A IA implementa a partir disso, e eu defino a arquitetura e reviso todo o código.",
  ],

  education: [
    {
      title: "Pós-graduação em Engenharia de IA Aplicada",
      place: "UNIPDS",
      year: "previsão 2027",
    },
    {
      title: "Bacharelado em Sistemas de Informação",
      place: "FACCAT",
      year: "2016",
    },
    {
      title: "Técnico em Informática para Internet",
      place: "ETEC Prof. Massuyuki Kawano",
      year: "2012",
    },
  ],
};

export type Dict = typeof pt;
