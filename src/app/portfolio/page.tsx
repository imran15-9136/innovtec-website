"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CASE_STUDIES } from "@/data/mockData";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight } from "lucide-react";

export default function PortfolioPage() {
  const [industry, setIndustry] = useState("All");

  const industries = ["All", "Healthcare", "Finance", "Manufacturing", "Retail"];

  const filtered = industry === "All"
    ? CASE_STUDIES
    : CASE_STUDIES.filter((cs) => cs.clientIndustry === industry);

  return (
    <div className="pt-28 pb-20 bg-space-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="emerald">Enterprise Case Studies</Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight">
            Our Proven <span className="text-gradient-blue">Portfolio</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Real enterprise case studies detailing engineering challenges, target architectures, and measured business impact.
          </p>

          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setIndustry(ind)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  industry === ind
                    ? "bg-brand-blue text-white"
                    : "bg-space-900 border border-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((cs) => (
            <div key={cs.id} className="glass-card rounded-3xl border border-slate-800 overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-space-900">
                  <img src={cs.image} alt={cs.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="blue">{cs.clientIndustry}</Badge>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <span className="text-xs font-mono font-bold text-slate-400">{cs.clientName}</span>
                  <h2 className="text-2xl font-bold font-heading text-white group-hover:text-brand-cyan transition-colors">{cs.title}</h2>
                  <p className="text-xs text-slate-300 leading-relaxed">{cs.summary}</p>

                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-space-900 border border-slate-800">
                    {cs.results.map((r, i) => (
                      <div key={i} className="text-center">
                        <div className="text-base font-extrabold text-brand-emerald font-heading">{r.metric}</div>
                        <div className="text-[10px] text-slate-400 truncate">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0 border-t border-slate-800/80 flex items-center justify-between mt-4">
                <div className="flex flex-wrap gap-1">
                  {cs.techStack.slice(0, 3).map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-space-900 text-slate-400">{t}</span>
                  ))}
                </div>
                <Link href={`/portfolio/${cs.slug}`} className="text-xs font-semibold text-brand-cyan hover:underline inline-flex items-center gap-1">
                  Full Architecture Breakdown <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
