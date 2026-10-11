"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useApp } from "@/context/AppContext";
import { 
  GraduationCap, 
  Stethoscope, 
  Landmark, 
  ShoppingBag, 
  Factory, 
  Building, 
  Truck, 
  Rocket, 
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  CheckCircle2
} from "lucide-react";

export const IndustriesSection: React.FC = () => {
  const { openConsultationModal } = useApp();
  const [activeTab, setActiveTab] = useState(0);

  const industries = [
    {
      name: "Healthcare",
      icon: Stethoscope,
      tagline: "HIPAA-Compliant AI Medical Search & Clinical Diagnostics",
      challenge: "Clinicians losing hours navigating clinical records and medical research archives.",
      solution: "Private medical RAG knowledge base fine-tuned on clinical guidelines with zero data retention.",
      outcome: "75% Faster Research • 99.2% Accuracy",
      roiMetric: "$3.8M",
      roiLabel: "Annual Clinical Cost Reductions",
      compliance: "HIPAA & HITECH Certified"
    },
    {
      name: "Finance & FinTech",
      icon: Landmark,
      tagline: "Ultra-Low Latency Microservices & Real-Time Fraud AI",
      challenge: "Legacy monolith bottlenecks causing millisecond latency during high-volume trading.",
      solution: "Golang event-driven microservices on Kubernetes with Apache Kafka & fraud detection ML.",
      outcome: "99.999% Banking Uptime • -65% Infra Costs",
      roiMetric: "<8ms",
      roiLabel: "Transaction Execution Latency",
      compliance: "PCI-DSS & SOC 2 Type II"
    },
    {
      name: "Manufacturing",
      icon: Factory,
      tagline: "IoT Telematics & Predictive Machine Anomaly Models",
      challenge: "Unscheduled equipment failures stalling smart factory assembly floors.",
      solution: "Edge MQTT sensor stream ingestion with real-time predictive failure ML models.",
      outcome: "$4.2M Downtime Prevented • 48hr Advance Warning",
      roiMetric: "$4.2M",
      roiLabel: "Prevented Equipment Losses",
      compliance: "ISO 27001 & Industrial IoT"
    },
    {
      name: "Retail & E-Commerce",
      icon: ShoppingBag,
      tagline: "Headless High-Converting Commerce & AI Personalization",
      challenge: "High cart abandonment due to sluggish legacy checkout pipelines.",
      solution: "Next.js Edge storefront with sub-second page loads and vector recommendation engine.",
      outcome: "+42% Mobile Conversion • 0.8s Global TTFB",
      roiMetric: "+42%",
      roiLabel: "Checkout Revenue Lift",
      compliance: "Global Edge CDN • Zero Downtime"
    },
    {
      name: "Education & EdTech",
      icon: GraduationCap,
      tagline: "Predictive Student Retention & AI Academic Workflow",
      challenge: "High dropout rates and manual grading bottlenecks across campus networks.",
      solution: "Integrated LMS data lake with early-warning dropout analytics and automated grading.",
      outcome: "+28% Student Retention • 60% Faster Grading",
      roiMetric: "+28%",
      roiLabel: "Course Completion Increase",
      compliance: "FERPA & GDPR Compliant"
    },
    {
      name: "Logistics & Supply",
      icon: Truck,
      tagline: "Fleet Telematics & Real-Time Route Optimization",
      challenge: "Suboptimal route dispatching inflating enterprise fuel and delivery expenses.",
      solution: "Real-time GPS telematics gateway running dynamic routing algorithms.",
      outcome: "-22% Fuel Expenditures • 99.4% On-Time Delivery",
      roiMetric: "-22%",
      roiLabel: "Fleet Fuel Burn Reduction",
      compliance: "24/7 Real-Time Telematics SLA"
    },
    {
      name: "Public Sector",
      icon: Building,
      tagline: "FedRAMP-Ready Secure Citizen Service Portals",
      challenge: "Paper-heavy citizen processes vulnerable to operational delay and audit failure.",
      solution: "Zero-trust government service portal with encrypted document verification pipelines.",
      outcome: "100% Digital Flow • Tamper-Proof Audit Logs",
      roiMetric: "100%",
      roiLabel: "Digital Automation Rate",
      compliance: "FedRAMP & SOC 2 Ready"
    },
    {
      name: "Series A+ Startups",
      icon: Rocket,
      tagline: "Rapid MVP Engineering to High-Scale Production",
      challenge: "Urgent investor roadmap requiring high-velocity software delivery.",
      solution: "Dedicated sprint squad deploying modular Next.js, Postgres, and AI pipelines in 4 weeks.",
      outcome: "Production Launch in 30 Days • Scalable to 1M Users",
      roiMetric: "30 Days",
      roiLabel: "Time-to-Production Launch",
      compliance: "Enterprise-Ready Codebase"
    }
  ];

  const current = industries[activeTab];

  return (
    <section className="py-24 sm:py-28 bg-[#030610] border-t border-white/[0.06] relative overflow-hidden">
      
      {/* Soft ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vertical Domain Specialization</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            High-Impact Engineering for <span className="text-gradient-cyan">Target Sectors</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Tailored architecture frameworks engineered to solve high-stakes industry bottlenecks.
          </p>
        </div>

        {/* Industry Panoramic Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {industries.map((ind, idx) => {
            const IconComp = ind.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={ind.name}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-xl shadow-brand-cyan/20 scale-105"
                    : "bg-space-950/80 border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/[0.15]"
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Full-Width Industry Box */}
        <div className="lucrative-glass p-8 sm:p-12 rounded-3xl border border-white/[0.08] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Info: 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/15 text-brand-cyan text-xs font-mono font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
              <span>{current.name} Vertical Architecture</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white leading-tight">
              {current.tagline}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-space-950/70 border border-white/[0.06] space-y-1.5">
                <span className="text-slate-400 font-semibold block uppercase text-[10px] tracking-wider font-mono">
                  Enterprise Problem
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {current.challenge}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-space-950/70 border border-brand-cyan/20 space-y-1.5">
                <span className="text-brand-cyan font-semibold block uppercase text-[10px] tracking-wider font-mono">
                  Target Engineering Solution
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {current.solution}
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gradient"
                size="md"
                onClick={() => openConsultationModal(current.name)}
                icon={<ArrowRight className="w-4 h-4" />}
                className="btn-glow"
              >
                Discuss {current.name} Architecture
              </Button>
            </div>
          </div>

          {/* Right ROI Card: 5 cols */}
          <div className="lg:col-span-5 p-7 sm:p-9 rounded-2xl bg-space-950/90 border border-white/[0.08] space-y-6 text-left relative overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
              <span className="text-xs font-mono uppercase text-slate-400">Measured Enterprise ROI</span>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                VERIFIED OUTCOME
              </span>
            </div>

            <div>
              <div className="text-4xl sm:text-5xl font-extrabold text-brand-cyan font-heading">
                {current.roiMetric}
              </div>
              <div className="text-xs text-slate-400 font-mono mt-1">
                {current.roiLabel}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-space-900/60 border border-white/[0.04] space-y-2">
              <div className="text-xs font-semibold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{current.outcome}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2.5 text-xs text-emerald-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{current.compliance}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
