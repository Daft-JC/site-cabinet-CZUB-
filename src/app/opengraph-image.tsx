import { ImageResponse } from "next/og";

export const runtime = "edge";

// Image affichée lors du partage d'un lien (Facebook, WhatsApp, LinkedIn…)
export const alt = "Cabinet Maître Joseph Czub, avocat à Martigues";
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
          padding: "80px 90px",
          background: "#FBF9F4",
          fontFamily: "Georgia, serif",
          borderLeft: "28px solid #1E4A6E",
        }}
      >
        <div style={{ display: "flex", width: 90, height: 6, background: "#C08A3E", marginBottom: 40 }} />
        <div style={{ color: "#1C2530", fontSize: 74, lineHeight: 1.08 }}>Cabinet Maître Joseph Czub</div>
        <div style={{ color: "#1E4A6E", fontSize: 54, marginTop: 14 }}>Avocat à Martigues depuis 1994</div>
        <div style={{ color: "#55606B", fontSize: 30, marginTop: 44, fontFamily: "Arial, sans-serif" }}>
          Barreau d&apos;Aix-en-Provence. Défense des consommateurs, photovoltaïque, fraudes bancaires.
        </div>
        <div style={{ color: "#1C2530", fontSize: 40, marginTop: 26 }}>04 42 40 36 65</div>
      </div>
    ),
    { ...size }
  );
}
