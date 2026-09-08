"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../LanguageContext";
import { translations } from "@/lib/translations";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function useCountdown(targetDate: Date): TimeLeft {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 7,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].academy;
  const target = useRef(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)).current;
  const timeLeft = useCountdown(target);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section dir={language === "ar" ? "rtl" : "ltr"} className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 overflow-hidden">
      {/* Grid bg */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232,38,122,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(232,38,122,0.05) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow */}
      <div
        className="pointer-events-none absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(232,38,122,0.2) 0%, transparent 68%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-0">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-pink-900/20 border border-pink/20 rounded-full px-5 py-2 text-[13px] font-medium text-pink-400 mb-7 animate-fade-up">
          <span className="w-[7px] h-[7px] rounded-full bg-pink animate-pulse" />
          {t.hero.badge}
        </div>

        {/* Headline */}
        <h1
          className="font-extrabold leading-[1.02] tracking-[-2px] max-w-[880px] mb-5 animate-fade-up"
          style={{
            fontSize: "clamp(42px,7vw,88px)",
            fontFamily: "'Plus Jakarta Sans',sans-serif",
            animationDelay: "80ms",
          }}
        >
          {t.hero.titleParts.map((part, i) =>
            part.highlight ? (
              <span key={i} className="text-pink">{part.text}</span>
            ) : (
              <span key={i} style={{ whiteSpace: "pre-wrap" }}>{part.text}</span>
            )
          )}
        </h1>

        <p
          className="text-[18px] text-white/55 max-w-[580px] leading-[1.7] mb-9 animate-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          {t.hero.description}
        </p>

        {/* ROI Strip */}
        <div
          className="flex flex-wrap gap-3 justify-center mb-10 animate-fade-up"
          style={{ animationDelay: "220ms" }}
        >
          {t.hero.pills.map((pill) => (
            <div
              key={pill.bold}
              className="flex items-center gap-2 bg-[#160d18] border border-pink/20 rounded-xl px-5 py-3 text-[14px] font-medium"
            >
              {pill.icon}{" "}
              <span>
                {pill.text}{" "}
                <strong
                  className="text-pink"
                  style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
                >
                  {pill.bold}
                </strong>
              </span>
            </div>
          ))}
        </div>

        {/* Price Block */}
        <div
          className="flex flex-col items-center gap-1.5 mb-7 animate-fade-up"
          style={{ animationDelay: "280ms" }}
        >
          <span className="text-[11px] text-white/50 uppercase tracking-[2px]">
            {t.hero.priceLabel}
          </span>
          <div className="flex items-center gap-3.5">
            <span
              className="text-[26px] font-bold text-white/25 line-through"
              style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
            >
              {t.hero.priceFull}
            </span>
            <span
              className="text-[72px] font-extrabold text-pink leading-none"
              style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
            >
              {t.hero.priceCurrent}
            </span>
            <span className="bg-pink/15 border border-pink/20 rounded-md px-3 py-1 text-[12px] text-pink-400 font-bold tracking-[0.5px]">
              {t.hero.priceDiscount}
            </span>
          </div>
        </div>

        {/* Countdown */}
        <div
          className="flex flex-col items-center gap-2.5 mb-8 animate-fade-up"
          style={{ animationDelay: "330ms" }}
        >
          <span className="text-[11px] text-white/50 uppercase tracking-[2px]">
            {t.hero.countdownLabel}
          </span>
          <div className="flex gap-2.5">
            {[
              { val: pad(timeLeft.days), label: t.hero.countdown.days },
              { val: pad(timeLeft.hours), label: t.hero.countdown.hours },
              { val: pad(timeLeft.minutes), label: t.hero.countdown.mins },
              { val: pad(timeLeft.seconds), label: t.hero.countdown.secs },
            ].map((unit) => (
              <div
                key={unit.label}
                className="bg-[#160d18] border border-pink/20 rounded-xl px-4 py-3 text-center min-w-[68px]"
              >
                <div
                  className="text-[32px] font-extrabold text-pink leading-none"
                  style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
                >
                  {unit.val}
                </div>
                <div className="text-[10px] text-white/50 uppercase tracking-[1px] mt-1">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-3.5 justify-center mb-3 animate-fade-up"
          style={{ animationDelay: "380ms" }}
        >
          <a
            href="https://form.typeform.com/to/gSnHEJ77"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink hover:bg-pink-400 text-white font-bold px-12 py-4 rounded-full text-[16px] transition-all duration-200 hover:-translate-y-0.5 shadow-[0_0_48px_rgba(232,38,122,0.35)] hover:shadow-[0_0_64px_rgba(232,38,122,0.5)]"
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
          >
            {t.hero.ctaPrimary}
          </a>
          <button
            onClick={() => scrollTo("curriculum")}
            className="bg-transparent text-white/55 border border-pink/20 px-8 py-4 rounded-full font-semibold text-[14px] transition-all duration-200 hover:border-pink hover:text-white"
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
          >
            {t.hero.ctaSecondary}
          </button>
        </div>
        <p
          className="text-[12px] text-white/40 animate-fade-up"
          style={{ animationDelay: "420ms" }}
        >
          {t.hero.trust}
        </p>
      </div>
    </section>
  );
}
