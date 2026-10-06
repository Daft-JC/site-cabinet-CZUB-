import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IconRetour } from "@/components/Icons";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.cabinet-czub.fr/presse/sos-conso-eolienne" },
  title: "Comme une éolienne sans ailes ! — SOS Conso / Le Monde",
  description:
    "Panneaux photovoltaïques, éoliennes de pignon : les rendements peuvent être surévalués. Chronique SOS Conso parue dans Le Monde, 11 octobre 2013.",
};

export default function ArticleSosConsoPage() {
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
            Le Monde — SOS Conso
          </span>
          <span className="text-[0.95rem] text-ocre-texte">
            Octobre 2013
          </span>
          <span className="text-[0.95rem] text-sourdine">
            Arnaques photovoltaïque
          </span>
        </div>

        {/* Titre */}
        <h1 className="t-h2 mb-4">
          Comme une éolienne sans ailes&nbsp;!
        </h1>
        <p className="t-lead italic text-sourdine mb-4">
          Par Raphaële Rivais — Chronique SOS CONSO
        </p>
        <p className="t-lead italic text-sourdine mb-12">
          Panneaux photovoltaïques, éoliennes de pignon… les rendements peuvent être surévalués
        </p>

        {/* Photo */}
        <div className="mb-12">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-carte" style={{ aspectRatio: "16/9" }}>
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
        <div className="text-[1.0625rem] leading-[1.75] space-y-6">
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

          <h2 className="t-h3 mt-10">
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

          <h2 className="t-h3 mt-10">
            Liquidation judiciaire
          </h2>

          <blockquote className="border-l-[3px] border-ocre pl-6 py-1">
            <p className="font-serif text-[1.3rem] italic leading-snug text-encre">
              « Il faut que la plus haute juridiction tranche ce point de droit. En effet,
              certaines cours considèrent que le prêteur ne commet pas de faute en libérant des
              fonds sur ordre du client&nbsp;; d&apos;autres, au contraire, estiment
              qu&apos;il devrait procéder à une vérification, surtout quand, à la date de
              signature du bon, l&apos;installation ne peut, matériellement, avoir été raccordée,
              les branchements pouvant prendre des semaines. »
            </p>
            <cite className="block mt-3 text-[0.95rem] text-sourdine not-italic">
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

          <blockquote className="border-l-[3px] border-ocre pl-6 py-1">
            <p className="font-serif text-[1.3rem] italic leading-snug text-encre">
              « Normal&nbsp;! Les éoliennes de pignon ont un rendement limité, en raison de leur
              faible altitude ainsi que des turbulences générées par l&apos;habitat auquel elles
              sont rattachées. »
            </p>
            <cite className="block mt-3 text-[0.95rem] text-sourdine not-italic">
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

          <blockquote className="border-l-[3px] border-ocre pl-6 py-1">
            <p className="font-serif text-[1.3rem] italic leading-snug text-encre">
              « Puisqu&apos;elle a financé un objet sans existence légale, son prêt doit être
              annulé. »
            </p>
            <cite className="block mt-3 text-[0.95rem] text-sourdine not-italic">
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
        <div className="mt-12 pt-8 border-t border-trait">
          <span className="text-[0.95rem] text-sourdine">
            Raphaële Rivais — Le Monde / SOS Conso — 11 octobre 2013
          </span>
          <div className="mt-2">
            <a
              href="http://sosconsos.blog.lemonde.fr"
              className="text-[0.95rem]"
              target="_blank"
              rel="noopener noreferrer"
            >
              sosconsos.blog.lemonde.fr
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
