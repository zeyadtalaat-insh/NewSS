"use client";
import { useState } from "react";
import Eyebrow from "@/components/ui/Eyebrow";
import { useLanguage } from "../../LanguageContext";
import { translations } from "@/lib/translations";

export default function FAQSection() {
  const { language } = useLanguage();
  const t = translations[language].partner;
  const faqs = t.faq.items;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      dir={language === "ar" ? "rtl" : "ltr"}
      style={{
        position: "relative",
        zIndex: 1,
        maxWidth: 1160,
        margin: "0 auto",
        padding: "20px 60px 100px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Eyebrow>{t.faq.eyebrow}</Eyebrow>
        <h2
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(32px,4vw,54px)",
            lineHeight: 1.06,
            letterSpacing: "-1.5px",
            marginBottom: 18,
            color: "#f5f0fa",
          }}
        >
          {t.faq.title}
        </h2>
      </div>

      <div
        style={{
          marginTop: 56,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {faqs.map((faq, i) => (
          <div
            key={i}
            style={{
              background: "#181220",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            <div
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                padding: "22px 28px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                background:
                  open === i ? "rgba(255,255,255,0.02)" : "transparent",
                fontWeight: 600,
                fontSize: 15,
                gap: 16,
                transition: "background 0.15s",
                color: "#f5f0fa",
              }}
            >
              <span>{faq.q}</span>
              <span
                style={{
                  fontSize: 20,
                  flexShrink: 0,
                  lineHeight: 1,
                  color: open === i ? "#e8267a" : "rgba(245,240,250,0.28)",
                  transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.25s, color 0.25s",
                }}
              >
                +
              </span>
            </div>
            <div
              style={{
                maxHeight: open === i ? 300 : 0,
                overflow: "hidden",
                transition: "max-height 0.35s ease",
                fontSize: 14,
                color: "rgba(245,240,250,0.52)",
                lineHeight: 1.75,
              }}
            >
              <div style={{ padding: "0 28px 22px" }}>{faq.a}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
