"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES } from "@/data/mockData";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useApp } from "@/context/AppContext";
import { 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight, 
  HelpCircle, 
  Code2, 
  Layers,
  ShieldCheck,
  Brain
} from "lucide-react";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { openConsultationModal, openAIModal } = useApp();

  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-36 pb-20 bg-space-950 text-center min-h-screen">
        <h1 className="text-3xl font-bold text-white mb-4">Service Not Found</h1>
        <Link href="/services">
          <Button variant="gradient">Back to Services</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 bg-space-950 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link href="/services" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to All Services
        </Link>

        {/* Hero Banner */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-6 mb-12">
          <div className="flex items-center gap-3">
            <Badge variant="blue">{service.category}</Badge>
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Live SLA Delivery
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            {service.title}
          </h1>

          <p className="text-lg text-brand-cyan font-medium">
            {service.tagline}
          </p>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {service.fullDescription}
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Button
              variant="gradient"
              size="lg"
              onClick={() => openConsultationModal(service.title)}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Book Discovery Call for {service.title}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={openAIModal}
              icon={<Brain className="w-4 h-4 text-brand-cyan" />}
            >
              Ask AI Assistant
            </Button>
          </div>
        </div>

        {/* Grid 1: Capabilities & Deliverables */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-4">
            <h3 className="text-xl font-bold font-heading text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-brand-blue" /> Key Capabilities
            </h3>
            <div className="space-y-3 pt-2">
              {service.capabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-4">
            <h3 className="text-xl font-bold font-heading text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-emerald" /> Project Deliverables
            </h3>
            <div className="space-y-3 pt-2">
              {service.deliverables.map((del, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Tech Stack */}
        <div className="glass-card p-8 rounded-3xl border border-slate-800 mb-12">
          <h3 className="text-xl font-bold font-heading text-white mb-4 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-brand-purple" /> Primary Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {service.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-xl bg-space-900 border border-slate-700 text-xs font-mono font-semibold text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="space-y-4 mb-12">
            <h3 className="text-2xl font-bold font-heading text-white flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-brand-cyan" /> Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="glass-card p-6 rounded-2xl border border-slate-800 space-y-2">
                  <h4 className="text-base font-bold text-white font-heading">{faq.question}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
