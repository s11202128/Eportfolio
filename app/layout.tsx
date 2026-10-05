import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Samson Limanikuki | Software Engineering Student & Aspiring Engineer",
  description: "A software engineering student ePortfolio, technical case studies, and developer portfolio.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="min-h-screen bg-[#07090e] font-sans text-slate-100 antialiased selection:bg-sky-500 selection:text-slate-950">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
