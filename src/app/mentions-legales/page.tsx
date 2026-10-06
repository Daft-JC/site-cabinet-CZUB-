import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { pageMetadata, breadcrumbJsonLd, graph } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import EnTete from "@/components/EnTete";

export const metadata = pageMetadata({
  title: "Mentions légales",
  description:
    "Mentions légales du site du Cabinet Maître Joseph Czub, avocat au Barreau d'Aix-en-Provence à Martigues : éditeur, hébergeur, règles professionnelles, médiation.",
  path: "/mentions-legales",
});

const crumbs = [{ name: "Mentions légales", path: "/mentions-legales" }];

function Bloc({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-trait py-10 lg:grid lg:grid-cols-12 lg:gap-10">
      <h2 className="t-h3 lg:col-span-4">{titre}</h2>
      <div className="prose-cabinet mt-4 max-w-texte lg:col-span-8 lg:mt-0">{children}</div>
    </section>
  );
}

export default function MentionsLegalesPage() {
  const c = SITE_CONFIG.contact;
  return (
    <>
      <JsonLd data={graph(breadcrumbJsonLd(crumbs))} />
      <EnTete
        crumbs={crumbs}
        titre="Mentions légales"
        chapeau="Informations prévues par la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique."
      />
      <div className="wrap py-10 md:py-16">
        <Bloc titre="Éditeur du site">
          <ul className="!list-none !pl-0">
            <li>Maître Joseph Czub, avocat (titre obtenu en France)</li>
            <li>{SITE_CONFIG.fullName}</li>
            <li>{c.addressFull}</li>
            <li>Téléphone : <a href={c.phoneHref}>{c.phone}</a></li>
            <li>E-mail : <a href={c.emailHref}>{c.email}</a></li>
            <li>SIRET : {SITE_CONFIG.siret}</li>
            <li>Barreau d&apos;inscription : Barreau d&apos;Aix-en-Provence</li>
            <li>Directeur de la publication : Maître Joseph Czub</li>
          </ul>
        </Bloc>

        <Bloc titre="Hébergement">
          <p>
            Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (vercel.com).
          </p>
        </Bloc>

        <Bloc titre="Règles professionnelles">
          <p>
            Maître Joseph Czub est avocat inscrit au Barreau d&apos;Aix-en-Provence depuis 1994. Il exerce dans le
            respect des règles déontologiques de la profession, notamment le Règlement intérieur national (RIN) de
            la profession d&apos;avocat et le règlement intérieur du Barreau d&apos;Aix-en-Provence, consultables sur
            le site du Conseil national des barreaux (cnb.avocat.fr).
          </p>
          <p>
            Ordre de rattachement : Ordre des avocats du Barreau d&apos;Aix-en-Provence, Palais de justice, place de
            Verdun, 13100 Aix-en-Provence.
          </p>
          <p>
            Maître Czub est couvert par une assurance de responsabilité civile professionnelle, conformément aux
            obligations de la profession.
          </p>
          <p>
            Les honoraires sont fixés librement en accord avec le client et font l&apos;objet d&apos;une convention
            d&apos;honoraires écrite, conformément à l&apos;article 10 de la loi n° 71-1130 du 31 décembre 1971.
          </p>
        </Bloc>

        <Bloc titre="Médiation de la consommation">
          <p>
            En cas de litige avec le cabinet, et après une réclamation écrite restée sans réponse satisfaisante,
            le client consommateur peut saisir gratuitement le Médiateur de la consommation de la profession
            d&apos;avocat : CNB, 180 boulevard Haussmann, 75008 Paris, ou en ligne sur
            {" "}
            <a href="https://mediateur-consommation-avocat.fr" target="_blank" rel="noopener noreferrer">
              mediateur-consommation-avocat.fr
            </a>
            .
          </p>
        </Bloc>

        <Bloc titre="Contenu du site">
          <p>
            Les informations publiées sur ce site sont générales et données à titre informatif. Elles ne
            constituent pas une consultation juridique : toute situation particulière nécessite l&apos;analyse
            d&apos;un avocat. Le site peut contenir des liens vers des sites tiers, sur lesquels le cabinet
            n&apos;exerce aucun contrôle.
          </p>
          <p>
            Les articles de presse reproduits ou cités le sont avec mention de leur source ; ils relatent des
            affaires passées et ne préjugent pas de l&apos;issue d&apos;un autre dossier.
          </p>
        </Bloc>

        <Bloc titre="Propriété intellectuelle">
          <p>
            Les textes, photographies et éléments graphiques de ce site sont protégés par le Code de la propriété
            intellectuelle. Toute reproduction sans autorisation écrite préalable de Maître Joseph Czub est
            interdite (articles L. 335-2 et suivants).
          </p>
        </Bloc>

        <Bloc titre="Données personnelles et cookies">
          <p>
            Le traitement des données transmises par le formulaire de contact est décrit dans la{" "}
            <Link href="/politique-de-confidentialite">politique de confidentialité</Link>. Le site ne dépose aucun
            cookie publicitaire ni de mesure d&apos;audience.
          </p>
        </Bloc>

        <Bloc titre="Droit applicable">
          <p>Les présentes mentions sont régies par le droit français. Dernière mise à jour : octobre 2026.</p>
        </Bloc>
      </div>
    </>
  );
}
