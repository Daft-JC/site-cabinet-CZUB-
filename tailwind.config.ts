import type { Config } from "tailwindcss";

// Palette « Venise provençale » : bleu nuit des canaux de Martigues le soir,
// sable et crème des façades, laiton des balances et des poignées de porte.
// Contrastes vérifiés AA (texte) sur chaque fond où ils sont utilisés.
const config: Config = {
  content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nuit: {
          DEFAULT: "#0E2033", // grands bandeaux sombres
          2: "#15304B", // cartes sur fond nuit
          3: "#1D3E5F",
        },
        papier: "#F7F1E6", // fond crème général
        enduit: "#ECE2CF", // sections sable
        trait: "#D6C9B2", // filets sur fond clair
        encre: "#16212C", // texte principal
        sourdine: "#56606A", // texte secondaire sur crème (≈ 5.9:1)
        brume: "#B9C6D3", // texte secondaire sur nuit (≈ 9:1)
        etang: {
          DEFAULT: "#1E4A6E", // liens et boutons sur fond clair
          profond: "#163A57",
          clair: "#DCE6EE",
        },
        ocre: {
          DEFAULT: "#B98A3E", // laiton : filets, décor
          clair: "#D9B26F", // laiton lisible sur nuit (≈ 7.9:1)
          texte: "#8A5A1C", // laiton lisible sur crème (≈ 5.3:1)
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "80rem",
        texte: "40rem",
      },
      boxShadow: {
        carte: "0 1px 2px rgba(14,32,51,.06), 0 12px 32px -12px rgba(14,32,51,.18)",
        haute: "0 2px 4px rgba(14,32,51,.08), 0 28px 60px -20px rgba(14,32,51,.35)",
      },
    },
  },
  plugins: [],
};

export default config;
