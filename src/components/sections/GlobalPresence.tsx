"use client";
import { useLanguage } from "../LanguageContext";

const MARKETS = [
  { flag: "🇨🇦", code: "CA" },
  { flag: "🇸🇦", code: "KSA" },
  { flag: "🇦🇪", code: "UAE" },
  { flag: "🇪🇬", code: "EGY" },
];

const OFFICES_EN = [
  {
    flag: "🇨🇦",
    name: "Toronto, Canada",
    desc: "Business development and international partnerships, bridging North American and MENA markets",
  },
  {
    flag: "🇹🇷",
    name: "Istanbul, Turkiye",
    desc: "Creative and operations support for UAE and KSA clients, operating on GMT+3",
  },
  {
    flag: "🇪🇬",
    name: "Cairo, Egypt",
    desc: "Core production team of AI media designers and video producers serving KSA and UAE",
  },
];

const OFFICES_AR = [
  {
    flag: "🇨🇦",
    name: "تورونتو، كندا",
    desc: "تطوير الأعمال والشراكات الدولية، لربط أسواق أمريكا الشمالية بالشرق الأوسط.",
  },
  {
    flag: "🇹🇷",
    name: "إسطنبول، تركيا",
    desc: "دعم الإبداع والعمليات للعملاء في الامارات والسعودية، شغالين على توقيت GMT+3.",
  },
  {
    flag: "🇪🇬",
    name: "القاهرة، مصر",
    desc: "فريق الإنتاج الأساسي من مصممين ومنتجين بالذكاء الاصطناعي لخدمة السعودية والإمارات.",
  },
];

function WorldMap() {
  return (
    <div className="bg-[#0d1818] border border-teal-400/18 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
      <svg
        viewBox="0 0 900 500"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto block"
      >
        <rect width="900" height="500" fill="#0d1a1a" rx="16" />
        {/* Continents */}
        {[
          "M95,60 L175,55 L215,70 L240,90 L255,120 L260,150 L245,175 L230,190 L215,205 L195,220 L175,240 L155,255 L140,270 L125,255 L110,235 L95,215 L80,195 L70,175 L65,155 L70,130 L80,100 Z",
          "M195,30 L225,25 L240,35 L235,55 L215,60 L195,55 Z",
          "M175,240 L185,250 L180,265 L170,270 L160,260 L155,255 Z",
          "M185,265 L210,260 L235,270 L250,290 L255,320 L250,355 L240,385 L225,400 L205,405 L185,395 L170,375 L165,350 L168,315 L175,290 Z",
          "M420,55 L455,50 L475,60 L480,75 L470,90 L455,100 L445,110 L430,105 L415,95 L410,80 Z",
          "M440,30 L455,25 L465,35 L460,50 L450,55 L440,50 L435,40 Z",
          "M415,60 L425,55 L428,68 L420,72 L413,67 Z",
          "M430,120 L465,115 L490,125 L505,145 L510,175 L505,210 L495,240 L480,270 L465,295 L450,310 L435,305 L420,285 L410,260 L405,230 L408,200 L415,170 L420,145 Z",
          "M510,135 L540,130 L560,140 L565,160 L555,180 L540,190 L525,185 L510,170 L505,155 Z",
          "M480,30 L580,25 L660,30 L700,45 L720,60 L710,80 L680,90 L640,95 L600,90 L560,85 L520,80 L490,70 L475,55 Z",
          "M600,100 L640,95 L665,110 L670,135 L660,155 L640,165 L620,160 L605,145 L598,125 Z",
          "M700,120 L735,115 L755,130 L750,155 L730,165 L710,158 L698,140 Z",
          "M710,60 L775,55 L810,70 L820,95 L810,120 L785,130 L755,125 L730,115 L715,100 L708,80 Z",
          "M720,300 L780,295 L820,310 L835,335 L825,360 L800,375 L765,375 L735,360 L720,335 L715,315 Z",
          "M800,80 L810,75 L818,85 L812,95 L802,92 Z",
        ].map((d, i) => (
          <path key={i} d={d} fill="#1a3a3a" stroke="#0d2a2a" strokeWidth="1" />
        ))}
        {/* Connection lines */}
        <path
          d="M168,148 Q300,80 530,155"
          stroke="#2dd4bf"
          strokeWidth="1.2"
          fill="none"
          strokeDasharray="5,4"
          opacity="0.5"
        />
        <path
          d="M468,82 Q500,120 530,155"
          stroke="#2dd4bf"
          strokeWidth="1.2"
          fill="none"
          strokeDasharray="5,4"
          opacity="0.5"
        />
        <path
          d="M480,155 Q505,155 530,155"
          stroke="#2dd4bf"
          strokeWidth="1.2"
          fill="none"
          strokeDasharray="5,4"
          opacity="0.5"
        />
        {/* Office dots */}
        <circle cx="168" cy="148" r="10" fill="#f5c842" opacity="0.15" />
        <circle cx="168" cy="148" r="6" fill="#f5c842" opacity="0.9" />
        <text
          x="168"
          y="136"
          textAnchor="middle"
          fill="#f5f0fa"
          fontSize="9"
          fontFamily="Outfit,sans-serif"
          opacity="0.8"
        >
          Toronto
        </text>
        <circle cx="468" cy="82" r="10" fill="#f5c842" opacity="0.15" />
        <circle cx="468" cy="82" r="6" fill="#f5c842" opacity="0.9" />
        <text
          x="468"
          y="70"
          textAnchor="middle"
          fill="#f5f0fa"
          fontSize="9"
          fontFamily="Outfit,sans-serif"
          opacity="0.8"
        >
          Istanbul
        </text>
        <circle cx="480" cy="155" r="10" fill="#f5c842" opacity="0.15" />
        <circle cx="480" cy="155" r="6" fill="#f5c842" opacity="0.9" />
        <text
          x="480"
          y="143"
          textAnchor="middle"
          fill="#f5f0fa"
          fontSize="9"
          fontFamily="Outfit,sans-serif"
          opacity="0.8"
        >
          Cairo
        </text>
        {/* KSA — primary market */}
        <circle cx="530" cy="155" r="18" fill="#2dd4bf" opacity="0.07" />
        <circle cx="530" cy="155" r="12" fill="#2dd4bf" opacity="0.15" />
        <circle cx="530" cy="155" r="7" fill="#2dd4bf" opacity="0.95" />
        <text
          x="530"
          y="143"
          textAnchor="middle"
          fill="#2dd4bf"
          fontSize="9"
          fontFamily="Outfit,sans-serif"
          fontWeight="700"
          opacity="0.95"
        >
          KSA
        </text>
        {/* UAE */}
        <circle cx="560" cy="148" r="9" fill="#2dd4bf" opacity="0.1" />
        <circle cx="560" cy="148" r="5" fill="#2dd4bf" opacity="0.7" />
        <text
          x="560"
          y="136"
          textAnchor="middle"
          fill="#f5f0fa"
          fontSize="9"
          fontFamily="Outfit,sans-serif"
          opacity="0.6"
        >
          UAE
        </text>
      </svg>
    </div>
  );
}

export default function GlobalPresence() {
  const { language } = useLanguage();
  const OFFICES = language === "en" ? OFFICES_EN : OFFICES_AR;

  return (
    <section className="relative z-1 mx-auto px-6 lg:px-[60px] py-24">
      {/* Header */}
      <div className="text-center pb-12">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/8 rounded-full px-4 py-1.5 text-xs text-white/50 mb-5">
          <span className="text-teal-400">✶</span> {language === "en" ? "Our Reach" : "نطاق وصولنا"}
        </div>
        <h2
          className="font-extrabold text-[clamp(32px,4vw,54px)] leading-[1.06] tracking-[-1.5px] mb-4"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {language === "en" ? (
            <>Global <span className="text-teal-400">Presence</span></>
          ) : (
            <>تواجدنا <span className="text-teal-400">العالمي</span></>
          )}
        </h2>
        <p className="text-base text-white/50 max-w-[520px] mx-auto leading-[1.75]">
          {language === "en"
            ? "Worldwide production experience, deployed directly into the MENA market with the cultural precision it demands."
            : "خبرة إنتاج عالمية، نوجهها مباشرة لسوق الشرق الأوسط بالدقة والثقافة اللي تناسبه."}
        </p>
      </div>

      {/* Layout: markets | map | offices */}
      <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr_270px] gap-6 items-start">
        {/* Markets */}
        <div>
          <div className="text-[11px] uppercase tracking-[3px] text-teal-400 font-bold mb-[18px]">
            {language === "en" ? "Our Markets" : "أسواقنا"}
          </div>
          <div className="flex flex-row lg:flex-col gap-2.5">
            {MARKETS.map((m) => (
              <div
                key={m.code}
                className="bg-[#181220] border border-white/8 rounded-xl py-3.5 px-3 flex flex-col items-center gap-1.5 font-extrabold text-[11px] text-white/50 tracking-[1px] transition-all duration-200 hover:border-[rgba(232,38,122,0.25)] hover:text-white cursor-default"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <span className="text-xl">{m.flag}</span>
                <span>{m.code}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <WorldMap />

        {/* Offices */}
        <div>
          <div className="text-[11px] uppercase tracking-[3px] text-teal-400 font-bold mb-[18px]">
            {language === "en" ? "Our Offices" : "مكاتبنا"}
          </div>
          <div className="flex flex-col gap-3">
            {OFFICES.map((o) => (
              <div
                key={o.name}
                className="bg-[#181220] border border-white/8 rounded-[14px] p-5 flex gap-3.5 items-start transition-all duration-200 hover:border-teal-400/30 hover:-translate-x-0.5"
              >
                <span className="text-xl shrink-0 mt-0.5">{o.flag}</span>
                <div>
                  <div
                    className="font-bold text-sm text-white mb-1"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {o.name}
                  </div>
                  <div className="text-xs text-white/50 leading-[1.6]">
                    {o.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
