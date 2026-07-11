"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/* GodFace, evolved: the statue's pupil follows the visitor's cursor
   (fine pointers) or glances along with the scroll (touch). */

const ADORNMENTS: Record<"apollo" | "athena" | "hermes", React.ReactNode> = {
  apollo: (
    <g>
      <path d="M74 52 q10 -14 24 -12 q-4 14 -18 16 z" />
      <path d="M96 38 q13 -9 26 -3 q-8 12 -22 10 z" />
      <path d="M124 32 q15 -4 25 6 q-11 9 -23 3 z" />
      <path d="M150 38 q14 2 19 14 q-13 5 -21 -4 z" />
    </g>
  ),
  athena: (
    <g>
      <path d="M66 60 Q96 8 158 30 Q170 34 174 46 Q140 30 104 44 Q78 54 70 72 Z" />
      <path d="M96 20 Q128 2 166 16" fill="none" />
    </g>
  ),
  hermes: (
    <g>
      <path d="M70 62 q-26 -8 -38 -28 q22 -2 34 10 q-14 -20 -8 -34 q18 10 20 34 z" />
      <path d="M84 44 Q118 22 156 34" fill="none" />
    </g>
  ),
};

export default function WatchingGod({
  god,
  side,
  tint,
}: {
  god: "apollo" | "athena" | "hermes";
  side: "left" | "right";
  tint: string;
}) {
  const faceRef = useRef<SVGSVGElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], side === "left" ? [-16, 20] : [18, -22]);
  const drift = useTransform(scrollYProgress, [0, 1], side === "left" ? [40, -60] : [-40, 60]);
  const orbit = useTransform(scrollYProgress, [0, 1], [0, side === "left" ? 360 : -360]);

  useEffect(() => {
    const svg = faceRef.current;
    if (!svg) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    const apply = () => {
      raf = 0;
      svg.style.setProperty("--px", tx.toFixed(2));
      svg.style.setProperty("--py", ty.toFixed(2));
    };

    if (window.matchMedia("(pointer: fine)").matches) {
      const onMove = (e: PointerEvent) => {
        const r = svg.getBoundingClientRect();
        const cx = r.left + r.width * 0.68;
        const cy = r.top + r.height * 0.42;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const d = Math.hypot(dx, dy) || 1;
        const reach = Math.min(1, d / 260);
        tx = (dx / d) * 3.2 * reach;
        ty = (dy / d) * 2.4 * reach;
        if (!raf) raf = requestAnimationFrame(apply);
      };
      window.addEventListener("pointermove", onMove, { passive: true });
      return () => {
        window.removeEventListener("pointermove", onMove);
        cancelAnimationFrame(raf);
      };
    }

    const onScroll = () => {
      const max = Math.max(1, document.body.scrollHeight - window.innerHeight);
      const p = window.scrollY / max;
      ty = -2 + p * 4.6;
      tx = Math.sin(p * 6) * 2.2;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className={`oly-god oly-god-${side}`} aria-hidden="true">
      <motion.div style={reduced ? undefined : { rotate, y: drift }}>
        <motion.svg
          className="oly-god-orbit"
          viewBox="0 0 260 260"
          style={reduced ? undefined : { rotate: orbit }}
        >
          <circle cx="130" cy="130" r="120" fill="none" strokeDasharray="2 14" />
          <circle cx="130" cy="10" r="4" fill="currentColor" stroke="none" />
        </motion.svg>
        <svg ref={faceRef} className="oly-god-face" viewBox="0 0 220 280" style={{ color: tint }}>
          <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M92 236 q-4 -46 -14 -60 q-22 -14 -24 -48 q-2 -46 42 -60 q42 -13 62 18" />
            <path d="M158 86 q6 10 4 22 l14 34 q2 6 -5 7 l-9 1 q4 10 1 15 q4 5 0 11 q2 10 -8 12 q-12 2 -22 -2 q-4 16 2 50" />
            <path d="M142 102 q10 -4 17 1" />
            {/* the eye: pale sclera so the dark pupil reads at a glance */}
            <path d="M141 113 q10 -5 19 1 q-10 7 -19 -1 z" fill="#fdfbf7" stroke="currentColor" strokeWidth="2" />
            <g className="oly-god-pupil" stroke="none">
              <circle cx="150.5" cy="114" r="3.1" fill="#33303b" />
              <circle cx="149.4" cy="112.9" r="0.9" fill="#fdfbf7" />
            </g>
            <path d="M154 168 q8 -3 13 1" />
            <path d="M118 132 q12 -4 12 12 q0 14 -12 14" />
            <path d="M70 96 q18 -26 52 -28" />
            <path d="M76 122 q10 -20 34 -26" />
            <g fill="currentColor" fillOpacity="0.22" stroke="currentColor">{ADORNMENTS[god]}</g>
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
