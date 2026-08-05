"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";

export default function InsightDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { insights } = useApp();

  const article = insights.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="pt-36 pb-20 bg-space-950 text-center min-h-screen">
        <h1 className="text-3xl font-bold text-white mb-4">Article Not Found</h1>
        <Link href="/insights">
          <Button variant="gradient">Back to Insights</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 bg-space-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/insights" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Insights
        </Link>

        <div className="space-y-6 mb-8">
          <Badge variant="cyan">{article.category}</Badge>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-6 text-xs text-slate-400 border-y border-slate-800 py-4">
            <div className="flex items-center gap-2">
              <img src={article.author.avatar} alt={article.author.name} className="w-8 h-8 rounded-full object-cover" />
              <div>
                <div className="text-white font-bold">{article.author.name}</div>
                <div className="text-[10px] text-slate-400">{article.author.role}</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {article.publishedAt}</div>
            <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {article.readTime}</div>
          </div>
        </div>

        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-6 text-slate-200 leading-relaxed text-sm sm:text-base whitespace-pre-wrap">
          {article.content}
        </div>

      </div>
    </div>
  );
}
