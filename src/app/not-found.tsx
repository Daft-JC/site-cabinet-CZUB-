import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = { title: "Page introuvable", robots: { index: false } };

export default function NotFound() {
  return (
    <div className="wrap py-24 md:py-32">
      <h1 className="t-display max-w-[16ch]">Cette page n&apos;existe pas ou a été déplacée</h1>
      <p className="t-lead mt-6 max-w-texte text-sourdine">
        Revenez à l&apos;accueil, consultez les domaines d&apos;intervention ou appelez directement le cabinet au{" "}
        <a href={SITE_CONFIG.contact.phoneHref}>{SITE_CONFIG.contact.phone}</a>.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/" className="btn-plein">Retour à l&apos;accueil</Link>
        <Link href="/expertises" className="btn-trait">Domaines d&apos;intervention</Link>
      </div>
    </div>
  );
}
