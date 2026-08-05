"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { ConsultationLead } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { 
  Users, 
  Search, 
  Filter, 
  Mail, 
  Phone, 
  Building2, 
  DollarSign, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  FileText 
} from "lucide-react";

export default function AdminLeadsPage() {
  const { leads, updateLeadStatus } = useApp();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedLead, setSelectedLead] = useState<ConsultationLead | null>(null);

  const statuses = ["All", "New", "Contacted", "In Discovery", "Proposal Sent", "Closed"];

  const filtered = leads.filter((l) => {
    const matchesSearch = 
      l.fullName.toLowerCase().includes(search.toLowerCase()) ||
      l.email.toLowerCase().includes(search.toLowerCase()) ||
      l.companyName.toLowerCase().includes(search.toLowerCase());
    
    const matchesStatus = statusFilter === "All" || l.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-white">Consultation Leads</h1>
          <p className="text-xs sm:text-sm text-slate-400">Review and update client discovery requests submitted via website forms and AI Assistant.</p>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="blue">{filtered.length} Leads Filtered</Badge>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between bg-space-900 p-4 rounded-2xl border border-slate-800">
        
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search leads by name, email, or company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-space-950 border border-slate-700/80 rounded-xl px-3.5 py-2 pl-9 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue"
          />
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
        </div>

        {/* Status Filters */}
        <div className="flex flex-wrap items-center gap-1.5">
          {statuses.map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                statusFilter === st
                  ? "bg-brand-blue text-white"
                  : "bg-space-950 border border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              {st}
            </button>
          ))}
        </div>

      </div>

      {/* Leads Table */}
      <div className="glass-card rounded-3xl border border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-space-950 text-slate-400 font-mono text-[10px] uppercase border-b border-slate-800">
              <tr>
                <th className="p-4">Client Name</th>
                <th className="p-4">Company</th>
                <th className="p-4">Service Required</th>
                <th className="p-4">Est. Budget</th>
                <th className="p-4">Received</th>
                <th className="p-4">Source</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filtered.map((lead) => (
                <tr key={lead.id} className="hover:bg-space-850/50 transition-colors">
                  <td className="p-4 font-semibold text-white">
                    <div>{lead.fullName}</div>
                    <div className="text-[11px] font-mono text-slate-400">{lead.email}</div>
                  </td>
                  <td className="p-4 text-slate-200">{lead.companyName}</td>
                  <td className="p-4 font-mono text-brand-cyan">{lead.serviceCategory}</td>
                  <td className="p-4 font-mono">{lead.estimatedBudget}</td>
                  <td className="p-4 text-slate-400">{new Date(lead.createdAt).toLocaleDateString()}</td>
                  <td className="p-4">
                    <span className="px-2 py-0.5 rounded bg-space-950 text-[10px] border border-slate-800">
                      {lead.source}
                    </span>
                  </td>
                  <td className="p-4">
                    <select
                      value={lead.status}
                      onChange={(e) => updateLeadStatus(lead.id, e.target.value as ConsultationLead["status"])}
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold border bg-space-950 cursor-pointer ${
                        lead.status === "New"
                          ? "text-rose-400 border-rose-500/40"
                          : lead.status === "Contacted"
                          ? "text-blue-400 border-blue-500/40"
                          : lead.status === "In Discovery"
                          ? "text-amber-400 border-amber-500/40"
                          : lead.status === "Proposal Sent"
                          ? "text-purple-400 border-purple-500/40"
                          : "text-emerald-400 border-emerald-500/40"
                      }`}
                    >
                      {statuses.filter((s) => s !== "All").map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => setSelectedLead(lead)}
                      className="px-3 py-1 rounded bg-space-850 hover:bg-space-800 text-brand-cyan text-[11px] font-semibold border border-slate-800"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Lead Detail Modal */}
      <Modal
        isOpen={!!selectedLead}
        onClose={() => setSelectedLead(null)}
        title="Consultation Lead Detail"
        subtitle={`Inquiry ID: ${selectedLead?.id}`}
      >
        {selectedLead && (
          <div className="space-y-4 text-xs text-slate-200">
            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-space-950 border border-slate-800">
              <div><strong>Client Name:</strong> {selectedLead.fullName}</div>
              <div><strong>Work Email:</strong> {selectedLead.email}</div>
              <div><strong>Company:</strong> {selectedLead.companyName}</div>
              <div><strong>Phone:</strong> {selectedLead.phone || "N/A"}</div>
              <div><strong>Service Needed:</strong> <span className="text-brand-cyan">{selectedLead.serviceCategory}</span></div>
              <div><strong>Budget:</strong> {selectedLead.estimatedBudget}</div>
            </div>

            <div>
              <strong className="block mb-1 text-slate-400">Project Description / Requirements:</strong>
              <div className="p-4 rounded-xl bg-space-950 border border-slate-800 text-slate-300 leading-relaxed whitespace-pre-wrap">
                {selectedLead.projectDescription || "No detailed description provided."}
              </div>
            </div>

            <div className="pt-2 flex justify-between items-center">
              <span className="text-[10px] text-slate-500 font-mono">Source: {selectedLead.source} • Created: {new Date(selectedLead.createdAt).toLocaleString()}</span>
              <Button variant="gradient" size="sm" onClick={() => setSelectedLead(null)}>
                Close Window
              </Button>
            </div>
          </div>
        )}
      </Modal>

    </div>
  );
}
