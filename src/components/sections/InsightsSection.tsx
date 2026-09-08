"use client";
import { useLanguage } from "../LanguageContext";

const CARDS = {
  en: [
    { stat: "$10B+", title: "MENA digital ad spend by 2027", desc: "Regional brands are doubling down on digital. Production capacity is the bottleneck — not budget.", src: "Source: regional industry reports" },
    { stat: "70%", title: "of marketers say content velocity is their #1 constraint", desc: "Speed-to-market now outranks production budget as the limiting factor for campaign performance.", src: "Source: CMO benchmark survey" },
    { stat: "35M+", title: "Saudi social media users actively scrolling", desc: "Your customers are watching right now. The brands showing up with native content win their attention — and their SAR.", src: "Source: GAStat / DataReportal" },
    { stat: "12x", title: "faster delivery vs. traditional production", desc: "Average campaign cycle for our clients: 3 days. Industry standard: 8–12 weeks for a single 30-sec spot.", src: "Source: Super Studios AI client data" },
    { stat: "90%", title: "reduction in cost per asset", desc: "Production budgets that once funded one campaign now fund a full year of always-on content.", src: "Source: Super Studios AI client data" },
    { stat: "#1", title: "AI production studio in MENA", desc: "First-mover advantage in a market where AI video production is still widely underserved.", src: "Source: Vision 2030 ecosystem positioning" },
  ],
  ar: [
    { stat: "$10B+", title: "إنفاق رقمي بالمنطقة بحلول 2027", desc: "البراندات الإقليمية تضاعف رهانها على الرقمي. طاقة الإنتاج هي العقبة — مو الميزانية.", src: "المصدر: تقارير الصناعة الإقليمية" },
    { stat: "70%", title: "من المسوقين يقولون سرعة المحتوى هي قيدهم الأول", desc: "السرعة للسوق تتفوق الآن على ميزانية الإنتاج كعامل محدد لأداء الحملة.", src: "المصدر: مسح مقياس CMO" },
    { stat: "35M+", title: "مستخدم سوشيال ميديا سعودي يتصفح بنشاط", desc: "عملاؤك يشاهدون الآن. البراندات التي تظهر بمحتوى محلي تكسب انتباههم.", src: "المصدر: GAStat / DataReportal" },
    { stat: "12x", title: "تسليم أسرع مقارنة بالإنتاج التقليدي", desc: "متوسط دورة الحملة لعملائنا: 3 أيام. المعيار الصناعي: 8-12 أسبوعاً لإعلان 30 ثانية.", src: "المصدر: بيانات عملاء سوبر ستوديوز" },
    { stat: "90%", title: "تخفيض في تكلفة كل أصل", desc: "ميزانيات الإنتاج التي كانت تمول حملة واحدة تمول الآن سنة كاملة من المحتوى.", src: "المصدر: بيانات عملاء سوبر ستوديوز" },
    { stat: "#1", title: "استوديو ذكاء اصطناعي في المنطقة", desc: "ميزة الريادة في سوق لا يزال إنتاج الفيديو بالذكاء الاصطناعي فيه غير مخدوم على نطاق واسع.", src: "المصدر: تموضع منظومة رؤية 2030" },
  ],
};

export default function InsightsSection() {
  const { language } = useLanguage();
  const cards = CARDS[language as keyof typeof CARDS] || CARDS.en;

  const eye = language === "en" ? "Market Insights" : "رؤى السوق";
  const h1 = language === "en" ? "Why the MENA market" : "ليه سوق المنطقة";
  const h2 = language === "en" ? "is set to explode" : "على وشك الانفجار";
  const sub = language === "en"
    ? "A snapshot of the forces driving demand for AI-native production across the region — sourced from regional reports and our own client data."
    : "لمحة على المحركات اللي تدفع الطلب على إنتاج الذكاء الاصطناعي في المنطقة.";
  const note = language === "en"
    ? "Numbers shown are placeholders pending final figures — slots ready to receive the verified stats."
    : "الأرقام معروضة كنماذج مبدئية إلى أن نستلم النسخة النهائية.";

  return (
    <section id="insights" style={{ padding: "100px 0", background: "var(--bg-section)" }}>
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

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="insights-grid">
          {cards.map((card) => (
            <div
              key={card.stat}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "18px",
                padding: "32px",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                transition: "transform .2s, box-shadow .2s",
                cursor: "default",
              }}
              className="insight-card-hover"
            >
              <div
                className="gradient-text"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(46px, 5vw, 64px)",
                  fontWeight: 800,
                  lineHeight: 0.95,
                  letterSpacing: "-0.03em",
                }}
              >
                {card.stat}
              </div>
              <h4 style={{ fontSize: "18px", fontWeight: 800, lineHeight: 1.3, color: "var(--text)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {card.title}
              </h4>
              <p style={{ fontSize: "14px", color: "var(--text-2)", lineHeight: 1.6 }}>
                {card.desc}
              </p>
              <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "auto", borderTop: "1px dashed var(--border)", paddingTop: "14px", fontWeight: 600, letterSpacing: "0.05em" }}>
                {card.src}
              </div>
            </div>
          ))}
        </div>

        <p style={{ marginTop: "32px", textAlign: "center", fontSize: "12px", color: "var(--muted)", fontStyle: "italic" }}>
          {note}
        </p>
      </div>

      <style>{`
        .insight-card-hover:hover { transform: translateY(-4px); box-shadow: var(--shadow-md) !important; }
        @media (max-width: 900px) {
          .insights-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 601px) and (max-width: 900px) {
          .insights-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
