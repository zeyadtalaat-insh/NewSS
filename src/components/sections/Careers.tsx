"use client";

import { useLanguage } from "../LanguageContext";
import { translations } from "@/lib/translations";

export default function Careers() {
  const { language } = useLanguage();
  const t = translations[language].partner.careers;

  return (
    <section
      className="relative z-1 max-w-[1160px] mx-auto px-6 lg:px-[60px] py-24"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <h2
        className="font-extrabold text-[clamp(32px,4vw,54px)] leading-[1.06] tracking-[-1.5px] text-center mb-4"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {t.title}
      </h2>

      <p className="text-base text-white/50 leading-[1.75] text-center max-w-[560px] mx-auto mb-14">
        {t.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {t.jobs.map((job) => (
          <div
            key={job.title}
            className="bg-[#181220] border border-white/8 rounded-[18px] p-9 transition-all duration-250 hover:border-[rgba(232,38,122,0.25)] hover:-translate-y-1"
          >
            <div className="inline-block bg-white/6 border border-white/8 rounded-full px-3.5 py-1 text-[11px] text-white/50 font-semibold uppercase tracking-[1px] mb-4">
              {job.location}
            </div>

            <div
              className="font-extrabold text-[22px] text-pink mb-3"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {job.title}
            </div>

            <p className="text-[13px] text-white/50 leading-[1.7] mb-6">
              {job.desc}
            </p>

            <a
              href="https://form.typeform.com/to/AsJLdqH2"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink text-white border-none px-7 py-[11px] rounded-full font-bold text-[13px] cursor-pointer transition-all duration-200 hover:bg-[#f04d97] hover:-translate-y-0.5 inline-flex items-center gap-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {t.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
