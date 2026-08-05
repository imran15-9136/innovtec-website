"use client";

import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useApp } from "@/context/AppContext";
import { Sparkles, ArrowRight, Brain } from "lucide-react";

export const HumanAISection: React.FC = () => {
  const { openConsultationModal, openAIModal } = useApp();
  const robotHandUrl = "https://crowdytheme.com/assets/wp-content/uploads/2025/06/robot-hand.webp";
  const realHandUrl = "https://crowdytheme.com/assets/wp-content/uploads/2025/06/real-hand.webp";

  return (
    <section className="py-28 bg-space-950 border-t border-slate-800/80 relative overflow-hidden flex items-center justify-center min-h-[550px]">
      
      {/* 1. BACKGROUND IMAGE - Left Edge: Robot AI Hand (Moved Down to Center Vertically) */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-16 sm:-left-8 w-80 sm:w-[520px] lg:w-[640px] pointer-events-none select-none opacity-30 lg:opacity-40 mix-blend-screen filter drop-shadow-[0_10px_50px_rgba(59,130,246,0.4)] z-0">
        <img
          src={robotHandUrl}
          alt="AI Robot Hand Background"
          className="w-full h-auto object-contain object-left"
        />
      </div>

      {/* 2. BACKGROUND IMAGE - Right Edge: Real Human Hand (Centered Vertically) */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-16 sm:-right-8 w-80 sm:w-[520px] lg:w-[660px] pointer-events-none select-none opacity-30 lg:opacity-40 mix-blend-screen filter drop-shadow-[0_10px_50px_rgba(139,92,246,0.4)] z-0">
        <img
          src={realHandUrl}
          alt="Human Real Hand Background"
          className="w-full h-auto object-contain object-right"
        />
      </div>

      {/* Central Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-brand-blue/15 via-brand-purple/20 to-brand-cyan/15 rounded-full blur-3xl pointer-events-none z-0" />

      {/* FOREGROUND CONTENT */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-space-900/90 border border-brand-cyan/40 shadow-xl shadow-brand-cyan/10 backdrop-blur-xl">
          <Sparkles className="w-4 h-4 text-brand-cyan animate-pulse" />
          <span className="text-xs font-semibold font-mono text-slate-200 uppercase tracking-wide">
            Human Ingenuity Meets Artificial Intelligence
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
          Synergy of Domain Experts & <br />
          <span className="text-gradient-cyan">Autonomous AI Intelligence</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Innovtec combines deep enterprise software engineering with state-of-the-art AI models, creating custom digital systems built for extreme speed, precision, and compliance.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <Button
            variant="gradient"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => openConsultationModal()}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explore Custom AI Solutions
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
            onClick={openAIModal}
            icon={<Brain className="w-4 h-4 text-brand-cyan" />}
          >
            Ask AI Assistant
          </Button>
        </div>

      </div>
    </section>
  );
};
