"use client";
import Eyebrow from "@/components/ui/Eyebrow";
import { useLanguage } from "../../LanguageContext";
import { translations } from "@/lib/translations";

const colorMap: Record<string, { color: string; bg: string; border: string }> = {
  teal: { color: "#2dd4bf", bg: "rgba(45,212,191,0.12)", border: "rgba(45,212,191,0.3)" },
  pink: { color: "#e8267a", bg: "rgba(232,38,122,0.12)", border: "rgba(232,38,122,0.25)" },
  gold: { color: "#f0b429", bg: "rgba(240,180,41,0.12)", border: "rgba(240,180,41,0.3)" },
};

export default function HowItWorksSection() {
  const { language } = useLanguage();
  const t = translations[language].partner;
  const steps = t.process.steps.map((s) => ({
    ...s,
    ...colorMap[s.color] ?? colorMap.teal,
  }));

  return (
    <section
      dir={language === "ar" ? "rtl" : "ltr"}
      style={{
        position: "relative",
        zIndex: 1,
        maxWidth: 1160,
        margin: "0 auto",
        padding: "100px 60px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Eyebrow>{t.process.eyebrow}</Eyebrow>
        <h2
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(32px,4vw,54px)",
            lineHeight: 1.06,
            letterSpacing: "-1.5px",
            marginBottom: 18,
            color: "#f5f0fa",
          }}
        >
          {t.process.title}
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "rgba(245,240,250,0.52)",
            lineHeight: 1.75,
            maxWidth: 560,
            margin: "0 auto",
          }}
        >
          {t.process.description}
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          marginTop: 56,
          position: "relative",
        }}
      >
        {/* Connector line */}
        <div
          style={{
            position: "absolute",
            top: 28,
            left: "calc(12.5% + 14px)",
            right: "calc(12.5% + 14px)",
            height: 1,
            background: "linear-gradient(90deg,#2dd4bf,#e8267a)",
            opacity: 0.3,
            zIndex: 0,
          }}
        />

        {steps.map((s) => (
          <div
            key={s.num}
            style={{
              textAlign: "center",
              padding: "0 20px",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: 18,
                margin: "0 auto 20px",
                background: s.bg,
                border: `1px solid ${s.border}`,
                color: s.color,
              }}
            >
              {s.num}
            </div>
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                marginBottom: 8,
                color: "#f5f0fa",
              }}
            >
              {s.title}
            </div>
            <div
              style={{
                fontSize: 13,
                color: "rgba(245,240,250,0.52)",
                lineHeight: 1.65,
              }}
            >
              {s.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
