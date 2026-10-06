import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG, EXPERTISES, ARTICLES_PRESSE, OPTIONS } from "@/lib/constants";
import { EXPERTISES_SEO } from "@/lib/expertises-seo";
import { pageMetadata, faqJsonLd, graph } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import BandeauContact from "@/components/BandeauContact";
import { IconExternal } from "@/components/Icons";
import photoBureau from "../../public/cabinet-photo.jpg";
import portrait from "../../public/joseph-czub.jpg";

export const metadata = pageMetadata({
  title: "Avocat à Martigues : photovoltaïque, fraude bancaire | Maître Czub",
  description:
    "Maître Joseph Czub, avocat à Martigues depuis 1994 (Barreau d'Aix-en-Provence) : arnaques photovoltaïques, fraudes bancaires, consommation, assurances, construction. Tél. 04 42 40 36 65.",
  path: "/",
  absoluteTitle: true,
});

// Source unique : affichée dans la page ET déclarée en données structurées
const FAQ = [
  {
    q: "Maître Czub intervient-il pour les arnaques au photovoltaïque ?",
    a: "Oui. Depuis près de 20 ans, Maître Joseph Czub, avocat à Martigues inscrit au Barreau d'Aix-en-Provence, intervient sur toute la France pour défendre les victimes d'arnaques aux panneaux photovoltaïques, pompes à chaleur et énergies renouvelables, en demandant l'annulation des contrats et des crédits affectés.",
  },
  {
    q: "Ma banque doit-elle me rembourser après une fraude (spoofing, phishing) ?",
    a: "Dans de nombreux cas, oui. Le Code monétaire et financier oblige votre banque à rembourser les sommes frauduleusement débitées, sauf si elle démontre votre négligence grave. Maître Czub a obtenu de nombreuses décisions favorables à des victimes de spoofing, phishing, SIM swapping, quishing et faux RIB.",
  },
  {
    q: "Le cabinet intervient-il uniquement à Martigues ?",
    a: "Non. Basé à Martigues, le cabinet intervient sur toute la France pour les dossiers de droit de la consommation, d'arnaques aux énergies renouvelables et de fraudes bancaires, devant les tribunaux judiciaires, les cours d'appel et la Cour de cassation.",
  },
  {
    q: "Qu'est-ce qu'un crédit affecté dans le cadre d'une arnaque photovoltaïque ?",
    a: "Le crédit affecté est un prêt directement lié à l'achat d'une installation (photovoltaïque, pompe à chaleur…). Si le contrat principal est annulé, le crédit affecté est annulé de plein droit ; et lorsque la banque a commis une faute en débloquant les fonds, elle peut être privée de son droit au remboursement du capital.",
  },
  {
    q: "Comment prendre rendez-vous avec Maître Czub ?",
    a: `Par téléphone au ${SITE_CONFIG.contact.phone}, par e-mail à ${SITE_CONFIG.contact.email} ou via le formulaire de contact du site. Le cabinet est situé ${SITE_CONFIG.contact.addressFull}. Consultations sur rendez-vous, du lundi au vendredi.`,
  },
];

const ETAPES = [
  {
    titre: "Vous prenez contact",
    texte:
      "Par téléphone ou via le formulaire, en décrivant votre situation en quelques lignes. Le cabinet vous rappelle pour fixer un rendez-vous.",
  },
  {
    titre: "Vous rassemblez vos documents",
    texte:
      "Contrat ou bon de commande, offre de crédit, factures, courriers et e-mails échangés, relevés bancaires, photos : tout ce qui retrace l'histoire du litige.",
  },
  {
    titre: "Le rendez-vous au cabinet",
    texte:
      "Maître Czub analyse votre dossier, vous explique les recours possibles et leurs délais, et vous présente ses conditions d'intervention dans une convention d'honoraires.",
  },
  {
    titre: "Amiable d'abord, procès si nécessaire",
    texte:
      "Une solution amiable est recherchée en premier lieu. À défaut, une procédure judiciaire est engagée devant la juridiction compétente.",
  },
];

const NATIONAUX = ["photovoltaique-energies-renouvelables", "fraudes-bancaires"];

export default function HomePage() {
  const [pv, fraude] = NATIONAUX.map((slug) => ({
    exp: EXPERTISES.find((e) => e.slug === slug)!,
    seo: EXPERTISES_SEO[slug],
  }));
  const autres = EXPERTISES.filter((e) => !NATIONAUX.includes(e.slug));
  const presse = ARTICLES_PRESSE.slice(0, 4);
  const c = SITE_CONFIG.contact;

  return (
    <>
      <JsonLd data={graph(faqJsonLd(FAQ))} />

      {/* ── Accueil : le bureau, le nom, le numéro ── */}
      <section className="relative overflow-hidden border-b border-trait">
        <div className="mx-auto grid max-w-page lg:grid-cols-12">
          <div className="px-5 pb-14 pt-10 sm:px-8 lg:col-span-6 lg:px-12 lg:pb-20 lg:pt-20">
            <p className="entree text-sourdine">
              Maître Joseph Czub, avocat au Barreau d&apos;Aix-en-Provence depuis {SITE_CONFIG.founded}
            </p>
            <h1 className="t-display entree entree-2 mt-6 hyphens-manual">
              Avocat à Martigues, aux côtés des consommateurs depuis trente ans
            </h1>
            <p className="t-lead entree entree-3 mt-7 max-w-texte text-sourdine">
              Arnaques au photovoltaïque, fraudes bancaires, assurances, construction, litiges du quotidien : le
              cabinet défend les particuliers face aux professionnels, à Martigues et partout en France.
            </p>

            <div className="entree entree-3 mt-10 border-l-[3px] border-ocre pl-5">
              <p className="text-sourdine">Pour prendre rendez-vous</p>
              <a
                href={c.phoneHref}
                className="mt-1 block font-serif text-[clamp(2.1rem,1.6rem+2vw,3rem)] leading-none text-etang no-underline hover:underline"
              >
                {c.phone}
              </a>
              <p className="mt-2 text-[0.95rem] text-sourdine">{OPTIONS.horairesTexte}</p>
            </div>
            <div className="entree entree-3 mt-8 flex flex-wrap gap-3">
              <Link href="/contact#rendez-vous" className="btn-plein">
                Écrire au cabinet
              </Link>
              <Link href="/expertises" className="btn-trait">
                Voir les domaines d&apos;intervention
              </Link>
            </div>
          </div>

          <figure className="relative lg:col-span-6">
            <div className="photo-entree relative aspect-[4/3] lg:absolute lg:inset-0 lg:aspect-auto">
              <Image
                src={photoBureau}
                alt="Maître Joseph Czub à son bureau, une fenêtre ouverte sur l'étang de Berre"
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[50%_72%]"
              />
            </div>
          </figure>
        </div>
      </section>

      {/* ── Les deux contentieux nationaux ── */}
      <section aria-labelledby="partout-en-france" className="py-20 md:py-28">
        <div className="wrap">
          <h2 id="partout-en-france" className="t-h2 max-w-[22ch]">
            Deux contentieux que le cabinet suit partout en France
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            <article className="rounded-[3px] border border-trait bg-white p-7 sm:p-10 lg:col-span-7">
              <h3 className="t-h3">
                <Link href={`/expertises/${pv.exp.slug}`} className="text-encre">
                  Arnaques au photovoltaïque et aux énergies renouvelables
                </Link>
              </h3>
              <p className="mt-4 text-sourdine">{pv.seo.intro}</p>
              <ul className="mt-6 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {pv.exp.details.slice(0, 6).map((d) => (
                  <li key={d} className="onglet text-[0.95rem]">
                    {d}
                  </li>
                ))}
              </ul>
              <Link href={`/expertises/${pv.exp.slug}`} className="mt-8 inline-block font-medium">
                Vos recours en cas d&apos;arnaque aux panneaux solaires
              </Link>
            </article>

            <article className="rounded-[3px] bg-enduit p-7 sm:p-10 lg:col-span-5 lg:mt-16">
              <h3 className="t-h3">
                <Link href={`/expertises/${fraude.exp.slug}`} className="text-encre">
                  Fraudes bancaires
                </Link>
              </h3>
              <p className="mt-4 text-sourdine">{fraude.seo.intro}</p>
              <p className="mt-6 text-[0.95rem]">
                Spoofing, phishing, quishing, faux RIB, SIM swapping, logiciels malveillants.
              </p>
              <Link href={`/expertises/${fraude.exp.slug}`} className="mt-8 inline-block font-medium">
                Ce que dit la loi sur le remboursement
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ── Index des autres domaines ── */}
      <section aria-labelledby="autres-domaines" className="pb-20 md:pb-28">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="autres-domaines" className="t-h2">
              Et au quotidien
            </h2>
            <p className="mt-4 max-w-sm text-sourdine">
              À Martigues et dans les Bouches-du-Rhône, le cabinet intervient aussi dans ces domaines.
            </p>
          </div>
          <ul className="border-t border-trait lg:col-span-8 sm:grid sm:grid-cols-2 sm:gap-x-10">
            {autres.map((e) => (
              <li key={e.slug} className="border-b border-trait">
                <Link
                  href={`/expertises/${e.slug}`}
                  className="group block py-5 no-underline hover:bg-white/60"
                >
                  <span className="block font-serif text-[1.3rem] text-encre group-hover:text-etang group-hover:underline">
                    {e.title}
                  </span>
                  <span className="mt-1 block text-[0.95rem] text-sourdine">{e.shortDesc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Maître Czub ── */}
      <section aria-labelledby="maitre-czub" className="bg-enduit py-20 md:py-28">
        <div className="wrap grid items-center gap-12 lg:grid-cols-12">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[3px] lg:col-span-5">
            <Image
              src={portrait}
              alt="Portrait de Maître Joseph Czub dans son bureau, devant les classeurs de dossiers"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-[45%_78%]"
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 id="maitre-czub" className="t-h2">
              Un seul interlocuteur, du premier appel à l&apos;audience
            </h2>
            <p className="mt-6 max-w-texte">
              Fondé en 1994 à Martigues, le cabinet de Maître Joseph Czub se consacre à la défense des
              consommateurs. En lien avec l&apos;UFC Que Choisir et, si besoin, avec un réseau d&apos;experts
              techniques, il plaide devant les tribunaux judiciaires, les cours d&apos;appel et la Cour de
              cassation.
            </p>
            <blockquote className="mt-10 border-l-[3px] border-ocre pl-6">
              <p className="font-serif text-[1.45rem] italic leading-snug">
                « Faire respecter vos droits face aux abus de certains professionnels. Faire appliquer les
                garanties légales élémentaires. »
              </p>
              <footer className="mt-3 text-sourdine">Maître Joseph Czub</footer>
            </blockquote>
            <Link href="/cabinet" className="mt-10 inline-block font-medium">
              Le parcours de Maître Czub
            </Link>
          </div>
        </div>
      </section>

      {/* ── Premier rendez-vous (vraie séquence : numérotée) ── */}
      <section aria-labelledby="premier-rdv" className="py-20 md:py-28">
        <div className="wrap">
          <h2 id="premier-rdv" className="t-h2 max-w-[20ch]">
            Comment se passe un premier rendez-vous
          </h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {ETAPES.map((e, i) => (
              <li key={e.titre} className="border-t-2 border-etang pt-5">
                <span className="font-serif text-[2.4rem] leading-none text-ocre-texte">{i + 1}</span>
                <h3 className="mt-3 font-sans text-[1.1rem] font-semibold">{e.titre}</h3>
                <p className="mt-2 text-[0.98rem] text-sourdine">{e.texte}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Presse ── */}
      <section aria-labelledby="presse" className="border-t border-trait py-20 md:py-28">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="presse" className="t-h2">
              Dans la presse
            </h2>
            <p className="mt-4 max-w-sm text-sourdine">
              Le Monde, La Provence, Midi Libre : des affaires suivies par le cabinet, racontées par les journalistes.
            </p>
            <Link href="/presse" className="mt-6 inline-block font-medium">
              Tous les articles
            </Link>
          </div>
          <ul className="divide-y divide-trait border-y border-trait lg:col-span-8">
            {presse.map((a) => {
              const interne = a.url?.startsWith("/");
              return (
                <li key={a.id} className="py-5">
                  <p className="text-[0.9rem] text-sourdine">
                    {a.source}, {new Date(a.date).getFullYear()}
                  </p>
                  <a
                    href={a.url}
                    {...(interne ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                    className="mt-1 inline-flex items-start gap-2 font-serif text-[1.25rem] leading-snug text-encre"
                  >
                    {a.title}
                    {!interne && (
                      <>
                        <IconExternal className="mt-1.5 h-4 w-4 shrink-0 text-sourdine" />
                        <span className="sr-only">(nouvel onglet)</span>
                      </>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section aria-labelledby="questions" className="bg-white py-20 md:py-28">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <h2 id="questions" className="t-h2 lg:col-span-4">
            Questions fréquentes
          </h2>
          <div className="lg:col-span-8">
            <Faq items={FAQ} />
          </div>
        </div>
      </section>

      <BandeauContact />
    </>
  );
}
