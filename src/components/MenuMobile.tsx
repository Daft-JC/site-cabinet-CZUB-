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
        className="flex h-11 items-center gap-2 rounded-[3px] border border-trait px-3 text-[0.95rem] text-encre"
      >
        <span aria-hidden className="flex w-4 flex-col gap-[4px]">
          <span className={`h-[1.5px] bg-encre transition-transform ${open ? "translate-y-[5.5px] rotate-45" : ""}`} />
          <span className={`h-[1.5px] bg-encre transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-[1.5px] bg-encre transition-transform ${open ? "-translate-y-[5.5px] -rotate-45" : ""}`} />
        </span>
        Menu
      </button>

      <div
        id="menu-mobile"
        hidden={!open}
        className="fixed inset-x-0 top-[4.25rem] bottom-0 z-40 overflow-y-auto border-t border-trait bg-papier"
      >
        <nav aria-label="Navigation mobile" className="wrap py-8">
          <ul className="divide-y divide-trait border-y border-trait">
            {[{ label: "Accueil", href: "/" }, ...NAV_LINKS].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={pathname === l.href ? "page" : undefined}
                  className="block py-4 font-serif text-2xl text-encre no-underline aria-[current=page]:text-etang"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3">
            <a href={SITE_CONFIG.contact.phoneHref} className="btn-plein">
              Appeler le {SITE_CONFIG.contact.phone}
            </a>
            <Link href="/contact#rendez-vous" className="btn-trait">
              Prendre rendez-vous
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
