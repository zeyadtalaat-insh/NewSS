"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { usePathname } from "next/navigation";

export default function NAHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const isSubPage =
    pathname === "/na/academy" || pathname === "/na/partner";

  const homeHref = "/na";

  const navLinks = [
    { href: isSubPage ? `/na#products` : "#products", label: "Products" },
    { href: isSubPage ? `/na#portfolio` : "#portfolio", label: "Work" },
    { href: isSubPage ? `/na#process` : "#process", label: "Process" },
    { href: isSubPage ? `/na#pricing` : "#pricing", label: "Pricing" },
    { href: isSubPage ? `/na#faq` : "#faq", label: "FAQ" },
  ];

  const headerBg = isSubPage
    ? "rgba(13, 10, 24, 0.8)"
    : "color-mix(in srgb, var(--bg) 80%, transparent)";
  const headerBorder = isSubPage
    ? "1px solid rgba(255, 255, 255, 0.08)"
    : "1px solid var(--border)";

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        background: headerBg,
        borderBottom: headerBorder,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          height: "78px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 28px",
        }}
      >
        <Link href={homeHref} aria-label="Super Studios AI" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <Image
            src="/images/Logo.png"
            alt="Super Studios AI"
            width={160}
            height={38}
            priority
            style={{ height: "38px", width: "auto" }}
          />
        </Link>

        <nav className="hidden lg:flex" style={{ display: "flex", gap: "28px", alignItems: "center" }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: isSubPage ? "#c6c1da" : "var(--text-2)",
                textDecoration: "none",
                transition: "color .2s",
              }}
              className={isSubPage ? "hover:text-white" : "hover:text-[color:var(--text)]"}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              border: isSubPage ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid var(--border)",
              background: isSubPage ? "#181332" : "var(--surface)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: isSubPage ? "#c6c1da" : "var(--text-2)",
              transition: "all .2s",
            }}
          >
            {theme === "light" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            )}
          </button>

          <a
            href="https://form.typeform.com/to/o51YfOvB"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 22px",
              borderRadius: "999px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              cursor: "pointer",
              border: "1px solid transparent",
              textDecoration: "none",
              transition: "all .2s ease",
              background: "var(--gradient-brand)",
              color: "white",
              boxShadow: "0 10px 30px rgba(107,127,208,0.25)",
              whiteSpace: "nowrap",
            }}
            className="hidden md:inline-flex"
          >
            Book a Free Demo
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              border: isSubPage ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid var(--border)",
              background: isSubPage ? "#181332" : "var(--surface)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: isSubPage ? "#c6c1da" : "var(--text-2)",
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="0" y1="5" x2="24" y2="5" />
                <line x1="0" y1="12" x2="24" y2="12" />
                <line x1="0" y1="19" x2="24" y2="19" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          style={{
            background: isSubPage
              ? "rgba(13, 10, 24, 0.95)"
              : "color-mix(in srgb, var(--bg) 95%, transparent)",
            backdropFilter: "blur(20px)",
            borderTop: isSubPage ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid var(--border)",
          }}
        >
          <nav style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 28px", display: "flex", flexDirection: "column", gap: "4px" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: "12px 4px",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: isSubPage ? "#c6c1da" : "var(--text-2)",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://form.typeform.com/to/o51YfOvB"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              style={{
                marginTop: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 22px",
                borderRadius: "999px",
                fontWeight: 700,
                fontSize: "14px",
                textDecoration: "none",
                background: "var(--gradient-brand)",
                color: "white",
              }}
            >
              Book a Free Demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
