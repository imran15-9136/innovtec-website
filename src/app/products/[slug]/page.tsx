"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { PRODUCTS } from "@/data/mockData";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useApp } from "@/context/AppContext";
import { 
  CheckCircle2, 
  ArrowLeft, 
  ExternalLink, 
  Play, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Zap, 
  HelpCircle,
  ArrowRight,
  Video,
  X,
  Maximize2,
  Lock,
  Building2,
  TrendingUp,
  Cpu,
  Check,
  ChevronRight
} from "lucide-react";
import { InnovCRMProductPage } from "@/components/products/InnovCRMProductPage";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { openConsultationModal } = useApp();
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFeatureIdx, setActiveFeatureIdx] = useState<number>(0);

  if (slug === "innov-crm") {
    return <InnovCRMProductPage />;
  }

  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="pt-36 pb-20 bg-space-950 text-center min-h-screen text-white">
        <h1 className="text-3xl font-bold text-white mb-4">Product Not Found</h1>
        <Link href="/products">
          <Button variant="gradient">Back to Products</Button>
        </Link>
      </div>
    );
  }

  const detailedFeatures = product.detailedFeatures || [];
  const packageCards = product.packageCards || [];
  const faqList = product.faqList || [];
  const metrics = product.metrics || [];
  const targetAudience = product.targetAudience || [];
  const features = product.features || [];

  const defaultHeroImage = product.screenshots && product.screenshots.length > 0 
    ? product.screenshots[0]
    : "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600";

  return (
    <div className="pt-24 pb-24 bg-space-950 min-h-screen text-slate-100 relative overflow-hidden">
      
      {/* Background Radial Glow Effects */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-96 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
        
        {/* Back Navigation Link */}
        <Link href="/products" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to All Products
        </Link>

        {/* 1. UNBOXED HERO SECTION (NO TOP CARD CONTAINER) */}
        <div className="space-y-10 text-center max-w-5xl mx-auto pt-4">
          
          {/* Announcement Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0D1322]/90 border border-purple-500/40 shadow-xl shadow-purple-500/10 backdrop-blur-xl">
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-wider text-slate-200 uppercase font-mono">
              {product.badge} • Enterprise SaaS
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.1]">
              {product.name} <br />
              <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                {product.tagline}
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
              {product.fullDescription || product.description}
            </p>
          </div>

          {/* Key Metrics Grid */}
          {metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto p-6 rounded-2xl bg-space-900 border border-slate-800 shadow-xl">
              {metrics.map((m) => (
                <div key={m.label} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-heading">
                    {m.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              variant="gradient"
              size="lg"
              onClick={() => openConsultationModal(`Demo Request: ${product.name}`)}
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
              Watch Video Walkthrough
            </Button>
          </div>

          {/* Target Audience Badges */}
          {targetAudience.length > 0 && (
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mr-2 block sm:inline">Designed For:</span>
              {targetAudience.map((aud) => (
                <span
                  key={aud}
                  className="px-3 py-1 rounded-full bg-space-900 border border-slate-800 text-xs font-medium text-slate-300"
                >
                  {aud}
                </span>
              ))}
            </div>
          )}

          {/* 2. Sleek Interactive Product UI Mockup (Laptop / Device Frame) */}
          <div className="relative pt-6 max-w-5xl mx-auto group">
            
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
                  https://{product.slug}.innovtec.ai/console
                </div>
                <div className="text-[10px] text-slate-500 font-mono hidden sm:block">Enterprise Ready</div>
              </div>

              {/* Central Screenshot Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden cursor-pointer" onClick={() => setIsPlayingVideo(true)}>
                <img
                  src={defaultHeroImage}
                  alt={`${product.name} Interface Mockup`}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 filter brightness-95 contrast-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-transparent to-space-950/30" />

                {/* Central Play Button */}
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

                {/* FLOATING ANNOTATION POINTERS */}
                <div className="absolute top-6 left-6 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-space-900/90 border border-purple-500/40 text-xs font-medium text-white shadow-2xl backdrop-blur-md">
                  <Zap className="w-4 h-4 text-purple-400" />
                  <div>
                    <div className="font-bold text-white text-[11px]">{metrics[0]?.label || "High Scale"}</div>
                    <div className="text-[10px] text-slate-400">{metrics[0]?.value || "10x Performance"}</div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-space-900/90 border border-cyan-500/40 text-xs font-medium text-white shadow-2xl backdrop-blur-md">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  <div>
                    <div className="font-bold text-white text-[11px]">{metrics[1]?.label || "Real-Time Telemetry"}</div>
                    <div className="text-[10px] text-slate-400">{metrics[1]?.value || "<150ms Latency"}</div>
                  </div>
                </div>

                <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-space-900/90 border border-emerald-500/40 text-xs font-medium text-white shadow-2xl backdrop-blur-md">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <div>
                    <div className="font-bold text-white text-[11px]">AWS Cloud Hosted</div>
                    <div className="text-[10px] text-slate-400">99.99% Uptime Guarantee</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* 3. TRUST PROOF BAR */}
          <div className="pt-6 border-t border-slate-800/80">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-4">
              Trusted by Leading Enterprise Technology & Operations Teams
            </span>
            
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300 text-xs text-slate-300 font-mono">
              <span>ORACLE</span>
              <span>MORPHEUS</span>
              <span>SAMSUNG</span>
              <span>MONDAY.COM</span>
              <span>SEGMENT</span>
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
                  <span className="text-sm font-bold text-white">{product.name} Interactive Video Walkthrough</span>
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
                  src={defaultHeroImage}
                  alt={`${product.name} Demo Video`}
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 space-y-4 max-w-lg">
                  <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto shadow-xl">
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                    {product.name} Interactive Sandbox Walkthrough
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Watch how {product.name} streamlines enterprise operations and drives measurable productivity gains for your team.
                  </p>
                  <div className="pt-2 flex justify-center gap-3">
                    <Button
                      variant="gradient"
                      size="sm"
                      onClick={() => {
                        setIsPlayingVideo(false);
                        openConsultationModal(`Live Demo Sandbox: ${product.name}`);
                      }}
                    >
                      Request Live Sandbox Access
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
        {detailedFeatures.length > 0 ? (
          <div className="space-y-16 pt-10 border-t border-slate-800/80">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <Badge variant="purple">Deep Dive Capabilities</Badge>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
                Architected & Engineered for Scalability
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Explore the technical highlights and core architectural modules powering {product.name}.
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
                    <span className="text-[10px] opacity-70">0{idx + 1}</span>
                    <span>{feat.title}</span>
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
                      <span>MODULE 0{idx + 1}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-300 font-sans font-medium">Enterprise Engine</span>
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
                      {(feat.highlights || []).map((h, i) => (
                        <div key={i} className="flex items-start gap-3.5 group">
                          <div className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-purple-600 group-hover:text-white transition-all">
                            <Check className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs sm:text-sm font-bold text-white font-heading">
                              {typeof h === "string" ? h : (h && typeof h === "object" && "title" in h ? (h as any).title : String(h || ""))}
                            </div>
                            {h && typeof h === "object" && "text" in h && (h as any).text && (
                              <div className="text-xs text-slate-400 leading-relaxed mt-0.5">{(h as any).text}</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => openConsultationModal(`Feature Demo: ${feat.title}`)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        Request live sandbox demo for this module <ChevronRight className="w-4 h-4" />
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
                        <span className="text-[10px] font-mono text-slate-400">{feat.title}</span>
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
                        <span>Console Visual View</span>
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
        ) : (
          /* General Features Fallback */
          features.length > 0 && (
            <div className="py-12 border-t border-slate-800/80 space-y-6">
              <h3 className="text-2xl font-bold font-heading text-white">Platform Capabilities & Core Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        )}

        {/* 7. PACKAGE CARDS / PRICING TIERS */}
        {packageCards.length > 0 && (
          <div className="space-y-10 pt-8 border-t border-slate-800/80">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <Badge variant="purple">Transparent Licensing</Badge>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
                Select Your Package & Plan
              </h2>
              <p className="text-sm sm:text-base text-slate-300">
                Choose the plan that aligns with your organization's scale and support requirements.
              </p>
            </div>

            <div className={`grid grid-cols-1 ${packageCards.length > 1 ? "md:grid-cols-2 lg:grid-cols-3" : "max-w-md mx-auto"} gap-8`}>
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
                      {(pkg.featuresIncluded || []).map((f) => (
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
                      onClick={() => openConsultationModal(`Package Interest: ${product.name} (${pkg.name})`)}
                    >
                      {pkg.ctaText}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 8. FAQs */}
        {faqList.length > 0 && (
          <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 bg-space-900 space-y-6">
            <h3 className="text-2xl font-bold font-heading text-white flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-purple-400" /> Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faqList.map((faq) => (
                <div key={faq.question} className="p-5 rounded-2xl bg-space-950 border border-slate-800 space-y-2">
                  <h4 className="text-base font-bold text-white">{faq.question}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 9. FINAL CONVERSION BANNER (UNBOXED OPEN LAYOUT) */}
        <div className="py-16 sm:py-24 text-center space-y-6 relative overflow-hidden border-t border-slate-800/80">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none z-0" />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-bold relative z-10">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>GET STARTED TODAY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight relative z-10">
            Ready to Experience {product.name}?
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed relative z-10 font-normal">
            Schedule a 1-on-1 walkthrough with our technical architects or request instant access to a dedicated sandbox workspace.
          </p>
          
          <div className="pt-4 flex justify-center relative z-10">
            <Button
              variant="gradient"
              size="lg"
              onClick={() => openConsultationModal(`Demo Request: ${product.name}`)}
              icon={<ArrowRight className="w-4 h-4" />}
              className="px-8 py-4 font-semibold text-sm shadow-xl shadow-purple-600/30"
            >
              Request Live Demo Sandbox
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
