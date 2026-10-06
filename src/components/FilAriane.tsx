import Link from "next/link";
import type { Crumb } from "@/lib/seo";

// Fil d'Ariane visible (les données structurées sont émises par la page).
export default function FilAriane({ items, sombre = false }: { items: Crumb[]; sombre?: boolean }) {
  const all = [{ name: "Accueil", path: "/" }, ...items];
  const couleur = sombre ? "text-brume" : "text-sourdine";
  return (
    <nav aria-label="Fil d'Ariane" className={`text-[0.9rem] ${couleur}`}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {all.map((c, i) => (
          <li key={c.path} className="flex items-center gap-2">
            {i > 0 && (
              <span aria-hidden className={sombre ? "text-ocre-clair/70" : "text-ocre"}>
                /
              </span>
            )}
            {i === all.length - 1 ? (
              <span aria-current="page">{c.name}</span>
            ) : (
              <Link href={c.path} className={`${couleur} hover:text-white`}>
                {c.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
