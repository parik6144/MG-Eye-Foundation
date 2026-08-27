import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PmjaySection from "@/components/PmjaySection";
import FaqSection from "@/components/FaqSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AppointmentPopup from "@/components/AppointmentPopup";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL((process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "")),
  title: "MG Eye Foundation | Clear Vision. Expert Care. Healthier Eyes.",
  description:
    "Meera Gayatri Eye Foundation, Bara Gamharia — comprehensive ophthalmic care led by Dr. Kumar Saket and Dr. Malay Kumar Dwivedi. Call +91 84090 01008.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen page-enter">{children}</main>
        <PmjaySection />
        <FaqSection />
        <TestimonialsSection />
        <Footer />
        <AppointmentPopup />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
