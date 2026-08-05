"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowUpRight, Brain, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useApp } from "@/context/AppContext";

export const HeroSection: React.FC = () => {
  const { openConsultationModal, openAIModal } = useApp();
  const [imgError, setImgError] = useState(false);

  // Full-width Human & AI combination image
  const primaryHeroBg = "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2000";
  const fallbackHeroBg = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000";

  return (
    <section className="relative min-h-[88vh] flex items-center pt-10 sm:pt-12 pb-16 overflow-hidden bg-[#060811] text-white">
      
      {/* 1. FULL-WIDTH HUMAN & AI BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none -top-36 sm:-top-52">
        <img
          src={imgError ? fallbackHeroBg : primaryHeroBg}
          alt="Human and AI Working Together"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-top sm:object-[85%_0%] opacity-85 filter contrast-115 brightness-105"
        />
        
        {/* Crisp Left Dark Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060811] via-[#060811]/85 to-transparent sm:w-1/2" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060811] via-transparent to-[#060811]/60" />
      </div>

      {/* 2. Soft Ambient Radial Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* 3. USER-FRIENDLY COMPACT TEXT CONTENT ON THE LEFT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="max-w-md text-left space-y-5">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1322]/90 border border-purple-500/40 shadow-xl shadow-purple-500/10 backdrop-blur-xl">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs font-semibold tracking-wider text-slate-200 uppercase font-mono">
              AI & Digital Engineering Partner
            </span>
          </div>

          {/* User-Friendly Compact Title (Not Big) */}
          <h1 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight leading-[1.15]">
            Transforming Business with <br />
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              AI & Modern Software
            </span>
          </h1>

          {/* User-Friendly Subtitle */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            We build intelligent digital applications, cloud platforms, and custom software systems designed to scale your business effortlessly.
          </p>

          {/* Compact Action Buttons */}
          <div className="pt-1 flex flex-wrap items-center gap-3">
            <Button
              variant="gradient"
              size="lg"
              onClick={() => openConsultationModal()}
              icon={<ArrowUpRight className="w-4 h-4" />}
              className="px-6 font-semibold shadow-xl shadow-purple-600/25 text-xs sm:text-sm"
            >
              Book Free Consultation
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={openAIModal}
              icon={<Brain className="w-4 h-4 text-cyan-400" />}
              className="px-5 border-slate-700/80 hover:border-cyan-400/60 text-xs sm:text-sm"
            >
              Ask Innovtec AI
            </Button>
          </div>

          {/* Trust Tags */}
          <div className="pt-3 flex flex-wrap items-center gap-5 text-xs text-slate-400 font-medium border-t border-slate-800/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>SOC 2 Type II Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>99.99% Cloud Uptime SLA</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
