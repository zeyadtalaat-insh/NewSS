"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useLanguage } from "../LanguageContext";
import { translations } from "@/lib/translations";

const TEAM_IMAGES: Record<string, string> = {
  afaf: "/images/team/afaf.png",
  faysal: "/images/team/Faysal.png",
  ghaith: "/images/team/Ghaith Almasri - Senior Manager 2.png",
  mohamed: "/images/team/Mohammed Fakhrani - Frontend Developer 1.png",
  menna: "/images/team/menna.png",
  yosef: "/images/team/Yosef Elwardany - Senior Accountant 1.png",
  fady: "/images/team/fady.png",
  nour: "/images/team/nour.png",
  martina: "/images/team/martina.png",
};

function getInitials(name: string) {
  const parts = name.trim().split(" ");
  return parts.length > 1
    ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    : name.substring(0, 2).toUpperCase();
}

export default function TeamSection() {
  const { language, dir } = useLanguage();
  const t = translations[language];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const isRtl = dir === "rtl";

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 280;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section style={{ padding: "96px 0", background: "var(--bg)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 28px" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--brand)",
              marginBottom: "12px",
            }}
          >
            {language === "en" ? "Our People" : "فريقنا"}
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 800,
              color: "var(--text)",
              margin: "0 0 16px",
              lineHeight: 1.15,
            }}
          >
            {t.team.title}
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "var(--text-2)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            {t.team.description}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "8px",
            marginBottom: "20px",
          }}
        >
          {(["left", "right"] as const).map((dir) => (
            <button
              key={dir}
              onClick={() => scroll(isRtl ? (dir === "left" ? "right" : "left") : dir)}
              aria-label={dir}
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border: "1px solid var(--border)",
                background: "var(--surface)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--text-2)",
                transition: "all .2s",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {dir === "left"
                  ? <path d="M15 18l-6-6 6-6" />
                  : <path d="M9 18l6-6-6-6" />}
              </svg>
            </button>
          ))}
        </div>

        <div
          ref={scrollRef}
          style={{
            display: "flex",
            gap: "20px",
            overflowX: "auto",
            paddingBottom: "12px",
            scrollbarWidth: "none",
          }}
        >
          {t.team.members.map((member) => {
            const imgSrc = TEAM_IMAGES[member.key];
            const hasError = imgErrors[member.key];
            return (
              <div
                key={member.key}
                style={{
                  flexShrink: 0,
                  width: "200px",
                }}
              >
                <div
                  style={{
                    width: "200px",
                    height: "220px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid var(--border)",
                    marginBottom: "14px",
                    background: "var(--surface)",
                    position: "relative",
                  }}
                >
                  {imgSrc && !hasError ? (
                    <Image
                      src={imgSrc}
                      alt={member.name}
                      fill
                      sizes="200px"
                      style={{ objectFit: "cover", objectPosition: "top" }}
                      onError={() =>
                        setImgErrors((prev) => ({ ...prev, [member.key]: true }))
                      }
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "linear-gradient(135deg, rgba(232,38,122,0.15), rgba(107,127,208,0.1))",
                      }}
                    >
                      <span style={{ fontSize: "32px", fontWeight: 800, color: "var(--brand)", opacity: 0.7 }}>
                        {getInitials(member.name)}
                      </span>
                    </div>
                  )}
                </div>
                <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--text)", margin: "0 0 4px" }}>
                  {member.name}
                </p>
                <p style={{ fontSize: "12px", color: "var(--text-2)", margin: 0 }}>
                  {member.role}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
