import Image from "next/image";
import Link from "next/link";
import { ARTICLES_PRESSE, SITE_CONFIG } from "@/lib/constants";
import { pageMetadata, breadcrumbJsonLd, graph } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import EnTete from "@/components/EnTete";
import { IconExternal } from "@/components/Icons";

export const metadata = pageMetadata({
  title: "Presse : Maître Joseph Czub dans les médias",
  description:
    "Articles du Monde, de La Provence, de Midi Libre et de mesinfos.fr consacrés à des affaires suivies par Maître Joseph Czub, avocat à Martigues : photovoltaïque, fraudes bancaires, consommation.",
  path: "/presse",
});

const crumbs = [{ name: "Presse", path: "/presse" }];

const date = (d: string) =>
  new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

export default function PressePage() {
  return (
    <>
      <JsonLd data={graph(breadcrumbJsonLd(crumbs))} />
      <EnTete
        crumbs={crumbs}
        titre="Maître Czub dans la presse"
        chapeau="Des affaires suivies par le cabinet, racontées par les journalistes, de 2008 à aujourd'hui. Chaque affaire est particulière : ces articles ne préjugent pas de l'issue d'un autre dossier."
      />

      <div className="wrap py-12 md:py-16">
        <ol className="divide-y divide-trait border-y border-trait">
          {ARTICLES_PRESSE.map((a) => {
            const interne = a.url?.startsWith("/");
            const lien = interne ? (
              <Link href={a.url!} className="text-encre">
                {a.title}
              </Link>
            ) : (
              <a href={a.url} target="_blank" rel="noopener noreferrer" className="text-encre">
                {a.title}
                <IconExternal className="ml-2 inline h-4 w-4 align-baseline text-sourdine" />
                <span className="sr-only"> (nouvel onglet, {a.source})</span>
              </a>
            );
            return (
              <li key={a.id}>
                <article className="grid gap-4 py-8 md:grid-cols-12 md:gap-10">
                  <div className="md:col-span-3">
                    <p className="font-medium">{a.source}</p>
                    <p className="text-[0.95rem] text-sourdine">
                      <time dateTime={a.date}>{date(a.date)}</time>
                    </p>
                  </div>
                  <div className={a.image ? "md:col-span-6" : "md:col-span-9"}>
                    <p className="text-[0.95rem] text-ocre-texte">{a.category}</p>
                    <h2 className="t-h3 mt-1">{lien}</h2>
                    <p className="mt-3 max-w-texte text-sourdine">{a.excerpt}</p>
                  </div>
                  {a.image && (
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[3px] md:col-span-3">
                      <Image
                        src={a.image}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 22vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                </article>
              </li>
            );
          })}
        </ol>

        <section aria-labelledby="journalistes" className="mt-16 max-w-texte">
          <h2 id="journalistes" className="t-h3">
            Vous êtes journaliste ?
          </h2>
          <p className="mt-3 text-sourdine">
            Pour une demande d&apos;interview ou de commentaire, écrivez à{" "}
            <a href={`${SITE_CONFIG.contact.emailHref}?subject=Demande%20presse`}>{SITE_CONFIG.contact.email}</a>.
          </p>
        </section>
      </div>
    </>
  );
}
