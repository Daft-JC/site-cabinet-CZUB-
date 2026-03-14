import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "La fin du cauchemar pour les propriétaires du Comédia ? — La Provence",
  description:
    "Après trois ans de procédure, une nouvelle réunion a donné de l'espoir aux acquéreurs des 19 logements du Comédia à Jonquières.",
};

export default function ArticleComediePage() {
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
            La Provence
          </span>
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-or">
            Mars 2011
          </span>
          <span className="text-[0.6rem] tracking-[0.2em] uppercase text-or/70">
            Construction &amp; Immobilier
          </span>
        </div>

        {/* Titre */}
        <h1 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-light text-ivoire leading-snug mb-4">
          La fin du cauchemar pour les propriétaires du Comédia&nbsp;?
        </h1>
        <p className="font-sans text-[0.85rem] font-light text-gris-clair italic mb-12">
          Après trois ans de procédure, une nouvelle réunion, vendredi, leur a donné de l&apos;espoir
        </p>

        {/* Photo */}
        <div className="mb-12">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <Image
              src="/presse-comedie.png"
              alt="L'immeuble du Comédia à Jonquières"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
          <p className="text-[0.7rem] font-light text-gris mt-3 leading-relaxed">
            L&apos;immeuble aurait dû être livré en 2008. En septembre dernier, les travaux n&apos;étaient pas terminés. En mars 2011, toujours pas. / Photo Serge Guéroult
          </p>
        </div>

        {/* Corps de l'article */}
        <div className="font-sans text-[0.9rem] font-light text-gris-clair leading-[1.9] space-y-6">
          <p>
            Acquérir un bien immobilier, c&apos;est le rêve de beaucoup de Français. Mais pour les
            acheteurs des 19 logements du Comédia, à Jonquières, la scène a viré au cauchemar. Et
            le film dure depuis maintenant trois ans. Vendredi, pour la troisième fois, un expert
            judiciaire est venu constater l&apos;avancement des travaux. Enfin, si on peut parler
            d&apos;avancement, puisqu&apos;entre sa dernière venue (notre édition du 23 septembre
            2010) et aujourd&apos;hui, rien ou presque n&apos;a bougé.
          </p>

          <blockquote className="border-l-2 border-or pl-6 py-2">
            <p className="font-serif text-[1rem] italic text-ivoire leading-relaxed">
              « La Société civile immobilière en charge des travaux s&apos;était alors engagée à
              poursuivre le chantier. Mais depuis, rien n&apos;a vraiment avancé. »
            </p>
            <cite className="block mt-3 text-[0.65rem] tracking-[0.2em] uppercase text-or not-italic">
              M<sup>e</sup> Joseph Czub
            </cite>
          </blockquote>

          <p>
            Si, en façade, l&apos;immeuble semble presque normal, à l&apos;intérieur, tout est
            brut. Les acquéreurs ont pu, lors de la dernière visite en septembre, constater des
            malfaçons&nbsp;: baies vitrées qui ne s&apos;ouvrent plus, poteau de béton en plein
            milieu du salon, infiltrations… la liste est longue. Et les travaux ne sont avancés
            qu&apos;à 60&nbsp;%.
          </p>

          <p>
            Jusqu&apos;ici, promoteur et entreprises mandatées pour les travaux se renvoyaient la
            balle. Après avoir payé 80&nbsp;% du prix de l&apos;appartement, certains se sont
            retrouvés dans des positions difficiles. En témoigne cette propriétaire&nbsp;: «&nbsp;Je
            suis en location, puisque nous devions être livrés en mars 2008. J&apos;en connais même
            qui ont pris un studio pour du locatif provisoire. Du provisoire qui dure depuis trois
            ans&nbsp;!&nbsp;»
          </p>

          <h2 className="font-serif text-[1.3rem] font-light text-ivoire mt-10">
            L&apos;espoir
          </h2>

          <p>
            Mais alors qu&apos;ils n&apos;en finissaient plus de désespérer, la douzaine de
            particuliers engagés dans la procédure ont entrevu une lueur d&apos;espoir.
          </p>

          <blockquote className="border-l-2 border-or pl-6 py-2">
            <p className="font-serif text-[1rem] italic text-ivoire leading-relaxed">
              « Le Groupement français de caution, qui assurait le chantier, s&apos;est engagé
              verbalement à reprendre les travaux de façon continue dans un délai d&apos;une semaine
              à quinze jours, et à délivrer une garantie de paiement pour les différents corps de
              métier. Même si la SCI Comédia n&apos;a pas été défaillante en droit, puisqu&apos;elle
              existe toujours, l&apos;assureur a considéré qu&apos;elle l&apos;était dans les
              faits. »
            </p>
            <cite className="block mt-3 text-[0.65rem] tracking-[0.2em] uppercase text-or not-italic">
              M<sup>e</sup> Czub
            </cite>
          </blockquote>

          <p>
            Un premier motif de satisfaction, mais qui attise la vigilance des acquéreurs après tant
            de déceptions. «&nbsp;On veillera à ce qu&apos;il n&apos;y ait pas d&apos;interruption
            du chantier, assure l&apos;un d&apos;entre eux. Parce que des reprises de travaux, il y
            en a eu, mais ça s&apos;arrête souvent au bout d&apos;un mois.&nbsp;»
          </p>

          <p>
            Même vision attentiste chez M<sup>e</sup> Czub&nbsp;: «&nbsp;Ces engagements sont
            prometteurs, mais nous attendons la confirmation officielle.&nbsp;»
          </p>

          <p>
            Pour l&apos;instant, les acheteurs lésés renoncent donc à faire appel aux pouvoirs
            publics, comme le maire, pour faire entendre leur voix, comme ils l&apos;avaient un
            temps imaginé.
          </p>

          <p>
            Reste que de nombreux futurs occupants sont dans une situation économique difficile.
            «&nbsp;On espère qu&apos;on n&apos;aura pas à payer les 20&nbsp;% restants&nbsp;»,
            souffle l&apos;une d&apos;entre eux. La question d&apos;une indemnisation pour le
            préjudice subi sera sans doute une autre bataille à livrer.
          </p>

          <p>
            Mais enfin, après trois ans de frustration, les propriétaires commencent à entrevoir un
            peu de lumière au bout du tunnel.
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
