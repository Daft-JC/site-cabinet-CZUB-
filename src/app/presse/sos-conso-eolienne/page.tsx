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
            Si vous habitez une maison individuelle, vous avez sûrement été démarché par une
            société proposant des panneaux photovoltaïques ou des éoliennes de pignon&nbsp;: dans
            le premier cas, le commercial vous a dit que l&apos;orientation de votre toit est
            optimale et que vous allez produire de l&apos;électricité à plein rendement. Vous
            financerez vos panneaux en vendant votre énergie à EDF&nbsp;; dans le second cas,
            votre éolienne tournera comme un moulin à vent et vous rendra autosuffisant. Pour
            démarrer, vous bénéficierez du prêt d&apos;un organisme de crédit associé.
          </p>

          <p>
            Hélas, les résultats ne suivent pas toujours. Soit les rendements ont été surévalués,
            soit l&apos;installation a été mal réalisée. Les entreprises responsables se
            retrouvent souvent en liquidation judiciaire, tandis que leurs clients doivent
            rembourser les crédits associés. Beaucoup font appel à la justice, sans obtenir gain
            de cause.
          </p>

          <h2 className="font-serif text-[1.3rem] font-light text-ivoire mt-10">
            L&apos;affaire Lemichel
          </h2>

          <p>
            C&apos;est le cas de M. et M<sup>me</sup> Lemichel, dans le Vaucluse. Démarchés le
            8 juin 2009 par la société Couverture et énergie solaire photovoltaïque (CESP), ils
            acceptent de mettre des panneaux sur le toit de leur maison, moyennant un crédit
            associé de 28&nbsp;500&nbsp;euros, fourni par la société Sofemo. Dès le 10 juin, sans
            attendre ni le délai de rétractation de sept jours ni l&apos;autorisation de la
            mairie, les techniciens de la CESP viennent livrer les panneaux photovoltaïques. Ils
            font pression pour que le couple Lemichel signe un «&nbsp;bon de
            livraison&nbsp;», qui constitue en fait un ordre de libération des fonds par
            l&apos;organisme de crédit. Sofemo transfère aussitôt 28&nbsp;500&nbsp;euros sur le
            compte de la CESP.
          </p>

          <p>
            Or, «&nbsp;livraison&nbsp;» ne signifie pas «&nbsp;fonctionnement&nbsp;»&nbsp;: les
            panneaux ont été posés sur la toiture, mais non raccordés à l&apos;onduleur qui doit
            les faire fonctionner. Mais la CESP, qui a touché son pactole, ne se préoccupe plus
            du chantier.
          </p>

          <p>
            En mars 2010, M. et M<sup>me</sup> Lemichel assignent la CESP et Sofemo devant le
            tribunal de grande instance d&apos;Avignon. En 2011, le tribunal annule le contrat
            qu&apos;ils ont signé avec la CESP, pour vices de forme. Il annule aussi le contrat
            de financement associé, comme l&apos;impose le code de la consommation. Tout va bien
            pour les Lemichel, puisque l&apos;installateur des panneaux est condamné à rembourser
            Sofemo et à remettre leur toiture en l&apos;état.
          </p>

          <p>
            Mais, entre-temps, la CESP a fait faillite et ne peut exécuter le jugement. Quant à
            l&apos;organisme de crédit, il fait appel. Il accuse les Lemichel d&apos;avoir commis
            une faute en signant le bon de livraison, alors que leur installation ne fonctionnait
            pas. Il les juge responsables du déblocage prématuré des fonds, et demande
            qu&apos;ils les remboursent&nbsp;! C&apos;est en vain que l&apos;avocate des
            Lemichel, M<sup>e</sup> Élisabeth Hanocq, met en cause la responsabilité du
            prêteur&nbsp;: il n&apos;aurait pas dû verser les fonds sans avoir vérifié au
            préalable que l&apos;installation était effective. La cour d&apos;appel de Nîmes
            ordonne aux époux de rembourser les 28&nbsp;500&nbsp;euros, à la place de la CESP.
          </p>

          <h2 className="font-serif text-[1.3rem] font-light text-ivoire mt-10">
            Liquidation judiciaire
          </h2>

          <blockquote className="border-l-2 border-or pl-6 py-2">
            <p className="font-serif text-[1rem] italic text-ivoire leading-relaxed">
              « Il faut que la plus haute juridiction tranche ce point de droit. En effet,
              certaines cours considèrent que le prêteur ne commet pas de faute en libérant des
              fonds sur ordre du client&nbsp;; d&apos;autres, au contraire, estiment
              qu&apos;il devrait procéder à une vérification, surtout quand, à la date de
              signature du bon, l&apos;installation ne peut, matériellement, avoir été raccordée,
              les branchements pouvant prendre des semaines. »
            </p>
            <cite className="block mt-3 text-[0.65rem] tracking-[0.2em] uppercase text-or not-italic">
              M<sup>e</sup> Hanocq, avocate des Lemichel
            </cite>
          </blockquote>

          <p>
            La même question se pose à propos des éoliennes de pignon, dont les aigrefins du
            photovoltaïque semblent avoir fait leur nouveau commerce. Jean-François L., démarché
            par la société Prom service distribution (PSD13), a accepté d&apos;en poser une sur
            le mur de sa maison, elle aussi dans le Vaucluse, moyennant la somme de
            14&nbsp;000&nbsp;euros, apportés par Franfinance. Le 9 juin 2012, l&apos;éolienne
            tourne. M. L. signe donc le «&nbsp;bon de livraison&nbsp;».
          </p>

          <p>
            Mais «&nbsp;tourner&nbsp;» ne signifie pas produire le rendement annoncé. M. L.
            constate bientôt que l&apos;éolienne consomme plus d&apos;énergie
            qu&apos;elle n&apos;en fournit.
          </p>

          <blockquote className="border-l-2 border-or pl-6 py-2">
            <p className="font-serif text-[1rem] italic text-ivoire leading-relaxed">
              « Normal&nbsp;! Les éoliennes de pignon ont un rendement limité, en raison de leur
              faible altitude ainsi que des turbulences générées par l&apos;habitat auquel elles
              sont rattachées. »
            </p>
            <cite className="block mt-3 text-[0.65rem] tracking-[0.2em] uppercase text-or not-italic">
              Jean-Pierre Brissaud, expert indépendant en énergies renouvelables
            </cite>
          </blockquote>

          <p>
            Au lieu de lui économiser de 600 à 800&nbsp;euros par an, comme promis par PSD13,
            l&apos;éolienne de M. L. devrait lui en faire perdre 350. Fin janvier, PSD13 est
            placée en liquidation judiciaire, et M. L. doit rembourser Franfinance.
          </p>

          <p>
            Un point de vue que ne partagent ni M. Brissaud ni M<sup>e</sup> Joseph Czub, conseil
            de l&apos;UFC-Que Choisir Martigues. «&nbsp;Il faut attaquer conjointement le
            mandataire liquidateur de PSD13 et Franfinance, pour annuler le contrat et le crédit
            associé&nbsp;», estiment-ils.
          </p>

          <blockquote className="border-l-2 border-or pl-6 py-2">
            <p className="font-serif text-[1rem] italic text-ivoire leading-relaxed">
              « Puisqu&apos;elle a financé un objet sans existence légale, son prêt doit être
              annulé. »
            </p>
            <cite className="block mt-3 text-[0.65rem] tracking-[0.2em] uppercase text-or not-italic">
              M. Brissaud, expert en énergies renouvelables
            </cite>
          </blockquote>

          <p>
            M. Brissaud juge que Franfinance a commis une faute en débloquant l&apos;argent sans
            avoir vérifié au préalable que PSD13 avait bien fait une déclaration de travaux en
            mairie ainsi qu&apos;une demande de raccordement à ERDF. Cela n&apos;a pas été le
            cas, bien que ces démarches soient obligatoires. Un argument de bon sens, dont on
            espère qu&apos;il convaincra les juridictions.
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
