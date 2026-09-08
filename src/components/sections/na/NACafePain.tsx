"use client";

const PAIN_POINTS = [
  {
    icon: "📵",
    title: "You're invisible on Instagram and TikTok",
    desc: "People discover new cafes through video. If you're not showing up with polished content, you don't exist to the 30-year-old choosing between you and the spot two blocks away.",
  },
  {
    icon: "💸",
    title: "A video shoot costs thousands and takes weeks",
    desc: "A professional video agency will quote you $5,000–$15,000 for a single cafe ad. Then they need three weeks and a production crew just to make a 30-second spot.",
  },
  {
    icon: "📱",
    title: "Your phone camera isn't cutting it",
    desc: "You know it, your customers know it. User-generated content works for some businesses. For a cafe trying to build a premium brand, it sends the wrong signal.",
  },
];

export default function NACafePain() {
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
            Why Most Cafes Lose on Social
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
            Your coffee is great.{" "}
            <span className="gradient-text">Your content is losing you customers.</span>
          </h2>

          <p
            style={{
              marginTop: "20px",
              fontSize: "17px",
              lineHeight: 1.65,
              color: "var(--text-2)",
            }}
          >
            Every day your competitors post scroll-stopping video content and you're
            posting a blurry phone photo. Here's what that's actually costing you.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="cafe-pain-grid"
        >
          {PAIN_POINTS.map((point, i) => (
            <div
              key={i}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "22px",
                padding: "36px 32px",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div style={{ fontSize: "36px", marginBottom: "20px" }}>{point.icon}</div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  lineHeight: 1.3,
                  color: "var(--text)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  marginBottom: "12px",
                }}
              >
                {point.title}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.65,
                  color: "var(--text-2)",
                  margin: 0,
                }}
              >
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cafe-pain-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
