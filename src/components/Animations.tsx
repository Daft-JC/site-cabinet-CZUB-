"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Un seul observateur pour toute la page :
// - [data-reveal] / [data-trace] reçoivent la classe .vu en entrant à l'écran ;
// - [data-count] compte de 0 jusqu'à sa valeur (le chiffre final est déjà
//   dans le HTML, pour les moteurs de recherche et sans JS).
export default function Animations() {
  const pathname = usePathname();

  useEffect(() => {
    const reduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cibles = document.querySelectorAll<HTMLElement>("[data-reveal],[data-trace],[data-count]");

    const compter = (el: HTMLElement) => {
      const fin = Number(el.dataset.count);
      const suffixe = el.dataset.suffix ?? "";
      if (reduit || !fin) return;
      const debut = performance.now();
      const duree = 1600;
      const pas = (t: number) => {
        const p = Math.min(1, (t - debut) / duree);
        const v = Math.round(fin * (1 - Math.pow(1 - p, 3)));
        el.textContent = `${v}${suffixe}`;
        if (p < 1) requestAnimationFrame(pas);
      };
      requestAnimationFrame(pas);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          el.classList.add("vu");
          if (el.dataset.count) compter(el);
          io.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    cibles.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
