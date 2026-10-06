import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG, SITE_URL } from "@/lib/constants";
import { pageMetadata, breadcrumbJsonLd, graph, PERSON_ID } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import EnTete from "@/components/EnTete";
import BandeauContact from "@/components/BandeauContact";
import portrait from "../../../public/joseph-czub.jpg";
import photoBureau from "../../../public/cabinet-photo.jpg";

export const metadata = pageMetadata({
  title: "Maître Joseph Czub, avocat à Martigues depuis 1994",
  description:
    "Le cabinet de Maître Joseph Czub, avocat au Barreau d'Aix-en-Provence installé à l'Espace Vénitien de Martigues depuis 1994 : parcours, façon de travailler, partenariat avec l'UFC Que Choisir.",
  path: "/cabinet",
});

const crumbs = [{ name: "Maître Czub", path: "/cabinet" }];

const REPERES = [
  { terme: "Depuis 1994", def: "Avocat inscrit au Barreau d'Aix-en-Provence, installé à Martigues, à l'Espace Vénitien." },
  { terme: "Juridictions", def: "Tribunaux judiciaires, cours d'appel et Cour de cassation, partout en France pour certains contentieux." },
  { terme: "UFC Que Choisir", def: "Collaboration de longue date avec l'association de Martigues, notamment dans des actions engagées dans l'intérêt collectif des consommateurs." },
  { terme: "Transmission", def: "En 2025, intervention aux entretiens Nostra Juris de Salon-de-Provence sur les techniques de fraude bancaire, devant une centaine d'avocats." },
];

const METHODE = [
  {
    titre: "Rigueur",
    texte:
      "Une analyse juridique précise et méthodique, appuyée sur le Code de la consommation, le Code monétaire et financier et la jurisprudence la plus récente.",
  },
  {
    titre: "Un dossier documenté",
    texte:
      "Lorsque le litige est technique (installation photovoltaïque, construction, véhicule), le cabinet travaille si besoin avec un réseau d'experts pour établir les faits.",
  },
  {
    titre: "Un seul interlocuteur",
    texte:
      "Maître Czub suit personnellement votre dossier, du premier rendez-vous jusqu'à l'audience, et vous tient informé de chaque étape.",
  },
];

export default function CabinetPage() {
  return (
    <>
      <JsonLd
        data={graph(breadcrumbJsonLd(crumbs), {
          "@type": "AboutPage",
          name: "Maître Joseph Czub",
          url: `${SITE_URL}/cabinet`,
          mainEntity: { "@id": PERSON_ID },
        })}
      />
      <EnTete
        crumbs={crumbs}
        titre="Maître Joseph Czub, avocat à Martigues depuis 1994"
        chapeau="Depuis plus de trente ans, le cabinet défend les consommateurs victimes d'abus, d'arnaques et de manquements professionnels."
      />

      <section aria-labelledby="parcours" className="py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[3px] lg:col-span-5">
            <Image
              src={portrait}
              alt="Maître Joseph Czub à son bureau, devant les classeurs de dossiers du cabinet"
              fill
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-[45%_78%]"
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 id="parcours" className="t-h2">
              Parcours
            </h2>
            <div className="prose-cabinet mt-6 max-w-texte">
              <p>
                Installé à Martigues depuis 1994, à l&apos;Espace Vénitien, Maître Joseph Czub, avocat au Barreau
                d&apos;Aix-en-Provence, consacre l&apos;essentiel de son activité à la défense des consommateurs. En
                plus de trente ans d&apos;exercice, il a obtenu de nombreuses décisions favorables devant les
                tribunaux judiciaires, les cours d&apos;appel et la Cour de cassation.
              </p>
              <p>
                Le cabinet intervient notamment dans les litiges liés aux énergies renouvelables (photovoltaïque,
                pompes à chaleur, ballons thermodynamiques), sur toute la France, pour demander l&apos;annulation
                des contrats et des crédits affectés. Il défend également les victimes de fraudes bancaires, de
                litiges immobiliers, de sinistres d&apos;assurance refusés et d&apos;autres abus.
              </p>
              <p>
                En collaboration avec l&apos;UFC Que Choisir et, si besoin, avec un réseau d&apos;experts
                techniques, Maître Czub construit pour chaque client une défense adaptée à sa situation, pour faire
                appliquer les garanties légales auxquelles tout consommateur a droit.
              </p>
            </div>

            <dl className="mt-12 divide-y divide-trait border-y border-trait">
              {REPERES.map((r) => (
                <div key={r.terme} className="grid gap-1 py-4 sm:grid-cols-3 sm:gap-6">
                  <dt className="font-serif text-[1.15rem]">{r.terme}</dt>
                  <dd className="text-sourdine sm:col-span-2">{r.def}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section aria-labelledby="methode" className="bg-enduit py-16 md:py-24">
        <div className="wrap">
          <h2 id="methode" className="t-h2">
            Façon de travailler
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {METHODE.map((m) => (
              <div key={m.titre}>
                <h3 className="t-h3 onglet">{m.titre}</h3>
                <p className="mt-3 text-[#3E4954]">{m.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="bureau" className="py-16 md:py-24">
        <div className="wrap grid items-end gap-10 lg:grid-cols-12">
          <figure className="lg:col-span-7">
            <div className="relative aspect-[3/2] overflow-hidden rounded-[3px]">
              <Image
                src={photoBureau}
                alt="Le bureau du cabinet, avec vue sur l'étang de Berre"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover object-[50%_68%]"
              />
            </div>
          </figure>
          <div className="lg:col-span-4 lg:col-start-9">
            <h2 id="bureau" className="t-h2">
              Le cabinet
            </h2>
            <p className="mt-4">
              {SITE_CONFIG.contact.street}
              <br />
              {SITE_CONFIG.contact.building}
              <br />
              {SITE_CONFIG.contact.postalCode} Martigues
            </p>
            <Link href="/contact" className="mt-6 inline-block font-medium">
              Plan d&apos;accès et contact
            </Link>
          </div>
        </div>
      </section>

      <BandeauContact />
    </>
  );
}
