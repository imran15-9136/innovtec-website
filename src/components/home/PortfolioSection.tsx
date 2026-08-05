"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CASE_STUDIES } from "@/data/mockData";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Industry } from "@/types";
import { ArrowRight, Building2, Layers, TrendingUp } from "lucide-react";

export const PortfolioSection: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");

  const industries = ["All", "Healthcare", "Finance", "Manufacturing", "Retail"];

  const filtered = selectedIndustry === "All" 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter((cs) => cs.clientIndustry === selectedIndustry);

  return (
    <section className="py-24 bg-space-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <Badge variant="emerald" className="mb-4">
              Proven Enterprise ROI
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Featured <span className="text-gradient-blue">Case Studies</span>
            </h2>
            <p className="mt-4 text-base text-slate-300 max-w-xl">
              Real engineering outcomes achieved for global enterprises, fintech institutions, healthcare providers, and smart manufacturing facilities.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedIndustry === ind
                    ? "bg-brand-blue text-white shadow-md"
                    : "bg-space-900 border border-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filtered.map((cs) => (
            <div
              key={cs.id}
              className="glass-card rounded-3xl border border-slate-800 overflow-hidden flex flex-col justify-between group hover:border-brand-blue/50"
            >
              <div>
                {/* Image & Industry Badge */}
                <div className="relative h-48 w-full overflow-hidden bg-space-900">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="blue">{cs.clientIndustry}</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-xs font-bold font-mono text-slate-300">
                    {cs.clientName}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-brand-cyan transition-colors leading-snug">
                    {cs.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {cs.summary}
                  </p>

                  {/* Measured Results Counter Grid */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-space-900 border border-slate-800">
                    {cs.results.map((r, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-sm font-extrabold text-brand-emerald font-heading">{r.metric}</div>
                        <div className="text-[9px] text-slate-400 truncate">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-800/80 flex items-center justify-between mt-4">
                <div className="flex flex-wrap gap-1">
                  {cs.techStack.slice(0, 3).map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-space-900 text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/portfolio/${cs.slug}`}
                  className="text-xs font-semibold text-brand-cyan hover:underline inline-flex items-center gap-1 shrink-0"
                >
                  Read Full Case Study <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/portfolio">
            <Button variant="outline" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Explore All Portfolio & Case Studies
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};
