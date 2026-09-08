"use client";

import { useLanguage } from "../LanguageContext";
import { translations } from "@/lib/translations";

export default function PricingSection() {
  const { language } = useLanguage();
  const t = translations[language].academy;

  return (
    <section
      dir={language === "ar" ? "rtl" : "ltr"}
      id="pricing"
      className="relative z-10 max-w-[1100px] mx-auto px-10 py-[90px]"
    >
      <p className="text-[11px] font-bold uppercase tracking-[3px] text-pink mb-3.5">
        {t.pricing.eyebrow}
      </p>
      <h2
        className="font-extrabold leading-[1.08] tracking-[-1px] mb-4"
        style={{
          fontSize: "clamp(28px,4vw,50px)",
          fontFamily: "'Plus Jakarta Sans',sans-serif",
        }}
      >
        {t.pricing.title}
        <br />
        {t.pricing.titleAccent}
      </h2>
      <p className="text-[16px] text-white/55 leading-[1.7] max-w-[560px] mb-12">
        {t.pricing.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Course */}
        <div className="bg-[#160d18] border border-pink/20 rounded-[20px] p-9 relative">
          <div
            className="font-extrabold text-[20px] mb-1.5"
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
          >
            {t.pricing.course.name}
          </div>
          <div className="text-[13px] text-white/55 leading-[1.6] mb-6">
            {t.pricing.course.desc}
          </div>
          <div
            className="text-[56px] font-extrabold text-pink leading-none"
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
          >
            {t.pricing.course.price}
          </div>
          <div className="text-[15px] text-white/28 line-through mb-7">
            {t.pricing.course.priceFull}
          </div>

          <ul className="list-none mb-8 space-y-0">
            {t.pricing.course.features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-2.5 py-2.5 text-[13px] border-b border-pink/[0.07]"
              >
                <span className="text-pink">✦</span> {f}
              </li>
            ))}
          </ul>

          <a
            href="https://form.typeform.com/to/gSnHEJ77"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-full bg-transparent text-white border border-pink/20 font-bold text-[14px] transition-all duration-200 hover:border-pink cursor-pointer block text-center"
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
          >
            {t.pricing.course.cta}
          </a>
        </div>

        {/* Academy */}
        <div
          className="border border-pink rounded-[20px] p-9 relative shadow-[0_0_60px_rgba(232,38,122,0.1)]"
          style={{
            background:
              "linear-gradient(145deg, #1e1022, rgba(232,38,122,0.06))",
          }}
        >
          <div
            className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-pink text-white font-bold text-[11px] tracking-wide px-4 py-1.5 rounded-full whitespace-nowrap"
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
          >
            {t.pricing.academy.badge}
          </div>

          <div
            className="font-extrabold text-[20px] mb-1.5"
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
          >
            {t.pricing.academy.name}
          </div>
          <div className="text-[13px] text-white/55 leading-[1.6] mb-6">
            {t.pricing.academy.desc}
          </div>
          <div
            className="text-[30px] font-extrabold text-pink leading-none mb-1.5"
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
          >
            {t.pricing.academy.price}
          </div>
          <div className="text-[15px] text-white/28 line-through mb-7">
            {t.pricing.academy.priceFull}
          </div>

          <ul className="list-none mb-8 space-y-0">
            {t.pricing.academy.features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-2.5 py-2.5 text-[13px] border-b border-pink/[0.07]"
              >
                <span className="text-pink">✦</span> {f}
              </li>
            ))}
          </ul>

          <a
            href="https://form.typeform.com/to/gSnHEJ77"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-full bg-pink hover:bg-pink-400 text-white font-bold text-[14px] transition-all duration-200 hover:-translate-y-0.5 shadow-[0_0_28px_rgba(232,38,122,0.3)] cursor-pointer block text-center"
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
          >
            {t.pricing.academy.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
