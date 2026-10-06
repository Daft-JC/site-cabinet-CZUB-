import { MetadataRoute } from "next";
import { SITE_URL, EXPERTISES } from "@/lib/constants";

// Date de la dernière mise à jour du contenu (à modifier lors d'une refonte)
const UPDATED = new Date("2026-10-06");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: UPDATED, changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE_URL}/expertises`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.9 },
    ...EXPERTISES.map((e) => ({
      url: `${SITE_URL}/expertises/${e.slug}`,
      lastModified: UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: `${SITE_URL}/cabinet`, lastModified: UPDATED, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: UPDATED, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE_URL}/presse`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.6 },
    // Articles de presse internes
    { url: `${SITE_URL}/presse/sos-conso-eolienne`, lastModified: new Date("2013-10-11"), changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/presse/viande-avariee-martigues`, lastModified: new Date("2011-06-01"), changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/presse/comedie`, lastModified: new Date("2011-03-01"), changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/presse/geant-casino-istres`, lastModified: new Date("2008-01-01"), changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/presse/ufc-assemblee-generale-2008`, lastModified: new Date("2008-04-21"), changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/presse/grossiste-viande-vitrolles`, lastModified: new Date("2008-03-01"), changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/mentions-legales`, lastModified: UPDATED, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/politique-de-confidentialite`, lastModified: UPDATED, changeFrequency: "yearly", priority: 0.2 },
  ];
}
