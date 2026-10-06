import type { Config } from "tailwindcss";

// Palette inspirée du cabinet lui-même : murs blanc chaud, eau de l'étang de
// Berre vue depuis le bureau, ocre des façades de Martigues (tableau des
// barques). Contrastes vérifiés AA sur fond "papier".
const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        papier: "#FBF9F4", // fond général
        enduit: "#F1ECE2", // fond de section teinté
        trait: "#DDD5C7", // filets, bordures
        encre: "#1C2530", // texte principal (≈ 14:1 sur papier)
        sourdine: "#55606B", // texte secondaire (≈ 6:1)
        etang: {
          DEFAULT: "#1E4A6E", // accent principal, liens, boutons (≈ 8.8:1)
          profond: "#163A57",
          clair: "#DCE6EE",
        },
        ocre: {
          DEFAULT: "#C08A3E", // décoratif uniquement (pas de texte)
          texte: "#8A5A1C", // ocre lisible pour petits textes (≈ 5.5:1)
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "78rem",
        texte: "40rem",
      },
    },
  },
  plugins: [],
};

export default config;
