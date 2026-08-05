"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { Plus, FolderKanban, Edit, CheckCircle2 } from "lucide-react";

export default function AdminPortfolioPage() {
  const { caseStudies, addCaseStudy } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientIndustry, setClientIndustry] = useState<any>("Healthcare");
  const [summary, setSummary] = useState("");

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    addCaseStudy({
      title,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      clientName,
      clientIndustry,
      summary,
      challenge: "High operational complexity and legacy infrastructure bottlenecks.",
      solution: "Engineered scalable cloud microservices and fine-tuned AI pipeline.",
      architectureOverview: "Client App -> Gateway -> Microservices -> Vector Database",
      results: [
        { metric: "+150%", label: "Operational Throughput" },
        { metric: "-40%", label: "Cloud Cost Saved" }
      ],
      techStack: ["Next.js", "Python", "Kubernetes", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
      featured: true
    });
    setIsOpen(false);
    setTitle("");
    setClientName("");
  };

  return (
    <div className="space-y-8">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-white">Portfolio Case Studies CMS</h1>
          <p className="text-xs sm:text-sm text-slate-400">Manage client success stories, architecture blueprints, and ROI benchmarks.</p>
        </div>

        <Button variant="gradient" icon={<Plus className="w-4 h-4" />} onClick={() => setIsOpen(true)}>
          Add Case Study
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {caseStudies.map((cs) => (
          <div key={cs.id} className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="blue">{cs.clientIndustry}</Badge>
              <span className="text-xs font-mono text-slate-400">{cs.clientName}</span>
            </div>

            <h3 className="text-lg font-bold font-heading text-white">{cs.title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{cs.summary}</p>

            <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-space-950 border border-slate-800 text-center">
              {cs.results.map((r, i) => (
                <div key={i}>
                  <div className="text-xs font-bold text-emerald-400 font-heading">{r.metric}</div>
                  <div className="text-[9px] text-slate-400 truncate">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Add New Case Study">
        <form onSubmit={handleCreate} className="space-y-4 text-xs">
          <div>
            <label className="block mb-1 text-slate-300">Case Study Title</label>
            <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Deploying AI Healthcare RAG Engine" className="w-full bg-space-950 border border-slate-700 rounded-lg p-2 text-xs text-white" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-slate-300">Client Name</label>
              <input type="text" required value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="Aethel Corp" className="w-full bg-space-950 border border-slate-700 rounded-lg p-2 text-xs text-white" />
            </div>
            <div>
              <label className="block mb-1 text-slate-300">Industry</label>
              <select value={clientIndustry} onChange={(e) => setClientIndustry(e.target.value as any)} className="w-full bg-space-950 border border-slate-700 rounded-lg p-2 text-xs text-white">
                <option value="Healthcare">Healthcare</option>
                <option value="Finance">Finance</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Retail">Retail</option>
                <option value="Education">Education</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-1 text-slate-300">Executive Summary</label>
            <textarea rows={3} required value={summary} onChange={(e) => setSummary(e.target.value)} className="w-full bg-space-950 border border-slate-700 rounded-lg p-2 text-xs text-white resize-none" />
          </div>

          <Button type="submit" variant="gradient" className="w-full py-2.5">
            Save Case Study
          </Button>
        </form>
      </Modal>

    </div>
  );
}
