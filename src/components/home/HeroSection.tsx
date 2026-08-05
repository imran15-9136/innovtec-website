"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Brain, 
  Zap, 
  Code2, 
  CheckCircle2,
  TrendingUp,
  Cpu
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useApp } from "@/context/AppContext";

export const HeroSection: React.FC = () => {
  const { openConsultationModal, openAIModal } = useApp();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-hero-glow">
      
      {/* Dynamic Background Neural Node Grid Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-space-900/90 border border-brand-cyan/30 shadow-lg shadow-brand-cyan/10 backdrop-blur-xl mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-brand-cyan animate-ping" />
          <Sparkles className="w-4 h-4 text-brand-cyan" />
          <span className="text-xs font-semibold tracking-wide text-slate-200 uppercase">
            AI-First Digital Engineering Platform
          </span>
        </motion.div>

        {/* Main Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-white tracking-tight leading-[1.1] max-w-5xl mx-auto"
        >
          Engineering Intelligent <br className="hidden sm:inline" />
          <span className="text-gradient-blue">Digital Solutions</span> for Enterprise
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal"
        >
          Innovtec accelerates business growth through high-performance <strong className="text-white">Artificial Intelligence</strong>, Enterprise Software, Cloud Architecture, DevOps, IoT, and Cyber Security.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
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
            Explore AI Assistant
          </Button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-emerald" />
            <span>SOC 2 Type II Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-emerald" />
            <span>99.99% Enterprise SLA</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-emerald" />
            <span>AI RAG & Vector Experts</span>
          </div>
        </motion.div>

        {/* Hero Metrics Dashboard Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          <div className="glass-card p-5 rounded-2xl text-left border border-slate-800">
            <div className="flex items-center justify-between text-brand-cyan mb-2">
              <Code2 className="w-5 h-5" />
              <span className="text-[10px] font-mono uppercase text-slate-400">Deployed</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">100+</div>
            <div className="text-xs text-slate-400 mt-1">Enterprise Digital Systems</div>
          </div>

          <div className="glass-card p-5 rounded-2xl text-left border border-slate-800">
            <div className="flex items-center justify-between text-brand-purple mb-2">
              <Brain className="w-5 h-5" />
              <span className="text-[10px] font-mono uppercase text-slate-400">Accuracy</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">99.4%</div>
            <div className="text-xs text-slate-400 mt-1">AI Document RAG Precision</div>
          </div>

          <div className="glass-card p-5 rounded-2xl text-left border border-slate-800">
            <div className="flex items-center justify-between text-brand-emerald mb-2">
              <TrendingUp className="w-5 h-5" />
              <span className="text-[10px] font-mono uppercase text-slate-400">Efficiency</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">$4.2M+</div>
            <div className="text-xs text-slate-400 mt-1">Client Expenses Saved</div>
          </div>

          <div className="glass-card p-5 rounded-2xl text-left border border-slate-800">
            <div className="flex items-center justify-between text-brand-blue mb-2">
              <Zap className="w-5 h-5" />
              <span className="text-[10px] font-mono uppercase text-slate-400">Response</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">&lt;150ms</div>
            <div className="text-xs text-slate-400 mt-1">Global API Edge Latency</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
