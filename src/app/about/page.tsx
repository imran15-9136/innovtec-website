"use client";

import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useApp } from "@/context/AppContext";
import { Brain, ShieldCheck, Zap, Users, Globe, Award, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const { openConsultationModal } = useApp();

  return (
    <div className="pt-28 pb-20 bg-space-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="blue">About Innovtec</Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight">
            Building the Future of <span className="text-gradient-blue">Enterprise AI</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Innovtec was founded to bridge the gap between complex emerging technologies and enterprise software delivery.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-4">
            <Badge variant="cyan">Our Mission</Badge>
            <h2 className="text-2xl font-bold font-heading text-white">Engineering Trust & Intelligent Autonomy</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              To empower global business leaders with secure, production-grade Artificial Intelligence, modern software engineering, and resilient cloud architectures that deliver measurable ROI.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-4">
            <Badge variant="purple">Our Vision</Badge>
            <h2 className="text-2xl font-bold font-heading text-white">The Preferred AI & Cloud Partner</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              To become the global gold standard for AI-first digital engineering, replacing fragile off-the-shelf software with intelligent, custom enterprise solutions.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="glass-card p-10 rounded-3xl border border-slate-800 space-y-8">
          <h2 className="text-3xl font-bold font-heading text-white text-center">Core Engineering Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="text-brand-cyan font-bold text-lg font-heading">1. Zero Fluff, 100% Code</div>
              <p className="text-xs text-slate-300">We prioritize working software, high test coverage, and benchmarked API latencies over marketing buzzwords.</p>
            </div>
            <div className="space-y-2">
              <div className="text-brand-blue font-bold text-lg font-heading">2. Zero-Trust Security</div>
              <p className="text-xs text-slate-300">Every microservice is authenticated, mTLS encrypted, and continuously audited against OWASP and SOC 2 guidelines.</p>
            </div>
            <div className="space-y-2">
              <div className="text-brand-purple font-bold text-lg font-heading">3. FinOps & Cost Discipline</div>
              <p className="text-xs text-slate-300">We design cloud architectures that scale elastically without spiraling monthly hosting invoices.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="gradient" size="lg" onClick={() => openConsultationModal()}>
            Schedule Executive Strategy Session
          </Button>
        </div>

      </div>
    </div>
  );
}
