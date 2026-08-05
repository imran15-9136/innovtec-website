import { 
  ServiceItem, 
  ProductItem, 
  CaseStudy, 
  InsightArticle, 
  CareerPosition, 
  ConsultationLead 
} from "@/types";

export const SERVICES: ServiceItem[] = [
  {
    id: "ai-engineering",
    slug: "artificial-intelligence",
    title: "Artificial Intelligence & ML",
    tagline: "Transform business logic with enterprise LLMs, RAG, and custom AI agents.",
    shortDescription: "We build custom LLM applications, RAG pipelines, computer vision models, and autonomous AI agents designed for high accuracy and compliance.",
    fullDescription: "Innovtec empowers enterprise organizations to leverage state-of-the-art artificial intelligence. From private fine-tuned LLMs and vector search RAG systems to predictive analytics engine and intelligent automation agents, we turn complex data into actionable intelligence.",
    iconName: "Brain",
    category: "Artificial Intelligence",
    businessProblems: [
      "Manual document parsing causing operational bottlenecks",
      "High customer support response latency and operational cost",
      "Unstructured data sitting unutilized in enterprise data lakes",
      "Lack of real-time predictive insights for demand forecasting"
    ],
    capabilities: [
      "Retrieval-Augmented Generation (RAG) Architecture",
      "Autonomous Multi-Agent Systems & Orchestration",
      "Custom Fine-Tuning of Open-Source Models (Llama 3, Mistral)",
      "Document Intelligence & High-Accuracy OCR Pipelines",
      "Voice AI & Real-Time Conversational Interfaces",
      "Predictive Analytics & Anomaly Detection Models"
    ],
    deliverables: [
      "Enterprise Private Vector Store & Knowledge Base",
      "Fine-tuned LLM API endpoints with safety guardrails",
      "Custom AI Admin Dashboard & Performance Telemetry",
      "Full API documentation and SDK integration packages"
    ],
    techStack: ["PyTorch", "TensorFlow", "LangChain", "LlamaIndex", "Pinecone", "Qdrant", "OpenAI API", "Hugging Face"],
    faqs: [
      {
        question: "How do you ensure enterprise data privacy with AI models?",
        answer: "We deploy open-source models within your private VPC (AWS/Azure/GCP) or integrate strict zero-retention API contracts with zero data leakage to third-party providers."
      },
      {
        question: "What is the typical timeline for an AI RAG POC?",
        answer: "Our team delivers fully functional, enterprise-validated RAG prototypes within 2 to 4 weeks."
      }
    ]
  },
  {
    id: "software-dev",
    slug: "custom-software-development",
    title: "Custom Software Development",
    tagline: "High-scale web, mobile, and microservices engineered for zero downtime.",
    shortDescription: "End-to-end custom application development using modern frameworks, microservices architecture, and clean code standards.",
    fullDescription: "We build modern, scalable software tailored to your specific operational workflows. Our modern stack approach guarantees security, ultra-fast performance, and modular growth as your company expands globally.",
    iconName: "Code2",
    category: "Custom Software Development",
    businessProblems: [
      "Legacy monolithic systems incapable of scaling with user growth",
      "High software maintenance costs due to technical debt",
      "Slow release cycles and fragile deployment pipelines",
      "Poor user engagement caused by outdated, non-responsive interfaces"
    ],
    capabilities: [
      "Full-Stack Web & Mobile App Development",
      "Microservices & Serverless Architecture",
      "High-Throughput API Gateway Engineering",
      "Event-Driven Architecture (Kafka / RabbitMQ)",
      "Legacy Codebase Modernization & Migration",
      "Domain-Driven Design (DDD)"
    ],
    deliverables: [
      "Production-ready Next.js / Node.js codebase with 90%+ test coverage",
      "Interactive Figma Design System & Component Library",
      "CI/CD deployment scripts and infrastructure blueprints",
      "Comprehensive API documentation (OpenAPI / Swagger)"
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "Go", "Python", "React Native", "GraphQL", "PostgreSQL"],
    faqs: [
      {
        question: "Do you provide code ownership to our team upon completion?",
        answer: "Yes, 100% of the IP, source code, design assets, and deployment keys belong to your organization."
      }
    ]
  },
  {
    id: "enterprise-apps",
    slug: "enterprise-applications",
    title: "Enterprise Applications",
    tagline: "Robust ERP, CRM, and business orchestration systems for high reliability.",
    shortDescription: "Custom enterprise resource planning, customer relationship management, and workflow automation tailored to complex business requirements.",
    fullDescription: "Innovtec builds mission-critical enterprise applications designed to streamline cross-departmental operations, integrate legacy software, and enforce military-grade compliance.",
    iconName: "Building2",
    category: "Enterprise Applications",
    businessProblems: [
      "Siloed communication across sales, operations, and finance teams",
      "Inflexible off-the-shelf software requiring expensive customization",
      "Manual multi-system data entry leading to errors and delays"
    ],
    capabilities: [
      "Custom ERP & Supply Chain Management Modules",
      "Enterprise CRM & Sales Pipeline Engines",
      "Role-Based Access Control (RBAC) & Single Sign-On (SSO)",
      "Real-Time Business Intelligence & Operational Dashboards",
      "Automated Compliance & Audit Logging"
    ],
    deliverables: [
      "Custom Enterprise Web & Mobile Platform",
      "Real-time Analytics Dashboard with Automated PDF Export",
      "SSO Integration (Okta, Azure AD, Auth0)",
      "Staff Training & 24/7 SLA Support Plan"
    ],
    techStack: ["Java Spring Boot", ".NET Core", "React", "PostgreSQL", "Redis", "Kafka", "Docker"],
    faqs: [
      {
        question: "Can your custom ERP integrate with our existing accounting software?",
        answer: "Yes, we build robust REST/GraphQL connectors for SAP, QuickBooks, NetSuite, Salesforce, and custom legacy databases."
      }
    ]
  },
  {
    id: "cloud-engineering",
    slug: "cloud-engineering",
    title: "Cloud Engineering & Migration",
    tagline: "Cloud-native architectures engineered for speed, elasticity, and cost efficiency.",
    shortDescription: "Architecting, migrating, and optimizing multi-cloud environments across AWS, Google Cloud, and Microsoft Azure.",
    fullDescription: "We design resilient cloud foundations that scale effortlessly while keeping cloud infrastructure costs under strict control through FinOps best practices.",
    iconName: "Cloud",
    category: "Cloud Engineering",
    businessProblems: [
      "Spiral cloud hosting costs without clear resource attribution",
      "Server outages during peak user traffic spikes",
      "Vendor lock-in with brittle server configurations"
    ],
    capabilities: [
      "AWS / GCP / Azure Infrastructure Design",
      "Cloud Migration & Application Refactoring",
      "FinOps & Cloud Cost Optimization (30-50% savings)",
      "Serverless Architecture & Kubernetes Orchestration",
      "Disaster Recovery & Multi-Region Failover Setup"
    ],
    deliverables: [
      "Terraform / CloudFormation Infrastructure as Code (IaC)",
      "Kubernetes Cluster Architecture & Helm Charts",
      "Cost Monitoring & Alerting Dashboards",
      "Disaster Recovery SLA Runbooks"
    ],
    techStack: ["AWS", "Google Cloud", "Azure", "Kubernetes", "Terraform", "Docker", "Helm", "Cloudflare"],
    faqs: [
      {
        question: "How do you avoid downtime during live cloud migrations?",
        answer: "We implement blue/green and canary deployment strategies with shadow database replication to ensure zero customer downtime."
      }
    ]
  },
  {
    id: "devops",
    slug: "devops",
    title: "DevOps & SRE Services",
    tagline: "Automated CI/CD, zero-downtime deployments, and 99.99% uptime engineering.",
    shortDescription: "Transforming engineering pipelines with automated build scripts, observability platforms, and Site Reliability Engineering practices.",
    fullDescription: "Accelerate your code release velocity from months to minutes. We implement continuous integration, automated canary deployments, and proactive APM monitoring.",
    iconName: "GitBranch",
    category: "DevOps",
    businessProblems: [
      "Slow, manual deployment processes prone to human error",
      "Lack of real-time monitoring leads to delayed incident recovery",
      "Environment inconsistency between staging and production"
    ],
    capabilities: [
      "Automated CI/CD Pipeline Construction (GitHub Actions, GitLab, ArgoCD)",
      "Infrastructure as Code (IaC) Automation",
      "Full Observability Setup (Prometheus, Grafana, Datadog)",
      "GitOps Deployment Workflows",
      "Site Reliability Engineering (SRE) & Incident Response Automation"
    ],
    deliverables: [
      "Fully automated CI/CD pipeline configuration",
      "Grafana Monitoring Dashboards with PagerDuty Alerts",
      "Automated Security Scanning (SAST/DAST) in Pipeline"
    ],
    techStack: ["GitHub Actions", "ArgoCD", "Prometheus", "Grafana", "Datadog", "Ansible", "Kubernetes"],
    faqs: [
      {
        question: "Can you help our team transition to GitOps?",
        answer: "Absolutely. We set up ArgoCD or Flux to enforce git-driven infrastructure synchronization across all environments."
      }
    ]
  },
  {
    id: "iot-solutions",
    slug: "iot-solutions",
    title: "IoT & Embedded Systems",
    tagline: "Connecting edge devices, sensors, and intelligent cloud telematics.",
    shortDescription: "End-to-end Internet of Things platform development, firmware engineering, MQTT messaging, and real-time edge telemetry processing.",
    fullDescription: "From smart factory sensor networks to fleet telematics and smart retail devices, Innovtec builds high-scale IoT gateways capable of ingesting millions of telemetry streams per second.",
    iconName: "Cpu",
    category: "IoT Solutions",
    businessProblems: [
      "Inability to monitor remote hardware assets in real time",
      "High network latency when transmitting raw telemetry data to cloud",
      "Security vulnerabilities in embedded IoT firmware"
    ],
    capabilities: [
      "IoT Edge Computing & Embedded Firmware (C/C++, Rust)",
      "MQTT & CoAP High-Throughput Broker Architecture",
      "Real-Time Telemetry & Sensor Analytics Dashboards",
      "Over-The-Air (OTA) Secure Firmware Update Systems",
      "Hardware Security & Mutual TLS Device Authentication"
    ],
    deliverables: [
      "Custom Firmware Package with OTA capabilities",
      "Scalable Cloud Ingestion Gateway (100k+ msg/sec)",
      "Mobile & Web Asset Tracking Dashboard"
    ],
    techStack: ["AWS IoT Core", "EMQX", "Rust", "C++", "Python", "InfluxDB", "Grafana", "Node-RED"],
    faqs: [
      {
        question: "How do you handle remote device updates safely?",
        answer: "We use cryptographically signed dual-bank OTA updates with automatic hardware rollback on update failure."
      }
    ]
  },
  {
    id: "cyber-security",
    slug: "cyber-security",
    title: "Cyber Security & Compliance",
    tagline: "Proactive threat intelligence, penetration testing, and zero-trust security.",
    shortDescription: "Safeguard your enterprise with continuous vulnerability management, SOC 2 / ISO 27001 readiness, penetration testing, and zero-trust architecture.",
    fullDescription: "We protect your data assets against cyber threats through comprehensive penetration testing, security audits, encryption protocols, and SOC 2/ISO compliance enforcement.",
    iconName: "ShieldCheck",
    category: "Cyber Security",
    businessProblems: [
      "Uncertainty regarding compliance readiness (SOC 2, ISO 27001, HIPAA)",
      "Vulnerability to ransomware and API authorization exploits",
      "Lack of centralized security incident logging"
    ],
    capabilities: [
      "Penetration Testing & API Vulnerability Assessment",
      "Zero-Trust Architecture & IAM Engineering",
      "SOC 2 / ISO 27001 / HIPAA Compliance Acceleration",
      "Real-Time SIEM & Log Monitoring",
      "Secure Code Audit & SAST/DAST Pipeline Integration"
    ],
    deliverables: [
      "Full Security Audit & Vulnerability Remediation Report",
      "SOC 2 Type II Readiness Matrix & Artifact Package",
      "Automated Security Pipeline Integration"
    ],
    techStack: ["Wazuh", "Snyk", "SonarQube", "HashiCorp Vault", "AWS GuardDuty", "OWASP ZAP"],
    faqs: [
      {
        question: "Do you assist with getting SOC 2 certified?",
        answer: "Yes, we prepare your technical controls, policies, and continuous evidence collection so your audit is fast and stress-free."
      }
    ]
  },
  {
    id: "digital-transformation",
    slug: "digital-transformation",
    title: "Digital Transformation & AI Consulting",
    tagline: "Strategic roadmap for modernizing legacy business models with modern AI.",
    shortDescription: "Strategic technology advisory, enterprise architecture refactoring, and AI adoption frameworks for business leaders.",
    fullDescription: "Innovtec acts as your fractional CTO and elite engineering team to redesign business processes, adopt cloud & AI technology, and drive measurable ROI.",
    iconName: "Zap",
    category: "Digital Transformation",
    businessProblems: [
      "Fragmented digital tools causing operational friction",
      "Unsure how to integrate Generative AI safely into daily operations",
      "Lack of in-house technical strategy for modernizing legacy processes"
    ],
    capabilities: [
      "Enterprise Tech Stack Audit & Modernization Roadmap",
      "AI ROI Feasibility & Strategy Workshops",
      "Data Governance & Master Data Architecture",
      "Change Management & Technical Upskilling"
    ],
    deliverables: [
      "Complete 3-Year Technology & AI Roadmap",
      "Target Architecture Blueprint (TDD)",
      "Executive Board Presentation Deck"
    ],
    techStack: ["Figma", "Miro", "Enterprise Architect", "Tableau", "Databricks"],
    faqs: [
      {
        question: "What does an AI Strategy Workshop look like?",
        answer: "We spend 3 days interviewing key stakeholders, auditing data pipelines, and presenting a prioritized list of high-ROI AI use cases with exact cost estimates."
      }
    ]
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: "innov-crm",
    slug: "innov-crm",
    name: "InnovCRM",
    tagline: "The Complete CRM Solution for Education Consultancy Organizations",
    description: "Specifically designed for education consultancy agencies helping students apply for higher education in the UK, EU, Australia, Canada, USA, and New Zealand. Jointly developed by Innovtec (Technical Partner) and Neuron Educare (Business Analyst).",
    badge: "EdTech SaaS Platform",
    status: "Live",
    features: [
      "End-to-End Student Application & Compliance Management",
      "Automated Sub-Agent Commission Payable & Receivable Engine",
      "Reference Counselor Assignment & Multi-Branch Hierarchy",
      "Dedicated Self-Service Student Portal & Agent Portal",
      "Real-Time Application Tracking & Country-Wise Compliance Rules",
      "Email Integration, Real-Time Notifications & Automated Lead Follow-ups"
    ],
    targetAudience: [
      "Education Consultancy Agencies",
      "Student Recruitment Firms",
      "Higher Education Advisory Groups",
      "Multi-Branch Study Abroad Agencies"
    ],
    techStack: ["ASP.NET Core API", "Angular Frontend", "MS SQL Server", "Amazon Web Services (AWS)", "S3 Compatible Blob Storage"],
    metrics: [
      { label: "Target Study Regions", value: "UK, EU, AU, CA, US, NZ" },
      { label: "Sub-Agent Commission Processing", value: "100% Automated" },
      { label: "Client Server Deployment", value: "Never (AWS SaaS Managed)" }
    ],
    demoUrl: "https://innovcrm.innovtec.ai",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000"
    ]
  },
  {
    id: "ai-automation-platform",
    slug: "ai-automation-platform",
    name: "InnovAI Orchestrator",
    tagline: "Autonomous AI Agent & Multi-Model Workflow Platform",
    description: "Build, test, and deploy multi-agent AI workflows visually. Connect your enterprise databases directly to fine-tuned LLMs with built-in guardrails.",
    badge: "AI Platform",
    status: "Live",
    features: [
      "Drag-and-Drop Visual Agent Pipeline Canvas",
      "Multi-Vector RAG Engine with Real-Time Data Sync",
      "Enterprise Guardrails for PII Redaction & Hallucination Prevention",
      "One-Click Deploy to Cloud VPC or On-Premise Servers",
      "Detailed Token Usage & Cost Telemetry"
    ],
    targetAudience: ["CTOs", "Data Science Teams", "Operations Leads", "Fintech Organizations"],
    techStack: ["Python", "FastAPI", "React", "Pinecone", "LangChain", "Kubernetes"],
    metrics: [
      { label: "Document Processing Speed", value: "10x Faster" },
      { label: "Hallucination Reduction", value: "99.4%" },
      { label: "API Latency", value: "<150ms" }
    ],
    demoUrl: "https://orchestrator.innovtec.ai",
    screenshots: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000"
    ]
  },
  {
    id: "student-management-system",
    slug: "student-management-system",
    name: "EduPulse SMS",
    tagline: "Modern Campus Operations & AI Student Analytics Platform",
    description: "Comprehensive institutional software for universities, schools, and training academies. Tracks student attendance, grades, finance, and career pathways.",
    badge: "EdTech Platform",
    status: "Live",
    features: [
      "AI Early-Warning System for At-Risk Student Dropouts",
      "Automated Grading Assistant & Quiz Generator",
      "Integrated Student Portal & Mobile App",
      "Fee Management & Multi-Gateway Billing",
      "Parent Engagement Portal with Real-Time Push Alerts"
    ],
    targetAudience: ["Universities", "K-12 Private Schools", "Corporate Training Academies"],
    techStack: ["Java Spring Boot", "React Native", "PostgreSQL", "Docker", "AWS"],
    metrics: [
      { label: "Student Retention", value: "+28%" },
      { label: "Grading Efficiency", value: "+60%" },
      { label: "Active Institutions", value: "45+" }
    ],
    demoUrl: "https://edupulse.innovtec.ai",
    screenshots: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000"
    ]
  },
  {
    id: "notification-platform",
    slug: "notification-platform",
    name: "PulseNotify Engine",
    tagline: "High-Throughput Omnichannel Push, Email & SMS Gateway",
    description: "Enterprise notification engine capable of routing 1,000,000+ transactional notifications per minute across Email, SMS, WhatsApp, Push, and Webhooks.",
    badge: "Developer Infrastructure",
    status: "Live",
    features: [
      "Smart Fallback Routing (SMS -> WhatsApp -> Push -> Email)",
      "Visual Drag-and-Drop Template Designer with Localization",
      "Sub-Second Transactional Delivery Engine",
      "Real-Time Delivery Logs & Bounced Email Suppression",
      "SDKs for Node.js, Python, Go, Java, and PHP"
    ],
    targetAudience: ["Developers", "E-Commerce Platforms", "Logistics Apps", "Fintech Banks"],
    techStack: ["Go", "Kafka", "Redis", "ClickHouse", "React"],
    metrics: [
      { label: "Delivery Success Rate", value: "99.98%" },
      { label: "Peak Message Capacity", value: "1.2M / min" }
    ],
    demoUrl: "https://pulsenotify.innovtec.ai",
    screenshots: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000"
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "global-health-rag",
    slug: "ai-medical-rag-platform",
    clientName: "Aethel Health Corp",
    clientIndustry: "Healthcare",
    title: "Deploying Private AI Knowledge Base for 5,000+ Medical Clinicians",
    summary: "Built a HIPAA-compliant medical RAG search engine that reduced clinical research time by 75% across 12 hospitals.",
    challenge: "Doctors and clinical researchers spent over 2 hours daily searching through 500,000+ un-indexed PDF clinical trial papers and medical guidelines.",
    solution: "Innovtec engineered a private vector store using Qdrant and Llama 3 fine-tuned on medical ontologies. Includes strict role-based access and citation verification.",
    architectureOverview: "PDF Ingestion -> Hybrid Chunking Engine -> Embedding Generation (BioBERT) -> Qdrant Vector DB -> Llama 3 Fine-Tuned API -> Next.js Clinician UI",
    results: [
      { metric: "75%", label: "Reduction in Research Time" },
      { metric: "<1.2s", label: "Query Response Time" },
      { metric: "99.2%", label: "Citation Accuracy" }
    ],
    techStack: ["Python", "Qdrant", "Llama 3", "Next.js", "AWS MedTech VPC"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000",
    featured: true
  },
  {
    id: "fintech-microservices",
    slug: "fintech-core-banking-modernization",
    clientName: "NexGen Financial",
    clientIndustry: "Finance",
    title: "Migrating Legacy Banking Monolith to Event-Driven Microservices",
    summary: "Refactored a 15-year-old banking backend to Go microservices, handling $2.4B in annual transaction volume with 99.999% uptime.",
    challenge: "System slowdowns during peak trading hours and legacy codebase preventing the launch of new mobile banking features.",
    solution: "Architected a zero-downtime event-driven infrastructure using Apache Kafka and Go services on Kubernetes.",
    architectureOverview: "API Gateway (Kong) -> Go Microservices -> Apache Kafka Event Bus -> PostgreSQL Sharded Clusters -> Redis Cache",
    results: [
      { metric: "99.999%", label: "System Uptime" },
      { metric: "-65%", label: "Infrastructure Expenses" },
      { metric: "12x", label: "Faster Deployment Cycles" }
    ],
    techStack: ["Go", "Kafka", "Kubernetes", "PostgreSQL", "Datadog"],
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1000",
    featured: true
  },
  {
    id: "iot-smart-factory",
    slug: "iot-smart-factory-telematics",
    clientName: "Vanguard Manufacturing",
    clientIndustry: "Manufacturing",
    title: "Real-Time IoT Predictive Maintenance for 1,200 Assembly Robotics",
    summary: "Ingested 50,000 telemetry sensor signals per second to predict machine failures before they occurred, preventing $4.2M in annual factory downtime.",
    challenge: "Unexpected assembly line machine breakdowns caused severe manufacturing delays and emergency repair expenses.",
    solution: "Deployed MQTT edge gateways with anomaly detection ML models connected to an enterprise Grafana monitoring dashboard.",
    architectureOverview: "Factory Edge Sensors -> MQTT Broker (EMQX) -> Apache Flink Stream Processor -> InfluxDB -> Predictive ML Model -> Operations Dashboard",
    results: [
      { metric: "$4.2M", label: "Downtime Cost Saved" },
      { metric: "48 hrs", label: "Advance Anomaly Alert" },
      { metric: "50k/sec", label: "Telemetry Throughput" }
    ],
    techStack: ["Rust", "MQTT", "InfluxDB", "Python ML", "AWS IoT Core"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000",
    featured: true
  },
  {
    id: "retail-omnichannel",
    slug: "omnichannel-ecommerce-transformation",
    clientName: "LuxeRetail Group",
    clientIndustry: "Retail",
    title: "Headless E-Commerce Platform Modernization for 2M Monthly Shoppers",
    summary: "Replaced legacy storefront with Next.js App Router and Shopify Headless APIs, boosting mobile conversion rate by 42%.",
    challenge: "Slow page load times (5.4s) on mobile devices causing high cart abandonment.",
    solution: "Engineered ultra-fast static + server-side rendered storefront hosted on Vercel Edge Network with sub-second page loads.",
    architectureOverview: "Next.js App Router -> Shopify Storefront GraphQL API -> Vercel Edge Functions -> Stripe Payments",
    results: [
      { metric: "0.8s", label: "Page Load Speed" },
      { metric: "+42%", label: "Mobile Conversion Rate" },
      { metric: "+310%", label: "Black Friday Spike Traffic Handled" }
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Shopify API", "Vercel"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000",
    featured: false
  }
];

export const INSIGHTS: InsightArticle[] = [
  {
    id: "rag-vs-finetuning-2026",
    slug: "rag-vs-fine-tuning-enterprise-guide",
    title: "RAG vs Fine-Tuning: Architectural Strategy for Enterprise AI in 2026",
    excerpt: "When should your organization invest in custom LLM fine-tuning versus deploying a multi-vector RAG architecture? A comprehensive technical comparison.",
    content: `
# RAG vs Fine-Tuning: Architectural Strategy for Enterprise AI

As generative AI matures into core enterprise software, engineering leaders face a crucial architectural decision: **Should we fine-tune an open-source model or implement a Retrieval-Augmented Generation (RAG) system?**

## The Core Trade-Offs

### 1. Knowledge Recency
- **RAG**: Ideal for rapidly changing data. RAG queries your vector database in real-time, fetching live documents before prompt execution.
- **Fine-Tuning**: Embeds static knowledge into model weights. Requiring retraining every time underlying business rules change.

### 2. Hallucination Guardrails
- **RAG**: Provides explicit citation trails back to source documents, drastically reducing unverified model assertions.
- **Fine-Tuning**: Improves style, domain terminology, and formatting, but remains vulnerable to factual hallucinations if unsupported.

## Recommended Hybrid Architecture

At **Innovtec**, we recommend a hybrid pattern:
1. Use **Fine-Tuning** to train lightweight open-source models (e.g. Llama 3 8B) on your specific output formats, terminology, and JSON schemas.
2. Layer a **Multi-Vector RAG** pipeline on top of the fine-tuned model to provide dynamic, live enterprise context.

This dual approach yields **<150ms inference times**, zero factual hallucinations, and 70% lower cloud API costs compared to proprietary closed models.
    `,
    category: "AI",
    author: {
      name: "Dr. Sarah Jenkins",
      role: "Head of AI Architecture",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200"
    },
    publishedAt: "Aug 02, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000",
    status: "Published",
    featured: true
  },
  {
    id: "kubernetes-finops",
    slug: "kubernetes-cost-optimization-finops",
    title: "Slashing Kubernetes Cloud Bills by 45% Without Sacrificing Reliability",
    excerpt: "Practical tactics for cluster auto-scaling, spot instance orchestration, and right-sizing memory requests in production environments.",
    content: `
# Slashing Kubernetes Cloud Bills by 45%

Cloud spending in Kubernetes clusters often spirals due to over-provisioned CPU and memory requests. Here are 4 engineering practices Innovtec implements for enterprise clients:

## 1. Karpenter for Intelligent Node Provisioning
Replace generic Cluster Autoscaler with Karpenter on AWS to launch exact-sized EC2 instances within seconds based on pod resource requirements.

## 2. Spot Instance Mixed Node Groups
Utilize spot instances for stateless worker workloads with automated fallback to on-demand instances upon termination notices.

## 3. Horizontal & Vertical Pod Autoscaling
Combine HPA (traffic driven) and VPA (historical usage recommendation) to ensure pods scale efficiently without wasting idle memory.
    `,
    category: "DevOps",
    author: {
      name: "Alexandre Vane",
      role: "Principal Cloud & SRE Engineer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
    },
    publishedAt: "Jul 28, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1000",
    status: "Published",
    featured: true
  },
  {
    id: "zero-trust-microservices",
    slug: "zero-trust-architecture-microservices",
    title: "Implementing Zero-Trust Security in Event-Driven Microservices",
    excerpt: "How to enforce mTLS, short-lived JWT tokens, and fine-grained SPIFFE/SPIRE identity across distributed cloud workloads.",
    content: `
# Implementing Zero-Trust Security in Microservices

Perimeter security is obsolete. In modern cloud-native systems, every microservice must treat incoming requests as untrusted.

## Key Pillars of Zero-Trust
1. **Mutual TLS (mTLS)**: Encrypt all inter-service communication with automatic certificate rotation via Istio or Linkerd.
2. **Cryptographic Identity**: Issue short-lived SVID certificates using SPIFFE/SPIRE to authenticate workloads dynamically.
3. **Continuous API Authorization**: Validate scopes and user permissions at every microservice hop using Open Policy Agent (OPA).
    `,
    category: "Cyber Security",
    author: {
      name: "Marcus Thorne",
      role: "Director of Cyber Security",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200"
    },
    publishedAt: "Jul 21, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000",
    status: "Published",
    featured: false
  }
];

export const CAREERS: CareerPosition[] = [
  {
    id: "senior-ai-engineer",
    title: "Senior AI & RAG Engineer",
    department: "Artificial Intelligence",
    location: "San Francisco, CA / Remote",
    type: "Full-Time",
    experience: "5+ years",
    description: "We are seeking a seasoned AI engineer experienced in building high-scale RAG systems, vector search, and fine-tuning open-source LLMs.",
    requirements: [
      "Deep expertise with Python, PyTorch, LangChain, and LlamaIndex",
      "Production experience with vector databases (Qdrant, Pinecone, Milvus)",
      "Strong understanding of model evaluation metrics (RAGAS, BLEU, ROUGE)",
      "Background in deploying models via FastAPI, Docker, and Kubernetes"
    ],
    responsibilities: [
      "Architect private enterprise AI knowledge engines for global clients",
      "Fine-tune domain-specific LLMs for high accuracy and compliance",
      "Collaborate with product managers and security auditors"
    ],
    status: "Open"
  },
  {
    id: "principal-fullstack-dev",
    title: "Principal Next.js / Full-Stack Architect",
    department: "Product Engineering",
    location: "New York, NY / Hybrid",
    type: "Full-Time",
    experience: "7+ years",
    description: "Lead technical architecture for enterprise web platforms using Next.js 14/15, TypeScript, Node.js, and modern cloud databases.",
    requirements: [
      "Expert knowledge of Next.js App Router, Server Components, and React 18",
      "Strong proficiency with TypeScript, Tailwind CSS, and Framer Motion",
      "Experience designing high-throughput REST and GraphQL APIs",
      "Proven track record of mentoring senior developers"
    ],
    responsibilities: [
      "Design reusable design systems and high-performance frontends",
      "Define software engineering standards across client project teams"
    ],
    status: "Open"
  },
  {
    id: "lead-devops-sre",
    title: "Lead DevOps & SRE Engineer",
    department: "Cloud Engineering",
    location: "Remote (Global)",
    type: "Remote",
    experience: "6+ years",
    description: "Own cloud infrastructure, CI/CD automation, and site reliability engineering across multi-cloud environments.",
    requirements: [
      "Expertise with Terraform, Kubernetes, Helm, and AWS/GCP services",
      "Proficiency with CI/CD tools (GitHub Actions, ArgoCD)",
      "Hands-on experience with Prometheus, Grafana, and Datadog APM"
    ],
    responsibilities: [
      "Implement zero-downtime deployment pipelines for client platforms",
      "Conduct cloud cost audits and enforce FinOps best practices"
    ],
    status: "Open"
  }
];

export const INITIAL_LEADS: ConsultationLead[] = [
  {
    id: "lead-101",
    fullName: "Elena Rostova",
    email: "elena.rostova@medtechsolutions.io",
    companyName: "MedTech Solutions",
    phone: "+1 (555) 234-5678",
    serviceCategory: "Artificial Intelligence",
    estimatedBudget: "$50k - $100k",
    projectDescription: "We need an AI RAG knowledge system to help our radiology specialists query patient scan archives using natural language.",
    source: "AI Assistant",
    status: "New",
    createdAt: "2026-08-04T14:32:00Z"
  },
  {
    id: "lead-102",
    fullName: "David Chen",
    email: "dchen@apexlogistics.com",
    companyName: "Apex Logistics Global",
    phone: "+1 (555) 876-5432",
    serviceCategory: "Custom Software Development",
    estimatedBudget: "$100k - $250k",
    projectDescription: "Looking to replace our legacy dispatch software with a real-time Next.js and Go microservices platform.",
    source: "Website Form",
    status: "In Discovery",
    createdAt: "2026-08-03T09:15:00Z"
  },
  {
    id: "lead-103",
    fullName: "Sarah Jenkins",
    email: "s.jenkins@fintechcap.com",
    companyName: "FinTech Capital",
    serviceCategory: "Cloud Engineering",
    estimatedBudget: "$25k - $50k",
    projectDescription: "Cloud migration and Kubernetes FinOps audit to reduce our current AWS monthly expenditure.",
    source: "Website Form",
    status: "Contacted",
    createdAt: "2026-08-02T16:45:00Z"
  },
  {
    id: "lead-104",
    fullName: "Michael Miller",
    email: "mmiller@edulearn.org",
    companyName: "EduLearn Academy",
    serviceCategory: "Enterprise Applications",
    estimatedBudget: "$50k - $100k",
    projectDescription: "Deployment request for EduPulse Student Management System with custom LMS integration.",
    source: "AI Assistant",
    status: "Proposal Sent",
    createdAt: "2026-08-01T11:20:00Z"
  }
];

export const TECH_CATEGORIES = [
  {
    name: "AI & ML",
    items: ["PyTorch", "TensorFlow", "LangChain", "LlamaIndex", "Pinecone", "Qdrant", "OpenAI", "Hugging Face", "Ollama"]
  },
  {
    name: "Frontend",
    items: ["Angular", "Next.js 14/15", "React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js"]
  },
  {
    name: "Backend & DB",
    items: ["ASP.NET Core API", "MS SQL Server", "Node.js", "Go", "Python (FastAPI)", "Java Spring Boot", "PostgreSQL"]
  },
  {
    name: "Cloud & DevOps",
    items: ["AWS (Amazon Web Services)", "S3 Blob Storage", "Kubernetes", "Docker", "Terraform", "GitHub Actions", "DigitalOcean"]
  },
  {
    name: "Databases & Storage",
    items: ["MS SQL Server", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Pinecone", "S3 Storage"]
  },
  {
    name: "Cyber Security & IoT",
    items: ["Wazuh", "Snyk", "Vault", "AWS IoT Core", "EMQX MQTT", "Rust", "C++ Embedded"]
  }
];
