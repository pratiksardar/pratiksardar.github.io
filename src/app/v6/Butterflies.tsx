/* Psyche's butterflies — ψυχή is Greek for both "soul" and "butterfly".
   Pure CSS motion-path flight; server-rendered, zero JS. */

function Butterfly({ id, hue1, hue2 }: { id: string; hue1: string; hue2: string }) {
  return (
    <svg viewBox="-24 -24 48 48" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={hue1} />
          <stop offset="100%" stopColor={hue2} />
        </linearGradient>
      </defs>
      <g className="oly-bf-wing oly-bf-wing-l">
        <path
          d="M-1 -5 C -15 -18 -24 -8 -17 1 C -22 8 -11 14 -1 4 Z"
          fill={`url(#${id})`}
          stroke="#33303b"
          strokeOpacity="0.25"
          strokeWidth="0.6"
        />
      </g>
      <g className="oly-bf-wing oly-bf-wing-r">
        <path
          d="M1 -5 C 15 -18 24 -8 17 1 C 22 8 11 14 1 4 Z"
          fill={`url(#${id})`}
          stroke="#33303b"
          strokeOpacity="0.25"
          strokeWidth="0.6"
        />
      </g>
      <ellipse cx="0" cy="0" rx="1.5" ry="6.5" fill="#5a5364" />
      <path d="M-1 -6 Q -4 -11 -6 -12 M1 -6 Q 4 -11 6 -12" stroke="#5a5364" strokeWidth="0.7" fill="none" />
    </svg>
  );
}

export default function Butterflies() {
  return (
    <div className="oly-butterflies" aria-hidden="true">
      <span className="oly-butterfly oly-bf1">
        <Butterfly id="oly-bfg1" hue1="#c8bee9" hue2="#bfd6ea" />
      </span>
      <span className="oly-butterfly oly-bf2">
        <Butterfly id="oly-bfg2" hue1="#f5c8b2" hue2="#e8d5a8" />
      </span>
    </div>
  );
}
