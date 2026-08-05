"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { ArrowLeft, ShieldCheck, Lock, FileText } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 bg-space-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="space-y-4">
          <Badge variant="blue">Legal & Security</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-slate-400">
            Last Updated: August 5, 2026 | Effective Date: August 5, 2026
          </p>
        </div>

        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-8 text-slate-300 text-sm leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-cyan" /> 1. Commitment to Data Privacy
            </h2>
            <p>
              Innovtec Technologies Inc. ("Innovtec", "we", "us", or "our") is dedicated to protecting the privacy and security of our clients, website visitors, and platform users. This Privacy Policy details how we collect, process, store, and safeguard personal and technical data when you interact with our public website, enterprise products, and AI solutions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-brand-blue" /> 2. AI Data Isolation & Zero Data Retention
            </h2>
            <p>
              When using Innovtec's AI solutions (including Retrieval-Augmented Generation engines, custom fine-tuned LLMs, and autonomous agents):
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li><strong>Zero Model Training:</strong> Client proprietary data, vector embeddings, and uploaded documents are never used to train or refine public baseline AI models.</li>
              <li><strong>Private VPC Isolation:</strong> All vector database clusters and LLM inference endpoints operate within dedicated private Virtual Private Clouds (VPCs) with encrypted zero-retention API contracts.</li>
              <li><strong>PII Redaction:</strong> Automated anonymization pipelines strip Personally Identifiable Information (PII) before model processing.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">
              3. Information We Collect
            </h2>
            <p>We collect information necessary to deliver high-quality digital engineering services:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li><strong>Consultation & Lead Data:</strong> Name, work email address, company name, phone number, estimated project budget, and technical requirements submitted via our contact forms or AI assistant.</li>
              <li><strong>Technical Telemetry:</strong> Anonymized IP addresses, browser types, device identifiers, and page interaction metrics to optimize performance.</li>
              <li><strong>Customer Portal Data:</strong> Authentication credentials and audit logs for clients accessing the Innovtec Admin Panel and SaaS products.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">
              4. How We Use Your Data
            </h2>
            <p>Your information is processed strictly for legitimate business purposes:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li>To schedule technical discovery sessions and deliver custom software engineering proposals.</li>
              <li>To provide, maintain, and secure our enterprise SaaS applications (InnovCRM, InnovAI Orchestrator, EduPulse SMS, PulseNotify Engine).</li>
              <li>To comply with regulatory standards (SOC 2, ISO 27001, HIPAA, GDPR).</li>
              <li>To send requested technical whitepapers, insights, and platform updates.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">
              5. Data Protection & Encryption
            </h2>
            <p>
              We enforce rigorous technical and organizational safeguards:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li><strong>Encryption at Rest:</strong> AES-256 bit encryption across all databases, vector stores, and backup volumes.</li>
              <li><strong>Encryption in Transit:</strong> TLS 1.3 encryption across all public endpoints and inter-service mTLS microservices communication.</li>
              <li><strong>Access Control:</strong> Strict Role-Based Access Control (RBAC) and mandatory Multi-Factor Authentication (MFA) for all engineering staff.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-white">
              6. Contact Our Privacy Office
            </h2>
            <p>
              If you have questions regarding this Privacy Policy or wish to exercise your data rights, please contact our Data Protection Officer at:
            </p>
            <div className="p-4 rounded-xl bg-space-950 border border-slate-800 font-mono text-xs text-brand-cyan">
              Email: privacy@innovtec.ai<br />
              Address: Innovtec Technologies Inc., Attn: Privacy Office, 500 Howard Street, Suite 400, San Francisco, CA 94105
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
