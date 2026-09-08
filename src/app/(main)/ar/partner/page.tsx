import type { Metadata } from "next";
import BenefitsSection from "@/components/sections/partner/BenefitsSection";
import EarningsSection from "@/components/sections/partner/EarningsSection";
import FAQSection from "@/components/sections/partner/FAQSection";
import HeroSection from "@/components/sections/partner/HeroSection";
import HowItWorksSection from "@/components/sections/partner/HowItWorksSection";
import StatStrip from "@/components/sections/partner/StatStrip";
import TiersSection from "@/components/sections/partner/TiersSection";
import WhoSection from "@/components/sections/partner/WhoSection";
import Booking from "@/components/sections/Booking";

export const metadata: Metadata = {
  title: "برنامج الشراكة",
  description:
    "انضم إلى برنامج شركاء سوبر ستوديوز AI. اكسب عائدًا متكررًا من خلال إحالة العملاء إلى منصتنا للإنتاج الإبداعي بالذكاء الاصطناعي.",
  alternates: {
    canonical: "https://www.superstudios.ai/ar/partner",
    languages: {
      en: "https://www.superstudios.ai/partner",
      "ar-SA": "https://www.superstudios.ai/ar/partner",
      "x-default": "https://www.superstudios.ai/partner",
    },
  },
  openGraph: {
    title: "برنامج الشراكة | سوبر ستوديوز AI",
    description:
      "اكسب عائدًا متكررًا كشريك في سوبر ستوديوز AI. إنتاج إبداعي بالذكاء الاصطناعي لعملائك.",
    url: "/ar/partner",
    locale: "ar_SA",
  },
};

export default function PartnerAr() {
  return (
    <div className="dark font-outfit bg-[#0d0a18] text-[#f1eef8] min-h-screen">
      <HeroSection />
      <StatStrip />
      <BenefitsSection />
      <TiersSection />
      <EarningsSection />
      <WhoSection />
      <HowItWorksSection />
      <Booking />
      <FAQSection />
    </div>
  );
}
