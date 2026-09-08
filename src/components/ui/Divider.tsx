"use client";

export default function Divider() {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 1,
        height: 1,
        background:
          "linear-gradient(90deg, transparent, var(--border-pink), transparent)",
      }}
    />
  );
}
