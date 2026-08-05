"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { ArrowLeft, FileText, CheckCircle2, Scale } from "lucide-react";

export default function TermsAndConditionsPage() {
  return (
    <div className="pt-28 pb-20 bg-space-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="space-y-4">
          <Badge variant="purple">Legal Terms</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-xs font-mono text-slate-400">
            Last Updated: August 5, 2026 | Master Services Agreement (MSA) Terms
          </p>
        </div>

        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-8 text-slate-300 text-sm leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-brand-purple" /> 1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or utilizing the Innovtec website (innovtec.ai), licensing Innovtec software products (InnovCRM, InnovAI Orchestrator, EduPulse SMS, PulseNotify Engine), or engaging Innovtec Technologies Inc. for custom digital engineering, AI, cloud, DevOps, or consulting services, you agree to be bound by these Terms and Conditions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">
              2. Custom Engineering Services & Statements of Work (SOW)
            </h2>
            <p>
              All custom software development, AI model integration, and cloud engineering projects are executed pursuant to a mutually executed Statement of Work (SOW) or Master Services Agreement (MSA). In the event of a conflict between these general Terms and an executed SOW, the specific terms of the SOW shall govern.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">
              3. Intellectual Property Rights & Code Ownership
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li><strong>Client Work Product:</strong> Upon full payment of project milestone fees, 100% of custom source code, design assets, API specifications, and architecture deliverables developed specifically for the client belong exclusively to the client.</li>
              <li><strong>Innovtec Pre-Existing IP:</strong> Innovtec retains ownership of its proprietary pre-existing software engines, background libraries, and platform products (InnovCRM, InnovAI Orchestrator, EduPulse SMS, PulseNotify Engine), licensing them under specified enterprise SaaS agreements.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">
              4. Service Level Commitments (SLA) & Uptime
            </h2>
            <p>
              For clients hosted under Innovtec Managed Cloud & Support SLAs:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li><strong>99.99% Uptime Guarantee:</strong> We guarantee 99.99% system availability for production cloud workloads, excluding scheduled maintenance windows.</li>
              <li><strong>SLA Incident Response:</strong> Severity 1 critical incidents are responded to within 15 minutes by our on-call SRE team.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">
              5. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, in no event shall Innovtec Technologies Inc. be liable for any indirect, incidental, special, consequential, or punitive damages resulting from the use or inability to use our website or services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">
              6. Governing Law & Dispute Resolution
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law principles. Any legal action shall be resolved via binding arbitration in San Francisco, CA.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
