"use client";

import React from "react";
import Link from "next/link";
import { INSIGHTS } from "@/data/mockData";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Clock, User } from "lucide-react";

export const InsightsSection: React.FC = () => {
  return (
    <section className="py-24 bg-space-900/40 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <Badge variant="cyan" className="mb-4">
              Thought Leadership & Whitepapers
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Engineering <span className="text-gradient-cyan">Insights</span>
            </h2>
            <p className="mt-4 text-base text-slate-300 max-w-xl">
              Deep dives into vector RAG architectures, Kubernetes FinOps, zero-trust security, and modern full-stack development.
            </p>
          </div>

          <Link href="/insights">
            <span className="text-xs font-semibold text-brand-cyan hover:underline inline-flex items-center gap-1">
              View All Articles <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHTS.map((art) => (
            <div
              key={art.id}
              className="glass-card rounded-3xl border border-slate-800 overflow-hidden flex flex-col justify-between group hover:border-brand-cyan/50"
            >
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-space-950">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="cyan">{art.category}</Badge>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-[11px] text-slate-400 font-mono">
                    <span>{art.publishedAt}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {art.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-white group-hover:text-brand-cyan transition-colors leading-snug line-clamp-2">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-800/80 flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <img
                    src={art.author.avatar}
                    alt={art.author.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-xs font-medium text-slate-300">{art.author.name}</span>
                </div>

                <Link
                  href={`/insights/${art.slug}`}
                  className="text-xs font-semibold text-brand-cyan hover:underline inline-flex items-center gap-1"
                >
                  Read <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
