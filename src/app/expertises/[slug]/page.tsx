import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_URL, SITE_CONFIG, EXPERTISES, ARTICLES_PRESSE, OPTIONS } from "@/lib/constants";
import { EXPERTISES_SEO } from "@/lib/expertises-seo";
import { pageMetadata, breadcrumbJsonLd, faqJsonLd, graph, ORG_ID } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import EnTete from "@/components/EnTete";
import Faq from "@/components/Faq";
import BandeauContact from "@/components/BandeauContact";
import { IconExternal } from "@/components/Icons";

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
          <div className="rounded-[3px] border border-trait bg-white p-6">
            <p className="font-medium">
              {seo.national ? "Le cabinet intervient partout en France." : "À Martigues et dans les Bouches-du-Rhône."}
            </p>
            <a href={c.phoneHref} className="mt-3 block font-serif text-[1.9rem] leading-tight no-underline hover:underline">
              {c.phone}
            </a>
            <p className="text-[0.95rem] text-sourdine">{OPTIONS.horairesTexte}</p>
            <Link href="/contact#rendez-vous" className="btn-plein mt-5 w-full">
              Prendre rendez-vous
            </Link>
          </div>
        }
      />

      {/* ── Intervention du cabinet ── */}
      <section aria-labelledby="intervention" className="py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 id="intervention" className="t-h2">
              Ce que fait le cabinet
            </h2>
            <div className="prose-cabinet mt-6 max-w-texte">
              {exp.description.split("\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <aside aria-labelledby="situations" className="lg:col-span-4 lg:col-start-9">
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
      <section aria-labelledby="reperes" className="bg-enduit py-16 md:py-24">
        <div className="wrap">
          <h2 id="reperes" className="t-h2 max-w-[24ch]">
            {seo.guideTitle}
          </h2>
          <dl className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {seo.guide.map((g) => (
              <div key={g.title} className="border-t border-encre/20 pt-5">
                <dt className="t-h3">{g.title}</dt>
                <dd className="mt-3 max-w-texte text-[#3E4954]">{g.text}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 max-w-texte text-[0.92rem] text-sourdine">
            Informations générales données à titre indicatif : elles ne remplacent pas l&apos;analyse de votre
            situation par un avocat.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section aria-labelledby="faq" className="py-16 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <h2 id="faq" className="t-h2 lg:col-span-4">
            Questions fréquentes
          </h2>
          <div className="lg:col-span-8">
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
                  className="block rounded-full border border-trait bg-white px-4 py-2 text-[0.95rem] text-encre no-underline hover:border-etang hover:text-etang"
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
