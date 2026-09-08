import type { Metadata } from "next";
import Script from "next/script";
import HeroSection from "@/components/sections/HeroSection";
import { Logos3 } from "@/components/blocks/logos3";
import TrailerSection from "@/components/sections/TrailerSection";
import InvoiceComparison from "@/components/sections/InvoiceComparison";
import ProductsSection from "@/components/sections/ProductsSection";
import TeamSection from "@/components/sections/TeamSection";
import WhatWeDeliver from "@/components/sections/WhatWeDeliver";
import TheProcess from "@/components/sections/TheProcess";
import InsightsSection from "@/components/sections/InsightsSection";
import WhyNow from "@/components/sections/WhyNow";
import OurWorksSection from "@/components/sections/OurWorksSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQ from "@/components/sections/FAQ";
import Booking from "@/components/sections/Booking";

export const metadata: Metadata = {
  title: "استوديو إنتاج فيديو بالذكاء الاصطناعي | سوبر ستوديوز AI",
  description:
    "سوبر ستوديوز AI تساعد العلامات التجارية الطموحة على التحرك بسرعة أكبر والإبداع بذكاء من خلال إنتاج الفيديو وشخصيات العلامة التجارية الحية بالذكاء الاصطناعي.",
  alternates: {
    canonical: "https://www.superstudios.ai/ar",
    languages: {
      en: "https://www.superstudios.ai",
      "ar-SA": "https://www.superstudios.ai/ar",
      "x-default": "https://www.superstudios.ai",
    },
  },
  openGraph: {
    title: "سوبر ستوديوز AI | مستقبل رواية العلامة التجارية يبدأ هنا",
    description:
      "سوبر ستوديوز AI تساعد العلامات التجارية الطموحة على التحرك بسرعة أكبر والإبداع بذكاء من خلال إنتاج الفيديو بالذكاء الاصطناعي.",
    url: "/ar",
    locale: "ar_SA",
  },
};

const PROVIDER = {
  "@type": "Organization",
  name: "Super Studios AI",
  url: "/"
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Super Studios AI Services",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "AI Brand Avatars",
        description:
          "Bring your brand to life with living AI personalities. Create consistent, engaging, and interactive brand ambassadors that represent your identity across all digital platforms.",
        provider: PROVIDER,
        areaServed: "MENA",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "AI Special Productions",
        description:
          "High-end AI-powered video productions combining human creativity with AI execution to deliver stunning visual brand experiences.",
        provider: PROVIDER,
        areaServed: "MENA",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "AI Photoshoot Studio",
        description:
          "High-quality professional visuals at scale without traditional photography costs or timelines.",
        provider: PROVIDER,
        areaServed: "MENA",
      },
    },
  ],
};

export default function HomeAr() {
  return (
    <div>
      <Script
        id="schema-services-ar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <HeroSection />
      <OurWorksSection />
      <Logos3 />
      <TrailerSection />
      <InvoiceComparison />
      <ProductsSection />
      <TeamSection />
      <WhatWeDeliver />
      <TheProcess />
      <InsightsSection />
      <WhyNow />
      <PricingSection />
      <FAQ />
      <Booking />
    </div>
  );
}
