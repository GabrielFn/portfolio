"use client";

import { useState } from "react";
import type { Project } from "@/content/site";

export function Projects({ items, labels }: { items: Project[]; labels: { wip: string; prototype: string } }) {
  const [open, setOpen] = useState<string | null>(items[0]?.slug ?? null);

  // No celular, ao abrir um projeto, o que estava aberto acima dele fecha e a página "sobe".
  // Durante a animação, compensamos o scroll para o título tocado ficar parado na tela.
  const toggle = (slug: string, el: HTMLElement) => {
    setOpen((cur) => (cur === slug ? null : slug));
    // só no celular (mesmo breakpoint do layout de uma coluna)
    if (!window.matchMedia("(max-width: 860px)").matches) return;
    const startTop = el.getBoundingClientRect().top;
    const until = performance.now() + 700;
    const keep = () => {
      const delta = el.getBoundingClientRect().top - startTop;
      if (Math.abs(delta) > 0.5) window.scrollBy({ top: delta, behavior: "instant" as ScrollBehavior });
      if (performance.now() < until) requestAnimationFrame(keep);
    };
    requestAnimationFrame(keep);
  };

  return (
    <div className="plist">
      {items.map((p) => {
        const isOpen = open === p.slug;
        const vars = { "--c": p.color, "--k": p.ink, "--s": p.soft } as React.CSSProperties;
        return (
          <article key={p.slug} className="prow" data-open={isOpen} style={vars} id={`projeto-${p.slug}`}>
            <h3 style={{ margin: 0 }}>
              <button
                type="button"
                className="prow-btn"
                aria-expanded={isOpen}
                aria-controls={`painel-${p.slug}`}
                onClick={(e) => toggle(p.slug, e.currentTarget)}
              >
                <span className="prow-fill" aria-hidden="true" />
                <span className="prow-title">
                  <span className="prow-name">{p.name}</span>
                  {p.wip && <span className="wip">{labels.wip}</span>}
                </span>
                <span className="prow-kind">
                  <span>{p.kind}</span>
                  <span className="prow-plus" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 1v12M1 7h12" /></svg>
                  </span>
                </span>
              </button>
            </h3>
            <div id={`painel-${p.slug}`} className="ppanel" inert={!isOpen}>
              <div className="ppanel-clip">
                  <div className="ppanel-in">
                    <div className="ppanel-text">
                      {p.icon && (
                        <img className="picon" src={`${p.icon}=w128-rw`} alt="" width={64} height={64} loading="lazy" decoding="async" />
                      )}
                      <p>{p.summary}</p>
                      {p.stats && (
                        <dl className="pstats">
                          {p.stats.map((s) => (
                            <div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>
                          ))}
                        </dl>
                      )}
                      {p.stack && <span className="pstack">{p.stack}</span>}
                      {p.links && (
                        <div className="plinks">
                          {p.links.map((l) => (
                            <a key={l.href} className="btn btn-ghost" href={l.href} target="_blank" rel="noopener">
                              {l.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="pmock">
                      {p.shots?.length ? (
                        <div className="shots" data-count={Math.min(p.shots.length, 3)}>
                          {p.shots.slice(0, 3).map((src, i) => (
                            <img
                              key={src}
                              className="shot"
                              src={src.startsWith("https://play-lh.") ? `${src}=w480-rw` : src}
                              alt={`${p.name} (${i + 1}/${Math.min(p.shots!.length, 3)})`}
                              width={240}
                              height={427}
                              loading="lazy"
                              decoding="async"
                            />
                          ))}
                          {p.wip && <span className="shots-cap">{labels.prototype}</span>}
                        </div>
                      ) : (
                        <div className="phone" aria-hidden="true">
                          <div className="phone-screen">
                            <div className="sk" style={{ height: 22, width: "60%" }} />
                            <div className="sk" style={{ height: 120 }} />
                            <div className="sk" style={{ height: 44 }} />
                            <div className="sk" style={{ height: 44 }} />
                            <div className="sk" style={{ height: 44, width: "80%" }} />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
