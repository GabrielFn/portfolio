export const site = {
  url: "https://gabrielfn.vercel.app",
  name: "Gabriel Fernandes da Silva",
  shortName: "Gabriel Fernandes",
  email: "gabrielxfds@gmail.com",
  linkedin: "https://www.linkedin.com/in/gabriel-fernandes-da-silva-33336882",
  github: "https://github.com/GabrielFn",
  cv: "/gabriel-fernandes-cv.pdf",
};

export type Project = {
  slug: string;
  name: string;
  kind: string;
  summary: string;
  stats?: { value: string; label: string }[];
  stack: string;
  links?: { href: string; label: string }[];
  /** URLs sem o sufixo de tamanho; o componente pede o tamanho certo à CDN da Play Store */
  icon?: string;
  shots?: string[];
  store?: { os: string; category: string; rating?: number; ratingCount?: number };
  color: string;
  ink: string;
  soft: string;
};
