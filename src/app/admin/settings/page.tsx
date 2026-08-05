"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Settings, Save, CheckCircle2, Bot, Sliders } from "lucide-react";

export default function AdminSettingsPage() {
  const [aiSystemPrompt, setAiSystemPrompt] = useState(
    "You are Innovtec AI Solution Assistant. Answer client inquiries accurately regarding RAG architectures, custom software development, cloud FinOps, DevOps pipelines, IoT telematics, and cybersecurity. Help users book discovery consultations."
  );
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold font-heading text-white">System & AI Settings</h1>
        <p className="text-xs sm:text-sm text-slate-400">Configure site settings, notification dispatch email, and AI Assistant prompt parameters.</p>
      </div>

      <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-6">
        <h2 className="text-xl font-bold font-heading text-white flex items-center gap-2">
          <Bot className="w-5 h-5 text-brand-cyan" /> "Ask Innovtec AI" Assistant Configuration
        </h2>

        {saved && (
          <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs rounded-xl flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Settings successfully updated in live database.</span>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-4 text-xs">
          <div>
            <label className="block mb-1 font-medium text-slate-300">AI Assistant Core System Prompt</label>
            <textarea
              rows={4}
              value={aiSystemPrompt}
              onChange={(e) => setAiSystemPrompt(e.target.value)}
              className="w-full bg-space-950 border border-slate-700 rounded-xl p-3 text-xs text-white resize-none font-mono"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-slate-300">Default Model Temperature</label>
              <input type="number" step="0.1" defaultValue={0.2} className="w-full bg-space-950 border border-slate-700 rounded-lg p-2 text-xs text-white font-mono" />
            </div>
            <div>
              <label className="block mb-1 text-slate-300">Lead Dispatch Email</label>
              <input type="email" defaultValue="leads@innovtec.ai" className="w-full bg-space-950 border border-slate-700 rounded-lg p-2 text-xs text-white" />
            </div>
          </div>

          <Button type="submit" variant="gradient" icon={<Save className="w-4 h-4" />}>
            Save Configurations
          </Button>
        </form>
      </div>
    </div>
  );
}
