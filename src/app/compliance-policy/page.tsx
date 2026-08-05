"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { ArrowLeft, ShieldCheck, CheckCircle2, Award, Lock, FileCheck } from "lucide-react";

export default function CompliancePolicyPage() {
  return (
    <div className="pt-28 pb-20 bg-space-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="space-y-4">
          <Badge variant="emerald">Enterprise Governance</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Compliance Policy
          </h1>
          <p className="text-xs font-mono text-slate-400">
            SOC 2 Type II Certified | ISO 27001 Compliant | HIPAA Ready | FedRAMP Framework
          </p>
        </div>

        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-8 text-slate-300 text-sm leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-brand-emerald" /> 1. Compliance Philosophy
            </h2>
            <p>
              At Innovtec, compliance is integrated into our engineering DNA. As an AI-First Digital Engineering Company building mission-critical software for global healthcare, finance, manufacturing, and public sector organizations, we maintain uncompromising adherence to internationally recognized security, privacy, and operational benchmarks.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold font-heading text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-cyan" /> 2. Certified Compliance Frameworks
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              
              <div className="p-5 rounded-2xl bg-space-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-white font-bold font-heading">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> SOC 2 Type II Certified
                </div>
                <p className="text-xs text-slate-400">
                  Independently audited controls across Security, Availability, Processing Integrity, Confidentiality, and Privacy trust services criteria.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-space-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-white font-bold font-heading">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> ISO/IEC 27001:2022
                </div>
                <p className="text-xs text-slate-400">
                  Comprehensive Information Security Management System (ISMS) governing software development, cloud infrastructure, and customer support.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-space-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-white font-bold font-heading">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> HIPAA & HITECH Compliant
                </div>
                <p className="text-xs text-slate-400">
                  Business Associate Agreements (BAAs), encrypted Protected Health Information (PHI) storage, and HIPAA-audited medical RAG knowledge systems.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-space-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-white font-bold font-heading">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> FedRAMP Moderate Readiness
                </div>
                <p className="text-xs text-slate-400">
                  Architected to meet U.S. Federal Risk and Authorization Management Program standards for secure public sector cloud deployments.
                </p>
              </div>

            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">
              3. Continuous Security & Vulnerability Auditing
            </h2>
            <p>We enforce continuous automated validation across all client delivery pipelines:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li><strong>CI/CD SAST & DAST Scanning:</strong> Static and dynamic application security testing integrated into every GitHub Actions deployment run.</li>
              <li><strong>Third-Party Penetration Testing:</strong> Biannual independent penetration tests conducted by CREST-accredited ethical hacking firms.</li>
              <li><strong>Real-Time SIEM Monitoring:</strong> Centralized log analysis, anomaly detection, and automated PagerDuty incident alerts.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">
              4. Request Compliance Artifacts
            </h2>
            <p>
              Qualified enterprise customers and partners can request our SOC 2 Type II audit report, ISO 27001 certificate, and penetration testing summaries by contacting our compliance office:
            </p>
            <div className="p-4 rounded-xl bg-space-950 border border-slate-800 font-mono text-xs text-brand-emerald">
              Compliance Office: compliance@innovtec.ai<br />
              Audit Request Portal: https://innovtec.ai/compliance-policy
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
