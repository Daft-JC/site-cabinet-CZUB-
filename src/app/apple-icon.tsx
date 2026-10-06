import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1E4A6E",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", left: 38, top: 40, width: 10, height: 100, background: "#C08A3E", display: "flex" }} />
        <span style={{ color: "#FBF9F4", fontSize: 104, fontFamily: "Georgia, serif", marginLeft: 36 }}>C</span>
      </div>
    ),
    { ...size }
  );
}
