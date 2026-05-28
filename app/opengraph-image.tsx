import { ImageResponse } from "next/og";

export const alt = "Justin Underhill — Applied AI & Automation Consultant";
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
          padding: "72px",
          background: "#0b0d10",
          color: "#f4f4f3",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#e9a23b",
            fontSize: 22,
            letterSpacing: 0,
          }}
        >
          {"// signal"}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: 0,
            }}
          >
            Justin Underhill
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 920,
              color: "#a4a8af",
              fontSize: 32,
              fontWeight: 400,
              lineHeight: 1.25,
            }}
          >
            Applied AI & Automation Consultant — practical AI tools, agent
            workflows, and automation for real business environments.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#6b7280",
            fontSize: 22,
            letterSpacing: 0,
          }}
        >
          <span style={{ color: "#e9a23b" }}>Applied AI · automation · delivery</span>
          <span>Johannesburg · ZA</span>
        </div>
      </div>
    ),
    size,
  );
}
