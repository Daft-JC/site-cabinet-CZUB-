import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IconRetour } from "@/components/Icons";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.cabinet-czub.fr/presse/grossiste-viande-vitrolles" },
  title: "Lourde peine pour un grossiste en viande — La Provence",
  description:
    "Une société de vente en gros de viande basée à Vitrolles condamnée à 23 000 € d'amendes après contrôle vétérinaire. L'UFC, représentée par Maître Joseph Czub, s'est constituée partie civile.",
};

export default function ArticleGrossisteViandePage() {
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
            La Provence
          </span>
          <span className="text-[0.95rem] text-ocre-texte">
            Justice
          </span>
          <span className="text-[0.95rem] text-sourdine">
            Droit de la consommation
          </span>
        </div>

        {/* Titre */}
        <h1 className="t-h2 mb-12">
          Lourde peine pour un grossiste en viande
        </h1>

        {/* Photo */}
        <div className="mb-12">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-carte" style={{ aspectRatio: "16/9" }}>
            <Image
              src="/grossiste.jpg"
              alt="Grossiste en viande CBS Viandes à Vitrolles"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        </div>

        {/* Corps de l'article */}
        <div className="text-[1.0625rem] leading-[1.75] space-y-6">
          <p>
            Vingt-trois mille euros, c&apos;est la somme que devra verser, au titre d&apos;une
            impressionnante série d&apos;amendes — 681 retenues — une société de vente en gros de
            viande basée à Vitrolles. Cette affaire, jugée par le tribunal de police de Martigues
            le 13 mars dernier, et dont le délibéré vient d&apos;être porté à notre connaissance,
            a pour origine un contrôle «&nbsp;classique&nbsp;» de l&apos;Inspection des services
            vétérinaires chez CBS Viandes.
          </p>

          <p>
            Le 14 mars 2007, dans les congélateurs de l&apos;entreprise qui approvisionne les
            grandes surfaces de la région, les contrôleurs inspectent 11 tonnes de viandes
            diverses. Et pour eux, une grande partie — 4 tonnes — faisait l&apos;objet
            d&apos;infractions.
          </p>

          <blockquote className="border-l-[3px] border-ocre pl-6 py-1">
            <p className="font-serif text-[1.3rem] italic leading-snug text-encre">
              « Certains produits n&apos;étaient pas étiquetés et les dates limites de
              consommation étaient dépassées. Ces viandes périmées n&apos;auraient jamais dû se
              trouver en présence de denrées parfaitement saines. Une entreprise peut en stocker
              temporairement, mais elles doivent être parfaitement identifiées comme étant des
              déchets alimentaires à détruire. »
            </p>
            <cite className="block mt-3 text-[0.95rem] text-sourdine not-italic">
              Un cadre de la Direction des services vétérinaires
            </cite>
          </blockquote>

          <p>
            Étaient-elles destinées à être vendues&nbsp;? Pour ces spécialistes des contrôles,
            «&nbsp;le doute est permis&nbsp;». En vertu du Code rural et du Code de la
            consommation, 838 infractions sont relevées et un procès-verbal de constatation
            transmis au Parquet. Le procureur Pilling, insistant aussi sur la notion de
            «&nbsp;doute&nbsp;», dressera un réquisitoire accablant dans ce dossier qui aurait
            très bien pu être jugé en correctionnelle.
          </p>

          <blockquote className="border-l-[3px] border-ocre pl-6 py-1">
            <p className="font-serif text-[1.3rem] italic leading-snug text-encre">
              « Autant d&apos;infractions sur de telles quantités, c&apos;est très rare. »
            </p>
            <cite className="block mt-3 text-[0.95rem] text-sourdine not-italic">
              Le procureur Pilling
            </cite>
          </blockquote>

          <p>
            L&apos;Union fédérale des consommateurs (UFC) de l&apos;étang de Berre
            s&apos;est constituée partie civile dans ce dossier, soulignant, par la voix de
            Joseph Czub, son avocat, «&nbsp;l&apos;intérêt collectif des consommateurs
            d&apos;être partie prenante de ce procès&nbsp;». La demande de l&apos;UFC a été jugée
            recevable et la société CBS condamnée lourdement. Son directeur général n&apos;a pas
            fait appel.
          </p>

          <p>
            Depuis, les services vétérinaires ont enchaîné les contrôles — cinq en un peu plus
            d&apos;un an contre deux habituellement — sur le site. L&apos;entreprise
            s&apos;est mise en conformité.
          </p>
        </div>

        {/* Signature */}
        <div className="mt-12 pt-8 border-t border-trait">
          <span className="text-[0.95rem] text-sourdine">
            Stéphane Rossi — La Provence
          </span>
        </div>
      </div>
    </article>
  );
}
