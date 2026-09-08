"use client";

import { useLanguage } from "../LanguageContext";
import { translations } from "@/lib/translations";

export default function WhoSection() {
  const { language } = useLanguage();
  const t = translations[language].academy;

  return (
    <section dir={language === "ar" ? "rtl" : "ltr"} className="relative z-10 max-w-[1100px] mx-auto px-10 py-[90px]">
      <p className="text-[11px] font-bold uppercase tracking-[3px] text-pink mb-3.5">
        {t.who.eyebrow}
      </p>
      <h2
        className="font-extrabold leading-[1.08] tracking-[-1px] mb-12"
        style={{
          fontSize: "clamp(28px,4vw,50px)",
          fontFamily: "'Plus Jakarta Sans',sans-serif",
        }}
      >
        {t.who.title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {t.who.cards.map((c) => (
          <div
            key={c.title}
            className="bg-[#160d18] border border-pink/20 rounded-2xl px-6 py-7 transition-all duration-200 hover:border-pink hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(232,38,122,0.1)]"
          >
            <div className="text-[30px] mb-3.5">{c.icon}</div>
            <div
              className="font-bold text-[16px] mb-1.5"
              style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
            >
              {c.title}
            </div>
            <div className="text-[13px] text-white/55 leading-[1.6]">
              {c.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
