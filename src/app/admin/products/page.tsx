"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Package, ExternalLink, Edit } from "lucide-react";

export default function AdminProductsPage() {
  const { products } = useApp();

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-white">Product Ecosystem CMS</h1>
          <p className="text-xs sm:text-sm text-slate-400">Manage Innovtec SaaS products, features, demo links, and metrics.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((p) => (
          <div key={p.id} className="glass-card p-8 rounded-3xl border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="purple">{p.badge}</Badge>
              <span className="text-xs font-mono text-emerald-400 font-bold">{p.status}</span>
            </div>

            <h3 className="text-xl font-bold font-heading text-white">{p.name}</h3>
            <p className="text-xs text-brand-purple font-mono">{p.tagline}</p>
            <p className="text-xs text-slate-300 leading-relaxed">{p.description}</p>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">Demo URL: {p.demoUrl || "Internal"}</span>
              <Button variant="outline" size="sm" icon={<Edit className="w-3.5 h-3.5" />}>
                Edit Features
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
