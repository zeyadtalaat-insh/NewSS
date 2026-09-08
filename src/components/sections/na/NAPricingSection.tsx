"use client";

import { useState } from "react";

type Pack = 8 | 12 | 24;

const prices: Record<Pack, Record<string, Record<string, number>>> = {
  8: {
    Core:      { "10-30": 624,  "35-60": 593,  "65-120": 562,  "125-240": 530  },
    Essential: { "10-30": 749,  "35-60": 711,  "65-120": 674,  "125-240": 636  },
    Premium:   { "10-30": 899,  "35-60": 854,  "65-120": 809,  "125-240": 764  },
  },
  12: {
    Core:      { "10-30": 889,  "35-60": 845,  "65-120": 800,  "125-240": 756  },
    Essential: { "10-30": 1067, "35-60": 1014, "65-120": 960,  "125-240": 907  },
    Premium:   { "10-30": 1280, "35-60": 1216, "65-120": 1152, "125-240": 1088 },
  },
  24: {
    Core:      { "10-30": 1685, "35-60": 1601, "65-120": 1516, "125-240": 1432 },
    Essential: { "10-30": 2022, "35-60": 1921, "65-120": 1820, "125-240": 1718 },
    Premium:   { "10-30": 2426, "35-60": 2305, "65-120": 2184, "125-240": 2062 },
  },
};

const durations = ["10-30", "35-60", "65-120", "125-240"] as const;
const durationLabels: Record<string, string> = {
  "10-30": "10–30s", "35-60": "35–60s", "65-120": "65–120s", "125-240": "125–240s",
};

const tiers = [
  { key: "Core",      sub: "Clean, fast, on-brand",              featured: false },
  { key: "Essential", sub: "Polished, scripted, scroll-stopping", featured: true  },
  { key: "Premium",   sub: "Concept, motion, full-craft",         featured: false },
];

function fmt(n: number) {
  return "$" + Math.round(n).toLocaleString("en-US");
}

const tierIncludes: Record<string, string[]> = {
  Core:      ["Script", "Visuals", "Voice", "Platform cuts", "Revisions"],
  Essential: ["Script", "Visuals", "Voice", "Platform cuts", "Revisions", "Enhanced production quality"],
  Premium:   ["Script", "Visuals", "Voice", "Platform cuts", "Revisions", "Full motion & cinematic treatment"],
};

export default function NAPricingSection() {
  const [pack, setPack] = useState<Pack>(8);

  const packNote =
    pack === 8
      ? "Total for 8 videos. Delivered as an ongoing content sprint."
      : pack === 12
      ? "Total for 12 videos — 5% off vs. single rate. Delivered as an ongoing content sprint."
      : "Total for 24 videos — 10% off vs. single rate. Best value for sustained campaigns.";

  return (
    <section id="pricing" style={{ position: "relative", padding: "96px 0", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background:
            "radial-gradient(circle at top left, #C3E2F4, transparent 70%), radial-gradient(circle at top right, #E2DEDA, transparent 70%), radial-gradient(circle at bottom left, #DFD5EF, transparent 70%), radial-gradient(circle at bottom right, #EED3E4, transparent 70%), #E0DAEC",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px", margin: "0 auto", padding: "0 28px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(8px)",
              padding: "6px 14px",
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: 500,
              color: "#4A1B6B",
              letterSpacing: "0.5px",
              marginBottom: "14px",
            }}
          >
            PRICING
          </div>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 28px)",
              fontWeight: 500,
              margin: "0 0 8px",
              color: "#2C1B4A",
              letterSpacing: "-0.5px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Straightforward pricing for cafes of every size
          </h2>
          <p style={{ fontSize: "15px", color: "#5A4A6E", margin: "0 0 6px", lineHeight: 1.6 }}>
            No agency markups. No hidden fees. Three tiers — pick the one that fits your content ambition.
          </p>
          <p style={{ fontSize: "12px", color: "#8a7a9e", margin: 0 }}>
            All prices in USD. Canadian customers billed in USD.
          </p>
        </div>

        {/* Pack toggle */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "inline-flex",
              background: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(8px)",
              padding: "4px",
              borderRadius: "999px",
              border: "0.5px solid rgba(255,255,255,0.8)",
              position: "relative",
            }}
          >
            {([8, 12, 24] as Pack[]).map((p) => (
              <button
                key={p}
                onClick={() => setPack(p)}
                style={{
                  border: "none",
                  background: pack === p ? "#2C1B4A" : "transparent",
                  color: pack === p ? "white" : "#2C1B4A",
                  padding: "8px 18px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: 500,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  position: "relative",
                  transition: "all .2s",
                }}
              >
                {p} videos
                {p !== 8 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-6px",
                      right: "-4px",
                      background: "#D4537E",
                      color: "white",
                      fontSize: "9px",
                      padding: "2px 5px",
                      borderRadius: "999px",
                      fontWeight: 500,
                    }}
                  >
                    {p === 12 ? "-5%" : "-10%"}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tier cards */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "18px", marginBottom: "1.5rem" }}
          className="pricing-grid"
        >
          {tiers.map(({ key, sub, featured }) => (
            <div
              key={key}
              style={{
                background: featured ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.7)",
                backdropFilter: "blur(12px)",
                border: featured ? "2px solid #2C1B4A" : "0.5px solid rgba(255,255,255,0.9)",
                borderRadius: "18px",
                padding: "1.5rem 1.25rem",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                transform: featured ? "translateY(-6px)" : "none",
              }}
            >
              {featured && (
                <div
                  style={{
                    position: "absolute",
                    top: "-10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#2C1B4A",
                    color: "white",
                    fontSize: "11px",
                    fontWeight: 500,
                    padding: "4px 12px",
                    borderRadius: "999px",
                    letterSpacing: "0.4px",
                    whiteSpace: "nowrap",
                  }}
                >
                  MOST POPULAR
                </div>
              )}

              <div style={{ marginBottom: "4px" }}>
                <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 500, color: "#2C1B4A", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {key}
                </h3>
              </div>
              <p style={{ fontSize: "13px", color: "#6E5E82", margin: "0 0 16px" }}>{sub}</p>

              {/* Duration rows */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
                {durations.map((dur, i) => (
                  <div
                    key={dur}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      padding: "8px 0",
                      borderBottom: i < durations.length - 1 ? "0.5px solid rgba(44,27,74,0.08)" : "none",
                    }}
                  >
                    <span style={{ fontSize: "12px", color: "#6E5E82" }}>{durationLabels[dur]}</span>
                    <span style={{ fontSize: "15px", fontWeight: 500, color: "#2C1B4A" }}>
                      {fmt(prices[pack][key][dur])}
                    </span>
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "8px 0" }}>
                  <span style={{ fontSize: "12px", color: "#6E5E82" }}>245s+</span>
                  <span style={{ fontSize: "13px", fontWeight: 500, color: "#6E5E82" }}>Get a quote</span>
                </div>
              </div>

              {/* Includes */}
              <div style={{ margin: "12px 0", borderTop: "0.5px solid rgba(44,27,74,0.08)", paddingTop: "12px" }}>
                <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8a7a9e", marginBottom: "8px" }}>
                  Includes
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  {tierIncludes[key].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#4A3B6A" }}>
                      <span style={{ color: "#D4537E", fontSize: "10px" }}>✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://form.typeform.com/to/o51YfOvB"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: "8px",
                  display: "block",
                  textAlign: "center",
                  border: featured ? "none" : "0.5px solid #2C1B4A",
                  background: featured ? "#2C1B4A" : "transparent",
                  color: featured ? "white" : "#2C1B4A",
                  padding: "10px",
                  borderRadius: "10px",
                  fontSize: "13px",
                  fontWeight: 500,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  textDecoration: "none",
                  transition: "opacity .2s",
                }}
              >
                {`Choose ${key} ↗`}
              </a>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", fontSize: "12px", color: "#5A4A6E", margin: "1rem 0 0", lineHeight: 1.6 }}>
          {packNote}
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
          .pricing-grid > div { transform: none !important; }
        }
      `}</style>
    </section>
  );
}
