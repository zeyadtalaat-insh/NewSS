"use client";

import Image from "next/image";
import { useLanguage } from "../LanguageContext";
import { translations } from "@/lib/translations";

const BASE = "/SS-Brands-Wall-of-Fame";

const BRANDS = [
  { name: "Midi",                    logo: `${BASE}/midi.png`,              bg: "#FFF9E6" },
  { name: "Mood Lab",                logo: `${BASE}/mood-lab.png`,          bg: "#E6F9FA" },
  { name: "Roasta Cafe",             logo: `${BASE}/roasta.png`,            bg: "#F9EAEA" },
  { name: "Burgreez",                logo: `${BASE}/burgreez.png`,          bg: "#FFF3E6" },
  { name: "Qishr",                   logo: `${BASE}/qishr.png`,             bg: "#F0F9E8" },
  { name: "Lucaffe",                 logo: `${BASE}/lucaffe.png`,           bg: "#FDE8E8" },
  { name: "Segal",                   logo: `${BASE}/segal.png`,             bg: "#EEE6F9" },
  { name: "Calyra",                  logo: `${BASE}/calyra.jpg`,            bg: "#F5E6F9" },
  { name: "Aabideen",               logo: `${BASE}/aabideen.png`,          bg: "#E6F0F9" },
  { name: "Coffee Cove",             logo: `${BASE}/coffee-cove.png`,       bg: "#F9F0E6" },
  { name: "Pappalecco Cafe",         logo: `${BASE}/pappalecco.png`,        bg: "#EAF5EA" },
  { name: "Glamera",                 logo: `${BASE}/glamera.png`,           bg: "#EEE6F9" },
  { name: "GL Chemtech",             logo: `${BASE}/gl-chemtech.png`,       bg: "#E6F9F0" },
  { name: "Dar wa Emaar",            logo: `${BASE}/dar-wa-emaar.png`,      bg: "#FFF0E6" },
  { name: "Society Clubhouse",       logo: `${BASE}/society-clubhouse.jpg`, bg: "#F0F0F0" },
  { name: "INSHARO",                 logo: `${BASE}/insharo.png`,           bg: "#F9F9E6" },
  { name: "Pharaoh",                 logo: `${BASE}/pharaoh.png`,           bg: "#0A0E1A" },
  { name: "Aman Cool",               logo: `${BASE}/aman-cool.png`,         bg: "#E6EEF9" },
  { name: "UR Coffee",               logo: `${BASE}/ur-coffee.jpg`,         bg: "#F9F5E6" },
  { name: "Almajher",                logo: `${BASE}/almajher.png`,          bg: "#E6F9F9" },
  { name: "Kimsoonrye Soomsal",      logo: `${BASE}/soon-sal-chicken.png`,  bg: "#FFF0E6" },
  // text-only brands (no logo provided)
  { name: "BSCO",                    logo: null, bg: "#E8E6F5" },
  { name: "Let's Matcha",            logo: null, bg: "#DFF2EA" },
  { name: "Elim Burger",             logo: null, bg: "#FDEEDE" },
  { name: "Espresso Bakery",         logo: null, bg: "#F9E4ED" },
  { name: "Village Coffee",          logo: null, bg: "#DFF2EA" },
  { name: "Nabrah",                  logo: null, bg: "#E8E6F5" },
  { name: "Mawj",                    logo: null, bg: "#FDEEDE" },
  { name: "NYC Pizza",               logo: null, bg: "#F9E4ED" },
] as const;

export default function WallOfFame() {
  const { language } = useLanguage();
  const t = translations[language].wallOfFame;
  const isAr = language === "ar";

  return (
    <section
      dir={isAr ? "rtl" : "ltr"}
      style={{
        background: "#F5F4FA",
        padding: "96px 0 104px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 28px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "#fff",
            borderRadius: "999px",
            padding: "7px 18px",
            marginBottom: "28px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#7C5CFC",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: isAr ? "0" : "0.16em",
              textTransform: "uppercase",
              color: "#1a1533",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            {t.badge}
          </span>
        </div>

        {/* Heading */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(44px, 6vw, 68px)",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            color: "#0f0c14",
            marginBottom: "16px",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          {t.title1}
          <br />
          <em style={{ fontStyle: "italic", fontWeight: 400, color: "#0f0c14" }}>{t.title2}</em>
          {" "}
          <span style={{ fontWeight: 800, color: "#0f0c14" }}>{t.title3}</span>
          {" "}
          <span
            style={{
              fontWeight: 800,
              background: "linear-gradient(90deg, #7C5CFC 0%, #C45FA0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t.title4}
          </span>
        </h2>

        {/* Subheading */}
        <p
          style={{
            textAlign: "center",
            color: "#7a7691",
            fontSize: "16px",
            fontWeight: 400,
            marginBottom: "56px",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          {t.subtitle}
        </p>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "16px",
            width: "100%",
          }}
          className="wof-grid"
        >
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              style={{
                background: brand.bg,
                borderRadius: "18px",
                padding: "20px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100px",
              }}
            >
              {brand.logo ? (
                <div style={{ position: "relative", width: "100%", height: "60px" }}>
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 600px) 45vw, (max-width: 900px) 22vw, 180px"
                  />
                </div>
              ) : (
                <span
                  style={{
                    color: "#3D3480",
                    fontSize: "14px",
                    fontWeight: 600,
                    textAlign: "center",
                    lineHeight: 1.3,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {brand.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .wof-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .wof-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
