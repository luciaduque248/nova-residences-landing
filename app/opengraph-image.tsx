import { ImageResponse } from "next/og";

export const alt = "NOVA Residences — Real Estate · Lead Generation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#f2eee6",
          color: "#171512",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            width: "51%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "62px 58px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 18, letterSpacing: 7, textTransform: "uppercase", color: "#9f7850" }}>
              Portfolio case study
            </div>
            <div style={{ marginTop: 48, fontSize: 92, lineHeight: 0.86, letterSpacing: -7, fontWeight: 500 }}>
              NOVA
            </div>
            <div style={{ marginTop: 10, fontSize: 60, lineHeight: 1, letterSpacing: -4 }}>
              Residences
            </div>
            <div style={{ marginTop: 32, fontSize: 24, color: "#6d675f" }}>
              Real Estate · Lead Generation
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, fontSize: 16 }}>
            {['UX/UI', 'Frontend', 'Responsive', 'Conversion'].map((tag) => (
              <div key={tag} style={{ border: "1px solid #b9ad9f", borderRadius: 999, padding: "10px 16px" }}>
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "49%",
            height: "100%",
            display: "flex",
            background: "linear-gradient(145deg, #b39b7e 0%, #786a5c 48%, #332e29 100%)",
          }}
        >
          <div style={{ position: "absolute", inset: 42, border: "1px solid rgba(255,255,255,.28)", borderRadius: 30 }} />
          <div style={{ position: "absolute", left: 82, right: 82, bottom: 64, height: 334, display: "flex", alignItems: "flex-end", gap: 18 }}>
            <div style={{ width: 118, height: 218, background: "#d9cfc2", borderRadius: "22px 22px 0 0" }} />
            <div style={{ width: 156, height: 292, background: "#c3b5a5", borderRadius: "26px 26px 0 0" }} />
            <div style={{ width: 126, height: 250, background: "#eadfd2", borderRadius: "22px 22px 0 0" }} />
          </div>
          <div style={{ position: "absolute", left: 124, top: 116, width: 320, height: 2, background: "rgba(255,255,255,.5)" }} />
          <div style={{ position: "absolute", left: 124, top: 144, color: "#f8f3ea", fontSize: 28, letterSpacing: 3 }}>
            VIVIR MÁS ARRIBA
          </div>
          <div style={{ position: "absolute", right: 58, bottom: 34, color: "rgba(255,255,255,.72)", fontSize: 15, letterSpacing: 3 }}>
            CALI · CONCEPT
          </div>
        </div>
      </div>
    ),
    size,
  );
}
