import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Comme une éolienne sans ailes ! — SOS Conso / Le Monde",
  description:
    "Panneaux photovoltaïques, éoliennes de pignon : les rendements peuvent être surévalués. Chronique SOS Conso parue dans Le Monde, 11 octobre 2013.",
};

export default function ArticleSosConsoPage() {
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
            Le Monde — SOS Conso
          </span>
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-or">
            Octobre 2013
          </span>
          <span className="text-[0.6rem] tracking-[0.2em] uppercase text-or/70">
            Arnaques photovoltaïque
          </span>
        </div>

        {/* Titre */}
        <h1 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-light text-ivoire leading-snug mb-4">
          Comme une éolienne sans ailes&nbsp;!
        </h1>
        <p className="font-sans text-[0.85rem] font-light text-gris-clair italic mb-4">
          Par Raphaële Rivais — Chronique SOS CONSO
        </p>
        <p className="font-sans text-[0.85rem] font-light text-gris-clair italic mb-12">
          Panneaux photovoltaïques, éoliennes de pignon… les rendements peuvent être surévalués
        </p>

        {/* Photo */}
        <div className="mb-12">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <Image
              src="/panneau-solaire.jpg"
              alt="Panneaux solaires photovoltaïques"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        </div>

        {/* Corps de l'article */}
        <div className="font-sans text-[0.9rem] font-light text-gris-clair leading-[1.9] space-y-6">
          <p>
            Si vous habitez une maison individuelle, vous recevez sans doute régulièrement des
            propositions et des sollicitations pour l&apos;installation de panneaux
            photovoltaïques, d&apos;éoliennes de pignon ou des deux combinés. On vous promet de
            revendre votre énergie à EDF, de financer votre installation grâce à un crédit et de
            rentabiliser rapidement l&apos;opération. Hélas, les rendements ne sont pas toujours
            aussi élevés que promis.
          </p>

          <p>
            L&apos;installation peut être mal réalisée, les responsables se retrouvent souvent en
            liquidation judiciaire, et leurs clients se retrouvent en rade&nbsp;: soit les
            rendements ne sont pas au rendez-vous, soit l&apos;installation ne fonctionne pas
            correctement. La même question se pose à propos des éoliennes de pignon, que les
            agents du photovoltaïque se mettent également à vendre.
          </p>

          <h2 className="font-serif text-[1.3rem] font-light text-ivoire mt-10">
            L&apos;affaire Lemichel
          </h2>

          <p>
            C&apos;est le cas de M. et M<sup>me</sup> Lemichel, d&apos;Allauch. Démarchés le
            8 juin 2009 par la société Courant d&apos;énergie solaire photovoltaïque (CESP), ils
            acceptent de faire poser des panneaux sur le toit de leur maison, moyennant un crédit
            associé de 28&nbsp;000&nbsp;euros fourni par la société Solfermo.
          </p>

          <p>
            Entre-temps, la CESP fait faillite et ne peut exécuter le jugement. En 2010, M. et
            M<sup>me</sup> Lemichel assignent Solfermo devant le tribunal, qui annule le contrat.
            L&apos;organisme de crédit fait appel.
          </p>

          <p>
            Mais le 9 juin 2011, la famille signe un nouveau contrat pour une éolienne, cette
            fois avec la société Bali&apos;s, moyennant la somme de 19&nbsp;000&nbsp;euros
            apportés par Franfinance. M. Lemichel constate bientôt que l&apos;éolienne consomme
            plus d&apos;énergie qu&apos;elle n&apos;en produit. Il signe le 4 octobre 2012 un
            procès-verbal de livraison.
          </p>

          <blockquote className="border-l-2 border-or pl-6 py-2">
            <p className="font-serif text-[1rem] italic text-ivoire leading-relaxed">
              « Puisque le contrat principal est sans existence légale, le prêt doit être annulé.
              Un argument de bon sens dont on espère qu&apos;il convaincra les juridictions. »
            </p>
            <cite className="block mt-3 text-[0.65rem] tracking-[0.2em] uppercase text-or not-italic">
              M<sup>e</sup> Bussard, avocat de l&apos;UFC-Que Choisir de Martigues
            </cite>
          </blockquote>

          <p>
            L&apos;avocat soutient que Franfinance a commis une faute en débloquant les fonds sans
            avoir vérifié au préalable que Bali&apos;s avait satisfait à ses obligations. Dès lors,
            le prêt devrait être annulé.
          </p>
        </div>

        {/* Signature */}
        <div className="mt-12 pt-8 border-t border-gris-sombre/40">
          <span className="text-[0.7rem] tracking-[0.15em] uppercase text-gris">
            Raphaële Rivais — Le Monde / SOS Conso — 11 octobre 2013
          </span>
          <div className="mt-2">
            <a
              href="http://sosconsos.blog.lemonde.fr"
              className="text-[0.65rem] tracking-[0.15em] text-or/70 hover:text-or transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              sosconsos.blog.lemonde.fr
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
