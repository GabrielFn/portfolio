import { Header } from "@/components/Header";
import { HeroName } from "@/components/HeroName";
import { Projects } from "@/components/Projects";
import { OceanShowcase } from "@/components/OceanShowcase";
import { CopyEmail } from "@/components/CopyEmail";
import { about, education, experience, highlights, intro, nav, ocean, projects, site, stack } from "@/content/pt";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: site.name,
      jobTitle: site.role,
      email: `mailto:${site.email}`,
      url: site.url,
      sameAs: [site.linkedin, site.github],
      knowsAbout: ["React", "TypeScript", "React Native", "Micro frontends", "Design systems", "C#", "ASP.NET"],
      alumniOf: education.map((e) => ({ "@type": "EducationalOrganization", name: e.place })),
    },
    ...projects.map((p) => ({
      "@type": "SoftwareApplication",
      name: p.name,
      applicationCategory: p.kind,
      author: { "@type": "Person", name: site.name },
      ...(p.link?.href.startsWith("http") ? { url: p.link.href } : {}),
    })),
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#conteudo" className="sr-only">Pular para o conteúdo</a>
      <Header brand={site.shortName} items={nav} />

      <main id="conteudo" style={{ overflowX: "clip" }}>
        <section id="topo" className="hero-wrap">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-light" aria-hidden="true" />
          <div className="wrap hero">
          <p className="status"><span className="pulse" aria-hidden="true" />{site.availability}</p>
          <HeroName lines={["Gabriel", "Fernandes"]} />
          <div className="hero-foot">
            <p className="hero-role">{site.role}</p>
            <p className="hero-intro">{intro}</p>
            <div className="hero-cta">
              <a className="btn btn-solid" href="#contato">Entrar em contato</a>
              <a className="btn btn-ghost" href={site.cv} download>Baixar CV</a>
            </div>
          </div>
          <ul className="highlights" aria-label="Destaques">
            {highlights.map((h) => (
              <li key={h.label}><span className="hl-v">{h.value}</span><span className="hl-l">{h.label}</span></li>
            ))}
          </ul>
          </div>
        </section>

        <section id="experiencia" className="wrap section" aria-labelledby="t-exp">
          <div className="sec-head">
            <h2 id="t-exp" className="sec-title">Experiência</h2>
            <p className="sec-note">Doze anos em produtos financeiros, de consórcios a pagamentos B2B.</p>
          </div>
          {experience.map((e) => (
            <article key={e.company} className="exp">
              <div className="exp-side">
                <h3 className="exp-co">{e.company}</h3>
                <p className="exp-role">{e.role}</p>
                <p className="exp-period">{e.period}</p>
              </div>
              <div className="exp-body">
                <ul className="exp-list">{e.items.map((i) => <li key={i}>{i}</li>)}</ul>
                <ul className="tags" aria-label="Tecnologias">{e.tags.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
            </article>
          ))}
          <div className="ocean">
            <div className="ocean-text">
              <h3>{ocean.name}</h3>
              <p>{ocean.text}</p>
              <div className="ocean-links">
                <a className="ulink" href={ocean.npm} target="_blank" rel="noopener">Ver no npm</a>
                <a className="ulink" href={ocean.storybook} target="_blank" rel="noopener">Abrir o Storybook</a>
              </div>
            </div>
            <OceanShowcase />
          </div>
        </section>

        <section id="projetos" className="wrap section" aria-labelledby="t-proj" style={{ paddingTop: 0 }}>
          <div className="sec-head">
            <h2 id="t-proj" className="sec-title">Projetos</h2>
            <p className="sec-note">Produtos que criei e mantenho sozinho, da ideia à publicação.</p>
          </div>
          <Projects items={projects} />
        </section>

        <section id="stack" className="wrap section" aria-labelledby="t-stack" style={{ paddingTop: 0 }}>
          <div className="sec-head"><h2 id="t-stack" className="sec-title">Stack</h2></div>
          <dl className="dl">
            {stack.map((s) => (
              <div key={s.area}><dt>{s.area}</dt><dd>{s.items}</dd></div>
            ))}
          </dl>
        </section>

        <section id="sobre" className="wrap section" aria-labelledby="t-sobre" style={{ paddingTop: 0 }}>
          <div className="sec-head"><h2 id="t-sobre" className="sec-title">Sobre</h2></div>
          <div className="about">
            <div className="about-text">{about.map((p) => <p key={p}>{p}</p>)}</div>
            <ul className="edu" aria-label="Formação">
              {education.map((e) => (
                <li key={e.title}><span className="edu-t">{e.title}</span><span className="edu-m">{e.place}, {e.year}</span></li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contato" className="contact" aria-labelledby="t-contato">
          <div className="wrap">
            <h2 id="t-contato" className="contact-lead">Quer conversar sobre uma vaga ou projeto?</h2>
            <div className="mail">
              <a className="ulink" href={`mailto:${site.email}`}>{site.email}</a>
              <CopyEmail email={site.email} />
            </div>
            <div className="contact-links">
              <a className="ulink" href={site.linkedin} target="_blank" rel="noopener">LinkedIn</a>
              <a className="ulink" href={site.github} target="_blank" rel="noopener">GitHub</a>
              <a className="ulink" href={site.cv} download>Baixar CV</a>
            </div>
            <footer className="foot">
              <span>© {new Date().getFullYear()} {site.name}</span>
              <span>Feito com Next.js, hospedado no Firebase</span>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
