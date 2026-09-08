import { headers } from "next/headers";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default async function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";
  const lang = pathname.startsWith("/ar") ? "ar" : "en";

  return (
    <LanguageProvider initialLanguage={lang}>
      <ThemeProvider>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
      </ThemeProvider>
    </LanguageProvider>
  );
}
