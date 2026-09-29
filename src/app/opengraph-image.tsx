import { ImageResponse } from "next/og";

export const runtime = "edge";

// Image affichée lors du partage d'un lien (Facebook, WhatsApp, LinkedIn…)
export const alt = "Cabinet Maître Joseph Czub — Avocat à Martigues";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0a",
          border: "2px solid rgba(184,149,79,0.35)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ color: "#b8954f", fontSize: 26, letterSpacing: 6, textTransform: "uppercase", marginBottom: 36 }}>
          Avocat au Barreau d&apos;Aix-en-Provence — Depuis 1994
        </div>
        <div style={{ color: "#f5f0eb", fontSize: 76, lineHeight: 1.1 }}>Cabinet Maître Joseph Czub</div>
        <div style={{ color: "#b8954f", fontSize: 64, fontStyle: "italic", marginTop: 8 }}>Avocat à Martigues</div>
        <div style={{ color: "#9a9a9a", fontSize: 28, marginTop: 48 }}>
          Photovoltaïque · Fraudes bancaires · Consommation · Assurances · Construction
        </div>
        <div style={{ color: "#f5f0eb", fontSize: 30, marginTop: 20 }}>04 42 40 36 65</div>
      </div>
    ),
    { ...size }
  );
}
