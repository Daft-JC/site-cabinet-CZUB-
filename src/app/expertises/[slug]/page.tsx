import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_URL, SITE_CONFIG, EXPERTISES, ARTICLES_PRESSE, OPTIONS } from "@/lib/constants";
import { EXPERTISES_SEO } from "@/lib/expertises-seo";
import { pageMetadata, breadcrumbJsonLd, faqJsonLd, graph, ORG_ID } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import EnTete from "@/components/EnTete";
import Faq from "@/components/Faq";
import BandeauContact from "@/components/BandeauContact";
import { Fleche, IconExternal } from "@/components/Icons";

type Props = { params: { slug: string } };

function getExpertise(slug: string) {
  const exp = EXPERTISES.find((e) => e.slug === slug);
  const seo = EXPERTISES_SEO[slug];
  return exp && seo ? { exp, seo } : null;
}

export function generateStaticParams() {
  return EXPERTISES.map((e) => ({ slug: e.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: Props) {
  const data = getExpertise(params.slug);
  if (!data) return {};
  return pageMetadata({
    title: data.seo.metaTitle,
    description: data.seo.metaDescription,
    path: `/expertises/${params.slug}`,
  });
}

export default function ExpertisePage({ params }: Props) {
  const data = getExpertise(params.slug);
  if (!data) notFound();
  const { exp, seo } = data;
  const url = `${SITE_URL}/expertises/${exp.slug}`;
  const press = ARTICLES_PRESSE.filter((a) => seo.press?.includes(a.id));
  const others = EXPERTISES.filter((e) => e.slug !== exp.slug);
  const crumbs = [
    { name: "Domaines d'intervention", path: "/expertises" },
    { name: exp.title, path: `/expertises/${exp.slug}` },
  ];
  const c = SITE_CONFIG.contact;

  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "Service",
            "@id": `${url}#service`,
            name: exp.title,
            serviceType: exp.title,
            description: seo.metaDescription,
            url,
            provider: { "@id": ORG_ID },
            areaServed: seo.national
              ? { "@type": "Country", name: "France" }
              : [
                  { "@type": "City", name: "Martigues" },
                  { "@type": "AdministrativeArea", name: "Bouches-du-Rhône" },
                ],
          },
          breadcrumbJsonLd(crumbs),
          faqJsonLd(seo.faq)
        )}
      />

      <EnTete
        crumbs={crumbs}
        titre={`${seo.h1} ${seo.h1Highlight}`}
        chapeau={seo.intro}
        aside={
          <div className="rounded-2xl bg-papier p-7 shadow-haute">
            <p className="font-medium">
              {seo.national ? "Le cabinet intervient partout en France." : "À Martigues et dans les Bouches-du-Rhône."}
            </p>
            <a href={c.phoneHref} className="mt-3 block font-serif text-[2rem] leading-tight text-etang no-underline hover:underline">
              {c.phone}
            </a>
            <p className="text-[0.95rem] text-sourdine">{OPTIONS.horairesTexte}</p>
            <Link href="/contact#rendez-vous" className="btn-plein mt-5 w-full">
              Prendre rendez-vous <Fleche />
            </Link>
            {OPTIONS.consultationADistance && (
              <Link href="/consultation-visio" className="lien-fleche mt-4 text-etang">
                Ou consulter en visio <Fleche />
              </Link>
            )}
          </div>
        }
      />

      {/* ── Intervention du cabinet ── */}
      <section aria-labelledby="intervention" className="py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7" data-reveal>
            <p className="surtitre">Le cabinet</p>
            <h2 id="intervention" className="t-h2 mt-5">
              Ce que fait le cabinet
            </h2>
            <div className="prose-cabinet mt-6 max-w-texte">
              {exp.description.split("\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <aside
            aria-labelledby="situations"
            className="h-fit rounded-2xl bg-white p-7 shadow-carte lg:sticky lg:top-28 lg:col-span-5 lg:col-start-8 xl:col-span-4 xl:col-start-9"
            data-reveal="droite"
          >
            <h3 id="situations" className="t-h3">
              Situations traitées
            </h3>
            <ul className="mt-5 space-y-3">
              {exp.details.map((d) => (
                <li key={d} className="onglet text-[0.98rem]">
                  {d}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* ── Repères juridiques ── */}
      <section aria-labelledby="reperes" className="halo grain sur-nuit relative overflow-hidden py-16 text-white md:py-24">
        <div className="wrap">
          <div data-reveal>
            <p className="surtitre">Repères juridiques</p>
            <h2 id="reperes" className="t-h2 mt-5 max-w-[24ch] text-white">
              {seo.guideTitle}
            </h2>
          </div>
          <dl className="mt-12 grid gap-6 md:grid-cols-2">
            {seo.guide.map((g, n) => (
              <div
                key={g.title}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur-sm transition-colors duration-500 hover:border-ocre-clair/40 hover:bg-white/[0.08]"
                data-reveal
                style={{ ["--i" as string]: n % 2 }}
              >
                <dt className="t-h3 text-white">{g.title}</dt>
                <dd className="mt-3 max-w-texte text-brume">{g.text}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 max-w-texte text-[0.92rem] text-brume">
            Informations générales données à titre indicatif : elles ne remplacent pas l&apos;analyse de votre
            situation par un avocat.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section aria-labelledby="faq" className="py-16 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <p className="surtitre">FAQ</p>
            <h2 id="faq" className="t-h2 mt-5">
              Questions fréquentes
            </h2>
          </div>
          <div className="lg:col-span-8" data-reveal>
            <Faq items={seo.faq} />
          </div>
        </div>
      </section>

      {press.length > 0 && (
        <section aria-labelledby="presse-liee" className="border-t border-trait py-16 md:py-20">
          <div className="wrap grid gap-10 lg:grid-cols-12">
            <h2 id="presse-liee" className="t-h2 lg:col-span-4">
              Dans la presse
            </h2>
            <ul className="divide-y divide-trait border-y border-trait lg:col-span-8">
              {press.map((a) => {
                const interne = a.url?.startsWith("/");
                return (
                  <li key={a.id} className="py-5">
                    <p className="text-[0.9rem] text-sourdine">
                      {a.source}, {new Date(a.date).getFullYear()}
                    </p>
                    <a
                      href={a.url}
                      {...(interne ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                      className="mt-1 inline-flex items-start gap-2 font-serif text-[1.2rem] leading-snug text-encre"
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
      )}

      <BandeauContact titre="Parlons de votre dossier" />

      {/* ── Maillage interne ── */}
      <nav aria-labelledby="autres" className="py-14">
        <div className="wrap">
          <h2 id="autres" className="t-h3">
            Autres domaines d&apos;intervention
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/expertises/${o.slug}`}
                  className="block rounded-full border border-trait bg-white px-4 py-2 text-[0.95rem] text-encre no-underline transition-colors duration-300 hover:border-nuit hover:bg-nuit hover:text-white"
                >
                  {o.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
