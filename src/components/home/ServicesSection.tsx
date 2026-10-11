"use client";

import React from "react";
import Link from "next/link";
import { SERVICES } from "@/data/mockData";
import { Badge } from "@/components/ui/Badge";
import { useApp } from "@/context/AppContext";
import { 
  Brain, 
  Code2, 
  Building2, 
  Cloud, 
  GitBranch, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Navigation,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Sparkles
} from "lucide-react";

export const ServicesSection: React.FC = () => {
  const { openConsultationModal } = useApp();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Brain": return <Brain className="w-5 h-5 text-brand-cyan" />;
      case "Code2": return <Code2 className="w-5 h-5 text-brand-blue" />;
      case "Building2": return <Building2 className="w-5 h-5 text-brand-purple" />;
      case "Cloud": return <Cloud className="w-5 h-5 text-brand-cyan" />;
      case "GitBranch": return <GitBranch className="w-5 h-5 text-brand-emerald" />;
      case "Cpu": return <Cpu className="w-5 h-5 text-brand-amber" />;
      case "ShieldCheck": return <ShieldCheck className="w-5 h-5 text-brand-rose" />;
      case "Navigation": return <Navigation className="w-5 h-5 text-brand-cyan" />;
      default: return <Zap className="w-5 h-5 text-brand-blue" />;
    }
  };

  // Lucrative metric indicators for each service
  const serviceMetrics: Record<string, string> = {
    "ai-engineering": "ROI: +380% Efficiency",
    "software-dev": "Performance: <50ms P99",
    "enterprise-solutions": "Scale: 10M+ Operations",
    "cloud-engineering": "FinOps: -45% Burn Rate",
    "devops-consulting": "Deployments: 12x Faster",
    "iot-solutions": "Uptime: 99.99% Edge SLA",
    "cyber-security": "Zero-Trust: SOC 2 / HIPAA",
    "digital-transformation": "Time-to-Value: 30 Days",
    "drone-technology": "Aerial AI: 99.8% Precision"
  };

  return (
    <section className="py-24 sm:py-28 bg-[#040711] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-xs font-mono font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Lifecycle Engineering Practices</span>
            </div>
            <h2 className="text-3xl sm:text-5xl 2xl:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Enterprise <span className="text-gradient-cyan">Engineering Practices</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              We design, build, and deploy production-grade software, robotics, and AI systems that solve complex bottlenecks and deliver quantifiable bottom-line results.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => openConsultationModal()}
              className="px-6 py-3 rounded-xl bg-space-900 border border-brand-cyan/40 hover:border-brand-cyan text-white text-xs sm:text-sm font-semibold transition-all hover:bg-space-850 shadow-lg shadow-brand-cyan/10"
            >
              Request Custom Proposal
            </button>
          </div>
        </div>

        {/* 9 Full-Width Lucrative Service Cards in 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {SERVICES.map((svc) => (
            <div
              key={svc.id}
              className="lucrative-glass p-6 sm:p-7 rounded-3xl flex flex-col justify-between group hover:border-brand-cyan/50 transition-all duration-300"
            >
              <div>
                {/* Top Bar: Icon + ROI Metric Pill */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-space-900 border border-white/[0.08] group-hover:border-brand-cyan/50 group-hover:bg-brand-blue/10 transition-colors">
                    {getIcon(svc.iconName)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {serviceMetrics[svc.id] || "Enterprise Tier"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-heading text-white group-hover:text-brand-cyan transition-colors mb-2.5">
                  {svc.title}
                </h3>

                {/* Punchy Short Description */}
                <p className="text-xs sm:text-[13px] text-slate-300 mb-5 leading-relaxed line-clamp-3">
                  {svc.shortDescription}
                </p>

                {/* Key Capabilities */}
                <div className="space-y-2 mb-6">
                  {svc.capabilities.slice(0, 3).map((cap, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                      <span className="truncate">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-4 border-t border-white/[0.06]">
                  {svc.techStack.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-space-950/80 text-slate-400 border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Card Action Link */}
                <Link
                  href={`/services/${svc.slug}`}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-brand-cyan group-hover:text-white transition-colors pt-2"
                >
                  <span>Explore Architecture & Roadmap</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
