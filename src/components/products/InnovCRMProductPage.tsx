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
  AlertTriangle,
  Play,
  Video,
  X,
  Maximize2,
  Check,
  Zap,
  TrendingUp,
  BarChart3,
  CheckSquare,
  ChevronRight
} from "lucide-react";

export function InnovCRMProductPage() {
  const { openConsultationModal } = useApp();
  const [activeTab, setActiveTab] = useState<"terms" | "features" | "security" | "partnership">("terms");
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFeatureIdx, setActiveFeatureIdx] = useState<number>(0);

  const targetCountries = [
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "European Union", flag: "🇪🇺" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "United States", flag: "🇺🇸" },
    { name: "New Zealand", flag: "🇳🇿" },
  ];

  const packageCards = [
    {
      id: "pkg-crm-1",
      name: "Standard Agency",
      price: "$100",
      billingPeriod: "per month",
      description: "Ideal for growing education consultancies operating up to 2 branch offices.",
      popular: false,
      featuresIncluded: [
        "Up to 10 Staff & Counselor Users",
        "Up to 10 Sub-Agency Accounts",
        "50 GB Secure Cloud Storage",
        "Up to 2 Branch Offices",
        "Full Student Application Pipeline",
        "Automated Sub-Agent Commission Engine",
        "Dedicated Student Self-Service Portal",
        "Email & WhatsApp Notifications",
        "AWS Cloud Hosted & SSL Secured"
      ],
      ctaText: "Get Started with Standard"
    },
    {
      id: "pkg-crm-2",
      name: "Growth Agency Pro",
      price: "$300",
      billingPeriod: "per month",
      description: "Built for established agencies expanding across multiple cities and international sub-agent networks.",
      popular: true,
      badge: "Most Popular",
      featuresIncluded: [
        "Up to 30 Staff & Counselor Users",
        "Up to 50 Sub-Agency Accounts",
        "250 GB Secure Cloud Storage",
        "Up to 5 Branch Offices",
        "Full Student Application Pipeline",
        "Automated Sub-Agent Commission Engine",
        "Dedicated Student & Agent Self-Service Portals",
        "Advanced Financial & Commission Analytics",
        "Custom Subdomain (youragency.innovcrm.ai)",
        "Priority 24/7 Technical Support",
        "AWS Cloud Hosted & SSL Secured"
      ],
      ctaText: "Start Growth Pro Sandbox"
    },
    {
      id: "pkg-crm-3",
      name: "Enterprise Network",
      price: "Custom Quote",
      billingPeriod: "tailored volume SLA",
      description: "For large multinational education networks requiring custom API integrations and dedicated cloud server clusters.",
      popular: false,
      featuresIncluded: [
        "Unlimited Staff & Counselor Users",
        "Dedicated Private AWS Cloud Cluster",
        "Custom University API Integrations",
        "Whitelabel Branding & Custom Domain",
        "SLA Uptime Guarantee (99.99%)",
        "Staff Training & Onsite Onboarding"
      ],
      ctaText: "Contact Enterprise Sales"
    }
  ];

  const detailedFeatures = [
    {
      id: "feat-crm-1",
      step: "01",
      badge: "Hierarchy Architecture",
      title: "Multi-Branch & Role-Based Hierarchy Management",
      description: "Organize your agency across multiple city branches and international partner offices. Assign role permissions to branch managers, senior counselors, and junior agents with absolute privacy isolation.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
      accentColor: "from-purple-500 to-indigo-500",
      highlights: [
        { title: "Granular Access Control (RBAC)", text: "Set branch-specific data privacy and counselor lead visibility permissions." },
        { title: "Branch-Level Financial Analytics", text: "Track monthly lead conversion rates and revenue contribution per branch." },
        { title: "Centralized Vault", text: "Secure cloud repository for passports, academic transcripts, and CAS letters." }
      ]
    },
    {
      id: "feat-crm-2",
      step: "02",
      badge: "Automated Financial Engine",
      title: "Automated Sub-Agent Commission & Revenue Split",
      description: "Automatically calculate university commission splits between your main agency and partner sub-agents based on customized contracts, currency conversions, and student enrollment stages.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
      accentColor: "from-cyan-500 to-blue-500",
      highlights: [
        { title: "Automated Payable & Receivable Statements", text: "Generate clear payout balance statements instantly for sub-agent networks." },
        { title: "Multi-Currency Settlement", text: "Seamless calculations across GBP, USD, EUR, AUD, CAD, and NZD." },
        { title: "Real-Time Payout Status", text: "Sub-agents track their commission status directly from their self-service portal." }
      ]
    },
    {
      id: "feat-crm-3",
      step: "03",
      badge: "Compliance & Student Portal",
      title: "Country Compliance Rules & Student Self-Service Portal",
      description: "Built-in visa checklist guidelines and admission requirements for top study destinations (UK, EU, AU, CA, US, NZ) with an interactive self-service portal for real-time student tracking.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200",
      accentColor: "from-emerald-500 to-teal-500",
      highlights: [
        { title: "Automated Document Audits", text: "Instant warnings for missing transcripts, expired passports, or pending CAS." },
        { title: "University Application Pipeline", text: "Track offer letter issues, deposit confirmations, and CAS clearance." },
        { title: "Student Mobile Portal", text: "Students view application progress and upload documents on mobile devices." }
      ]
    },
    {
      id: "feat-crm-4",
      step: "04",
      badge: "Social Media & Chat Suite",
      title: "Omnichannel Social Media & Instant Messaging Integration",
      description: "Connect Facebook Lead Ads, Instagram Direct, WhatsApp Business API, Telegram Bots, and LinkedIn Messaging into one unified counselor inbox. Automatically capture, sync, and respond to social leads in real time.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200",
      accentColor: "from-blue-500 to-indigo-500",
      highlights: [
        { title: "Facebook & Instagram Lead Sync", text: "Instant real-time lead capture from Facebook and Instagram lead ad campaigns into counselor pipelines." },
        { title: "WhatsApp Business API & Telegram", text: "Automate student application status alerts, visa checklist reminders, and CAS updates via WhatsApp & Telegram." },
        { title: "LinkedIn & Unified Team Inbox", text: "Manage sub-agent partnerships and student inquiries across all social channels in one team dashboard." }
      ]
    }
  ];

  const heroImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600";

  return (
    <div className="pt-24 pb-24 bg-space-950 min-h-screen text-slate-100 relative overflow-hidden">
      
      {/* Background Radial Glow Effects */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-96 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
        
        {/* Back Link */}
        <Link href="/products" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to All Products
        </Link>

        {/* 1. UNBOXED HERO SECTION (NO TOP CARD CONTAINER) */}
        <div className="space-y-10 text-center max-w-5xl mx-auto pt-4">
          
          {/* Announcement Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0D1322]/90 border border-purple-500/40 shadow-xl shadow-purple-500/10 backdrop-blur-xl">
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-wider text-slate-200 uppercase font-mono">
              Education Consultancy Enterprise SaaS Platform
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.1]">
              InnovCRM <br />
              <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                Student & Sub-Agent Management Platform
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
              Specifically engineered for education consultancies managing multi-country admissions across the <strong>UK, EU, Australia, Canada, USA, and New Zealand</strong>. Jointly developed by Innovtec (Technical Partner) and Neuron Educare (Business Analyst).
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              variant="gradient"
              size="lg"
              onClick={() => openConsultationModal("InnovCRM Live Demo Request")}
              icon={<ExternalLink className="w-4 h-4" />}
              className="px-8 py-4 font-semibold shadow-xl shadow-purple-600/25 text-sm"
            >
              Request Live Demo Sandbox
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => setIsPlayingVideo(true)}
              icon={<Play className="w-4 h-4 text-cyan-400 fill-cyan-400" />}
              className="px-7 py-4 border-slate-700 hover:border-cyan-400/60 text-sm bg-space-900/60"
            >
              See How It Works (4:30 Demo)
            </Button>
          </div>

          {/* 2. Sleek Interactive Product UI Mockup (Device Frame Showcase) */}
          <div className="relative pt-6 max-w-5xl mx-auto group">
            
            {/* Device Container Box */}
            <div className="rounded-2xl border border-slate-700/80 bg-space-900 shadow-2xl shadow-purple-950/40 overflow-hidden relative">
              
              {/* macOS-style Window Header Bar */}
              <div className="px-4 py-3 bg-space-950 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="px-4 py-1 rounded-md bg-space-900 border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center gap-2">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  https://youragency.innovcrm.ai/dashboard
                </div>
                <div className="text-[10px] text-slate-500 font-mono hidden sm:block">InnovCRM v2.4</div>
              </div>

              {/* Central Screenshot Image with Play Overlay */}
              <div className="relative aspect-[16/9] w-full overflow-hidden cursor-pointer" onClick={() => setIsPlayingVideo(true)}>
                <img
                  src={heroImage}
                  alt="InnovCRM Main Admin Dashboard Mockup"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 filter brightness-95 contrast-105"
                />
                
                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-transparent to-space-950/30" />

                {/* Central Glowing Play Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-2xl shadow-purple-500/50 group-hover:scale-110 transition-all duration-300 border border-purple-400/50">
                      <Play className="w-9 h-9 fill-white ml-1" />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-purple-500/30 animate-ping pointer-events-none" />
                  </div>
                  <span className="text-xs font-bold font-mono tracking-wider text-white bg-space-950/90 px-4 py-1.5 rounded-full border border-purple-500/40 shadow-lg">
                    WATCH LIVE DEMO VIDEO
                  </span>
                </div>

                {/* FLOATING ANNOTATION BADGES */}
                <div className="absolute top-6 left-6 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-space-900/90 border border-purple-500/40 text-xs font-medium text-white shadow-2xl backdrop-blur-md animate-float">
                  <Zap className="w-4 h-4 text-purple-400" />
                  <div>
                    <div className="font-bold text-white text-[11px]">Multi-Branch RBAC</div>
                    <div className="text-[10px] text-slate-400">Isolated Branch Workspaces</div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-space-900/90 border border-cyan-500/40 text-xs font-medium text-white shadow-2xl backdrop-blur-md">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  <div>
                    <div className="font-bold text-white text-[11px]">Commission Engine</div>
                    <div className="text-[10px] text-slate-400">Automated Sub-Agent Payouts</div>
                  </div>
                </div>

                <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-space-900/90 border border-emerald-500/40 text-xs font-medium text-white shadow-2xl backdrop-blur-md">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <div>
                    <div className="font-bold text-white text-[11px]">Visa Compliance</div>
                    <div className="text-[10px] text-slate-400">UK, EU, AU, CA, US Checklists</div>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-space-900/90 border border-blue-500/40 text-xs font-medium text-white shadow-2xl backdrop-blur-md">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <div>
                    <div className="font-bold text-white text-[11px]">AWS SaaS Managed</div>
                    <div className="text-[10px] text-slate-400">Zero On-Premise IT Maintenance</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* 3. TRUST & PROOF BRAND STRIP */}
          <div className="pt-6 border-t border-slate-800/80">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-4">
              Joint Engineering & Domain Excellence
            </span>
            
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-80">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-bold text-slate-200 font-heading">Innovtec</span>
                <span className="text-[11px] text-slate-400">(Technical Partner)</span>
              </div>
              <span className="text-slate-600 font-bold">+</span>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-bold text-slate-200 font-heading">Neuron Educare</span>
                <span className="text-[11px] text-slate-400">(Business Analyst)</span>
              </div>
              <span className="text-slate-600 font-bold hidden sm:inline">•</span>
              <div className="text-xs text-emerald-400 font-mono flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> 100% AWS SaaS Managed
              </div>
            </div>
          </div>

        </div>

        {/* 4. VIDEO DEMO MODAL POPUP */}
        {isPlayingVideo && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-space-900 border border-slate-700 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative">
              <div className="p-4 bg-space-950 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Video className="w-5 h-5 text-purple-400" />
                  <span className="text-sm font-bold text-white">InnovCRM Live Video Walkthrough</span>
                </div>
                <button
                  onClick={() => setIsPlayingVideo(false)}
                  className="p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="aspect-video w-full bg-slate-950 flex flex-col items-center justify-center text-center p-8 relative">
                <img
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200"
                  alt="InnovCRM Platform Demo Video"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 space-y-4 max-w-lg">
                  <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto shadow-xl">
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                    InnovCRM Interactive Agency Demo
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Watch how InnovCRM automates student lead pipeline tracking, Counselor assignments, sub-agent commission splits, and university offer tracking.
                  </p>
                  <div className="pt-2 flex justify-center gap-3">
                    <Button
                      variant="gradient"
                      size="sm"
                      onClick={() => {
                        setIsPlayingVideo(false);
                        openConsultationModal("InnovCRM Demo Sandbox");
                      }}
                    >
                      Request Agency Demo Sandbox
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsPlayingVideo(false)}
                    >
                      Close Preview
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 5. LIGHTBOX MODAL FOR SCREENSHOTS */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-5xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 rounded-lg bg-space-900 border border-slate-700 text-white hover:bg-slate-800"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedImage}
                alt="Product Feature Screenshot Full View"
                className="w-full h-auto rounded-xl border border-slate-700 shadow-2xl"
              />
            </div>
          </div>
        )}

        {/* 6. UNBOXED ELEGANT FEATURE SHOWCASE (NO CARDS - UNBOXED MODERN LAYOUT) */}
        <div className="space-y-16 pt-10 border-t border-slate-800/80">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="purple">Core Capabilities</Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Architected for Enterprise Education Consultancies
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Eliminate administrative friction with tailored software modules designed specifically for high-volume study-abroad operations.
            </p>
            
            {/* Interactive Feature Switcher Bar */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {detailedFeatures.map((feat, idx) => (
                <button
                  key={feat.id}
                  onClick={() => {
                    setActiveFeatureIdx(idx);
                    const el = document.getElementById(`feature-module-${feat.id}`);
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold font-mono transition-all flex items-center gap-2 ${
                    activeFeatureIdx === idx
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30 ring-2 ring-purple-400/50"
                      : "bg-space-900 border border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  <span className="text-[10px] opacity-70">{feat.step}</span>
                  <span>{feat.badge}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Seamless Alternating Feature Rows (NO CARD BOX ENCLOSURE) */}
          <div className="space-y-20 sm:space-y-28">
            {detailedFeatures.map((feat, idx) => (
              <div
                key={feat.id}
                id={`feature-module-${feat.id}`}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center py-6 relative ${
                  idx !== detailedFeatures.length - 1 ? "border-b border-slate-800/50 pb-20 sm:pb-28" : ""
                }`}
              >
                
                {/* Text Side (6 Cols) */}
                <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  
                  {/* Step Pill */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-bold">
                    <span>MODULE {feat.step}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-300 font-sans font-medium">{feat.badge}</span>
                  </div>
                  
                  {/* Feature Title */}
                  <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight leading-tight">
                    {feat.title}
                  </h3>
                  
                  {/* Feature Description */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {feat.description}
                  </p>
                  
                  {/* Highlight Items Grid */}
                  <div className="space-y-4 pt-2">
                    {feat.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-3.5 group">
                        <div className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-purple-600 group-hover:text-white transition-all">
                          <Check className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-white font-heading">{h.title}</div>
                          <div className="text-xs text-slate-400 leading-relaxed mt-0.5">{h.text}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => openConsultationModal(`Feature Walkthrough: ${feat.title}`)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Explore {feat.badge} sandbox details <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

                {/* Media Showcase Side (6 Cols) - Sleek Frameless Glow Display */}
                <div 
                  className={`lg:col-span-6 relative group ${idx % 2 === 1 ? "lg:order-1" : ""}`}
                  onClick={() => setSelectedImage(feat.image)}
                >
                  {/* Multi-Layered Soft Ambient Glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-cyan-500/20 to-transparent rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  
                  {/* Main Visual Display Frame */}
                  <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-[0_20px_50px_rgba(139,92,246,0.15)] bg-space-900 cursor-pointer">
                    
                    {/* Header Bar */}
                    <div className="px-4 py-2.5 bg-space-950/90 border-b border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">{feat.badge} Overview</span>
                    </div>

                    <img
                      src={feat.image}
                      alt={feat.title}
                      className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-space-950/80 via-transparent to-transparent" />
                    
                    {/* Floating Pill Tag */}
                    <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-full bg-space-950/90 border border-slate-700 text-xs font-mono text-slate-200 backdrop-blur-md flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                      <span>{feat.badge} UI View</span>
                    </div>

                    {/* Lightbox Trigger */}
                    <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-space-950/90 border border-slate-700 text-xs text-slate-300 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5 text-cyan-400" /> Enlarge
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

        {/* 7. PACKAGE TIERS & LICENSING */}
        <div className="space-y-10 pt-8 border-t border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="purple">Transparent Pricing</Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              Choose the Right Package for Your Agency
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              SaaS pricing tailored to your branch network size, counselor staff volume, and sub-agent scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packageCards.map((pkg) => (
              <div
                key={pkg.id}
                className={`glass-card p-8 rounded-3xl border flex flex-col justify-between relative ${
                  pkg.popular 
                    ? "border-purple-500/80 bg-space-900/90 shadow-2xl shadow-purple-950/40" 
                    : "border-slate-800 bg-space-900"
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-lg font-mono">
                    {pkg.badge}
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-white">{pkg.name}</h3>
                    <p className="text-xs text-slate-400 mt-1">{pkg.description}</p>
                  </div>

                  <div className="pt-2">
                    <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading">{pkg.price}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{pkg.billingPeriod}</div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-800">
                    {pkg.featuresIncluded.map((f) => (
                      <div key={f} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <Button
                    variant={pkg.popular ? "gradient" : "outline"}
                    className="w-full py-3 text-xs sm:text-sm"
                    onClick={() => openConsultationModal(`Package Interest: InnovCRM (${pkg.name})`)}
                  >
                    {pkg.ctaText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 8. TABBED ARCHITECTURE & POLICY GUARANTEE */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 bg-space-900 space-y-8">
          
          {/* Tab Controls */}
          <div className="flex flex-wrap justify-center gap-3 border-b border-slate-800 pb-6">
            <button
              onClick={() => setActiveTab("terms")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "terms"
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                  : "bg-space-950 border border-slate-800 text-slate-300 hover:text-white"
              }`}
            >
              Cloud Deployment Policy
            </button>

            <button
              onClick={() => setActiveTab("features")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "features"
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                  : "bg-space-950 border border-slate-800 text-slate-300 hover:text-white"
              }`}
            >
              Core Architecture
            </button>

            <button
              onClick={() => setActiveTab("security")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "security"
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                  : "bg-space-950 border border-slate-800 text-slate-300 hover:text-white"
              }`}
            >
              Tech Stack & AWS
            </button>

            <button
              onClick={() => setActiveTab("partnership")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "partnership"
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                  : "bg-space-950 border border-slate-800 text-slate-300 hover:text-white"
              }`}
            >
              Data Privacy Guarantee
            </button>
          </div>

          {/* Tab 1: Cloud Policy */}
          {activeTab === "terms" && (
            <div className="space-y-6 text-xs text-slate-300">
              <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-3">
                <div className="text-base font-bold text-amber-400 font-heading flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-400" /> Strict Cloud Deployment Policy: Zero Client Server Deployment
                </div>
                <p className="text-slate-200 text-sm leading-relaxed">
                  <strong>InnovCRM is delivered strictly as a fully managed SaaS (Software as a Service) solution hosted on Innovtec's AWS infrastructure.</strong> Innovtec <u>will never deploy InnovCRM on client-provided servers or on-premise hardware</u>. This guarantees 100% security patching, zero version fragmentation, uptime reliability, and continuous data backup.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-space-950 border border-slate-800 space-y-2">
                  <div className="text-sm font-bold text-white font-heading flex items-center gap-2">
                    <Server className="w-4 h-4 text-purple-400" /> Managed SaaS Model
                  </div>
                  <p className="text-slate-400">
                    Clients enjoy full access without the operational overhead of software licenses or server maintenance.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-space-950 border border-slate-800 space-y-2">
                  <div className="text-sm font-bold text-white font-heading flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" /> Zero IT Overhead
                  </div>
                  <p className="text-slate-400">
                    The application is 100% cloud-hosted by Innovtec. Clients require zero hosting setup or internal IT staff.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-space-950 border border-slate-800 space-y-2">
                  <div className="text-sm font-bold text-white font-heading flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Flexible Subscriptions
                  </div>
                  <p className="text-slate-400">
                    Pay-as-you-grow subscription plans tailored to your agency's student volume and branch scale.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Core Architecture */}
          {activeTab === "features" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-space-950 border border-slate-800 space-y-2">
                <div className="text-base font-bold text-white font-heading flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-purple-400" /> Multi-Branch & Hierarchy Controls
                </div>
                <p className="text-xs text-slate-300">
                  Manage multiple office branches seamlessly with granular role-based access control and branch privacy.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-space-950 border border-slate-800 space-y-2">
                <div className="text-base font-bold text-white font-heading flex items-center gap-2">
                  <Layout className="w-4 h-4 text-cyan-400" /> Smart Dashboards & Analytics
                </div>
                <p className="text-xs text-slate-300">
                  Real-time operational dashboards, revenue reports, and exportable financial performance statements.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-space-950 border border-slate-800 space-y-2">
                <div className="text-base font-bold text-white font-heading flex items-center gap-2">
                  <Bell className="w-4 h-4 text-emerald-400" /> Omnichannel Student Alerts
                </div>
                <p className="text-xs text-slate-300">
                  Integrated email dispatches, push alerts, and automated lead follow-up reminders.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-space-950 border border-slate-800 space-y-2">
                <div className="text-base font-bold text-white font-heading flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-400" /> Student & Sub-Agent Portals
                </div>
                <p className="text-xs text-slate-300">
                  Dedicated self-service student application portal and sub-agent commission tracking workspace.
                </p>
              </div>
            </div>
          )}

          {/* Tab 3: Security & Tech Stack */}
          {activeTab === "security" && (
            <div className="space-y-6 text-xs text-slate-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-space-950 border border-slate-800 space-y-2">
                  <div className="text-sm font-bold text-white font-heading flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-purple-400" /> ASP.NET Core API
                  </div>
                  <p className="text-[11px] text-slate-400">High-performance enterprise backend REST API microservices.</p>
                </div>

                <div className="p-5 rounded-2xl bg-space-950 border border-slate-800 space-y-2">
                  <div className="text-sm font-bold text-white font-heading flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-400" /> Angular Client UI
                  </div>
                  <p className="text-[11px] text-slate-400">Dynamic, ultra-fast client single-page application.</p>
                </div>

                <div className="p-5 rounded-2xl bg-space-950 border border-slate-800 space-y-2">
                  <div className="text-sm font-bold text-white font-heading flex items-center gap-2">
                    <Database className="w-4 h-4 text-blue-400" /> MS SQL Database
                  </div>
                  <p className="text-[11px] text-slate-400">Mission-critical relational storage engine with SSL encryption.</p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Partnership & Privacy */}
          {activeTab === "partnership" && (
            <div className="space-y-6 text-xs text-slate-300">
              <div className="p-6 rounded-2xl bg-space-950 border border-slate-800 space-y-3">
                <h4 className="text-base font-bold text-white font-heading flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" /> Joint Development Partnership
                </h4>
                <p className="leading-relaxed text-slate-300">
                  InnovCRM is jointly engineered by <strong>Innovtec (Technical Partner)</strong> and <strong>Neuron Educare (Business Analyst)</strong>. This unique combination unites software engineering mastery with deep international education domain expertise.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/30 space-y-3">
                <h4 className="text-base font-bold text-white font-heading flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-400" /> Data Privacy & Confidentiality Guarantee
                </h4>
                <p className="text-slate-200 leading-relaxed">
                  Your business data is strictly encrypted. Innovtec will <strong>never access or share your agency data without explicit permission</strong>. Innovtec operates under strict confidentiality and guarantees that <strong>your data will never be shared with third parties, including Neuron Educare</strong>.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* 9. FINAL CONVERSION BANNER (UNBOXED OPEN LAYOUT) */}
        <div className="py-16 sm:py-24 text-center space-y-6 relative overflow-hidden border-t border-slate-800/80">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none z-0" />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-bold relative z-10">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>GET STARTED TODAY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight relative z-10">
            Schedule an Agency Demo & Sandbox Trial
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed relative z-10 font-normal">
            Discover how InnovCRM can streamline student recruitment, automate commission distribution, and guarantee visa compliance for your consultancy.
          </p>
          
          <div className="pt-4 flex justify-center relative z-10">
            <Button
              variant="gradient"
              size="lg"
              onClick={() => openConsultationModal("InnovCRM Live Demo Request")}
              icon={<ArrowRight className="w-4 h-4" />}
              className="px-8 py-4 font-semibold text-sm shadow-xl shadow-purple-600/30"
            >
              Request InnovCRM Demo
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
