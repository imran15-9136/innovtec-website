"use client";

import React from "react";
import { Badge } from "@/components/ui/Badge";
import { 
  Search, 
  Target, 
  Layers, 
  Palette, 
  Code2, 
  CheckSquare, 
  Rocket, 
  Headphones 
} from "lucide-react";

export const ProcessTimelineSection: React.FC = () => {
  const steps = [
    { num: "01", title: "Discover", icon: Search, desc: "Stakeholder interviews, pain point audit, and business requirement scoping." },
    { num: "02", title: "Strategy", icon: Target, desc: "AI feasibility study, cloud cost estimation, and technical roadmap." },
    { num: "03", title: "Architecture", icon: Layers, desc: "Technical Design Document (TDD), schema modeling, and API contract design." },
    { num: "04", title: "UI/UX Design", icon: Palette, desc: "Interactive Figma prototypes, design system tokens, and accessibility testing." },
    { num: "05", title: "Development", icon: Code2, desc: "Agile sprints, clean code standards, unit testing, and modular microservices." },
    { num: "06", title: "Testing & QA", icon: CheckSquare, desc: "Automated regression, SOC 2 security scanning, load testing, and UAT." },
    { num: "07", title: "Deployment", icon: Rocket, desc: "Zero-downtime blue/green cloud release with automated CI/CD pipelines." },
    { num: "08", title: "Support & SLA", icon: Headphones, desc: "24/7 APM telemetry monitoring, FinOps cost tuning, and continuous enhancements." },
  ];

  return (
    <section className="py-24 bg-space-950 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" className="mb-4">
            Structured Agile Execution
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Our 8-Step <span className="text-gradient-cyan">Engineering Lifecycle</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A transparent, predictable engineering methodology designed for speed, security, and continuous delivery.
          </p>
        </div>

        {/* 8 Step Grid / Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.num}
                className="glass-card p-6 rounded-2xl border border-slate-800 relative group hover:border-brand-cyan/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-extrabold font-mono text-brand-cyan">
                    {step.num}
                  </div>
                  <div className="p-2.5 rounded-xl bg-space-900 border border-slate-800 text-slate-300 group-hover:text-brand-cyan transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold font-heading text-white mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
