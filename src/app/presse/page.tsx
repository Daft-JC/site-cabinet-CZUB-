import type { Metadata } from "next";
import { ARTICLES_PRESSE } from "@/lib/constants";
import PageHero from "@/components/PageHero";
import SectionDivider from "@/components/SectionDivider";
import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight, CalendarDays, Newspaper } from "lucide-react";

export const metadata: Metadata = {
  title: "Presse & Médias",
  description:
    "Articles de presse, publications et interventions médiatiques du Cabinet Maître Joseph Czub.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function PressePage() {
  return (
    <>
      <PageHero
        tag="Presse & Médias"
        title="Le cabinet dans"
        highlight="les médias"
        subtitle="Retrouvez ici les articles, publications et interventions médiatiques de Maître Joseph Czub dans la presse spécialisée et généraliste."
      />

      <SectionDivider />

      {/* ── INTRO ── */}
      <section className="py-20 md:py-28 px-6 md:px-[60px]">
        <div className="max-w-3xl">
          <RevealOnScroll>
            <div className="section-label mb-8">Publications</div>
          </RevealOnScroll>
          <RevealOnScroll delay={150}>
            <h2 className="section-heading mb-6">
              Expertise reconnue,<br />
              voix <em>écoutée</em>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={300}>
            <p className="font-sans text-[0.9rem] font-light text-gris-clair leading-[1.9]">
              Régulièrement sollicité par la presse juridique et économique, Maître Joseph Czub
              partage son analyse sur les évolutions du droit de l'énergie, du droit des affaires
              et de la protection des consommateurs. Ces interventions témoignent d'un engagement
              constant pour la diffusion du droit au-delà du prétoire.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <SectionDivider />

      {/* ── ARTICLES ── */}
      <section className="py-20 md:py-28 px-6 md:px-[60px]">
        {ARTICLES_PRESSE.length === 0 ? (
          <RevealOnScroll>
            <div className="text-center py-24 border border-gris-sombre/40">
              <Newspaper className="w-8 h-8 text-or mx-auto mb-6" strokeWidth={1.2} />
              <p className="font-serif text-xl text-ivoire mb-2">Articles à venir</p>
              <p className="text-[0.85rem] font-light text-gris-clair">
                Cette section sera bientôt alimentée.
              </p>
            </div>
          </RevealOnScroll>
        ) : (
          <div className="space-y-0.5">
            {ARTICLES_PRESSE.map((article, i) => (
              <RevealOnScroll key={article.id} delay={i * 100}>
                <article className="group relative border border-transparent hover:border-or/15 bg-transparent hover:bg-anthracite transition-all duration-500 p-8 md:p-10">

                  {/* Ligne décorative gauche */}
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-or/0 group-hover:bg-or/40 transition-colors duration-500" />

                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">

                    {/* Date + Source */}
                    <div className="flex-shrink-0 md:w-48">
                      <div className="flex items-center gap-2 text-[0.65rem] tracking-[0.2em] uppercase text-or mb-2">
                        <CalendarDays className="w-3 h-3" strokeWidth={1.5} />
                        {formatDate(article.date)}
                      </div>
                      <div className="inline-block text-[0.6rem] tracking-[0.18em] uppercase text-gris border border-gris-sombre px-3 py-1">
                        {article.source}
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="flex-1">
                      <div className="text-[0.6rem] tracking-[0.22em] uppercase text-or/70 mb-3">
                        {article.category}
                      </div>
                      <h3 className="font-serif text-[1.25rem] md:text-[1.45rem] font-light text-ivoire leading-snug mb-4 group-hover:text-or transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-[0.85rem] font-light text-gris-clair leading-[1.85]">
                        {article.excerpt}
                      </p>

                      {article.url && (
                        article.url.startsWith("/") ? (
                          <Link
                            href={article.url}
                            className="inline-flex items-center gap-2 mt-5 text-[0.65rem] tracking-[0.2em] uppercase text-or no-underline hover:text-or-clair transition-colors duration-300"
                          >
                            Lire l&apos;article
                            <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                          </Link>
                        ) : (
                          <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-5 text-[0.65rem] tracking-[0.2em] uppercase text-or no-underline hover:text-or-clair transition-colors duration-300"
                          >
                            Lire l&apos;article
                            <ExternalLink className="w-3 h-3" strokeWidth={1.5} />
                          </a>
                        )
                      )}
                    </div>

                    {/* Photo optionnelle */}
                    {article.image && (
                      <div className="flex-shrink-0 w-full md:w-[200px] lg:w-[260px]">
                        <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 260px"
                          />
                        </div>
                      </div>
                    )}

                  </div>
                </article>

                {/* Séparateur entre articles */}
                {i < ARTICLES_PRESSE.length - 1 && (
                  <div className="h-px bg-gris-sombre/40 mx-0" />
                )}
              </RevealOnScroll>
            ))}
          </div>
        )}
      </section>

      <SectionDivider />

      {/* ── CTA contact presse ── */}
      <section className="py-20 md:py-28 px-6 md:px-[60px]">
        <RevealOnScroll>
          <div className="border border-or/15 p-10 md:p-16 text-center max-w-2xl mx-auto">
            <div className="section-label justify-center mb-8">Contact presse</div>
            <h2 className="font-serif text-[clamp(1.6rem,2.5vw,2.2rem)] font-light text-ivoire mb-6 leading-snug">
              Une demande d&apos;interview<br />
              ou de <em>commentaire</em> ?
            </h2>
            <p className="text-[0.85rem] font-light text-gris-clair leading-[1.85] mb-8">
              Maître Joseph Czub est disponible pour toute sollicitation journalistique,
              contribution à des revues juridiques ou participation à des conférences.
            </p>
            <a
              href={`mailto:czubjoseph@hotmail.com?subject=Demande presse`}
              className="inline-flex items-center gap-3 text-[0.7rem] font-medium tracking-[0.2em] uppercase text-noir bg-or no-underline px-9 py-4 transition-all duration-400 hover:bg-or-clair"
            >
              Nous contacter
            </a>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
