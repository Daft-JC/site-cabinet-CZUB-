import type { Metadata } from "next";
import { EXPERTISES } from "@/lib/constants";
import PageHero from "@/components/PageHero";
import SectionDivider from "@/components/SectionDivider";
import RevealOnScroll from "@/components/RevealOnScroll";
import { Sun, Building2, Shield, CreditCard, Umbrella, Car, Scale, Heart, Key, Users, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Domaines d'intervention",
  description:
    "Photovoltaïque, arnaques bancaires, assurances, construction, automobile, divorces — découvrez tous les domaines d'intervention du cabinet Czub.",
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
      <PageHero
        tag="Cabinet Czub — Depuis 1994"
        title="Domaines"
        highlight="d'intervention"
        subtitle="Spécialisé dans la défense des consommateurs depuis plus de 30 ans, le cabinet intervient sur toute la France dans de nombreux domaines du droit."
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
                    <p className="text-[0.9rem] font-light text-gris-clair leading-[1.9] mb-8">
                      {exp.description}
                    </p>
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
