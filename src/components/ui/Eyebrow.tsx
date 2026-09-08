"use client";

interface EyebrowProps {
  children: React.ReactNode;
}

export default function Eyebrow({ children }: EyebrowProps) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: "rgba(255,255,255,0.05)",
        border: "1px solid var(--border)",
        borderRadius: 100,
        padding: "6px 16px",
        fontSize: 12,
        color: "var(--muted)",
        marginBottom: 22,
      }}
    >
      <span style={{ color: "var(--teal)" }}>✦</span> {children}
    </div>
  );
}
