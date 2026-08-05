"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Brain, 
  Send, 
  CheckCircle2, 
  Github, 
  Linkedin, 
  Twitter, 
  Globe,
  Lock,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Hide public footer on admin sub-routes
  if (pathname.startsWith("/admin")) {
    return null;
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
      }, 2000);
    }
  };

  return (
    <footer className="bg-space-950 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800/80">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-tr from-brand-blue to-brand-cyan p-0.5 shadow-md">
                <div className="w-full h-full bg-space-950 rounded-[7px] flex items-center justify-center">
                  <Brain className="w-4 h-4 text-brand-cyan" />
                </div>
              </div>
              <span className="text-xl font-bold font-heading text-white tracking-tight">
                INNOVTEC
              </span>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Engineering Intelligent Digital Solutions. Positioning enterprise organizations for AI-first digital leadership through modern software, cloud, and cyber engineering.
            </p>

            {/* Newsletter Subscription Form */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block">
                Subscribe to AI & Engineering Insights
              </label>
              {subscribed ? (
                <div className="flex items-center gap-2 p-3 bg-brand-emerald/10 border border-brand-emerald/30 rounded-lg text-emerald-400 text-xs">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Thank you for subscribing! Check your inbox soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                  <input
                    type="email"
                    required
                    placeholder="enter.your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-space-900 border border-slate-700/80 rounded-lg px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors"
                  />
                  <Button type="submit" variant="gradient" size="sm" icon={<Send className="w-3.5 h-3.5" />}>
                    Join
                  </Button>
                </form>
              )}
            </div>

            {/* Live System Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-space-900 border border-slate-800 text-[11px] text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational (99.99% SLA)</span>
            </div>
          </div>

          {/* Column 1: Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold font-heading text-white uppercase tracking-wider">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/services/artificial-intelligence" className="hover:text-brand-cyan transition-colors">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link href="/services/custom-software-development" className="hover:text-brand-cyan transition-colors">
                  Custom Software Dev
                </Link>
              </li>
              <li>
                <Link href="/services/enterprise-applications" className="hover:text-brand-cyan transition-colors">
                  Enterprise ERP & CRM
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-engineering" className="hover:text-brand-cyan transition-colors">
                  Cloud & FinOps
                </Link>
              </li>
              <li>
                <Link href="/services/devops" className="hover:text-brand-cyan transition-colors">
                  DevOps & SRE
                </Link>
              </li>
              <li>
                <Link href="/services/iot-solutions" className="hover:text-brand-cyan transition-colors">
                  IoT Telematics
                </Link>
              </li>
              <li>
                <Link href="/services/cyber-security" className="hover:text-brand-cyan transition-colors">
                  Cyber Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Products */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold font-heading text-white uppercase tracking-wider">
              Products & Trust
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/products/innov-crm" className="hover:text-brand-cyan transition-colors">
                  InnovCRM
                </Link>
              </li>
              <li>
                <Link href="/products/ai-automation-platform" className="hover:text-brand-cyan transition-colors">
                  InnovAI Orchestrator
                </Link>
              </li>
              <li>
                <Link href="/products/student-management-system" className="hover:text-brand-cyan transition-colors">
                  EduPulse SMS
                </Link>
              </li>
              <li>
                <Link href="/products/notification-platform" className="hover:text-brand-cyan transition-colors">
                  PulseNotify Engine
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-brand-cyan transition-colors">
                  Case Studies & Proof
                </Link>
              </li>
              <li>
                <Link href="/compliance-policy" className="hover:text-emerald-400 transition-colors">
                  Compliance Policy
                </Link>
              </li>
              <li>
                <Link href="/gdpr-compliance" className="hover:text-brand-cyan transition-colors">
                  GDPR Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold font-heading text-white uppercase tracking-wider">
              Company & Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/about" className="hover:text-brand-cyan transition-colors">
                  About Innovtec
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-brand-cyan transition-colors flex items-center gap-1.5">
                  Careers
                  <span className="px-1.5 py-0.2 rounded bg-brand-emerald/20 text-emerald-400 text-[10px]">
                    We're hiring
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-brand-cyan transition-colors">
                  Engineering Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-cyan transition-colors">
                  Contact & Offices
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-brand-cyan transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-brand-cyan transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/admin/dashboard" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <Lock className="w-3 h-3" /> Admin CMS Panel
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Metadata & Social */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Innovtec Technologies Inc. All rights reserved. SOC 2 Type II Certified.
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <span className="text-slate-700">|</span>
            <Link href="/privacy-policy" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="/compliance-policy" className="hover:text-slate-300">Compliance Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-slate-300">Terms & Conditions</Link>
            <Link href="/gdpr-compliance" className="hover:text-slate-300">GDPR Compliance</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
