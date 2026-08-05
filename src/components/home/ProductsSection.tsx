"use client";

import React from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/mockData";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useApp } from "@/context/AppContext";
import { 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight,
  Shield,
  Layers
} from "lucide-react";

export const ProductsSection: React.FC = () => {
  const { openConsultationModal } = useApp();

  return (
    <section className="py-24 bg-space-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="purple" className="mb-4">
            Proprietary SaaS Ecosystem
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Featured <span className="text-gradient-purple">Innovtec Products</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            In addition to custom client engineering, we build, maintain, and license enterprise SaaS platforms powered by modern AI and cloud architecture.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="glass-card p-8 rounded-3xl border border-slate-800 flex flex-col justify-between group hover:border-brand-purple/50"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="purple" className="text-xs font-semibold">
                    {product.badge}
                  </Badge>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-emerald/15 text-emerald-400 text-xs font-medium border border-brand-emerald/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {product.status} Platform
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-heading text-white group-hover:text-brand-purple transition-colors mb-2">
                  {product.name}
                </h3>
                
                <p className="text-sm font-medium text-slate-300 mb-4">
                  {product.tagline}
                </p>

                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-space-900 border border-slate-800 mb-6">
                  {product.metrics.map((m) => (
                    <div key={m.label} className="text-left">
                      <div className="text-lg font-bold text-white font-heading">{m.value}</div>
                      <div className="text-[10px] text-slate-400 truncate">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Feature Bullet List */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  href={`/products/${product.slug}`}
                  className="text-xs font-semibold text-brand-purple hover:underline inline-flex items-center gap-1"
                >
                  View Product Architecture & Features <ArrowRight className="w-4 h-4" />
                </Link>

                <Button
                  variant="gradient"
                  size="sm"
                  onClick={() => openConsultationModal(`Demo Request: ${product.name}`)}
                  icon={<ExternalLink className="w-3.5 h-3.5" />}
                >
                  Request Demo
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
