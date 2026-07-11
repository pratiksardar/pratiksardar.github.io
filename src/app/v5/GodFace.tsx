"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/* one-line classical profile, facing right; adornment varies per god */
const ADORNMENTS: Record<"apollo" | "athena" | "hermes", React.ReactNode> = {
  /* laurel wreath — leaf pairs along the crown */
  apollo: (
    <g>
      <path d="M74 52 q10 -14 24 -12 q-4 14 -18 16 z" />
      <path d="M96 38 q13 -9 26 -3 q-8 12 -22 10 z" />
      <path d="M124 32 q15 -4 25 6 q-11 9 -23 3 z" />
      <path d="M150 38 q14 2 19 14 q-13 5 -21 -4 z" />
    </g>
  ),
  /* crested helmet sweep */
  athena: (
    <g>
      <path d="M66 60 Q96 8 158 30 Q170 34 174 46 Q140 30 104 44 Q78 54 70 72 Z" />
      <path d="M96 20 Q128 2 166 16" fill="none" />
    </g>
  ),
  /* winged cap */
  hermes: (
    <g>
      <path d="M70 62 q-26 -8 -38 -28 q22 -2 34 10 q-14 -20 -8 -34 q18 10 20 34 z" />
      <path d="M84 44 Q118 22 156 34" fill="none" />
    </g>
  ),
};

export default function GodFace({
  god,
  side,
  tint,
}: {
  god: "apollo" | "athena" | "hermes";
  side: "left" | "right";
  tint: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], side === "left" ? [-16, 20] : [18, -22]);
  const drift = useTransform(scrollYProgress, [0, 1], side === "left" ? [40, -60] : [-40, 60]);
  const orbit = useTransform(scrollYProgress, [0, 1], [0, side === "left" ? 360 : -360]);

  return (
    <div ref={ref} className={`oly-god oly-god-${side}`} aria-hidden="true">
      <motion.div style={reduced ? undefined : { rotate, y: drift }}>
        {/* orbiting laurel ring */}
        <motion.svg
          className="oly-god-orbit"
          viewBox="0 0 260 260"
          style={reduced ? undefined : { rotate: orbit }}
        >
          <circle cx="130" cy="130" r="120" fill="none" strokeDasharray="2 14" />
          <circle cx="130" cy="10" r="4" fill="currentColor" stroke="none" />
        </motion.svg>
        <svg className="oly-god-face" viewBox="0 0 220 280" style={{ color: tint }}>
          <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* back of head, crown, nape, neck */}
            <path d="M92 236 q-4 -46 -14 -60 q-22 -14 -24 -48 q-2 -46 42 -60 q42 -13 62 18" />
            {/* the greek profile: forehead flowing straight into the nose */}
            <path d="M158 86 q6 10 4 22 l14 34 q2 6 -5 7 l-9 1 q4 10 1 15 q4 5 0 11 q2 10 -8 12 q-12 2 -22 -2 q-4 16 2 50" />
            {/* brow + eye */}
            <path d="M142 102 q10 -4 17 1" />
            <path d="M144 114 q8 -4 14 1 q-7 5 -14 -1 z" fill="currentColor" fillOpacity="0.35" />
            {/* lips */}
            <path d="M154 168 q8 -3 13 1" />
            {/* ear + jaw hint */}
            <path d="M118 132 q12 -4 12 12 q0 14 -12 14" />
            {/* hair strands */}
            <path d="M70 96 q18 -26 52 -28" />
            <path d="M76 122 q10 -20 34 -26" />
            {/* adornment */}
            <g fill="currentColor" fillOpacity="0.22" stroke="currentColor">{ADORNMENTS[god]}</g>
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
