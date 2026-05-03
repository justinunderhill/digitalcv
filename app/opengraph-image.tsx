import { ImageResponse } from "next/og";

export const alt = "Justin Underhill portfolio social preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(135deg, #1b1018 0%, #07070a 46%, #172016 100%)",
          color: "#fff3c2",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#5df28c",
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <span>Johannesburg Signal</span>
          <span>AI Delivery</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 900,
              lineHeight: 0.92,
              textTransform: "uppercase",
            }}
          >
            Justin Underhill
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 860,
              color: "#ffbd4a",
              fontSize: 36,
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Practical AI systems, LLM assistants, and automation workflows for real
            business environments.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 18,
            color: "#f8f0d8",
            fontSize: 24,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <span>Delivery Leadership</span>
          <span style={{ color: "#28d7d7" }}>/</span>
          <span>LLM Applications</span>
          <span style={{ color: "#28d7d7" }}>/</span>
          <span>Automation Architecture</span>
        </div>
      </div>
    ),
    size,
  );
}
