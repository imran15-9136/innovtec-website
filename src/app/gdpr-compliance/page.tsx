"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { ArrowLeft, Globe, ShieldCheck, UserCheck, Lock } from "lucide-react";

export default function GDPRCompliancePage() {
  return (
    <div className="pt-28 pb-20 bg-space-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="space-y-4">
          <Badge variant="cyan">EU Data Protection</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            GDPR Compliance Statement
          </h1>
          <p className="text-xs font-mono text-slate-400">
            EU General Data Protection Regulation (EU) 2016/679 Enforcement & Data Subject Rights
          </p>
        </div>

        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-8 text-slate-300 text-sm leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-brand-cyan" /> 1. Commitment to European Data Subjects
            </h2>
            <p>
              Innovtec Technologies Inc. fully complies with the European Union General Data Protection Regulation (GDPR). We ensure transparent, lawful, and secure processing of personal data for all individuals residing within the European Economic Area (EEA), United Kingdom, and Switzerland.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-brand-emerald" /> 2. Key Data Subject Rights Under GDPR
            </h2>
            <p>Under the GDPR, European data subjects possess fundamental privacy rights:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-xl bg-space-950 border border-slate-800 space-y-1">
                <div className="text-white font-bold text-xs">Right to Access (Art. 15)</div>
                <div className="text-xs text-slate-400">Request copies of personal data processed by Innovtec.</div>
              </div>

              <div className="p-4 rounded-xl bg-space-950 border border-slate-800 space-y-1">
                <div className="text-white font-bold text-xs">Right to Erasure / "To Be Forgotten" (Art. 17)</div>
                <div className="text-xs text-slate-400">Request complete deletion of your personal records.</div>
              </div>

              <div className="p-4 rounded-xl bg-space-950 border border-slate-800 space-y-1">
                <div className="text-white font-bold text-xs">Right to Data Portability (Art. 20)</div>
                <div className="text-xs text-slate-400">Receive personal data in a structured, machine-readable format.</div>
              </div>

              <div className="p-4 rounded-xl bg-space-950 border border-slate-800 space-y-1">
                <div className="text-white font-bold text-xs">Right to Object & Restrict (Art. 18 & 21)</div>
                <div className="text-xs text-slate-400">Object to automated processing, profiling, or direct marketing.</div>
              </div>

            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">
              3. Data Processor vs Data Controller Roles
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li><strong>Innovtec as Data Controller:</strong> For marketing leads, job applications, and website telemetry collected directly on innovtec.ai.</li>
              <li><strong>Innovtec as Data Processor:</strong> For enterprise client software and AI platforms, where client organization acts as Data Controller. In these scenarios, we process data strictly in accordance with executed Data Processing Addendums (DPAs) and Standard Contractual Clauses (SCCs).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">
              4. Cross-Border Data Transfers
            </h2>
            <p>
              When transferring personal data outside the European Economic Area (EEA), Innovtec implements robust safeguards, including Standard Contractual Clauses (SCCs) approved by the European Commission and EU-U.S. Data Privacy Framework certification.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">
              5. Submit a GDPR Request / Contact DPO
            </h2>
            <p>
              To submit a Subject Access Request (SAR) or contact our Data Protection Officer, email us at:
            </p>
            <div className="p-4 rounded-xl bg-space-950 border border-slate-800 font-mono text-xs text-brand-cyan">
              Data Protection Officer (DPO): dpo@innovtec.ai<br />
              EU Privacy Desk: gdpr@innovtec.ai
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
