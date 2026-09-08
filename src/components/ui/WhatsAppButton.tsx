"use client";

export default function WhatsAppButton() {
  return (
    <button
      onClick={() => window.open("https://wa.me/", "_blank")}
      style={{
        position: "fixed",
        bottom: 26,
        right: 26,
        zIndex: 300,
        width: 52,
        height: 52,
        borderRadius: "50%",
        background: "#25d366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 24,
        cursor: "pointer",
        boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        transition: "all 0.2s",
        border: "none",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1.08)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
      }}
      aria-label="Chat on WhatsApp"
    >
      💬
    </button>
  );
}
