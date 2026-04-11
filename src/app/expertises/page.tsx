import type { Metadata } from "next";
import { EXPERTISES } from "@/lib/constants";
import PageHero from "@/components/PageHero";
import SectionDivider from "@/components/SectionDivider";
import RevealOnScroll from "@/components/RevealOnScroll";
import { Sun, Building2, Shield, CreditCard, Umbrella, Car, Scale, Heart, Key, Users, Check } from "lucide-react";

const SITE_URL = "https://www.cabinet-czub.fr";

const serviceCatalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Domaines d'intervention — Avocat Maître Czub Martigues",
  description:
    "Services juridiques proposés par le Cabinet Maître Joseph Czub, avocat à Martigues (Bouches-du-Rhône)",
  url: `${SITE_URL}/expertises`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "LegalService",
        name: "Avocat photovoltaïque et énergies renouvelables",
        description:
          "Défense des victimes d'arnaques aux installations photovoltaïques, pompes à chaleur, éoliennes de jardin, ballons thermodynamiques. Annulation des contrats et crédits affectés. 20 ans de jurisprudences favorables.",
        url: `${SITE_URL}/expertises#energies-renouvelables`,
        provider: { "@id": `${SITE_URL}/#legalservice` },
        areaServed: "France",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "LegalService",
        name: "Avocat droit de la consommation Martigues",
        description:
          "Protection des consommateurs : démarchage abusif, clauses abusives, garanties légales, pratiques commerciales trompeuses, crédit à la consommation.",
        url: `${SITE_URL}/expertises#code-consommation`,
        provider: { "@id": `${SITE_URL}/#legalservice` },
        areaServed: { "@type": "City", name: "Martigues" },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "LegalService",
        name: "Avocat fraudes bancaires Martigues",
        description:
          "Remboursement des victimes de spoofing, phishing, SIM swapping, faux RIB, quishing, logiciels malveillants. Mise en jeu de la responsabilité de la banque.",
        url: `${SITE_URL}/expertises#fraudes-bancaires`,
        provider: { "@id": `${SITE_URL}/#legalservice` },
        areaServed: [
          { "@type": "City", name: "Martigues" },
          { "@type": "Country", name: "France" },
        ],
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "LegalService",
        name: "Avocat assurances Martigues",
        description:
          "Refus de garantie d'assurance après sinistre : vol, CAT NAT, vandalisme, décennale, incapacité, invalidité, dommage ouvrage.",
        url: `${SITE_URL}/expertises#assurances`,
        provider: { "@id": `${SITE_URL}/#legalservice` },
        areaServed: { "@type": "City", name: "Martigues" },
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "LegalService",
        name: "Avocat construction et immobilier Martigues",
        description:
          "Vices cachés, malfaçons, retards de livraison, VEFA, CCMI, garantie décennale, litiges piscinistes, infiltrations toiture.",
        url: `${SITE_URL}/expertises#construction-immobilier`,
        provider: { "@id": `${SITE_URL}/#legalservice` },
        areaServed: { "@type": "City", name: "Martigues" },
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "LegalService",
        name: "Avocat litiges automobile Martigues",
        description:
          "Vices cachés sur véhicule, garantie légale de conformité, responsabilité du garagiste.",
        url: `${SITE_URL}/expertises#litiges-automobile`,
        provider: { "@id": `${SITE_URL}/#legalservice` },
        areaServed: { "@type": "City", name: "Martigues" },
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Domaines d'intervention",
      item: `${SITE_URL}/expertises`,
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Avocat Photovoltaïque & Fraudes Bancaires Martigues — Domaines d'intervention | Cabinet Czub",
  description:
    "Avocat à Martigues spécialisé en arnaques photovoltaïques, pompes à chaleur, fraudes bancaires (spoofing, phishing, SIM swapping), droit de la consommation, assurances, construction et litiges automobile. Maître Joseph Czub, Barreau d'Aix-en-Provence, intervient sur toute la France.",
  keywords: [
    "avocat énergie renouvelable",
    "avocat photovoltaïque",
    "avocat éolien",
    "avocat solaire",
    "avocat pompe à chaleur",
    "avocat transition énergétique",
    "avocat fraudes bancaires",
    "avocat spoofing",
    "avocat phishing",
    "avocat SIM swapping",
    "avocat droit consommation",
    "avocat clauses abusives",
    "avocat vices cachés",
    "avocat garantie légale",
    "avocat pratiques commerciales trompeuses",
    "avocat assurances martigues",
    "avocat construction immobilier martigues",
    "avocat litiges automobile",
    "avocat divorce amiable martigues",
    "avocat préjudice corporel martigues",
    "droit énergie renouvelable PACA",
    "avocat consommateur martigues",
  ],
  alternates: {
    canonical: `${SITE_URL}/expertises`,
  },
  openGraph: {
    title:
      "Domaines d'intervention — Avocat Énergies Renouvelables, Fraudes Bancaires, Droit Consommation | Cabinet Czub Martigues",
    description:
      "Le Cabinet Maître Joseph Czub intervient en droit des énergies renouvelables (photovoltaïque, éolien, solaire), fraudes bancaires, assurances, construction immobilier, litiges automobile et droit de la consommation. Avocat à Martigues, Bouches-du-Rhône.",
    type: "website",
    locale: "fr_FR",
    siteName: "Cabinet Maître Joseph Czub",
    url: `${SITE_URL}/expertises`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Domaines d'intervention — Cabinet Maître Joseph Czub, Avocat à Martigues",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Domaines d'intervention — Avocat Énergies Renouvelables, Fraudes Bancaires, Droit Consommation | Cabinet Czub",
    description:
      "Le Cabinet Maître Joseph Czub intervient en droit des énergies renouvelables, fraudes bancaires, assurances, construction et droit de la consommation. Avocat à Martigues, Bouches-du-Rhône.",
    images: [`${SITE_URL}/og-image.jpg`],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogJsonLd) }}
      />

      <PageHero
        tag="Cabinet Czub — Depuis 1994"
        title="Domaines"
        highlight="d'intervention"
        subtitle="Intervenant dans la défense des consommateurs depuis plus de 30 ans, le cabinet intervient sur toute la France dans de nombreux domaines du droit."
      />

      <SectionDivider />

      {/* ── EXPERTISE BLOCKS ── */}
      {EXPERTISES.map((exp, index) => {
        const Icon = ICONS[exp.icon];
        const isEven = index % 2 === 0;

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
                      {exp.title}
                    </h2>
                  </RevealOnScroll>

                  <RevealOnScroll delay={200}>
                    <div className="text-[0.9rem] font-light text-gris-clair leading-[1.9] mb-8 space-y-4">
                      {exp.description.split("\n").map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
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
