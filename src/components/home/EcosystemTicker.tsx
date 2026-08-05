"use client";

import React from "react";
import { Cpu, Cloud, Database, Shield, Code, Server } from "lucide-react";

export const EcosystemTicker: React.FC = () => {
  const techLogos = [
    { name: "AWS Enterprise", category: "Cloud Infrastructure" },
    { name: "OpenAI API", category: "Artificial Intelligence" },
    { name: "Google Cloud Platform", category: "Multi-Cloud" },
    { name: "Microsoft Azure", category: "Enterprise Cloud" },
    { name: "PyTorch & Llama 3", category: "Deep Learning" },
    { name: "Kubernetes & Docker", category: "Containerization" },
    { name: "Next.js & TypeScript", category: "Frontend Stack" },
    { name: "Apache Kafka", category: "Event Streaming" },
    { name: "PostgreSQL & Qdrant", category: "Vector & Relational DB" },
    { name: "Terraform IaC", category: "Infrastructure" },
    { name: "HashiCorp Vault", category: "Cyber Security" },
  ];

  return (
    <div className="py-8 bg-space-950/90 border-y border-slate-800/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
          POWERING ENTERPRISE INFRASTRUCTURE WITH WORLD-CLASS TECHNOLOGIES
        </span>
      </div>

      <div className="flex overflow-hidden select-none">
        <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
          {techLogos.concat(techLogos).map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="flex items-center gap-3 px-4 py-2 rounded-xl bg-space-900/60 border border-slate-800/60 text-slate-300 hover:text-white transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-brand-cyan" />
              <span className="text-xs font-semibold font-heading">{tech.name}</span>
              <span className="text-[10px] font-mono text-slate-400 bg-space-850 px-1.5 py-0.5 rounded">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
