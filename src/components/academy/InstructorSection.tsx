"use client";

import { useLanguage } from "../LanguageContext";
import { translations } from "@/lib/translations";

export default function InstructorSection() {
  const { language } = useLanguage();
  const t = translations[language].academy;

  return (
    <section dir={language === "ar" ? "rtl" : "ltr"} className="relative z-10 max-w-[1100px] mx-auto px-10 py-[90px]">
      <p className="text-[11px] font-bold uppercase tracking-[3px] text-pink mb-3.5">
        {t.instructor.eyebrow}
      </p>
      <h2
        className="font-extrabold leading-[1.08] tracking-[-1px] mb-4"
        style={{
          fontSize: "clamp(28px,4vw,50px)",
          fontFamily: "'Plus Jakarta Sans',sans-serif",
        }}
      >
        {t.instructor.title}
      </h2>
      <p className="text-[16px] text-white/55 leading-[1.7] max-w-[560px] mb-12">
        {t.instructor.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 items-start">
        {/* Avatar */}
        <div
          className="w-[220px] h-[260px] rounded-[20px] overflow-hidden border-2 border-pink/20 flex items-center justify-center text-[72px] shrink-0"
          style={{ background: "linear-gradient(145deg, #1e1022, #160d18)" }}
        >
          🎬
        </div>

        {/* Info */}
        <div>
          <div
            className="font-extrabold text-[28px] mb-1.5"
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
          >
            {t.instructor.name}
          </div>
          <div className="text-pink text-[14px] font-semibold tracking-[0.5px] mb-4">
            {t.instructor.role}
          </div>
          <p className="text-[15px] text-white/55 leading-[1.75] mb-4">
            {t.instructor.bio1}
          </p>
          <p className="text-[15px] text-white/55 leading-[1.75] mb-6">
            {t.instructor.bio2}
          </p>

          <div className="flex flex-wrap gap-7">
            {t.instructor.stats.map((s) => (
              <div key={s.label}>
                <div
                  className="text-[26px] font-extrabold text-pink leading-none"
                  style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
                >
                  {s.num}
                </div>
                <div className="text-[12px] text-white/50 mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
