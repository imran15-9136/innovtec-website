"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowUpRight, 
  Brain, 
  CheckCircle2, 
  Navigation, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  Zap,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useApp } from "@/context/AppContext";

export const HeroSection: React.FC = () => {
  const { openConsultationModal, openAIModal } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: "ai-software",
      badge: "AI & Digital Engineering Partner",
      badgeIcon: Sparkles,
      titlePrefix: "Transforming Business with",
      titleHighlight: "AI & Modern Software",
      subtitle: "We engineer high-performance software, cloud infrastructure, and custom AI systems designed to scale your enterprise effortlessly.",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2000",
      fallbackImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000",
      alt: "Human and AI Digital Engineering",
      primaryBtnText: "Book Free Consultation",
      primaryBtnAction: () => openConsultationModal(),
      secondaryBtnText: "Ask Innovtec AI",
      secondaryBtnAction: openAIModal,
      trustTags: [
        "SOC 2 Type II Certified",
        "99.99% Cloud Uptime SLA",
        "GDPR Compliant"
      ]
    },
    {
      id: "drone-tech",
      badge: "Autonomous Drone & Aerial Robotics",
      badgeIcon: Navigation,
      titlePrefix: "Pioneering the Future with",
      titleHighlight: "Autonomous Drone Technology",
      subtitle: "Edge AI aerial computer vision, LiDAR 3D photogrammetry, and BVLOS flight systems engineered for industrial precision and asset protection.",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=2000",
      fallbackImage: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=2000",
      alt: "Autonomous Drone Technology",
      primaryBtnText: "Explore Drone Solutions",
      primaryBtnAction: () => openConsultationModal("Autonomous Drone Technology"),
      secondaryBtnText: "Ask Innovtec AI",
      secondaryBtnAction: openAIModal,
      trustTags: [
        "BVLOS Flight Autonomy",
        "Sub-10ms Edge AI Detection",
        "Encrypted 5G Telemetry"
      ]
    }
  ];

  // Auto-advance slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const active = slides[currentSlide];

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden bg-[#050811] text-white w-full select-none">
      
      {/* 1. Full-Width Background Slides with Smooth Fade */}
      {slides.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000 ease-in-out -top-24 sm:-top-36 ${
            idx === currentSlide ? "opacity-85" : "opacity-0"
          }`}
        >
          <img
            src={s.image}
            alt={s.alt}
            className="w-full h-full object-cover object-top sm:object-[85%_0%] filter contrast-110 brightness-105"
          />
          
          {/* Crisp Gradient Masks for clean readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050811] via-[#050811]/90 to-transparent sm:w-[60%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-[#050811]/70" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050811] to-transparent" />
        </div>
      ))}

      {/* 2. Ambient Soft Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-brand-cyan/10 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* 3. Clean Full-Width Content Container */}
      <div className="w-full max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        <div className="max-w-2xl text-left space-y-6 transition-all duration-700">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-space-900/90 border border-brand-cyan/30 shadow-lg shadow-brand-cyan/5 backdrop-blur-xl">
            <active.badgeIcon className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
            <span className="text-xs font-semibold tracking-wider text-slate-200 uppercase font-mono">
              {active.badge}
            </span>
          </div>

          {/* Clean, Impactful Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.14]">
            {active.titlePrefix} <br />
            <span className="text-gradient-cyan">
              {active.titleHighlight}
            </span>
          </h1>

          {/* Minimal 1-Sentence Subtitle */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-lg">
            {active.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <Button
              variant="gradient"
              size="lg"
              onClick={active.primaryBtnAction}
              icon={<ArrowUpRight className="w-4 h-4" />}
              className="px-7 py-3.5 font-semibold text-sm shadow-xl shadow-brand-blue/25 hover:shadow-brand-blue/40 transition-all duration-300 btn-glow"
            >
              {active.primaryBtnText}
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={active.secondaryBtnAction}
              icon={<Brain className="w-4 h-4 text-brand-cyan" />}
              className="px-6 py-3.5 border-slate-700/80 hover:border-brand-cyan/60 bg-space-900/60 backdrop-blur-sm text-sm hover:bg-space-850 transition-all duration-300"
            >
              {active.secondaryBtnText}
            </Button>
          </div>

          {/* Trust Tags */}
          <div className="pt-4 flex flex-wrap items-center gap-5 sm:gap-6 text-xs text-slate-400 font-medium border-t border-slate-800/80">
            {active.trustTags.map((tag, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{tag}</span>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* 4. Slide Navigation Controls & Indicators */}
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-16 z-20 flex items-center gap-4">
        {/* Slide Indicators */}
        <div className="flex items-center gap-2 bg-space-950/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/[0.08]">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === currentSlide
                  ? "w-8 h-2 bg-brand-cyan"
                  : "w-2 h-2 bg-slate-600 hover:bg-slate-400"
              }`}
              title={`Switch to ${s.titleHighlight}`}
            />
          ))}
        </div>

        {/* Previous / Next Arrow Buttons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
            className="p-2 rounded-full bg-space-900/80 border border-white/[0.08] hover:border-brand-cyan/50 hover:bg-space-850 text-slate-300 hover:text-white transition-all backdrop-blur-md"
            title="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="p-2 rounded-full bg-space-900/80 border border-white/[0.08] hover:border-brand-cyan/50 hover:bg-space-850 text-slate-300 hover:text-white transition-all backdrop-blur-md"
            title="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </section>
  );
};
