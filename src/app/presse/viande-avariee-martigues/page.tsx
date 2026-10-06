import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IconRetour } from "@/components/Icons";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.cabinet-czub.fr/presse/viande-avariee-martigues" },
  title: "L'UFC Martigues-étang de Berre sur tous les fronts — La Provence",
  description:
    "Partie civile dans le procès de la viande avariée maquillée, l'UFC Martigues a obtenu 6 000 € de dommages et intérêts — un montant record. Maître Joseph Czub, avocat de l'association.",
};

export default function ArticleViandeAvarieePage() {
  return (
    <article className="wrap py-10 md:py-16">
      {/* Retour */}
      <Link
        href="/presse"
        className="inline-flex items-center gap-2 text-[0.95rem] text-sourdine mb-10"
      >
        <IconRetour />
        Presse &amp; Médias
      </Link>

      <div className="max-w-[42rem]">
        {/* Méta */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <span className="rounded-full bg-enduit px-3 py-1 text-[0.95rem] font-medium">
            La Provence — Martigues
          </span>
          <span className="text-[0.95rem] text-ocre-texte">
            Droit pénal
          </span>
          <span className="text-[0.95rem] text-sourdine">
            Droit de la consommation
          </span>
        </div>

        {/* Titre */}
        <h1 className="t-h2 mb-4">
          L&apos;UFC Martigues-étang de Berre sur tous les fronts
        </h1>
        <p className="t-lead italic text-sourdine mb-12">
          Partie civile dans le procès de la viande avariée maquillée, l&apos;association a obtenu
          6&nbsp;000&nbsp;€ de dommages et intérêts. Un montant record pour elle.
        </p>

        {/* Photo */}
        <div className="mb-12">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-carte" style={{ aspectRatio: "16/9" }}>
            <Image
              src="/boucherie.jpg"
              alt="L'UFC Martigues, seule association partie civile lors du procès sur la viande avariée"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
          <p className="text-[0.9rem] text-sourdine mt-3">
            L&apos;UFC Martigues était la seule association partie civile lors de ce procès sur la viande avariée. / Photo illustration Sophie Spiteri
          </p>
        </div>

        {/* Corps de l'article */}
        <div className="text-[1.0625rem] leading-[1.75] space-y-6">
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

          <h2 className="t-h3 mt-10">
            Une satisfaction pour l&apos;UFC Martigues
          </h2>

          <blockquote className="border-l-[3px] border-ocre pl-6 py-1">
            <p className="font-serif text-[1.3rem] italic leading-snug text-encre">
              « Une tromperie sur la qualité, c&apos;est gravissime. On avait eu une histoire avec
              ces tomates de Provence qui venaient en fait d&apos;Espagne, mais il ne
              s&apos;agissait que d&apos;un préjudice pécunier. Là, on se dit qu&apos;il y a des
              enfants et des adultes qui ne devraient en aucun cas avoir accès à ce type de
              nourriture. »
            </p>
            <cite className="block mt-3 text-[0.95rem] text-sourdine not-italic">
              Muguette Turbil, présidente de l&apos;UFC-Que Choisir de Martigues-étang de Berre
            </cite>
          </blockquote>

          <p>
            L&apos;UFC Martigues était la seule association partie civile lors de ce procès. Le
            tribunal de Marseille lui a accordé 6&nbsp;000&nbsp;€ de dommages et intérêts.
          </p>

          <blockquote className="border-l-[3px] border-ocre pl-6 py-1">
            <p className="font-serif text-[1.3rem] italic leading-snug text-encre">
              « C&apos;est la première fois qu&apos;une somme aussi importante nous est allouée.
              Ça prouve que tout ce qui touche à la consommation intéresse désormais la justice. »
            </p>
            <cite className="block mt-3 text-[0.95rem] text-sourdine not-italic">
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

          <blockquote className="border-l-[3px] border-ocre pl-6 py-1">
            <p className="font-serif text-[1.3rem] italic leading-snug text-encre">
              « C&apos;est encourageant, ça montre que ce qu&apos;on fait est utile à tout le
              monde. Et ça nous permet aussi de continuer notre action. »
            </p>
            <cite className="block mt-3 text-[0.95rem] text-sourdine not-italic">
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
        <div className="mt-12 pt-8 border-t border-trait">
          <span className="text-[0.95rem] text-sourdine">
            Sylvain Pignol — La Provence
          </span>
        </div>
      </div>
    </article>
  );
}
