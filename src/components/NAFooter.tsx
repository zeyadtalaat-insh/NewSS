"use client";

import Link from "next/link";
import Image from "next/image";

export default function NAFooter() {
  return (
    <footer
      style={{
        padding: "60px 0 40px",
        borderTop: "1px solid var(--border)",
        background: "var(--bg-soft)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 28px" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "40px", marginBottom: "40px" }}
          className="footer-grid-resp"
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <Image src="/images/Logo.png" alt="Super Studios AI" width={120} height={32} style={{ height: "32px", width: "auto" }} />
            </div>
            <p style={{ fontSize: "14px", color: "var(--text-2)", lineHeight: 1.6, maxWidth: "320px" }}>
              {"Canada's AI video studio for cafes and food & beverage brands. Professional content at a price that makes sense for your margins."}
            </p>
          </div>

          <div>
            <h5
              style={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: "16px",
              }}
            >
              Product
            </h5>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {[
                { href: "#products", label: "AI Commercials" },
                { href: "#products", label: "AI Brand Avatars" },
                { href: "#products", label: "AI Photo Shoots" },
                { href: "#pricing", label: "Pricing" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    display: "block",
                    fontSize: "14px",
                    color: "var(--text-2)",
                    textDecoration: "none",
                    padding: "6px 0",
                    transition: "color .2s",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5
              style={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: "16px",
              }}
            >
              Company
            </h5>
            <nav style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {[
                { href: "/na/academy", label: "Academy" },
                { href: "#book", label: "Contact" },
                { href: "/na/partner", label: "Partner" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    display: "block",
                    fontSize: "14px",
                    color: "var(--text-2)",
                    textDecoration: "none",
                    padding: "6px 0",
                    transition: "color .2s",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h5
              style={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: "16px",
              }}
            >
              Get in Touch
            </h5>
            <a
              href="https://form.typeform.com/to/o51YfOvB"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "10px 20px",
                borderRadius: "999px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                textDecoration: "none",
                background: "var(--gradient-brand)",
                color: "white",
                border: "1px solid transparent",
              }}
            >
              Book a Free Demo
            </a>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span style={{ fontSize: "13px", color: "var(--muted)" }}>
            © {new Date().getFullYear()} Superstudios.ai. All rights reserved.
          </span>
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
