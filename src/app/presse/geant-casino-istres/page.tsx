import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IconRetour } from "@/components/Icons";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.cabinet-czub.fr/presse/geant-casino-istres" },
  title: "Les services vétérinaires et l'UFC font condamner Géant — La Provence",
  description:
    "Géant Casino d'Istres condamné à 81 contraventions pour des denrées alimentaires conservées hors des températures réglementaires. Maître Czub, avocat de l'UFC.",
};

export default function ArticleGeantCasinoPage() {
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
            La Provence — Istres
          </span>
          <span className="text-[0.95rem] text-ocre-texte">
            Consommation
          </span>
          <span className="text-[0.95rem] text-sourdine">
            Droit de la consommation
          </span>
        </div>

        {/* Titre */}
        <h1 className="t-h2 mb-4">
          Les services vétérinaires et l&apos;UFC font condamner Géant
        </h1>
        <p className="t-lead italic text-sourdine mb-4">
          Par Stéphane Rossi
        </p>
        <p className="t-lead italic text-sourdine mb-12">
          Les aliments n&apos;étaient pas conservés à la bonne température
        </p>

        {/* Photo */}
        <div className="mb-12">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-carte" style={{ aspectRatio: "16/9" }}>
            <Image
              src="/geant-casino.jpg"
              alt="Rayons réfrigérés de la grande surface istréenne"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
          <p className="text-[0.9rem] text-sourdine mt-3">
            81 infractions ont été relevées le 19 juillet 2007 dans les rayons réfrigérés de la grande surface istréenne. / Photo S.R.
          </p>
        </div>

        {/* Corps de l'article */}
        <div className="text-[1.0625rem] leading-[1.75] space-y-6">
          <p>
            Géant ne fera pas appel. Condamnée lors de la dernière audience au tribunal de police
            de Martigues, la grande surface a pris acte de la décision du magistrat chargé de
            statuer sur cette affaire.
          </p>

          <p>
            Les faits remontent au 19 juillet 2007. Ce jour-là, des agents du service vétérinaire
            procèdent à un contrôle dans les allées de l&apos;hypermarché. Au gré de leurs
            relevés, ils constatent que des banques réfrigérées contenant des produits alimentaires
            ne respectent pas les températures de conservation pourtant obligatoires.
          </p>

          <blockquote className="border-l-[3px] border-ocre pl-6 py-1">
            <p className="font-serif text-[1.3rem] italic leading-snug text-encre">
              « Jusqu&apos;à 12,4°C constatés alors qu&apos;il aurait fallu conserver ces aliments
              à 0 ou 3°C. »
            </p>
            <cite className="block mt-3 text-[0.95rem] text-sourdine not-italic">
              Rose-Marie Plaksine, présidente du tribunal de police de Martigues
            </cite>
          </blockquote>

          <p>
            Au total, ce sont 81 produits — donc autant d&apos;infractions — que les services
            vétérinaires mentionneront sur leurs procès-verbaux. Roland Nugue, directeur de
            l&apos;hypermarché, tentera bien d&apos;expliquer que «&nbsp;la gestion des banques
            réfrigérées est sous-traitée et que les alarmes n&apos;ont pas fonctionné&nbsp;». En
            vain.
          </p>

          <h2 className="t-h3 mt-10">
            Une récidive préoccupante
          </h2>

          <blockquote className="border-l-[3px] border-ocre pl-6 py-1">
            <p className="font-serif text-[1.3rem] italic leading-snug text-encre">
              « Les mêmes faits s&apos;étaient déjà produits un an auparavant. On peut
              s&apos;attendre à ce type de constatation lors de contrôles de petits commerçants
              mais venant d&apos;une grande surface, le problème est beaucoup plus grave. »
            </p>
            <cite className="block mt-3 text-[0.95rem] text-sourdine not-italic">
              M<sup>e</sup> Czub, avocat de l&apos;Union fédérale des consommateurs
            </cite>
          </blockquote>

          <p>
            L&apos;UFC s&apos;était constituée partie civile dans ce dossier. Les juges ont tenu
            compte des inquiétudes des représentants des consommateurs.
          </p>

          <p>
            Géant a été condamné à 81 contraventions de 50&nbsp;€ pour «&nbsp;exposition, mise en
            circulation ou vente de denrées animales ou d&apos;origine animale non conformes aux
            normes sanitaires&nbsp;». L&apos;hypermarché devra, en outre, verser 500&nbsp;€ à la
            partie civile.
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
