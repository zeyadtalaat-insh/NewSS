"use client";

import Hero from "@/components/academy/Hero";
import ProblemSection from "@/components/academy/ProblemSection";
import ROISection from "@/components/academy/ROISection";
import WhoSection from "@/components/academy/WhoSection";
import CurriculumSection from "@/components/academy/CurriculumSection";
import InstructorSection from "@/components/academy/InstructorSection";
import PricingSection from "@/components/academy/PricingSection";
import FAQSection from "@/components/academy/FAQSection";
import GuaranteeSection from "@/components/academy/GuaranteeSection";
import FinalCTA from "@/components/academy/FinalCTA";
import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/lib/translations";

export default function NAAcademy() {
  const { language } = useLanguage();
  const t = translations[language].academy;

  return (
    <main
      className="dark min-h-screen overflow-x-hidden"
      style={{
        background: "#0e080f",
        color: "#f0e8f2",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        className="font-inter pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232,38,122,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(232,38,122,0.05) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <Hero />
      <ProblemSection />
      <ROISection />
      <WhoSection />
      <CurriculumSection />
      <InstructorSection />
      <PricingSection />
      <FAQSection />
      <GuaranteeSection />
      <FinalCTA />

      <footer
        className="relative z-10 border-t flex justify-between items-center px-12 py-7 text-[12px] flex-wrap gap-3"
        style={{
          borderColor: "rgba(232,38,122,0.2)",
          color: "rgba(240,232,242,0.55)",
        }}
      >
        <span>
          © {new Date().getFullYear()}{" "}
          <strong style={{ color: "#f0e8f2" }}>{t.footer.copyright}</strong>. {t.footer.rights}
        </span>
        <span>{t.footer.disclaimer}</span>
      </footer>
    </main>
  );
}
