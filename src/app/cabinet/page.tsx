import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import PageHero from "@/components/PageHero";
import SectionDivider from "@/components/SectionDivider";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Scale, BookOpen, Handshake, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Le Cabinet",
  description: `Découvrez le cabinet de ${SITE_CONFIG.lawyer}, avocat à ${SITE_CONFIG.location.city} depuis plus de 30 ans.`,
};

const VALUES = [
  {
    icon: Scale,
    title: "Rigueur",
    desc: "Une analyse juridique précise et méthodique, appuyée sur une connaissance approfondie du Code de la consommation et de la jurisprudence.",
  },
  {
    icon: BookOpen,
    title: "Expertise",
    desc: "Plus de 30 ans de pratique au service des consommateurs, avec des jurisprudences favorables obtenues jusqu'en Cour de cassation.",
  },
  {
    icon: Handshake,
    title: "Partenariats",
    desc: "En collaboration avec l'UFC Que Choisir et un réseau d'experts techniques pour une défense complète et documentée.",
  },
  {
    icon: Award,
    title: "Engagement",
    desc: "Faire respecter vos droits et appliquer les garanties légales élémentaires face aux abus de certains professionnels.",
  },
];

export default function CabinetPage() {
  return (
    <>
      <PageHero
        tag="Le Cabinet"
        title="Faire respecter"
        highlight="vos droits"
        subtitle="Depuis 1994, le cabinet Czub défend les consommateurs victimes d'abus, d'arnaques et de manquements professionnels, sur toute la France."
      />

      <SectionDivider />

      {/* ── HISTOIRE ── */}
      <section className="py-24 md:py-36 px-6 md:px-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
          <div className="lg:col-span-2">
            <RevealOnScroll>
              <div className="section-label mb-6">Notre histoire</div>
            </RevealOnScroll>
            <RevealOnScroll delay={150}>
              <h2 className="section-heading mb-4">
                Plus de trente ans <em>d'engagement</em>
              </h2>
            </RevealOnScroll>
          </div>
          <div className="lg:col-span-3">
            <RevealOnScroll delay={200}>
              <div className="font-sans text-[0.9rem] font-light text-gris-clair leading-[1.9] space-y-5">
                <p>
                  Installé à Martigues depuis 1994 à l'Espace Vénitien, Maître
                  Joseph Czub, avocat à la Cour d'Appel d'Aix-en-Provence, s'est
                  imposé comme un acteur incontournable de la défense des
                  consommateurs. En plus de 30 ans d'exercice, il a obtenu
                  d'innombrables jurisprudences favorables devant les tribunaux
                  judiciaires, les Cours d'appel et la Cour de cassation.
                </p>
                <p>
                  Le cabinet est notamment reconnu pour son expertise approfondie
                  dans la lutte contre les arnaques aux énergies renouvelables
                  (photovoltaïque, pompes à chaleur, ballons thermodynamiques),
                  intervenant sur toute la France pour obtenir l'annulation des
                  contrats et des crédits affectés. Il défend également les
                  victimes de fraudes bancaires, de litiges immobiliers, de
                  sinistres d'assurance refusés et de bien d'autres abus.
                </p>
                <p>
                  En collaboration avec l'UFC Que Choisir et un réseau d'experts
                  techniques spécialisés, Maître Czub offre à chaque client une
                  défense sur mesure, rigoureuse et sans compromis, pour faire
                  appliquer les garanties légales élémentaires auxquelles tout
                  consommateur a droit.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── VALEURS ── */}
      <section className="py-24 md:py-36 px-6 md:px-[60px]">
        <div className="text-center mb-20">
          <RevealOnScroll>
            <div className="section-label justify-center mb-6">Nos valeurs</div>
          </RevealOnScroll>
          <RevealOnScroll delay={150}>
            <h2 className="section-heading">
              Les fondements de <em>notre pratique</em>
            </h2>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gris-sombre/50">
          {VALUES.map((v, i) => (
            <RevealOnScroll key={v.title} delay={i * 100}>
              <div className="bg-noir p-10 md:p-12 h-full group hover:bg-anthracite transition-colors duration-500">
                <v.icon
                  className="w-6 h-6 text-or mb-8 transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.5}
                />
                <h3 className="font-serif text-xl text-ivoire mb-3">
                  {v.title}
                </h3>
                <p className="text-[0.82rem] font-light text-gris-clair leading-[1.8]">
                  {v.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* ── CHIFFRES ── */}
      <section className="py-24 md:py-36 px-6 md:px-[60px]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <RevealOnScroll>
              <h2 className="section-heading">
                Le cabinet en <em>chiffres</em>
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              <div>
                <AnimatedCounter target={30} suffix="+" />
                <div className="text-[0.65rem] tracking-[0.15em] uppercase text-gris mt-3">
                  Années d'exercice
                </div>
              </div>
              <div>
                <span className="font-serif text-[2.8rem] font-light text-or leading-none">
                  10
                </span>
                <div className="text-[0.65rem] tracking-[0.15em] uppercase text-gris mt-3">
                  Domaines
                  <br />
                  d'intervention
                </div>
              </div>
              <div>
                <span className="font-serif text-[2.8rem] font-light text-or leading-none">
                  100%
                </span>
                <div className="text-[0.65rem] tracking-[0.15em] uppercase text-gris mt-3">
                  Sur mesure
                </div>
              </div>
              <div>
                <span className="font-serif text-[2.8rem] font-light text-or leading-none">
                  1
                </span>
                <div className="text-[0.65rem] tracking-[0.15em] uppercase text-gris mt-3">
                  Avocat dédié
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
