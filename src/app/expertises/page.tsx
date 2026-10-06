import Link from "next/link";
import { EXPERTISES } from "@/lib/constants";
import { EXPERTISES_SEO } from "@/lib/expertises-seo";
import { SITE_URL } from "@/lib/constants";
import { pageMetadata, breadcrumbJsonLd, graph } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import EnTete from "@/components/EnTete";
import BandeauContact from "@/components/BandeauContact";

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

      <div className="wrap py-14 md:py-20">
        <ul className="divide-y divide-trait border-y border-trait">
          {EXPERTISES.map((e) => {
            const seo = EXPERTISES_SEO[e.slug];
            return (
              <li key={e.slug}>
                <Link
                  href={`/expertises/${e.slug}`}
                  className="group grid gap-3 py-8 no-underline md:grid-cols-12 md:gap-10"
                >
                  <span className="md:col-span-5">
                    <span className="block font-serif text-[1.6rem] leading-tight text-encre group-hover:text-etang group-hover:underline">
                      {e.title}
                    </span>
                    {seo?.national && (
                      <span className="mt-2 inline-block rounded-full bg-etang-clair px-3 py-0.5 text-[0.85rem] text-etang-profond">
                        Partout en France
                      </span>
                    )}
                  </span>
                  <span className="text-sourdine md:col-span-7">{seo?.intro ?? e.shortDesc}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <BandeauContact />
    </>
  );
}
