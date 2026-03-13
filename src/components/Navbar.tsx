"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
    document.body.style.overflow = !mobileOpen ? "hidden" : "";
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] px-6 md:px-[60px] flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "h-[70px] bg-noir/95 backdrop-blur-xl border-b border-or/10"
            : "h-20 bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 no-underline group">
          <div className="w-9 h-9 border border-or flex items-center justify-center relative">
            <div className="w-3.5 h-3.5 border border-or rotate-45 transition-transform duration-300 group-hover:rotate-[135deg]" />
          </div>
          <span className="font-serif text-xl tracking-[0.15em] uppercase text-ivoire">
            Czub
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-10 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-[0.7rem] font-normal tracking-[0.2em] uppercase no-underline relative pb-1 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-px after:bg-or after:transition-all after:duration-400 ${
                  pathname === link.href
                    ? "text-ivoire after:w-full"
                    : "text-gris-clair hover:text-ivoire after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden lg:inline-block text-[0.65rem] font-medium tracking-[0.2em] uppercase text-or no-underline border border-or px-6 py-2.5 transition-all duration-400 hover:bg-or hover:text-noir"
        >
          Consultation
        </Link>

        {/* Hamburger */}
        <button
          onClick={toggleMobile}
          className="lg:hidden z-[1001] bg-transparent border-none p-2 cursor-pointer"
          aria-label="Menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-ivoire" />
          ) : (
            <Menu className="w-6 h-6 text-ivoire" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-noir-profond/98 z-[999] flex flex-col justify-center items-center gap-9 transition-all duration-400 lg:hidden ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-serif text-3xl no-underline transition-colors duration-300 ${
              pathname === link.href
                ? "text-or"
                : "text-ivoire hover:text-or"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
