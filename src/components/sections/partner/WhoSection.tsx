"use client";
import { useState } from "react";
import Eyebrow from "@/components/ui/Eyebrow";

import { useLanguage } from "../../LanguageContext";
import { translations } from "@/lib/translations";

export default function WhoSection() {
  const { language } = useLanguage();
  const t = translations[language].partner;
  const cards = t.who.cards;
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section dir={language === "ar" ? "rtl" : "ltr"} className="relative px-4 sm:px-6 lg:px-10 xl:px-20 py-20 space-y-10">
      <div style={{ textAlign: "center" }}>
        <Eyebrow>{t.who.eyebrow}</Eyebrow>
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
          {t.who.title}
          <br />
          <span style={{ color: "#e8267a" }}>{t.who.titleAccent}</span>
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "rgba(245,240,250,0.52)",
            lineHeight: 1.75,
            maxWidth: 560,
            margin: "0 auto",
          }}
        >
          {t.who.description}
        </p>
      </div>

      {/* <div className="flex flex-col lg:flex-row gap-8"> */}
      <div className="flex justify-center items-center">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch">
          {cards.map((card, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="min-w-[250px] max-w-[420px] flex-1 lg:flex-1"
              style={{
                background: "#181220",
                border: `1px solid ${hovered === i ? "rgba(232,38,122,0.25)" : "rgba(255,255,255,0.08)"}`,
                borderRadius: 18,
                padding: "32px 28px",
                transition: "border-color 0.2s",
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 18 }}>{card.icon}</div>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: 18,
                  marginBottom: 10,
                  color: "#f5f0fa",
                }}
              >
                {card.type}
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "rgba(245,240,250,0.52)",
                  lineHeight: 1.7,
                  marginBottom: 18,
                }}
              >
                {card.desc}
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  borderRadius: 100,
                  padding: "4px 14px",
                  fontSize: 12,
                  fontWeight: 600,
                  background:
                    i % 2 === 0
                      ? "rgba(240,180,41,0.08)"
                      : "rgba(232,38,122,0.08)",
                  border: `1px solid ${i % 2 === 0 ? "rgba(240,180,41,0.3)" : "rgba(232,38,122,0.25)"}`,
                  color: i % 2 === 0 ? "#f0b429" : "#e8267a",
                }}
              >
                {card.tier}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
