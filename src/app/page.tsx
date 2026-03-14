"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG, EXPERTISES } from "@/lib/constants";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionDivider from "@/components/SectionDivider";
import ExpertiseCard from "@/components/ExpertiseCard";

export default function HomePage() {
  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-[60px] overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(184,149,79,0.03) 0%, transparent 70%), radial-gradient(ellipse 50% 80% at 20% 80%, rgba(184,149,79,0.02) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

          {/* ── Colonne texte ── */}
          <div>
            {/* Tag */}
            <div className="section-label mb-10 opacity-0 animate-fade-up [animation-delay:0.5s] [animation-fill-mode:forwards]">
              {SITE_CONFIG.tagline}
            </div>

            {/* Title */}
            <h1 className="font-serif font-light leading-[1.1] mb-10">
              <span className="block overflow-hidden">
                <span className="inline-block opacity-0 animate-slide-up [animation-delay:0.6s] [animation-fill-mode:forwards] text-[clamp(2.8rem,5vw,5.5rem)] text-ivoire">
                  Cabinet
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="inline-block opacity-0 animate-slide-up [animation-delay:0.75s] [animation-fill-mode:forwards] text-[clamp(2.8rem,5vw,5.5rem)] text-ivoire">
                  Maître Joseph Czub
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="inline-block opacity-0 animate-slide-up [animation-delay:0.9s] [animation-fill-mode:forwards] text-[clamp(2.8rem,5vw,5.5rem)] text-or italic font-normal">
                  Depuis 1994
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-[0.95rem] font-light text-gris-clair leading-[1.8] max-w-[500px] mb-12 opacity-0 animate-fade-up [animation-delay:1.2s] [animation-fill-mode:forwards]">
              Spécialisé dans la défense des consommateurs depuis plus de 30 ans,
              le cabinet intervient sur toute la France — photovoltaïque, fraudes
              bancaires, assurances, construction, automobile et bien davantage.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-6 items-center opacity-0 animate-fade-up [animation-delay:1.4s] [animation-fill-mode:forwards]">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 text-[0.7rem] font-medium tracking-[0.2em] uppercase text-noir bg-or no-underline px-9 py-4 relative overflow-hidden transition-all duration-400 hover:bg-or-clair"
              >
                <span className="relative z-10">Prendre rendez-vous</span>
                <ArrowRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/expertises"
                className="text-[0.7rem] font-normal tracking-[0.2em] uppercase text-ivoire no-underline py-4 relative after:content-[''] after:absolute after:bottom-3 after:left-0 after:w-full after:h-px after:bg-gris hover:text-or hover:after:bg-or transition-colors duration-300"
              >
                Nos domaines
              </Link>
            </div>
          </div>

          {/* ── Colonne photo ── */}
          <div className="flex justify-center items-center opacity-0 animate-fade-up [animation-delay:1s] [animation-fill-mode:forwards]">
            <div className="relative w-[300px] sm:w-[360px] lg:w-[420px] xl:w-[480px]">
              {/* Cadre décoratif or */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-or/20 pointer-events-none z-0" />
              <div className="relative z-10 overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/joseph-czub.jpg"
                  alt="Maître Joseph Czub, avocat à Martigues"
                  fill
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 360px, (max-width: 1280px) 420px, 480px"
                  priority
                />
              </div>
              {/* Badge */}
              <div className="absolute bottom-0 left-0 bg-noir/90 border-t border-l border-or/20 px-6 py-4 z-20">
                <span className="block text-[0.6rem] tracking-[0.25em] uppercase text-or mb-1">
                  Avocat au Barreau
                </span>
                <span className="block text-[0.8rem] font-light text-ivoire tracking-wide">
                  Aix-en-Provence — Depuis 1994
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-6 md:left-[60px] flex items-center gap-4 opacity-0 animate-fade-up [animation-delay:1.8s] [animation-fill-mode:forwards] hidden md:flex">
          <div className="w-px h-[60px] bg-gris-sombre relative overflow-hidden">
            <div className="absolute top-[-100%] left-0 w-px h-full bg-or animate-scroll-down" />
          </div>
          <span className="text-[0.6rem] tracking-[0.25em] uppercase text-gris [writing-mode:vertical-rl]">
            Défiler
          </span>
        </div>
      </section>

      <SectionDivider />

      {/* ══════════ ABOUT ══════════ */}
      <section className="py-24 md:py-36 px-6 md:px-[60px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative" style={{ background: "linear-gradient(135deg, rgba(26,20,10,0.6) 0%, rgba(18,14,6,0.4) 100%)" }}>
        {/* Background number */}
        <div className="absolute right-[60px] top-24 font-serif text-[7rem] font-light text-or opacity-[0.06] leading-none pointer-events-none hidden lg:block">
          30+
        </div>

        <div>
          <RevealOnScroll>
            <div className="section-label mb-8">Le Cabinet</div>
          </RevealOnScroll>
          <RevealOnScroll delay={150}>
            <h2 className="section-heading mb-4">
              L&apos;exigence du droit,
              <br />
              la force de <em>l&apos;expérience</em>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={300}>
            <div className="font-sans text-[0.9rem] font-light text-gris-clair leading-[1.9] space-y-5">
              <p>
                Fondé en 1994 à Martigues, le cabinet de Maître Joseph Czub est
                spécialisé dans la défense des consommateurs. Avocat au barreau
                d&apos;Aix-en-Provence, Maître Czub intervient sur toute la
                France pour faire respecter vos droits face aux abus de certains
                professionnels.
              </p>
              <p>
                En collaboration avec l&apos;UFC Que Choisir et si besoin avec un réseau
                d&apos;experts techniques, le cabinet obtient depuis près de
                30 ans des jurisprudences très favorables aux consommateurs
                victimes d&apos;arnaques aux énergies renouvelables, fraudes
                bancaires, litiges immobiliers et bien d&apos;autres domaines.
              </p>
            </div>
          </RevealOnScroll>
        </div>

        <div>
          <RevealOnScroll>
            <div className="grid grid-cols-3 gap-10 pt-12 border-t border-or/15">
              <div>
                <AnimatedCounter target={30} suffix="+" />
                <div className="text-[0.65rem] tracking-[0.15em] uppercase text-gris leading-relaxed mt-2">
                  Années
                  <br />
                  d&apos;expérience
                </div>
              </div>
              <div>
                <span className="font-serif text-[2.8rem] font-light text-or leading-none">
                  10
                </span>
                <div className="text-[0.65rem] tracking-[0.15em] uppercase text-gris leading-relaxed mt-2">
                  Domaines
                  <br />
                  d&apos;intervention
                </div>
              </div>
              <div>
                <span className="font-serif text-[2.8rem] font-light text-or leading-none">
                  1
                </span>
                <div className="text-[0.65rem] tracking-[0.15em] uppercase text-gris leading-relaxed mt-2">
                  Interlocuteur
                  <br />
                  unique & dédié
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <SectionDivider />

      {/* ══════════ DOMAINES D'INTERVENTION ══════════ */}
      <section className="py-24 md:py-36 px-6 md:px-[60px]">
        <div className="text-center mb-20">
          <RevealOnScroll>
            <div className="section-label justify-center mb-6">
              Domaines d&apos;intervention
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={150}>
            <h2 className="section-heading">
              Votre défense, <em>notre expertise</em>
            </h2>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0.5">
          {EXPERTISES.map((exp, i) => (
            <ExpertiseCard
              key={exp.id}
              id={exp.id}
              title={exp.title}
              description={exp.shortDesc}
              icon={exp.icon}
              delay={i * 80}
            />
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* ══════════ QUOTE ══════════ */}
      <section className="py-24 md:py-32 px-6 md:px-[60px] text-center" style={{ background: "linear-gradient(180deg, transparent 0%, rgba(184,149,79,0.04) 40%, rgba(184,149,79,0.06) 55%, rgba(184,149,79,0.04) 70%, transparent 100%)" }}>
        <RevealOnScroll>
          <div className="font-serif text-[6rem] text-or opacity-20 leading-none mb-[-20px]">
            &ldquo;
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={150}>
          <p className="font-serif text-[clamp(1.4rem,2.5vw,2rem)] font-light italic text-ivoire max-w-[700px] mx-auto mb-8 leading-relaxed">
            Faire respecter vos droits face aux abus de certains professionnels.
            Faire appliquer les garanties légales élémentaires.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={300}>
          <span className="text-[0.7rem] tracking-[0.2em] uppercase text-or">
            {SITE_CONFIG.lawyer}
          </span>
        </RevealOnScroll>
      </section>

      <SectionDivider />

      {/* ══════════ CTA FINAL ══════════ */}
      <section className="py-24 md:py-36 px-6 md:px-[60px] text-center">
        <RevealOnScroll>
          <h2 className="section-heading mb-6">
            Besoin d&apos;un <em>accompagnement juridique</em> ?
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={150}>
          <p className="font-sans text-[0.95rem] font-light text-gris-clair leading-[1.8] max-w-lg mx-auto mb-10">
            Le cabinet vous accueille sur rendez-vous à Martigues. Prenons le
            temps d&apos;échanger sur votre situation.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={300}>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 text-[0.7rem] font-medium tracking-[0.2em] uppercase text-noir bg-or no-underline px-9 py-4 transition-all duration-400 hover:bg-or-clair"
          >
            <span>Nous contacter</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </RevealOnScroll>
      </section>
    </>
  );
}
