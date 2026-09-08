"use client";
import { useEffect, useRef, useState } from "react";
import Eyebrow from "@/components/ui/Eyebrow";
import { useLanguage } from "../../LanguageContext";
import { translations } from "@/lib/translations";

type TileColor = "pink" | "teal" | "gold";

const colorMap = {
  pink: {
    icon: "rgba(232,38,122,0.08)",
    border: "rgba(232,38,122,0.25)",
    gradFrom: "#f5f0fa",
    gradTo: "#e8267a",
  },
  teal: {
    icon: "rgba(45,212,191,0.08)",
    border: "rgba(45,212,191,0.2)",
    gradFrom: "#f5f0fa",
    gradTo: "#2dd4bf",
  },
  gold: {
    icon: "rgba(240,180,41,0.08)",
    border: "rgba(240,180,41,0.3)",
    gradFrom: "#f5f0fa",
    gradTo: "#f0b429",
  },
};

const waveMap = {
  pink: "linear-gradient(90deg,transparent,#e8267a,#2dd4bf,transparent)",
  teal: "linear-gradient(90deg,transparent,#2dd4bf,#e8267a,transparent)",
  gold: "linear-gradient(90deg,transparent,#f0b429,#e8267a,transparent)",
};

const glowMap = {
  pink: "radial-gradient(ellipse,rgba(232,38,122,0.06),transparent 55%)",
  teal: "radial-gradient(ellipse,rgba(45,212,191,0.06),transparent 55%)",
  gold: "radial-gradient(ellipse,rgba(240,180,41,0.06),transparent 55%)",
};

const particles = [
  { color: "#e8267a", left: "10%", top: "20%", delay: "0s" },
  { color: "#2dd4bf", left: "30%", top: "60%", delay: "1s" },
  { color: "#f0b429", left: "55%", top: "15%", delay: "2s" },
  { color: "#e8267a", left: "75%", top: "45%", delay: "3s" },
  { color: "#2dd4bf", left: "90%", top: "75%", delay: "0.5s" },
  { color: "#f0b429", left: "45%", top: "80%", delay: "4s" },
];

const delayMs = [0, 80, 160, 240, 320, 400];

type TileData = {
  icon: string;
  stat: string | null;
  statCrossed?: string;
  speedTile?: boolean;
  title: string;
  tags: string[];
  desc: string;
  color: TileColor;
  exclusive?: boolean;
};

function BenefitTile({ tile, index }: { tile: TileData; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const c = colorMap[tile.color];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`benefit-tile benefit-tile--${tile.color} group relative rounded-3xl overflow-visible flex flex-col cursor-default p-7 ${visible ? "benefit-tile--visible" : ""}`}
      style={{
        background: "#181220",
        border: "1px solid rgba(255,255,255,0.08)",
        transitionDelay: `${delayMs[index]}ms`,
      }}
    >
      {/* Agency Exclusive badge */}
      {tile.exclusive && (
        <div
          className="absolute top-4 right-4 z-10 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[1.5px] text-gold"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          ★ Agency Exclusive
        </div>
      )}

      {/* Glow — CSS group-hover */}
      <div
        className="benefit-glow absolute pointer-events-none"
        style={{
          top: "-40%",
          left: "-20%",
          width: "140%",
          height: "140%",
          background: glowMap[tile.color],
        }}
      />

      {/* Icon */}
      <div
        className="benefit-icon relative w-16 h-16 rounded-[18px] flex items-center justify-center text-[28px] mb-5"
        style={{ background: c.icon, border: `1px solid ${c.border}` }}
      >
        {tile.icon}
      </div>

      {/* Stat */}
      {tile.speedTile ? (
        <div
          className="font-extrabold text-[clamp(28px,2.5vw,36px)] leading-none tracking-[-1px] mb-2"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          <span
            style={{
              background: `linear-gradient(135deg,${c.gradFrom},${c.gradTo})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {tile.stat}
          </span>{" "}
          <span
            style={{
              WebkitTextFillColor: "rgba(245,240,250,0.3)",
              textDecoration: "line-through",
              textDecorationColor: "#e8267a",
              textDecorationThickness: 3,
              marginLeft: 6,
            }}
          >
            {tile.statCrossed}
          </span>
        </div>
      ) : (
        <div
          className="font-extrabold text-[clamp(28px,2.5vw,36px)] tracking-[-1px] mb-2"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            background: `linear-gradient(135deg,${c.gradFrom},${c.gradTo})`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1,
            paddingBottom: 4,
          }}
        >
          {tile.stat}
        </div>
      )}

      {/* Title */}
      <div
        className="benefit-title font-extrabold text-lg mb-2.5"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          color: "#f5f0fa",
        }}
      >
        {tile.title}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-3.5">
        {tile.tags.map((tag) => (
          <span
            key={tag}
            className="benefit-tag rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.5px]"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(245,240,250,0.52)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Desc */}
      <p className="text-sm text-white/50 leading-[1.7] flex-1">{tile.desc}</p>

      {/* Wave bar */}
      <div
        className="h-[3px] rounded-full mt-5 overflow-hidden relative"
        style={{ background: "rgba(255,255,255,0.04)" }}
      >
        <div
          className="benefit-wave absolute inset-0"
          style={{ background: waveMap[tile.color] }}
        />
      </div>
    </div>
  );
}

export default function BenefitsSection() {
  const { language } = useLanguage();
  const t = translations[language].partner;
  const tiles: TileData[] = t.benefits.items.map((item) => ({
    icon: item.icon,
    stat: item.stat,
    statCrossed:
      "statCrossed" in item
        ? (item as { statCrossed?: string }).statCrossed
        : undefined,
    speedTile: "statCrossed" in item,
    title: item.title,
    tags: item.tags,
    desc: item.description,
    color: item.color as TileColor,
    exclusive: "exclusive" in item && !!item.exclusive,
  }));

  return (
    <>
      <style>{`
        /* ── Entrance animation ── */
        .benefit-tile {
          opacity: 0;
          transform: translateY(40px) scale(0.97);
          transition:
            opacity   0.5s cubic-bezier(0.22,1,0.36,1),
            transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .benefit-tile--visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* ── Animated border via conic-gradient ── */
        .benefit-tile::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 26px;
          padding: 2px;
          background: conic-gradient(from var(--angle, 0deg), transparent 60%, var(--c1) 75%, var(--c2) 85%, transparent 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          z-index: 3;
        }
        .benefit-tile:hover::before {
          opacity: 1;
          animation: border-spin 2s linear infinite;
        }

        @keyframes border-spin {
          to { --angle: 360deg; }
        }

        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        /* ── Glow on hover ── */
        .benefit-glow {
          opacity: 0;
          transition: opacity 0.6s ease;
        }
        .benefit-tile:hover .benefit-glow { opacity: 1; }

        /* ── Icon bounce on hover ── */
        .benefit-icon {
          transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
        }
        .benefit-tile:hover .benefit-icon {
          transform: scale(1.12) rotate(-6deg);
        }

        /* ── Title color on hover ── */
        .benefit-title {
          transition: color 0.3s ease;
        }
        .benefit-tile:hover .benefit-title { color: #e8267a !important; }

        /* ── Tags on hover ── */
        .benefit-tag {
          transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
        }
        .benefit-tile:hover .benefit-tag {
          background: rgba(232,38,122,0.06) !important;
          border-color: rgba(232,38,122,0.25) !important;
          color: #e8267a !important;
        }

        /* ── Wave bar (keep as accent) ── */
        .benefit-wave {
          transform: translateX(-100%);
          transition: transform 1.2s cubic-bezier(0.22,1,0.36,1);
        }
        .benefit-tile:hover .benefit-wave { transform: translateX(0); }

        /* ── Per-color border colors ── */
        .benefit-tile--pink { --c1: #e8267a; --c2: #2dd4bf; }
        .benefit-tile--teal { --c1: #2dd4bf; --c2: #e8267a; }
        .benefit-tile--gold { --c1: #f0b429; --c2: #e8267a; }
      `}</style>

      <section
        dir={language === "ar" ? "rtl" : "ltr"}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-24"
      >
        <div className="text-center">
          <Eyebrow>{t.benefits.eyebrow}</Eyebrow>
          <h2
            className="font-extrabold text-[clamp(32px,4vw,54px)] leading-[1.06] tracking-[-1.5px] mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {t.benefits.title}
            <br />
            <span className="text-pink">{t.benefits.titleAccent}</span>
          </h2>
          <p className="text-base text-white/50 leading-[1.75] max-w-[560px] mx-auto">
            {t.benefits.description}
          </p>
        </div>

        <div className="relative mt-16">
          {/* Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {particles.map((p, i) => (
              <div
                key={i}
                className="pp-particle absolute w-1 h-1 rounded-full opacity-60"
                style={{
                  background: p.color,
                  left: p.left,
                  top: p.top,
                  animationDelay: p.delay,
                }}
              />
            ))}
          </div>

          {/* Bento grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tiles.map((tile, i) => (
              <BenefitTile key={i} tile={tile} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
