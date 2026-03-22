import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { SITE_CONFIG } from "@/lib/constants";
import PageHero from "@/components/PageHero";
import SectionDivider from "@/components/SectionDivider";
import RevealOnScroll from "@/components/RevealOnScroll";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

const MapCabinet = dynamic(() => import("@/components/MapCabinet"), {
  ssr: false,
  loading: () => (
    <div className="bg-anthracite border border-gris-sombre/50 h-[280px] flex items-center justify-center">
      <div className="text-[0.7rem] tracking-[0.2em] uppercase text-gris">Chargement de la carte…</div>
    </div>
  ),
});

const SITE_URL = "https://www.cabinet-czub.fr";

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
      name: "Contact",
      item: `${SITE_URL}/contact`,
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Contact — Cabinet Maître Joseph Czub | Avocat Martigues | Prendre rendez-vous",
  description:
    "Contactez le Cabinet Maître Joseph Czub, avocat à Martigues. Prenez rendez-vous pour une consultation en droit des énergies renouvelables, fraudes bancaires, assurances ou droit de la consommation. Cabinet accessible à Martigues, proche Aix-en-Provence et Marseille.",
  keywords: [
    "contact avocat martigues",
    "rendez-vous avocat martigues",
    "consultation avocat martigues",
    "avocat martigues téléphone",
    "cabinet czub contact",
    "avocat près de marseille",
    "avocat près aix-en-provence",
    "consultation juridique martigues",
    "cabinet avocat bouches-du-rhône contact",
    "avocat PACA rendez-vous",
  ],
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title:
      "Contact — Cabinet Maître Joseph Czub | Avocat Martigues | Prendre rendez-vous",
    description:
      "Contactez le Cabinet Maître Joseph Czub, avocat à Martigues. Prenez rendez-vous pour une consultation en droit des énergies renouvelables, fraudes bancaires ou droit de la consommation.",
    type: "website",
    locale: "fr_FR",
    siteName: "Cabinet Maître Joseph Czub",
    url: `${SITE_URL}/contact`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Contacter le Cabinet Maître Joseph Czub — Avocat à Martigues",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Cabinet Maître Joseph Czub | Avocat Martigues",
    description:
      "Contactez le Cabinet Maître Joseph Czub, avocat à Martigues. Prenez rendez-vous pour une consultation juridique.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageHero
        tag="Contact"
        title="Prenons"
        highlight="rendez-vous"
        subtitle="Le cabinet est implanté à Martigues et intervient sur toute la France. Contactez-nous pour toute demande de consultation ou d'information."
      />

      <SectionDivider />

      <section className="py-24 md:py-36 px-6 md:px-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* ── COORDONNÉES ── */}
          <div>
            <RevealOnScroll>
              <div className="section-label mb-8">Coordonnées</div>
            </RevealOnScroll>

            <div className="space-y-8">
              {[
                {
                  icon: MapPin,
                  label: "Adresse",
                  value: SITE_CONFIG.contact.address,
                  sub: "13500 Martigues",
                },
                {
                  icon: Phone,
                  label: "Téléphone",
                  value: SITE_CONFIG.contact.phone,
                  href: SITE_CONFIG.contact.phoneHref,
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: SITE_CONFIG.contact.email,
                  href: SITE_CONFIG.contact.emailHref,
                },
                {
                  icon: Clock,
                  label: "Horaires",
                  value: "Du lundi au vendredi",
                  sub: "Sur rendez-vous uniquement",
                },
              ].map((item, i) => (
                <RevealOnScroll key={item.label} delay={i * 100}>
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 border border-or/25 flex items-center justify-center flex-shrink-0">
                      <item.icon
                        className="w-4 h-4 text-or"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <span className="block text-[0.6rem] tracking-[0.2em] uppercase text-gris mb-1">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-[0.9rem] font-light text-ivoire no-underline hover:text-or transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-[0.9rem] font-light text-ivoire">
                          {item.value}
                        </span>
                      )}
                      {item.sub && (
                        <span className="block text-[0.8rem] font-light text-gris-clair mt-0.5">
                          {item.sub}
                        </span>
                      )}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            {/* Carte OpenStreetMap */}
            <RevealOnScroll delay={500}>
              <div className="mt-12 border border-gris-sombre/50 overflow-hidden">
                <MapCabinet />
              </div>
              <a
                href="https://maps.google.com/?q=1+Boulevard+du+Président+Allende,+L'Espace+Vénitien,+13500+Martigues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-[0.65rem] tracking-[0.15em] uppercase text-or no-underline hover:text-or-clair transition-colors duration-300"
              >
                <MapPin className="w-3 h-3" strokeWidth={1.5} />
                Ouvrir dans Google Maps
              </a>
            </RevealOnScroll>
          </div>

          {/* ── FORMULAIRE ── */}
          <div>
            <RevealOnScroll>
              <div className="section-label mb-8">Formulaire de contact</div>
            </RevealOnScroll>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
