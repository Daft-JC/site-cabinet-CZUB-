import { SITE_CONFIG } from "@/lib/constants";
import { pageMetadata, breadcrumbJsonLd, graph } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import EnTete from "@/components/EnTete";

export const metadata = pageMetadata({
  title: "Politique de confidentialité (RGPD)",
  description:
    "Comment le Cabinet Maître Joseph Czub traite les données transmises par le formulaire de contact : finalité, base légale, durée de conservation, destinataires, vos droits.",
  path: "/politique-de-confidentialite",
});

const crumbs = [{ name: "Politique de confidentialité", path: "/politique-de-confidentialite" }];

function Bloc({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-trait py-10 lg:grid lg:grid-cols-12 lg:gap-10">
      <h2 className="t-h3 lg:col-span-4">{titre}</h2>
      <div className="prose-cabinet mt-4 max-w-texte lg:col-span-8 lg:mt-0">{children}</div>
    </section>
  );
}

export default function ConfidentialitePage() {
  const c = SITE_CONFIG.contact;
  return (
    <>
      <JsonLd data={graph(breadcrumbJsonLd(crumbs))} />
      <EnTete
        crumbs={crumbs}
        titre="Politique de confidentialité"
        chapeau="Ce site collecte le moins de données possible : uniquement ce que vous saisissez dans le formulaire de contact, pour vous répondre."
      />
      <div className="wrap py-10 md:py-16">
        <Bloc titre="Responsable du traitement">
          <p>
            Maître Joseph Czub, {SITE_CONFIG.fullName}, {c.addressFull}. Contact :{" "}
            <a href={c.emailHref}>{c.email}</a>.
          </p>
        </Bloc>

        <Bloc titre="Données collectées et finalité">
          <p>
            Le formulaire de contact recueille vos nom, prénom, adresse e-mail, téléphone (facultatif), le domaine
            concerné et votre message. Ces données servent uniquement à répondre à votre demande et à organiser un
            éventuel rendez-vous. Elles ne sont ni revendues, ni utilisées à des fins commerciales.
          </p>
          <p>
            Ne transmettez pas, à ce stade, d&apos;informations sensibles (santé, infractions…) au-delà de ce qui est
            nécessaire pour décrire votre situation.
          </p>
        </Bloc>

        <Bloc titre="Base légale">
          <p>
            Votre consentement, exprimé en cochant la case prévue à cet effet, et les mesures précontractuelles
            prises à votre demande (article 6.1 a et b du RGPD).
          </p>
        </Bloc>

        <Bloc titre="Durée de conservation">
          <p>
            Si votre demande n&apos;aboutit pas à l&apos;ouverture d&apos;un dossier, les données sont supprimées au
            plus tard 3 ans après le dernier contact. Si un dossier est ouvert, elles sont conservées selon les
            règles applicables aux dossiers d&apos;avocat.
          </p>
        </Bloc>

        <Bloc titre="Destinataires et sous-traitants">
          <p>
            Seul le cabinet a accès à vos données, qui sont couvertes par le secret professionnel. Elles transitent
            par deux prestataires techniques : Vercel Inc. (hébergement du site) et Resend (acheminement de
            l&apos;e-mail généré par le formulaire), situés aux États-Unis et encadrés par le Data Privacy Framework
            UE–États-Unis et les clauses contractuelles types de la Commission européenne.
          </p>
        </Bloc>

        <Bloc titre="Cookies et services tiers">
          <p>
            Le site ne dépose aucun cookie publicitaire ni de mesure d&apos;audience. Les polices de caractères sont
            hébergées sur le site lui-même. La carte OpenStreetMap de la page contact ne se charge que si vous
            cliquez sur « Afficher la carte » : votre adresse IP est alors transmise à la Fondation OpenStreetMap.
          </p>
        </Bloc>

        <Bloc titre="Vos droits">
          <p>
            Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation,
            d&apos;opposition et de portabilité, ainsi que du droit de retirer votre consentement à tout moment.
            Écrivez à <a href={c.emailHref}>{c.email}</a> ou au cabinet.
          </p>
          <p>
            Vous pouvez introduire une réclamation auprès de la CNIL, 3 place de Fontenoy, TSA 80715, 75334 Paris
            Cedex 07 (cnil.fr).
          </p>
          <p>Dernière mise à jour : octobre 2026.</p>
        </Bloc>
      </div>
    </>
  );
}
