"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useApp } from "@/context/AppContext";
import { 
  GraduationCap, 
  Globe, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowLeft, 
  ExternalLink, 
  Building2, 
  Users, 
  DollarSign, 
  Layers, 
  Server, 
  Lock, 
  Sparkles, 
  ArrowRight,
  Database,
  Layout,
  Bell,
  Cpu,
  AlertTriangle
} from "lucide-react";

export default function InnovCRMProductPage() {
  const { openConsultationModal } = useApp();
  const [activeTab, setActiveTab] = useState<"features" | "security" | "partnership" | "terms">("terms");

  const targetCountries = [
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "European Union", flag: "🇪🇺" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "United States", flag: "🇺🇸" },
    { name: "New Zealand", flag: "🇳🇿" },
  ];

  return (
    <div className="pt-28 pb-20 bg-space-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Back Link */}
        <Link href="/products" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to All Products
        </Link>

        {/* Hero Banner */}
        <div className="glass-card p-8 sm:p-14 rounded-3xl border border-slate-800 space-y-6 relative overflow-hidden bg-hero-glow">
          
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="purple">Education Consultancy SaaS</Badge>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-emerald/15 border border-brand-emerald/30 text-emerald-400 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Live Enterprise SaaS Platform
            </span>
          </div>

          <h1 className="text-3xl sm:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
            InnovCRM <br />
            <span className="text-gradient-purple">Student & Agent Management Platform</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-200 max-w-4xl leading-relaxed">
            Specifically designed for education consultancy organizations helping students apply for higher education in the <strong>UK, EU, Australia, Canada, USA, and New Zealand</strong>.
          </p>

          {/* Joint Strategic Partnership Box */}
          <div className="p-5 rounded-2xl bg-space-900/90 border border-brand-purple/30 max-w-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Joint Engineering Partnership</span>
              <div className="text-sm font-bold text-white flex items-center gap-2 font-heading">
                <span>Innovtec</span>
                <span className="text-xs text-brand-purple font-mono font-normal">(Technical Partner)</span>
                <span className="text-slate-600">+</span>
                <span>Neuron Educare</span>
                <span className="text-xs text-brand-cyan font-mono font-normal">(Business Analyst)</span>
              </div>
            </div>
            <span className="text-xs text-slate-300 italic">Bridging powerful tech & real industry expertise</span>
          </div>

          {/* Target Country Badges */}
          <div className="pt-2">
            <span className="text-xs font-mono uppercase text-slate-400 block mb-3">Supported Destination Countries:</span>
            <div className="flex flex-wrap gap-2">
              {targetCountries.map((c) => (
                <span
                  key={c.name}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-space-900 border border-slate-700/80 text-xs font-semibold text-slate-200"
                >
                  <span>{c.flag}</span>
                  <span>{c.name}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <Button
              variant="gradient"
              size="lg"
              onClick={() => openConsultationModal("InnovCRM Live Demo Request")}
              icon={<ExternalLink className="w-4 h-4" />}
            >
              Request Agency Demo Sandbox
            </Button>
          </div>
        </div>

        {/* 3 Core Operational Transformation Pillars */}
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <Badge variant="blue">Operational Excellence</Badge>
            <h2 className="text-3xl font-bold font-heading text-white">
              Transform How You Manage Students & Sub-Agents
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Managing student profiles, country compliance, reference counselors, and sub-agent commission payouts in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-4 hover:border-brand-purple/50">
              <div className="p-3.5 rounded-2xl bg-brand-purple/15 text-brand-purple w-fit">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-white">End-to-End Application Management</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Effortlessly handle student profile creation, compliance verification, university application submission, interview scheduling, and document management all in one centralized pipeline.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-4 hover:border-brand-blue/50">
              <div className="p-3.5 rounded-2xl bg-brand-blue/15 text-brand-blue w-fit">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-white">Counselor & Agent Coordination</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Easily assign reference counselors to students, track internal counselor productivity, and coordinate tasks across multi-location agency branches.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-4 hover:border-brand-emerald/50">
              <div className="p-3.5 rounded-2xl bg-brand-emerald/15 text-emerald-400 w-fit">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-white">Automated Commission Processing</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Working with sub-agents who don't have direct university agreements? InnovCRM automates complex commission payable & receivable calculations ensuring sub-agents are compensated accurately.
              </p>
            </div>

          </div>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-8">
          
          {/* Tab Controls */}
          <div className="flex flex-wrap justify-center gap-3 border-b border-slate-800 pb-6">
            <button
              onClick={() => setActiveTab("terms")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "terms"
                  ? "bg-brand-purple text-white shadow-lg shadow-brand-purple/20"
                  : "bg-space-950 border border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              SaaS Service & Cloud Deployment Policy
            </button>

            <button
              onClick={() => setActiveTab("features")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "features"
                  ? "bg-brand-purple text-white shadow-lg shadow-brand-purple/20"
                  : "bg-space-950 border border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              Powerful Features
            </button>

            <button
              onClick={() => setActiveTab("security")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "security"
                  ? "bg-brand-purple text-white shadow-lg shadow-brand-purple/20"
                  : "bg-space-950 border border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              Enterprise Architecture & Security
            </button>

            <button
              onClick={() => setActiveTab("partnership")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "partnership"
                  ? "bg-brand-purple text-white shadow-lg shadow-brand-purple/20"
                  : "bg-space-950 border border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              Joint Development & Privacy Guarantee
            </button>
          </div>

          {/* Tab: SaaS Terms & Deployment Policy */}
          {activeTab === "terms" && (
            <div className="space-y-6 animate-in fade-in duration-300 text-xs text-slate-300">
              
              {/* Highlighted Strict Server Policy */}
              <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/40 space-y-3">
                <div className="text-base font-bold text-amber-400 font-heading flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-400" /> Strict Cloud Deployment Policy: Zero Client Server Deployment
                </div>
                <p className="text-slate-200 text-sm leading-relaxed">
                  <strong>InnovCRM is delivered strictly as a fully managed SaaS (Software as a Service) solution hosted on Innovtec's AWS infrastructure.</strong> Innovtec <u>will never deploy InnovCRM on client-provided servers or on-premise hardware</u>. This guarantees 100% security patching, zero version fragmentation, uptime reliability, and continuous data backup.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                
                <div className="p-5 rounded-2xl bg-space-900 border border-slate-800 space-y-2">
                  <div className="text-sm font-bold text-white font-heading flex items-center gap-2">
                    <Server className="w-4 h-4 text-brand-purple" /> Service-Based Model
                  </div>
                  <p className="text-slate-400">
                    Clients enjoy full access to the CRM's extensive services without the operational burden of maintaining software licenses or product ownership.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-space-900 border border-slate-800 space-y-2">
                  <div className="text-sm font-bold text-white font-heading flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-emerald" /> Zero Server Maintenance
                  </div>
                  <p className="text-slate-400">
                    The application is 100% cloud-hosted by Innovtec. Clients require zero hosting setup or server IT management staff.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-space-900 border border-slate-800 space-y-2">
                  <div className="text-sm font-bold text-white font-heading flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan" /> Flexible Custom Agreements
                  </div>
                  <p className="text-slate-400">
                    Pay-as-you-grow subscription tiers tailored to your agency's student volume, active branch locations, and sub-agent network size.
                  </p>
                </div>

              </div>

            </div>
          )}

          {/* Tab: Powerful Features */}
          {activeTab === "features" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
              <div className="p-6 rounded-2xl bg-space-900 border border-slate-800 space-y-2">
                <div className="text-base font-bold text-white font-heading flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-brand-purple" /> Multi-Branch & Hierarchy Management
                </div>
                <p className="text-xs text-slate-300">
                  Manage multiple office branches seamlessly with granular data privilege hierarchy levels and role-based action permissions.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-space-900 border border-slate-800 space-y-2">
                <div className="text-base font-bold text-white font-heading flex items-center gap-2">
                  <Layout className="w-4 h-4 text-brand-cyan" /> Smart Dashboards & Comprehensive Reporting
                </div>
                <p className="text-xs text-slate-300">
                  Make data-driven business decisions with real-time operational smart dashboards and exportable analytical reports.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-space-900 border border-slate-800 space-y-2">
                <div className="text-base font-bold text-white font-heading flex items-center gap-2">
                  <Bell className="w-4 h-4 text-brand-emerald" /> Seamless Omnichannel Communication
                </div>
                <p className="text-xs text-slate-300">
                  Stay connected with integrated email dispatch, real-time push alerts, and automated lead follow-up workflows.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-space-900 border border-slate-800 space-y-2">
                <div className="text-base font-bold text-white font-heading flex items-center gap-2">
                  <Globe className="w-4 h-4 text-brand-blue" /> Dedicated Self-Service Portals
                </div>
                <p className="text-xs text-slate-300">
                  Provide intuitive, customized self-service access through a dedicated **Student Portal** and a separate **Agent Portal**.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-space-900 border border-slate-800 space-y-2 md:col-span-2">
                <div className="text-base font-bold text-white font-heading flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" /> Advanced Tracking & Country Compliance
                </div>
                <p className="text-xs text-slate-300">
                  Ensure no student application slips through the cracks with precise status tracking and strict country-specific compliance rule validation.
                </p>
              </div>
            </div>
          )}

          {/* Tab: Security & Tech Stack */}
          {activeTab === "security" && (
            <div className="space-y-6 animate-in fade-in duration-300 text-xs text-slate-300">
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-space-900 border border-slate-800 space-y-2">
                  <div className="text-sm font-bold text-white font-heading flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-brand-purple" /> ASP.NET Core API
                  </div>
                  <p className="text-[11px] text-slate-400">High-performance enterprise backend RESTful API architecture.</p>
                </div>

                <div className="p-5 rounded-2xl bg-space-900 border border-slate-800 space-y-2">
                  <div className="text-sm font-bold text-white font-heading flex items-center gap-2">
                    <Layers className="w-4 h-4 text-brand-cyan" /> Angular Client UI
                  </div>
                  <p className="text-[11px] text-slate-400">Dynamic, responsive client-side web application interface.</p>
                </div>

                <div className="p-5 rounded-2xl bg-space-900 border border-slate-800 space-y-2">
                  <div className="text-sm font-bold text-white font-heading flex items-center gap-2">
                    <Database className="w-4 h-4 text-brand-blue" /> MS SQL Database
                  </div>
                  <p className="text-[11px] text-slate-400">Mission-critical relational data engine for high integrity.</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-space-900 border border-slate-800 space-y-4">
                <h4 className="text-base font-bold text-white font-heading flex items-center gap-2">
                  <Server className="w-4 h-4 text-brand-emerald" /> Managed Cloud Infrastructure & Subdomain Isolation
                </h4>
                <p className="leading-relaxed">
                  InnovCRM is securely hosted and deployed by Innovtec on <strong>Amazon Web Services (AWS)</strong> infrastructure. Cloud file storage is handled via <strong>S3-Compatible Blob Storage</strong> (utilizing trusted providers like DigitalOcean Spaces). Every client agency receives an isolated access environment hosted on a dedicated subdomain.
                </p>
                <div className="p-3 bg-space-950 rounded-xl border border-slate-800 text-[11px] text-amber-400">
                  Note: Innovtec manages all infrastructure deployment. Code is never deployed on client-provided servers.
                </div>
              </div>

            </div>
          )}

          {/* Tab: Joint Partnership & Privacy Guarantee */}
          {activeTab === "partnership" && (
            <div className="space-y-6 animate-in fade-in duration-300 text-xs text-slate-300">
              
              <div className="p-6 rounded-2xl bg-space-900 border border-slate-800 space-y-3">
                <h4 className="text-base font-bold text-white font-heading flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-purple" /> Jointly Developed by Innovtec & Neuron Educare
                </h4>
                <p className="leading-relaxed">
                  InnovCRM is jointly developed by <strong>Innovtec (Technical Partner)</strong> and <strong>Neuron Educare (Business Analyst)</strong>. This unique collaboration combines Innovtec's cloud software engineering expertise with Neuron Educare's deep domain knowledge in international education consultancy.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-brand-purple/10 border border-brand-purple/40 space-y-3">
                <h4 className="text-base font-bold text-white font-heading flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-400" /> Strict Data Privacy & Confidentiality Guarantee
                </h4>
                <p className="text-slate-200 leading-relaxed">
                  Your business data is securely encrypted. Innovtec will <strong>never access, use, or share your agency data without your explicit permission</strong>. Furthermore, Innovtec operates under strict confidentiality and guarantees that <strong>your agency's data will never be shared with any third party, including Neuron Educare</strong>.
                </p>
              </div>

            </div>
          )}

        </div>

        {/* Final CTA */}
        <div className="glass-card p-10 rounded-3xl border border-slate-800 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white">
            Schedule an Agency Workflow Audit & Demo
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Discover how InnovCRM can streamline student recruitment, automate commission processing, and safeguard compliance for your agency.
          </p>
          <Button
            variant="gradient"
            size="lg"
            onClick={() => openConsultationModal("InnovCRM Live Demo Request")}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Request InnovCRM Demo
          </Button>
        </div>

      </div>
    </div>
  );
}
