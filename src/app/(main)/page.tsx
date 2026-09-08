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
import WallOfFame from "@/components/sections/WallOfFame";
import PricingSection from "@/components/sections/PricingSection";
import FAQ from "@/components/sections/FAQ";
import Booking from "@/components/sections/Booking";

export const metadata: Metadata = {
  title: "AI Video Production Studio MENA | Super Studios AI",
  description:
    "Super Studios AI helps ambitious brands move faster and create smarter with AI-powered video production and living brand personalities.",
  openGraph: {
    title: "AI Video Production Studio MENA | Super Studios AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Video Production Studio MENA | Super Studios AI",
  },
  alternates: {
    canonical: "https://www.superstudios.ai",
    languages: {
      en: "https://www.superstudios.ai",
      "ar-SA": "https://www.superstudios.ai/ar",
      "x-default": "https://www.superstudios.ai",
    },
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How fast can you actually deliver?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects ship in 1–5 business days from approved brief. A 30-second commercial in EN + AR with three platform cuts is typically 3 days end-to-end.",
      },
    },
    {
      "@type": "Question",
      name: "What does an AI brand avatar actually mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A fully custom AI personality — face, voice, and presence — that you own and can deploy across any channel, any time, without a talent contract or new shoot.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Arabic actually Saudi, or just translated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Native Saudi dialect. Our voice and copy teams are MENA-based and write in the spoken register your audience actually uses.",
      },
    },
    {
      "@type": "Question",
      name: "Who owns the final assets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You do — full commercial rights, source files included, no recurring license fees on creative output.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate with our existing agency or team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We frequently slot in as a production layer beneath agency creative, or work directly with in-house brand teams.",
      },
    },
  ],
};

export default function Home() {
  return (
    <div>
      <Script
        id="schema-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />
      <OurWorksSection />
      <WallOfFame />
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
