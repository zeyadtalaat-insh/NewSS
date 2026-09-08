"use client";
import { useLanguage } from "../LanguageContext";

const SEGMENTS_EN = [
  {
    emoji: "☕",
    title: "Local Shops and Restaurants",
    desc: "Coffee shops, restaurants, bakeries, and local retailers that want to look premium on social media and own their neighborhood before a bigger competitor does.",
    pains: [
      "Production studios are too expensive for their budget",
      "Phone videos do not convert the way polished content does",
      "Competitors with bigger budgets keep outshining them",
    ],
    accent: "#e8267a",
    headerBg:
      "linear-gradient(135deg, rgba(232,38,122,0.12), rgba(232,38,122,0.04))",
    border: "rgba(255,255,255,0.08)",
    borderHover: "rgba(232,38,122,0.3)",
    divider: "rgba(255,255,255,0.08)",
  },
  {
    emoji: "🚀",
    title: "Startups and Growth Brands",
    desc: "Ambitious founders who need to look like a top-tier brand from day one, without the budget or timeline that usually requires.",
    pains: [
      "No budget for traditional production houses",
      "Need to move with the market, not behind it",
      "Freelancers cannot maintain quality at scale",
    ],
    accent: "#2dd4bf",
    headerBg:
      "linear-gradient(135deg, rgba(45,212,191,0.1), rgba(45,212,191,0.03))",
    border: "rgba(255,255,255,0.08)",
    borderHover: "rgba(45,212,191,0.3)",
    divider: "rgba(255,255,255,0.08)",
  },
  {
    emoji: "🏢",
    title: "Enterprises and Retail Brands",
    desc: "Established brands in F&B, retail, real estate, and hospitality that need consistent high-quality content across multiple campaigns and channels.",
    pains: [
      "Cannot produce content at the pace social demands",
      "Retaining production agencies is expensive",
      "Brand inconsistency across markets and formats",
    ],
    accent: "#f5c842",
    headerBg:
      "linear-gradient(135deg, rgba(245,200,66,0.1), rgba(245,200,66,0.03))",
    border: "rgba(245,200,66,0.2)",
    borderHover: "rgba(245,200,66,0.45)",
    divider: "rgba(245,200,66,0.12)",
  },
];

const SEGMENTS_AR = [
  {
    emoji: "☕",
    title: "المقاهي والمطاعم المحلية",
    desc: "المقاهي، المطاعم، المخابز، ومتاجر التجزئة المحلية اللي تبغى تبرز بهوية احترافية على السوشيال ميديا وتستحوذ على حيها قبل لا يسبقها منافس أكبر.",
    pains: [
      "أسعار استوديوهات الإنتاج العالية اللي ما تتناسب مع ميزانيتهم",
      "تصوير الجوال ما يجيب مبيعات زي المحتوى الاحترافي",
      "المنافسين اللي ميزانياتهم أكبر دايم يغطون عليهم",
    ],
    accent: "#e8267a",
    headerBg: "linear-gradient(135deg, rgba(232,38,122,0.12), rgba(232,38,122,0.04))",
    border: "rgba(255,255,255,0.08)",
    borderHover: "rgba(232,38,122,0.3)",
    divider: "rgba(255,255,255,0.08)",
  },
  {
    emoji: "🚀",
    title: "الشركات الناشئة والمشاريع الواعدة",
    desc: "المؤسسين الطموحين اللي يحتاجون يظهرون بعلامة تجارية قوية من أول يوم، بس بدون ميزانية ضخمة أو انتظار طويل.",
    pains: [
      "ما فيه ميزانية لشركات الإنتاج التقليدية",
      "يحتاجون يواكبون السوق بسرعة مو يمشون وراه",
      "المستقلين (Freelancers) ما يقدرون يحافظون على الجودة المطلوبة بشكل مستمر",
    ],
    accent: "#2dd4bf",
    headerBg: "linear-gradient(135deg, rgba(45,212,191,0.1), rgba(45,212,191,0.03))",
    border: "rgba(255,255,255,0.08)",
    borderHover: "rgba(45,212,191,0.3)",
    divider: "rgba(255,255,255,0.08)",
  },
  {
    emoji: "🏢",
    title: "الشركات الكبرى وعلامات التجزئة",
    desc: "العلامات التجارية الراسخة في قطاع الأغذية والتجزئة والعقارات والضيافة، اللي تحتاج محتوى عالي الجودة بشكل مستمر لعدة حملات إعلانية ومنصات.",
    pains: [
      "صعوبة إنتاج المحتوى بالسرعة اللي تطلبها تصدر الترند",
      "شركات الإنتاج تكلف أموال طائلة",
      "تذبذب بهوية العلامة التجارية عبر الأسواق والحملات",
    ],
    accent: "#f5c842",
    headerBg: "linear-gradient(135deg, rgba(245,200,66,0.1), rgba(245,200,66,0.03))",
    border: "rgba(245,200,66,0.2)",
    borderHover: "rgba(245,200,66,0.45)",
    divider: "rgba(245,200,66,0.12)",
  },
];

export default function WhoWeServe() {
  const { language } = useLanguage();
  const SEGMENTS = language === "en" ? SEGMENTS_EN : SEGMENTS_AR;
  
  return (
    <section className="relative z-1 max-w-[1160px] mx-auto px-6 lg:px-[60px] py-16">
      {/* Eyebrow */}
      <div className="text-center mb-2">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/8 rounded-full px-4 py-1.5 text-xs text-white/50">
          <span className="text-teal-400">✶</span> {language === "en" ? "Who We Serve" : "مين نخدم"}
        </div>
      </div>

      {/* Heading */}
      <h2
        className="font-extrabold text-[clamp(32px,4vw,54px)] leading-[1.06] tracking-[-1.5px] text-center mb-4"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {language === "en" ? (
          <>
            Built for the brands
            <br />
            <span className="text-pink">that move fast</span>
          </>
        ) : (
          <>
            مصمم للعلامات التجارية
            <br />
            <span className="text-pink">اللي تتحرك بسرعة</span>
          </>
        )}
      </h2>

      <p className="text-base text-white/50 leading-[1.75] text-center max-w-[560px] mx-auto mb-14">
        {language === "en" 
          ? "We work with businesses of every size across Saudi Arabia and the wider MENA region. If you are in any of these categories, we were made for you." 
          : "نشتغل مع الشركات بكل أحجامها في السعودية والشرق الأوسط. لو كنت من ضمن هذولي، حنا صُنعنا لك."}
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SEGMENTS.map((s) => (
          <div
            key={s.title}
            className="bg-[#181220] rounded-2xl overflow-hidden transition-all duration-250 group"
            style={{ border: `1px solid ${s.border}` }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor =
                s.borderHover;
              (e.currentTarget as HTMLDivElement).style.transform =
                "translateY(-6px)";
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = s.border;
              (e.currentTarget as HTMLDivElement).style.transform =
                "translateY(0)";
            }}
          >
            {/* Header */}
            <div
              className="p-8"
              style={{
                background: s.headerBg,
                borderBottom: `1px solid ${s.divider}`,
              }}
            >
              <div className="text-[38px] mb-3.5">{s.emoji}</div>
              <div
                className="font-extrabold text-xl mb-2"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: s.accent,
                }}
              >
                {s.title}
              </div>
              <div className="text-[13px] text-white/50 leading-[1.7]">
                {s.desc}
              </div>
            </div>

            {/* Pain points */}
            <div className="p-7">
              <div className="text-[11px] uppercase tracking-[2px] text-white/28 font-bold mb-3.5">
                {language === "en" ? "Their Pain Points" : "تحدياتهم"}
              </div>
              <div className="flex flex-col gap-2.5">
                {s.pains.map((pain) => (
                  <div
                    key={pain}
                    className="flex items-start gap-2 text-[13px] text-white/50"
                  >
                    <span
                      className="mt-0.5 shrink-0"
                      style={{ color: s.accent }}
                    >
                      →
                    </span>
                    {pain}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
