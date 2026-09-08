"use client";

import { useLanguage } from "../LanguageContext";
import { translations } from "@/lib/translations";

export default function CurriculumSection() {
  const { language } = useLanguage();
  const t = translations[language].academy;

  return (
    <section
      dir={language === "ar" ? "rtl" : "ltr"}
      id="curriculum"
      className="relative z-10 max-w-[1100px] mx-auto px-10 py-[90px]"
    >
      <p className="text-[11px] font-bold uppercase tracking-[3px] text-pink mb-3.5">
        {t.curriculum.eyebrow}
      </p>
      <h2
        className="font-extrabold leading-[1.08] tracking-[-1px] mb-4"
        style={{
          fontSize: "clamp(28px,4vw,50px)",
          fontFamily: "'Plus Jakarta Sans',sans-serif",
        }}
      >
        {t.curriculum.title}
      </h2>
      <p className="text-[16px] text-white/55 leading-[1.7] max-w-[560px] mb-12">
        {t.curriculum.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {t.curriculum.modules.map((m) => (
          <div
            key={m.num}
            className="bg-[#160d18] border border-pink/20 rounded-2xl p-6 flex gap-4 items-start transition-colors duration-200 hover:border-pink/50"
          >
            <div
              className="text-pink bg-pink/10 border border-pink/20 rounded-lg px-2.5 py-1.5 text-[12px] font-extrabold min-w-[38px] text-center flex-shrink-0"
              style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
            >
              {m.num}
            </div>
            <div>
              <div
                className="font-bold text-[14px] mb-1.5"
                style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
              >
                {m.title}
              </div>
              <div className="text-[13px] text-white/55 leading-[1.6]">
                {m.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bonus */}
      <div className="mt-12 bg-[#160d18] border border-pink rounded-[20px] p-10 flex flex-col sm:flex-row gap-8 items-start">
        <div>
          <span className="bg-pink text-white font-extrabold text-[11px] tracking-[2px] px-3.5 py-1.5 rounded-full">
            {t.curriculum.bonus.badge}
          </span>
          <div
            className="font-extrabold text-[22px] mt-3 mb-2"
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
          >
            {t.curriculum.bonus.title}
          </div>
          <div className="text-[14px] text-white/55 leading-[1.7]">
            {t.curriculum.bonus.desc}
          </div>
        </div>
      </div>
    </section>
  );
}
