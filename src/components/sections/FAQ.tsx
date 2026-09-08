"use client";
import { useState } from "react";
import { useLanguage } from "../LanguageContext";

const FAQS = {
  en: [
    {
      q: "How fast can you actually deliver?",
      a: "Most projects ship in 1–5 business days from approved brief. A 30-second commercial in EN + AR with three platform cuts is typically 3 days end-to-end.",
    },
    {
      q: "What does an AI brand avatar actually mean?",
      a: "A fully custom AI personality — face, voice, and presence — that you own and can deploy across any channel, any time, without a talent contract or new shoot.",
    },
    {
      q: "Is the Arabic actually Saudi, or just translated?",
      a: "Native Saudi dialect. Our voice and copy teams are MENA-based and write in the spoken register your audience actually uses.",
    },
    {
      q: "Who owns the final assets?",
      a: "You do — full commercial rights, source files included, no recurring license fees on creative output.",
    },
    {
      q: "Can you integrate with our existing agency or team?",
      a: "Yes. We frequently slot in as a production layer beneath agency creative, or work directly with in-house brand teams.",
    },
  ],
  ar: [
    {
      q: "كم وقت التسليم الحقيقي؟",
      a: "أغلب المشاريع تتسلم في 1-5 أيام عمل من الموافقة على الفكرة. إعلان 30 ثانية بالعربي والإنجليزي مع ثلاث قصّات للمنصات عادة 3 أيام.",
    },
    {
      q: "وش يعني شخصية براند بالذكاء الاصطناعي بالضبط؟",
      a: "شخصية ذكاء اصطناعي مخصصة بالكامل — الوجه والصوت والحضور — تمتلكها وتنشرها على أي قناة بأي وقت بدون عقود ممثلين أو تصوير جديد.",
    },
    {
      q: "هل العربي سعودي فعلاً ولا مجرد ترجمة؟",
      a: "لهجة سعودية أصيلة. فريق الكتابة والصوت عندنا من المنطقة ويكتبون باللهجة المحكية اللي جمهورك يستخدمها.",
    },
    {
      q: "مين يملك الملفات النهائية؟",
      a: "أنت — حقوق تجارية كاملة، مع الملفات المصدرية، بدون رسوم ترخيص متكررة.",
    },
    {
      q: "تقدرون تشتغلون مع وكالتنا الحالية أو فريقنا؟",
      a: "أيوه. كثيراً ما نشتغل كطبقة إنتاج تحت الإبداع الوكالي، أو مباشرة مع فرق البراند الداخلية.",
    },
  ],
};

export default function FAQ() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = FAQS[language as keyof typeof FAQS] || FAQS.en;

  const eye = language === "en" ? "FAQ" : "الأسئلة";
  const h1 = language === "en" ? "Questions, answered" : "إجابات لأكثر الأسئلة شيوعاً";

  return (
    <section id="faq" style={{ padding: "96px 0", background: "var(--bg)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 28px" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", border: "1px solid var(--border)", background: "var(--surface)", padding: "8px 16px", borderRadius: "999px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--gradient-brand)", display: "inline-block" }} />
            {eye}
          </div>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 800, lineHeight: 1.04, marginTop: "20px", letterSpacing: "-0.03em", color: "var(--text)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {h1}
          </h2>
        </div>

        <div style={{ maxWidth: "760px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "22px 26px",
                  background: "transparent",
                  border: 0,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "var(--text)",
                  textAlign: "left",
                  cursor: "pointer",
                }}
              >
                <span>{faq.q}</span>
                <span
                  style={{
                    fontSize: "22px",
                    color: "var(--brand-rose)",
                    transform: openIndex === i ? "rotate(45deg)" : "rotate(0)",
                    transition: "transform .25s",
                    flexShrink: 0,
                    marginLeft: "16px",
                  }}
                >
                  +
                </span>
              </button>
              <div
                style={{
                  maxHeight: openIndex === i ? "400px" : 0,
                  overflow: "hidden",
                  transition: "max-height .3s ease",
                  padding: openIndex === i ? "0 26px 22px" : "0 26px",
                  color: "var(--text-2)",
                  fontSize: "15px",
                  lineHeight: 1.65,
                }}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
