"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { InsightArticle } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { Plus, Edit, Trash2, FileText, CheckCircle2, Globe } from "lucide-react";

export default function AdminInsightsPage() {
  const { insights, addInsight, updateInsight } = useApp();

  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState<InsightArticle["category"]>("AI");
  const [content, setContent] = useState("");
  const [authorName, setAuthorName] = useState("Dr. Sarah Jenkins");

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    addInsight({
      title,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      excerpt,
      content,
      category,
      author: {
        name: authorName,
        role: "Senior AI Architect",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200"
      },
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000",
      status: "Published"
    });
    setIsCreateOpen(false);
    setTitle("");
    setExcerpt("");
    setContent("");
  };

  const toggleStatus = (id: string, currentStatus: "Published" | "Draft") => {
    const nextStatus = currentStatus === "Published" ? "Draft" : "Published";
    updateInsight(id, { status: nextStatus });
  };

  return (
    <div className="space-y-8">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-white">Insights Articles CMS</h1>
          <p className="text-xs sm:text-sm text-slate-400">Publish, edit, and categorize thought leadership whitepapers and technical articles.</p>
        </div>

        <Button variant="gradient" icon={<Plus className="w-4 h-4" />} onClick={() => setIsCreateOpen(true)}>
          New Article
        </Button>
      </div>

      <div className="glass-card rounded-3xl border border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-space-950 text-slate-400 font-mono text-[10px] uppercase border-b border-slate-800">
              <tr>
                <th className="p-4">Title</th>
                <th className="p-4">Category</th>
                <th className="p-4">Author</th>
                <th className="p-4">Published</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {insights.map((art) => (
                <tr key={art.id} className="hover:bg-space-850/50 transition-colors">
                  <td className="p-4 font-semibold text-white max-w-xs truncate">{art.title}</td>
                  <td className="p-4"><Badge variant="cyan">{art.category}</Badge></td>
                  <td className="p-4 text-slate-300">{art.author.name}</td>
                  <td className="p-4 text-slate-400 font-mono">{art.publishedAt}</td>
                  <td className="p-4">
                    <button
                      onClick={() => toggleStatus(art.id, art.status)}
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border transition-colors ${
                        art.status === "Published"
                          ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40"
                          : "bg-amber-500/20 text-amber-400 border-amber-500/40"
                      }`}
                    >
                      {art.status}
                    </button>
                  </td>
                  <td className="p-4 text-right space-x-2">
                    <button onClick={() => toggleStatus(art.id, art.status)} className="p-1.5 rounded bg-space-850 hover:bg-space-800 text-slate-300">
                      <Edit className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Article Modal */}
      <Modal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} title="Create New Insight Article">
        <form onSubmit={handleCreate} className="space-y-4 text-xs">
          <div>
            <label className="block mb-1 text-slate-300">Article Title *</label>
            <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Scaling RAG Vector Stores in 2026" className="w-full bg-space-950 border border-slate-700 rounded-lg p-2 text-xs text-white" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-slate-300">Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value as any)} className="w-full bg-space-950 border border-slate-700 rounded-lg p-2 text-xs text-white">
                <option value="AI">AI</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Cloud">Cloud</option>
                <option value="DevOps">DevOps</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="IoT">IoT</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-slate-300">Author Name</label>
              <input type="text" value={authorName} onChange={(e) => setAuthorName(e.target.value)} className="w-full bg-space-950 border border-slate-700 rounded-lg p-2 text-xs text-white" />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-slate-300">Excerpt / Short Summary</label>
            <textarea rows={2} required value={excerpt} onChange={(e) => setExcerpt(e.target.value)} className="w-full bg-space-950 border border-slate-700 rounded-lg p-2 text-xs text-white resize-none" />
          </div>

          <div>
            <label className="block mb-1 text-slate-300">Markdown Content</label>
            <textarea rows={6} required value={content} onChange={(e) => setContent(e.target.value)} placeholder="# Section Title\n\nContent..." className="w-full bg-space-950 border border-slate-700 rounded-lg p-2 text-xs text-white resize-none font-mono" />
          </div>

          <Button type="submit" variant="gradient" className="w-full py-2.5">
            Publish Article
          </Button>
        </form>
      </Modal>

    </div>
  );
}
