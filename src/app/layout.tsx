import type { Metadata } from "next";
import Script from "next/script";
import { cookies, headers } from "next/headers";
import "./globals.css";
import { Inter, Outfit, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const SITE_NAME = "Super Studios AI";
const SITE_DESCRIPTION =
  "We help ambitious brands move faster, create smarter, and own their market with AI-powered video and living brand personalities. Human creativity. AI execution. Zero compromise.";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: "/",
  logo: "https://www.superstudios.ai/images/Logo.png",
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressCountry: "SA",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.superstudios.ai"),
  title: {
    default: `AI Video Production Studio | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: `AI Video Production Studio | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/Logo.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `AI Video Production Studio | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";
  const isNA = pathname.startsWith("/na");

  const cookieStore = await cookies();
  const lang = isNA
    ? "en"
    : ((cookieStore.get("lang")?.value as "en" | "ar") ?? "en");
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir} suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={`${inter.variable} ${jakarta.variable} ${outfit.variable} font-sans antialiased overflow-x-hidden`}
      >
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
