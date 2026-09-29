import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, EXPERTISES, OG_IMAGE } from "@/lib/constants";
import { EXPERTISES_SEO } from "@/lib/expertises-seo";
import PageHero from "@/components/PageHero";
import SectionDivider from "@/components/SectionDivider";
import RevealOnScroll from "@/components/RevealOnScroll";
import { Sun, Building2, Shield, CreditCard, Umbrella, Car, Scale, Heart, Key, Users, Check, ArrowRight } from "lucide-react";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      name: "Domaines d'intervention — Cabinet Maître Joseph Czub, avocat à Martigues",
      url: `${SITE_URL}/expertises`,
      itemListElement: EXPERTISES.map((exp, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: exp.title,
        url: `${SITE_URL}/expertises/${exp.slug}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Domaines d'intervention",
          item: `${SITE_URL}/expertises`,
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "Domaines d'intervention : photovoltaïque, fraudes bancaires…",
  description:
    "Maître Joseph Czub, avocat à Martigues : arnaques photovoltaïques, fraudes bancaires, droit de la consommation, assurances, construction, automobile, préjudice corporel, bail, divorce amiable.",
  alternates: {
    canonical: `${SITE_URL}/expertises`,
  },
  openGraph: {
    title: "Domaines d'intervention — Cabinet Czub, avocat à Martigues",
    description:
      "Arnaques photovoltaïques, fraudes bancaires, droit de la consommation, assurances, construction immobilier, litiges automobile. Avocat à Martigues, interventions sur toute la France.",
    type: "website",
    locale: "fr_FR",
    siteName: "Cabinet Maître Joseph Czub",
    images: [OG_IMAGE],
    url: `${SITE_URL}/expertises`,
  },
};

const ICONS = {
  sun: Sun,
  building: Building2,
  shield: Shield,
  creditcard: CreditCard,
  umbrella: Umbrella,
  car: Car,
  scale: Scale,
  heart: Heart,
  key: Key,
  users: Users,
} as const;

export default function ExpertisesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        tag="Cabinet Czub — Depuis 1994"
        title="Avocat à Martigues :"
        highlight="domaines d'intervention"
        subtitle="Intervenant dans la défense des consommateurs depuis plus de 30 ans, le cabinet intervient sur toute la France dans de nombreux domaines du droit."
      />

      <SectionDivider />

      {/* ── EXPERTISE BLOCKS ── */}
      {EXPERTISES.map((exp, index) => {
        const Icon = ICONS[exp.icon];
        const isEven = index % 2 === 0;
        const seo = EXPERTISES_SEO[exp.slug];

        return (
          <div key={exp.id}>
            <section
              id={exp.id}
              className="py-24 md:py-36 px-6 md:px-[60px] scroll-mt-24"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start ${
                  isEven ? "" : "lg:[direction:rtl] lg:[&>*]:[direction:ltr]"
                }`}
              >
                {/* Content */}
                <div>
                  <RevealOnScroll>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 border border-or/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-or" strokeWidth={1.5} />
                      </div>
                      <span className="text-[0.65rem] tracking-[0.3em] uppercase text-or">
                        {exp.shortDesc}
                      </span>
                    </div>
                  </RevealOnScroll>

                  <RevealOnScroll delay={100}>
                    <h2 className="font-serif text-[clamp(2rem,3vw,2.8rem)] font-light text-ivoire leading-tight mb-6">
                      <Link href={`/expertises/${exp.slug}`} className="no-underline text-ivoire hover:text-or transition-colors duration-300">
                        {exp.title}
                      </Link>
                    </h2>
                  </RevealOnScroll>

                  <RevealOnScroll delay={200}>
                    <p className="text-[0.9rem] font-light text-gris-clair leading-[1.9] mb-8">
                      {seo?.intro ?? exp.description.split("\n")[0]}
                    </p>
                    <Link
                      href={`/expertises/${exp.slug}`}
                      className="group inline-flex items-center gap-3 text-[0.7rem] font-medium tracking-[0.2em] uppercase text-or no-underline hover:text-or-clair transition-colors duration-300"
                    >
                      En savoir plus : {exp.title}
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </RevealOnScroll>
                </div>

                {/* Detail list */}
                <div>
                  <RevealOnScroll delay={300}>
                    <div className="bg-anthracite p-8 md:p-12">
                      <h3 className="text-[0.65rem] tracking-[0.25em] uppercase text-or mb-8">
                        Interventions
                      </h3>
                      <ul className="space-y-4">
                        {exp.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check
                              className="w-4 h-4 text-or mt-0.5 flex-shrink-0"
                              strokeWidth={1.5}
                            />
                            <span className="text-[0.85rem] font-light text-gris-clair leading-relaxed">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </RevealOnScroll>
                </div>
              </div>
            </section>

            {index < EXPERTISES.length - 1 && <SectionDivider />}
          </div>
        );
      })}
    </>
  );
}
