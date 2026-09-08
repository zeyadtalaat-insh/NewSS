"use client";

const STATS = [
  {
    v: "29,000+",
    title: "Cafes and coffee shops in Canada competing for attention",
    desc: "The Canadian cafe market is crowded. Video content is one of the fastest ways to differentiate on social and turn a browser into a regular.",
    source: "Statistics Canada / IBISWorld",
  },
  {
    v: "91%",
    title: "Of consumers say video content influences their purchasing decisions",
    desc: "A polished 30-second video of your latte art and ambiance does more for a new customer than a hundred static posts.",
    source: "Wyzowl Video Marketing Statistics 2025",
  },
  {
    v: "$624",
    title: "Starting price for a broadcast-quality AI video ad",
    desc: "What used to cost $10,000+ and take three weeks now ships in 1–5 days. Cafes that used to be priced out of professional video production no longer are.",
    source: "Super Studios AI pricing",
  },
  {
    v: "3x",
    title: "Higher engagement on video vs. static posts on Instagram and TikTok",
    desc: "Your menu photo gets a like. Your video ad gets a share, a save, and a new customer walking through the door.",
    source: "Meta / TikTok for Business benchmarks",
  },
  {
    v: "73%",
    title: "Of small business owners say producing content consistently is their #1 marketing challenge",
    desc: "It's not lack of strategy. It's production bandwidth. That's exactly what we solve.",
    source: "Hootsuite Small Business Report 2025",
  },
  {
    v: "#1",
    title: "AI video production studio for cafes in Canada",
    desc: "Built specifically for food and beverage brands that want professional content without agency pricing.",
    source: "Super Studios AI positioning",
  },
];

export default function NAWhyNow() {
  return (
    <section style={{ padding: "96px 0", background: "var(--bg-section)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 28px" }}>
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 56px" }}>
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
            The Opportunity
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
            Why Canadian cafes that invest in video{" "}
            <span className="gradient-text">are pulling ahead right now</span>
          </h2>
          <p
            style={{
              marginTop: "20px",
              fontSize: "17px",
              lineHeight: 1.65,
              color: "var(--text-2)",
            }}
          >
            The numbers behind why your content strategy matters more than you think.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
          className="why-now-grid"
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "18px",
                padding: "32px 28px",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div
                className="gradient-text"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(36px, 4vw, 56px)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  marginBottom: "12px",
                }}
              >
                {s.v}
              </div>
              <h4
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "var(--text)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  marginBottom: "10px",
                  lineHeight: 1.4,
                }}
              >
                {s.title}
              </h4>
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--text-2)",
                  lineHeight: 1.6,
                  marginBottom: "12px",
                }}
              >
                {s.desc}
              </p>
              <div
                style={{
                  fontSize: "10px",
                  color: "var(--muted)",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                }}
              >
                Source: {s.source}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-now-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .why-now-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
