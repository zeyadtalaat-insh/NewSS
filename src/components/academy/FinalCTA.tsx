"use client";

import { useLanguage } from "../LanguageContext";
import { translations } from "@/lib/translations";

export default function FinalCTA() {
  const { language } = useLanguage();
  const t = translations[language].academy;

  return (
    <section dir={language === "ar" ? "rtl" : "ltr"} className="relative z-10 text-center px-10 py-[90px] pb-[130px] max-w-[800px] mx-auto">
      <div className="inline-flex items-center gap-2 bg-pink-900/20 border border-pink/20 rounded-full px-5 py-2 text-[13px] font-medium text-pink-400 mb-7 mx-auto">
        <span className="w-[7px] h-[7px] rounded-full bg-pink animate-pulse" />
        {t.finalCta.badge}
      </div>

      <h2
        className="font-extrabold leading-[1.05] tracking-[-1.5px] mb-5"
        style={{
          fontSize: "clamp(32px,5vw,62px)",
          fontFamily: "'Plus Jakarta Sans',sans-serif",
        }}
      >
        {t.finalCta.title}
        <br />
        <span className="text-pink">
          {t.finalCta.titleAccent}
        </span>
      </h2>

      <p className="text-[17px] text-white/55 leading-[1.7] mb-9 max-w-[600px] mx-auto">
        {t.finalCta.description}
      </p>

      <a
        href="https://form.typeform.com/to/gSnHEJ77"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink hover:bg-pink-400 text-white font-bold px-[52px] py-5 rounded-full text-[16px] transition-all duration-200 hover:-translate-y-0.5 shadow-[0_0_48px_rgba(232,38,122,0.35)] hover:shadow-[0_0_64px_rgba(232,38,122,0.5)]"
        style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
      >
        {t.finalCta.cta}
      </a>

      <div className="mt-3.5 text-[12px] text-white/40">
        {t.finalCta.trust}
      </div>
    </section>
  );
}
