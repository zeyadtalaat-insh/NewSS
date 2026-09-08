"use client";
import { useState } from "react";

export default function TrailerSection() {
  const [muted, setMuted] = useState(true);

  return (
    <div style={{ padding: "40px 0 80px" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 28px" }}>
        <div
          style={{
            aspectRatio: "16/9",
            borderRadius: "24px",
            overflow: "hidden",
            border: "1px solid var(--border-strong)",
            boxShadow: "var(--shadow-lg)",
            position: "relative",
            background: "#0a0612",
          }}
        >
          <iframe
            key={muted ? "muted" : "unmuted"}
            src={`https://www.loom.com/embed/e4d475dc979b4b8485e8d8d5ad3443cf?autoplay=1&muted=${muted ? 1 : 0}&hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`}
            title="Super Studios AI — Official Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
          />
          <button
            onClick={() => setMuted((m) => !m)}
            style={{ position: "absolute", bottom: "16px", right: "16px", zIndex: 30, display: "flex", alignItems: "center", gap: "8px", padding: "8px 14px", borderRadius: "999px", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.2)", color: "white", fontSize: "12px", fontWeight: 600, cursor: "pointer" }}
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? "Tap for sound" : "Mute"}
          </button>
        </div>
      </div>
    </div>
  );
}
