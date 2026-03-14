import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "L'UFC Martigues-étang de Berre sur tous les fronts — La Provence",
  description:
    "Partie civile dans le procès de la viande avariée maquillée, l'UFC Martigues a obtenu 6 000 € de dommages et intérêts — un montant record. Maître Joseph Czub, avocat de l'association.",
};

export default function ArticleViandeAvarieePage() {
  return (
    <main className="pt-36 pb-24 px-6 md:px-[60px]">
      {/* Retour */}
      <Link
        href="/presse"
        className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.2em] uppercase text-gris no-underline hover:text-or transition-colors duration-300 mb-12"
      >
        <ArrowLeft className="w-3 h-3" strokeWidth={1.5} />
        Presse &amp; Médias
      </Link>

      <div className="max-w-3xl">
        {/* Méta */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <span className="text-[0.6rem] tracking-[0.18em] uppercase text-gris border border-gris-sombre px-3 py-1">
            La Provence — Martigues
          </span>
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-or">
            Droit pénal
          </span>
          <span className="text-[0.6rem] tracking-[0.2em] uppercase text-or/70">
            Droit de la consommation
          </span>
        </div>

        {/* Titre */}
        <h1 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-light text-ivoire leading-snug mb-4">
          L&apos;UFC Martigues-étang de Berre sur tous les fronts
        </h1>
        <p className="font-sans text-[0.85rem] font-light text-gris-clair italic mb-12">
          Partie civile dans le procès de la viande avariée maquillée, l&apos;association a obtenu
          6&nbsp;000&nbsp;€ de dommages et intérêts. Un montant record pour elle.
        </p>

        {/* Photo */}
        <div className="mb-12">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <Image
              src="/boucherie.jpg"
              alt="L'UFC Martigues, seule association partie civile lors du procès sur la viande avariée"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
          <p className="text-[0.7rem] font-light text-gris mt-3 leading-relaxed">
            L&apos;UFC Martigues était la seule association partie civile lors de ce procès sur la viande avariée. / Photo illustration Sophie Spiteri
          </p>
        </div>

        {/* Corps de l'article */}
        <div className="font-sans text-[0.9rem] font-light text-gris-clair leading-[1.9] space-y-6">
          <p>
            Le tribunal correctionnel de Marseille s&apos;est montré ferme. Il a prononcé des
            peines de prison avec sursis à l&apos;encontre de sept gérants et vendeurs de
            boucheries installées à Marseille, Martigues et Port-de-Bouc pour «&nbsp;falsification
            de denrées alimentaires nuisibles à la santé, vente de denrées alimentaires falsifiées
            nuisibles à la santé et tromperie sur la marchandise entraînant un danger pour la
            santé de l&apos;homme&nbsp;».
          </p>

          <p>
            Aidé par un «&nbsp;chimiste&nbsp;», Pierre Azzi, condamné à 30 mois de prison dont
            douze ferme et une amende de 10&nbsp;000&nbsp;€, ils avaient vendu entre 2004 et 2009
            de la viande avariée à laquelle ils avaient redonné des couleurs grâce à
            l&apos;injection de bisulfite de soude.
          </p>

          <h2 className="font-serif text-[1.3rem] font-light text-ivoire mt-10">
            Une satisfaction pour l&apos;UFC Martigues
          </h2>

          <blockquote className="border-l-2 border-or pl-6 py-2">
            <p className="font-serif text-[1rem] italic text-ivoire leading-relaxed">
              « Une tromperie sur la qualité, c&apos;est gravissime. On avait eu une histoire avec
              ces tomates de Provence qui venaient en fait d&apos;Espagne, mais il ne
              s&apos;agissait que d&apos;un préjudice pécunier. Là, on se dit qu&apos;il y a des
              enfants et des adultes qui ne devraient en aucun cas avoir accès à ce type de
              nourriture. »
            </p>
            <cite className="block mt-3 text-[0.65rem] tracking-[0.2em] uppercase text-or not-italic">
              Muguette Turbil, présidente de l&apos;UFC-Que Choisir de Martigues-étang de Berre
            </cite>
          </blockquote>

          <p>
            L&apos;UFC Martigues était la seule association partie civile lors de ce procès. Le
            tribunal de Marseille lui a accordé 6&nbsp;000&nbsp;€ de dommages et intérêts.
          </p>

          <blockquote className="border-l-2 border-or pl-6 py-2">
            <p className="font-serif text-[1rem] italic text-ivoire leading-relaxed">
              « C&apos;est la première fois qu&apos;une somme aussi importante nous est allouée.
              Ça prouve que tout ce qui touche à la consommation intéresse désormais la justice. »
            </p>
            <cite className="block mt-3 text-[0.65rem] tracking-[0.2em] uppercase text-or not-italic">
              Muguette Turbil
            </cite>
          </blockquote>

          <p>
            En s&apos;étant constituée partie civile, l&apos;association martégale
            «&nbsp;s&apos;est engagée dans ce dossier très tôt. Elle était partie civile dès le
            stade de l&apos;instruction, en 2009. Elle défendait l&apos;intérêt collectif des
            consommateurs, comme l&apos;y autorise le code de la consommation&nbsp;», rappelle
            M<sup>e</sup> Joseph Czub, l&apos;avocat martégal de l&apos;association.
          </p>

          <blockquote className="border-l-2 border-or pl-6 py-2">
            <p className="font-serif text-[1rem] italic text-ivoire leading-relaxed">
              « C&apos;est encourageant, ça montre que ce qu&apos;on fait est utile à tout le
              monde. Et ça nous permet aussi de continuer notre action. »
            </p>
            <cite className="block mt-3 text-[0.65rem] tracking-[0.2em] uppercase text-or not-italic">
              Muguette Turbil
            </cite>
          </blockquote>

          <p>
            Seul regret&nbsp;: qu&apos;aucune peine d&apos;interdiction professionnelle n&apos;ait
            été prononcée. M<sup>e</sup> Czub relativise&nbsp;: «&nbsp;Certains avaient déjà été
            frappés par des fermetures temporaires. Deux d&apos;entre eux ont même dû cesser leur
            activité.&nbsp;»
          </p>
        </div>

        {/* Signature */}
        <div className="mt-12 pt-8 border-t border-gris-sombre/40">
          <span className="text-[0.7rem] tracking-[0.15em] uppercase text-gris">
            Sylvain Pignol — La Provence
          </span>
        </div>
      </div>
    </main>
  );
}
