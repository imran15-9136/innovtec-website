"use client";

import React, { useState, useEffect } from "react";
import { Modal } from "@/components/ui/Modal";
import { useApp } from "@/context/AppContext";
import { Button } from "@/components/ui/Button";
import { SERVICES } from "@/data/mockData";
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  Mail, 
  User, 
  DollarSign, 
  FileText 
} from "lucide-react";

export const ConsultationModal: React.FC = () => {
  const { 
    isConsultationModalOpen, 
    closeConsultationModal, 
    selectedModalService,
    addLead 
  } = useApp();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceCategory, setServiceCategory] = useState("");
  const [estimatedBudget, setEstimatedBudget] = useState("$50k - $100k");
  const [projectDescription, setProjectDescription] = useState("");
  
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedModalService) {
      setServiceCategory(selectedModalService);
    } else {
      setServiceCategory("Artificial Intelligence");
    }
  }, [selectedModalService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      addLead({
        fullName,
        email,
        companyName,
        phone,
        serviceCategory,
        estimatedBudget,
        projectDescription,
        source: "Website Form"
      });

      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName("");
    setEmail("");
    setCompanyName("");
    setPhone("");
    setProjectDescription("");
    closeConsultationModal();
  };

  return (
    <Modal
      isOpen={isConsultationModalOpen}
      onClose={handleReset}
      title={submitted ? "Consultation Request Received" : "Book Free Engineering Consultation"}
      subtitle={submitted ? "Our senior solutions architect will contact you within 4 hours." : "Schedule a 30-minute discovery call with Innovtec's technical leadership team."}
      maxWidth="lg"
    >
      {submitted ? (
        <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-full bg-brand-emerald/20 border border-brand-emerald/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl shadow-brand-emerald/10">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-2xl font-bold font-heading text-white">
            Thank You, {fullName}!
          </h4>
          <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            Your inquiry for <strong className="text-brand-cyan">{serviceCategory}</strong> has been logged into our enterprise dispatch system.
          </p>
          <div className="p-4 rounded-xl bg-space-950/80 border border-slate-800 text-xs text-slate-400 text-left space-y-1">
            <div><strong>Target Industry/Company:</strong> {companyName || "N/A"}</div>
            <div><strong>Estimated Budget:</strong> {estimatedBudget}</div>
            <div><strong>Contact Email:</strong> {email}</div>
          </div>
          <div className="pt-4">
            <Button variant="gradient" onClick={handleReset} className="w-full">
              Done
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1.5 flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-brand-cyan" /> Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Alex Mercer"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-space-950 border border-slate-700/80 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue"
              />
            </div>

            {/* Work Email */}
            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1.5 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-brand-cyan" /> Work Email *
              </label>
              <input
                type="email"
                required
                placeholder="alex@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-space-950 border border-slate-700/80 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Company Name */}
            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1.5 flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-brand-cyan" /> Company / Organization *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Acme Tech Inc."
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full bg-space-950 border border-slate-700/80 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue"
              />
            </div>

            {/* Service Category */}
            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1.5 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-brand-cyan" /> Primary Engineering Need *
              </label>
              <select
                value={serviceCategory}
                onChange={(e) => setServiceCategory(e.target.value)}
                className="w-full bg-space-950 border border-slate-700/80 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-blue"
              >
                {SERVICES.map((svc) => (
                  <option key={svc.id} value={svc.title}>
                    {svc.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Budget Range */}
          <div>
            <label className="text-xs font-medium text-slate-300 block mb-1.5 flex items-center gap-1">
              <DollarSign className="w-3.5 h-3.5 text-brand-cyan" /> Estimated Project Investment Range
            </label>
            <div className="grid grid-cols-4 gap-2">
              {["< $25k", "$25k - $50k", "$50k - $100k", "$100k+"].map((b) => (
                <button
                  type="button"
                  key={b}
                  onClick={() => setEstimatedBudget(b)}
                  className={`py-2 px-1 text-center rounded-lg text-xs font-medium transition-all ${
                    estimatedBudget === b
                      ? "bg-brand-blue text-white border border-brand-blue shadow-md"
                      : "bg-space-950 border border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Project Description */}
          <div>
            <label className="text-xs font-medium text-slate-300 block mb-1.5 flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-brand-cyan" /> Project Overview & Business Goals
            </label>
            <textarea
              rows={3}
              placeholder="Briefly describe what you would like to build or modernize..."
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              className="w-full bg-space-950 border border-slate-700/80 rounded-lg px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue resize-none"
            />
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="gradient"
              className="w-full py-3 text-base font-semibold"
              disabled={isSubmitting}
              icon={isSubmitting ? null : <Send className="w-4 h-4" />}
            >
              {isSubmitting ? "Submitting Request..." : "Schedule Free Discovery Call"}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
