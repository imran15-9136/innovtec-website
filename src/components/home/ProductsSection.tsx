"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/mockData";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useApp } from "@/context/AppContext";
import { 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight,
  Shield,
  Layers,
  Activity,
  Globe,
  Terminal,
  Cpu
} from "lucide-react";

export const ProductsSection: React.FC = () => {
  const { openConsultationModal } = useApp();
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Platforms (4)" },
    { id: "ai", label: "AI & Automation" },
    { id: "edtech", label: "EdTech & CRM" },
    { id: "infra", label: "Developer Infra" }
  ];

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "ai") return p.id.includes("ai");
    if (activeFilter === "edtech") return p.id.includes("crm") || p.id.includes("student");
    if (activeFilter === "infra") return p.id.includes("notification");
    return true;
  });

  // Custom accent themes for each product
  const productAccents: Record<string, { border: string; glow: string; text: string; badgeBg: string }> = {
    "innov-crm": {
      border: "group-hover:border-emerald-500/50",
      glow: "from-emerald-500/10 via-transparent to-transparent",
      text: "text-emerald-400",
      badgeBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
    },
    "ai-automation-platform": {
      border: "group-hover:border-purple-500/50",
      glow: "from-purple-500/10 via-transparent to-transparent",
      text: "text-purple-400",
      badgeBg: "bg-purple-500/10 text-purple-300 border-purple-500/20"
    },
    "student-management-system": {
      border: "group-hover:border-cyan-500/50",
      glow: "from-cyan-500/10 via-transparent to-transparent",
      text: "text-cyan-400",
      badgeBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20"
    },
    "notification-platform": {
      border: "group-hover:border-amber-500/50",
      glow: "from-amber-500/10 via-transparent to-transparent",
      text: "text-amber-400",
      badgeBg: "bg-amber-500/10 text-amber-300 border-amber-500/20"
    }
  };

  return (
    <section className="py-24 sm:py-28 bg-[#030610] relative overflow-hidden text-white border-t border-white/[0.06]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="w-full max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-purple-300 text-xs font-mono font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proprietary SaaS Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-5xl 2xl:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Featured <span className="text-gradient-purple">Innovtec Platforms</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Enterprise-grade SaaS products built and maintained by Innovtec, available for dedicated cloud deployment.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveFilter(c.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeFilter === c.id
                    ? "bg-brand-purple text-white shadow-lg shadow-brand-purple/20 scale-105"
                    : "bg-space-950 border border-white/[0.08] text-slate-400 hover:text-white"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Rich Visual Product Cards in 2x2 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10">
          {filteredProducts.map((product) => {
            const accent = productAccents[product.id] || productAccents["innov-crm"];
            const cleanUrl = product.demoUrl ? product.demoUrl.replace("https://", "") : `${product.slug}.innovtec.ai`;
            const screenshotUrl = product.screenshots && product.screenshots[0]
              ? product.screenshots[0]
              : "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000";

            return (
              <div
                key={product.id}
                className={`lucrative-glass rounded-3xl border border-white/[0.08] overflow-hidden flex flex-col justify-between group transition-all duration-500 ${accent.border}`}
              >
                <div>
                  
                  {/* 1. Sleek Application Window Mockup Header */}
                  <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 bg-space-950/90 border-b border-white/[0.08] text-xs font-mono">
                    <div className="flex items-center gap-2.5">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      </div>
                      <div className="hidden sm:flex items-center gap-1.5 ml-2 text-[11px] text-slate-400 bg-space-900/80 px-2.5 py-0.5 rounded-md border border-white/[0.04]">
                        <Globe className="w-3 h-3 text-slate-500" />
                        <span className="truncate max-w-[220px]">{cleanUrl}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>LIVE ON AWS</span>
                      </span>
                    </div>
                  </div>

                  {/* 2. Visual UI Preview Banner with Subtle Gradient Overlay */}
                  <div className="relative h-52 sm:h-64 w-full overflow-hidden bg-space-950">
                    <img
                      src={screenshotUrl}
                      alt={product.name}
                      className="w-full h-full object-cover object-top filter brightness-90 contrast-105 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/30 to-transparent" />
                    
                    {/* Badge Floating in Image */}
                    <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between pointer-events-none">
                      <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold backdrop-blur-xl border ${accent.badgeBg}`}>
                        {product.badge}
                      </span>
                      <span className="text-[11px] font-mono text-slate-300 bg-space-950/80 px-3 py-1 rounded-lg backdrop-blur-md border border-white/10">
                        Enterprise Architecture
                      </span>
                    </div>
                  </div>

                  {/* 3. Product Info & Metrics */}
                  <div className="p-6 sm:p-8 space-y-5">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white group-hover:text-purple-300 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-slate-400 mt-1">
                        {product.tagline}
                      </p>
                    </div>

                    {/* Minimal 1-Sentence Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>

                    {/* Key Metrics HUD Grid */}
                    <div className="grid grid-cols-3 gap-2.5 p-3.5 rounded-2xl bg-space-950/80 border border-white/[0.06]">
                      {product.metrics.map((m) => (
                        <div key={m.label} className="text-left">
                          <div className={`text-base sm:text-lg font-bold font-heading truncate ${accent.text}`}>
                            {m.value}
                          </div>
                          <div className="text-[10px] text-slate-400 truncate font-mono mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Features (3 bullets) */}
                    <div className="space-y-2 pt-1">
                      {product.features.slice(0, 3).map((feat) => (
                        <div key={feat} className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                      {product.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-space-950/90 text-slate-400 border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

                {/* 4. Action Row */}
                <div className="p-6 sm:p-8 pt-0 border-t border-white/[0.06] mt-4 flex items-center justify-between">
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-xs sm:text-sm font-semibold text-purple-300 hover:text-white inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Architecture & Features</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Button
                    variant="gradient"
                    size="sm"
                    onClick={() => openConsultationModal(`Demo: ${product.name}`)}
                    icon={<ExternalLink className="w-3.5 h-3.5" />}
                    className="btn-glow"
                  >
                    Schedule Demo
                  </Button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
