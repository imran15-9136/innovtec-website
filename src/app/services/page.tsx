"use client";

import React from "react";
import Link from "next/link";
import { SERVICES } from "@/data/mockData";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
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
  CheckCircle2
} from "lucide-react";

export default function ServicesPage() {
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
      case "Navigation": return <Navigation className="w-6 h-6 text-brand-cyan" />;
      default: return <Zap className="w-6 h-6 text-brand-blue" />;
    }
  };

  return (
    <div className="pt-28 pb-24 bg-[#040711] min-h-screen text-white">
      <div className="w-full max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Page Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="blue">Engineering Capabilities</Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight">
            Our Enterprise <span className="text-gradient-cyan">Practices</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From private vector RAG models and autonomous drone robotics to microservices architecture and zero-trust cloud infrastructure.
          </p>
        </div>

        {/* Services List Grid - Full Width 3-Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((svc) => (
            <div
              key={svc.id}
              className="lucrative-glass p-8 rounded-3xl border border-white/[0.08] flex flex-col justify-between group hover:border-brand-cyan/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-space-900 border border-white/[0.08] group-hover:border-brand-cyan/40 transition-colors">
                    {getIcon(svc.iconName)}
                  </div>
                  <Badge variant="outline">{svc.category}</Badge>
                </div>

                <h2 className="text-2xl font-bold font-heading text-white group-hover:text-brand-cyan transition-colors mb-2">
                  {svc.title}
                </h2>
                <p className="text-xs font-mono text-brand-cyan mb-4">{svc.tagline}</p>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed line-clamp-3">
                  {svc.fullDescription}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-xs font-mono uppercase text-slate-400 block mb-2">Key Business Problems Solved:</span>
                  {svc.businessProblems.slice(0, 3).map((prob, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                      <span className="truncate">{prob}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5 pt-4 border-t border-white/[0.06]">
                  {svc.techStack.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-space-950/80 text-slate-400 border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between">
                  <Link
                    href={`/services/${svc.slug}`}
                    className="text-xs font-semibold text-brand-cyan hover:underline inline-flex items-center gap-1"
                  >
                    View Details & Roadmap <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Button
                    variant="gradient"
                    size="sm"
                    onClick={() => openConsultationModal(svc.title)}
                  >
                    Consultation
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
