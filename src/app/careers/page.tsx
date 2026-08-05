"use client";

import React, { useState } from "react";
import { CAREERS } from "@/data/mockData";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { MapPin, Briefcase, Clock, Send, CheckCircle2 } from "lucide-react";

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [applied, setApplied] = useState(false);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);
    setTimeout(() => {
      setApplied(false);
      setSelectedRole(null);
    }, 2000);
  };

  return (
    <div className="pt-28 pb-20 bg-space-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="emerald">Join Innovtec</Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight">
            Build the Future of <span className="text-gradient-blue">AI Engineering</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We are looking for world-class AI research engineers, Next.js full-stack developers, and Kubernetes DevOps leads to solve hard enterprise problems.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-2">
            <div className="text-brand-cyan font-bold font-heading text-lg">Remote-First Culture</div>
            <p className="text-xs text-slate-300">Work from anywhere in the world with flexible hours and top-tier workstation hardware stipends.</p>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-2">
            <div className="text-brand-blue font-bold font-heading text-lg">Competitive Equity & Pay</div>
            <p className="text-xs text-slate-300">Generous salary, equity packages, health coverage, and annual learning budgets.</p>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-2">
            <div className="text-brand-emerald font-bold font-heading text-lg">Cutting-Edge Tech</div>
            <p className="text-xs text-slate-300">Architect high-scale RAG systems, vector stores, and event-driven Go microservices daily.</p>
          </div>
        </div>

        {/* Open Roles */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold font-heading text-white text-center">Open Engineering Roles</h2>
          
          <div className="space-y-4">
            {CAREERS.map((pos) => (
              <div key={pos.id} className="glass-card p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Badge variant="blue">{pos.department}</Badge>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1"><MapPin className="w-3 h-3" /> {pos.location}</span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1"><Clock className="w-3 h-3" /> {pos.type}</span>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white">{pos.title}</h3>
                  <p className="text-xs text-slate-300 max-w-2xl">{pos.description}</p>
                </div>

                <Button variant="gradient" size="sm" onClick={() => setSelectedRole(pos.title)}>
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Application Modal */}
      <Modal isOpen={!!selectedRole} onClose={() => setSelectedRole(null)} title={`Apply for ${selectedRole}`}>
        {applied ? (
          <div className="py-6 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <h4 className="text-xl font-bold text-white">Application Received!</h4>
            <p className="text-xs text-slate-300">Our engineering recruiting team will review your application within 48 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleApplySubmit} className="space-y-4">
            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1">Full Name</label>
              <input type="text" required value={applicantName} onChange={(e) => setApplicantName(e.target.value)} className="w-full bg-space-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white" />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1">Email Address</label>
              <input type="email" required value={applicantEmail} onChange={(e) => setApplicantEmail(e.target.value)} className="w-full bg-space-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white" />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1">LinkedIn / GitHub / Portfolio URL</label>
              <input type="url" required value={resumeUrl} onChange={(e) => setResumeUrl(e.target.value)} placeholder="https://github.com/yourhandle" className="w-full bg-space-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white" />
            </div>
            <Button type="submit" variant="gradient" className="w-full" icon={<Send className="w-4 h-4" />}>
              Submit Application
            </Button>
          </form>
        )}
      </Modal>
    </div>
  );
}
