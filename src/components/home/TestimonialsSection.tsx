"use client";

import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Innovtec delivered our private healthcare RAG platform in just 4 weeks. Their understanding of medical vector search and HIPAA compliance is world-class.",
      author: "Dr. Marcus Vance",
      role: "CTO, Aethel Health Corp",
      industry: "Healthcare",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200"
    },
    {
      quote: "Refactoring our core banking backend from a legacy monolith to Go microservices saved us $650k in annual cloud costs while maintaining 99.999% uptime during peak trading hours.",
      author: "Samantha Thorne",
      role: "VP of Engineering, NexGen Financial",
      industry: "Finance",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
    },
    {
      quote: "Innovtec's IoT predictive maintenance pipeline saved our smart assembly lines from 3 critical breakdowns last quarter alone. Truly an indispensable tech partner.",
      author: "Robert Sterling",
      role: "Director of Operations, Vanguard Manufacturing",
      industry: "Manufacturing",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200"
    }
  ];

  return (
    <section className="py-24 bg-space-950 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="emerald" className="mb-4">
            Verified Executive Feedback
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Trusted by <span className="text-gradient-blue">Technology Leaders</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Hear from CTOs, Founders, and Engineering Executives who rely on Innovtec for mission-critical software and AI platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-3xl border border-slate-800 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-brand-blue/40" />

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover border border-slate-700"
                />
                <div>
                  <div className="text-sm font-bold text-white font-heading">{t.author}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
