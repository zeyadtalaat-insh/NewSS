"use client";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../LanguageContext";
import { translations } from "@/lib/translations";

function animateValue(
  setter: (v: string) => void,
  from: number,
  to: number,
  suffix: string,
  duration: number,
) {
  const startTime = performance.now();
  const tick = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(from + (to - from) * eased);
    setter(`${current}${suffix}`);
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const colorMap: Record<string, string> = {
  pink: "#e8267a",
  teal: "#2dd4bf",
  gold: "#f0b429",
};

const animationConfig = [
  { animateTo: undefined, suffix: undefined, duration: undefined },
  { animateTo: 98, suffix: "%", duration: 1400 },
  { animateTo: 3, suffix: "", duration: 900 },
  { animateTo: undefined, suffix: undefined, duration: undefined },
];

interface Stat {
  num: string;
  color: string;
  label: string;
  animateTo?: number;
  suffix?: string;
  duration?: number;
}

function StatCell({
  stat,
  index,
  triggered,
}: {
  stat: Stat;
  index: number;
  triggered: boolean;
}) {
  const [display, setDisplay] = useState(stat.num);

  useEffect(() => {
    if (!triggered || stat.animateTo === undefined) return;
    animateValue(
      setDisplay,
      0,
      stat.animateTo,
      stat.suffix ?? "",
      stat.duration ?? 1000,
    );
  }, [triggered, stat.animateTo, stat.suffix, stat.duration]);

  const isLastInRow4 = index === 3;
  const isLastInRow2 = index === 1 || index === 3;

  return (
    <div
      className={[
        "flex flex-col items-center justify-center text-center px-6 py-9 relative z-10",
        !isLastInRow2 ? "border-r border-white/8" : "",
        isLastInRow2 && !isLastInRow4 ? "lg:border-r lg:border-white/" : "",
        isLastInRow4 ? "lg:border-r-0" : "lg:border-r lg:border-white/8",
        index < 2 ? "border-b border-white/8 lg:border-b-0" : "",
      ].join(" ")}
    >
      <div
        className="font-extrabold text-[clamp(32px,3.5vw,48px)] leading-none mb-2 transition-colors duration-300"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          color: stat.color,
        }}
      >
        {display}
      </div>
      <div className="text-[13px] text-white/50 leading-relaxed whitespace-pre-line">
        {stat.label}
      </div>
    </div>
  );
}

export default function StatStrip() {
  const { language } = useLanguage();
  const t = translations[language].partner;
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  const stats: Stat[] = t.stats.map((s, i) => ({
    num: s.value,
    color: colorMap[s.color] ?? "#e8267a",
    label: s.label,
    ...animationConfig[i],
  }));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      dir={language === "ar" ? "rtl" : "ltr"}
      className="relative z-10 border-t border-b border-white/8 grid grid-cols-2 lg:grid-cols-4"
    >
      {stats.map((s, i) => (
        <StatCell key={i} stat={s} index={i} triggered={triggered} />
      ))}
    </div>
  );
}
