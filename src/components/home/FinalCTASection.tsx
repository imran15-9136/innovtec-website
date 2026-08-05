"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { useApp } from "@/context/AppContext";
import { ArrowRight, Sparkles, Brain, CheckCircle2 } from "lucide-react";

export const FinalCTASection: React.FC = () => {
  const { openConsultationModal, openAIModal } = useApp();

  return (
    <section className="py-24 bg-hero-glow border-t border-slate-800/80 relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="glass-card p-10 sm:p-14 rounded-3xl border border-slate-700/80 bg-space-950/90 shadow-2xl shadow-brand-blue/10 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-brand-cyan text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready to Accelerate Growth?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Let's Build the <span className="text-gradient-blue">Future Together</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Schedule a 30-minute discovery call with Innovtec's technical leadership to audit your software architecture, evaluate AI feasibility, or plan cloud modernization.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Button
              variant="gradient"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => openConsultationModal()}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Book Free Consultation
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

          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-emerald" /> No commitment required</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-emerald" /> 100% Confidentiality & NDA</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-emerald" /> Direct CTO Access</span>
          </div>

        </div>

      </div>
    </section>
  );
};
