"use client";
import { useLanguage } from "../LanguageContext";

const STEPS = {
  en: [
    { num: "01", title: "You share the brief", desc: "Tell us your goal, audience, and vibe. A 15-minute call or a one-pager is all we need." },
    { num: "02", title: "We go to work", desc: "Script, visuals, voice, and edit run simultaneously — not sequentially." },
    { num: "03", title: "You review & refine", desc: "First cut delivered fast. Revisions are quick and included per project." },
    { num: "04", title: "You go live", desc: "Final files in every format for every platform. Starting at 1-day delivery — fastest in the industry." },
  ],
  ar: [
    { num: "01", title: "تشاركنا الفكرة", desc: "عطنا التوجه والجمهور والمزاج العام. مكالمة 15 دقيقة تكفي." },
    { num: "02", title: "نبدأ ندعس", desc: "السكربت والتصميم والصوت والمونتاج كلها بنفس الوقت." },
    { num: "03", title: "تراجع وتعتمد", desc: "أول مسودة بسرعة صاروخية. التعديلات سريعة ومضمونة." },
    { num: "04", title: "تطلق حملتك", desc: "ملفات نهائية لكل منصة. تسليم يبدأ من 24 ساعة." },
  ],
};

export default function TheProcess() {
  const { language } = useLanguage();
  const steps = STEPS[language as keyof typeof STEPS] || STEPS.en;

  const eye = language === "en" ? "The Process" : "كيف نشتغل";
  const h1 = language === "en" ? "From brief to broadcast" : "من الفكرة للإطلاق";
  const h2 = language === "en" ? "in as little as 24 hours" : "في أقل من 24 ساعة";
  const sub = language === "en"
    ? "A production process engineered for speed without sacrificing quality. No back-and-forth. No wasted weeks. Just results."
    : "عملية إنتاج مصممة للسرعة بدون تضحية بالجودة. مافي روحة وجية. فقط نتائج.";

  return (
    <section id="process" style={{ padding: "110px 0", position: "relative", background: "var(--bg)" }}>
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

        <div style={{ position: "relative", maxWidth: "1100px", margin: "80px auto 0" }}>
          <svg
            style={{ width: "100%", height: "100px", overflow: "visible" }}
            viewBox="0 0 1100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#6B7FD0" />
                <stop offset="50%" stopColor="#B891C5" />
                <stop offset="100%" stopColor="#D88EA8" />
              </linearGradient>
            </defs>
            <path
              d="M 60,50 C 250,-10 350,110 550,50 C 750,-10 850,110 1040,50"
              fill="none"
              stroke="url(#flowGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="6 6"
              className="animate-dash"
            />
          </svg>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "32px",
              marginTop: "-50px",
              position: "relative",
              zIndex: 2,
            }}
            className="flow-steps-grid"
          >
            {steps.map((step) => (
              <div key={step.num} style={{ textAlign: "center", padding: "0 8px" }}>
                <div
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontSize: "clamp(80px, 11vw, 140px)",
                    fontWeight: 400,
                    lineHeight: 1,
                    paddingBottom: "6px",
                    letterSpacing: "-0.04em",
                    background: "var(--gradient-brand)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                  className="dark:![background:var(--gradient-brand-soft)]"
                >
                  {step.num}
                </div>
                <div
                  style={{
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    background: "var(--gradient-brand)",
                    margin: "14px auto",
                    boxShadow: "0 0 0 6px color-mix(in srgb, var(--brand-blue) 12%, transparent)",
                  }}
                />
                <h4 style={{ fontSize: "20px", fontWeight: 800, lineHeight: 1.2, color: "var(--text)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: "14px", color: "var(--text-2)", marginTop: "12px", lineHeight: 1.55, maxWidth: "240px", marginLeft: "auto", marginRight: "auto" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .flow-steps-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .flow-steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
