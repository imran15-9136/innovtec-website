"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { CASE_STUDIES } from "@/data/mockData";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useApp } from "@/context/AppContext";
import { ArrowLeft, ArrowRight, Layers, TrendingUp, CheckCircle2 } from "lucide-react";

export default function CaseStudyDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { openConsultationModal } = useApp();

  const cs = CASE_STUDIES.find((item) => item.slug === slug);

  if (!cs) {
    return (
      <div className="pt-36 pb-20 bg-space-950 text-center min-h-screen">
        <h1 className="text-3xl font-bold text-white mb-4">Case Study Not Found</h1>
        <Link href="/portfolio">
          <Button variant="gradient">Back to Portfolio</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 bg-space-950 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Case Studies
        </Link>

        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-6 mb-12">
          <div className="flex items-center gap-3">
            <Badge variant="blue">{cs.clientIndustry}</Badge>
            <span className="text-xs font-mono text-slate-400">Client: {cs.clientName}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            {cs.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {cs.summary}
          </p>

          <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-space-900 border border-slate-800">
            {cs.results.map((r, idx) => (
              <div key={idx} className="text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-emerald font-heading">{r.metric}</div>
                <div className="text-xs text-slate-400">{r.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenge vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-3">
            <h3 className="text-xl font-bold font-heading text-rose-400">The Challenge</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{cs.challenge}</p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-3">
            <h3 className="text-xl font-bold font-heading text-emerald-400">The Innovtec Solution</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{cs.solution}</p>
          </div>
        </div>

        {/* Target Architecture Blueprint */}
        <div className="glass-card p-8 rounded-3xl border border-slate-800 mb-12 space-y-4">
          <h3 className="text-xl font-bold font-heading text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-brand-blue" /> Target Architecture Blueprint
          </h3>
          <div className="p-4 rounded-xl bg-space-950 border border-slate-800 font-mono text-xs text-brand-cyan">
            {cs.architectureOverview}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="glass-card p-8 rounded-3xl border border-slate-800 mb-12">
          <h3 className="text-xl font-bold font-heading text-white mb-4">Technologies Employed</h3>
          <div className="flex flex-wrap gap-2">
            {cs.techStack.map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-xl bg-space-900 border border-slate-700 text-xs font-mono font-semibold text-slate-200">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center pt-4">
          <Button variant="gradient" size="lg" onClick={() => openConsultationModal(`Similar Case Study Inquiry: ${cs.title}`)}>
            Discuss Similar Engineering Strategy
          </Button>
        </div>

      </div>
    </div>
  );
}
