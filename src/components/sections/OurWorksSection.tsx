"use client";
import { useState, Fragment } from "react";
import { useLanguage } from "../LanguageContext";

const MATRIX = [
  {
    row: "10–30s",
    rowLabel: { en: "spot", ar: "سبوت" },
    cells: [
      { tier: "Core", vid: "d104a24615054447bdb1f1d662b92b11" },
      { tier: "Essential", vid: "e8ffd1e9a25a441c808025329b1832a7" },
      { tier: "Premier", vid: "ee80f08b9bc8449db3b122843a871621" },
    ],
  },
  {
    row: "35–60s",
    rowLabel: { en: "feature", ar: "فيتشر" },
    cells: [
      { tier: "Core", vid: "909669568b7e4cd5bcc1b1b03d155c03" },
      { tier: "Essential", vid: "741c076639a34524ae91c7332dcf40b0" },
      { tier: "Premier", vid: "9f6784ad62674ff89e636190dc05c175" },
    ],
  },
  {
    row: "65–120s",
    rowLabel: { en: "flagship", ar: "فلاغشيب" },
    cells: [
      { tier: "Core", vid: "53471999d6544acd978ba0567b51f49a" },
      { tier: "Essential", vid: "99f21bc72741401d8c6f11b07267575c" },
      { tier: "Premier", vid: "9735649cfb424854b5209d8f74190b40" },
    ],
  },
];

const TIERS = {
  en: [
    { name: "Core", desc: "Ad-ready, fast turnaround" },
    { name: "Essential", desc: "Polished, on-brand campaigns" },
    { name: "Premier", desc: "Flagship cinematic quality" },
  ],
  ar: [
    { name: "Core", desc: "جاهز للإعلانات، تسليم سريع" },
    { name: "Essential", desc: "حملات متقنة ومتوافقة مع البراند" },
    { name: "Premier", desc: "جودة سينمائية فاخرة" },
  ],
};

export default function OurWorksSection() {
  const { language } = useLanguage();
  const [featVid, setFeatVid] = useState(MATRIX[0].cells[0].vid);
  const [featTier, setFeatTier] = useState("Core");
  const [featLen, setFeatLen] = useState("10–30s");
  const tiers = TIERS[language as keyof typeof TIERS] || TIERS.en;

  const eye = language === "en" ? "Portfolio" : "أعمالنا";
  const h1 = language === "en" ? "Real work," : "أعمال حقيقية،";
  const h2 = language === "en" ? "every tier" : "بكل فئة";
  const sub = language === "en"
    ? "10–30s spots, 35–60s features, 65–120s flagships — sampled across Core, Essential, and Premier. Click any cell to play."
    : "إعلانات 10-30 ثانية، وإعلانات 35-60 ثانية، وأفلام 65-120 ثانية — عينات من Core و Essential و Premier. اضغط أي خلية للعرض.";
  const sideH = language === "en" ? "Browse the matrix" : "تصفح المصفوفة";
  const sideP = language === "en"
    ? "Each cell pairs a runtime with a production tier. Pick the length and tier closest to what you're planning."
    : "كل خلية تجمع بين مدة وفئة إنتاج. اختر الأقرب لحملتك.";
  const conf = language === "en"
    ? "Confidential — shared exclusively for the purpose of evaluating proposals. These work samples are the intellectual property of Super Studios AI and our clients, and may not be downloaded, redistributed, reposted, or used for any purpose outside of reviewing proposals."
    : "سري — مشارك حصراً لغرض تقييم المقترحات. هذه النماذج ملكية فكرية لسوبر ستوديوز وعملائنا، ولا يجوز تنزيلها أو إعادة توزيعها لأي غرض آخر.";

  return (
    <section id="portfolio" style={{ padding: "110px 0 96px", position: "relative", background: "var(--bg)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 28px" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", border: "1px solid var(--border)", background: "var(--surface)", padding: "8px 16px", borderRadius: "999px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--gradient-brand)", display: "inline-block" }} />
            {eye}
          </div>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 800, lineHeight: 1.04, marginTop: "20px", letterSpacing: "-0.03em", color: "var(--text)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {h1} <span className="gradient-text">{h2}</span>
          </h2>
          <p style={{ marginTop: "20px", fontSize: "17px", lineHeight: 1.65, color: "var(--text-2)", maxWidth: "620px", marginLeft: "auto", marginRight: "auto" }}>
            {sub}
          </p>
        </div>

        <div style={{ maxWidth: "1180px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "40px", alignItems: "start" }} className="portfolio-stage">
          <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: "28px", overflow: "hidden", background: "#0a0612", border: "1px solid var(--border-strong)", boxShadow: "var(--shadow-lg)" }}>
            <div style={{ position: "absolute", top: "16px", left: "16px", right: "16px", display: "flex", justifyContent: "space-between", gap: "12px", pointerEvents: "none", zIndex: 2 }}>
              <span style={{ background: "rgba(10,6,18,0.7)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.18)", color: "white", padding: "8px 14px", borderRadius: "999px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--gradient-brand)", display: "inline-block" }} />
                {featTier}
              </span>
              <span style={{ background: "rgba(10,6,18,0.7)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.18)", color: "white", padding: "8px 14px", borderRadius: "999px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em" }}>
                {featLen}
              </span>
            </div>
            <iframe
              key={featVid}
              src={`https://www.loom.com/embed/${featVid}?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>

          <div>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "22px", fontWeight: 800, lineHeight: 1.2, marginBottom: "8px", color: "var(--text)" }}>
              {sideH}
            </h3>
            <p style={{ fontSize: "14px", color: "var(--text-2)", lineHeight: 1.65, marginBottom: "22px" }}>
              {sideP}
            </p>

            <div style={{ display: "grid", gap: "8px", gridTemplateColumns: "80px repeat(3, 1fr)", alignItems: "stretch" }} className="portfolio-matrix-grid">
              <div />
              {["Core", "Essential", "Premier"].map((col) => (
                <div key={col} style={{ display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "11px", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", padding: "6px 4px", textAlign: "center" }}>
                  {col}
                </div>
              ))}

              {MATRIX.map((row) => (
                <Fragment key={`rh-${row.row}`}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "2px", lineHeight: 1.1 }}>
                    <span style={{ fontSize: "14px", color: "var(--text)", fontWeight: 800 }}>{row.row}</span>
                    <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)" }}>
                      {row.rowLabel[language as keyof typeof row.rowLabel] || row.rowLabel.en}
                    </span>
                  </div>
                  {row.cells.map((cell) => {
                    const isActive = featVid === cell.vid;
                    return (
                      <button
                        key={cell.vid}
                        onClick={() => { setFeatVid(cell.vid); setFeatTier(cell.tier); setFeatLen(row.row); }}
                        style={{
                          position: "relative",
                          aspectRatio: "16/10",
                          borderRadius: "12px",
                          overflow: "hidden",
                          cursor: "pointer",
                          background: "#0a0612",
                          border: isActive ? "2px solid transparent" : "1px solid var(--border)",
                          backgroundImage: isActive
                            ? "linear-gradient(#0a0612, #0a0612), var(--gradient-brand)"
                            : undefined,
                          backgroundOrigin: isActive ? "border-box" : undefined,
                          backgroundClip: isActive ? "padding-box, border-box" : undefined,
                          boxShadow: isActive ? "0 0 0 4px color-mix(in srgb, var(--brand-lavender) 25%, transparent)" : undefined,
                          transition: "transform .2s, box-shadow .2s, border-color .2s",
                          padding: 0,
                        }}
                        className="thumb-cell-btn"
                      >
                        <img
                          src={`https://cdn.loom.com/sessions/thumbnails/${cell.vid}-with-play.gif`}
                          alt={`${row.row} ${cell.tier}`}
                          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.92 }}
                          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                        />
                        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(180deg, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.55))" }}>
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="white" style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.5))", opacity: 0.9 }}>
                            <polygon points="5,3 19,12 5,21" />
                          </svg>
                        </div>
                        <span style={{ position: "absolute", bottom: "8px", left: "8px", fontSize: "10px", fontWeight: 700, letterSpacing: "0.06em", color: "white", background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", padding: "3px 8px", borderRadius: "6px" }}>
                          {row.row}
                        </span>
                      </button>
                    );
                  })}
                </Fragment>
              ))}
            </div>

            <div className="portfolio-tiers" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginTop: "18px", paddingTop: "18px", borderTop: "1px solid var(--border)" }}>
              {tiers.map((t) => (
                <div key={t.name} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "13px", fontWeight: 800, letterSpacing: "-0.01em", color: "var(--text)" }}>{t.name}</div>
                  <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "3px", lineHeight: 1.4 }}>{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p style={{ maxWidth: "720px", margin: "36px auto 0", fontSize: "11px", color: "var(--muted)", textAlign: "center", lineHeight: 1.55, letterSpacing: "0.01em" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", marginRight: "6px", opacity: 0.7, verticalAlign: "-2px" }}>
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          {conf}
        </p>
      </div>

      <style>{`
        .thumb-cell-btn:hover { transform: translateY(-2px); box-shadow: var(--shadow-md) !important; }
        @media (max-width: 1020px) {
          .portfolio-stage { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
        @media (max-width: 600px) {
          .portfolio-matrix-grid { grid-template-columns: 56px repeat(3, 1fr) !important; gap: 6px !important; }
          .portfolio-tiers { grid-template-columns: 1fr !important; gap: 8px !important; }
        }
      `}</style>
    </section>
  );
}
