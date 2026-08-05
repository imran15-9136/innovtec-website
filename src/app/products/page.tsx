"use client";

import React from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/mockData";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useApp } from "@/context/AppContext";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";

export default function ProductsPage() {
  const { openConsultationModal } = useApp();

  return (
    <div className="pt-28 pb-20 bg-space-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="purple">Enterprise Products</Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight">
            Innovtec <span className="text-gradient-purple">SaaS Ecosystem</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            High-performance AI, CRM, EdTech, and developer notification engines built, deployed, and supported by Innovtec engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS.map((p) => (
            <div key={p.id} className="glass-card p-8 rounded-3xl border border-slate-800 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="purple">{p.badge}</Badge>
                  <span className="text-xs font-semibold text-emerald-400 font-mono">{p.status}</span>
                </div>

                <h2 className="text-2xl font-bold font-heading text-white group-hover:text-brand-purple transition-colors mb-2">
                  {p.name}
                </h2>
                <p className="text-xs font-mono text-brand-purple mb-4">{p.tagline}</p>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">{p.description}</p>

                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-space-900 border border-slate-800 mb-6">
                  {p.metrics.map((m) => (
                    <div key={m.label} className="text-left">
                      <div className="text-base font-bold text-white font-heading">{m.value}</div>
                      <div className="text-[10px] text-slate-400 truncate">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                <Link href={`/products/${p.slug}`} className="text-xs font-semibold text-brand-purple hover:underline inline-flex items-center gap-1">
                  Product Details <ArrowRight className="w-4 h-4" />
                </Link>

                <Button variant="gradient" size="sm" onClick={() => openConsultationModal(`Demo: ${p.name}`)} icon={<ExternalLink className="w-3.5 h-3.5" />}>
                  Request Demo
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
