"use client";
import { useState } from "react";

import { useLanguage } from "../../LanguageContext";
import { translations } from "@/lib/translations";

export default function EarningsSection() {
  const { language } = useLanguage();
  const t = translations[language].partner;
  const cards = t.earnings.cards;
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      className="relative z-10 border-t border-b border-white/8 px-4 sm:px-10 lg:px-16 py-20 overflow-hidden"
      style={{ background: "linear-gradient(135deg,#1a0f28 0%,#0f1a22 100%)" }}
    >
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse,rgba(240,180,41,0.08) 0%,transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Text */}
        <div>
          <h2
            className="font-extrabold leading-[1.08] tracking-[-1.5px] mb-4 text-[clamp(32px,4vw,50px)]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#f5f0fa" }}
          >
            {t.earnings.title}
            <br />
            <span className="text-gold">{t.earnings.titleAccent}</span>
          </h2>
          <p className="text-base text-white/50 leading-[1.8] mb-6">
            {t.earnings.description}
          </p>
          <div className="text-xs text-white/25 leading-relaxed pt-4 border-t border-white/8">
            {t.earnings.disclaimer}
          </div>
        </div>

        {/* Right: Cards */}
        <div className="flex flex-col gap-3 max-w-2xl">
          {cards.map((card, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className="flex items-center justify-between gap-5 rounded-2xl px-6 py-5 cursor-default transition-all duration-200"
              style={{
                background:
                  hoveredCard === i
                    ? "rgba(240,180,41,0.04)"
                    : "rgba(255,255,255,0.04)",
                border: `1px solid ${hoveredCard === i ? "rgba(240,180,41,0.3)" : "rgba(255,255,255,0.08)"}`,
              }}
            >
              <div className="min-w-0">
                <strong className="block text-[15px] font-bold text-white/90 mb-0.5">
                  {card.scenarioTitle}
                </strong>
                <span className="text-sm text-white/50 leading-snug">
                  {card.scenarioDesc}
                </span>
              </div>
              <div className="text-right shrink-0">
                <div
                  className="font-extrabold text-xl text-gold"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {card.amount}
                </div>
                <div className="text-[11px] text-white/25 uppercase tracking-widest mt-0.5">
                  {card.period}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
