"use client";
import { useState } from "react";
import { useLanguage } from "../../LanguageContext";
import { translations } from "@/lib/translations";

const PINK = "#e8267a";
const PINK_LIGHT = "#f04d97";
const MUTED = "rgba(245,240,250,0.52)";
const TEXT = "#f5f0fa";
const BORDER = "rgba(255,255,255,0.08)";
const BORDER_PINK = "rgba(232,38,122,0.25)";
const GOLD = "#f0b429";
const BORDER_GOLD = "rgba(240,180,41,0.3)";

export default function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language].partner;
  const [primaryHover, setPrimaryHover] = useState(false);
  const [ghostHover, setGhostHover] = useState(false);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      dir={language === "ar" ? "rtl" : "ltr"}
      style={{
        position: "relative",
        zIndex: 1,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 60px 80px",
        overflow: "hidden",
      }}
    >
      {/* Grid overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(232,38,122,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(232,38,122,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Glows */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-15%",
          width: 700,
          height: 700,
          background:
            "radial-gradient(ellipse, rgba(232,38,122,0.12) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: 600,
          height: 600,
          background:
            "radial-gradient(ellipse, rgba(45,212,191,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Badge */}
      <div
        className="pp-fadeUp-0"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "rgba(240,180,41,0.08)",
          border: `1px solid ${BORDER_GOLD}`,
          borderRadius: 100,
          padding: "7px 20px",
          fontSize: 12,
          color: GOLD,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 2,
          marginBottom: 32,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: GOLD,
            boxShadow: `0 0 8px ${GOLD}`,
            display: "inline-block",
          }}
        />
        {t.hero.badge}
      </div>

      {/* Headline */}
      <h1
        className="pp-fadeUp-1"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(48px, 6.5vw, 88px)",
          lineHeight: 0.98,
          letterSpacing: "-3px",
          marginBottom: 28,
          maxWidth: 900,
        }}
      >
        <span style={{ color: TEXT }}>{t.hero.title.white}</span>
        <br />
        <span style={{ color: PINK }}>{t.hero.title.pink}</span>
        <br />
        <style>{`
    @keyframes goldShimmer {
      0%   { background-position: 100% 50%; }
      50%  { background-position:   0% 50%; }
      100% { background-position: 100% 50%; }
    }
    .hero-revenue {
      display: inline-block;
      background: linear-gradient(90deg, #f0b429 0%, #ffe082 30%, #f0b429 50%, #fff8e1 70%, #f0b429 100%);
      background-size: 200% 100%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: goldShimmer 3s ease-in-out infinite;
    }
  `}</style>
        <span className="hero-revenue">{t.hero.title.gold}</span>
      </h1>

      {/* Subtext */}
      <p
        className="pp-fadeUp-2"
        style={{
          fontSize: 18,
          color: MUTED,
          lineHeight: 1.8,
          maxWidth: 580,
          margin: "0 auto 44px",
        }}
      >
        {t.hero.description}
      </p>

      {/* CTAs */}
      <div
        className="pp-fadeUp-3"
        style={{
          display: "flex",
          gap: 14,
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: 60,
        }}
      >
        <a
          href="https://form.typeform.com/to/chZ2DONW"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setPrimaryHover(true)}
          onMouseLeave={() => setPrimaryHover(false)}
          style={{
            background: primaryHover ? PINK_LIGHT : PINK,
            color: "#fff",
            border: "none",
            padding: "17px 44px",
            borderRadius: 100,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: 15,
            cursor: "pointer",
            transform: primaryHover ? "translateY(-2px)" : "translateY(0)",
            boxShadow: "0 0 50px rgba(232,38,122,0.35)",
            transition: "background 0.25s, transform 0.25s",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          {t.hero.ctaPrimary}
        </a>
        <button
          onClick={() => scrollTo("tiers")}
          onMouseEnter={() => setGhostHover(true)}
          onMouseLeave={() => setGhostHover(false)}
          style={{
            background: "transparent",
            color: ghostHover ? TEXT : MUTED,
            border: `1px solid ${ghostHover ? BORDER_PINK : BORDER}`,
            padding: "17px 36px",
            borderRadius: 100,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 600,
            fontSize: 15,
            cursor: "pointer",
            transition: "border-color 0.25s, color 0.25s",
          }}
        >
          {t.hero.ctaSecondary}
        </button>
      </div>

      {/* Type pills */}
      <div
        className="pp-fadeUp-4"
        style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {t.hero.types.map((pill) => (
          <div
            key={pill}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.04)",
              border: `1px solid ${BORDER}`,
              borderRadius: 100,
              padding: "9px 20px",
              fontSize: 13,
              fontWeight: 600,
              color: MUTED,
            }}
          >
            {pill}
          </div>
        ))}
      </div>
    </section>
  );
}
