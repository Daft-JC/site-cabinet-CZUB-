import Link from "next/link";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { IconPhone } from "./Icons";
import MenuMobile from "./MenuMobile";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-trait bg-papier/95 backdrop-blur supports-[backdrop-filter]:bg-papier/85">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-white focus:px-4 focus:py-2"
      >
        Aller au contenu
      </a>
      <div className="wrap flex h-[4.25rem] items-center justify-between gap-6">
        <Link href="/" className="group flex flex-col leading-none no-underline">
          <span className="onglet font-serif text-[1.45rem] text-encre">Cabinet Czub</span>
          <span className="mt-1 pl-4 text-[0.8rem] text-sourdine">Avocat à Martigues</span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[0.95rem] text-encre no-underline hover:text-etang hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SITE_CONFIG.contact.phoneHref}
            className="hidden items-center gap-2 font-medium text-etang no-underline hover:underline md:inline-flex"
          >
            <IconPhone className="h-[1.1rem] w-[1.1rem]" />
            {SITE_CONFIG.contact.phone}
          </a>
          <Link href="/contact#rendez-vous" className="btn-plein hidden !py-2.5 !px-5 text-[0.95rem] sm:inline-flex">
            Prendre rendez-vous
          </Link>
          <MenuMobile />
        </div>
      </div>
    </header>
  );
}
