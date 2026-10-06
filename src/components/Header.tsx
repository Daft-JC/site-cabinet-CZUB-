import Link from "next/link";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { IconPhone } from "./Icons";
import MenuMobile from "./MenuMobile";
import HeaderOmbre from "./HeaderOmbre";

export default function Header() {
  return (
    <header
      id="entete"
      className="sticky top-0 z-40 bg-nuit/95 text-white backdrop-blur-md transition-[box-shadow,background-color] duration-300 data-[ombre=true]:bg-nuit/90 data-[ombre=true]:shadow-[0_10px_30px_-12px_rgba(0,0,0,.5)]"
    >
      <HeaderOmbre />
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-nuit"
      >
        Aller au contenu
      </a>
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-6">
        <Link href="/" className="group flex items-center gap-3 no-underline">
          <span
            aria-hidden
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ocre-clair/60 font-serif text-xl text-ocre-clair transition-colors duration-300 group-hover:bg-ocre-clair group-hover:text-nuit"
          >
            C
          </span>
          <span className="flex flex-col leading-none">
            <span className="whitespace-nowrap font-serif text-[1.35rem] text-white">Cabinet Czub</span>
            <span className="mt-1 whitespace-nowrap text-[0.8rem] text-brume">Avocat à Martigues</span>
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="lien-fleche whitespace-nowrap text-[0.95rem] !font-normal text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SITE_CONFIG.contact.phoneHref}
            className="hidden items-center gap-2 font-medium text-ocre-clair no-underline hover:text-white whitespace-nowrap 2xl:inline-flex"
          >
            <IconPhone className="h-[1.1rem] w-[1.1rem]" />
            {SITE_CONFIG.contact.phone}
          </a>
          <Link href="/contact#rendez-vous" className="btn-laiton hidden whitespace-nowrap !px-5 !py-2.5 text-[0.95rem] sm:inline-flex">
            Prendre rendez-vous
          </Link>
          <MenuMobile />
        </div>
      </div>
    </header>
  );
}
