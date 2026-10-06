import Link from "next/link";
import { SITE_CONFIG, OPTIONS } from "@/lib/constants";
import { Fleche, IconPhone } from "./Icons";

// Bloc d'appel à l'action présent en bas des pages.
export default function BandeauContact({ titre = "Parlons de votre situation" }: { titre?: string }) {
  const c = SITE_CONFIG.contact;
  return (
    <section aria-labelledby="bandeau-contact" className="halo grain sur-nuit relative overflow-hidden text-white">
      <div className="wrap relative grid items-end gap-12 py-20 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-7" data-reveal>
          <p className="surtitre">Rendez-vous</p>
          <h2 id="bandeau-contact" className="t-h2 mt-5 text-white">
            {titre}
          </h2>
          <p className="t-lead mt-5 max-w-texte text-brume">
            Le cabinet vous reçoit sur rendez-vous à Martigues, à l&apos;Espace Vénitien
            {OPTIONS.consultationADistance ? ", ou à distance, par téléphone et en visioconférence" : ""}. Appelez ou
            laissez un message : vous serez recontacté pour fixer un rendez-vous.
          </p>
        </div>
        <div className="lg:col-span-5" data-reveal style={{ ["--i" as string]: 2 }}>
          <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-7 backdrop-blur-sm">
            <p className="text-brume">Par téléphone, {OPTIONS.horairesTexte.toLowerCase()}</p>
            <a
              href={c.phoneHref}
              className="mt-2 inline-flex items-center gap-3 font-serif text-[clamp(2rem,1.6rem+1.6vw,2.75rem)] leading-none text-ocre-clair no-underline hover:text-white"
            >
              <IconPhone className="h-7 w-7" />
              {c.phone}
            </a>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact#rendez-vous" className="btn-laiton">
                Écrire au cabinet <Fleche />
              </Link>
              {OPTIONS.consultationADistance && (
                <Link href="/consultation-visio" className="btn-trait-clair">
                  Rendez-vous en visio
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
