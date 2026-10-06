import Link from "next/link";
import { SITE_CONFIG, SITE_URL } from "@/lib/constants";
import { pageMetadata, breadcrumbJsonLd, faqJsonLd, graph, ORG_ID } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import EnTete from "@/components/EnTete";
import Faq from "@/components/Faq";
import BandeauContact from "@/components/BandeauContact";

export const metadata = pageMetadata({
  title: "Consulter un avocat en visioconférence, partout en France",
  description:
    "Maître Joseph Czub, avocat au Barreau d'Aix-en-Provence, reçoit aussi en visioconférence ou par téléphone : photovoltaïque, fraudes bancaires, litiges de consommation, partout en France.",
  path: "/consultation-visio",
});

const crumbs = [{ name: "Consultation en visio", path: "/consultation-visio" }];

const ETAPES = [
  {
    titre: "Prendre rendez-vous",
    texte: `Appelez le cabinet au ${SITE_CONFIG.contact.phone} ou écrivez via le formulaire de contact. Indiquez en quelques lignes la nature du litige et votre ville.`,
  },
  {
    titre: "Envoyer les pièces",
    texte:
      "Avant l'entretien, transmettez par courriel les documents utiles : contrats, bons de commande, offres de crédit, relevés, courriers échangés, photos. Ils permettent d'utiliser au mieux le temps du rendez-vous.",
  },
  {
    titre: "L'entretien",
    texte:
      "À l'heure convenue, Maître Czub vous reçoit en visioconférence ou par téléphone. Il examine la situation avec vous, explique les démarches envisageables et le mode de calcul des honoraires.",
  },
  {
    titre: "La suite",
    texte:
      "Si vous décidez de confier le dossier au cabinet, une convention d'honoraires écrite est signée, puis le suivi se fait à distance, par courriel, téléphone ou visio.",
  },
];

const FAQ = [
  {
    q: "Le cabinet intervient-il en dehors de Martigues ?",
    a: "Oui. Maître Czub conseille et assiste des clients partout en France, avec des rendez-vous possibles en visioconférence. Lorsque la procédure impose un avocat inscrit au barreau du tribunal concerné, il travaille avec un confrère local, ce qui est précisé dès le départ.",
  },
  {
    q: "Comment se passe une consultation en visio ?",
    a: `Vous prenez rendez-vous par téléphone au ${SITE_CONFIG.contact.phone} ou via le formulaire du site, puis vous envoyez les pièces du dossier (contrats, courriers, relevés). L'entretien a lieu par visioconférence à l'heure convenue, avec la même confidentialité qu'au cabinet.`,
  },
  {
    q: "Quels documents préparer ?",
    a: "Tout ce qui concerne le litige : contrat ou bon de commande, offre de crédit, factures, relevés bancaires, échanges de courriels ou de courriers, photos. Pour une fraude bancaire, le dépôt de plainte et la contestation adressée à la banque.",
  },
  {
    q: "Combien coûte l'intervention d'un avocat ?",
    a: "Les honoraires dépendent du dossier et sont fixés dans une convention d'honoraires écrite, obligatoire avant toute intervention. Selon vos ressources, l'aide juridictionnelle peut s'appliquer ; votre assurance habitation ou bancaire peut aussi comporter une protection juridique qui prend en charge tout ou partie des frais.",
  },
];

export default function ConsultationVisioPage() {
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbJsonLd(crumbs),
          {
            "@type": "Service",
            name: "Consultation d'avocat en visioconférence",
            url: `${SITE_URL}/consultation-visio`,
            provider: { "@id": ORG_ID },
            areaServed: { "@type": "Country", name: "France" },
            availableChannel: {
              "@type": "ServiceChannel",
              name: "Visioconférence ou téléphone",
              servicePhone: SITE_CONFIG.contact.phoneIntl,
            },
          },
          faqJsonLd(FAQ)
        )}
      />
      <EnTete
        crumbs={crumbs}
        titre="Consulter un avocat en visioconférence, partout en France"
        chapeau="Vous n'habitez pas près de Martigues ? Maître Czub vous reçoit aussi en visioconférence ou par téléphone, avec la même confidentialité qu'au cabinet."
      />

      <section aria-labelledby="pour-qui" className="py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="pour-qui" className="t-h2">
              Pour quels dossiers
            </h2>
          </div>
          <div className="prose-cabinet max-w-texte lg:col-span-6 lg:col-start-7">
            <p>
              La consultation à distance convient particulièrement aux litiges qui se traitent sur pièces, quelle que
              soit votre région : contrats d&apos;installation{" "}
              <Link href="/expertises/photovoltaique-energies-renouvelables">photovoltaïque</Link> et crédits
              affectés, <Link href="/expertises/fraudes-bancaires">fraudes bancaires</Link>, litiges de{" "}
              <Link href="/expertises/droit-de-la-consommation">consommation</Link> ou d&apos;
              <Link href="/expertises/assurances">assurance</Link>.
            </p>
            <p>
              Pour un litige local (construction, bail, véhicule), le cabinet vous reçoit aussi à Martigues, à
              l&apos;Espace Vénitien.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="deroule" className="bg-enduit py-16 md:py-24">
        <div className="wrap">
          <h2 id="deroule" className="t-h2">
            Comment ça se passe
          </h2>
          <ol className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {ETAPES.map((e, i) => (
              <li key={e.titre}>
                <p className="font-serif text-3xl text-ocre">{i + 1}</p>
                <h3 className="t-h3 mt-2">{e.titre}</h3>
                <p className="mt-3 text-[#3E4954]">{e.texte}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="questions" className="py-16 md:py-24">
        <div className="wrap max-w-4xl">
          <h2 id="questions" className="t-h2">
            Questions fréquentes
          </h2>
          <div className="mt-8">
            <Faq items={FAQ} />
          </div>
        </div>
      </section>

      <BandeauContact titre="Prendre rendez-vous en visio" />
    </>
  );
}
