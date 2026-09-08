"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Do you need to come to my cafe to film anything?",
    a: "No. We work entirely remotely. If you have existing photos or footage you want us to incorporate, you can send them over. Otherwise, we build everything from scratch on our end — no on-site shoot required.",
  },
  {
    q: "How fast do you actually deliver?",
    a: "Most projects ship in 1–5 business days from an approved brief. A 30-second cafe commercial with three platform cuts is typically 3 days end-to-end.",
  },
  {
    q: "What do I need to provide to get started?",
    a: "Just a brief — what you're promoting, who your customers are, and the look and feel you want. A 15-minute call or a short form is enough. We handle everything from there.",
  },
  {
    q: "Can you match my existing brand aesthetic?",
    a: "Yes. Share any brand guidelines, colour palettes, or examples you like and we'll match them. If you don't have formal guidelines, we'll build from your existing social presence and ask a few questions to get aligned.",
  },
  {
    q: "Who owns the videos you produce?",
    a: "You do — full commercial rights, source files included, no recurring license fees on any creative output we make for you.",
  },
  {
    q: "Do you work with single-location cafes or only chains?",
    a: "Both. Our pricing and process works for a single neighbourhood cafe running its first ad campaign just as well as a small chain managing multiple locations. The quality and turnaround are the same regardless of size.",
  },
];

export default function NAFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" style={{ padding: "96px 0", background: "var(--bg)" }}>
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
            FAQ
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
            Questions from cafe owners
          </h2>
        </div>

        <div style={{ maxWidth: "760px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "12px" }}>
          {FAQS.map((faq, i) => (
            <div
              key={i}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "22px 26px",
                  background: "transparent",
                  border: 0,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "var(--text)",
                  textAlign: "left",
                  cursor: "pointer",
                }}
              >
                <span>{faq.q}</span>
                <span
                  style={{
                    fontSize: "22px",
                    color: "var(--brand-rose)",
                    transform: openIndex === i ? "rotate(45deg)" : "rotate(0)",
                    transition: "transform .25s",
                    flexShrink: 0,
                    marginLeft: "16px",
                  }}
                >
                  +
                </span>
              </button>
              <div
                style={{
                  maxHeight: openIndex === i ? "400px" : 0,
                  overflow: "hidden",
                  transition: "max-height .3s ease",
                  padding: openIndex === i ? "0 26px 22px" : "0 26px",
                  color: "var(--text-2)",
                  fontSize: "15px",
                  lineHeight: 1.65,
                }}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
