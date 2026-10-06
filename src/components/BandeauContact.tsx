import Link from "next/link";
import { SITE_CONFIG, OPTIONS } from "@/lib/constants";

// Bloc d'appel à l'action présent en bas des pages.
export default function BandeauContact({ titre = "Parlons de votre situation" }: { titre?: string }) {
  const c = SITE_CONFIG.contact;
  return (
    <section aria-labelledby="bandeau-contact" className="bg-etang-profond text-white">
      <div className="wrap grid gap-10 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-7">
          <h2 id="bandeau-contact" className="t-h2 text-white">
            {titre}
          </h2>
          <p className="mt-4 max-w-texte text-[#D3DEE8]">
            Le cabinet vous reçoit sur rendez-vous à Martigues, à l&apos;Espace Vénitien. Appelez ou laissez un
            message : vous serez recontacté pour fixer un rendez-vous.
            {OPTIONS.consultationADistance &&
              " Le rendez-vous peut aussi se tenir par téléphone ou en visioconférence."}
          </p>
        </div>
        <div className="flex flex-col gap-3 md:col-span-5 md:items-end md:justify-end">
          <a href={c.phoneHref} className="btn-clair w-full text-lg md:w-auto">
            Appeler le {c.phone}
          </a>
          <Link
            href="/contact#rendez-vous"
            className="btn w-full border border-white/50 text-white hover:bg-white/10 hover:no-underline md:w-auto"
          >
            Écrire au cabinet
          </Link>
        </div>
      </div>
    </section>
  );
}
