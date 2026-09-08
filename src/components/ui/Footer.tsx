"use client";

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid var(--border)",
        padding: "48px 80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 20,
      }}
    >
      <div
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 800,
          fontSize: 16,
        }}
      >
        Super Studios{" "}
        <span style={{ color: "var(--pink)", fontStyle: "italic" }}>AI</span>
      </div>

      <div style={{ fontSize: 12, color: "var(--muted2)" }}>
        © {new Date().getFullYear()} Super Studios AI. All rights reserved.
      </div>

      <div style={{ display: "flex", gap: 24 }}>
        {["Privacy Policy", "Terms of Service", "Contact"].map((link) => (
          <a
            key={link}
            href="#"
            style={{
              fontSize: 13,
              color: "var(--muted)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.color = "var(--pink)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.color = "var(--muted)";
            }}
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}
