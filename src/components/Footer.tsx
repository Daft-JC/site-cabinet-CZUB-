import Link from "next/link";
import { SITE_CONFIG, EXPERTISES } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 md:px-[60px] py-12 md:py-[60px] border-t border-or/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        {/* Coordonnées (nom, adresse, téléphone identiques à la fiche Google) */}
        <div>
          <span className="block font-serif text-base tracking-[0.15em] uppercase text-ivoire mb-4">
            {SITE_CONFIG.fullName}
          </span>
          <address className="not-italic text-[0.75rem] font-light text-gris-clair leading-[1.9]">
            Avocat au {SITE_CONFIG.barreau}
            <br />
            {SITE_CONFIG.contact.address}
            <br />
            13500 {SITE_CONFIG.location.city}
            <br />
            <a href={SITE_CONFIG.contact.phoneHref} className="text-gris-clair no-underline hover:text-or">
              {SITE_CONFIG.contact.phone}
            </a>
            <br />
            Du lundi au vendredi, sur rendez-vous
          </address>
        </div>

        {/* Domaines */}
        <nav aria-label="Domaines d'intervention" className="md:col-span-2">
          <span className="block text-[0.6rem] tracking-[0.2em] uppercase text-or mb-4">
            Domaines d&apos;intervention
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 list-none">
            {EXPERTISES.map((exp) => (
              <li key={exp.slug}>
                <Link
                  href={`/expertises/${exp.slug}`}
                  className="text-[0.75rem] font-light text-gris-clair no-underline hover:text-or transition-colors duration-300"
                >
                  {exp.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gris-sombre/40">
        <span className="text-[0.7rem] text-gris tracking-wide">
          Avocat à {SITE_CONFIG.location.city} — interventions sur toute la France
        </span>
        <div className="text-[0.65rem] text-gris tracking-wide text-center md:text-right">
          © {year} {SITE_CONFIG.name} — Tous droits réservés —{" "}
          <Link
            href="/mentions-legales"
            className="text-gris-clair no-underline hover:text-or transition-colors duration-300"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
