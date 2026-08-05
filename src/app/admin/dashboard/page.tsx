"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { 
  Users, 
  TrendingUp, 
  Brain, 
  FileText, 
  FolderKanban, 
  ArrowRight, 
  CheckCircle2,
  Clock,
  Zap
} from "lucide-react";

export default function AdminDashboardPage() {
  const { leads, insights, caseStudies } = useApp();

  const totalLeads = leads.length;
  const newLeads = leads.filter((l) => l.status === "New").length;
  const inDiscovery = leads.filter((l) => l.status === "In Discovery" || l.status === "Proposal Sent").length;
  const publishedArticles = insights.filter((a) => a.status === "Published").length;

  return (
    <div className="space-y-8">
      
      {/* Welcome Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-8 rounded-3xl bg-gradient-to-r from-space-900 via-space-850 to-space-900 border border-slate-800 shadow-xl">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-white">
            Executive Command Center
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Real-time consultation lead pipeline, CMS content status, and AI Assistant metrics.
          </p>
        </div>

        <Link href="/admin/leads">
          <Button variant="gradient" icon={<ArrowRight className="w-4 h-4" />}>
            Manage Consultation Leads ({newLeads} New)
          </Button>
        </Link>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-mono uppercase">Total Inquiries</span>
            <Users className="w-5 h-5 text-brand-blue" />
          </div>
          <div className="text-3xl font-extrabold text-white font-heading">{totalLeads}</div>
          <div className="text-[11px] text-emerald-400 font-mono">+{newLeads} pending review</div>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-mono uppercase">Active Proposals</span>
            <TrendingUp className="w-5 h-5 text-brand-cyan" />
          </div>
          <div className="text-3xl font-extrabold text-white font-heading">{inDiscovery}</div>
          <div className="text-[11px] text-slate-400">Discovery & Proposals</div>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-mono uppercase">Published Insights</span>
            <FileText className="w-5 h-5 text-brand-purple" />
          </div>
          <div className="text-3xl font-extrabold text-white font-heading">{publishedArticles}</div>
          <div className="text-[11px] text-purple-300">Live Engineering Articles</div>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-mono uppercase">Case Studies</span>
            <FolderKanban className="w-5 h-5 text-brand-emerald" />
          </div>
          <div className="text-3xl font-extrabold text-white font-heading">{caseStudies.length}</div>
          <div className="text-[11px] text-slate-400">Featured ROI Projects</div>
        </div>

      </div>

      {/* Recent Leads Feed */}
      <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold font-heading text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-brand-blue" /> Recent Consultation Leads
          </h2>
          <Link href="/admin/leads" className="text-xs font-semibold text-brand-cyan hover:underline">
            View All Leads →
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-space-950 text-slate-400 font-mono text-[10px] uppercase border-b border-slate-800">
              <tr>
                <th className="p-3">Client</th>
                <th className="p-3">Company</th>
                <th className="p-3">Service Need</th>
                <th className="p-3">Budget</th>
                <th className="p-3">Source</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {leads.slice(0, 5).map((lead) => (
                <tr key={lead.id} className="hover:bg-space-850/50 transition-colors">
                  <td className="p-3 font-semibold text-white">{lead.fullName}</td>
                  <td className="p-3 text-slate-300">{lead.companyName}</td>
                  <td className="p-3 font-mono text-brand-cyan">{lead.serviceCategory}</td>
                  <td className="p-3 font-mono">{lead.estimatedBudget}</td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 rounded bg-space-950 text-[10px] border border-slate-800">
                      {lead.source}
                    </span>
                  </td>
                  <td className="p-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                      lead.status === "New"
                        ? "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                        : lead.status === "In Discovery"
                        ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                        : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
