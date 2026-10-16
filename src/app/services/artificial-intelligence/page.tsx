"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Brain,
  Sparkles,
  Network,
  Bot,
  Cpu,
  Layers,
  GitFork,
  ShieldCheck,
  Database,
  Terminal,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Play,
  Stethoscope,
  Scale,
  Headphones,
  MessageSquare,
  Briefcase,
  FileCode2,
  Zap,
  Workflow,
  Server,
  Activity,
  Lock,
  RefreshCw,
  BarChart3,
  LineChart,
  Code2,
  FileText,
  Search,
  Eye,
  Sliders,
  Check,
  Send,
  Boxes
} from "lucide-react";

/* ─── Animated Counter ─── */
function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <div ref={ref}>{count}{suffix}</div>;
}

/* ─── AI Metrics ─── */
const STATS = [
  { value: 99, suffix: ".4%", label: "Intent Routing Precision" },
  { value: 420, suffix: "ms", label: "Median RAG & Query Latency" },
  { value: 85, suffix: "%", label: "Inference Cost Optimization" },
  { value: 50, suffix: "M+", label: "Tokens Processed Securely / Day" },
];

/* ─── Specialized Agent Servers Data ─── */
const AGENT_SERVERS = [
  {
    id: "customer-care",
    icon: Headphones,
    badge: "24/7 Omnichannel Server",
    title: "Customer Care Agent Server",
    color: "from-cyan-500 to-blue-600",
    glow: "hover:border-cyan-500/40 hover:shadow-cyan-500/10",
    tagline: "Autonomous resolution across WhatsApp, Messenger, Web Chat, Voice & Email",
    description: "Enterprise-grade customer experience microservice with real-time sentiment analysis, intent classification, CRM synchronization, and intelligent human agent handoff. Solves over 88% of customer queries on first contact without human intervention.",
    capabilities: [
      "Zero-latency integration with Zendesk, Salesforce, HubSpot & Custom CRMs",
      "Dynamic tone adjustment & sentiment escalation triggers",
      "Multilingual translation supporting 95+ international languages",
      "Autonomous returns, order tracking, invoice issuing & tier-1 technical support",
    ],
    sampleTool: "crm_query_order_status(order_id, user_auth_token)",
    serverSpecs: "Stateless FastAPI + Redis state store • <180ms TTFT",
  },
  {
    id: "medical-assistant",
    icon: Stethoscope,
    badge: "HIPAA / EHR Compliant",
    title: "Medical Assistant Agent Server",
    color: "from-emerald-500 to-teal-600",
    glow: "hover:border-emerald-500/40 hover:shadow-emerald-500/10",
    tagline: "Clinical triage, EHR documentation & diagnostic decision support",
    description: "Specialized healthcare agent server engineered with strict HIPAA and GDPR compliance. Assists clinicians with ambient clinical note generation, automated ICD-10/CPT coding, lab result summarization, and medical literature cross-referencing.",
    capabilities: [
      "FHIR / HL7 standard interoperability with Epic, Cerner & Allscripts",
      "Automated clinical SOAP note generation from patient consultations",
      "Adverse drug interaction checking against PubChem & OpenFDA repositories",
      "Human-in-the-loop validation barrier before clinical sign-off",
    ],
    sampleTool: "epic_ehr_retrieve_vitals(patient_id, date_range)",
    serverSpecs: "Air-gapped VPC • Encrypted at rest & in-transit (AES-256)",
  },
  {
    id: "conversation-agent",
    icon: MessageSquare,
    badge: "Voice & Multi-Turn Dialog",
    title: "Conversational Agent Server",
    color: "from-purple-500 to-indigo-600",
    glow: "hover:border-purple-500/40 hover:shadow-purple-500/10",
    tagline: "Human-like natural voice & text streaming with sub-300ms latency",
    description: "High-performance conversational intelligence server with bidirectional audio streaming (WebSockets / WebRTC), full-duplex interruption handling, emotional resonance, and deep contextual memory spanning multi-session conversations.",
    capabilities: [
      "Sub-300ms end-to-end speech-to-speech latency via ultra-fast neural models",
      "Real-time acoustic sentiment & emotion-aware speech modulation",
      "Context-aware barge-in & dynamic interruption recovery",
      "Enterprise telephony SIP/PSTN trunking integration (Twilio, LiveKit)",
    ],
    sampleTool: "synthesize_speech_stream(text_chunk, voice_profile)",
    serverSpecs: "WebRTC / WebSocket duplex • Edge GPU acceleration",
  },
  {
    id: "legal-agent",
    icon: Scale,
    badge: "Compliance & Risk Audit",
    title: "Legal Intelligence Agent Server",
    color: "from-amber-500 to-orange-600",
    glow: "hover:border-amber-500/40 hover:shadow-amber-500/10",
    tagline: "High-speed contract analysis, clause redlining & compliance auditing",
    description: "Deterministic legal AI server that digests multi-hundred-page commercial agreements, NDAs, and regulatory statutes. Identifies liability clauses, non-standard covenants, and cross-references regulatory mandates like GDPR, EU AI Act, and CCPA.",
    capabilities: [
      "Automated contract redlining against your corporate playbook",
      "Cryptographic citation audit trails linking every claim to source paragraphs",
      "Regulatory discrepancy detection & compliance risk heatmaps",
      "Multi-jurisdictional case law & precedent vector search",
    ],
    sampleTool: "vector_search_precedents(clause_embedding, jurisdiction)",
    serverSpecs: "Zero-data retention sandbox • Verifiable hallucination guard",
  },
  {
    id: "erp-agent",
    icon: Briefcase,
    badge: "Supply Chain & Commerce",
    title: "Financial & ERP Agent Server",
    color: "from-blue-500 to-cyan-600",
    glow: "hover:border-blue-500/40 hover:shadow-blue-500/10",
    tagline: "Automated 3-way matching, inventory intelligence & transaction audit",
    description: "Enterprise operations agent tailored for manufacturing, garments, retail, and supply chains. Connects directly to SAP, Oracle, NetSuite, and Leading Edge ERP to reconcile invoices, forecast BOM requirements, and detect transactional anomalies.",
    capabilities: [
      "Automated 3-way PO, delivery challan & invoice reconciliation",
      "Predictive material inventory restocking based on order pipelines",
      "Real-time fraud & duplicate payment detection across general ledgers",
      "Automated LC (Letter of Credit) document verification for import/export",
    ],
    sampleTool: "reconcile_invoice_po(invoice_data, po_database)",
    serverSpecs: "Direct SQL / ERP connector • Audit log immutable trail",
  },
  {
    id: "devops-agent",
    icon: FileCode2,
    badge: "Autonomous Engineering",
    title: "Code & DevOps Agent Server",
    color: "from-rose-500 to-pink-600",
    glow: "hover:border-rose-500/40 hover:shadow-rose-500/10",
    tagline: "Autonomous PR review, SAST security scan & CI/CD self-healing",
    description: "Autonomous software engineering companion that monitors codebases, creates pull requests, identifies CVEs and memory leaks, generates unit/e2e test suites, and diagnoses build failures in continuous deployment pipelines.",
    capabilities: [
      "Semantic code analysis & automated PR reviews with line-specific suggestions",
      "Zero-day dependency vulnerability detection & automated patch creation",
      "Automated test coverage generation (Jest, PyTest, Playwright)",
      "CI/CD pipeline error log diagnosis & automated configuration rollbacks",
    ],
    sampleTool: "github_create_pull_request(repo, branch, diff_payload)",
    serverSpecs: "Isolated Docker sandbox • GitHub / GitLab webhook hooks",
  },
];

/* ─── Interactive Agent Simulator Scenarios ─── */
const SIMULATOR_SCENARIOS = [
  {
    id: "customer-care",
    title: "Customer Care Agent",
    icon: Headphones,
    userQuery: "Hello, our shipment #INV-8492 for retail store #12 is delayed by 3 days. Can you check status and apply penalty credit?",
    supervisorIntent: "Intent: Logistics Inquire & Financial Adjustment | Domain: Customer Care & ERP",
    steps: [
      { node: "Supervisor Router", status: "Analyzed request intent & security credentials", time: "18ms" },
      { node: "ERP Connector", status: "Querying ERP shipment tracking database for #INV-8492", time: "42ms" },
      { node: "Policy Evaluator", status: "Validating SLA clause 4.1: Delayed delivery qualifies for $450 shipping credit", time: "25ms" },
      { node: "Human-in-the-Loop", status: "Auto-approved within $500 threshold limit", time: "12ms" },
    ],
    response: "Shipment #INV-8492 is currently at Central Hub Gate 4 due to regional weather routing and is scheduled for guaranteed delivery tomorrow at 10:30 AM. In accordance with your Master Service SLA (Clause 4.1), I have credited $450 to your account statement (Ref: CR-9921) and notified your regional dispatcher.",
    citations: ["ERP Shipment Log #INV-8492", "Master Logistics SLA 2026 §4.1"],
  },
  {
    id: "medical-assistant",
    title: "Medical Assistant Agent",
    icon: Stethoscope,
    userQuery: "Review patient Jane Doe (ID: PT-4190) lab results from yesterday. Are there any critical markers or contraindicated prescriptions?",
    supervisorIntent: "Intent: Clinical Lab Synthesis & Rx Safety Check | Domain: Medical Clinical",
    steps: [
      { node: "Supervisor Router", status: "Verified physician authorization & HIPAA session token", time: "14ms" },
      { node: "FHIR EHR Fetcher", status: "Retrieved comprehensive metabolic panel & current active Rx list", time: "55ms" },
      { node: "Drug Interaction Agent", status: "Cross-checked Serum Potassium (5.8 mEq/L) against Spironolactone 50mg", time: "38ms" },
      { node: "Clinical Guardrail", status: "Flagged mild hyperkalemia risk for physician immediate review", time: "22ms" },
    ],
    response: "ALERT FOR PHYSICIAN REVIEW: Patient Jane Doe's Serum Potassium returned at 5.8 mEq/L (Normal: 3.5 - 5.0 mEq/L). She is currently prescribed Spironolactone 50mg daily. Caution: Hyperkalemia risk. Recommendation: Temporarily hold potassium-sparing diuretic and repeat electrolyte panel within 48 hours. SOAP draft prepared for MD signature.",
    citations: ["Epic EHR FHIR Lab Result #CMP-8819", "FDA Safety Warning: Spironolactone & Potassium"],
  },
  {
    id: "legal-agent",
    title: "Legal Intelligence Agent",
    icon: Scale,
    userQuery: "Analyze the uploaded Enterprise SaaS Vendor Agreement. Highlight any uncapped indemnification or non-standard IP ownership terms.",
    supervisorIntent: "Intent: Contractual Risk Audit & Clause Extraction | Domain: Corporate Legal",
    steps: [
      { node: "Supervisor Router", status: "Ingested 48-page PDF, split into semantic chunks with vector indexing", time: "85ms" },
      { node: "Clause Extractor", status: "Located Section 11.2 (Indemnification) and Section 8.4 (IP Rights)", time: "60ms" },
      { node: "Corporate Playbook Benchmark", status: "Compared terms against Innovtec 2026 Gold Standard Playbook", time: "45ms" },
      { node: "Redline Synthesizer", status: "Generated exact redline modifications with fallback wording", time: "30ms" },
    ],
    response: "RISK ASSESSMENT: HIGH. Section 11.2 specifies uncapped mutual indemnification for indirect damages, violating our company policy capping liability at 2x annual contract value (ACV). Section 8.4 attempts to claim ownership over custom configuration scripts. Recommended Redline: Insert mutual liability cap of $500,000 and clarify that Customer retains sole ownership of customer-derived telemetry.",
    citations: ["Vendor Agreement Draft v2.1 §11.2, §8.4", "Corporate Playbook Standard Terms §9.3"],
  },
  {
    id: "conversation-agent",
    title: "Conversational Voice Agent",
    icon: MessageSquare,
    userQuery: "[Audio Stream] 'Book a technical consultation with the lead AI architect for next Tuesday afternoon, and send the Zoom link to my corporate email.'",
    supervisorIntent: "Intent: Voice Transcription, Calendar Resolution & Booking | Domain: Executive Ops",
    steps: [
      { node: "Streaming STT", status: "Transcribed incoming 16kHz audio stream via Whisper low-latency model", time: "110ms" },
      { node: "Calendar Agent", status: "Checked AI Architect availability for Tuesday, Oct 20 (2:00 PM - 5:00 PM)", time: "48ms" },
      { node: "Identity & Email Agent", status: "Resolved user email from SSO profile (alex@enterprise.corp)", time: "24ms" },
      { node: "Neural Voice TTS", status: "Generated natural streaming audio response (24kHz Cartesia TTS)", time: "85ms" },
    ],
    response: "'I have reserved Tuesday, October 20 at 3:00 PM EST with Dr. Tariq, Lead AI Architect. The calendar invitation and secure Zoom link have just been sent to alex@enterprise.corp. Would you like me to attach our LangGraph whitepaper to the invite?'",
    citations: ["Google Calendar API Slot #OCT20-1500", "Enterprise SSO Profile #USR-209"],
  },
];

/* ─── Core Capabilities with Generated Images ─── */
const CORE_CAPABILITIES = [
  {
    id: "rag",
    image: "/images/ai/rag-pipeline.jpg",
    badge: "Context Retrieval",
    title: "Enterprise RAG & Knowledge Graph Pipelines",
    description: "Beyond basic semantic search. We build production RAG systems with recursive document chunking, hybrid BM25 + dense vector embeddings, cross-encoder rerankers, and bidirectional knowledge graphs for zero-hallucination factual grounding.",
    features: [
      "Hybrid dense & sparse vector retrieval (Qdrant, Milvus, pgvector)",
      "Cohere / BGE cross-encoder rerankers achieving 99.2% recall",
      "Context compression & query rewriting with sub-query decomposition",
      "Cryptographic citation lineage linked to raw source documents",
    ],
  },
  {
    id: "langgraph",
    image: "/images/ai/langgraph.jpg",
    badge: "Multi-Agent System",
    title: "LangGraph Multi-Agent Stateful Orchestration",
    description: "Move past brittle linear chains. LangGraph enables cyclic stateful multi-agent graphs with autonomous agent supervisor routing, specialized worker teams, self-correction loops, and persistent checkpointing across distributed workflows.",
    features: [
      "Cyclic StateGraph topology with conditional edge branching",
      "Hierarchical Supervisor Pattern coordinating specialized agent teams",
      "Human-in-the-Loop (HITL) checkpoints for sensitive enterprise decisions",
      "Time-travel debugging & durable state persistence in PostgreSQL",
    ],
  },
  {
    id: "dashboard",
    image: "/images/ai/agents-dashboard.jpg",
    badge: "Mission Control",
    title: "Autonomous Agent Monitoring & Observability",
    description: "Full-stack observability for production LLM operations. Monitor token economics, latency percentiles (P95/P99), hallucination drift, semantic guardrails, and cost per task across your entire autonomous multi-agent fleet.",
    features: [
      "Real-time LangSmith, Arize Phoenix & OpenTelemetry distributed tracing",
      "Automated prompt injection shields & NeMo Guardrails",
      "Cost arbitrage routing queries between GPT-4o, Claude 3.5 & DeepSeek",
      "Automated evaluation metrics: Faithfulness, Answer Relevance, Context Recall",
    ],
  },
  {
    id: "vision",
    image: "/images/ai/computer-vision.jpg",
    badge: "Edge Perception",
    title: "Computer Vision & Visual Intelligence",
    description: "High-throughput visual perception systems trained for industrial quality inspection, medical image segmentation, autonomous robotic guidance, and spatial tracking. Optimized for edge deployment on NVIDIA Jetson & TensorRT.",
    features: [
      "Real-time object detection & defect segmentation (YOLOv10, SAM 2)",
      "Multi-camera spatial tracking & automated thermal anomaly classification",
      "Edge-optimized inference with INT8 quantization via TensorRT",
      "Continuous active learning pipelines on edge telemetry",
    ],
  },
  {
    id: "voice",
    image: "/images/ai/voice-assistant.jpg",
    badge: "Audio & Speech",
    title: "Real-Time Neural Voice & Conversational Speech",
    description: "Ultra-low-latency voice interfaces powered by real-time speech-to-speech architectures. Seamlessly integrates with contact centers, telephony SIP trunks, and mobile hardware for natural, interruptible voice interactions.",
    features: [
      "Sub-300ms time-to-first-audio latency with streaming neural synthesizers",
      "Acoustic sentiment & emotion-aware speech modulation",
      "Full-duplex interruptible voice streaming via WebSockets / WebRTC",
      "Enterprise SIP / PSTN trunking integration for global contact centers",
    ],
  },
];

/* ─── Tech Stack Matrix ─── */
const TECH_STACK = [
  {
    category: "Agent Frameworks",
    items: ["LangGraph", "LangChain", "LlamaIndex", "CrewAI", "AutoGen", "Semantic Kernel"],
  },
  {
    category: "Foundational Models",
    items: ["OpenAI GPT-4o", "Anthropic Claude 3.5 Sonnet", "Google Gemini 1.5/3 Pro", "DeepSeek V3/R1", "Meta Llama 3.3", "Mistral Large"],
  },
  {
    category: "Vector Engines",
    items: ["Qdrant", "Milvus", "Pinecone", "pgvector (PostgreSQL)", "ChromaDB", "Weaviate"],
  },
  {
    category: "Serving & Inference",
    items: ["vLLM", "Triton Inference Server", "TensorRT-LLM", "Ollama", "Ray Serve", "FastAPI"],
  },
  {
    category: "Observability & Guardrails",
    items: ["LangSmith", "Arize Phoenix", "NeMo Guardrails", "Weights & Biases", "OpenTelemetry", "Guardrails AI"],
  },
];

/* ─── FAQ Items ─── */
const FAQS = [
  {
    q: "Why use LangGraph instead of standard sequential chains or basic chatbots?",
    a: "Standard LLM chains are strictly linear and brittle: if one step fails, the entire pipeline crashes. LangGraph introduces cyclic state graphs, allowing agents to loop, self-correct errors, query multiple tools in parallel, and maintain persistent state over long sessions. Crucially, LangGraph supports the Multi-Agent Supervisor pattern and Human-in-the-Loop checkpoints, which are mandatory for enterprise reliability.",
  },
  {
    q: "How do you guarantee data privacy and compliance (HIPAA, GDPR, SOC2)?",
    a: "We deploy enterprise AI architectures within your private VPC (AWS, Azure, GCP) or air-gapped on-premise infrastructure. We enforce Zero Data Retention (ZDR) agreements with foundational model providers so your proprietary data is never used for model training. For healthcare and financial clients, data is tokenized and masked with PII filters before leaving your security boundary.",
  },
  {
    q: "Can your specialized agent servers connect with our legacy ERP and databases?",
    a: "Yes. Our agent servers are built on microservice architectures using OpenAPI, gRPC, and secure database drivers. We provide pre-built connectors for SAP, Oracle, NetSuite, Salesforce, Leading Edge ERP, Microsoft Dynamics, and custom SQL/NoSQL databases with role-based access control (RBAC).",
  },
  {
    q: "How do you mitigate LLM hallucinations in critical medical or legal tasks?",
    a: "We implement multi-layered deterministic guardrails. First, our RAG pipelines use hybrid retrieval and cross-encoder rerankers to supply strictly verified source context. Second, LangGraph agents run self-evaluator nodes to calculate factual consistency scores before emitting responses. Third, every response includes verifiable cryptographic citations pointing to the exact source paragraphs.",
  },
  {
    q: "What is the typical timeline to launch an enterprise AI agent prototype?",
    a: "We deliver a production-ready Proof of Concept (POC) in 2 to 3 weeks. Following validation, full enterprise production rollout — including private VPC deployment, security audits, ERP integrations, and telemetry dashboards — typically takes 6 to 10 weeks.",
  },
];

export default function ArtificialIntelligencePage() {
  const { openConsultationModal, openAIModal } = useApp();
  const [activeSimulatorTab, setActiveSimulatorTab] = useState("customer-care");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeGraphNode, setActiveGraphNode] = useState<string>("supervisor");

  const currentScenario = SIMULATOR_SCENARIOS.find((s) => s.id === activeSimulatorTab) || SIMULATOR_SCENARIOS[0];

  return (
    <div className="pt-28 sm:pt-32 pb-24 bg-[#040711] min-h-screen text-white selection:bg-cyan-500/20 selection:text-cyan-300">

      {/* ════════════ HERO SECTION ════════════ */}
      <section className="relative overflow-hidden mb-16">
        {/* Background Image with Gradient Mask */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ai/hero.jpg"
            alt="Artificial Intelligence and Neural Network Architecture"
            fill
            className="object-cover object-center opacity-30 brightness-75 scale-105 animate-fade-in"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#040711]/60 via-[#040711]/90 to-[#040711]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040711] via-[#040711]/70 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          {/* Back Navigation */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Services
          </Link>

          <div className="pt-4 sm:pt-10 pb-28 sm:pb-36 max-w-4xl">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant="blue">Enterprise AI & Machine Learning</Badge>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm shadow-cyan-900/20">
                <Workflow className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
                LangGraph Multi-Agent Orchestration
              </span>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Production SLA Ready
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-white tracking-tight leading-[1.08] mb-6">
              Autonomous{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Agent Systems
              </span>{" "}
              & LangGraph Architectures
            </h1>

            {/* Subhead */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-4 max-w-3xl">
              We engineer mission-critical artificial intelligence for enterprises — from multi-agent swarms powered by LangGraph to specialized agent servers for customer care, medical diagnosis, legal intelligence, and financial ERP operations.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8 max-w-2xl">
              Equipped with deterministic guardrails, sub-second hybrid vector search (RAG), bidirectional conversational speech streaming, and air-gapped private VPC security.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center">
              <Button
                variant="gradient"
                size="lg"
                onClick={() => openConsultationModal("Artificial Intelligence & ML Solutions")}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Book AI Architecture Discovery
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={openAIModal}
                icon={<Brain className="w-4 h-4 text-cyan-400" />}
              >
                Chat with Innovtec AI Copilot
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-[1780px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">

        {/* ════════════ ANIMATED METRIC COUNTERS ════════════ */}
        <section className="mb-24 -mt-20 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/95 to-slate-950/70 backdrop-blur-xl p-6 sm:p-8 text-center transition-all duration-500 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════ SPECIALIZED AGENT SERVERS (USER REQUIREMENT) ════════════ */}
        <section className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-4">
              <Server className="w-3.5 h-3.5" />
              Enterprise Agent Microservices
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight mb-4">
              Autonomous{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Specialized Agent Servers
              </span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Self-governing, domain-tuned agent microservices designed to integrate directly into existing enterprise tech stacks, ERPs, and customer channels with guaranteed precision and SLA safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {AGENT_SERVERS.map((server) => {
              const Icon = server.icon;
              return (
                <div
                  key={server.id}
                  className={`group relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-8 transition-all duration-500 ${server.glow} hover:-translate-y-1`}
                >
                  <div>
                    {/* Header: Icon & Badge */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${server.color} flex items-center justify-center text-white shadow-lg`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300 bg-slate-800/90 border border-slate-700/80 px-2.5 py-1 rounded-full">
                        {server.badge}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {server.title}
                    </h3>
                    <div className="text-xs font-medium text-cyan-400/90 mb-4 leading-snug">
                      {server.tagline}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-400 leading-relaxed mb-6">
                      {server.description}
                    </p>

                    {/* Capability Checklist */}
                    <div className="space-y-2.5 mb-6">
                      <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Core Capabilities:
                      </div>
                      {server.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-normal">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Server Spec Footer */}
                  <div className="pt-4 border-t border-slate-800/80">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                        Tool Invocation:
                      </span>
                      <span className="text-emerald-400">Active Node</span>
                    </div>
                    <div className="mt-1 text-[11px] font-mono bg-slate-950/80 text-cyan-300/90 px-2.5 py-1.5 rounded-lg border border-slate-800 truncate">
                      {server.sampleTool}
                    </div>
                    <div className="mt-2 text-[10px] text-slate-400 text-right">
                      {server.serverSpecs}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ════════════ INTERACTIVE LIVE AGENT SANDBOX / SIMULATOR ════════════ */}
        <section className="mb-28">
          <div className="glass-card rounded-3xl border border-slate-800 p-6 sm:p-10 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                Interactive LangGraph Agent Playground
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white tracking-tight mb-3">
                Watch Autonomous Agents Reason & Act
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Select an agent server below to see a live simulation of how user queries travel through the LangGraph supervisor router, execute specialized tools, and yield verified answers with source citations.
              </p>
            </div>

            {/* Selector Tabs */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 border-b border-slate-800 pb-4">
              {SIMULATOR_SCENARIOS.map((scenario) => {
                const Icon = scenario.icon;
                const isActive = activeSimulatorTab === scenario.id;
                return (
                  <button
                    key={scenario.id}
                    onClick={() => setActiveSimulatorTab(scenario.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                        : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{scenario.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Simulation Canvas */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Trace Execution Graph (5 cols) */}
              <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-4">
                  <span className="text-slate-400 flex items-center gap-1.5 font-bold">
                    <Workflow className="w-3.5 h-3.5 text-cyan-400" />
                    LangGraph State Execution Trace
                  </span>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                    STATUS: 200 OK
                  </span>
                </div>

                <div className="text-slate-400 mb-4 text-[11px] bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                  {currentScenario.supervisorIntent}
                </div>

                {/* Node Trace Sequence */}
                <div className="space-y-3 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
                  {currentScenario.steps.map((step, idx) => (
                    <div key={idx} className="relative flex items-start gap-3 pl-1">
                      <div className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/60 text-cyan-400 flex items-center justify-center text-[10px] font-bold shrink-0 z-10">
                        {idx + 1}
                      </div>
                      <div className="flex-1 bg-slate-900/90 border border-slate-800 p-2.5 rounded-lg">
                        <div className="flex items-center justify-between text-cyan-300 font-semibold mb-1">
                          <span>{step.node}</span>
                          <span className="text-slate-400 text-[10px] font-normal">{step.time}</span>
                        </div>
                        <div className="text-slate-300 text-[11px] leading-relaxed">
                          {step.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Interaction Window (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-4">
                
                {/* User Prompt Box */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    Simulated Inbound Query
                  </div>
                  <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed italic">
                    "{currentScenario.userQuery}"
                  </p>
                </div>

                {/* Agent Response Box */}
                <div className="bg-gradient-to-br from-slate-900/95 to-slate-950 border border-cyan-500/30 rounded-2xl p-5 shadow-lg shadow-cyan-500/5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      Agent Synthesized Response
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                      Confidence: 99.8%
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-4">
                    {currentScenario.response}
                  </p>

                  {/* Citations Box */}
                  <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      Grounding Citations:
                    </span>
                    {currentScenario.citations.map((cite, i) => (
                      <span key={i} className="text-[11px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-0.5 rounded-full">
                        {cite}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openConsultationModal(`Customize ${currentScenario.title}`)}
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Deploy This Agent For Your Business
                  </Button>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ════════════ LANGGRAPH DEEP DIVE ARCHITECTURE (USER REQUIREMENT) ════════════ */}
        <section className="mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: LangGraph Image Showcase (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative group rounded-3xl overflow-hidden border border-slate-800 shadow-2xl aspect-video lg:aspect-[4/3]">
                <Image
                  src="/images/ai/langgraph.jpg"
                  alt="LangGraph Multi-Agent Architecture and Orchestration Graph"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040711] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-mono mb-2">
                    <Network className="w-3.5 h-3.5 text-cyan-400" />
                    LangGraph StateGraph Engine
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Cyclic Graph Architecture with Dynamic Routing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    State persistence, supervisor routing, and human-in-the-loop checkpoints.
                  </p>
                </div>
              </div>

              {/* Node Feature Badges */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3 text-center">
                  <div className="text-cyan-400 font-bold text-lg font-heading">Cyclic</div>
                  <div className="text-[11px] text-slate-400">Self-Correction Loops</div>
                </div>
                <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3 text-center">
                  <div className="text-blue-400 font-bold text-lg font-heading">Postgres</div>
                  <div className="text-[11px] text-slate-400">State Persistence</div>
                </div>
                <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3 text-center">
                  <div className="text-purple-400 font-bold text-lg font-heading">HITL</div>
                  <div className="text-[11px] text-slate-400">Human Approval Gates</div>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Explanations (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono">
                <GitFork className="w-3.5 h-3.5" />
                Why We Built On LangGraph
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight leading-tight">
                Architecting True{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Multi-Agent Autonomy
                </span>
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                Simple chains and single-prompt LLMs fail when applied to enterprise operations. Real-world business workflows require branching logic, error recovery, stateful persistence, and collaboration between specialized agents.
              </p>

              <div className="space-y-4 pt-2">
                
                <div className="flex gap-4 p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800/60 flex items-center justify-center text-cyan-400 shrink-0">
                    <Workflow className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">StateGraph & Conditional Edges</h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      LangGraph treats LLM pipelines as directed graphs with state objects passed between nodes. Conditional edges route tasks based on real-time tool output, allowing agents to backtrack and retry when an API fails.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-blue-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-800/60 flex items-center justify-center text-blue-400 shrink-0">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">Hierarchical Supervisor Pattern</h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      A central supervisor agent orchestrates an ecosystem of domain experts (e.g. Legal Agent, ERP Agent, Medical Agent). The supervisor dynamically delegates subtasks and synthesizes results into a unified delivery.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-purple-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-purple-950 border border-purple-800/60 flex items-center justify-center text-purple-400 shrink-0">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">Human-in-the-Loop (HITL) Checkpoints</h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      Critical actions — such as authorizing a refund, writing a medical prescription, or modifying a commercial contract — trigger automated interrupts. The graph pauses state until an authorized human reviews and signs off.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ════════════ CORE CAPABILITIES (IMAGE-RICH GRID) ════════════ */}
        <section className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Comprehensive AI Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight mb-4">
              Full-Spectrum{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI & Machine Learning
              </span>{" "}
              Capabilities
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Explore our core technical domains delivering high-performance intelligence to industry leaders worldwide.
            </p>
          </div>

          <div className="space-y-16">
            {CORE_CAPABILITIES.map((cap, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={cap.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/60 to-slate-950/80 backdrop-blur-xl p-8 sm:p-12 transition-all duration-500 hover:border-cyan-500/30`}
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative group rounded-2xl overflow-hidden border border-slate-800 aspect-video shadow-xl">
                      <Image
                        src={cap.image}
                        alt={cap.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                    </div>
                  </div>

                  {/* Text Column */}
                  <div className={`lg:col-span-6 space-y-4 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/80 border border-cyan-800/60 px-3 py-1 rounded-full inline-block">
                      {cap.badge}
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                      {cap.title}
                    </h3>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {cap.description}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      {cap.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openConsultationModal(cap.title)}
                        icon={<ArrowRight className="w-3.5 h-3.5" />}
                      >
                        Explore Solution Architecture
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ════════════ TECH STACK & ECOSYSTEM MATRIX ════════════ */}
        <section className="mb-28">
          <div className="glass-card rounded-3xl border border-slate-800 p-8 sm:p-12">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
                <Cpu className="w-3.5 h-3.5" />
                Modern AI Infrastructure
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white tracking-tight mb-3">
                Battle-Tested AI Tech Stack
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                We avoid vendor lock-in by pairing world-class proprietary LLMs with leading open-source models, vector engines, and distributed serving frameworks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TECH_STACK.map((group, idx) => (
                <div key={idx} className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6">
                  <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold mb-4 flex items-center gap-2">
                    <Boxes className="w-4 h-4 text-cyan-400" />
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium text-slate-300 bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-lg hover:border-cyan-500/40 hover:text-white transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* Security & Compliance Highlights Card */}
              <div className="bg-gradient-to-br from-cyan-950/40 to-slate-900/60 border border-cyan-800/40 rounded-2xl p-6">
                <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-300 font-bold mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  Compliance & Security
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["SOC2 Type II", "HIPAA Ready", "GDPR / CCPA", "Zero Data Retention", "Private VPC Air-Gap", "AES-256 Encryption"].map((cert, cIdx) => (
                    <span
                      key={cIdx}
                      className="text-xs font-medium text-cyan-200 bg-cyan-950/70 border border-cyan-700/60 px-3 py-1.5 rounded-lg"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ FAQ ACCORDION ════════════ */}
        <section className="mb-28 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-3">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Got technical or operational questions about deploying enterprise AI agents? Here are the answers.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-slate-700"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-semibold text-white hover:text-cyan-400 transition-colors"
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-cyan-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ════════════ BOTTOM CONVERSION CTA ════════════ */}
        <section className="mb-12">
          <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 bg-gradient-to-r from-cyan-950/60 via-slate-900 to-blue-950/60 p-8 sm:p-14 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-700/60 text-cyan-300 text-xs font-mono">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                Launch Your AI Readiness Assessment
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
                Ready to Deploy Autonomous AI Agent Swarms?
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                Schedule a 45-minute discovery session with our Lead AI Architects. We will evaluate your data pipelines, determine optimal agent topologies (LangGraph / RAG), and prepare a custom POC roadmap.
              </p>

              <div className="flex flex-wrap gap-4 justify-center pt-2">
                <Button
                  variant="gradient"
                  size="lg"
                  onClick={() => openConsultationModal("Enterprise AI & LangGraph Discovery")}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Schedule AI Architecture Call
                </Button>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Contact Enterprise Sales
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 pt-4">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Free Architecture Blueprint
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Signed Enterprise NDA
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" /> 2-Week Working POC
                </span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
