import type { CSSProperties, ReactNode } from "react";

/* ponytail: CSS-only entrance — content never depends on JS/hydration to become visible */
export default function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <div className="oly-reveal" style={{ animationDelay: `${delay}s` } as CSSProperties}>
      {children}
    </div>
  );
}
