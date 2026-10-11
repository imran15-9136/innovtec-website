"use client";

import React from "react";
import { Cpu, Cloud, Database, Shield, Code, Server, Zap, Lock, Sparkles } from "lucide-react";

export const EcosystemTicker: React.FC = () => {
  const techLogos = [
    { name: "AWS Enterprise", category: "Cloud Partner" },
    { name: "OpenAI Models", category: "LLM / Agents" },
    { name: "Google Cloud Vertex", category: "AI & Infra" },
    { name: "Microsoft Azure", category: "Cloud & SecOps" },
    { name: "NVIDIA CUDA / Tensor", category: "Accelerators" },
    { name: "Anthropic Claude 3.5", category: "Reasoning" },
    { name: "Kubernetes & Istio", category: "Service Mesh" },
    { name: "Apache Kafka", category: "Event Bus" },
    { name: "Qdrant Vector DB", category: "Semantic RAG" },
    { name: "PostgreSQL & ClickHouse", category: "OLAP / OLTP" },
    { name: "Terraform IaC", category: "DevOps" },
    { name: "HashiCorp Vault", category: "Zero-Trust" },
  ];

  return (
    <div className="py-7 bg-[#050814] border-y border-white/[0.06] overflow-hidden relative w-full">
      {/* Edge gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-28 sm:w-48 bg-gradient-to-r from-[#050814] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-28 sm:w-48 bg-gradient-to-l from-[#050814] to-transparent z-10 pointer-events-none" />

      {/* Header tag full width */}
      <div className="w-full max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 mb-4 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2 text-slate-400">
          <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
          <span className="uppercase tracking-widest text-[11px] text-slate-400 font-semibold">
            Enterprise Cloud & AI Technology Stack
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[11px] text-slate-500 font-mono">
          <span>● ZERO-LOCKIN</span>
          <span>● MULTI-CLOUD READY</span>
          <span>● SOC 2 AUDITED</span>
        </div>
      </div>

      <div className="flex overflow-hidden select-none">
        <div className="flex items-center gap-4 sm:gap-6 animate-marquee whitespace-nowrap">
          {techLogos.concat(techLogos).map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-space-900/60 border border-white/[0.06] text-slate-300 hover:text-white hover:border-brand-cyan/40 hover:bg-space-850/80 transition-all duration-300 group cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-brand-cyan group-hover:shadow-[0_0_8px_#06b6d4] transition-all" />
              <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white">{tech.name}</span>
              <span className="text-[10px] text-brand-cyan/80 bg-brand-cyan/10 px-2 py-0.5 rounded font-mono border border-brand-cyan/20">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
