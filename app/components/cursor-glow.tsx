"use client";

import { useEffect, useRef } from "react";

/**
 * A soft, brand-coloured glow that follows the pointer and sits behind the
 * page content, lighting up the dark background as the cursor moves.
 *
 * Pointer-only: it never activates on touch devices (where there is no
 * hovering cursor) and is disabled for users who prefer reduced motion.
 * The element is always rendered for SSR stability; the effect is gated in
 * CSS (display: none on coarse pointers) and here in JS.
 */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Only run on devices with a precise, hovering pointer (laptops/desktops).
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const render = () => {
      raf = 0;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      el.dataset.active = "true";
      if (!raf) raf = requestAnimationFrame(render);
    };

    const onLeave = () => {
      el.dataset.active = "false";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}
