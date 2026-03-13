import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionDivider from "@/components/SectionDivider";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site du Cabinet Maître Joseph Czub, avocat à Martigues.",
};

function Article({ numero, titre, children }: { numero: string; titre: string; children: React.ReactNode }) {
  return (
    <RevealOnScroll>
      <div className="border-t border-gris-sombre/50 pt-10 mt-10 first:border-t-0 first:pt-0 first:mt-0">
        <div className="flex items-baseline gap-4 mb-5">
          <span className="font-serif text-[2rem] font-light text-or/30 leading-none">{numero}</span>
          <h2 className="font-serif text-[1.1rem] font-light text-ivoire tracking-wide">{titre}</h2>
        </div>
        <div className="font-sans text-[0.875rem] font-light text-gris-clair leading-[1.95] space-y-3 pl-0 md:pl-14">
          {children}
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        tag="Informations légales"
        title="Mentions"
        highlight="légales"
        subtitle="Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique."
      />

      <SectionDivider />

      <section className="py-24 md:py-36 px-6 md:px-[60px]">
        <div className="max-w-3xl">

          <Article numero="I" titre="Éditeur du site">
            <p>
              Le présent site internet est édité par :
            </p>
            <ul className="space-y-1.5 mt-2">
              <li><span className="text-ivoire/70">Nom :</span> Maître Joseph Czub</li>
              <li><span className="text-ivoire/70">Qualité :</span> Avocat au Barreau d&apos;Aix-en-Provence</li>
              <li><span className="text-ivoire/70">Cabinet :</span> Cabinet Maître Joseph Czub</li>
              <li><span className="text-ivoire/70">Adresse :</span> 1 Boulevard du Président Allende, L&apos;Espace Vénitien, 13500 Martigues</li>
              <li><span className="text-ivoire/70">Téléphone :</span> 04 42 40 36 65</li>
              <li><span className="text-ivoire/70">Email :</span> czubjoseph@hotmail.com</li>
              <li><span className="text-ivoire/70">SIRET :</span> 395 006 984 00045</li>
              <li><span className="text-ivoire/70">Barreau d&apos;inscription :</span> Barreau d&apos;Aix-en-Provence</li>
              <li><span className="text-ivoire/70">N° RPVA :</span> [à compléter]</li>
            </ul>
          </Article>

          <Article numero="II" titre="Hébergement">
            <p>
              Le site est hébergé par :
            </p>
            <ul className="space-y-1.5 mt-2">
              <li><span className="text-ivoire/70">Société :</span> [à compléter — ex : Vercel Inc.]</li>
              <li><span className="text-ivoire/70">Adresse :</span> [à compléter]</li>
              <li><span className="text-ivoire/70">Site web :</span> [à compléter]</li>
            </ul>
          </Article>

          <Article numero="III" titre="Règles professionnelles">
            <p>
              Maître Joseph Czub est avocat inscrit au Barreau d&apos;Aix-en-Provence depuis 1994.
              Il exerce sa profession dans le respect des règles déontologiques de la profession d&apos;avocat,
              notamment celles édictées par le Règlement Intérieur National (RIN) de la profession d&apos;avocat
              et le règlement intérieur du Barreau d&apos;Aix-en-Provence.
            </p>
            <p>
              En sa qualité d&apos;avocat, Maître Joseph Czub est soumis aux règles professionnelles
              françaises et est couvert par une assurance responsabilité civile professionnelle
              souscrite auprès de la Caisse de garantie et d&apos;assurance de la profession d&apos;avocat (CNBF).
            </p>
            <p>
              Ordre professionnel de rattachement : Ordre des avocats du Barreau d&apos;Aix-en-Provence —
              Palais de Justice, Place de Verdun, 13100 Aix-en-Provence.
            </p>
          </Article>

          <Article numero="IV" titre="Propriété intellectuelle">
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, graphismes, logos, icônes, sons, logiciels, etc.)
              constitue une œuvre protégée par les lois françaises et internationales relatives à la propriété
              intellectuelle. Toute reproduction, représentation, modification, publication ou adaptation de tout
              ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans
              l&apos;autorisation écrite préalable de Maître Joseph Czub.
            </p>
            <p>
              Toute exploitation non autorisée du site ou de l&apos;un quelconque des éléments qu&apos;il contient
              est considérée comme constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions
              des articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
            </p>
          </Article>

          <Article numero="V" titre="Responsabilité et contenu du site">
            <p>
              Les informations contenues sur ce site sont données à titre purement informatif et ne sauraient
              constituer un conseil juridique. Toute situation particulière nécessite l&apos;analyse d&apos;un
              professionnel du droit. Maître Joseph Czub ne pourra être tenu responsable de l&apos;utilisation
              des informations contenues sur ce site.
            </p>
            <p>
              Maître Joseph Czub s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations
              diffusées sur ce site, dont il se réserve le droit de modifier le contenu à tout moment et sans
              préavis. Toutefois, il ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité
              des informations mises à disposition sur ce site.
            </p>
            <p>
              Le site peut contenir des liens hypertextes vers d&apos;autres sites internet. Ces liens sont fournis
              à titre informatif uniquement. Maître Joseph Czub n&apos;exerce aucun contrôle sur ces sites tiers
              et ne saurait être tenu responsable de leur contenu.
            </p>
          </Article>

          <Article numero="VI" titre="Protection des données personnelles (RGPD)">
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD) n° 2016/679 du 27 avril 2016
              et à la loi n° 78-17 du 6 janvier 1978 relative à l&apos;informatique, aux fichiers et aux libertés,
              vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul className="space-y-1.5 mt-2 list-disc list-inside">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification des données inexactes</li>
              <li>Droit à l&apos;effacement (droit à l&apos;oubli)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité de vos données</li>
              <li>Droit d&apos;opposition au traitement</li>
            </ul>
            <p className="mt-3">
              Les données collectées via le formulaire de contact (nom, prénom, adresse email, téléphone, message)
              sont utilisées exclusivement pour répondre à votre demande et ne sont transmises à aucun tiers.
              Elles sont conservées le temps nécessaire au traitement de votre demande.
            </p>
            <p>
              Pour exercer vos droits ou pour toute question relative à la protection de vos données personnelles,
              vous pouvez contacter le cabinet par email à l&apos;adresse : czubjoseph@hotmail.com
            </p>
            <p>
              En cas de litige, vous pouvez introduire une réclamation auprès de la Commission Nationale
              de l&apos;Informatique et des Libertés (CNIL) — 3 place de Fontenoy, TSA 80715,
              75334 Paris Cedex 07.
            </p>
          </Article>

          <Article numero="VII" titre="Cookies">
            <p>
              Ce site n&apos;utilise pas de cookies à des fins publicitaires ou de traçage. Des cookies
              techniques strictement nécessaires au fonctionnement du site peuvent être déposés sur votre
              terminal. Ils ne collectent aucune donnée personnelle et ne nécessitent pas votre consentement
              préalable conformément à la réglementation en vigueur.
            </p>
            <p>
              La carte interactive intégrée à la page de contact utilise le service OpenStreetMap.
              En chargeant cette carte, des données techniques (adresse IP, navigateur) peuvent être
              transmises aux serveurs d&apos;OpenStreetMap, soumis à leur propre politique de confidentialité.
            </p>
          </Article>

          <Article numero="VIII" titre="Droit applicable et juridiction compétente">
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige relatif
              à l&apos;interprétation ou à l&apos;exécution des présentes, les tribunaux français seront
              seuls compétents.
            </p>
            <p>
              Dernière mise à jour : mars 2026.
            </p>
          </Article>

        </div>
      </section>
    </>
  );
}
