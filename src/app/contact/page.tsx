import Link from "next/link";
import { SITE_CONFIG, OPTIONS } from "@/lib/constants";
import { pageMetadata, breadcrumbJsonLd, graph } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import EnTete from "@/components/EnTete";
import CarteAcces from "@/components/CarteAcces";
import { IconExternal } from "@/components/Icons";
import ContactForm from "./ContactForm";

export const metadata = pageMetadata({
  title: "Contact, rendez-vous et accès au cabinet",
  description:
    "Prendre rendez-vous avec Maître Joseph Czub, avocat à Martigues : 04 42 40 36 65, formulaire de contact, plan d'accès au 1 avenue Salvador Allende, L'Espace Vénitien.",
  path: "/contact",
});

const crumbs = [{ name: "Contact et accès", path: "/contact" }];

export default function ContactPage() {
  const c = SITE_CONFIG.contact;
  const q = encodeURIComponent(`Cabinet Maître Joseph Czub, ${c.addressFull}`);
  const { lat, lng } = SITE_CONFIG.geo;
  const itineraires = [
    { label: "Google Maps", href: `https://www.google.com/maps/dir/?api=1&destination=${q}` },
    { label: "Plans (Apple)", href: `https://maps.apple.com/?daddr=${lat},${lng}&q=${q}` },
    { label: "Waze", href: `https://waze.com/ul?ll=${lat},${lng}&navigate=yes` },
  ];

  return (
    <>
      <JsonLd data={graph(breadcrumbJsonLd(crumbs))} />
      <EnTete
        crumbs={crumbs}
        titre="Contact et rendez-vous"
        chapeau={
          <>
            Le cabinet reçoit sur rendez-vous à Martigues
            {OPTIONS.consultationADistance ? ", et peut aussi vous conseiller par téléphone ou en visioconférence" : ""}.
            Le plus simple est d&apos;appeler ; vous pouvez aussi écrire, le cabinet vous recontacte.
          </>
        }
      />

      <div className="wrap grid gap-14 py-14 md:py-20 lg:grid-cols-12">
        {/* ── Coordonnées et accès ── */}
        <div className="space-y-6 lg:col-span-5" data-reveal="gauche">
          <section aria-labelledby="appeler" className="halo grain sur-nuit relative overflow-hidden rounded-2xl p-7 text-white shadow-haute">
            <h2 id="appeler" className="t-h3 text-white">
              Par téléphone
            </h2>
            <a href={c.phoneHref} className="mt-2 block font-serif text-[2.4rem] leading-tight text-ocre-clair no-underline hover:text-white">
              {c.phone}
            </a>
            <p className="text-brume">{OPTIONS.horairesTexte}</p>
          </section>

          <section aria-labelledby="ecrire" className="rounded-2xl bg-white p-7 shadow-carte">
            <h2 id="ecrire" className="t-h3">
              Par e-mail
            </h2>
            <a href={c.emailHref} className="mt-2 inline-block break-all text-lg">
              {c.email}
            </a>
          </section>

          <section aria-labelledby="acces" className="rounded-2xl bg-white p-7 shadow-carte">
            <h2 id="acces" className="t-h3">
              Accès au cabinet
            </h2>
            <address className="mt-2 not-italic">
              {SITE_CONFIG.fullName}
              <br />
              {c.street}
              <br />
              {c.building}
              <br />
              {c.postalCode} Martigues
            </address>
            <p className="mt-4 text-[0.95rem] text-sourdine">Itinéraire avec :</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {itineraires.map((i) => (
                <li key={i.label}>
                  <a
                    href={i.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-trait bg-white px-4 py-2 text-[0.95rem] no-underline hover:border-etang"
                  >
                    {i.label}
                    <IconExternal className="h-3.5 w-3.5" />
                    <span className="sr-only">(nouvel onglet)</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <CarteAcces />
            </div>
          </section>
        </div>

        {/* ── Formulaire ── */}
        <section
          id="rendez-vous"
          aria-labelledby="formulaire"
          className="scroll-mt-28 h-fit rounded-2xl bg-white p-6 shadow-haute sm:p-10 lg:col-span-7"
          data-reveal="droite"
        >
          <h2 id="formulaire" className="t-h2">
            Demander un rendez-vous
          </h2>
          {OPTIONS.rdvEnLigneUrl ? (
            <p className="mt-4">
              <a href={OPTIONS.rdvEnLigneUrl} target="_blank" rel="noopener noreferrer" className="btn-plein">
                Choisir un créneau en ligne
              </a>
              <span className="mt-3 block text-sourdine">ou décrivez votre situation ci-dessous :</span>
            </p>
          ) : (
            <p className="mt-4 max-w-texte text-sourdine">
              Décrivez votre situation en quelques lignes : le cabinet vous rappelle pour fixer un rendez-vous. Ne
              joignez pas encore de documents.
            </p>
          )}
          <ContactForm />
          <p className="mt-6 text-[0.9rem] text-sourdine">
            Vos données servent uniquement à traiter votre demande.{" "}
            <Link href="/politique-de-confidentialite">Politique de confidentialité</Link>.
          </p>
        </section>
      </div>
    </>
  );
}
