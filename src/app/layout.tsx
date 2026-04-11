import type { Metadata } from "next";
import "@/styles/globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalDecor from "@/components/LegalDecor";

const SITE_URL = "https://www.cabinet-czub.fr";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LegalService", "Attorney"],
      "@id": `${SITE_URL}/#legalservice`,
      name: "Cabinet Maître Joseph Czub",
      alternateName: [
        "Cabinet Czub",
        "Maître Czub",
        "Avocat Martigues Czub",
        "Avocat photovoltaïque Martigues",
      ],
      description:
        "Cabinet d'avocat à Martigues depuis plus de 30 ans. Maître Joseph Czub, avocat inscrit au Barreau d'Aix-en-Provence, défend particuliers et entreprises en droit des énergies renouvelables (photovoltaïque, éolien, solaire), fraudes bancaires, assurances, construction immobilier, litiges automobile et droit de la consommation. Interventions sur toute la France.",
      url: SITE_URL,
      telephone: "+33442403665",
      email: SITE_CONFIG.contact.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "1 Boulevard du Président Allende, L'Espace Vénitien",
        postalCode: "13500",
        addressLocality: "Martigues",
        addressRegion: "Bouches-du-Rhône",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 43.408875,
        longitude: 5.056345,
      },
      hasMap: "https://maps.google.com/?q=1+Boulevard+du+Président+Allende+Martigues+13500",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      areaServed: [
        { "@type": "City", name: "Martigues" },
        { "@type": "City", name: "Aix-en-Provence" },
        { "@type": "City", name: "Marseille" },
        { "@type": "City", name: "Istres" },
        { "@type": "City", name: "Salon-de-Provence" },
        { "@type": "City", name: "Vitrolles" },
        { "@type": "City", name: "Fos-sur-Mer" },
        { "@type": "City", name: "Port-de-Bouc" },
        { "@type": "City", name: "Miramas" },
        { "@type": "AdministrativeArea", name: "Bouches-du-Rhône" },
        { "@type": "AdministrativeArea", name: "Provence-Alpes-Côte d'Azur" },
        { "@type": "Country", name: "France" },
      ],
      founder: {
        "@type": "Person",
        "@id": `${SITE_URL}/#maitre-czub`,
        name: "Maître Joseph Czub",
        jobTitle: "Avocat au Barreau d'Aix-en-Provence",
        worksFor: { "@id": `${SITE_URL}/#legalservice` },
        memberOf: {
          "@type": "Organization",
          name: "Barreau d'Aix-en-Provence",
        },
      },
      employee: {
        "@type": "Person",
        "@id": `${SITE_URL}/#maitre-czub`,
        name: "Maître Joseph Czub",
        jobTitle: "Avocat",
      },
      foundingDate: "1994",
      legalName: "Cabinet Maître Joseph Czub",
      knowsAbout: [
        "Droit des énergies renouvelables",
        "Photovoltaïque",
        "Éolien",
        "Énergie solaire",
        "Pompes à chaleur",
        "Arnaques panneaux solaires",
        "Fraudes bancaires",
        "Spoofing",
        "Phishing",
        "Quishing",
        "SIM Swapping",
        "Faux RIB",
        "Code de la consommation",
        "Clauses abusives",
        "Vices cachés",
        "Garanties légales",
        "Pratiques commerciales trompeuses",
        "Démarchage abusif",
        "Crédit affecté",
        "Construction et immobilier",
        "Assurances",
        "Litiges automobile",
        "Réparation du préjudice corporel",
        "Droit locatif",
        "Divorces amiables",
        "UFC Que Choisir",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services juridiques — Cabinet Czub Martigues",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "LegalService",
              name: "Avocat photovoltaïque et énergies renouvelables",
              description:
                "Défense des victimes d'arnaques aux installations photovoltaïques, pompes à chaleur, éoliennes de jardin. Annulation des contrats et crédits affectés. Interventions sur toute la France.",
              url: `${SITE_URL}/expertises#energies-renouvelables`,
              areaServed: "France",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "LegalService",
              name: "Avocat fraudes bancaires Martigues",
              description:
                "Remboursement des victimes de spoofing, phishing, SIM swapping, faux RIB, quishing. Mise en jeu de la responsabilité de la banque.",
              url: `${SITE_URL}/expertises#fraudes-bancaires`,
              areaServed: [
                { "@type": "City", name: "Martigues" },
                { "@type": "Country", name: "France" },
              ],
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "LegalService",
              name: "Avocat droit de la consommation Martigues",
              description:
                "Protection des consommateurs : démarchage abusif, clauses abusives, garanties légales, pratiques commerciales trompeuses.",
              url: `${SITE_URL}/expertises#code-consommation`,
              areaServed: { "@type": "City", name: "Martigues" },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "LegalService",
              name: "Avocat construction et immobilier Martigues",
              description:
                "Vices cachés, malfaçons, retards de livraison, VEFA, garantie décennale, litiges piscinistes.",
              url: `${SITE_URL}/expertises#construction-immobilier`,
              areaServed: { "@type": "City", name: "Martigues" },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "LegalService",
              name: "Avocat assurances Martigues",
              description:
                "Refus de garantie d'assurance après sinistre. Garantie vol, CAT NAT, décennale, incapacité, invalidité.",
              url: `${SITE_URL}/expertises#assurances`,
              areaServed: { "@type": "City", name: "Martigues" },
            },
          },
        ],
      },
      priceRange: "€€",
      image: `${SITE_URL}/og-image.jpg`,
      sameAs: [],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Avocat Martigues | Cabinet Maître Joseph Czub — Photovoltaïque, Fraudes Bancaires, Consommation",
    template: `%s | Cabinet Czub — Avocat Martigues`,
  },
  description:
    "Avocat à Martigues depuis 1994 — Cabinet Maître Joseph Czub. Spécialiste des arnaques photovoltaïques, fraudes bancaires (spoofing, phishing), droit de la consommation, assurances et construction. Barreau d'Aix-en-Provence. Interventions sur toute la France.",
  keywords: [
    "avocat martigues",
    "avocat photovoltaïque martigues",
    "avocat photovoltaïque",
    "avocat arnaque panneaux solaires",
    "avocat énergies renouvelables",
    "avocat fraudes bancaires martigues",
    "avocat fraudes bancaires",
    "avocat spoofing phishing",
    "avocat droit consommation martigues",
    "cabinet avocat martigues",
    "maître joseph czub",
    "avocat barreau aix-en-provence",
    "avocat PACA",
    "avocat marseille",
    "avocat bouches-du-rhône",
    "avocat assurances martigues",
    "avocat construction immobilier martigues",
    "défense consommateurs martigues",
    "cabinet avocat bouches-du-rhône",
    "avocat crédit affecté",
  ],
  authors: [{ name: "Maître Joseph Czub" }],
  creator: "Cabinet Maître Joseph Czub",
  publisher: "Cabinet Maître Joseph Czub",
  manifest: "/manifest.json",
  verification: {
    google: "mYp_j8TA2zDMXGe8dSqpzusljx3aPtb3UxyIeeBUEfk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Avocat Martigues | Cabinet Maître Joseph Czub",
    description:
      "Cabinet d'avocat à Martigues depuis plus de 30 ans. Maître Joseph Czub, avocat au Barreau d'Aix-en-Provence, défend consommateurs et entreprises en droit de la consommation, énergies renouvelables et fraudes bancaires.",
    locale: "fr_FR",
    type: "website",
    siteName: "Cabinet Maître Joseph Czub",
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Cabinet Maître Joseph Czub — Avocat à Martigues",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avocat Martigues | Cabinet Maître Joseph Czub",
    description:
      "Cabinet d'avocat à Martigues depuis plus de 30 ans. Maître Joseph Czub, avocat au Barreau d'Aix-en-Provence, défend consommateurs et entreprises.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-noir text-ivoire font-sans overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LegalDecor />
        <Navbar />
        <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
