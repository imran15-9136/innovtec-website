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
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export const ServicesSection: React.FC = () => {
  const { openConsultationModal } = useApp();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Brain": return <Brain className="w-6 h-6 text-brand-cyan" />;
      case "Code2": return <Code2 className="w-6 h-6 text-brand-blue" />;
      case "Building2": return <Building2 className="w-6 h-6 text-brand-purple" />;
      case "Cloud": return <Cloud className="w-6 h-6 text-brand-cyan" />;
      case "GitBranch": return <GitBranch className="w-6 h-6 text-brand-emerald" />;
      case "Cpu": return <Cpu className="w-6 h-6 text-brand-amber" />;
      case "ShieldCheck": return <ShieldCheck className="w-6 h-6 text-brand-rose" />;
      default: return <Zap className="w-6 h-6 text-brand-blue" />;
    }
  };

  return (
    <section className="py-24 bg-space-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="blue" className="mb-4">
            Core Business Practice
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            End-to-End <span className="text-gradient-blue">Digital Engineering</span> Capabilities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            From modern generative AI models to zero-trust cloud infrastructure, we solve complex enterprise technology challenges with precision.
          </p>
        </div>

        {/* 8 Visually Rich Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((svc) => (
            <div
              key={svc.id}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-space-850 border border-slate-800 group-hover:border-brand-blue/50 transition-colors">
                    {getIcon(svc.iconName)}
                  </div>
                  <Badge variant="outline" className="text-[10px]">
                    {svc.category.split(" ")[0]}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold font-heading text-white group-hover:text-brand-cyan transition-colors mb-2">
                  {svc.title}
                </h3>

                <p className="text-xs text-slate-400 mb-4 leading-relaxed line-clamp-3">
                  {svc.shortDescription}
                </p>

                {/* Key Capabilities Bullet Preview */}
                <div className="space-y-1.5 mb-6">
                  {svc.capabilities.slice(0, 3).map((cap, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                      <span className="truncate">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1 mb-4 pt-3 border-t border-slate-800/80">
                  {svc.techStack.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-space-850 text-slate-400 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Card Action Link */}
                <Link
                  href={`/services/${svc.slug}`}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-brand-cyan group-hover:text-white transition-colors"
                >
                  <span>Explore Architecture & Details</span>
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
