import { ImageResponse } from "next/og";

export const alt = "NUSRL Undertrial Prisoners & Continuous Legal Education Project";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e3a5f 0%, #152a45 100%)",
          padding: 48,
        }}
      >
        <div style={{ fontSize: 28, color: "#c9a227", marginBottom: 16 }}>NUSRL, Ranchi</div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.2,
          }}
        >
          Undertrial Prisoners &amp; Continuous Legal Education
        </div>
        <div style={{ fontSize: 22, color: "#d1d5db", marginTop: 24, textAlign: "center", maxWidth: 800 }}>
          Legal aid, prison outreach, research, and continuous legal education
        </div>
      </div>
    ),
    { ...size }
  );
}
