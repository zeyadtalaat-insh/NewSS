"use client";
import { useState } from "react";
import { useLanguage } from "../LanguageContext";

type Pack = 8 | 12 | 24;
type Currency = "USD" | "SAR";

const prices: Record<Pack, Record<string, Record<string, Record<Currency, number>>>> = {
  8: {
    Core: {
      "10-30":   { USD: 624,   SAR: 2340  },
      "35-60":   { USD: 1186,  SAR: 4446  },
      "65-120":  { USD: 2246,  SAR: 8424  },
      "125-240": { USD: 4243,  SAR: 16575 },
    },
    Essential: {
      "10-30":   { USD: 749,   SAR: 2808  },
      "35-60":   { USD: 1423,  SAR: 5335  },
      "65-120":  { USD: 2696,  SAR: 10109 },
      "125-240": { USD: 5092,  SAR: 19890 },
    },
    Premium: {
      "10-30":   { USD: 899,   SAR: 3370  },
      "35-60":   { USD: 1707,  SAR: 6402  },
      "65-120":  { USD: 3235,  SAR: 12131 },
      "125-240": { USD: 6110,  SAR: 23868 },
    },
  },
  12: {
    Core: {
      "10-30":   { USD: 889,   SAR: 3335  },
      "35-60":   { USD: 1689,  SAR: 6336  },
      "65-120":  { USD: 3201,  SAR: 12004 },
      "125-240": { USD: 6047,  SAR: 23619 },
    },
    Essential: {
      "10-30":   { USD: 1067,  SAR: 4001  },
      "35-60":   { USD: 2027,  SAR: 7603  },
      "65-120":  { USD: 3841,  SAR: 14405 },
      "125-240": { USD: 7256,  SAR: 28343 },
    },
    Premium: {
      "10-30":   { USD: 1280,  SAR: 4802  },
      "35-60":   { USD: 2433,  SAR: 9123  },
      "65-120":  { USD: 4610,  SAR: 17286 },
      "125-240": { USD: 8707,  SAR: 34012 },
    },
  },
  24: {
    Core: {
      "10-30":   { USD: 1685,  SAR: 6318  },
      "35-60":   { USD: 3201,  SAR: 12004 },
      "65-120":  { USD: 6065,  SAR: 22745 },
      "125-240": { USD: 11457, SAR: 44753 },
    },
    Essential: {
      "10-30":   { USD: 2022,  SAR: 7582  },
      "35-60":   { USD: 3841,  SAR: 14405 },
      "65-120":  { USD: 7278,  SAR: 27294 },
      "125-240": { USD: 13748, SAR: 53703 },
    },
    Premium: {
      "10-30":   { USD: 2426,  SAR: 9098  },
      "35-60":   { USD: 4610,  SAR: 17286 },
      "65-120":  { USD: 8734,  SAR: 32753 },
      "125-240": { USD: 16498, SAR: 64444 },
    },
  },
};

function fmt(n: number, currency: Currency) {
  const rounded = Math.round(n);
  const num = rounded.toLocaleString("en-US");
  return currency === "USD" ? "$" + num : "SAR " + num;
}

const durations = ["10-30", "35-60", "65-120", "125-240"] as const;
type Duration = typeof durations[number];

const durationLabels: Record<Duration, string> = {
  "10-30":   "10–30s",
  "35-60":   "35–60s",
  "65-120":  "65–120s",
  "125-240": "125–240s",
};

const tiers = [
  { key: "Core" as const,      sub: "Clean, fast, on-brand",               featured: false },
  { key: "Essential" as const, sub: "Polished, scripted, scroll-stopping",  featured: true  },
  { key: "Premium" as const,   sub: "Concept, motion, full-craft",          featured: false },
];

const tierSubAr: Record<string, string> = {
  Core:      "نظيف، سريع، متوافق مع البراند",
  Essential: "مصقول، مكتوب، يوقف الإصبع",
  Premium:   "كونسيبت، موشن، إتقان كامل",
};

export default function PricingSection() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [pack, setPack] = useState<Pack>(8);
  const [currency, setCurrency] = useState<Currency>("USD");

  const packNote =
    pack === 8
      ? (isAr ? "الإجمالي لـ 8 فيديوهات. تُسلَّم كسبرنت محتوى مستمر." : "Total for 8 videos. Delivered as an ongoing content sprint.")
      : pack === 12
      ? (isAr ? "الإجمالي لـ 12 فيديو — خصم 5% عن السعر المفرد." : "Total for 12 videos — 5% off vs. single rate. Delivered as an ongoing content sprint.")
      : (isAr ? "الإجمالي لـ 24 فيديو — خصم 10%. الأفضل للحملات المستدامة." : "Total for 24 videos — 10% off vs. single rate. Best value for sustained campaigns.");

  return (
    <section id="pricing" style={{ position: "relative", padding: "96px 0", overflow: "hidden" }}>
      {/* Pastel gradient background */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: "radial-gradient(circle at top left, #C3E2F4, transparent 70%), radial-gradient(circle at top right, #E2DEDA, transparent 70%), radial-gradient(circle at bottom left, #DFD5EF, transparent 70%), radial-gradient(circle at bottom right, #EED3E4, transparent 70%), #E0DAEC",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px", margin: "0 auto", padding: "0 28px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: "rgba(255,255,255,0.55)", backdropFilter: "blur(8px)", padding: "6px 14px", borderRadius: "999px", fontSize: "12px", fontWeight: 500, color: "#4A1B6B", letterSpacing: "0.5px", marginBottom: "14px" }}>
            {isAr ? "الأسعار" : "PRICING"}
          </div>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 28px)", fontWeight: 500, margin: "0 0 8px", color: "#2C1B4A", letterSpacing: "-0.5px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {isAr ? "خطط مبنية حول حجم إنتاجك" : "Plans built around how much you ship"}
          </h2>
          <p style={{ fontSize: "15px", color: "#5A4A6E", margin: 0, lineHeight: 1.6 }}>
            {isAr ? "باقات لحملات مستمرة. ثلاث فئات جودة، اختر ما يناسبك." : "Bundle up for ongoing campaigns. Three quality tiers, pick what fits."}
          </p>
        </div>

        {/* Toggles */}
        <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginBottom: "2.5rem", flexWrap: "wrap", alignItems: "center" }}>
          {/* Pack toggle */}
          <div style={{ display: "inline-flex", background: "rgba(255,255,255,0.6)", backdropFilter: "blur(8px)", padding: "4px", borderRadius: "999px", border: "0.5px solid rgba(255,255,255,0.8)", position: "relative" }}>
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
                {isAr ? `${p} فيديو` : `${p} videos`}
                {p !== 8 && (
                  <span style={{ position: "absolute", top: "-6px", right: "-4px", background: "#D4537E", color: "white", fontSize: "9px", padding: "2px 5px", borderRadius: "999px", fontWeight: 500 }}>
                    {p === 12 ? "-5%" : "-10%"}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Currency toggle */}
          <div style={{ display: "inline-flex", background: "rgba(255,255,255,0.6)", backdropFilter: "blur(8px)", padding: "4px", borderRadius: "999px", border: "0.5px solid rgba(255,255,255,0.8)" }}>
            {(["USD", "SAR"] as Currency[]).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                style={{
                  border: "none",
                  background: currency === c ? "#2C1B4A" : "transparent",
                  color: currency === c ? "white" : "#2C1B4A",
                  padding: "8px 16px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: 500,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "all .2s",
                }}
              >
                <span>{c === "USD" ? "$" : "﷼"}</span>{c}
              </button>
            ))}
          </div>
        </div>

        {/* Tier cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "18px", marginBottom: "1.5rem" }} className="pricing-grid">
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
                <div style={{ position: "absolute", top: "-10px", left: "50%", transform: "translateX(-50%)", background: "#2C1B4A", color: "white", fontSize: "11px", fontWeight: 500, padding: "4px 12px", borderRadius: "999px", letterSpacing: "0.4px", whiteSpace: "nowrap" }}>
                  {isAr ? "الأكثر طلباً" : "MOST POPULAR"}
                </div>
              )}

              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 500, color: "#2C1B4A", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{key}</h3>
              </div>
              <p style={{ fontSize: "13px", color: "#6E5E82", margin: "0 0 16px" }}>
                {isAr ? tierSubAr[key] : sub}
              </p>

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
                      {fmt(prices[pack][key][dur][currency], currency)}
                    </span>
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "8px 0" }}>
                  <span style={{ fontSize: "12px", color: "#6E5E82" }}>245s+</span>
                  <span style={{ fontSize: "13px", fontWeight: 500, color: "#6E5E82" }}>
                    {isAr ? "طلب عرض سعر" : "Get a quote"}
                  </span>
                </div>
              </div>

              <a
                href="https://form.typeform.com/to/o51YfOvB"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: "16px",
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
                {isAr
                  ? (key === "Core" ? "اختر Core ↗" : key === "Essential" ? "اختر Essential ↗" : "اختر Premium ↗")
                  : `Choose ${key} ↗`}
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
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
