"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Send, 
  CheckCircle2, 
  Github, 
  Linkedin, 
  Twitter, 
  Phone,
  Mail,
  MapPin,
  Lock
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Don't render public footer on admin sub-routes
  if (pathname.startsWith("/admin")) {
    return null;
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-space-950 border-t border-white/[0.06] pt-16 pb-12 text-slate-300 relative overflow-hidden">
      
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Brand + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Brand Info & Contact */}
          <div className="lg:col-span-2 space-y-5">
            <Logo height={28} />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              AI-first software engineering company building intelligent, resilient enterprise systems and scalable digital platforms worldwide.
            </p>

            <div className="space-y-3 text-xs text-slate-400 pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div>
                    <span className="text-slate-300 font-medium">Head Office:</span> Sunrise Plaza (4th Floor), Lalmatia Block-A, Mirpur Road, Dhaka, Bangladesh, 1207
                  </div>
                  <div className="text-[11px] text-slate-500">
                    <span className="text-slate-400 font-medium">UK Office:</span> Wellesley House, 102 Cranbrook Road, Ilford IG1 4NH, UK
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                <a href="mailto:info@innovtec.it.com" className="hover:text-white transition-colors">
                  info@innovtec.it.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
                <a href="tel:+8801773893339" className="hover:text-white transition-colors">
                  +880 1773-893339
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2 font-mono">
                Subscribe to Engineering Dispatch
              </div>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-emerald-400 py-2">
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
                    className="flex-1 bg-space-900 border border-white/[0.08] rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors"
                  />
                  <Button type="submit" variant="gradient" size="sm" icon={<Send className="w-3.5 h-3.5" />}>
                    Join
                  </Button>
                </form>
              )}
            </div>

            {/* Live System Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-space-900/80 border border-white/[0.06] text-[11px] text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational (99.99% SLA)</span>
            </div>
          </div>

          {/* Column 1: Capabilities */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold font-mono text-slate-200 uppercase tracking-wider">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/services/artificial-intelligence" className="hover:text-brand-cyan transition-colors">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link href="/services/drone-technology" className="hover:text-brand-cyan transition-colors">
                  Autonomous Drone Tech
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

          {/* Column 2: Products & Trust */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold font-mono text-slate-200 uppercase tracking-wider">
              Products & Trust
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/products/innov-crm" className="hover:text-brand-cyan transition-colors">
                  InnovCRM
                </Link>
              </li>
              <li>
                <Link href="/products/leading-edge-erp" className="hover:text-brand-cyan transition-colors">
                  Leading Edge ERP
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

          {/* Column 3: Company & Legal */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold font-mono text-slate-200 uppercase tracking-wider">
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
                  <span className="px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 text-[10px]">
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
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <span className="text-slate-700">|</span>
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/compliance-policy" className="hover:text-slate-300 transition-colors">Compliance</Link>
            <Link href="/terms-and-conditions" className="hover:text-slate-300 transition-colors">Terms</Link>
            <Link href="/gdpr-compliance" className="hover:text-slate-300 transition-colors">GDPR</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
