"use client";

import { useLanguage } from "../LanguageContext";

export default function InvoiceComparison() {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const t = {
    eye: language === "en" ? "Cost Analysis · SSAI-COMPARE-2026" : "تحليل التكاليف · SSAI-COMPARE-2026",
    h1: language === "en" ? "Traditional production" : "الإنتاج التقليدي",
    vs: language === "en" ? "vs." : "مقابل",
    h2: language === "en" ? "Super Studios AI" : "سوبر ستوديوز AI",
    sub: language === "en"
      ? "The numbers every marketing manager should see before signing their next production contract."
      : "الأرقام اللي أي مدير تسويق لازم يشوفها قبل ما يوقع أي عقد إنتاج.",
    budget: language === "en" ? "Budget Breakdown" : "توزيع الميزانية",
    scope: language === "en" ? "30-Second Commercial Production" : "إنتاج إعلان 30 ثانية",
    market: language === "en" ? "Saudi Arabia market · Standard brand campaign" : "السوق السعودي · حملة براند تجارية",
    m1k: language === "en" ? "Scope" : "النطاق",
    m1v: language === "en" ? "Single 30-sec commercial" : "إعلان واحد 30 ثانية",
    m2k: language === "en" ? "Traditional Timeline" : "المدة التقليدية",
    m2v: language === "en" ? "8 to 12 weeks" : "من 8 لـ 12 أسبوع",
    m3k: language === "en" ? "Super Studios AI Timeline" : "مدة سوبر ستوديوز",
    m3v: language === "en" ? "Starting at 1-day delivery" : "تسليم من 24 ساعة",
    t1: language === "en" ? "Line Item" : "البند",
    t3: language === "en" ? "Traditional" : "التقليدي",
    t4: language === "en" ? "Super Studios AI" : "سوبر ستوديوز AI",
    startHere: language === "en" ? "Start Here" : "ابدأ الآن",
    total: language === "en" ? "Total Investment" : "إجمالي الاستثمار",
  };

  const rows: Array<{ group?: string; item?: string; trad?: string; ssai?: string; ssaiIncluded?: boolean }> = [
    { group: language === "en" ? "Pre-Production" : "ما قبل الإنتاج" },
    { item: language === "en" ? "Creative agency fees" : "رسوم الوكالة الإبداعية", trad: "$25,000+", ssai: language === "en" ? "Included" : "مشمول", ssaiIncluded: true },
    { item: language === "en" ? "Director" : "المخرج", trad: "$15,000", ssai: language === "en" ? "Included" : "مشمول", ssaiIncluded: true },
    { group: language === "en" ? "Physical Production" : "الإنتاج المادي" },
    { item: language === "en" ? "Production crew" : "طاقم الإنتاج", trad: "$20,000+", ssai: language === "en" ? "None" : "لا شيء" },
    { item: language === "en" ? "Studio rental" : "إيجار الاستوديو", trad: "$10,000+", ssai: language === "en" ? "None" : "لا شيء" },
    { item: language === "en" ? "Equipment rental" : "إيجار المعدات", trad: "$8,000+", ssai: language === "en" ? "None" : "لا شيء" },
    { item: language === "en" ? "Actors / talent fees" : "رسوم الممثلين", trad: "$10,000+", ssai: language === "en" ? "None" : "لا شيء" },
    { item: language === "en" ? "Set design and props" : "تصميم المشهد والدعائم", trad: "$7,000+", ssai: language === "en" ? "None" : "لا شيء" },
    { group: language === "en" ? "Logistics" : "اللوجستيات" },
    { item: language === "en" ? "Travel & accommodation" : "السفر والإقامة", trad: "$5,000+", ssai: language === "en" ? "None" : "لا شيء" },
    { item: language === "en" ? "Location permits" : "تصاريح التصوير", trad: "$3,000+", ssai: language === "en" ? "None" : "لا شيء" },
    { item: language === "en" ? "Catering & production days" : "التموين وأيام الإنتاج", trad: "$4,000+", ssai: language === "en" ? "None" : "لا شيء" },
    { group: language === "en" ? "Post-Production" : "ما بعد الإنتاج" },
    { item: language === "en" ? "Post-production team" : "فريق ما بعد الإنتاج", trad: "$15,000+", ssai: language === "en" ? "Included" : "مشمول", ssaiIncluded: true },
  ];

  return (
    <section style={{ padding: "96px 0", background: "var(--bg-section)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 28px" }}>
        <div style={{ textAlign: "center", maxWidth: "1000px", margin: "0 auto 56px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", border: "1px solid var(--border)", background: "var(--surface)", padding: "8px 16px", borderRadius: "999px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--gradient-brand)", display: "inline-block" }} />
            {t.eye}
          </div>
          <h2 style={{ fontSize: "clamp(44px, 6.5vw, 92px)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.035em", marginTop: "22px", color: "var(--text)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {t.h1}
            <br />
            <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400, opacity: 0.7 }}>{t.vs}</span>{" "}
            <span className="gradient-text">{t.h2}</span>
          </h2>
          <p style={{ marginTop: "26px", fontSize: "19px", lineHeight: 1.6, color: "var(--text-2)", maxWidth: "720px", marginLeft: "auto", marginRight: "auto" }}>
            {t.sub}
          </p>
        </div>

        {/* <div style={{ maxWidth: "1100px", margin: "0 auto", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "28px", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
          <div style={{ padding: "36px 44px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "24px", borderBottom: "1px solid var(--border)", background: "linear-gradient(135deg, var(--surface) 0%, var(--surface-2) 100%)", flexDirection: isRTL ? "row-reverse" : "row" }}>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)" }}>{t.budget}</div>
              <div style={{ fontSize: "22px", fontWeight: 800, marginTop: "6px", color: "var(--text)" }}>{t.scope}</div>
              <div style={{ fontSize: "13px", color: "var(--muted)", marginTop: "4px" }}>{t.market}</div>
            </div>
            <div style={{ textAlign: isRTL ? "left" : "right" }}>
              <div style={{ fontSize: "26px", fontWeight: 900, letterSpacing: "0.25em", color: "var(--border-strong)" }}>COST ANALYSIS</div>
              <div style={{ fontFamily: "ui-monospace, monospace", fontSize: "11px", color: "var(--muted)", marginTop: "4px" }}>REF: SSAI-COMPARE-2026</div>
            </div>
          </div>

          <div className="grad-bar" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", padding: "22px 44px", background: "var(--surface-2)", borderBottom: "1px solid var(--border)" }}>
            <div>
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)" }}>{t.m1k}</div>
              <div style={{ fontSize: "14px", fontWeight: 600, marginTop: "6px", color: "var(--text)" }}>{t.m1v}</div>
            </div>
            <div>
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)" }}>{t.m2k}</div>
              <div style={{ fontSize: "14px", fontWeight: 600, marginTop: "6px", color: "var(--brand-rose)" }}>{t.m2v}</div>
            </div>
            <div>
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)" }}>{t.m3k}</div>
              <div style={{ fontSize: "14px", fontWeight: 600, marginTop: "6px", color: "var(--good)" }}>{t.m3v}</div>
            </div>
          </div>

          <div style={{ padding: "12px 28px 28px", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "500px" }}>
              <colgroup>
                <col style={{ width: "33%" }} />
                <col style={{ width: "33.5%" }} />
                <col style={{ width: "33.5%" }} />
              </colgroup>
              <thead>
                <tr>
                  {[t.t1, t.t3, t.t4].map((h, i) => (
                    <th key={i} style={{ textAlign: i === 0 ? (isRTL ? "right" : "left") : "center", fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)", padding: "18px 12px 12px", borderBottom: "1px solid var(--border)" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => {
                  if (row.group) {
                    return (
                      <tr key={i}>
                        <td colSpan={3} style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)", padding: "20px 12px 8px", textAlign: isRTL ? "right" : "left" }}>
                          {row.group}
                        </td>
                      </tr>
                    );
                  }
                  return (
                    <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                      <td style={{ padding: "14px 12px", fontSize: "14px", fontWeight: 600, color: "var(--text)", textAlign: isRTL ? "right" : "left" }}>{row.item}</td>
                      <td style={{ padding: "14px 12px", fontSize: "14px", color: "var(--text-2)", textAlign: "center", fontVariantNumeric: "tabular-nums" }}>{row.trad}</td>
                      <td style={{ padding: "14px 12px", fontSize: "14px", fontWeight: row.ssaiIncluded ? 400 : 700, fontStyle: row.ssaiIncluded ? "italic" : "normal", color: row.ssaiIncluded ? "var(--muted)" : "var(--good)", textAlign: "center", fontVariantNumeric: "tabular-nums" }}>
                        {row.ssai}
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td style={{ padding: "22px 12px", borderTop: "2px solid var(--border-strong)", fontSize: "18px", fontWeight: 800, color: "var(--text)", textAlign: isRTL ? "right" : "left" }}>
                    {t.total}
                  </td>
                  <td style={{ padding: "22px 12px", borderTop: "2px solid var(--border-strong)", fontSize: "16px", color: "var(--muted)", textDecoration: "line-through", textAlign: "center" }}>
                    $120,000 – $250,000+
                  </td>
                  <td style={{ padding: "22px 12px", borderTop: "2px solid var(--border-strong)", textAlign: "center" }}>
                    <a href="https://form.typeform.com/to/o51YfOvB" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", padding: "10px 18px", borderRadius: "999px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "12px", textDecoration: "none", background: "var(--gradient-brand)", color: "white", border: "1px solid transparent" }}>
                      {t.startHere}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", margin: "8px 28px 28px", padding: "24px 28px", background: "var(--good-tint)", borderRadius: "16px", border: "1px solid color-mix(in srgb, var(--good) 30%, transparent)" }}>
            {[
              { k: language === "en" ? "Rendering Time" : "وقت التصيير", v: language === "en" ? "Insta-preview" : "فوري" },
              { k: language === "en" ? "Production Scale" : "نطاق الإنتاج", v: language === "en" ? "Unlimited" : "بلا حدود" },
              // { k: language === "en" ? "Fixed Overhead Costs" : "التكاليف الثابتة", v: language === "en" ? "Zero" : "صفر" },
            ].map((item) => (
              <div key={item.k}>
                <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)" }}>{item.k}</div>
                <div style={{ fontSize: "24px", fontWeight: 800, color: "var(--good)", marginTop: "6px" }}>{item.v}</div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
