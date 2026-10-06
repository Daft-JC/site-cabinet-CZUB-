import Link from "next/link";
import { EXPERTISES } from "@/lib/constants";
import { EXPERTISES_SEO } from "@/lib/expertises-seo";
import { SITE_URL } from "@/lib/constants";
import { pageMetadata, breadcrumbJsonLd, graph } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import EnTete from "@/components/EnTete";
import BandeauContact from "@/components/BandeauContact";
import { Fleche, ICONES_DOMAINES } from "@/components/Icons";

export const metadata = pageMetadata({
  title: "Domaines d'intervention : photovoltaïque, fraudes bancaires…",
  description:
    "Maître Joseph Czub, avocat à Martigues : arnaques photovoltaïques, fraudes bancaires, droit de la consommation, assurances, construction, automobile, préjudice corporel, bail, divorce amiable.",
  path: "/expertises",
});

const crumbs = [{ name: "Domaines d'intervention", path: "/expertises" }];

export default function ExpertisesPage() {
  return (
    <>
      <JsonLd
        data={graph(breadcrumbJsonLd(crumbs), {
          "@type": "ItemList",
          name: "Domaines d'intervention du Cabinet Maître Joseph Czub",
          itemListElement: EXPERTISES.map((e, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: e.title,
            url: `${SITE_URL}/expertises/${e.slug}`,
          })),
        })}
      />
      <EnTete
        crumbs={crumbs}
        titre="Domaines d'intervention du cabinet"
        chapeau="Depuis 1994, le cabinet défend les consommateurs et les particuliers. Choisissez votre situation : chaque page explique vos droits, les délais à respecter et les questions les plus fréquentes."
      />

      <div className="wrap py-16 md:py-24">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {EXPERTISES.map((e, n) => {
            const seo = EXPERTISES_SEO[e.slug];
            const Icone = ICONES_DOMAINES[e.icon];
            return (
              <li key={e.slug} className="carte group" data-reveal style={{ ["--i" as string]: n % 3 }}>
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-enduit text-etang transition-colors duration-500 group-hover:bg-nuit group-hover:text-ocre-clair">
                    <Icone className="h-7 w-7" />
                  </span>
                  {seo?.national && (
                    <span className="rounded-full bg-etang-clair px-3 py-1 text-[0.85rem] text-etang-profond">
                      Partout en France
                    </span>
                  )}
                </div>
                <h2 className="mt-7 font-serif text-[1.55rem] leading-tight">
                  <Link href={`/expertises/${e.slug}`} className="text-encre no-underline after:absolute after:inset-0">
                    {e.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sourdine">{seo?.intro ?? e.shortDesc}</p>
                <span className="lien-fleche mt-auto pt-6 text-etang">
                  Vos droits et les questions fréquentes <Fleche />
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <BandeauContact />
    </>
  );
}
