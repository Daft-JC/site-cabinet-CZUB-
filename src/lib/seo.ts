import type { Metadata } from "next";
import { SITE_URL, SITE_CONFIG, OPTIONS, EXPERTISES, OG_IMAGE } from "./constants";

export const ORG_ID = `${SITE_URL}/#cabinet`;
export const PERSON_ID = `${SITE_URL}/#maitre-czub`;

// Métadonnées d'une page : title/description uniques, canonical, Open Graph.
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: absoluteTitle ? title : `${title} | ${SITE_CONFIG.name}`,
      description,
      url,
      type: "website",
      locale: "fr_FR",
      siteName: SITE_CONFIG.fullName,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle ? title : `${title} | ${SITE_CONFIG.name}`,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

// Données structurées du cabinet (LegalService + Attorney = LocalBusiness),
// déclarées une fois dans le layout et référencées ailleurs par @id.
export function cabinetJsonLd() {
  const c = SITE_CONFIG.contact;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LegalService", "Attorney"],
        "@id": ORG_ID,
        name: SITE_CONFIG.fullName,
        alternateName: [SITE_CONFIG.name, "Maître Czub"],
        description: SITE_CONFIG.description,
        url: SITE_URL,
        telephone: c.phoneIntl,
        email: c.email,
        image: [`${SITE_URL}/cabinet-photo.jpg`, `${SITE_URL}/joseph-czub.jpg`],
        logo: `${SITE_URL}/apple-icon`,
        foundingDate: String(SITE_CONFIG.founded),
        address: {
          "@type": "PostalAddress",
          streetAddress: c.address,
          postalCode: c.postalCode,
          addressLocality: SITE_CONFIG.location.city,
          addressRegion: SITE_CONFIG.location.region,
          addressCountry: "FR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: SITE_CONFIG.geo.lat,
          longitude: SITE_CONFIG.geo.lng,
        },
        hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          `Cabinet Maître Joseph Czub, ${c.addressFull}`
        )}`,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: OPTIONS.horairesSchema.jours,
            opens: OPTIONS.horairesSchema.ouverture,
            closes: OPTIONS.horairesSchema.fermeture,
          },
        ],
        areaServed: [
          { "@type": "City", name: "Martigues" },
          { "@type": "AdministrativeArea", name: "Bouches-du-Rhône" },
          { "@type": "Country", name: "France" },
        ],
        knowsAbout: EXPERTISES.map((e) => e.title),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Domaines d'intervention",
          itemListElement: EXPERTISES.map((e) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: e.title,
              url: `${SITE_URL}/expertises/${e.slug}`,
            },
          })),
        },
        founder: { "@id": PERSON_ID },
        employee: { "@id": PERSON_ID },
        ...(OPTIONS.profils.length ? { sameAs: OPTIONS.profils } : {}),
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: "Joseph Czub",
        honorificPrefix: "Maître",
        jobTitle: "Avocat au Barreau d'Aix-en-Provence",
        image: `${SITE_URL}/joseph-czub.jpg`,
        worksFor: { "@id": ORG_ID },
        memberOf: { "@type": "Organization", name: "Barreau d'Aix-en-Provence" },
        url: `${SITE_URL}/cabinet`,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_CONFIG.fullName,
        inLanguage: "fr-FR",
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Accueil", path: "/" }, ...crumbs].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.path === "/" ? SITE_URL : `${SITE_URL}${c.path}`,
    })),
  };
}

export function faqJsonLd(faq: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
