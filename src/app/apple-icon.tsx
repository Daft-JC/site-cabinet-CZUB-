import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1A1A1A",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "28px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "4px",
            borderRadius: "24px",
            border: "2px solid rgba(184,134,11,0.35)",
            display: "flex",
          }}
        />
        <span
          style={{
            color: "#B8860B",
            fontSize: "90px",
            fontWeight: "bold",
            letterSpacing: "-2px",
            fontFamily: "Georgia, serif",
            lineHeight: 1,
          }}
        >
          JC
        </span>
      </div>
    ),
    { ...size }
  );
}
