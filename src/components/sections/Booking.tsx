"use client";

import { useLanguage } from "../LanguageContext";
import { translations } from "@/lib/translations";
import { usePathname } from "next/navigation";

export default function Booking() {
  const { language } = useLanguage();
  const t = translations[language].partner.booking;
  const pathname = usePathname();
  const isSubPage = pathname === "/academy" || pathname === "/partner";

  const sectionBg = isSubPage ? "#14102a" : "var(--bg-section)";
  const badgeColor = isSubPage ? "#8a85a4" : "var(--muted)";
  const badgeBorder = isSubPage ? "1px solid rgba(255,255,255,0.08)" : "1px solid var(--border)";
  const badgeBg = isSubPage ? "#181332" : "var(--surface)";
  const headingColor = isSubPage ? "#f1eef8" : "var(--text)";
  const descColor = isSubPage ? "#c6c1da" : "var(--text-2)";
  const boxBg = isSubPage ? "#181332" : "var(--surface)";
  const boxBorder = isSubPage ? "1px solid rgba(255,255,255,0.08)" : "1px solid var(--border)";

  return (
    <section
      id="book"
      style={{ padding: "96px 0", background: sectionBg }}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 28px", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: badgeColor, border: badgeBorder, background: badgeBg, padding: "8px 16px", borderRadius: "999px", marginBottom: "28px" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--gradient-brand)", display: "inline-block" }} />
          {t.badge}
        </div>

        <h2 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", color: headingColor, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: "14px" }}>
          {t.heading}
        </h2>

        <p style={{ fontSize: "16px", color: descColor, margin: "0 auto 40px", lineHeight: 1.75, maxWidth: "540px" }}>
          {t.description}
        </p>

        <div style={{ background: boxBg, border: boxBorder, borderRadius: "24px", padding: "56px", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", boxShadow: "var(--shadow-md)", maxWidth: "680px", margin: "0 auto" }}>
          <div style={{ fontSize: "44px", marginBottom: "8px" }}>📅</div>

          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "22px", color: "var(--text)", marginBottom: "8px" }}>
            {t.boxTitle}
          </div>

          <p style={{ fontSize: "14px", color: "var(--text-2)", maxWidth: "420px", lineHeight: 1.7, marginBottom: "24px" }}>
            {t.boxDescription}
          </p>

          <a
            href="https://form.typeform.com/to/o51YfOvB"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "14px 40px",
              borderRadius: "999px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "15px",
              textDecoration: "none",
              background: "var(--gradient-brand)",
              color: "white",
              border: "1px solid transparent",
              boxShadow: "0 10px 30px rgba(107,127,208,0.3)",
              transition: "all .2s ease",
            }}
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
