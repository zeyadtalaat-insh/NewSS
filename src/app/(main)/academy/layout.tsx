import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Academy",
  description:
    "The Super Studios AI Academy. Learn AI-powered content creation, brand storytelling, and video production. Practical skills. Real results.",
  alternates: {
    canonical: "https://www.superstudios.ai/academy",
    languages: {
      en: "https://www.superstudios.ai/academy",
      "ar-SA": "https://www.superstudios.ai/ar/academy",
      "x-default": "https://www.superstudios.ai/academy",
    },
  },
  openGraph: {
    title: "Academy | Super Studios AI",
    description:
      "Master AI-powered brand storytelling and video production. Practical skills for modern marketers and creative teams.",
    url: "/academy",
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Super Studios AI Academy — AI Content Creation Masterclass",
  description:
    "Learn the exact AI video production and brand storytelling skills used by MENA's leading AI studio. Practical workflows, real client projects, and a clear path to earning $500+ per project.",
  url: "/academy",
  provider: {
    "@type": "Organization",
    name: "Super Studios AI",
    url: "/"
  },
  offers: {
    "@type": "Offer",
    price: "99",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
    category: "Pre-Order",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    courseWorkload: "PT10H",
  },
  teaches: [
    "AI Commercial Production",
    "AI Brand Avatar Creation",
    "AI Photoshoot Studio",
    "Pricing, Proposals and Getting Clients",
    "Studio Secrets and Techniques",
  ],
};

export default function AcademyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="schema-course"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      {children}
    </>
  );
}
