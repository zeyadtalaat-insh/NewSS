"use client";

import { useLanguage } from "../LanguageContext";
import { translations } from "@/lib/translations";

export default function GuaranteeSection() {
  const { language } = useLanguage();
  const t = translations[language].academy;

  return (
    <section dir={language === "ar" ? "rtl" : "ltr"} className="relative z-10 max-w-[1100px] mx-auto px-10 pb-[90px]">
      <div className="bg-[#160d18] border border-pink/20 rounded-[20px] p-12 flex flex-col sm:flex-row gap-10 items-center">
        <div className="text-[56px] flex-shrink-0">🛡️</div>
        <div>
          <div
            className="font-extrabold text-[24px] mb-2.5"
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
          >
            {t.guarantee.title}
          </div>
          <p className="text-[15px] text-white/55 leading-[1.7]">
            {t.guarantee.desc}
          </p>
        </div>
      </div>
    </section>
  );
}
