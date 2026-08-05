"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Clock } from "lucide-react";

export default function InsightsPage() {
  const { insights } = useApp();

  const published = insights.filter((a) => a.status === "Published");

  return (
    <div className="pt-28 pb-20 bg-space-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="cyan">Thought Leadership</Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight">
            Engineering <span className="text-gradient-cyan">Insights</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Technical whitepapers, AI architectural benchmarks, and best practices published by Innovtec engineering leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {published.map((art) => (
            <div key={art.id} className="glass-card rounded-3xl border border-slate-800 overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-space-900">
                  <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="cyan">{art.category}</Badge>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 font-mono">
                    <span>{art.publishedAt}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {art.readTime}</span>
                  </div>

                  <h2 className="text-xl font-bold font-heading text-white group-hover:text-brand-cyan transition-colors leading-snug line-clamp-2">
                    {art.title}
                  </h2>

                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-800/80 flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <img src={art.author.avatar} alt={art.author.name} className="w-6 h-6 rounded-full object-cover" />
                  <span className="text-xs text-slate-300">{art.author.name}</span>
                </div>
                <Link href={`/insights/${art.slug}`} className="text-xs font-semibold text-brand-cyan hover:underline inline-flex items-center gap-1">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
