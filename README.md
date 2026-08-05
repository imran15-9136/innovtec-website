# innovtec-website

# Innovtec - AI-First Digital Engineering Corporate Website & Admin CMS Panel

Innovtec is a premier **AI-First Digital Engineering Company** positioning enterprise organizations for technology leadership through Artificial Intelligence, Enterprise Software, Cloud Engineering, DevOps, IoT, and Cyber Security.

---

## Features

### 1. Public Corporate Website (`/`)
- **Hero & Mesh Canvas**: Dynamic neural particle visualizer, metric counters, dual CTAs.
- **Ecosystem Marquee**: Continuous ticker of enterprise tech stack logos (AWS, GCP, Azure, OpenAI, PyTorch, Kubernetes, React, Docker, Kafka).
- **Core Engineering Services**: 8 rich capability cards (AI & RAG, Custom Software, Enterprise ERP/CRM, Cloud Engineering, DevOps, IoT, Cyber Security, Digital Transformation).
- **Industry Solutions**: Interactive tabs tailored for Education, Healthcare, Finance, Retail, Manufacturing, Government, Logistics, and Startups.
- **Proprietary SaaS Products**: InnovCRM, InnovAI Orchestrator, EduPulse SMS, and PulseNotify Engine.
- **AI Showcase**: Live interactive previews of Enterprise RAG, Autonomous AI Agents, Document OCR, Voice AI, and Predictive Analytics.
- **Portfolio & Case Studies**: Filterable case studies with metrics counters and architecture blueprints.
- **Legal & Compliance Pages**: Dedicated routes for `/privacy-policy`, `/compliance-policy`, `/terms-and-conditions`, and `/gdpr-compliance`.

### 2. Interactive AI Assistant ("Ask Innovtec AI")
- Floating widget pill + full interactive modal window.
- Interactive solution reasoning engine capable of estimating RAG project scope, recommending tech stacks, and logging consultation leads directly into the Admin Panel.

### 3. Admin Content Management System Panel (`/admin`)
- **Dashboard Overview (`/admin/dashboard`)**: Live executive stats, total leads count, proposal pipelines, and lead feed.
- **Consultation Lead Manager (`/admin/leads`)**: Full data table with search, status filters (New, Contacted, In Discovery, Proposal Sent, Closed), lead details modal drawer, and real-time status updates.
- **Insights Articles CMS (`/admin/insights`)**: Form editor to create, edit, draft, or publish whitepaper articles.
- **Portfolio CMS (`/admin/portfolio`)**: Interface to manage client case studies and ROI metrics.
- **Product Manager (`/admin/products`)**: Manage SaaS feature lists and live demo links.
- **System & AI Settings (`/admin/settings`)**: Modify AI core system prompt, model temperature, and lead dispatch email.

---

## Tech Stack

- **Framework**: Next.js 14/15 (App Router) & React 18
- **Language**: TypeScript
- **Database & ORM**: MongoDB Atlas & Mongoose ORM
- **Styling**: Tailwind CSS & Vanilla CSS Glassmorphism
- **Animations**: Framer Motion
- **Icons**: Lucide React

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/imran15-9136/innovtec-website.git
   cd innovtec-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Setup environment variables:
   Copy `.env.example` to `.env.local` and add your MongoDB Atlas connection string:
   ```env
   MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/innovtec-website?retryWrites=true&w=majority
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser:
   - **Public Website**: `http://localhost:3000`
   - **Admin CMS Panel**: `http://localhost:3000/admin`
