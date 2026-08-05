"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Sparkles, 
  ChevronDown, 
  Menu, 
  X, 
  Brain, 
  ArrowRight,
  ShieldCheck,
  Cpu,
  Cloud,
  Code2,
  Lock
} from "lucide-react";
import { useApp } from "@/context/AppContext";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { openConsultationModal, openAIModal } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services", hasMega: true },
    { name: "Products", href: "/products" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Insights", href: "/insights" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
  ];

  const quickServices = [
    { name: "Artificial Intelligence & RAG", href: "/services/artificial-intelligence", icon: Brain, desc: "Custom LLMs, vector search, AI agents" },
    { name: "Custom Software Engineering", href: "/services/custom-software-development", icon: Code2, desc: "High-scale web, mobile & APIs" },
    { name: "Cloud Engineering & FinOps", href: "/services/cloud-engineering", icon: Cloud, desc: "AWS, Azure, GCP & cost optimization" },
    { name: "IoT & Embedded Telematics", href: "/services/iot-solutions", icon: Cpu, desc: "Smart edge sensors & MQTT gateways" },
    { name: "Cyber Security & Zero-Trust", href: "/services/cyber-security", icon: ShieldCheck, desc: "SOC 2 audits & pen testing" },
  ];

  // Don't render public header on admin sub-routes
  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-space-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-xl shadow-space-950/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Logo Component */}
          <Logo height={28} />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              if (link.hasMega) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                        pathname.startsWith("/services")
                          ? "text-brand-cyan bg-slate-800/50"
                          : "text-slate-300 hover:text-white hover:bg-slate-800/30"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                    </Link>

                    {/* Mega Menu Dropdown */}
                    {servicesDropdown && (
                      <div className="absolute top-full left-0 w-80 p-3 mt-1 bg-space-900/95 border border-slate-800 rounded-xl shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider px-3 py-1 mb-1">
                          Engineering Capabilities
                        </div>
                        <div className="space-y-1">
                          {quickServices.map((svc) => {
                            const IconComponent = svc.icon;
                            return (
                              <Link
                                key={svc.name}
                                href={svc.href}
                                className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-space-800/80 transition-colors group"
                              >
                                <div className="p-2 rounded-md bg-brand-blue/10 text-brand-cyan group-hover:bg-brand-blue/20 transition-colors">
                                  <IconComponent className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-slate-200 group-hover:text-white">
                                    {svc.name}
                                  </div>
                                  <div className="text-xs text-slate-400">
                                    {svc.desc}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                        <div className="mt-2 pt-2 border-t border-slate-800/60 text-center">
                          <Link
                            href="/services"
                            className="text-xs font-semibold text-brand-cyan hover:underline inline-flex items-center gap-1"
                          >
                            Explore All Services <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-brand-cyan bg-slate-800/50"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/30"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Ask AI Pill Trigger */}
            <button
              onClick={openAIModal}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-space-900 border border-brand-cyan/30 hover:border-brand-cyan/70 text-slate-200 hover:text-white text-xs font-medium transition-all shadow-sm hover:shadow-brand-cyan/20 group"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
              <span>Ask Innovtec AI</span>
              <span className="px-1.5 py-0.5 text-[9px] rounded bg-brand-cyan/20 text-brand-cyan font-mono">
                BETA
              </span>
            </button>

            {/* Admin Quick Link */}
            <Link
              href="/admin/dashboard"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="Admin Panel CMS"
            >
              <Lock className="w-4 h-4" />
            </Link>

            {/* Book Consultation Button */}
            <Button
              variant="gradient"
              size="sm"
              onClick={() => openConsultationModal()}
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={openAIModal}
              className="p-2 text-brand-cyan bg-space-900 border border-brand-cyan/40 rounded-lg"
              title="Ask AI"
            >
              <Sparkles className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-space-900"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-space-950/95 border-b border-slate-800 px-4 pt-4 pb-6 space-y-4 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 text-base font-medium rounded-lg ${
                  pathname === link.href
                    ? "text-brand-cyan bg-slate-800/80"
                    : "text-slate-200 hover:bg-slate-800/40"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/admin/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-base font-medium text-amber-400 hover:bg-slate-800/40 rounded-lg flex items-center gap-2"
            >
              <Lock className="w-4 h-4" /> Admin Panel CMS
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <Button
              variant="gradient"
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                openConsultationModal();
              }}
            >
              Book Free Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
