import type { Metadata } from "next";
import Script from "next/script";
import { Logos3 } from "@/components/blocks/logos3";
import OurWorksSection from "@/components/sections/OurWorksSection";
import NATeamSection from "@/components/sections/na/NATeamSection";

import NAHeroSection from "@/components/sections/na/NAHeroSection";
import NACafePain from "@/components/sections/na/NACafePain";
import NAInvoiceComparison from "@/components/sections/na/NAInvoiceComparison";
import NAProductsSection from "@/components/sections/na/NAProductsSection";
import NAWhatWeDeliver from "@/components/sections/na/NAWhatWeDeliver";
import NATheProcess from "@/components/sections/na/NATheProcess";
import NAWhyNow from "@/components/sections/na/NAWhyNow";
import NAWhyItWorks from "@/components/sections/na/NAWhyItWorks";
import NAPricingSection from "@/components/sections/na/NAPricingSection";
import NAFAQ from "@/components/sections/na/NAFAQ";
import NABooking from "@/components/sections/na/NABooking";

export const metadata: Metadata = {
  title: "AI Video Production for Cafes in Canada | Super Studios AI",
  description:
    "Super Studios AI makes broadcast-quality video ads for Canadian cafes — delivered in 1–5 days, starting at $624. No crew, no equipment, no hidden fees.",
  openGraph: {
    title: "AI Video Production for Cafes in Canada | Super Studios AI",
    url: "https://www.superstudios.ai/na",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Video Production for Cafes in Canada | Super Studios AI",
  },
  alternates: {
    canonical: "https://www.superstudios.ai/na",
  },
};

const PROVIDER = {
  "@type": "Organization",
  name: "Super Studios AI",
  url: "https://www.superstudios.ai/na",
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Super Studios AI Services for Canadian Cafes",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "AI Commercials",
        description:
          "Broadcast-quality video ads for Canadian cafes, delivered in 1–5 days. Full script, visuals, voice, and platform cuts included.",
        provider: PROVIDER,
        areaServed: "Canada",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "AI Brand Avatars",
        description:
          "Custom AI brand characters for cafes — your face, your voice, your vibe — deployed across every platform without a shoot.",
        provider: PROVIDER,
        areaServed: "Canada",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "AI Photo Shoots",
        description:
          "Menu shots, product photography, and brand imagery for Canadian cafes without a shoot day. Google Business Profile-ready.",
        provider: PROVIDER,
        areaServed: "Canada",
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
      name: "Do you need to come to my cafe to film anything?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We work entirely remotely. If you have existing photos or footage you want us to incorporate, you can send them over. Otherwise, we build everything from scratch on our end — no on-site shoot required.",
      },
    },
    {
      "@type": "Question",
      name: "How fast do you actually deliver?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects ship in 1–5 business days from an approved brief. A 30-second cafe commercial with three platform cuts is typically 3 days end-to-end.",
      },
    },
    {
      "@type": "Question",
      name: "Who owns the videos you produce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You do — full commercial rights, source files included, no recurring license fees on any creative output we make for you.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with single-location cafes or only chains?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both. Our pricing and process works for a single neighbourhood cafe running its first ad campaign just as well as a small chain managing multiple locations.",
      },
    },
  ],
};

export default function NAHome() {
  return (
    <div>
      <Script
        id="schema-services-na"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <Script
        id="schema-faq-na"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <NAHeroSection />
      <Logos3
        heading="Trusted by food & beverage brands that take their content seriously"
        logos={[
          { id: "logo-1",  description: "24/7 logo",                  image: "/images/Clientlogos/24-7.png",                 className: "h-20 w-auto" },
          { id: "logo-2",  description: "AlRabeh HR logo",             image: "/images/Clientlogos/alrabeh-hr-logo.png",      className: "h-20 w-auto" },
          { id: "logo-3",  description: "AlRabeh International logo",  image: "/images/Clientlogos/Alrabeh-INT.svg",          className: "h-20 w-auto" },
          { id: "logo-4",  description: "Badash logo",                 image: "/images/Clientlogos/badash.jpg",               className: "h-20 w-auto" },
          { id: "logo-5",  description: "Bila logo",                   image: "/images/Clientlogos/Bila-Logo.png",            className: "h-20 w-auto" },
          { id: "logo-6",  description: "Dar Ward logo",               image: "/images/Clientlogos/dar-ward.png",             className: "h-20 w-auto" },
          { id: "logo-7",  description: "Najd Hall logo",              image: "/images/Clientlogos/najd-hall.png",            className: "h-12 w-auto" },
          { id: "logo-8",  description: "SANS logo",                   image: "/images/Clientlogos/sans-logo-new.png",        className: "h-20 w-auto" },
          { id: "logo-9",  description: "Tarqeem logo",                image: "/images/Clientlogos/Tarqeem.jpg",              className: "h-20 w-auto" },
          { id: "logo-10", description: "Absher logo",                 image: "/images/Clientlogos/absher.png",               className: "h-20 w-auto" },
          { id: "logo-11", description: "Al Amor logo",                image: "/images/Clientlogos/al-amor.png",              className: "h-20 w-auto" },
          { id: "logo-12", description: "Alma Water logo",             image: "/images/Clientlogos/alma-water.png",           className: "h-20 w-auto" },
          { id: "logo-13", description: "Black Parking logo",          image: "/images/Clientlogos/black-parking.jpg",        className: "h-20 w-auto" },
          { id: "logo-14", description: "Chill Lounge logo",           image: "/images/Clientlogos/chill-lounge.png",         className: "h-20 w-auto" },
          { id: "logo-15", description: "Cornet logo",                 image: "/images/Clientlogos/cornet.png",               className: "h-20 w-auto" },
          { id: "logo-16", description: "Deva logo",                   image: "/images/Clientlogos/deva-logo-1.png",          className: "h-20 w-auto" },
          { id: "logo-17", description: "Exefai logo",                 image: "/images/Clientlogos/exafai.png",               className: "h-20 w-auto" },
          { id: "logo-18", description: "FRVR Lab logo",               image: "/images/Clientlogos/frvr-lab.png",             className: "h-20 w-auto" },
          { id: "logo-19", description: "IFBS logo",                   image: "/images/Clientlogos/ifbs.png",                 className: "h-20 w-auto" },
          { id: "logo-20", description: "Maple logo",                  image: "/images/Clientlogos/maple.png",                className: "h-20 w-auto" },
          { id: "logo-21", description: "Mawj logo",                   image: "/images/Clientlogos/mawj-logo.png",            className: "h-20 w-auto" },
          { id: "logo-22", description: "Nongshim logo",               image: "/images/Clientlogos/nongshim.png",             className: "h-20 w-auto" },
          { id: "logo-23", description: "Nozol In logo",               image: "/images/Clientlogos/nozol-in.svg",             className: "h-20 w-auto" },
          { id: "logo-24", description: "Pharo logo",                  image: "/images/Clientlogos/pharo.png",                className: "h-20 w-auto" },
          { id: "logo-25", description: "Qasr El Seyooh logo",         image: "/images/Clientlogos/qasr-el-seyooh.png",       className: "h-20 w-auto" },
          { id: "logo-26", description: "Saeq logo",                   image: "/images/Clientlogos/saeq.png",                 className: "h-20 w-auto" },
          { id: "logo-27", description: "Sand Brew logo",              image: "/images/Clientlogos/sand-brew.png",            className: "h-20 w-auto" },
          { id: "logo-28", description: "Seet logo",                   image: "/images/Clientlogos/seet-logo.png",            className: "h-20 w-auto" },
          { id: "logo-30", description: "Swissotel logo",              image: "/images/Clientlogos/swissotel.png",            className: "h-20 w-auto" },
          { id: "logo-31", description: "Tayseer logo",                image: "/images/Clientlogos/tayseer.png",              className: "h-20 w-auto" },
          { id: "logo-32", description: "Veagle logo",                 image: "/images/Clientlogos/veagle-logo.png",          className: "h-20 w-auto" },
          { id: "logo-33", description: "Ze logo",                     image: "/images/Clientlogos/ze-logo.png",              className: "h-20 w-auto" },
          { id: "logo-38", description: "Amancool logo",               image: "/images/Clientlogos/amancool.png",             className: "h-20 w-auto" },
          { id: "logo-39", description: "Saudi Tech logo",             image: "/images/Clientlogos/logosaudi-tech-2.png",     className: "h-20 w-auto" },
          { id: "logo-40", description: "Mayasem logo",                image: "/images/Clientlogos/mayasem-logo-1.png",       className: "h-20 w-auto" },
        ]}
      />
      <NACafePain />
      <NAInvoiceComparison />
      <NAProductsSection />
      <NAWhatWeDeliver />
      <NATheProcess />
      <NAWhyNow />
      <NAWhyItWorks />
      <OurWorksSection />
      <NATeamSection />
      <NAPricingSection />
      <NAFAQ />
      <NABooking />
    </div>
  );
}
