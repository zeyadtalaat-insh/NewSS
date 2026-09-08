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
  title: "Partner Program",
  description:
    "Join the Super Studios AI Partner Program. Earn recurring revenue by referring clients to our AI-powered brand storytelling platform.",
  alternates: {
    canonical: "https://www.superstudios.ai/na/partner",
  },
  openGraph: {
    title: "Partner Program | Super Studios AI",
    description:
      "Earn recurring revenue as a Super Studios AI partner. AI-powered creative production for your clients.",
    url: "/na/partner",
    locale: "en_US",
  },
};

export default function NAPartner() {
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
