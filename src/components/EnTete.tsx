import type { ReactNode } from "react";
import FilAriane from "./FilAriane";
import type { Crumb } from "@/lib/seo";

// En-tête des pages intérieures : bandeau nuit, fil d'Ariane, H1 unique, chapeau.
export default function EnTete({
  crumbs,
  titre,
  chapeau,
  aside,
}: {
  crumbs: Crumb[];
  titre: string;
  chapeau?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <div className="halo grain sur-nuit relative overflow-hidden text-white">
      <Motif />
      <div className="wrap relative grid gap-10 pb-16 pt-8 md:pb-24 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <FilAriane items={crumbs} sombre />
          <h1 className="t-display mt-10 max-w-[20ch] text-white">
            <span className="ligne">
              <span>{titre}</span>
            </span>
          </h1>
          <span aria-hidden className="apparait mt-8 block h-px w-24 bg-ocre-clair" style={{ ["--i" as string]: 1 }} />
          {chapeau && (
            <div className="t-lead apparait mt-6 max-w-texte text-brume" style={{ ["--i" as string]: 2 }}>
              {chapeau}
            </div>
          )}
        </div>
        {aside && (
          <div className="apparait self-end text-encre lg:col-span-4" style={{ ["--i" as string]: 3 }}>
            {aside}
          </div>
        )}
      </div>
    </div>
  );
}

// Arcs concentriques en filigrane : les ponts de Martigues
function Motif() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 300"
      className="pointer-events-none absolute -right-24 bottom-0 w-[42rem] max-w-none text-ocre-clair opacity-[0.12]"
    >
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path
          key={i}
          d={`M${40 + i * 30} 300 A ${260 - i * 30} ${240 - i * 30} 0 0 1 ${560 - i * 30} 300`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}
