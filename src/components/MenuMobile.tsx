"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function MenuMobile() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btn.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={btn}
        type="button"
        aria-expanded={open}
        aria-controls="menu-mobile"
        onClick={() => setOpen((o) => !o)}
        className="flex h-11 items-center gap-2 rounded-full border border-white/30 px-4 text-[0.95rem] text-white"
      >
        <span aria-hidden className="flex w-4 flex-col gap-[4px]">
          <span className={`h-[1.5px] bg-white transition-transform ${open ? "translate-y-[5.5px] rotate-45" : ""}`} />
          <span className={`h-[1.5px] bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-[1.5px] bg-white transition-transform ${open ? "-translate-y-[5.5px] -rotate-45" : ""}`} />
        </span>
        Menu
      </button>

      <div
        id="menu-mobile"
        hidden={!open}
        className="halo fixed inset-x-0 top-[4.5rem] bottom-0 z-40 overflow-y-auto border-t border-white/10 text-white"
      >
        <nav aria-label="Navigation mobile" className="wrap py-8">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {[{ label: "Accueil", href: "/" }, ...NAV_LINKS].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={pathname === l.href ? "page" : undefined}
                  className="block py-4 font-serif text-[1.75rem] text-white no-underline aria-[current=page]:text-ocre-clair"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3">
            <a href={SITE_CONFIG.contact.phoneHref} className="btn-laiton">
              Appeler le {SITE_CONFIG.contact.phone}
            </a>
            <Link href="/contact#rendez-vous" className="btn-trait-clair">
              Prendre rendez-vous
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
