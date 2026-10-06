import Link from "next/link";
import { SITE_CONFIG, EXPERTISES, OPTIONS } from "@/lib/constants";

export default function Footer() {
  const c = SITE_CONFIG.contact;
  return (
    <footer className="bg-encre pb-24 text-[#D9DEE3] md:pb-0 [&_a]:text-[#D9DEE3] [&_a:hover]:text-white">
      <div className="wrap grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-serif text-2xl text-white">{SITE_CONFIG.fullName}</p>
          <p className="mt-2">Avocat au {SITE_CONFIG.barreau}</p>
          <address className="mt-6 not-italic leading-relaxed">
            {c.street}
            <br />
            {c.building}
            <br />
            {c.postalCode} {SITE_CONFIG.location.city}
          </address>
          <p className="mt-4">
            <a href={c.phoneHref} className="text-lg font-medium">
              {c.phone}
            </a>
            <br />
            <a href={c.emailHref}>{c.email}</a>
          </p>
          <p className="mt-4 text-[0.95rem]">{OPTIONS.horairesTexte}</p>
        </div>

        <nav aria-label="Domaines d'intervention" className="md:col-span-5">
          <p className="font-serif text-lg text-white">Domaines d&apos;intervention</p>
          <ul className="mt-4 grid gap-x-6 gap-y-2 text-[0.95rem] sm:grid-cols-2">
            {EXPERTISES.map((e) => (
              <li key={e.slug}>
                <Link href={`/expertises/${e.slug}`}>{e.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Le site" className="md:col-span-3">
          <p className="font-serif text-lg text-white">Le site</p>
          <ul className="mt-4 space-y-2 text-[0.95rem]">
            <li><Link href="/cabinet">Maître Joseph Czub</Link></li>
            <li><Link href="/presse">Presse</Link></li>
            <li><Link href="/contact">Contact et accès</Link></li>
            <li><Link href="/consultation-visio">Consultation en visio</Link></li>
            <li><Link href="/mentions-legales">Mentions légales</Link></li>
            <li><Link href="/politique-de-confidentialite">Politique de confidentialité</Link></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/15">
        <p className="wrap py-6 text-[0.875rem] text-[#B5BDC6]">
          © {new Date().getFullYear()} {SITE_CONFIG.fullName}. Les informations publiées sur ce site sont
          générales : elles ne constituent pas une consultation juridique.
        </p>
      </div>
    </footer>
  );
}
