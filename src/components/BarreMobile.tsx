import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { IconCalendar, IconPhone } from "./Icons";

// Barre d'action fixée en bas d'écran sur mobile : appeler / prendre rendez-vous.
export default function BarreMobile() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 border-t border-white/10 bg-nuit/95 backdrop-blur pb-[env(safe-area-inset-bottom)] md:hidden">
      <a
        href={SITE_CONFIG.contact.phoneHref}
        className="flex items-center justify-center gap-2 py-3.5 font-medium text-white no-underline"
      >
        <IconPhone /> Appeler
      </a>
      <Link
        href="/contact#rendez-vous"
        className="flex items-center justify-center gap-2 bg-ocre-clair py-3.5 font-medium text-nuit no-underline"
      >
        <IconCalendar /> Rendez-vous
      </Link>
    </div>
  );
}
