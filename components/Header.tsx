"use client";

import { useEffect, useState } from "react";

type Item = { href: string; label: string };

type Alt = { href: string; label: string; lang: string; name: string };

export function Header({ brand, items, navLabel, alt }: { brand: string; items: Item[]; navLabel: string; alt: Alt }) {
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
        <nav className="nav" aria-label={navLabel}>
          {items.map((i) => (
            <a key={i.href} href={i.href} aria-current={active === i.href ? "true" : undefined}>
              {i.label}
              <span className="nav-dot" aria-hidden="true" />
            </a>
          ))}
          <a className="lang" href={alt.href} hrefLang={alt.lang} lang={alt.lang} aria-label={alt.name}>{alt.label}</a>
        </nav>
      </div>
    </header>
  );
}
