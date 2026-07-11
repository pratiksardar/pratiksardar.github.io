"use client";
import { useEffect } from "react";

/* mobile-only delights: tap-bloom petals + gyroscope parallax.
   Renders nothing; desktop and reduced-motion users are untouched. */

const PETAL_COLORS = ["#c8bee9", "#f5c8b2", "#c2d6be", "#bfd6ea", "#e8d5a8"];

type DOEWithPermission = typeof DeviceOrientationEvent & {
  requestPermission?: () => Promise<string>;
};

export default function MobileDelight() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.querySelector<HTMLElement>(".oly");
    if (!root) return;

    /* — tap bloom: a few laurel petals drift up from every touch — */
    let live = 0;
    const bloom = (e: PointerEvent) => {
      if (live > 9) return;
      for (let i = 0; i < 3; i++) {
        const p = document.createElement("span");
        p.className = "oly-petal";
        p.style.left = `${e.clientX + (Math.random() * 36 - 18)}px`;
        p.style.top = `${e.clientY + (Math.random() * 20 - 10)}px`;
        p.style.background = PETAL_COLORS[(Math.random() * PETAL_COLORS.length) | 0];
        p.style.setProperty("--drift", `${Math.random() * 90 - 45}px`);
        p.style.animationDelay = `${i * 90}ms`;
        live++;
        p.addEventListener("animationend", () => {
          live--;
          p.remove();
        });
        document.body.appendChild(p);
      }
    };
    window.addEventListener("pointerdown", bloom, { passive: true });

    /* — gyroscope parallax: atmosphere follows the phone's tilt — */
    const onTilt = (ev: DeviceOrientationEvent) => {
      const gx = Math.max(-30, Math.min(30, ev.gamma ?? 0));
      const gy = Math.max(-30, Math.min(30, (ev.beta ?? 45) - 45));
      root.style.setProperty("--tilt-x", `${gx / 2}`);
      root.style.setProperty("--tilt-y", `${gy / 2}`);
    };
    const DOE = DeviceOrientationEvent as DOEWithPermission;
    const arm = () => {
      DOE.requestPermission?.()
        .then((r) => {
          if (r === "granted") window.addEventListener("deviceorientation", onTilt);
        })
        .catch(() => {});
    };
    if (typeof DOE.requestPermission === "function") {
      /* iOS: permission must come from a user gesture — ask on first touch */
      window.addEventListener("pointerdown", arm, { once: true });
    } else {
      window.addEventListener("deviceorientation", onTilt);
    }

    return () => {
      window.removeEventListener("pointerdown", bloom);
      window.removeEventListener("pointerdown", arm);
      window.removeEventListener("deviceorientation", onTilt);
    };
  }, []);

  return null;
}
