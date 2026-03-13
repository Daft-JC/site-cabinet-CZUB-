import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: {
          DEFAULT: "#0a0a0a",
          profond: "#050505",
        },
        anthracite: "#1a1a1a",
        "gris-sombre": "#2a2a2a",
        gris: {
          DEFAULT: "#6b6b6b",
          clair: "#9a9a9a",
        },
        ivoire: {
          DEFAULT: "#f5f0eb",
          chaud: "#ede6dd",
        },
        or: {
          DEFAULT: "#b8954f",
          clair: "#d4b06a",
          sombre: "#96783e",
        },
        blanc: "#faf9f7",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "Times New Roman", "serif"],
        sans: ["Libre Franklin", "Helvetica Neue", "Arial", "sans-serif"],
      },
      animation: {
        "slide-up": "slideUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-up": "fadeUp 1s ease forwards",
        "scroll-down": "scrollDown 2s ease-in-out infinite",
        "preloader-pulse": "preloaderPulse 1.2s ease-in-out infinite",
      },
      keyframes: {
        slideUp: {
          from: { opacity: "0", transform: "translateY(100%)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scrollDown: {
          "0%": { top: "-100%" },
          "50%": { top: "100%" },
          "100%": { top: "100%" },
        },
        preloaderPulse: {
          "0%, 100%": { transform: "scaleX(0.3)", opacity: "0.3" },
          "50%": { transform: "scaleX(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
