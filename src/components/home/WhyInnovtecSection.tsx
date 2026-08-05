"use client";

import React from "react";
import { Badge } from "@/components/ui/Badge";
import { 
  ShieldCheck, 
  Brain, 
  Cpu, 
  Cloud, 
  Zap, 
  CheckCircle2, 
  Users, 
  Award 
} from "lucide-react";

export const WhyInnovtecSection: React.FC = () => {
  const points = [
    {
      icon: Brain,
      title: "AI-First Engineering Architecture",
      description: "We don't just add AI as a wrapper. We embed vector RAG, autonomous agents, and custom fine-tuning directly into your enterprise software lifecycle."
    },
    {
      icon: ShieldCheck,
      title: "Zero-Trust & Military-Grade Security",
      description: "SOC 2 Type II compliance, mTLS encryption, automated SAST/DAST CI/CD scanning, and zero data leakage to public AI APIs."
    },
    {
      icon: Cloud,
      title: "Cloud-Native FinOps & Elasticity",
      description: "Architected for AWS, GCP, and Azure with Kubernetes auto-scaling, reducing cloud hosting expenditures by 30% to 50%."
    },
    {
      icon: Users,
      title: "Senior Engineering Staff (10+ Yrs Exp)",
      description: "No junior trial-and-error. Your project is architected and executed directly by senior full-stack, AI, and cloud engineers."
    }
  ];

  return (
    <section className="py-24 bg-space-900/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="blue" className="mb-4">
            Why Technology Leaders Choose Us
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            The <span className="text-gradient-blue">Innovtec Advantage</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We operate as your long-term technology partner, driving architectural excellence and quantifiable business ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {points.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div
                key={p.title}
                className="glass-card p-8 rounded-3xl border border-slate-800 flex items-start gap-5 hover:border-brand-blue/50"
              >
                <div className="p-3.5 rounded-2xl bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan shrink-0">
                  <IconComp className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-heading text-white">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
