"use client";

import { useEffect } from "react";

// Ajoute une ombre à l'en-tête dès que la page défile.
export default function HeaderOmbre() {
  useEffect(() => {
    const h = document.getElementById("entete");
    if (!h) return;
    const maj = () => h.setAttribute("data-ombre", String(window.scrollY > 8));
    maj();
    window.addEventListener("scroll", maj, { passive: true });
    return () => window.removeEventListener("scroll", maj);
  }, []);
  return null;
}
