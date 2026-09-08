"use client";

import { useLanguage } from "../LanguageContext";
import { translations } from "@/lib/translations";

export default function ProblemSection() {
  const { language } = useLanguage();
  const t = translations[language].academy;

  return (
    <section dir={language === "ar" ? "rtl" : "ltr"} className="relative z-10 max-w-[1100px] mx-auto px-10 py-[90px]">
      <p className="text-[11px] font-bold uppercase tracking-[3px] text-pink mb-3.5">
        {t.problem.eyebrow}
      </p>
      <h2
        className="font-extrabold leading-[1.08] tracking-[-1px] mb-4"
        style={{
          fontSize: "clamp(28px,4vw,50px)",
          fontFamily: "'Plus Jakarta Sans',sans-serif",
        }}
      >
        {t.problem.title}
      </h2>
      <p className="text-[16px] text-white/55 leading-[1.7] max-w-[560px] mb-12">
        {t.problem.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {t.problem.items.map((p) => (
          <div
            key={p.title}
            className="bg-[#160d18] border border-pink/10 rounded-2xl p-6 flex gap-3.5 items-start"
          >
            <span className="text-[#ff4466] text-xl mt-0.5 shrink-0">✗</span>
            <div className="text-[14px] text-white/55 leading-[1.6]">
              <strong className="text-white block text-[15px] mb-1">
                {p.title}
              </strong>
              {p.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
