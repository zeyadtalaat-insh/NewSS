import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageContext";
import NAHeader from "@/components/NAHeader";
import NAFooter from "@/components/NAFooter";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function NALayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <LanguageProvider initialLanguage="en">
      <ThemeProvider>
        <NAHeader />
        <main>{children}</main>
        <NAFooter />
        <WhatsAppWidget />
      </ThemeProvider>
    </LanguageProvider>
  );
}
