"use client";

import { useLanguage } from "../LanguageContext";
import { translations } from "@/lib/translations";

export default function ROISection() {
  const { language } = useLanguage();
  const t = translations[language].academy;

  return (
    <section dir={language === "ar" ? "rtl" : "ltr"} className="relative z-10 max-w-[1100px] mx-auto px-10 py-[90px]">
      <p className="text-[11px] font-bold uppercase tracking-[3px] text-pink mb-3.5">
        {t.roi.eyebrow}
      </p>

      <div
        className="rounded-[20px] p-12 grid grid-cols-1 md:grid-cols-2 gap-14 items-center border border-pink"
        style={{
          background:
            "linear-gradient(135deg, #1e1022 0%, rgba(232,38,122,0.07) 100%)",
        }}
      >
        {/* Left */}
        <div>
          <h2
            className="font-extrabold leading-[1.1] tracking-[-1px] mb-4"
            style={{
              fontSize: "clamp(26px,3.5vw,42px)",
              fontFamily: "'Plus Jakarta Sans',sans-serif",
            }}
          >
            {t.roi.title}
            <br />
            <span className="text-pink">{t.roi.titleAccent}</span>
          </h2>
          <p className="text-[15px] text-white/55 leading-[1.7] mb-6">
            {t.roi.description}
          </p>
          <a
            href="https://form.typeform.com/to/gSnHEJ77"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink hover:bg-pink-400 text-white font-bold px-10 py-[18px] rounded-full text-[16px] transition-all duration-200 hover:-translate-y-0.5 shadow-[0_0_48px_rgba(232,38,122,0.35)]"
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
          >
            {t.roi.ctaPrimary}
          </a>
        </div>

        {/* Right */}
        <div>
          <div className="bg-black/60 border border-pink/20 rounded-2xl px-7 py-6">
            {t.roi.rows.map((r) => (
              <div
                key={r.label}
                className="flex justify-between items-center py-2.5 border-b border-pink/8 text-[14px]"
              >
                <span className="text-white/55">{r.label}</span>
                <span
                  className="font-bold"
                  style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
                >
                  {r.val}
                </span>
              </div>
            ))}
            <div className="flex justify-between items-center pt-3.5 mt-1.5 text-[14px]">
              <span className="font-semibold text-white">
                {t.roi.returnLabel}
              </span>
              <span
                className="font-bold text-pink text-[18px]"
                style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
              >
                {t.roi.returnVal}
              </span>
            </div>
          </div>
          <p className="text-[12px] text-white/40 mt-3 leading-[1.6]">
            {t.roi.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
