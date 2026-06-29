"use client";

import { useEffect } from "react";

/**
 * Applies .reveal.is-visible when elements with class .reveal appear.
 * Using a client-side script so it works without modifying every component.
 */
export default function RevealController() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("is-visible");
            obs.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}

