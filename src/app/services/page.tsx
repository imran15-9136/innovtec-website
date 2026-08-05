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
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export default function ServicesPage() {
  const { openConsultationModal } = useApp();

  return (
    <div className="pt-28 pb-20 bg-space-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="blue">Engineering Capabilities</Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight">
            Our Enterprise <span className="text-gradient-blue">Services</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From private vector RAG models to microservices architecture and zero-trust cloud infrastructure, we solve complex business problems through code and AI.
          </p>
        </div>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((svc) => (
            <div
              key={svc.id}
              className="glass-card p-8 rounded-3xl border border-slate-800 flex flex-col justify-between group hover:border-brand-blue/50"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-space-850 border border-slate-800 text-brand-cyan">
                    <Brain className="w-6 h-6" />
                  </div>
                  <Badge variant="outline">{svc.category}</Badge>
                </div>

                <h2 className="text-2xl font-bold font-heading text-white group-hover:text-brand-cyan transition-colors mb-2">
                  {svc.title}
                </h2>
                <p className="text-xs font-mono text-brand-cyan mb-4">{svc.tagline}</p>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  {svc.fullDescription}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-xs font-mono uppercase text-slate-400 block mb-2">Key Business Problems Solved:</span>
                  {svc.businessProblems.map((prob, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                      <span>{prob}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                <Link
                  href={`/services/${svc.slug}`}
                  className="text-xs font-semibold text-brand-cyan hover:underline inline-flex items-center gap-1"
                >
                  View Full Architecture & FAQs <ArrowRight className="w-4 h-4" />
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
          ))}
        </div>

      </div>
    </div>
  );
}
