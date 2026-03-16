import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Fraudes bancaires : un fléau qui n'épargne pas Salon-de-Provence — mesinfos.fr",
  description:
    "Lors des entretiens Nostra Juris 2025, Maître Joseph Czub a présenté devant une centaine d'avocats les multiples techniques de fraude bancaire et les responsabilités juridiques qui en découlent.",
};

export default function ArticleFraudesBancairesSalonPage() {
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
            mesinfos.fr — Le Régional
          </span>
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-or">
            Fraudes bancaires
          </span>
        </div>

        {/* Titre */}
        <h1 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-light text-ivoire leading-snug mb-4">
          Fraudes bancaires&nbsp;: un fléau qui n&apos;épargne pas Salon-de-Provence
        </h1>
        <p className="font-sans text-[0.85rem] font-light text-gris-clair italic mb-12">
          Lors des entretiens Nostra Juris 2025, une centaine d&apos;avocats du barreau
          d&apos;Aix-en-Provence a évoqué les multiples responsabilités et jurisprudences en matière
          de transactions bancaires frauduleuses.
        </p>

        {/* Corps de l'article */}
        <div className="font-sans text-[0.9rem] font-light text-gris-clair leading-[1.9] space-y-6">
          <p>
            La fraude bancaire est un sujet d&apos;importance dont l&apos;ampleur ne cesse de
            progresser dans la société, puisqu&apos;on estime qu&apos;il y aurait plus
            d&apos;1&nbsp;million de victimes françaises&nbsp;! Un phénomène de société qui
            n&apos;a pas échappé à l&apos;ancienne bâtonnière de l&apos;ordre des avocats au
            barreau d&apos;Aix-en-Provence, Josiane Chaillol, au point d&apos;en faire l&apos;un
            des thèmes des entretiens Nostra Juris organisés par son association éponyme, le
            19&nbsp;juin, à l&apos;Espace Charles Trenet de Salon-de-Provence.
          </p>

          <h2 className="font-serif text-[1.3rem] font-light text-ivoire mt-10">
            Même un expert peut être victime d&apos;une arnaque&nbsp;!
          </h2>

          <blockquote className="border-l-2 border-or pl-6 py-2">
            <p className="font-serif text-[1rem] italic text-ivoire leading-relaxed">
              «&nbsp;Il ne faut plus croire, aujourd&apos;hui, que la fraude bancaire ne
              concernerait que les personnes âgées ou les imprudents&nbsp;!&nbsp;»
            </p>
            <cite className="block mt-3 text-[0.65rem] tracking-[0.2em] uppercase text-or not-italic">
              M<sup>e</sup> Joseph Czub
            </cite>
          </blockquote>

          <p>
            L&apos;orateur, expert juridique des dossiers de fraude bancaire et collaborateur
            régulier des associations UFC&nbsp;Que Choisir de Salon et Martigues, a lancé cette
            mise en garde d&apos;emblée devant une centaine d&apos;avocats des Bouches-du-Rhône.
            «&nbsp;Beaucoup de victimes de fraudes numériques sont, pourtant, des personnes
            compétentes et avisées. Citons parmi elles, l&apos;ex-patron du FMI, Dominique
            Strauss-Kahn, de même que l&apos;ex-ministre chargé du numérique, Jean-Noël
            Barrot…&nbsp;»
          </p>

          <p>
            La diversité des techniques de fraude offre en effet la possibilité de contourner, à
            peu près, toutes les techniques d&apos;authentification modernes&nbsp;:
            spoofing, phishing, quishing, faux RIB, SIM swapping, piratage de bases de données
            centrales ou logiciels malveillants installés sur PC et smartphones.
          </p>

          <h2 className="font-serif text-[1.3rem] font-light text-ivoire mt-10">
            Le SIM hijacking, une arnaque redoutable
          </h2>

          <p>
            Toutes ces attaques informatiques complexes permettent de réaliser des transactions
            frauduleuses, «&nbsp;le plus souvent, en faisant parvenir aux victimes des adresses web
            et QR codes vérolés les invitant à divulguer leurs codes d&apos;authentification.&nbsp;»
            Or, comme ces fausses invitations ont une présentation identique aux vraies, la
            tromperie devient très difficile à détecter — d&apos;autant lorsque l&apos;adresse DNS
            affichée est rendue conforme par l&apos;emploi de mots homographes issus de plusieurs
            alphabets.
          </p>

          <blockquote className="border-l-2 border-or pl-6 py-2">
            <p className="font-serif text-[1rem] italic text-ivoire leading-relaxed">
              «&nbsp;Mais l&apos;une des arnaques les plus redoutables, actuellement, c&apos;est le
              SIM hijacking&nbsp;! Il s&apos;agit d&apos;une copie de votre carte téléphonique
              réalisée par des fraudeurs, à votre insu, afin qu&apos;ils puissent contourner votre
              double authentification bancaire, en recevant, directement, tous vos SMS et codes de
              confirmation&nbsp;!&nbsp;»
            </p>
            <cite className="block mt-3 text-[0.65rem] tracking-[0.2em] uppercase text-or not-italic">
              M<sup>e</sup> Joseph Czub
            </cite>
          </blockquote>

          <p>
            Ce détournement de ligne téléphonique est même facilité par la technologie eSIM de
            transfert sans-fil, vers la mémoire d&apos;un téléphone tiers, d&apos;une copie
            dématérialisée de carte SIM insérée dans un autre téléphone.
          </p>

          <h2 className="font-serif text-[1.3rem] font-light text-ivoire mt-10">
            Nulle authentification n&apos;est fiable à 100&nbsp;%
          </h2>

          <p>
            «&nbsp;En se rendant sur le dark web, des voleurs peuvent, aussi, se procurer de vrais
            numéros de cartes bancaires, auprès de pirates, avec le cryptogramme et les coordonnées
            complètes des propriétaires légitimes.&nbsp;» Ces fraudeurs vont parfois jusqu&apos;à
            contacter leur future victime en affichant le même numéro de téléphone que son
            conseiller bancaire, voire en envoyant un coursier récupérer la carte bancaire à son
            domicile.
          </p>

          <h2 className="font-serif text-[1.3rem] font-light text-ivoire mt-10">
            Et bientôt, la fraude par IA…
          </h2>

          <p>
            «&nbsp;Face à une telle ingénierie malveillante, la jurisprudence tend à faire preuve
            de sévérité dans l&apos;appréciation de la preuve de négligence ou de faute grave
            invoquée par certains établissements bancaires, lorsque ceux-ci tentent d&apos;invalider
            les demandes de remboursement des clients ciblés.&nbsp;» La charge de la preuve revient
            toujours à la banque — et les opérateurs téléphoniques ont également une
            responsabilité.
          </p>

          <blockquote className="border-l-2 border-or pl-6 py-2">
            <p className="font-serif text-[1rem] italic text-ivoire leading-relaxed">
              «&nbsp;Attention toutefois&nbsp;: à compter du débit frauduleux, la victime doit
              absolument engager sa procédure dans les 13&nbsp;mois, sous peine d&apos;être hors
              délai légal&nbsp;! L&apos;éventuelle saisie du médiateur bancaire entraînant, à
              l&apos;inverse, la suspension temporaire du délai de prescription…&nbsp;»
            </p>
            <cite className="block mt-3 text-[0.65rem] tracking-[0.2em] uppercase text-or not-italic">
              M<sup>e</sup> Joseph Czub
            </cite>
          </blockquote>

          <p>
            Une astuce légale qui pourrait s&apos;avérer utile, à l&apos;heure où se multiplient
            les fraudes bancaires, tandis que l&apos;arrivée de l&apos;intelligence artificielle
            octroie aux fraudeurs la faculté inédite d&apos;emprunter le visage et la voix de
            n&apos;importe qui.
          </p>
        </div>

        {/* Signature */}
        <div className="mt-12 pt-8 border-t border-gris-sombre/40">
          <span className="text-[0.7rem] tracking-[0.15em] uppercase text-gris">
            Aurélien Voirin — mesinfos.fr, 7 juillet 2025
          </span>
        </div>
      </div>
    </main>
  );
}
