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
      "@type": "LegalService",
      "@id": `${SITE_URL}/#legalservice`,
      name: "Cabinet Maître Joseph Czub",
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
      areaServed: [
        { "@type": "City", name: "Martigues" },
        { "@type": "City", name: "Aix-en-Provence" },
        { "@type": "City", name: "Marseille" },
        { "@type": "City", name: "Istres" },
        { "@type": "City", name: "Salon-de-Provence" },
        { "@type": "City", name: "Vitrolles" },
        { "@type": "City", name: "Fos-sur-Mer" },
        { "@type": "AdministrativeArea", name: "Bouches-du-Rhône" },
        { "@type": "AdministrativeArea", name: "Provence-Alpes-Côte d'Azur" },
      ],
      founder: {
        "@type": "Person",
        name: "Maître Joseph Czub",
        jobTitle: "Avocat",
        memberOf: {
          "@type": "Organization",
          name: "Barreau d'Aix-en-Provence",
        },
      },
      employee: {
        "@type": "Person",
        name: "Maître Joseph Czub",
        jobTitle: "Avocat",
      },
      foundingDate: "1994",
      knowsAbout: [
        "Droit des énergies renouvelables",
        "Photovoltaïque",
        "Éolien",
        "Énergie solaire",
        "Pompes à chaleur",
        "Fraudes bancaires",
        "Spoofing",
        "Phishing",
        "SIM Swapping",
        "Code de la consommation",
        "Clauses abusives",
        "Vices cachés",
        "Garanties légales",
        "Pratiques commerciales trompeuses",
        "Construction et immobilier",
        "Assurances",
        "Litiges automobile",
        "Réparation du préjudice corporel",
        "Droit locatif",
        "Divorces amiables",
      ],
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
      "Avocat Martigues | Cabinet Maître Joseph Czub — Défense des consommateurs",
    template: `%s | Cabinet Czub`,
  },
  description:
    "Cabinet d'avocat à Martigues depuis plus de 30 ans. Maître Joseph Czub, avocat au Barreau d'Aix-en-Provence, défend consommateurs et entreprises en photovoltaïque, fraudes bancaires, assurances, construction et droit de la consommation. Interventions sur toute la France.",
  keywords: [
    "avocat martigues",
    "avocat aix-en-provence",
    "cabinet avocat martigues",
    "avocat bouches-du-rhône",
    "maître joseph czub",
    "avocat PACA",
    "avocat marseille",
    "avocat énergies renouvelables",
    "avocat photovoltaïque",
    "avocat fraudes bancaires",
    "avocat droit consommation",
    "avocat assurances",
    "avocat construction immobilier",
    "défense consommateurs martigues",
    "avocat recouvrement créances",
    "cabinet avocat bouches-du-rhône",
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
