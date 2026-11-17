"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

type Item = { href: string; label: string };

export function Header({ brand, items }: { brand: string; items: Item[] }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const ids = items.map((i) => i.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive("#" + e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, [items]);

  return (
    <header className="header" data-scrolled={scrolled}>
      <div className="wrap header-in">
        <a href="#topo" className="brand">{brand}</a>
        <nav className="nav" aria-label="Principal">
          {items.map((i) => (
            <a key={i.href} href={i.href} aria-current={active === i.href ? "true" : undefined}>
              {i.label}
              {active === i.href && (
                <motion.span layoutId="nav-dot" className="nav-dot" transition={{ type: "spring", stiffness: 500, damping: 40 }} />
              )}
            </a>
          ))}
          <a className="lang" href="/en/" hrefLang="en" lang="en">EN</a>
        </nav>
      </div>
    </header>
  );
}
