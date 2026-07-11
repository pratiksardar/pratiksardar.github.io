"use client";
import { useEffect, useState, type CSSProperties } from "react";

/* deterministic fracture offsets — no randomness, no hydration drift */
const LETTERS: Array<{ ch: string; dx: number; dy: number; r: number }> = [
  { ch: "P", dx: -6, dy: 10, r: -7 },
  { ch: "r", dx: 4, dy: -14, r: 5 },
  { ch: "a", dx: -3, dy: 6, r: 11 },
  { ch: "t", dx: 8, dy: -4, r: -13 },
  { ch: "i", dx: -9, dy: -9, r: 4 },
  { ch: "k", dx: 5, dy: 12, r: -5 },
  { ch: " ", dx: 0, dy: 0, r: 0 },
  { ch: "S", dx: 7, dy: -11, r: 9 },
  { ch: "a", dx: -5, dy: 5, r: -10 },
  { ch: "r", dx: 3, dy: 13, r: 6 },
  { ch: "d", dx: -8, dy: -6, r: -4 },
  { ch: "a", dx: 6, dy: 8, r: 12 },
  { ch: "r", dx: -4, dy: -12, r: -8 },
];

export default function HealingName() {
  const [healed, setHealed] = useState(false);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInstant(true);
      setHealed(true);
      return;
    }
    const t = setTimeout(() => setHealed(true), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`hx-heal ${healed ? "is-healed" : ""} ${instant ? "is-instant" : ""}`}>
      <h1 aria-label="Pratik Sardar">
        {LETTERS.map((l, i) => (
          <span
            key={i}
            aria-hidden="true"
            style={
              {
                "--dx": `${l.dx * 0.06}em`,
                "--dy": `${l.dy * 0.045}em`,
                "--r": `${l.r}deg`,
                "--i": i,
              } as CSSProperties
            }
          >
            {l.ch === " " ? " " : l.ch}
          </span>
        ))}
      </h1>
      <p className="hx-heal-log" role="status">
        {healed ? (
          <>
            <span className="hx-ok">✓ self-healed</span> in 380 ms · 0 retries · assertion holds
          </>
        ) : (
          <>⚠ fault injected — hero.name: layout fracture</>
        )}
      </p>
    </div>
  );
}
