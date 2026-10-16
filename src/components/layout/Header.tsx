"use client";

import React, { useState, useEffect, useRef } from "react";
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
  Lock, 
  Navigation 
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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnterServices = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setServicesDropdown(true);
  };

  const handleMouseLeaveServices = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdown(false);
    }, 220); // Grace period allows smooth diagonal mouse motion without hiding
  };

  useEffect(() => {
    setServicesDropdown(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const navLinks = [
    { name: "Services", href: "/services", hasMega: true },
    { name: "Products", href: "/products" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Insights", href: "/insights" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  const quickServices = [
    { name: "Drone Technology", href: "/services/drone-technology", icon: Navigation, desc: "Autonomous UAV robotics, LiDAR 3D mapping & edge AI" },
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

  const isHomePage = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isHomePage
          ? isScrolled
            ? "bg-space-950/95 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl shadow-space-950/70 py-3 sm:py-3.5"
            : "bg-space-950/40 backdrop-blur-md border-b border-white/[0.04] py-4 sm:py-5"
          : "bg-space-950/95 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl shadow-space-950/70 py-3 sm:py-3.5"
      }`}
    >
      <div className="w-full max-w-[1800px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between">
          
          {/* Logo & Live Status */}
          <div className="flex items-center gap-4">
            <Logo height={28} />
            <div className="hidden xl:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>SYSTEM ONLINE 99.99%</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              if (link.hasMega) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={handleMouseEnterServices}
                    onMouseLeave={handleMouseLeaveServices}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setServicesDropdown(false)}
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                        pathname.startsWith("/services")
                          ? "text-white bg-white/[0.06]"
                          : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdown ? 'rotate-180' : ''}`} />
                    </Link>

                    {/* Mega Menu Dropdown with seamless hover bridge */}
                    {servicesDropdown && (
                      <div 
                        className="absolute top-full left-0 pt-2.5 w-[640px] max-w-[90vw] z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                        onMouseEnter={handleMouseEnterServices}
                        onMouseLeave={handleMouseLeaveServices}
                      >
                        {/* Invisible bridge over boundary so cursor never leaves hover zone */}
                        <div className="absolute -top-3 left-0 right-0 h-4 bg-transparent pointer-events-auto" />

                        <div className="p-4 bg-[#0C1527] border border-slate-700/80 rounded-2xl shadow-2xl shadow-black/95">
                          {/* Top Header of Dropdown */}
                          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/[0.08] px-1">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                              <span className="text-xs font-mono font-semibold text-slate-200 uppercase tracking-wider">
                                Enterprise Capabilities & Practices
                              </span>
                            </div>
                            <span className="text-[11px] font-mono text-brand-cyan/80">
                              99.99% Cloud SLA
                            </span>
                          </div>

                          {/* 2-Column Grid */}
                          <div className="grid grid-cols-2 gap-2">
                            {quickServices.map((svc) => {
                              const IconComponent = svc.icon;
                              return (
                                <Link
                                  key={svc.name}
                                  href={svc.href}
                                  onClick={() => setServicesDropdown(false)}
                                  className="flex items-start gap-3 p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.07] border border-white/[0.04] hover:border-brand-cyan/30 transition-all duration-200 group"
                                >
                                  <div className="p-2 rounded-lg bg-space-900 text-brand-cyan group-hover:bg-brand-blue/20 group-hover:text-white transition-colors shrink-0 mt-0.5 border border-white/[0.06]">
                                    <IconComponent className="w-4 h-4" />
                                  </div>
                                  <div className="min-w-0">
                                    <div className="text-xs font-bold text-slate-100 group-hover:text-brand-cyan transition-colors">
                                      {svc.name}
                                    </div>
                                    <div className="text-[11px] text-slate-400 group-hover:text-slate-300 mt-0.5 leading-snug line-clamp-2">
                                      {svc.desc}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                          {/* Bottom Action Footer */}
                          <div className="mt-3 pt-2.5 border-t border-white/[0.08] flex items-center justify-between px-1 text-xs">
                            <span className="text-slate-400 text-[11px]">
                              Need tailored enterprise architecture?
                            </span>
                            <div className="flex items-center gap-4">
                              <button
                                onClick={() => {
                                  setServicesDropdown(false);
                                  openConsultationModal();
                                }}
                                className="font-semibold text-xs text-slate-300 hover:text-white transition-colors"
                              >
                                Book Consultation
                              </button>
                              <Link
                                href="/services"
                                onClick={() => setServicesDropdown(false)}
                                className="font-semibold text-xs text-brand-cyan hover:text-white transition-colors inline-flex items-center gap-1"
                              >
                                Explore All Services <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          </div>
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
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-white bg-white/[0.06]"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={openAIModal}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-brand-cyan/40 text-slate-300 hover:text-white text-xs font-medium transition-all duration-300 group"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan group-hover:animate-pulse" />
              <span>Ask AI</span>
              <span className="px-1.5 py-0.5 text-[9px] rounded bg-brand-cyan/15 text-brand-cyan font-mono">
                BETA
              </span>
            </button>

            {/* Admin Quick Link */}
            <Link
              href="/admin/dashboard"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors"
              title="Admin Panel CMS"
            >
              <Lock className="w-4 h-4" />
            </Link>

            <Button
              variant="gradient"
              size="sm"
              onClick={() => openConsultationModal()}
              className="btn-glow shadow-lg shadow-brand-blue/20"
            >
              Get Proposal
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={openAIModal}
              className="p-2 text-brand-cyan bg-white/[0.04] border border-brand-cyan/30 rounded-lg"
              title="Ask AI"
            >
              <Sparkles className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/[0.04]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0C1527] border-b border-slate-700/80 px-4 pt-4 pb-6 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto shadow-2xl shadow-black">
          <div className="space-y-1">
            {navLinks.map((link) => {
              if (link.hasMega) {
                return (
                  <div key={link.name} className="space-y-1">
                    <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-base font-semibold transition-colors ${
                          pathname === link.href ? "text-brand-cyan" : "text-slate-100"
                        }`}
                      >
                        {link.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.05]"
                        aria-label="Toggle Services submenu"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-brand-cyan" : ""}`} />
                      </button>
                    </div>

                    {mobileServicesOpen && (
                      <div className="pl-3 pr-1 py-1.5 space-y-1.5 border-l-2 border-brand-cyan/40 ml-3 my-2">
                        {quickServices.map((svc) => {
                          const IconComponent = svc.icon;
                          return (
                            <Link
                              key={svc.name}
                              href={svc.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-start gap-3 p-2.5 rounded-xl bg-space-900/90 hover:bg-white/[0.08] text-sm text-slate-300 hover:text-white transition-colors border border-white/[0.05]"
                            >
                              <div className="p-1.5 rounded-lg bg-brand-blue/15 text-brand-cyan shrink-0 mt-0.5 border border-white/[0.06]">
                                <IconComponent className="w-3.5 h-3.5" />
                              </div>
                              <div className="min-w-0">
                                <div className="font-semibold text-slate-100 text-xs">
                                  {svc.name}
                                </div>
                                <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                                  {svc.desc}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                        <Link
                          href="/services"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-brand-cyan hover:text-white transition-colors"
                        >
                          Explore All Services <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                    pathname === link.href
                      ? "text-white bg-white/[0.06]"
                      : "text-slate-300 hover:bg-white/[0.04]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/admin/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-medium text-amber-400 hover:bg-white/[0.04] rounded-xl flex items-center gap-2"
            >
              <Lock className="w-4 h-4" /> Admin Panel CMS
            </Link>
          </div>

          <div className="pt-2 border-t border-white/[0.06] flex flex-col gap-2">
            <Button
              variant="gradient"
              className="w-full btn-glow"
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
