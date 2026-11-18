"use client";

import { useState } from "react";
import type { Project } from "@/content/site";

export function Projects({ items }: { items: Project[] }) {
  const [open, setOpen] = useState<string | null>(items[0]?.slug ?? null);

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
                onClick={() => setOpen(isOpen ? null : p.slug)}
              >
                <span className="prow-fill" aria-hidden="true" />
                <span className="prow-name">{p.name}</span>
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
                      <div className="phone" aria-hidden="true">
                        <div className="phone-screen">
                          <div className="sk" style={{ height: 22, width: "60%" }} />
                          <div className="sk" style={{ height: 120 }} />
                          <div className="sk" style={{ height: 44 }} />
                          <div className="sk" style={{ height: 44 }} />
                          <div className="sk" style={{ height: 44, width: "80%" }} />
                          <span className="sk-label">print do app</span>
                        </div>
                      </div>
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
