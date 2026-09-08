"use client";

const STAT_BLOCKS = [
  {
    v: "29,000+",
    label: "Canadian cafes competing for the same customers",
    desc: "Standing out requires more than great coffee. It requires showing up on the platforms where your customers spend their time — consistently and professionally.",
  },
  {
    v: "Starting at $624",
    label: "Per broadcast-quality video",
    desc: "What agencies charge $10,000+ for, we deliver from $624. Platform cuts included. Revisions included. Files yours to keep.",
  },
  {
    v: "#1",
    label: "AI video studio for Canadian cafes",
    desc: "Purpose-built for food and beverage. No generic templates. No one-size-fits-all scripts. We write for your menu, your vibe, and your customers.",
  },
];

export default function NAWhyItWorks() {
  return (
    <section style={{ padding: "96px 0", background: "var(--bg)" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 28px",
          display: "grid",
          gridTemplateColumns: "1.05fr 1fr",
          gap: "64px",
          alignItems: "center",
        }}
        className="why-works-grid"
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--muted)",
              border: "1px solid var(--border)",
              background: "var(--surface)",
              padding: "8px 16px",
              borderRadius: "999px",
              marginBottom: "22px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--gradient-brand)",
                display: "inline-block",
              }}
            />
            Why It Works
          </div>
          <h2
            style={{
              fontSize: "clamp(34px, 4.5vw, 56px)",
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            The cafe across the street{" "}
            <span className="gradient-text">is already doing this.</span>
          </h2>
          <p style={{ marginTop: "22px", fontSize: "16px", lineHeight: 1.7, color: "var(--text-2)" }}>
            The barrier to professional video content for small businesses is gone. AI
            production means a single-location cafe in Vancouver and a growing chain in
            Toronto can both run the same quality of content — on the same timeline and
            at a price that actually makes sense for their margins.
          </p>
          <p style={{ marginTop: "14px", fontSize: "15px", lineHeight: 1.7, color: "var(--text-2)" }}>
            The cafes winning on social right now aren't the ones with the biggest
            budgets. They're the ones showing up consistently with video that looks and
            sounds professional. We built Super Studios AI to give every cafe that same
            capability.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {STAT_BLOCKS.map((s) => (
            <div
              key={s.v}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "18px",
                padding: "26px 28px",
                display: "flex",
                gap: "22px",
                alignItems: "flex-start",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div
                className="gradient-text"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(24px, 3vw, 36px)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  whiteSpace: "nowrap",
                  minWidth: "120px",
                  flexShrink: 0,
                }}
              >
                {s.v}
              </div>
              <div>
                <h4
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "var(--text)",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    marginBottom: "6px",
                  }}
                >
                  {s.label}
                </h4>
                <p style={{ fontSize: "13px", color: "var(--text-2)", lineHeight: 1.55, margin: 0 }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-works-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
