"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

// O CSS e o JS do Ocean (~160 KB) só carregam quando a seção chega perto da tela,
// para não pesar no carregamento inicial (LCP/INP).
const OceanDemo = dynamic(() => import("./OceanDemo"), { ssr: false, loading: () => <div className="ocean-demo ocean-loading" aria-hidden="true" /> });

export function OceanShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShow(true); io.disconnect(); } }, { rootMargin: "600px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className="ocean-slot">{show ? <OceanDemo /> : <div className="ocean-demo ocean-loading" aria-hidden="true" />}</div>;
}
