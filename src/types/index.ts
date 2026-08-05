export type Industry = 
  | "Education"
  | "Healthcare"
  | "Finance"
  | "Retail"
  | "Manufacturing"
  | "Government"
  | "Logistics"
  | "Startups";

export type ServiceCategory = 
  | "Artificial Intelligence"
  | "Custom Software Development"
  | "Enterprise Applications"
  | "Cloud Engineering"
  | "DevOps"
  | "IoT Solutions"
  | "Cyber Security"
  | "Digital Transformation"
  | "AI Automation"
  | "Product Engineering";

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  category: ServiceCategory;
  businessProblems: string[];
  capabilities: string[];
  deliverables: string[];
  techStack: string[];
  faqs: { question: string; answer: string }[];
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  status: "Live" | "Beta" | "Upcoming";
  features: string[];
  targetAudience: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  demoUrl?: string;
  screenshots: string[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  clientName: string;
  clientIndustry: Industry;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  architectureOverview: string;
  results: { metric: string; label: string }[];
  techStack: string[];
  image: string;
  featured: boolean;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "AI" | "Software Engineering" | "Cloud" | "DevOps" | "Cyber Security" | "IoT" | "Architecture";
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  image: string;
  status: "Published" | "Draft";
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  github?: string;
}

export interface CareerPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-Time" | "Remote" | "Hybrid";
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  status: "Open" | "Closed";
}

export interface ConsultationLead {
  id: string;
  fullName: string;
  email: string;
  companyName: string;
  phone?: string;
  serviceCategory: string;
  estimatedBudget: string;
  projectDescription: string;
  source: "Website Form" | "AI Assistant" | "Direct Contact";
  status: "New" | "Contacted" | "In Discovery" | "Proposal Sent" | "Closed";
  createdAt: string;
}

export interface AIMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
  options?: string[];
  actionLink?: {
    label: string;
    href: string;
  };
}
