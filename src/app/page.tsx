import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { EcosystemTicker } from "@/components/home/EcosystemTicker";
import { ServicesSection } from "@/components/home/ServicesSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { AIShowcaseSection } from "@/components/home/AIShowcaseSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { WhyInnovtecSection } from "@/components/home/WhyInnovtecSection";
import { ProcessTimelineSection } from "@/components/home/ProcessTimelineSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export const metadata = {
  title: "Innovtec | AI-First Digital Engineering Company",
  description: "Innovtec helps enterprise organizations build intelligent digital solutions using Artificial Intelligence, Custom Software, Cloud Engineering, DevOps, IoT, and Cyber Security.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-space-950 text-slate-100 overflow-x-hidden">
      <HeroSection />
      <EcosystemTicker />
      <ServicesSection />
      <IndustriesSection />
      <ProductsSection />
      <AIShowcaseSection />
      <PortfolioSection />
      <WhyInnovtecSection />
      <ProcessTimelineSection />
      <TechStackSection />
      <TestimonialsSection />
      <InsightsSection />
      <FinalCTASection />
    </main>
  );
}
