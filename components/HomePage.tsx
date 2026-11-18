import { Header } from "@/components/Header";
import { HeroName } from "@/components/HeroName";
import { Projects } from "@/components/Projects";
import { OceanShowcase } from "@/components/OceanShowcase";
import { CopyEmail } from "@/components/CopyEmail";
import type { Dict } from "@/content/pt";
import { site } from "@/content/site";

function jsonLd(d: Dict) {
  const { education, projects } = d;
  return {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: site.name,
      jobTitle: d.role,
      image: `${site.url}/gabriel.jpg`,
      email: `mailto:${site.email}`,
      url: site.url + d.path,
      sameAs: [site.linkedin, site.github],
      knowsAbout: ["React", "TypeScript", "React Native", "Micro frontends", "Design systems", "C#", "ASP.NET"],
      alumniOf: education.map((e) => ({ "@type": "EducationalOrganization", name: e.place })),
    },
    ...projects.map((p) => ({
      "@type": "SoftwareApplication",
      name: p.name,
      applicationCategory: p.kind,
      author: { "@type": "Person", name: site.name },
      ...(p.links?.[0] ? { url: p.links[0].href } : {}),
      ...(p.store
        ? {
            operatingSystem: p.store.os,
            applicationCategory: p.store.category,
            ...(p.store.rating
              ? { aggregateRating: { "@type": "AggregateRating", ratingValue: p.store.rating, ratingCount: p.store.ratingCount } }
              : {}),
          }
        : {}),
    })),
  ],
  };
}

export function HomePage({ d }: { d: Dict }) {
  const { about, education, experience, highlights, intro, nav, ocean, projects, stack, ui } = d;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(d)) }} />
      <a href="#conteudo" className="sr-only">{ui.skip}</a>
      <Header brand={site.shortName} items={nav} navLabel={ui.navLabel} alt={{ href: d.altPath, label: d.altLabel, lang: d.altLang, name: ui.altLangName }} />

      <main id="conteudo" style={{ overflowX: "clip" }}>
        <section id="topo" className="hero-wrap">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-light" aria-hidden="true" />
          <div className="wrap hero">
          <div className="hero-layout">
            <div className="hero-main">
              <p className="status"><span className="pulse" aria-hidden="true" />{d.availability}</p>
              <HeroName lines={["Gabriel", "Fernandes"]} />
              <p className="hero-role">{d.role}</p>
              <p className="hero-intro">{intro}</p>
              <div className="hero-cta">
                <a className="btn btn-solid" href="#contato">{ui.contact}</a>
                <a className="btn btn-ghost" href={site.cv} download>{ui.downloadCv}</a>
              </div>
            </div>
            <div className="hero-side">
              <img
                className="hero-photo"
                src="/gabriel-400.webp"
                srcSet="/gabriel-240.webp 240w, /gabriel-400.webp 400w, /gabriel-632.webp 632w"
                sizes="(max-width: 860px) 112px, 320px"
                alt={site.name}
                width={400}
                height={400}
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </div>
          <ul className="highlights" aria-label={ui.highlights}>
            {highlights.map((h) => (
              <li key={h.label}><span className="hl-v">{h.value}</span><span className="hl-l">{h.label}</span></li>
            ))}
          </ul>
          </div>
        </section>

        <section id="experiencia" className="wrap section" aria-labelledby="t-exp">
          <div className="sec-head">
            <h2 id="t-exp" className="sec-title">{ui.experience}</h2>
            <p className="sec-note">{ui.experienceNote}</p>
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
                <ul className="tags" aria-label={ui.technologies}>{e.tags.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
            </article>
          ))}
          <div className="ocean">
            <div className="ocean-text">
              <h3>{ocean.name}</h3>
              <p>{ocean.text}</p>
              <div className="ocean-links">
                <a className="ulink" href={ocean.npm} target="_blank" rel="noopener">{ui.npm}</a>
                <a className="ulink" href={ocean.storybook} target="_blank" rel="noopener">{ui.storybook}</a>
              </div>
            </div>
            <OceanShowcase tabs={ui.oceanTabs} label={ui.oceanTabsLabel} />
          </div>
        </section>

        <section id="projetos" className="wrap section" aria-labelledby="t-proj" style={{ paddingTop: 0 }}>
          <div className="sec-head">
            <h2 id="t-proj" className="sec-title">{ui.projects}</h2>
            <p className="sec-note">{ui.projectsNote}</p>
          </div>
          <Projects items={projects} labels={{ wip: ui.wip, prototype: ui.prototype }} />
        </section>

        <section id="stack" className="wrap section" aria-labelledby="t-stack" style={{ paddingTop: 0 }}>
          <div className="sec-head"><h2 id="t-stack" className="sec-title">{ui.stack}</h2></div>
          <dl className="dl">
            {stack.map((s) => (
              <div key={s.area}><dt>{s.area}</dt><dd>{s.items}</dd></div>
            ))}
          </dl>
        </section>

        <section id="sobre" className="wrap section" aria-labelledby="t-sobre" style={{ paddingTop: 0 }}>
          <div className="sec-head"><h2 id="t-sobre" className="sec-title">{ui.about}</h2></div>
          <div className="about">
            <div className="about-text">{about.map((p) => <p key={p}>{p}</p>)}</div>
            <ul className="edu" aria-label={ui.education}>
              {education.map((e) => (
                <li key={e.title}><span className="edu-t">{e.title}</span><span className="edu-m">{e.place}, {e.year}</span></li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contato" className="contact" aria-labelledby="t-contato">
          <div className="wrap">
            <h2 id="t-contato" className="contact-lead">{ui.contactLead}</h2>
            <div className="mail">
              <a className="ulink" href={`mailto:${site.email}`}>{site.email}</a>
              <CopyEmail email={site.email} copy={ui.copy} copied={ui.copied} />
            </div>
            <div className="contact-links">
              <a className="ulink" href={site.linkedin} target="_blank" rel="noopener">LinkedIn</a>
              <a className="ulink" href={site.github} target="_blank" rel="noopener">GitHub</a>
              <a className="ulink" href={site.cv} download>{ui.downloadCv}</a>
            </div>
            <footer className="foot">
              <span>© {new Date().getFullYear()} {site.name}</span>
              <span>{ui.footer}</span>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
