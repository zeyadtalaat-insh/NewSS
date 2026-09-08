"use client";

import { useState } from "react";

const PRODUCTS = [
  {
    id: "commercials",
    tab: "AI Commercials",
    tag: "Video Production",
    title: "AI Commercials",
    desc: "Scroll-stopping video ads for your cafe — delivered in days. We write the script, build the visuals, add the voice, and deliver every platform cut your team needs. Whether you're running Instagram Reels, TikTok ads, or a YouTube pre-roll, we ship broadcast-quality content without a single crew member setting foot in your cafe.",
    chips: ["Full script included", "Instagram, TikTok, YouTube formats", "Revisions included"],
    videoId: "d104a24615054447bdb1f1d662b92b11",
  },
  {
    id: "avatars",
    tab: "AI Brand Avatars",
    tag: "Brand Identity",
    title: "AI Brand Avatars",
    desc: "Your cafe, personified. A custom AI brand character — your face, your voice, your vibe — that shows up on every platform, every week, without booking a shoot, hiring a model, or going on camera yourself. Consistent brand presence without the effort.",
    chips: ["Consistent Brand Voice", "24/7 Presence", "Fully Owned by You"],
    videoId: "35dd686bf0b744eca6b152c3f350e4b8",
  },
  {
    id: "photos",
    tab: "AI Photo Shoots",
    tag: "Visual Content",
    title: "AI Photo Shoots",
    desc: "Menu shots, product photography, and brand imagery — without closing your cafe for a shoot day. Send us your brief and we produce a full library of on-brand photos ready for your website, menus, Google Business Profile, and social. No booking. No setup. No disruption to your morning rush.",
    chips: ["Menu & product photography", "Google Business Profile-ready", "Delivered in days"],
    videoId: "e8ffd1e9a25a441c808025329b1832a7",
  },
];

export default function NAProductsSection() {
  const [activeId, setActiveId] = useState("commercials");
  const active = PRODUCTS.find((p) => p.id === activeId) || PRODUCTS[0];

  return (
    <section id="products" style={{ padding: "96px 0" }}>
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
            What We Make
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
            Everything your cafe needs{" "}
            <span className="gradient-text">to win on video.</span>
          </h2>
          <p
            style={{
              marginTop: "20px",
              fontSize: "17px",
              lineHeight: 1.65,
              color: "var(--text-2)",
              maxWidth: "620px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Three services built for food and beverage brands. Use one for a campaign
            sprint. Use all three for a complete content engine.
          </p>
        </div>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginBottom: "40px" }}>
          {PRODUCTS.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveId(p.id)}
              style={{
                fontFamily: "inherit",
                fontSize: "14px",
                fontWeight: 600,
                padding: "12px 22px",
                borderRadius: "999px",
                background: activeId === p.id ? "var(--gradient-brand)" : "var(--surface)",
                border: activeId === p.id ? "1px solid transparent" : "1px solid var(--border)",
                color: activeId === p.id ? "white" : "var(--text-2)",
                cursor: "pointer",
                transition: "all .2s",
                boxShadow: activeId === p.id ? "0 8px 24px rgba(184,145,197,0.3)" : "none",
              }}
            >
              {p.tab}
            </button>
          ))}
        </div>

        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "28px",
            padding: "48px",
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "56px",
            alignItems: "center",
            boxShadow: "var(--shadow-md)",
          }}
          className="product-card-grid"
        >
          <div>
            <div
              style={{
                display: "inline-block",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "7px 14px",
                borderRadius: "999px",
                background: "var(--warn-tint)",
                color: "var(--brand-rose)",
                marginBottom: "20px",
              }}
            >
              {active.tag}
            </div>
            <h3
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 800,
                lineHeight: 1.08,
                color: "var(--text)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {active.title}
            </h3>
            <p style={{ marginTop: "16px", fontSize: "16px", lineHeight: 1.65, color: "var(--text-2)" }}>
              {active.desc}
            </p>
            <div style={{ marginTop: "22px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {active.chips.map((chip) => (
                <span
                  key={chip}
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
                  {chip}
                </span>
              ))}
            </div>
            <div style={{ marginTop: "32px" }}>
              <a
                href="https://form.typeform.com/to/o51YfOvB"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "14px 26px",
                  borderRadius: "999px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                  textDecoration: "none",
                  background: "var(--text)",
                  color: "var(--bg)",
                  border: "1px solid transparent",
                  boxShadow: "var(--shadow-md)",
                  transition: "all .2s ease",
                }}
              >
                Book a Free Demo
              </a>
            </div>
          </div>
          <div
            style={{
              position: "relative",
              aspectRatio: "16/10",
              borderRadius: "18px",
              overflow: "hidden",
              background: "#0a0612",
              border: "1px solid var(--border)",
            }}
          >
            <iframe
              key={active.videoId}
              src={`https://www.loom.com/embed/${active.videoId}?hide_owner=true&hide_share=true&hide_title=true`}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .product-card-grid {
            grid-template-columns: 1fr !important;
            padding: 32px !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
