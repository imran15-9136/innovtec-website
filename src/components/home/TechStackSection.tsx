"use client";

import React, { useState } from "react";
import { TECH_CATEGORIES } from "@/data/mockData";
import { Badge } from "@/components/ui/Badge";
import { Code2 } from "lucide-react";

export const TechStackSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-24 bg-space-900/50 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="purple" className="mb-4">
            Modern Stack Matrix
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Battle-Tested <span className="text-gradient-purple">Technologies</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We build with modern frameworks, high-throughput databases, and enterprise cloud tooling.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {TECH_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === idx
                  ? "bg-brand-purple text-white shadow-lg shadow-brand-purple/20 scale-105"
                  : "bg-space-950 border border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Tech Badges Grid */}
        <div className="glass-card p-8 rounded-3xl border border-slate-800 max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
          {TECH_CATEGORIES[activeCategory].items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-space-900 border border-slate-800 text-sm font-semibold font-heading text-slate-200 hover:text-white hover:border-brand-purple/60 hover:bg-space-850 transition-all"
            >
              <Code2 className="w-4 h-4 text-brand-purple" />
              <span>{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
