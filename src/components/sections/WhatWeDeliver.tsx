"use client";
import { useLanguage } from "../LanguageContext";

const ROWS = {
  en: [
    { feat: "Starting at 1-Day Delivery", benefit: "The fastest turnaround in the industry. Your campaign is live before your competition finishes their first production call." },
    { feat: "Authentic Saudi Arabic Content", benefit: "Native Saudi dialect, not translated MSA — because real connection requires real language." },
    { feat: "Custom AI Brand Avatar", benefit: "A permanent brand character you fully own. Consistent, scalable, always on-message." },
    { feat: "Zero Physical Production Overhead", benefit: "No crew, no studio, no permits. The savings go back into your marketing budget." },
    { feat: "Bilingual EN + AR Production", benefit: "One brief, two languages. Reach every segment of your audience without a second shoot." },
    { feat: "Unlimited Content Variations", benefit: "A/B test, resize, and repurpose without booking a single additional shoot day." },
    { feat: "Serves Every Business Size", benefit: "From the corner coffee shop to multi-location enterprise chains, our pricing scales with you." },
    { feat: "Dedicated MENA Production Team", benefit: "Not a generic agency. A studio built specifically for this market, its culture, and its pace." },
  ],
  ar: [
    { feat: "تسليم يبدأ من يوم واحد", benefit: "أسرع تسليم في الصناعة. حملتك تنطلق قبل أن ينهي منافسوك أول مكالمة إنتاج." },
    { feat: "محتوى سعودي أصيل", benefit: "لهجة سعودية أصيلة، مو فصحى مترجمة — لأن التواصل الحقيقي يحتاج لغة حقيقية." },
    { feat: "شخصية براند بالذكاء الاصطناعي", benefit: "شخصية براند دائمة تمتلكها بالكامل. ثابتة وقابلة للتوسع ودايماً على الرسالة." },
    { feat: "صفر تكاليف إنتاج مادية", benefit: "لا طاقم، لا استوديو، لا تصاريح. المدخرات ترجع لميزانيتك التسويقية." },
    { feat: "إنتاج ثنائي اللغة EN + AR", benefit: "فكرة واحدة، لغتان. وصول لكل شريحة من جمهورك بدون تصوير ثاني." },
    { feat: "أشكال محتوى لا محدودة", benefit: "اختبر وعدّل وأعد استخدام المحتوى بدون حجز يوم تصوير إضافي." },
    { feat: "يخدم كل حجم أعمال", benefit: "من الكوفي في الزاوية إلى سلاسل المؤسسات متعددة المواقع، أسعارنا تنمو معك." },
    { feat: "فريق إنتاج MENA متخصص", benefit: "مو وكالة عادية. استوديو مبني خصيصاً لهذا السوق وثقافته وإيقاعه." },
  ],
};

export default function WhatWeDeliver() {
  const { language } = useLanguage();
  const rows = ROWS[language as keyof typeof ROWS] || ROWS.en;

  const eye = language === "en" ? "What We Deliver" : "وش نقدم";
  const h1 = language === "en" ? "What Super Studios AI" : "وش يعطي سوبر ستوديوز";
  const h2 = language === "en" ? "delivers for your brand" : "لعلامتك التجارية";
  const sub = language === "en" ? "Every advantage that makes us impossible to ignore." : "كل ميزة تخلي منافسيك ما يلحقونك.";
  const col1 = language === "en" ? "What You Get" : "وش تاخذ";
  const col2 = language === "en" ? "Why It Matters" : "ليه هي مهمة";

  return (
    <section style={{ padding: "96px 0", background: "var(--bg-section)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 28px" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", border: "1px solid var(--border)", background: "var(--surface)", padding: "8px 16px", borderRadius: "999px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--gradient-brand)", display: "inline-block" }} />
            {eye}
          </div>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 800, lineHeight: 1.04, marginTop: "20px", letterSpacing: "-0.03em", color: "var(--text)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {h1}<br /><span className="gradient-text">{h2}</span>
          </h2>
          <p style={{ marginTop: "20px", fontSize: "17px", lineHeight: 1.65, color: "var(--text-2)", maxWidth: "620px", marginLeft: "auto", marginRight: "auto" }}>
            {sub}
          </p>
        </div>

        <div style={{ maxWidth: "1100px", margin: "0 auto", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "28px", overflow: "hidden", boxShadow: "var(--shadow-md)" }}>
          <div className="deliver-header" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", padding: "18px 32px", background: "var(--surface-2)", borderBottom: "1px solid var(--border)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>
            <span style={{ color: "var(--brand-blue)" }}>{col1}</span>
            <span style={{ color: "var(--muted)" }}>{col2}</span>
          </div>
          {rows.map((row, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "24px",
                padding: "22px 32px",
                borderBottom: i < rows.length - 1 ? "1px solid var(--border)" : "none",
                alignItems: "center",
                transition: "background .2s",
              }}
              className="deliver-row-hover"
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontWeight: 600, fontSize: "15px", color: "var(--text)" }}>
                <span style={{ color: "var(--brand-rose)", fontSize: "16px", flexShrink: 0 }}>◎</span>
                {row.feat}
              </div>
              <div style={{ color: "var(--text-2)", fontSize: "15px", lineHeight: 1.55 }}>
                {row.benefit}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .deliver-row-hover:hover { background: var(--surface-2); }
        @media (max-width: 700px) {
          .deliver-header { display: none !important; }
          .deliver-row-hover { grid-template-columns: 1fr !important; gap: 8px !important; padding: 18px 22px !important; }
        }
      `}</style>
    </section>
  );
}
