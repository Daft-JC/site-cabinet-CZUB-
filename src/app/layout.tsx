import type { Metadata, Viewport } from "next";
import { Newsreader, Instrument_Sans } from "next/font/google";
import "@/styles/globals.css";
import { SITE_URL, SITE_CONFIG, OG_IMAGE } from "@/lib/constants";
import { cabinetJsonLd } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BarreMobile from "@/components/BarreMobile";
import JsonLd from "@/components/JsonLd";
import Animations from "@/components/Animations";

// Polices auto-hébergées par Next (aucune requête vers Google côté visiteur).
const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Codes de vérification : à renseigner dans Vercel (Settings → Environment
// Variables) ou dans .env.local. Google est déjà vérifié (balise + fichier).
const bing = process.env.NEXT_PUBLIC_BING_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Avocat à Martigues | Cabinet Maître Joseph Czub",
    template: "%s | Cabinet Czub Martigues",
  },
  description: SITE_CONFIG.description,
  applicationName: SITE_CONFIG.fullName,
  authors: [{ name: SITE_CONFIG.lawyer }],
  manifest: "/manifest.json",
  formatDetection: { telephone: true, address: false, email: false },
  verification: {
    google: "mYp_j8TA2zDMXGe8dSqpzusljx3aPtb3UxyIeeBUEfk",
    ...(bing ? { other: { "msvalidate.01": bing } } : {}),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    locale: "fr_FR",
    type: "website",
    siteName: SITE_CONFIG.fullName,
    url: SITE_URL,
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0E2033",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        {/* Active les animations au défilement seulement si JS est disponible */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <JsonLd data={cabinetJsonLd()} />
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <BarreMobile />
        <Animations />
      </body>
    </html>
  );
}
