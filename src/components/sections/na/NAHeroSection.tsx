"use client";

import { useState } from "react";

export default function NAHeroSection() {
  const [muted, setMuted] = useState(true);

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "80px 0 100px",
        background: "var(--bg)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          background: `
            radial-gradient(800px 500px at 10% 20%, rgba(107,127,208,0.12), transparent 60%),
            radial-gradient(700px 500px at 90% 30%, rgba(216,142,168,0.10), transparent 60%),
            radial-gradient(600px 400px at 50% 100%, rgba(184,145,197,0.08), transparent 60%)
          `,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 28px",
          display: "grid",
          gridTemplateColumns: "1.15fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
        className="hero-grid"
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
            {"Canada's #1 AI Video Agency for Cafes"}
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 6vw, 84px)",
              fontWeight: 800,
              lineHeight: 1.02,
              marginTop: "22px",
              letterSpacing: "-0.035em",
              color: "var(--text)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Your cafe deserves ads that make{" "}
            <span className="gradient-text">people stop scrolling.</span>
          </h1>

          <p
            style={{
              marginTop: "24px",
              maxWidth: "540px",
              fontSize: "17px",
              lineHeight: 1.65,
              color: "var(--text-2)",
            }}
          >
            Professional video commercials, brand avatars, and product photography
            for Canadian cafes — delivered in 1–5 days, starting at $624. No crew.
            No studio. No agency fees.
          </p>

          <div style={{ marginTop: "28px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {[
              "From 1-day delivery",
              "Starting at $624 per video",
              "No crew or studio needed",
              "200+ brands served",
            ].map((b) => (
              <span
                key={b}
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "var(--text-2)",
                  padding: "8px 14px",
                  borderRadius: "999px",
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                }}
              >
                {b}
              </span>
            ))}
          </div>

          <div style={{ marginTop: "36px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="https://form.typeform.com/to/o51YfOvB"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 26px",
                borderRadius: "999px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                cursor: "pointer",
                border: "1px solid transparent",
                textDecoration: "none",
                transition: "all .2s ease",
                background: "var(--gradient-brand)",
                color: "white",
                boxShadow: "0 10px 30px rgba(107,127,208,0.25)",
              }}
            >
              Book a Free 30-Min Demo
            </a>
            <a
              href="#portfolio"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 26px",
                borderRadius: "999px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                cursor: "pointer",
                textDecoration: "none",
                transition: "all .2s ease",
                background: "transparent",
                color: "var(--text)",
                border: "1px solid var(--border-strong)",
              }}
            >
              See Our Work ↓
            </a>
          </div>

          <div style={{ marginTop: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ display: "flex", gap: "2px" }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--brand-rose)">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span style={{ fontSize: "13px", color: "var(--text-2)", fontWeight: 600 }}>
              5.0 Rating · 200+ brands served
            </span>
          </div>
        </div>

        <div style={{ position: "relative", justifySelf: "center", width: "320px", aspectRatio: "9/16" }}>
          <div
            style={{
              position: "absolute",
              zIndex: 3,
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "14px",
              padding: "10px 14px",
              boxShadow: "var(--shadow-md)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "12px",
              top: "-14px",
              left: "-16px",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "var(--warn-tint)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--brand-rose)">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: "11px", lineHeight: 1, color: "var(--text)" }}>5.0 Rating</div>
              <div style={{ fontSize: "10px", color: "var(--muted)", marginTop: "3px" }}>from 200+ clients</div>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "44px",
              overflow: "hidden",
              background: "#0a0612",
              border: "1px solid var(--border-strong)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "80px",
                height: "6px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.12)",
                zIndex: 2,
              }}
            />
            <iframe
              key={muted ? "muted" : "unmuted"}
              src={`https://www.loom.com/embed/fce24a36a0fd4033865d7dc8d24c2e4c?autoplay=1&muted=${muted ? 1 : 0}&hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`}
              title="Watch our reel"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <button
              onClick={() => setMuted((m) => !m)}
              style={{
                position: "absolute",
                bottom: "16px",
                right: "16px",
                zIndex: 30,
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                borderRadius: "999px",
                background: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white",
                fontSize: "10px",
                fontWeight: 600,
                cursor: "pointer",
              }}
              aria-label={muted ? "Unmute" : "Mute"}
            >
              {muted ? "Tap for sound" : "Mute"}
            </button>
          </div>

          <div
            style={{
              position: "absolute",
              zIndex: 3,
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "14px",
              padding: "10px 14px",
              boxShadow: "var(--shadow-md)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "12px",
              bottom: "-14px",
              right: "-16px",
            }}
          >
            <div style={{ position: "relative", width: "8px", height: "8px" }}>
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#4CD08C" }} />
              <div
                className="animate-pulse-live"
                style={{
                  position: "absolute",
                  inset: "-2px",
                  borderRadius: "50%",
                  border: "1.5px solid #4CD08C",
                  opacity: 0.5,
                }}
              />
            </div>
            <span style={{ fontWeight: 600, fontSize: "11px", color: "var(--text)" }}>Available now</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
