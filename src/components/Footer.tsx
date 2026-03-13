import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 md:px-[60px] py-12 md:py-[60px] border-t border-or/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <span className="font-serif text-base tracking-[0.15em] uppercase text-ivoire">
            Czub
          </span>
          <div className="w-px h-5 bg-gris-sombre" />
          <span className="text-[0.7rem] text-gris tracking-wide">
            Avocat au {SITE_CONFIG.barreau} — {SITE_CONFIG.location.city}
          </span>
        </div>
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
