"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useApp } from "@/context/AppContext";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Building2 
} from "lucide-react";

export default function ContactPage() {
  const { addLead } = useApp();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceCategory, setServiceCategory] = useState("Artificial Intelligence");
  const [projectDescription, setProjectDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead({
      fullName,
      email,
      companyName,
      phone,
      serviceCategory,
      estimatedBudget: "$50k - $100k",
      projectDescription,
      source: "Direct Contact"
    });
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 bg-space-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="blue">Connect With Innovtec</Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight">
            Let's Discuss Your <span className="text-gradient-blue">Next Project</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Have a project in mind, need an architectural audit, or interested in licensing an Innovtec product? We'd love to talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-6">
            <h2 className="text-2xl font-bold font-heading text-white">Send Us a Message</h2>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Message Logged!</h3>
                <p className="text-xs text-slate-300">Thank you {fullName}. A senior engineering director will reach out within 4 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">Full Name *</label>
                    <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="e.g. Sarah Connor" className="w-full bg-space-950 border border-slate-700/80 rounded-lg px-3 py-2 text-xs text-white" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">Work Email *</label>
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="sarah@company.com" className="w-full bg-space-950 border border-slate-700/80 rounded-lg px-3 py-2 text-xs text-white" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">Company / Organization *</label>
                    <input type="text" required value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Acme Corp" className="w-full bg-space-950 border border-slate-700/80 rounded-lg px-3 py-2 text-xs text-white" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">Phone Number</label>
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+1 (555) 000-0000" className="w-full bg-space-950 border border-slate-700/80 rounded-lg px-3 py-2 text-xs text-white" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Primary Area of Interest</label>
                  <select value={serviceCategory} onChange={(e) => setServiceCategory(e.target.value)} className="w-full bg-space-950 border border-slate-700/80 rounded-lg px-3 py-2 text-xs text-white">
                    <option value="Artificial Intelligence">Artificial Intelligence & RAG</option>
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="Cloud Engineering">Cloud Engineering & FinOps</option>
                    <option value="DevOps">DevOps & SRE Services</option>
                    <option value="IoT Solutions">IoT & Embedded Telematics</option>
                    <option value="Cyber Security">Cyber Security & Compliance</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Message / Requirements</label>
                  <textarea rows={4} required value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} placeholder="Tell us about your project or technical needs..." className="w-full bg-space-950 border border-slate-700/80 rounded-lg px-3 py-2 text-xs text-white resize-none" />
                </div>

                <Button type="submit" variant="gradient" className="w-full py-3" icon={<Send className="w-4 h-4" />}>
                  Send Inquiry
                </Button>
              </form>
            )}
          </div>

          {/* Contact Cards & Global Offices */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold font-heading text-white">Global Headquarters</h3>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-brand-cyan" /> 500 Howard Street, Suite 400, San Francisco, CA 94105</div>
                <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-brand-cyan" /> contact@innovtec.ai</div>
                <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-brand-cyan" /> +1 (800) 555-INNOV</div>
                <div className="flex items-center gap-3"><Clock className="w-4 h-4 text-brand-cyan" /> Mon – Fri: 8:00 AM – 6:00 PM PST</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-2">
                <div className="text-sm font-bold text-white font-heading">London Tech Hub</div>
                <div className="text-xs text-slate-400">100 Bishopsgate, London EC2N 4AG</div>
                <div className="text-[11px] text-brand-cyan">uk@innovtec.ai</div>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-2">
                <div className="text-sm font-bold text-white font-heading">Singapore Innovation Lab</div>
                <div className="text-xs text-slate-400">7 Straits View, Marina One, Singapore</div>
                <div className="text-[11px] text-brand-cyan">apac@innovtec.ai</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
