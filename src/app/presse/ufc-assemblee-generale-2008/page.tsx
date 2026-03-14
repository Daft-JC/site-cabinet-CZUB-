import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "L'UFC–Que Choisir, entre satisfactions et inquiétudes — La Provence",
  description:
    "L'UFC-Que Choisir de Martigues tient son assemblée générale 2008. Maître Czub rappelle les victoires obtenues contre les banques, Free et Total.",
};

export default function ArticleUfcAssembleeGeneralePage() {
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
            21 avril 2008
          </span>
          <span className="text-[0.6rem] tracking-[0.2em] uppercase text-or/70">
            Vie associative
          </span>
        </div>

        {/* Titre */}
        <h1 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-light text-ivoire leading-snug mb-4">
          L&apos;UFC–Que Choisir, entre satisfactions et inquiétudes
        </h1>
        <p className="font-sans text-[0.85rem] font-light text-gris-clair italic mb-4">
          Par Stéphane Rossi
        </p>
        <p className="font-sans text-[0.85rem] font-light text-gris-clair italic mb-12">
          L&apos;association vient de tenir son assemblée générale annuelle.
        </p>

        {/* Photo */}
        <div className="mb-12">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <Image
              src="/logo-ufc.webp"
              alt="Muguette Turbil et Josette Abril, UFC-Que Choisir Martigues"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
          <p className="text-[0.7rem] font-light text-gris mt-3 leading-relaxed">
            Muguette Turbil et Josette Abril ont dressé le bilan de l&apos;année écoulée tout en faisant part de leurs inquiétudes pour le futur. / Photo S.R.
          </p>
        </div>

        {/* Corps de l'article */}
        <div className="font-sans text-[0.9rem] font-light text-gris-clair leading-[1.9] space-y-6">
          <p>
            Achats-vente sur le net, téléphonie mobile, fournisseurs d&apos;accès
            internet… à bien des égards, les nouvelles technologies sont un véritable confort
            pour les usagers. Pourtant, derrière les avantages que procure la montée en puissance
            de ces outils, se cache un monceau de pièges, de clauses abusives et d&apos;arnaques
            en tout genre. Pour les associations, et l&apos;UFC-Que Choisir en particulier, il
            s&apos;agit de faire respecter les droits des consommateurs.
          </p>

          <p>
            Face à des usagers parfois crédules ou simplement mal informés, fournisseurs
            d&apos;accès et autres opérateurs ne tardent pas à dériver. C&apos;est d&apos;ailleurs
            ce que Josette Abril, la présidente de l&apos;UFC, n&apos;a pas manqué de rappeler à
            l&apos;occasion de l&apos;assemblée générale de l&apos;association.
          </p>

          <blockquote className="border-l-2 border-or pl-6 py-2">
            <p className="font-serif text-[1rem] italic text-ivoire leading-relaxed">
              « Nos plus grosses permanences sont liées aux problèmes de la technologie de pointe.
              Il y a eu une amélioration mais nous constatons aussi le retour de litiges liés à la
              téléphonie mobile, notamment pour des modifications de contrats non prises en
              compte. »
            </p>
            <cite className="block mt-3 text-[0.65rem] tracking-[0.2em] uppercase text-or not-italic">
              Josette Abril, présidente de l&apos;UFC
            </cite>
          </blockquote>

          <blockquote className="border-l-2 border-or pl-6 py-2">
            <p className="font-serif text-[1rem] italic text-ivoire leading-relaxed">
              « Concernant les achats sur internet, il est très difficile d&apos;obtenir
              réparation. Qui plus est lorsque la société est basée à l&apos;étranger. Celles-là,
              il faut les fuir. La législation française ne s&apos;applique pas et pour se
              défendre, il faudrait aller plaider devant les tribunaux de leurs pays. »
            </p>
            <cite className="block mt-3 text-[0.65rem] tracking-[0.2em] uppercase text-or not-italic">
              Muguette Turbil, vice-présidente
            </cite>
          </blockquote>

          <h2 className="font-serif text-[1.3rem] font-light text-ivoire mt-10">
            Les victoires de l&apos;année
          </h2>

          <p>
            Au rayon des satisfactions, Maître Czub, l&apos;avocat de l&apos;association, a
            rappelé les victoires obtenues contre les banques, l&apos;opérateur internet Free et
            la société pétrolière Total pour sa pluie de gazole de l&apos;été 2005.
          </p>

          <blockquote className="border-l-2 border-or pl-6 py-2">
            <p className="font-serif text-[1rem] italic text-ivoire leading-relaxed">
              « C&apos;est la première fois que l&apos;UFC dépose — et gagne — une requête en
              matière de droit de l&apos;environnement. Nos statuts le permettent. »
            </p>
            <cite className="block mt-3 text-[0.65rem] tracking-[0.2em] uppercase text-or not-italic">
              M<sup>e</sup> Czub, avocat de l&apos;UFC-Que Choisir Martigues
            </cite>
          </blockquote>

          <h2 className="font-serif text-[1.3rem] font-light text-ivoire mt-10">
            Des inquiétudes pour 2008
          </h2>

          <p>
            Pour 2008, l&apos;UFC-Que Choisir sera confrontée à plusieurs problèmes. Le premier
            est lié à la mise en place d&apos;une Union régionale qui regroupera toutes les unions
            locales de la région PACA. Certaines structures pourraient être menacées, mais ce ne
            sera sans doute pas le cas de Martigues et de ses permanences (Martigues, Istres,
            Marignane, Vitrolles et Châteauneuf). Les contrats aidés ont par ailleurs tendance à
            se réduire, rendant plus difficile le fonctionnement de l&apos;association.
          </p>

          <p>
            L&apos;une des autres satisfactions de l&apos;UFC est son déménagement dans des
            locaux neufs, sur le boulevard Joliot-Curie. Les bâtiments insalubres de la rue des
            Tours ont enfin été quittés pour une permanence moderne, spacieuse et lumineuse.
            Toutefois, ce déménagement aura des incidences sur la santé financière de
            l&apos;association&nbsp;: le loyer est triplé et les travaux ont été consommateurs de
            finances.
          </p>

          <p>
            L&apos;UFC s&apos;appuiera en 2008 sur quelques subventions — plusieurs villes
            cotisent, sauf Marignane, Sausset et Châteauneuf — et la générosité de ses
            adhérents. Il a ainsi été décidé d&apos;augmenter de 4&nbsp;€ la cotisation annuelle.
          </p>
        </div>

        {/* Signature */}
        <div className="mt-12 pt-8 border-t border-gris-sombre/40">
          <span className="text-[0.7rem] tracking-[0.15em] uppercase text-gris">
            Stéphane Rossi — La Provence — 21 avril 2008
          </span>
        </div>
      </div>
    </main>
  );
}
