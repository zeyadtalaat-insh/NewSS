"use client";

export default function NABooking() {
  return (
    <section id="book" style={{ padding: "96px 0", background: "var(--bg-section)" }}>
      <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 28px", textAlign: "center" }}>
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
            marginBottom: "28px",
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
          Book a Call
        </div>

        <h2
          style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "var(--text)",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            marginBottom: "14px",
          }}
        >
          Ready to see what your cafe looks like{" "}
          <span className="gradient-text">with great content?</span>
        </h2>

        <p
          style={{
            fontSize: "16px",
            color: "var(--text-2)",
            margin: "0 auto 40px",
            lineHeight: 1.75,
            maxWidth: "580px",
          }}
        >
          In 30 minutes, we'll show you exactly what AI production looks like for your
          cafe — with examples relevant to your market, real timelines, and real
          pricing. No commitment required.
        </p>

        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "24px",
            padding: "56px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            boxShadow: "var(--shadow-md)",
            maxWidth: "680px",
            margin: "0 auto",
          }}
        >
          <div style={{ fontSize: "44px", marginBottom: "8px" }}>📅</div>

          <div
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "22px",
              color: "var(--text)",
              marginBottom: "8px",
            }}
          >
            Book a Free 30-Minute Demo
          </div>

          <p
            style={{
              fontSize: "14px",
              color: "var(--text-2)",
              maxWidth: "420px",
              lineHeight: 1.7,
              marginBottom: "24px",
            }}
          >
            Walk away knowing exactly what your first video will look like, how fast it
            ships, and what it costs.
          </p>

          <a
            href="https://form.typeform.com/to/o51YfOvB"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "14px 40px",
              borderRadius: "999px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "15px",
              textDecoration: "none",
              background: "var(--gradient-brand)",
              color: "white",
              border: "1px solid transparent",
              boxShadow: "0 10px 30px rgba(107,127,208,0.3)",
              transition: "all .2s ease",
            }}
          >
            Reserve Your Spot →
          </a>
        </div>
      </div>
    </section>
  );
}
