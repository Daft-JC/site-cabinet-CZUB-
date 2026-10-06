import type { ReactNode } from "react";
import FilAriane from "./FilAriane";
import type { Crumb } from "@/lib/seo";

// En-tête des pages intérieures : fil d'Ariane, H1 unique, chapeau.
export default function EnTete({
  crumbs,
  titre,
  chapeau,
  aside,
}: {
  crumbs: Crumb[];
  titre: ReactNode;
  chapeau?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <div className="border-b border-trait">
      <div className="wrap grid gap-10 pb-14 pt-8 md:pb-20 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <FilAriane items={crumbs} />
          <h1 className="t-display entree mt-10 max-w-[20ch]">{titre}</h1>
          {chapeau && <div className="t-lead entree entree-2 mt-6 max-w-texte text-sourdine">{chapeau}</div>}
        </div>
        {aside && <div className="entree entree-3 self-end lg:col-span-4">{aside}</div>}
      </div>
    </div>
  );
}
