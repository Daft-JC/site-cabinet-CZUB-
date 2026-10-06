import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IconRetour } from "@/components/Icons";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.cabinet-czub.fr/presse/ufc-assemblee-generale-2008" },
  title: "L'UFC–Que Choisir, entre satisfactions et inquiétudes — La Provence",
  description:
    "L'UFC-Que Choisir de Martigues tient son assemblée générale 2008. Maître Czub rappelle les victoires obtenues contre les banques, Free et Total.",
};

export default function ArticleUfcAssembleeGeneralePage() {
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
            21 avril 2008
          </span>
          <span className="text-[0.95rem] text-sourdine">
            Vie associative
          </span>
        </div>

        {/* Titre */}
        <h1 className="t-h2 mb-4">
          L&apos;UFC–Que Choisir, entre satisfactions et inquiétudes
        </h1>
        <p className="t-lead italic text-sourdine mb-4">
          Par Stéphane Rossi
        </p>
        <p className="t-lead italic text-sourdine mb-12">
          L&apos;association vient de tenir son assemblée générale annuelle.
        </p>

        {/* Photo */}
        <div className="mb-12">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-carte" style={{ aspectRatio: "16/9" }}>
            <Image
              src="/logo-ufc.jpg"
              alt="Muguette Turbil et Josette Abril, UFC-Que Choisir Martigues"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
          <p className="text-[0.9rem] text-sourdine mt-3">
            Muguette Turbil et Josette Abril ont dressé le bilan de l&apos;année écoulée tout en faisant part de leurs inquiétudes pour le futur. / Photo S.R.
          </p>
        </div>

        {/* Corps de l'article */}
        <div className="text-[1.0625rem] leading-[1.75] space-y-6">
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

          <blockquote className="border-l-[3px] border-ocre pl-6 py-1">
            <p className="font-serif text-[1.3rem] italic leading-snug text-encre">
              « Nos plus grosses permanences sont liées aux problèmes de la technologie de pointe.
              Il y a eu une amélioration mais nous constatons aussi le retour de litiges liés à la
              téléphonie mobile, notamment pour des modifications de contrats non prises en
              compte. »
            </p>
            <cite className="block mt-3 text-[0.95rem] text-sourdine not-italic">
              Josette Abril, présidente de l&apos;UFC
            </cite>
          </blockquote>

          <blockquote className="border-l-[3px] border-ocre pl-6 py-1">
            <p className="font-serif text-[1.3rem] italic leading-snug text-encre">
              « Concernant les achats sur internet, il est très difficile d&apos;obtenir
              réparation. Qui plus est lorsque la société est basée à l&apos;étranger. Celles-là,
              il faut les fuir. La législation française ne s&apos;applique pas et pour se
              défendre, il faudrait aller plaider devant les tribunaux de leurs pays. »
            </p>
            <cite className="block mt-3 text-[0.95rem] text-sourdine not-italic">
              Muguette Turbil, vice-présidente
            </cite>
          </blockquote>

          <h2 className="t-h3 mt-10">
            Les victoires de l&apos;année
          </h2>

          <p>
            Au rayon des satisfactions, Maître Czub, l&apos;avocat de l&apos;association, a
            rappelé les victoires obtenues contre les banques, l&apos;opérateur internet Free et
            la société pétrolière Total pour sa pluie de gazole de l&apos;été 2005.
          </p>

          <blockquote className="border-l-[3px] border-ocre pl-6 py-1">
            <p className="font-serif text-[1.3rem] italic leading-snug text-encre">
              « C&apos;est la première fois que l&apos;UFC dépose — et gagne — une requête en
              matière de droit de l&apos;environnement. Nos statuts le permettent. »
            </p>
            <cite className="block mt-3 text-[0.95rem] text-sourdine not-italic">
              M<sup>e</sup> Czub, avocat de l&apos;UFC-Que Choisir Martigues
            </cite>
          </blockquote>

          <h2 className="t-h3 mt-10">
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
        <div className="mt-12 pt-8 border-t border-trait">
          <span className="text-[0.95rem] text-sourdine">
            Stéphane Rossi — La Provence — 21 avril 2008
          </span>
        </div>
      </div>
    </article>
  );
}
