"use client";

import { useEffect, useRef } from "react";

/**
 * Nome do hero, estático. O único efeito é a luz de fundo que acompanha o cursor
 * (variáveis --mx/--my na seção). Desligado para quem usa redução de movimento ou toque.
 */
export function HeroName({ lines }: { lines: string[] }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const area = (el.closest("section") ?? el) as HTMLElement;
    let frame = 0;
    let x = 0, y = 0;
    const apply = () => {
      frame = 0;
      area.style.setProperty("--mx", `${x}px`);
      area.style.setProperty("--my", `${y}px`);
    };
    const onMove = (e: PointerEvent) => {
      const r = area.getBoundingClientRect();
      x = e.clientX - r.left;
      y = e.clientY - r.top;
      if (!frame) frame = requestAnimationFrame(apply);
    };
    area.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(frame);
      area.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <h1 ref={ref} className="name">
      {lines.map((line) => (
        <span key={line} className="name-line">{line}</span>
      ))}
    </h1>
  );
}
