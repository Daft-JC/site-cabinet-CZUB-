"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/lib/constants";

// La carte OpenStreetMap n'est chargée qu'au clic : aucune requête vers un
// tiers (ni adresse IP transmise) sans action du visiteur, et page plus légère.
export default function CarteAcces() {
  const [on, setOn] = useState(false);
  const { lat, lng } = SITE_CONFIG.geo;
  const d = 0.006;
  const bbox = [lng - d, lat - d / 2, lng + d, lat + d / 2].join("%2C");
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[3px] border border-trait bg-enduit sm:aspect-[16/10]">
      {on ? (
        <iframe
          title="Plan d'accès au cabinet, 1 boulevard du Président Allende à Martigues"
          src={src}
          className="h-full w-full"
          loading="lazy"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
          <svg viewBox="0 0 200 90" className="w-48 text-etang" aria-hidden>
            <path d="M0 52 C40 40 70 64 110 50 S170 38 200 46" fill="none" stroke="currentColor" strokeWidth="10" opacity=".15" />
            <path d="M0 52 C40 40 70 64 110 50 S170 38 200 46" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="104" cy="28" r="6" fill="#C08A3E" />
            <path d="M104 34v13" stroke="#C08A3E" strokeWidth="2" />
          </svg>
          <p className="max-w-xs text-[0.95rem] text-sourdine">
            La carte est fournie par OpenStreetMap et ne se charge que si vous le demandez.
          </p>
          <button type="button" onClick={() => setOn(true)} className="btn-trait !py-2.5">
            Afficher la carte
          </button>
        </div>
      )}
    </div>
  );
}
