"use client";

import { useState } from "react";
import { useLanguage } from "../LanguageContext";
import { translations } from "@/lib/translations";

export default function FAQSection() {
  const { language } = useLanguage();
  const t = translations[language].academy;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section dir={language === "ar" ? "rtl" : "ltr"} className="relative z-10 max-w-[1100px] mx-auto px-10 py-[90px]">
      <p className="text-[11px] font-bold uppercase tracking-[3px] text-pink mb-3.5">
        {t.faq.eyebrow}
      </p>
      <h2
        className="font-extrabold leading-[1.08] tracking-[-1px] mb-12"
        style={{
          fontSize: "clamp(28px,4vw,50px)",
          fontFamily: "'Plus Jakarta Sans',sans-serif",
        }}
      >
        {t.faq.title}
      </h2>

      <div className="flex flex-col gap-2.5">
        {t.faq.items.map((faq, i) => (
          <div
            key={i}
            className="bg-[#160d18] border border-pink/20 rounded-2xl overflow-hidden"
          >
            <button
              className="w-full text-left px-6 py-5 font-bold text-[15px] flex justify-between items-center hover:text-pink transition-colors duration-150 cursor-pointer"
              style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
              onClick={() => setOpen(open === i ? null : i)}
            >
              {faq.q}
              <span
                className="text-pink text-lg ml-4 shrink-0 transition-transform duration-200"
                style={{ transform: open === i ? "rotate(45deg)" : "none" }}
              >
                +
              </span>
            </button>
            {open === i && (
              <div className="px-6 pb-5 text-[14px] text-white/55 leading-[1.7]">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
