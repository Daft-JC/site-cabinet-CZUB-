import type { Metadata } from "next";
import "@/styles/globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalDecor from "@/components/LegalDecor";

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.fullName} — Avocat à ${SITE_CONFIG.location.city}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "avocat Martigues",
    "cabinet avocat",
    "droit énergie renouvelable",
    "litiges sociétés",
    "droit consommation",
    "Joseph Czub",
    "avocat Aix-en-Provence",
    "avocat Bouches-du-Rhône",
  ],
  openGraph: {
    title: `${SITE_CONFIG.fullName} — Avocat à ${SITE_CONFIG.location.city}`,
    description: SITE_CONFIG.description,
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-noir text-ivoire font-sans overflow-x-hidden">
        <LegalDecor />
        <Navbar />
        <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
