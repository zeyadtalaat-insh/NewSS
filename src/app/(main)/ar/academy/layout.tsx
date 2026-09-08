import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "الأكاديمية",
  description:
    "أكاديمية سوبر ستوديوز AI. تعلّم إنتاج المحتوى بالذكاء الاصطناعي، ورواية العلامة التجارية، وإنتاج الفيديو. مهارات عملية. نتائج حقيقية.",
  alternates: {
    canonical: "https://www.superstudios.ai/ar/academy",
    languages: {
      en: "https://www.superstudios.ai/academy",
      "ar-SA": "https://www.superstudios.ai/ar/academy",
      "x-default": "https://www.superstudios.ai/academy",
    },
  },
  openGraph: {
    title: "الأكاديمية | سوبر ستوديوز AI",
    description:
      "أتقن رواية العلامة التجارية وإنتاج الفيديو بالذكاء الاصطناعي. مهارات عملية للمسوقين والفرق الإبداعية الحديثة.",
    url: "/ar/academy",
    locale: "ar_SA",
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "أكاديمية سوبر ستوديوز AI — ماستر كلاس إنتاج المحتوى بالذكاء الاصطناعي",
  description:
    "تعلّم مهارات إنتاج الفيديو ورواية العلامة التجارية بالذكاء الاصطناعي المستخدمة في أبرز استوديوهات الذكاء الاصطناعي في منطقة الشرق الأوسط وشمال أفريقيا.",
  url: "/ar/academy",
  inLanguage: "ar",
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
};

export default function AcademyArLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="schema-course-ar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      {children}
    </>
  );
}
