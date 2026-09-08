"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/lib/translations";
import { usePathname } from "next/navigation";

export default function Footer() {
  const { language, dir } = useLanguage();
  const t = translations[language];
  const isRtl = dir === "rtl";
  const pathname = usePathname();

  if (pathname === "/academy") {
    return null;
  }

  const isSubPage = pathname === "/partner";

  const footerBg = isSubPage ? "#0d0a18" : "var(--bg-soft)";
  const footerBorder = isSubPage ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid var(--border)";
  const textColor = isSubPage ? "#c6c1da" : "var(--text-2)";
  const mutedColor = isSubPage ? "#8a85a4" : "var(--muted)";

  const navLinks = [
    { href: "/academy", label: t.nav.academy },
    { href: "#book", label: t.nav.contact },
  ];

  return (
    <footer
      style={{
        padding: "60px 0 40px",
        borderTop: footerBorder,
        background: footerBg,
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 28px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "40px", marginBottom: "40px" }} className="footer-grid-resp">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <Image src="/images/Logo.png" alt="Super Studios AI" width={120} height={32} style={{ height: "32px", width: "auto" }} />
            </div>
            <p style={{ fontSize: "14px", color: textColor, lineHeight: 1.6, maxWidth: "320px" }}>
              {t.footer.description}
            </p>
          </div>

          <div>
            <h5 style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: mutedColor, marginBottom: "16px" }}>
              {language === "en" ? "Product" : "المنتج"}
            </h5>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {["#products", "#products", "#products", "#pricing"].map((href, i) => (
                <a key={i} href={href} style={{ display: "block", fontSize: "14px", color: textColor, textDecoration: "none", padding: "6px 0", transition: "color .2s" }}>
                  {["AI Brand Avatars", "AI Commercials", "AI Photo Shoots", language === "en" ? "Pricing" : "الأسعار"][i]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: mutedColor, marginBottom: "16px" }}>
              {t.footer.sections.company}
            </h5>
            <nav style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} style={{ display: "block", fontSize: "14px", color: textColor, textDecoration: "none", padding: "6px 0", transition: "color .2s" }}>
                  {link.label}
                </Link>
              ))}
              <Link href="/partner" style={{ display: "block", fontSize: "14px", color: textColor, textDecoration: "none", padding: "6px 0" }}>
                {t.nav.partner}
              </Link>
            </nav>
          </div>

          <div>
            <h5 style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: mutedColor, marginBottom: "16px" }}>
              {t.footer.sections.contact}
            </h5>
            <a
              href="https://form.typeform.com/to/o51YfOvB"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", padding: "10px 20px", borderRadius: "999px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "13px", textDecoration: "none", background: "var(--gradient-brand)", color: "white", border: "1px solid transparent" }}
            >
              {language === "en" ? "Apply Now" : "قدّم الآن"}
            </a>
          </div>
        </div>

        <div style={{ borderTop: footerBorder, paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <span style={{ fontSize: "13px", color: mutedColor }}>
            {t.footer.copyright.replace("{year}", new Date().getFullYear().toString())}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <Image src="/images/vision2030.png" alt="Saudi Vision 2030" width={80} height={40} style={{ height: "36px", width: "auto", opacity: 0.7 }} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .footer-grid-resp { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
