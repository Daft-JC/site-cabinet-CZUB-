import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Les services vétérinaires et l'UFC font condamner Géant — La Provence",
  description:
    "Géant Casino d'Istres condamné à 81 contraventions pour des denrées alimentaires conservées hors des températures réglementaires. Maître Czub, avocat de l'UFC.",
};

export default function ArticleGeantCasinoPage() {
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
            La Provence — Istres
          </span>
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-or">
            Consommation
          </span>
          <span className="text-[0.6rem] tracking-[0.2em] uppercase text-or/70">
            Droit de la consommation
          </span>
        </div>

        {/* Titre */}
        <h1 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-light text-ivoire leading-snug mb-4">
          Les services vétérinaires et l&apos;UFC font condamner Géant
        </h1>
        <p className="font-sans text-[0.85rem] font-light text-gris-clair italic mb-4">
          Par Stéphane Rossi
        </p>
        <p className="font-sans text-[0.85rem] font-light text-gris-clair italic mb-12">
          Les aliments n&apos;étaient pas conservés à la bonne température
        </p>

        {/* Photo */}
        <div className="mb-12">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <Image
              src="/geant-casino.jpg"
              alt="Rayons réfrigérés de la grande surface istréenne"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
          <p className="text-[0.7rem] font-light text-gris mt-3 leading-relaxed">
            81 infractions ont été relevées le 19 juillet 2007 dans les rayons réfrigérés de la grande surface istréenne. / Photo S.R.
          </p>
        </div>

        {/* Corps de l'article */}
        <div className="font-sans text-[0.9rem] font-light text-gris-clair leading-[1.9] space-y-6">
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

          <blockquote className="border-l-2 border-or pl-6 py-2">
            <p className="font-serif text-[1rem] italic text-ivoire leading-relaxed">
              « Jusqu&apos;à 12,4°C constatés alors qu&apos;il aurait fallu conserver ces aliments
              à 0 ou 3°C. »
            </p>
            <cite className="block mt-3 text-[0.65rem] tracking-[0.2em] uppercase text-or not-italic">
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

          <h2 className="font-serif text-[1.3rem] font-light text-ivoire mt-10">
            Une récidive préoccupante
          </h2>

          <blockquote className="border-l-2 border-or pl-6 py-2">
            <p className="font-serif text-[1rem] italic text-ivoire leading-relaxed">
              « Les mêmes faits s&apos;étaient déjà produits un an auparavant. On peut
              s&apos;attendre à ce type de constatation lors de contrôles de petits commerçants
              mais venant d&apos;une grande surface, le problème est beaucoup plus grave. »
            </p>
            <cite className="block mt-3 text-[0.65rem] tracking-[0.2em] uppercase text-or not-italic">
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
        <div className="mt-12 pt-8 border-t border-gris-sombre/40">
          <span className="text-[0.7rem] tracking-[0.15em] uppercase text-gris">
            Stéphane Rossi — La Provence
          </span>
        </div>
      </div>
    </main>
  );
}
