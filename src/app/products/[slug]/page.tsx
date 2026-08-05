"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { PRODUCTS } from "@/data/mockData";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useApp } from "@/context/AppContext";
import { CheckCircle2, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { openConsultationModal } = useApp();

  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="pt-36 pb-20 bg-space-950 text-center min-h-screen">
        <h1 className="text-3xl font-bold text-white mb-4">Product Not Found</h1>
        <Link href="/products">
          <Button variant="gradient">Back to Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 bg-space-950 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/products" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to All Products
        </Link>

        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-6 mb-12">
          <div className="flex items-center gap-3">
            <Badge variant="purple">{product.badge}</Badge>
            <span className="text-xs font-mono text-emerald-400">{product.status} Enterprise Edition</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            {product.name}
          </h1>

          <p className="text-lg text-brand-purple font-medium">
            {product.tagline}
          </p>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {product.description}
          </p>

          <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-space-900 border border-slate-800">
            {product.metrics.map((m) => (
              <div key={m.label} className="text-left">
                <div className="text-xl sm:text-2xl font-extrabold text-white font-heading">{m.value}</div>
                <div className="text-xs text-slate-400">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <Button variant="gradient" size="lg" onClick={() => openConsultationModal(`Demo Request: ${product.name}`)} icon={<ExternalLink className="w-4 h-4" />}>
              Request Sandbox Demo
            </Button>
          </div>
        </div>

        {/* Features List */}
        <div className="glass-card p-8 rounded-3xl border border-slate-800 mb-12 space-y-4">
          <h3 className="text-xl font-bold font-heading text-white">Platform Capabilities & Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {product.features.map((f) => (
              <div key={f} className="flex items-center gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
