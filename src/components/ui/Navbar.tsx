"use client";

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        padding: "0 48px",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgba(15,12,20,0.92)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <a
        href="#"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 800,
          fontSize: 17,
          letterSpacing: "-0.3px",
          display: "flex",
          alignItems: "center",
          gap: 2,
          textDecoration: "none",
          color: "var(--text)",
        }}
      >
        Super Studios{" "}
        <span style={{ color: "var(--pink)", fontStyle: "italic" }}>AI</span>
      </a>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            background: "transparent",
            border: "1px solid var(--border)",
            color: "var(--muted)",
            padding: "8px 20px",
            borderRadius: 100,
            fontSize: 13,
            cursor: "pointer",
            fontFamily: "'Outfit', sans-serif",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.borderColor = "var(--border-pink)";
            (e.target as HTMLElement).style.color = "var(--text)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.borderColor = "var(--border)";
            (e.target as HTMLElement).style.color = "var(--muted)";
          }}
        >
          Home
        </button>
        <button
          onClick={() => scrollTo("apply")}
          style={{
            background: "var(--pink)",
            color: "#fff",
            border: "none",
            padding: "10px 22px",
            borderRadius: 100,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: 13,
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.background = "var(--pink-light)";
            (e.target as HTMLElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.background = "var(--pink)";
            (e.target as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          Apply Now
        </button>
      </div>
    </nav>
  );
}
