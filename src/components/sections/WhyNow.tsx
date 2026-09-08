"use client";
import { useLanguage } from "../LanguageContext";

const STATS = {
  en: [
    { v: "Every\nBrand", title: "From corner cafes to enterprise chains", desc: "A coffee shop in Riyadh and a retail brand expanding across KSA both deserve world-class content. Now they can both afford it." },
    { v: "35M+", title: "Social media users in KSA", desc: "Your customers are scrolling right now. The brands showing up with great content are the ones winning their attention — and their SAR." },
    { v: "#1", title: "AI production studio in MENA", desc: "First-mover advantage in a market where AI video production is still widely underserved." },
  ],
  ar: [
    { v: "كل\nبراند", title: "من مقاهي الحارة لشركات عملاقة", desc: "سواء كوفي بالرياض أو شركة تتوسع بالسعودية، الكل يستاهل محتوى عالمي. والآن، الكل يقدر عليه." },
    { v: "35M+", title: "مستخدم سوشيال ميديا بالسعودية", desc: "عملائك يقلبون بجوالاتهم الحين. البراندات اللي تظهر بمحتوى بطل هي اللي تاخذ انتباههم وتكسبهم." },
    { v: "#1", title: "استوديو ذكاء اصطناعي بالمنطقة", desc: "ميزة الأفضلية في سوق لسا ما تغطى بشكل كامل في مجال إنتاج الفيديو بالذكاء الاصطناعي." },
  ],
};

export default function WhyNow() {
  const { language } = useLanguage();
  const stats = STATS[language as keyof typeof STATS] || STATS.en;

  const eye = language === "en" ? "Why Now. Why Saudi Arabia." : "ليه الحين. ليه السعودية.";
  const h1 = language === "en" ? "The biggest marketing" : "أكبر فرصة تسويقية";
  const h2 = language === "en" ? "opportunity in MENA" : "في المنطقة";
  const h3 = language === "en" ? "is right now" : "هي الآن";
  const p1 = language === "en"
    ? "Saudi Arabia is reshaping itself fast — but the real opportunity is everywhere. From the coffee shop on the corner to the enterprise brand expanding across the region, every business that wants to compete needs content that looks premium, moves fast, and speaks to its audience in their own language."
    : "السعودية تتشكل وتتطور بسرعة، بس الفرصة الحقيقية في كل مكان. من الكوفي في الزاوية للشركة اللي تتوسع.";
  const p2 = language === "en"
    ? "We built Super Studios AI for all of them. A MENA-first AI studio with global production standards, built to serve every level of ambition."
    : "بنينا سوبر ستوديوز للكل. أول استوديو ذكاء اصطناعي في المنطقة بمعايير عالمية.";

  return (
    <section style={{ padding: "96px 0", background: "var(--bg)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 28px", display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: "64px", alignItems: "center" }} className="why-grid">
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", border: "1px solid var(--border)", background: "var(--surface)", padding: "8px 16px", borderRadius: "999px", marginBottom: "22px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--gradient-brand)", display: "inline-block" }} />
            {eye}
          </div>
          <h2 style={{ fontSize: "clamp(34px, 4.5vw, 56px)", fontWeight: 800, lineHeight: 1.06, letterSpacing: "-0.03em", color: "var(--text)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {h1}<br />{h2}<br /><span className="gradient-text">{h3}</span>
          </h2>
          <p style={{ marginTop: "22px", fontSize: "16px", lineHeight: 1.7, color: "var(--text-2)" }}>{p1}</p>
          <p style={{ marginTop: "14px", fontSize: "15px", lineHeight: 1.7, color: "var(--text-2)" }}>{p2}</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {stats.map((s) => (
            <div
              key={s.v}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "18px",
                padding: "26px 28px",
                display: "flex",
                gap: "22px",
                alignItems: "center",
                boxShadow: "var(--shadow-sm)",
                transition: "transform .2s, box-shadow .2s",
              }}
            >
              <div
                className="gradient-text"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "44px",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  whiteSpace: "pre-line",
                  minWidth: "130px",
                  flexShrink: 0,
                }}
              >
                {s.v}
              </div>
              <div>
                <h4 style={{ fontSize: "16px", fontWeight: 700, color: "var(--text)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{s.title}</h4>
                <p style={{ fontSize: "13px", color: "var(--text-2)", marginTop: "6px", lineHeight: 1.55 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
