import { ImageResponse } from "next/og";

export const alt = "Justin Underhill — AI Engineer & Builder";
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
          background: "#0a0e13",
          color: "#e6edf3",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#43d9bd",
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
              color: "#9fb1c0",
              fontSize: 32,
              fontWeight: 400,
              lineHeight: 1.25,
            }}
          >
            AI engineer & builder — I ship production AI end-to-end, from an
            ambiguous problem to a deployed product.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#67788a",
            fontSize: 22,
            letterSpacing: 0,
          }}
        >
          <span style={{ color: "#43d9bd" }}>AI engineering · full-stack · delivery</span>
          <span>Johannesburg · ZA</span>
        </div>
      </div>
    ),
    size,
  );
}
