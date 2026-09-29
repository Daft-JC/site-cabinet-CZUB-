import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ExternalLink, Phone } from "lucide-react";
import { SITE_URL, SITE_CONFIG, EXPERTISES, ARTICLES_PRESSE, OG_IMAGE } from "@/lib/constants";
import { EXPERTISES_SEO } from "@/lib/expertises-seo";
import PageHero from "@/components/PageHero";
import SectionDivider from "@/components/SectionDivider";
import RevealOnScroll from "@/components/RevealOnScroll";

type Props = { params: { slug: string } };

function getExpertise(slug: string) {
  const exp = EXPERTISES.find((e) => e.slug === slug);
  const seo = EXPERTISES_SEO[slug];
  return exp && seo ? { exp, seo } : null;
}

export function generateStaticParams() {
  return EXPERTISES.map((e) => ({ slug: e.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: Props): Metadata {
  const data = getExpertise(params.slug);
  if (!data) return {};
  const { seo } = data;
  const url = `${SITE_URL}/expertises/${params.slug}`;
  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${seo.metaTitle} | Cabinet Czub`,
      description: seo.metaDescription,
      type: "website",
      locale: "fr_FR",
      siteName: SITE_CONFIG.fullName,
      images: [OG_IMAGE],
      url,
    },
  };
}

export default function ExpertisePage({ params }: Props) {
  const data = getExpertise(params.slug);
  if (!data) notFound();
  const { exp, seo } = data;
  const url = `${SITE_URL}/expertises/${exp.slug}`;
  const press = ARTICLES_PRESSE.filter((a) => seo.press?.includes(a.id));
  const others = EXPERTISES.filter((e) => e.slug !== exp.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `${seo.h1} ${seo.h1Highlight}`,
        serviceType: exp.title,
        description: seo.metaDescription,
        url,
        provider: { "@id": `${SITE_URL}/#legalservice` },
        areaServed: seo.national
          ? { "@type": "Country", name: "France" }
          : [
              { "@type": "City", name: "Martigues" },
              { "@type": "AdministrativeArea", name: "Bouches-du-Rhône" },
            ],
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
          { "@type": "ListItem", position: 3, name: exp.title, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: seo.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        tag={seo.national ? "Avocat à Martigues — Toute la France" : "Avocat à Martigues — Bouches-du-Rhône"}
        title={seo.h1}
        highlight={seo.h1Highlight}
        subtitle={seo.intro}
      />

      {/* Fil d'Ariane visible */}
      <nav aria-label="Fil d'Ariane" className="px-6 md:px-[60px] -mt-12 mb-12">
        <ol className="flex flex-wrap gap-2 text-[0.65rem] tracking-[0.15em] uppercase text-gris list-none">
          <li>
            <Link href="/" className="no-underline text-gris hover:text-or">Accueil</Link> /
          </li>
          <li>
            <Link href="/expertises" className="no-underline text-gris hover:text-or">
              Domaines d&apos;intervention
            </Link>{" "}
            /
          </li>
          <li className="text-or">{exp.title}</li>
        </ol>
      </nav>

      <SectionDivider />

      {/* ── NOTRE INTERVENTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <RevealOnScroll>
              <div className="section-label mb-8">Notre intervention</div>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <h2 className="section-heading mb-8">{exp.title}</h2>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div className="text-[0.9rem] font-light text-gris-clair leading-[1.9] space-y-4">
                {exp.description.split("\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </RevealOnScroll>
          </div>
          <RevealOnScroll delay={300}>
            <div className="bg-anthracite p-8 md:p-12">
              <h3 className="text-[0.65rem] tracking-[0.25em] uppercase text-or mb-8">
                Le cabinet intervient pour
              </h3>
              <ul className="space-y-4">
                {exp.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-or mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-[0.85rem] font-light text-gris-clair leading-relaxed">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={SITE_CONFIG.contact.phoneHref}
                className="mt-10 inline-flex items-center gap-3 text-[0.7rem] font-medium tracking-[0.2em] uppercase text-noir bg-or no-underline px-7 py-4 hover:bg-or-clair transition-colors duration-300"
              >
                <Phone className="w-3.5 h-3.5" />
                {SITE_CONFIG.contact.phone}
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <SectionDivider />

      {/* ── GUIDE JURIDIQUE ── */}
      <section className="py-24 md:py-32 px-6 md:px-[60px]">
        <div className="max-w-4xl">
          <RevealOnScroll>
            <div className="section-label mb-8">Ce qu&apos;il faut savoir</div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <h2 className="section-heading mb-12">{seo.guideTitle}</h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gris-sombre/40">
            {seo.guide.map((g, i) => (
              <RevealOnScroll key={g.title} delay={i * 80}>
                <div className="bg-noir p-8 md:p-10 h-full">
                  <h3 className="font-serif text-xl text-ivoire mb-4 leading-snug">{g.title}</h3>
                  <p className="text-[0.85rem] font-light text-gris-clair leading-[1.85]">{g.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <p className="mt-6 text-[0.7rem] font-light text-gris leading-relaxed">
            Informations générales données à titre indicatif : elles ne remplacent pas
            l&apos;analyse de votre situation par un avocat.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* ── FAQ ── */}
      <section className="py-24 md:py-32 px-6 md:px-[60px]">
        <div className="max-w-3xl">
          <RevealOnScroll>
            <div className="section-label mb-8">Questions fréquentes</div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <h2 className="section-heading mb-12">
              Vos questions, <em>nos réponses</em>
            </h2>
          </RevealOnScroll>
          {seo.faq.map((item) => (
            <details key={item.q} className="group border-t border-gris-sombre/40 py-6 cursor-pointer">
              <summary className="flex items-start justify-between gap-4 list-none">
                <h3 className="font-sans text-[0.95rem] font-light text-ivoire leading-snug group-open:text-or transition-colors duration-300">
                  {item.q}
                </h3>
                <span className="flex-shrink-0 w-5 h-5 border border-or/30 flex items-center justify-center text-or text-xs mt-0.5 group-open:bg-or group-open:text-noir transition-all duration-300">
                  +
                </span>
              </summary>
              <p className="mt-4 font-sans text-[0.85rem] font-light text-gris-clair leading-[1.9]">
                {item.a}
              </p>
            </details>
          ))}
          <div className="border-t border-gris-sombre/40" />
        </div>
      </section>

      {/* ── PRESSE LIÉE ── */}
      {press.length > 0 && (
        <>
          <SectionDivider />
          <section className="py-24 md:py-32 px-6 md:px-[60px]">
            <RevealOnScroll>
              <div className="section-label mb-8">Dans la presse</div>
            </RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gris-sombre/40">
              {press.map((a) => {
                const internal = a.url?.startsWith("/");
                const inner = (
                  <>
                    <span className="block text-[0.6rem] tracking-[0.2em] uppercase text-or mb-3">
                      {a.source} — {new Date(a.date).getFullYear()}
                    </span>
                    <span className="block font-serif text-lg text-ivoire leading-snug mb-4">{a.title}</span>
                    <span className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.2em] uppercase text-or">
                      Lire l&apos;article
                      {internal ? <ArrowRight className="w-3 h-3" /> : <ExternalLink className="w-3 h-3" />}
                    </span>
                  </>
                );
                const cls = "block bg-noir p-8 no-underline hover:bg-anthracite transition-colors duration-300 h-full";
                return internal ? (
                  <Link key={a.id} href={a.url!} className={cls}>{inner}</Link>
                ) : (
                  <a key={a.id} href={a.url} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
                );
              })}
            </div>
          </section>
        </>
      )}

      <SectionDivider />

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 px-6 md:px-[60px] text-center">
        <RevealOnScroll>
          <h2 className="section-heading mb-6">
            Parlons de <em>votre dossier</em>
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={150}>
          <p className="font-sans text-[0.95rem] font-light text-gris-clair leading-[1.8] max-w-xl mx-auto mb-10">
            Cabinet Maître Joseph Czub — {SITE_CONFIG.contact.addressFull}.
            {seo.national
              ? " Interventions sur toute la France."
              : " Martigues, Istres, Fos-sur-Mer, Port-de-Bouc, Aix-en-Provence, Marseille et tout le département."}
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={300}>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 text-[0.7rem] font-medium tracking-[0.2em] uppercase text-noir bg-or no-underline px-9 py-4 hover:bg-or-clair transition-colors duration-300"
            >
              Prendre rendez-vous
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={SITE_CONFIG.contact.phoneHref}
              className="inline-flex items-center gap-3 text-[0.7rem] tracking-[0.2em] uppercase text-ivoire no-underline border border-or/40 px-9 py-4 hover:border-or hover:text-or transition-colors duration-300"
            >
              <Phone className="w-3.5 h-3.5" />
              {SITE_CONFIG.contact.phone}
            </a>
          </div>
        </RevealOnScroll>
      </section>

      <SectionDivider />

      {/* ── AUTRES DOMAINES (maillage interne) ── */}
      <section className="py-20 px-6 md:px-[60px]">
        <div className="section-label mb-8">Autres domaines d&apos;intervention</div>
        <ul className="flex flex-wrap gap-3 list-none">
          {others.map((o) => (
            <li key={o.slug}>
              <Link
                href={`/expertises/${o.slug}`}
                className="block text-[0.65rem] tracking-[0.18em] uppercase border border-or/20 text-gris-clair no-underline px-4 py-2 hover:border-or/50 hover:text-or transition-colors duration-300"
              >
                {o.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
