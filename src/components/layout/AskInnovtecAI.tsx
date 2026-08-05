"use client";

import React, { useState, useRef, useEffect } from "react";
import { Modal } from "@/components/ui/Modal";
import { useApp } from "@/context/AppContext";
import { AIMessage } from "@/types";
import { Button } from "@/components/ui/Button";
import { 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  Brain, 
  Zap, 
  ArrowRight, 
  HelpCircle,
  Clock,
  CheckCircle
} from "lucide-react";

export const AskInnovtecAI: React.FC = () => {
  const { isAIModalOpen, closeAIModal, openConsultationModal, addLead } = useApp();

  const [messages, setMessages] = useState<AIMessage[]>([
    {
      id: "msg-1",
      sender: "ai",
      text: "Hello! I am **Innovtec AI Solution Assistant**. I can help you evaluate AI use cases, estimate project scope, explain our cloud & software capabilities, or connect you with our engineering leadership.",
      timestamp: "Just now",
      options: [
        "Estimate AI RAG Implementation Cost",
        "Recommend Tech Stack for SaaS Startup",
        "Explain InnovCRM Features",
        "Book Engineering Consultation"
      ]
    }
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isAIModalOpen) {
      scrollToBottom();
    }
  }, [messages, isAIModalOpen]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg: AIMessage = {
      id: `msg-${Date.now()}`,
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    // Simulate AI response reasoning engine
    setTimeout(() => {
      let aiResponseText = "";
      let options: string[] | undefined = undefined;
      let actionLink: { label: string; href: string } | undefined = undefined;

      const lower = text.toLowerCase();

      if (lower.includes("rag") || lower.includes("cost") || lower.includes("estimate")) {
        aiResponseText = "### AI RAG Implementation Overview & Investment\n\nFor enterprise RAG (Retrieval-Augmented Generation) Knowledge Systems, typical scope includes:\n- **Vector Database**: Qdrant or Pinecone multi-tenant setup\n- **Ingestion Pipeline**: Document parsing (PDFs, DOCX, Notion, SQL)\n- **Inference Engine**: Fine-tuned Llama 3 or GPT-4o API with PII redaction\n\n**Typical Timeline**: 3 to 5 weeks\n**Typical Budget**: $25,000 – $60,000 depending on custom connectors and security compliance.";
        options = ["Schedule Technical Discovery", "Explore Case Studies", "Ask about Cloud Security"];
      } else if (lower.includes("saas") || lower.includes("stack") || lower.includes("recommend")) {
        aiResponseText = "### Recommended Modern SaaS Tech Stack (2026)\n\n- **Frontend**: Next.js 14/15 App Router + Tailwind CSS + Framer Motion\n- **Backend**: Node.js microservices or Go for high throughput\n- **Database**: PostgreSQL (Supabase / AWS Aurora) + Redis Cache\n- **Deploy**: Vercel Edge Network + AWS ECS / EKS\n\nThis stack ensures 99.99% uptime, sub-second global latency, and seamless scale to 1M+ active users.";
        options = ["Book Consultation", "Explore Custom Software Dev"];
      } else if (lower.includes("crm") || lower.includes("innovcrm")) {
        aiResponseText = "### InnovCRM Platform Highlights\n\nInnovCRM is our proprietary AI-Powered CRM featuring:\n1. Autonomous Lead Scoring & Prospect Discovery\n2. AI Meeting Summarization & Action Item Extraction\n3. Omnichannel Messaging (Email, WhatsApp, LinkedIn)\n\nWould you like a live demo sandbox account?";
        options = ["Request InnovCRM Sandbox", "Book Consultation"];
      } else if (lower.includes("book") || lower.includes("consultation") || lower.includes("schedule")) {
        aiResponseText = "I can immediately prepare your consultation request for our engineering director! Would you like me to open our interactive booking calendar?";
        actionLink = { label: "Open Booking Form", href: "#consultation" };
      } else {
        aiResponseText = `Thank you for your question about **"${text}"**. At Innovtec, we specialize in Artificial Intelligence, Custom Software Development, Cloud Engineering, DevOps, IoT, and Cyber Security.\n\nOur team has delivered 100+ enterprise platforms with measurable ROI. How can we support your technology roadmap today?`;
        options = ["Book Free Discovery Call", "View Engineering Services", "Browse Case Studies"];
      }

      const aiMsg: AIMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: "ai",
        text: aiResponseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        options,
        actionLink
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <>
      {/* Floating Pill Widget in Bottom Right */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={useApp().openAIModal}
          className="flex items-center gap-3 px-4 py-3 rounded-full bg-space-900/90 border border-brand-cyan/40 hover:border-brand-cyan text-white shadow-2xl shadow-brand-cyan/20 backdrop-blur-xl hover:scale-105 transition-all group"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-brand-blue to-brand-cyan text-white p-0.5">
            <Sparkles className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-bold font-heading text-white flex items-center gap-1.5">
              Ask Innovtec AI
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            </span>
            <span className="text-[10px] text-slate-400">Solution & Tech Advisor</span>
          </div>
        </button>
      </div>

      {/* AI Assistant Modal Window */}
      <Modal
        isOpen={isAIModalOpen}
        onClose={closeAIModal}
        title="Innovtec AI Solution Assistant"
        subtitle="Powered by Innovtec's Autonomous Engineering RAG Knowledge Base"
        maxWidth="2xl"
      >
        <div className="flex flex-col h-[520px] -mx-6 -mb-6 bg-space-950">
          
          {/* Chat Stream Window */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${
                  msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                {/* Avatar */}
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-white shadow-md ${
                    msg.sender === "user"
                      ? "bg-slate-700"
                      : "bg-gradient-to-tr from-brand-blue to-brand-cyan"
                  }`}
                >
                  {msg.sender === "user" ? (
                    <User className="w-4 h-4" />
                  ) : (
                    <Bot className="w-4 h-4" />
                  )}
                </div>

                {/* Message Content */}
                <div className={`space-y-2 max-w-[85%] ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                  <div
                    className={`inline-block p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-brand-blue text-white rounded-tr-none"
                        : "bg-space-900 border border-slate-800 text-slate-200 rounded-tl-none whitespace-pre-wrap"
                    }`}
                  >
                    {msg.text}

                    {msg.actionLink && (
                      <div className="mt-3 pt-2 border-t border-slate-800">
                        <Button
                          variant="gradient"
                          size="sm"
                          onClick={() => {
                            closeAIModal();
                            openConsultationModal();
                          }}
                          icon={<ArrowRight className="w-3.5 h-3.5" />}
                        >
                          {msg.actionLink.label}
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Suggestion Chips */}
                  {msg.options && msg.options.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSend(opt)}
                          className="px-2.5 py-1 rounded-full bg-space-900 border border-slate-800 hover:border-brand-cyan/60 text-slate-300 hover:text-white text-[11px] font-medium transition-colors"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="text-[10px] text-slate-500 font-mono">
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-blue to-brand-cyan flex items-center justify-center text-white">
                  <Bot className="w-4 h-4 animate-spin" />
                </div>
                <div className="p-3 bg-space-900 border border-slate-800 rounded-2xl rounded-tl-none text-xs text-slate-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-cyan animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-brand-cyan animate-bounce delay-100" />
                  <span className="w-2 h-2 rounded-full bg-brand-cyan animate-bounce delay-200" />
                  <span>Innovtec AI is reasoning...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <div className="p-4 bg-space-900 border-t border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about AI capabilities, tech stack, pricing..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-space-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan"
              />
              <Button
                type="submit"
                variant="gradient"
                size="md"
                disabled={!input.trim()}
                icon={<Send className="w-4 h-4" />}
              >
                Send
              </Button>
            </form>
          </div>

        </div>
      </Modal>
    </>
  );
};
