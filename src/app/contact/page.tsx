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
            <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-5">
              <h3 className="text-xl font-bold font-heading text-white">Contact Innovtec Direct</h3>
              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-cyan shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400 font-mono uppercase">Direct Phone / WhatsApp</div>
                    <a href="tel:+8801773893339" className="font-bold text-white hover:text-brand-cyan transition-colors text-base">+880 1773-893339</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-cyan shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400 font-mono uppercase">Official Email Address</div>
                    <a href="mailto:info@innovtec.it.com" className="font-bold text-white hover:text-brand-cyan transition-colors text-base">info@innovtec.it.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-400 font-mono uppercase">Business Hours</div>
                    <div className="font-medium text-slate-200">Sun – Thu: 9:00 AM – 6:00 PM</div>
                    <div className="text-xs text-slate-400">24/7 Technical Support for SaaS Managed Clients</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-heading text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-purple-400" /> Corporate Office Locations
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-2">
                  <div className="text-xs font-mono font-bold text-purple-400 uppercase">Bangladesh Head Office</div>
                  <div className="text-sm font-bold text-white font-heading">Dhaka Office</div>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    House 26/A, Level 4,5,<br />Uttara, Dhaka – 1230
                  </div>
                  <div className="pt-2 text-xs text-brand-cyan font-mono">+880 1773-893339</div>
                </div>

                <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-2">
                  <div className="text-xs font-mono font-bold text-cyan-400 uppercase">United Kingdom Office</div>
                  <div className="text-sm font-bold text-white font-heading">UK Office</div>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    Wellesley House, 102 Cranbrook Road,<br />Ilford IG1 4NH, UK
                  </div>
                  <div className="pt-2 text-xs text-brand-cyan font-mono">info@innovtec.it.com</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
