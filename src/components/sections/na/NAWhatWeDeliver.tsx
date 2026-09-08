"use client";

const ROWS = [
  {
    feat: "Starting at 1-Day Delivery",
    benefit: "Most projects ship in 1–5 business days from approved brief. Post a new ad this week, not next quarter.",
  },
  {
    feat: "Starting at $624 Per Video",
    benefit: "A traditional video agency charges $10,000+ for a single cafe commercial. We deliver the same output for a fraction of that — with no hidden line items.",
  },
  {
    feat: "No Crew in Your Cafe",
    benefit: "No disrupting your morning rush. No closing for a shoot day. No equipment taking over your tables. We work entirely from our end.",
  },
  {
    feat: "Every Platform Format Included",
    benefit: "Every project ships with cuts sized for Instagram Reels, TikTok, YouTube Shorts, Facebook, and Google Display. No re-editing fees, no extra invoices.",
  },
  {
    feat: "Unlimited Content Variations",
    benefit: "Swap the seasonal special, update the CTA, test a new offer. Change your content without changing your production budget.",
  },
  {
    feat: "Fixed Pricing, No Surprises",
    benefit: "We quote upfront. No hourly billing, no change orders mid-project, no 'that wasn't in scope' conversations.",
  },
  {
    feat: "Your Cafe, Your Brand",
    benefit: "We write copy in your brand voice. We match your aesthetic. You review before anything goes live. You own every file we produce.",
  },
  {
    feat: "Works for Any Size Cafe",
    benefit: "Single location, small chain, or franchise — same quality, same process, same pricing. No minimum commitment.",
  },
];

export default function NAWhatWeDeliver() {
  return (
    <section style={{ padding: "96px 0", background: "var(--bg-section)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 28px" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
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
            What You Get
          </div>
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 68px)",
              fontWeight: 800,
              lineHeight: 1.04,
              marginTop: "20px",
              letterSpacing: "-0.03em",
              color: "var(--text)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            What Super Studios AI delivers{" "}
            <span className="gradient-text">for your cafe</span>
          </h2>
        </div>

        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "28px",
            overflow: "hidden",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
              padding: "18px 32px",
              background: "var(--surface-2)",
              borderBottom: "1px solid var(--border)",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            <span style={{ color: "var(--brand-blue)" }}>What You Get</span>
            <span style={{ color: "var(--muted)" }}>Why It Matters</span>
          </div>
          {ROWS.map((row, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "24px",
                padding: "22px 32px",
                borderBottom: i < ROWS.length - 1 ? "1px solid var(--border)" : "none",
                alignItems: "center",
                transition: "background .2s",
              }}
              className="deliver-row-hover"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "var(--text)",
                }}
              >
                <span style={{ color: "var(--brand-rose)", fontSize: "16px", flexShrink: 0 }}>◎</span>
                {row.feat}
              </div>
              <div style={{ color: "var(--text-2)", fontSize: "15px", lineHeight: 1.55 }}>
                {row.benefit}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .deliver-row-hover:hover { background: var(--surface-2); }
        @media (max-width: 700px) {
          .deliver-row-hover { grid-template-columns: 1fr !important; gap: 8px !important; padding: 18px 22px !important; }
        }
      `}</style>
    </section>
  );
}
