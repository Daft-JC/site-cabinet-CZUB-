import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG, EXPERTISES, ARTICLES_PRESSE, OPTIONS } from "@/lib/constants";
import { EXPERTISES_SEO } from "@/lib/expertises-seo";
import { pageMetadata, faqJsonLd, graph } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import BandeauContact from "@/components/BandeauContact";
import { Fleche, IconCabinet, IconPhone, IconVisio, ICONES_DOMAINES } from "@/components/Icons";
import photoBureau from "../../public/cabinet-photo.jpg";
import portrait from "../../public/joseph-czub.jpg";
import panneaux from "../../public/panneau-solaire.jpg";

export const metadata = pageMetadata({
  title: "Avocat à Martigues : photovoltaïque, fraude bancaire | Maître Czub",
  description:
    "Maître Joseph Czub, avocat à Martigues depuis 1994 (Barreau d'Aix-en-Provence) : arnaques photovoltaïques, fraudes bancaires, consommation, assurances, construction. Au cabinet ou en visio. Tél. 04 42 40 36 65.",
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
    a: "Non. Basé à Martigues, le cabinet intervient sur toute la France pour les dossiers de droit de la consommation, d'arnaques aux énergies renouvelables et de fraudes bancaires, devant les tribunaux judiciaires, les cours d'appel et la Cour de cassation. Les rendez-vous peuvent se tenir en visioconférence.",
  },
  {
    q: "Qu'est-ce qu'un crédit affecté dans le cadre d'une arnaque photovoltaïque ?",
    a: "Le crédit affecté est un prêt directement lié à l'achat d'une installation (photovoltaïque, pompe à chaleur…). Si le contrat principal est annulé, le crédit affecté est annulé de plein droit ; et lorsque la banque a commis une faute en débloquant les fonds, elle peut être privée de son droit au remboursement du capital.",
  },
  {
    q: "Comment prendre rendez-vous avec Maître Czub ?",
    a: `Par téléphone au ${SITE_CONFIG.contact.phone}, par e-mail à ${SITE_CONFIG.contact.email} ou via le formulaire de contact du site. Le cabinet est situé ${SITE_CONFIG.contact.addressFull}. Consultations sur rendez-vous, du lundi au vendredi, au cabinet, par téléphone ou en visioconférence.`,
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
    titre: "Le rendez-vous",
    texte:
      "Maître Czub analyse votre dossier, vous explique les recours possibles et leurs délais, et vous présente ses conditions d'intervention dans une convention d'honoraires.",
  },
  {
    titre: "Amiable d'abord, procès si nécessaire",
    texte:
      "Une solution amiable est recherchée en premier lieu. À défaut, une procédure judiciaire est engagée devant la juridiction compétente.",
  },
];

const REPERES = [
  { titre: "Depuis 1994", texte: "à Martigues, à l'Espace Vénitien" },
  { titre: "Barreau d'Aix-en-Provence", texte: "avocat inscrit, un seul interlocuteur" },
  { titre: "Jusqu'à la Cour de cassation", texte: "tribunaux, cours d'appel, cassation" },
  { titre: "Partout en France", texte: "au cabinet, au téléphone ou en visio" },
];

const MEDIAS = ["Le Monde", "La Provence", "Midi Libre", "mesinfos.fr", "Le Régional", "Le Monde, SOS Conso"];

const NATIONAUX = ["photovoltaique-energies-renouvelables", "fraudes-bancaires"];

const i = (n: number) => ({ ["--i" as string]: n });

export default function HomePage() {
  const [pv, fraude] = NATIONAUX.map((slug) => ({
    exp: EXPERTISES.find((e) => e.slug === slug)!,
    seo: EXPERTISES_SEO[slug],
  }));
  const autres = EXPERTISES.filter((e) => !NATIONAUX.includes(e.slug));
  const c = SITE_CONFIG.contact;
  const [aLaUne, ...avecImages] = [
    ARTICLES_PRESSE[0],
    ...ARTICLES_PRESSE.filter((a) => a.image).slice(0, 3),
  ];

  return (
    <>
      <JsonLd data={graph(faqJsonLd(FAQ))} />

      {/* ══ HERO ══ */}
      <section className="halo grain sur-nuit relative overflow-hidden text-white">
        <ArcsDecor />
        <div className="wrap relative grid items-center gap-12 pb-12 pt-10 md:pt-16 lg:min-h-[min(calc(100svh-11.5rem),46rem)] lg:grid-cols-12 lg:gap-16 lg:pb-16">
          <div className="lg:col-span-7">
            <p className="surtitre apparait" style={i(0)}>
              Maître Joseph Czub, Barreau d&apos;Aix-en-Provence
            </p>
            <h1 className="t-display mt-7 text-white lg:!text-[clamp(3.5rem,2rem+3.4vw,5.25rem)]">
              <span className="ligne"><span style={i(0)}>Avocat à Martigues,</span></span>
              <span className="ligne"><span style={i(1)}>aux côtés des</span></span>
              <span className="ligne"><span style={i(2)}>consommateurs</span></span>
              <span className="ligne"><span style={i(3)}>depuis 1994.</span></span>
            </h1>
            <p className="t-lead apparait mt-8 max-w-[36rem] text-brume" style={i(2)}>
              Arnaques au photovoltaïque, fraudes bancaires, assurances, construction, litiges du quotidien :
              Maître Joseph Czub défend les particuliers face aux professionnels, à Martigues et partout en France.
            </p>
            <div className="apparait mt-10 flex flex-wrap items-center gap-x-8 gap-y-5" style={i(3)}>
              <a
                href={c.phoneHref}
                className="group inline-flex items-center gap-4 text-white no-underline hover:text-white"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ocre-clair text-nuit transition-transform duration-300 group-hover:scale-105">
                  <IconPhone className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-[0.95rem] text-brume">Appeler le cabinet</span>
                  <span className="block font-serif text-[2rem] leading-none tracking-tight">{c.phone}</span>
                </span>
              </a>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact#rendez-vous" className="btn-laiton">
                  Prendre rendez-vous <Fleche />
                </Link>
                {OPTIONS.consultationADistance && (
                  <Link href="/consultation-visio" className="btn-trait-clair">
                    <IconVisio className="h-5 w-5" /> En visio
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            {/* Cadre laiton décalé derrière la photo */}
            <div
              aria-hidden
              className="apparait absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border border-ocre-clair/50"
              style={i(4)}
            />
            <div className="cadre-entree relative aspect-[4/5] overflow-hidden rounded-2xl shadow-haute">
              <Image
                src={photoBureau}
                alt="Maître Joseph Czub à son bureau, une fenêtre ouverte sur l'étang de Berre"
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 1024px) 38vw, 90vw"
                className="travelling object-cover object-[50%_75%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nuit/60 via-transparent to-transparent" />
            </div>
            <div
              className="apparait absolute -bottom-6 -left-4 max-w-[17rem] rounded-xl bg-papier p-5 text-encre shadow-haute sm:-left-10"
              style={i(5)}
            >
              <p className="font-serif text-[1.15rem] leading-snug">L&apos;Espace Vénitien, Martigues</p>
              <p className="mt-1 text-[0.95rem] text-sourdine">{OPTIONS.horairesTexte}</p>
            </div>
          </div>
        </div>

        {/* Repères (faits vérifiables, pas de statistiques inventées) */}
        <div className="relative border-t border-white/10">
          <ul className="wrap grid grid-cols-2 lg:grid-cols-4">
            {REPERES.map((r, n) => (
              <li
                key={r.titre}
                className="apparait border-white/10 py-6 pr-4 [&:nth-child(2n)]:pl-4 max-lg:[&:nth-child(-n+2)]:border-b lg:border-l lg:px-6 lg:first:border-l-0 lg:first:pl-0"
                style={i(5 + n)}
              >
                <p className="font-serif text-[1.15rem] text-white">{r.titre}</p>
                <p className="mt-1 text-[0.92rem] text-brume">{r.texte}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══ Défilé presse ══ */}
      <section aria-label="Médias ayant relayé des affaires du cabinet" className="defile-zone overflow-hidden border-b border-trait bg-enduit py-6">
        <div className="flex items-center gap-10">
          <p className="hidden shrink-0 pl-8 text-[0.95rem] text-sourdine md:block lg:pl-12">Des affaires du cabinet relayées par</p>
          <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
            <div className="defile flex w-max gap-14">
              {[0, 1].map((k) => (
                <ul key={k} aria-hidden={k === 1} className="flex shrink-0 items-center gap-14">
                  {MEDIAS.map((m) => (
                    <li key={m} className="flex items-center gap-14 whitespace-nowrap font-serif text-[1.5rem] italic text-nuit/80">
                      {m}
                      <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-ocre" />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ Domaines ══ */}
      <section aria-labelledby="domaines" className="py-20 md:py-28">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
            <div>
              <p className="surtitre">Domaines d&apos;intervention</p>
              <h2 id="domaines" className="t-h2 mt-5 max-w-[22ch]">
                Faire respecter vos droits face aux professionnels
              </h2>
            </div>
            <Link href="/expertises" className="lien-fleche">
              Les dix domaines <Fleche />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-12">
            {/* Photovoltaïque : grande carte avec photo */}
            <article className="carte group !p-0 lg:col-span-7" data-reveal>
              <div className="relative aspect-[16/8] overflow-hidden">
                <Image
                  src={panneaux}
                  alt=""
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <span className="absolute left-5 top-5 rounded-full bg-nuit/85 px-3.5 py-1 text-[0.9rem] text-white backdrop-blur">
                  Partout en France
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7 sm:p-9">
                <h3 className="t-h3">
                  <Link href={`/expertises/${pv.exp.slug}`} className="text-encre no-underline after:absolute after:inset-0">
                    Arnaques au photovoltaïque et aux énergies renouvelables
                  </Link>
                </h3>
                <p className="mt-4 text-sourdine">{pv.seo.intro}</p>
                <span className="lien-fleche mt-auto pt-6 text-etang">
                  Vos recours <Fleche />
                </span>
              </div>
            </article>

            {/* Fraudes bancaires : carte nuit */}
            <article
              className="carte halo grain group !bg-nuit text-white lg:col-span-5"
              data-reveal
              style={i(1)}
            >
              <CartesDecor />
              <span className="relative w-fit rounded-full border border-white/25 px-3.5 py-1 text-[0.9rem]">
                Partout en France
              </span>
              <h3 className="t-h3 relative mt-8 text-white">
                <Link href={`/expertises/${fraude.exp.slug}`} className="text-white no-underline after:absolute after:inset-0">
                  Fraudes bancaires
                </Link>
              </h3>
              <p className="relative mt-4 text-brume">{fraude.seo.intro}</p>
              <ul className="relative mt-6 flex flex-wrap gap-2">
                {["Spoofing", "Phishing", "Quishing", "Faux RIB", "SIM swapping"].map((t) => (
                  <li key={t} className="rounded-full bg-white/10 px-3 py-1 text-[0.9rem]">
                    {t}
                  </li>
                ))}
              </ul>
              <span className="lien-fleche relative mt-auto pt-8 text-ocre-clair">
                Ce que dit la loi <Fleche />
              </span>
            </article>
          </div>

          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {autres.map((e, n) => {
              const Icone = ICONES_DOMAINES[e.icon];
              return (
                <li key={e.slug} className="carte group" data-reveal style={i(n % 4)}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-enduit text-etang transition-colors duration-500 group-hover:bg-nuit group-hover:text-ocre-clair">
                    <Icone className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-serif text-[1.3rem] leading-snug">
                    <Link href={`/expertises/${e.slug}`} className="text-encre no-underline after:absolute after:inset-0">
                      {e.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-[0.98rem] text-sourdine">{e.shortDesc}</p>
                  <Fleche className="fleche mt-auto h-5 w-5 translate-y-0 pt-5 text-ocre transition-transform duration-300 group-hover:translate-x-1.5" />
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ══ Chiffres réels ══ */}
      <section aria-label="Le cabinet en quelques repères" className="halo grain sur-nuit relative overflow-hidden text-white">
        <div className="wrap grid gap-y-12 py-20 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { v: 1994, s: "", l: "Installation du cabinet à Martigues", compte: false },
            { v: 30, s: "+", l: "Années d'exercice au service des consommateurs", compte: true },
            { v: 10, s: "", l: "Domaines d'intervention", compte: true },
            { v: 3, s: "", l: "Degrés de juridiction : tribunal, cour d'appel, Cour de cassation", compte: true },
          ].map((k, n) => (
            <div key={k.l} className="pr-8" data-reveal style={i(n)}>
              <p
                className="font-serif text-[clamp(3.5rem,2.5rem+3vw,5.5rem)] leading-none text-ocre-clair"
                {...(k.compte ? { "data-count": k.v, "data-suffix": k.s } : {})}
              >
                {k.v}
                {k.s}
              </p>
              <span aria-hidden data-trace className="mt-5 block h-px w-full bg-white/20" style={i(n)} />
              <p className="mt-4 max-w-[16rem] text-brume">{k.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ Maître Czub ══ */}
      <section aria-labelledby="maitre-czub" className="overflow-hidden bg-enduit py-20 md:py-28">
        <div className="wrap grid items-center gap-16 lg:grid-cols-12">
          <div className="relative lg:col-span-5" data-reveal="gauche">
            <div aria-hidden className="absolute -inset-0 -translate-x-4 translate-y-4 rounded-2xl bg-ocre/25" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-haute">
              <Image
                src={portrait}
                alt="Portrait de Maître Joseph Czub dans son bureau, devant les classeurs de dossiers"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[45%_78%]"
              />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7" data-reveal="droite">
            <p className="surtitre">Le cabinet</p>
            <h2 id="maitre-czub" className="t-h2 mt-5">
              Un seul interlocuteur, du premier appel à l&apos;audience
            </h2>
            <p className="mt-6 max-w-texte">
              Fondé en 1994 à Martigues, le cabinet de Maître Joseph Czub se consacre à la défense des
              consommateurs. En lien avec l&apos;UFC Que Choisir et, si besoin, avec un réseau d&apos;experts
              techniques, il plaide devant les tribunaux judiciaires, les cours d&apos;appel et la Cour de
              cassation.
            </p>
            <figure className="relative mt-10 rounded-2xl bg-papier p-8 shadow-carte">
              <span aria-hidden className="absolute -top-7 left-6 font-serif text-[6rem] leading-none text-ocre">
                “
              </span>
              <blockquote className="font-serif text-[1.5rem] italic leading-snug">
                Faire respecter vos droits face aux abus de certains professionnels. Faire appliquer les garanties
                légales élémentaires.
              </blockquote>
              <figcaption className="mt-4 text-sourdine">Maître Joseph Czub</figcaption>
            </figure>
            <Link href="/cabinet" className="btn-plein mt-10">
              Découvrir le cabinet <Fleche />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ Premier rendez-vous ══ */}
      <section aria-labelledby="premier-rdv" className="py-20 md:py-28">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-12" data-reveal>
            <div className="lg:col-span-6">
              <p className="surtitre">Premier rendez-vous</p>
              <h2 id="premier-rdv" className="t-h2 mt-5">
                Comment se passe un premier rendez-vous
              </h2>
            </div>
            {OPTIONS.consultationADistance && (
              <ul className="grid gap-3 self-end sm:grid-cols-3 lg:col-span-6">
                {[
                  { I: IconCabinet, t: "Au cabinet", d: "à Martigues" },
                  { I: IconPhone, t: "Par téléphone", d: "partout en France" },
                  { I: IconVisio, t: "En visio", d: "partout en France" },
                ].map(({ I, t, d }) => (
                  <li key={t} className="flex items-center gap-3 rounded-xl border border-trait bg-white px-4 py-3">
                    <I className="h-6 w-6 shrink-0 text-ocre" />
                    <span>
                      <span className="block font-medium leading-tight">{t}</span>
                      <span className="block text-[0.9rem] text-sourdine">{d}</span>
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <ol className="relative mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <span aria-hidden data-trace className="absolute left-0 right-0 top-7 hidden h-px bg-ocre/50 lg:block" />
            {ETAPES.map((e, n) => (
              <li key={e.titre} className="relative" data-reveal style={i(n)}>
                <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-ocre bg-papier font-serif text-[1.6rem] text-ocre-texte">
                  {n + 1}
                </span>
                <h3 className="mt-6 font-serif text-[1.35rem] leading-snug">{e.titre}</h3>
                <p className="mt-3 text-sourdine">{e.texte}</p>
              </li>
            ))}
          </ol>
          {OPTIONS.consultationADistance && (
            <Link href="/consultation-visio" className="lien-fleche mt-12" data-reveal>
              Comment se passe une consultation en visio <Fleche />
            </Link>
          )}
        </div>
      </section>

      {/* ══ Presse ══ */}
      <section aria-labelledby="presse" className="border-t border-trait bg-white py-20 md:py-28">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
            <div>
              <p className="surtitre">Presse</p>
              <h2 id="presse" className="t-h2 mt-5">
                Le cabinet dans la presse
              </h2>
            </div>
            <Link href="/presse" className="lien-fleche">
              Tous les articles <Fleche />
            </Link>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-12">
            <article className="carte halo grain !bg-nuit text-white lg:col-span-4" data-reveal>
              <p className="text-[0.95rem] text-ocre-clair">
                {aLaUne.source}, {new Date(aLaUne.date).getFullYear()}
              </p>
              <h3 className="t-h3 mt-4 text-white">
                <a
                  href={aLaUne.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white no-underline after:absolute after:inset-0"
                >
                  {aLaUne.title}
                  <span className="sr-only"> (nouvel onglet)</span>
                </a>
              </h3>
              <p className="mt-4 text-brume">{aLaUne.excerpt}</p>
            </article>
            <div className="grid gap-6 sm:grid-cols-3 lg:col-span-8">
              {avecImages.map((a, n) => (
                <article key={a.id} className="carte group !p-0" data-reveal style={i(n + 1)}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-enduit">
                    <Image
                      src={a.image!}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 20vw, (min-width: 640px) 30vw, 100vw"
                      className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[0.9rem] text-ocre-texte">
                      {a.source.split(" — ")[0]}, {new Date(a.date).getFullYear()}
                    </p>
                    <h3 className="mt-2 font-serif text-[1.15rem] leading-snug">
                      <Link href={a.url!} className="text-encre no-underline after:absolute after:inset-0">
                        {a.title}
                      </Link>
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section aria-labelledby="questions" className="bg-enduit py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <p className="surtitre">Questions fréquentes</p>
            <h2 id="questions" className="t-h2 mt-5">
              Vos questions, avant de nous appeler
            </h2>
            <p className="mt-5 text-sourdine">
              Une autre question ? Appelez le{" "}
              <a href={c.phoneHref} className="font-medium">
                {c.phone}
              </a>
              .
            </p>
          </div>
          <div className="lg:col-span-8" data-reveal style={i(1)}>
            <Faq items={FAQ} />
          </div>
        </div>
      </section>

      <BandeauContact />
    </>
  );
}

// Arcs des ponts de Martigues, en filigrane derrière le hero
function ArcsDecor() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 800 400"
      className="pointer-events-none absolute -left-40 bottom-24 w-[60rem] max-w-none text-ocre-clair opacity-[0.08]"
    >
      {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => (
        <path
          key={n}
          d={`M${40 + n * 34} 400 A ${360 - n * 34} ${330 - n * 34} 0 0 1 ${760 - n * 34} 400`}
          fill="none"
          stroke="currentColor"
        />
      ))}
    </svg>
  );
}

// Cartes bancaires stylisées, en filigrane
function CartesDecor() {
  return (
    <svg aria-hidden viewBox="0 0 200 140" className="pointer-events-none absolute -right-10 -top-6 w-64 text-ocre-clair opacity-20">
      <rect x="40" y="10" width="140" height="88" rx="10" fill="none" stroke="currentColor" transform="rotate(12 110 54)" />
      <rect x="20" y="30" width="140" height="88" rx="10" fill="none" stroke="currentColor" transform="rotate(-4 90 74)" />
      <path d="M20 58h140" stroke="currentColor" transform="rotate(-4 90 74)" />
      <rect x="34" y="78" width="26" height="18" rx="3" fill="none" stroke="currentColor" transform="rotate(-4 90 74)" />
    </svg>
  );
}
