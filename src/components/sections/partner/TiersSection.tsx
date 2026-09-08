"use client";
import Eyebrow from "@/components/ui/Eyebrow";

import { useLanguage } from "../../LanguageContext";
import { translations } from "@/lib/translations";

function PerkItem({
  icon,
  title,
  desc,
  iconBg,
}: {
  icon: string;
  title: string;
  desc: string;
  iconBg: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div
        className={`w-7 h-7 rounded-lg shrink-0 flex items-center justify-center text-sm mt-0.5 ${iconBg}`}
      >
        {icon}
      </div>
      <div>
        <strong className="block text-sm font-bold text-white/90 mb-0.5">
          {title}
        </strong>
        <span className="text-[13px] text-white/50 leading-relaxed">
          {desc}
        </span>
      </div>
    </div>
  );
}

export default function TiersSection() {
  const { language } = useLanguage();
  const t = translations[language].partner;
  const refPerks = t.tiers.referral.perks;
  const agencyPerks = t.tiers.agency.perks;

  return (
    <>
      <style>{`
        .tier-card {
          transition: transform 450ms cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 450ms cubic-bezier(0.22, 1, 0.36, 1),
                      border-color 450ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* Referral card */
        .tier-card--ref {
          background: #181220;
          border: 1px solid rgba(45, 212, 191, 0.2);
          box-shadow: none;
        }
        .tier-card--ref:hover {
          transform: translateY(-8px);
          border-color: rgba(45, 212, 191, 0.4);
          box-shadow: 0 24px 80px rgba(45, 212, 191, 0.14),
                      0 0 0 1px rgba(45, 212, 191, 0.3);
        }
        .tier-card--ref:hover .tier-btn {
          box-shadow: 0 0 40px rgba(45, 212, 191, 0.4);
        }

        /* Agency card */
        .tier-card--agency {
          background: linear-gradient(160deg, #1e1230 0%, #180f28 100%);
          border: 1px solid rgba(240, 180, 41, 0.3);
          box-shadow: 0 0 60px rgba(240, 180, 41, 0.06);
        }
        .tier-card--agency:hover {
          transform: translateY(-8px);
          border-color: rgba(240, 180, 41, 0.5);
          box-shadow: 0 24px 80px rgba(240, 180, 41, 0.16),
                      0 0 0 1px rgba(240, 180, 41, 0.4);
        }
        .tier-card--agency:hover .tier-btn {
          box-shadow: 0 0 40px rgba(240, 180, 41, 0.4);
        }

        /* Button shared */
        .tier-btn {
          transition: transform 200ms ease, box-shadow 450ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .tier-btn:hover {
          transform: translateY(-2px);
        }
      `}</style>

      <section
        id="tiers"
        dir={language === "ar" ? "rtl" : "ltr"}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 lg:px-16 py-24"
      >
        {/* Header */}
        <div className="text-center mb-14">
          <Eyebrow>{t.tiers.eyebrow}</Eyebrow>
          <h2
            className="font-extrabold text-[clamp(32px,4vw,54px)] leading-[1.06] tracking-[-1.5px] mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {t.tiers.title}
            <br />
            <span className="text-teal-400">{t.tiers.titleAccent}</span>
          </h2>
          <p className="text-base text-white/50 leading-[1.75] max-w-[560px] mx-auto">
            {t.tiers.description}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* ── Referral Card ── */}
          <div className="tier-card tier-card--ref rounded-3xl overflow-hidden max-w-2xl">
            <div className="px-8 pt-8">
              <div
                className="inline-flex items-center gap-1.5 bg-teal-400/10 border border-teal-400/30 text-teal-400 rounded-full px-3.5 py-1 text-[11px] font-bold uppercase tracking-[2px] mb-5"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                ✦ {t.tiers.referral.badge}
              </div>
              <div
                className="font-extrabold text-[clamp(26px,2.8vw,36px)] leading-[1.1] tracking-[-1px] mb-3.5"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {t.tiers.referral.titlePre}
              <br />
              {t.tiers.referral.titlePost}
              </div>
            </div>

            <p className="text-[15px] text-white/50 leading-[1.75] px-8 mb-7">
              {t.tiers.referral.description}
            </p>

            <div className="h-px bg-white/8 mx-8 mb-7" />

            <div className="px-8 pb-8 flex flex-col gap-4">
              {refPerks.map((p) => (
                <PerkItem key={p.title} {...p} iconBg="bg-teal-400/10" />
              ))}
            </div>

            <div className="px-8 pb-8">
              <a
                href="https://form.typeform.com/to/chZ2DONW"
                target="_blank"
                rel="noopener noreferrer"
                className="tier-btn w-full bg-teal-400 text-[#0a1a18] font-extrabold text-sm py-[15px] rounded-full cursor-pointer block text-center"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {t.tiers.referral.cta}
              </a>
            </div>
          </div>

          {/* ── Agency Card ── */}
          <div className="tier-card tier-card--agency rounded-3xl overflow-hidden relative max-w-2xl">
            <div
              className="absolute top-6 right-6 bg-gold text-[#1a0f00] font-extrabold text-[10px] uppercase tracking-[1.5px] px-3 py-1.5 rounded-full"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {t.tiers.agency.popular}
            </div>

            <div className="px-8 pt-8">
              <div
                className="inline-flex items-center gap-1.5 bg-yellow-400/10 border border-yellow-400/30 text-gold rounded-full px-3.5 py-1 text-[11px] font-bold uppercase tracking-[2px] mb-5"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                ★ {t.tiers.agency.badge}
              </div>
              <div
                className="font-extrabold text-[clamp(26px,2.8vw,36px)] leading-[1.1] tracking-[-1px] mb-3.5"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {t.tiers.agency.titlePre}
                <br />
                {t.tiers.agency.titleMid}
                <br />
                {t.tiers.agency.titlePost}
              </div>
            </div>

            <p className="text-[15px] text-white/50 leading-[1.75] px-8 mb-7">
              {t.tiers.agency.description}
            </p>

            <div className="h-px bg-white/8 mx-8 mb-7" />

            <div className="px-8 pb-8 flex flex-col gap-4">
              {agencyPerks.map((p) => (
                <PerkItem key={p.title} {...p} iconBg="bg-yellow-400/10" />
              ))}
            </div>

            <div className="px-8 pb-8">
              <a
                href="https://form.typeform.com/to/chZ2DONW"
                target="_blank"
                rel="noopener noreferrer"
                className="tier-btn w-full bg-gold text-[#1a0f00] font-extrabold text-sm py-[15px] rounded-full cursor-pointer block text-center"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {t.tiers.agency.cta}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
