"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useApp } from "@/context/AppContext";
import { 
  GraduationCap, 
  Stethoscope, 
  Landmark, 
  ShoppingBag, 
  Factory, 
  Building, 
  Truck, 
  Rocket, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export const IndustriesSection: React.FC = () => {
  const { openConsultationModal } = useApp();
  const [activeTab, setActiveTab] = useState(0);

  const industries = [
    {
      name: "Education",
      icon: GraduationCap,
      tagline: "AI Student Analytics & Campus Management",
      challenge: "Manual attendance, un-integrated LMS, high student dropout rates.",
      solution: "EduPulse SMS platform, automated grading assistants, early-warning student dropout models.",
      outcome: "+28% Student Retention, 60% Faster Grading"
    },
    {
      name: "Healthcare",
      icon: Stethoscope,
      tagline: "HIPAA-Compliant AI Medical Search & Telehealth",
      challenge: "Clinicians wasting hours searching clinical trials & medical PDF archives.",
      solution: "Private medical RAG knowledge base fine-tuned on clinical guidelines with zero data retention.",
      outcome: "75% Reduction in Research Time, 99.2% Accuracy"
    },
    {
      name: "Finance",
      icon: Landmark,
      tagline: "Event-Driven Microservices & Real-Time Fraud AI",
      challenge: "Legacy monolith system causing latency during peak market trades.",
      solution: "Go microservices on Kubernetes with Apache Kafka event bus & real-time transaction telemetry.",
      outcome: "99.999% Core Banking Uptime, -65% Infra Costs"
    },
    {
      name: "Retail & E-Com",
      icon: ShoppingBag,
      tagline: "Headless Commerce & AI Product Recommendations",
      challenge: "Slow mobile storefront causing high checkout abandonment.",
      solution: "Next.js App Router storefront on Vercel Edge with sub-second page loads.",
      outcome: "+42% Mobile Conversions, 0.8s Page Load"
    },
    {
      name: "Manufacturing",
      icon: Factory,
      tagline: "IoT Telematics & Predictive Machine Maintenance",
      challenge: "Unexpected robot breakdowns halting factory assembly lines.",
      solution: "MQTT sensor stream ingestion connected to real-time predictive ML anomaly models.",
      outcome: "$4.2M Downtime Saved, 48-hour Advance Alert"
    },
    {
      name: "Government",
      icon: Building,
      tagline: "SOC 2 & FedRAMP Ready Public Sector Digitization",
      challenge: "Outdated paper-based citizen service portals.",
      solution: "Secure web portals with role-based access control and encrypted document storage.",
      outcome: "100% Digital Processing, Military-Grade Audit Trails"
    },
    {
      name: "Logistics",
      icon: Truck,
      tagline: "Fleet Telematics & Route Optimization Engine",
      challenge: "Inefficient fleet routes increasing fuel expenses.",
      solution: "IoT GPS tracking gateway with dynamic route optimization algorithms.",
      outcome: "-22% Fuel Costs, 99.4% On-Time Delivery"
    },
    {
      name: "Startups",
      icon: Rocket,
      tagline: "Rapid MVP Engineering to Series A Scaling",
      challenge: "Tight investor deadlines requiring rapid production-grade software.",
      solution: "Dedicated sprint team constructing Next.js + PostgreSQL MVP in 4 weeks.",
      outcome: "Launch in 30 Days, Scalable to 1M Users"
    }
  ];

  const current = industries[activeTab];

  return (
    <section className="py-24 bg-space-900/50 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" className="mb-4">
            Domain Expertise
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Engineered for <span className="text-gradient-blue">Industry Transformation</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We adapt enterprise architecture and AI capabilities to address the unique regulatory and operational demands of key business sectors.
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {industries.map((ind, idx) => {
            const IconComp = ind.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={ind.name}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-lg shadow-brand-blue/20 scale-105"
                    : "bg-space-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Industry Detail Box */}
        <div className="glass-card p-8 rounded-3xl border border-slate-800 bg-space-950/80 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-blue/10 text-brand-cyan text-xs font-mono font-medium">
              <span>{current.name} Solutions</span>
            </div>

            <h3 className="text-2xl font-bold font-heading text-white">
              {current.tagline}
            </h3>

            <div className="space-y-3 pt-2 text-xs sm:text-sm">
              <div>
                <span className="text-slate-500 font-semibold block uppercase text-[10px] tracking-wider">Operational Challenge</span>
                <p className="text-slate-300">{current.challenge}</p>
              </div>
              <div>
                <span className="text-slate-500 font-semibold block uppercase text-[10px] tracking-wider">Innovtec Solution</span>
                <p className="text-slate-200">{current.solution}</p>
              </div>
            </div>

            <div className="pt-4">
              <Button
                variant="gradient"
                size="sm"
                onClick={() => openConsultationModal(current.name)}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Discuss {current.name} Project
              </Button>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-space-900 border border-slate-800 space-y-4 text-left">
            <div className="text-xs font-mono uppercase text-slate-400">Measured Business Impact</div>
            <div className="text-3xl font-extrabold text-brand-cyan font-heading">
              {current.outcome.split(",")[0]}
            </div>
            <div className="text-sm text-slate-300">
              {current.outcome}
            </div>
            <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Full compliance & regulatory standards guaranteed</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
