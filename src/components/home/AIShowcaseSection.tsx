"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useApp } from "@/context/AppContext";
import { 
  Brain, 
  Bot, 
  FileText, 
  Mic, 
  TrendingUp, 
  Sparkles, 
  Database, 
  ShieldCheck, 
  ArrowRight,
  Zap
} from "lucide-react";

export const AIShowcaseSection: React.FC = () => {
  const { openAIModal, openConsultationModal } = useApp();
  const [activeCap, setActiveCap] = useState(0);

  const aiCapabilities = [
    {
      title: "Enterprise RAG Systems",
      icon: Database,
      tagline: "Private Multi-Vector Retrieval Augmented Generation",
      description: "Query thousands of PDF documents, SQL databases, and internal knowledge bases with zero hallucination and strict role-based data security.",
      metrics: "99.4% Accuracy | <1.2s Query Response | 100% Data Privacy",
      tech: ["Qdrant", "Pinecone", "Llama 3", "LangChain", "OpenAI"]
    },
    {
      title: "Autonomous AI Agents",
      icon: Bot,
      tagline: "Multi-Agent Orchestration & Workflow Automation",
      description: "Deploy self-correcting AI agents capable of executing multi-step business logic, calling external REST APIs, and generating audit reports.",
      metrics: "18 hrs/week Admin Time Saved | 10x Faster Workflow",
      tech: ["Python", "FastAPI", "Autogen", "CrewAI", "Redis"]
    },
    {
      title: "Document Intelligence & OCR",
      icon: FileText,
      tagline: "High-Accuracy Unstructured Document Extraction",
      description: "Automate invoice, medical chart, contract, and receipt processing into clean JSON structures ready for enterprise ERP ingestion.",
      metrics: "99.8% Field Extraction Rate | 0.4s per Page",
      tech: ["Tesseract", "AWS Textract", "PyTorch Vision", "OpenCV"]
    },
    {
      title: "Voice AI & Conversational UI",
      icon: Mic,
      tagline: "Ultra-Low Latency Conversational Audio Interfaces",
      description: "Real-time speech-to-text and text-to-speech agents for customer call centers and hands-free medical transcription.",
      metrics: "<250ms Audio Latency | Human-Like Natural Speech",
      tech: ["Whisper", "ElevenLabs", "WebRTC", "FastAPI"]
    },
    {
      title: "Predictive Analytics",
      icon: TrendingUp,
      tagline: "Time-Series Forecasting & Anomaly Detection",
      description: "Transform historical telemetry and market data into predictive insights for supply chain, machine maintenance, and financial risk.",
      metrics: "48-hour Advance Failure Alert | 94% Forecast Accuracy",
      tech: ["TensorFlow", "Prophet", "InfluxDB", "Pandas"]
    }
  ];

  const current = aiCapabilities[activeCap];

  return (
    <section className="py-24 bg-space-900/40 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" className="mb-4">
            AI Engineering Showcase
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Next-Generation <span className="text-gradient-cyan">AI Capabilities</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Explore how Innovtec builds and deploys production-grade AI solutions tailored for enterprise reliability and compliance.
          </p>
        </div>

        {/* Capability Selectors */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {aiCapabilities.map((cap, idx) => {
            const IconComp = cap.icon;
            const isActive = activeCap === idx;
            return (
              <button
                key={cap.title}
                onClick={() => setActiveCap(idx)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-xl shadow-brand-cyan/20 scale-105"
                    : "bg-space-950 border border-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{cap.title}</span>
              </button>
            );
          })}
        </div>

        {/* Live Interactive Capability Box */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-800 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/15 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{current.title} Module</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              {current.tagline}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {current.description}
            </p>

            <div className="p-4 rounded-xl bg-space-950 border border-slate-800">
              <div className="text-xs font-mono uppercase text-slate-400 mb-1">Performance Benchmarks</div>
              <div className="text-sm font-bold text-emerald-400 font-heading">
                {current.metrics}
              </div>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-xs text-slate-400 font-mono self-center mr-2">Frameworks:</span>
              {current.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-space-900 text-slate-200 border border-slate-800"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <Button
                variant="gradient"
                size="md"
                onClick={() => openConsultationModal(`AI Solution: ${current.title}`)}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Schedule AI Feasibility Audit
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={openAIModal}
                icon={<Brain className="w-4 h-4 text-brand-cyan" />}
              >
                Ask Assistant About This
              </Button>
            </div>
          </div>

          {/* Code / Architecture Visualization Panel */}
          <div className="p-5 rounded-2xl bg-space-950 border border-slate-800 font-mono text-xs text-slate-300 flex flex-col justify-between overflow-hidden">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[11px] text-slate-500">
                <span>innovtec_ai_engine.py</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Pipeline
                </span>
              </div>
              <pre className="text-slate-400 overflow-x-auto font-mono text-[11px] leading-relaxed">
{`from innovtec.ai import RAGPipeline
from qdrant_client import QdrantClient

# Initialize Private VPC Vector Store
engine = RAGPipeline(
    model="llama-3-8b-instruct",
    vector_db="qdrant_cluster",
    embedding="bio_bert_v2",
    pii_redaction=True
)

response = engine.query(
    prompt="Extract clinical dosage protocol",
    citations=True
)

# Output Verified Citation
print(response.verified_text)`}
              </pre>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] text-slate-500 flex items-center justify-between">
              <span>Security: Zero-Retention API</span>
              <span className="text-brand-cyan font-semibold">100% Enterprise VPC</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
