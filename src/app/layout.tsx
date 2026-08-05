import type { Metadata } from "next";
import "@/app/globals.css";
import { AppProvider } from "@/context/AppContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ConsultationModal } from "@/components/layout/ConsultationModal";
import { AskInnovtecAI } from "@/components/layout/AskInnovtecAI";

export const metadata: Metadata = {
  title: {
    default: "Innovtec | AI-First Digital Engineering Company",
    template: "%s | Innovtec",
  },
  description:
    "Engineering Intelligent Digital Solutions. Innovtec accelerates enterprise growth through Artificial Intelligence, Custom Software, Cloud Engineering, DevOps, IoT, and Cyber Security.",
  keywords: [
    "AI Development Company",
    "Custom Software Development",
    "Enterprise Software Solutions",
    "AI Automation Services",
    "DevOps Consulting",
    "Cloud Engineering",
    "IoT Development",
    "Cyber Security Services",
    "Digital Transformation Partner",
  ],
  authors: [{ name: "Innovtec Engineering Team" }],
  openGraph: {
    title: "Innovtec | AI-First Digital Engineering Company",
    description: "Engineering Intelligent Digital Solutions for Enterprise.",
    url: "https://innovtec.ai",
    siteName: "Innovtec",
    images: [
      {
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Innovtec AI Digital Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-space-950 text-slate-100 antialiased selection:bg-brand-blue selection:text-white">
        <AppProvider>
          <Header />
          {children}
          <Footer />
          <ConsultationModal />
          <AskInnovtecAI />
        </AppProvider>
      </body>
    </html>
  );
}
