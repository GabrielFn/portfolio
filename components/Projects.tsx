"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Project } from "@/content/site";

export function Projects({ items }: { items: Project[] }) {
  const [open, setOpen] = useState<string | null>(items[0]?.slug ?? null);
  const reduce = useReducedMotion();

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
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`painel-${p.slug}`}
                  className="ppanel"
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: reduce ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="ppanel-in">
                    <motion.div
                      className="ppanel-text"
                      initial={reduce ? false : { opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15, duration: 0.5 }}
                    >
                      <p>{p.summary}</p>
                      {p.stats && (
                        <dl className="pstats">
                          {p.stats.map((s) => (
                            <div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>
                          ))}
                        </dl>
                      )}
                      <span className="pstack">{p.stack}</span>
                      {p.link && (
                        <a className="btn btn-ghost" style={{ borderColor: "currentColor", color: "inherit", alignSelf: "flex-start" }} href={p.link.href} target={p.link.href.startsWith("http") ? "_blank" : undefined} rel="noopener">
                          {p.link.label}
                        </a>
                      )}
                    </motion.div>
                    <motion.div
                      className="pmock"
                      initial={reduce ? false : { opacity: 0, y: 40, rotate: 4 }}
                      animate={{ opacity: 1, y: 0, rotate: 0 }}
                      transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
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
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
