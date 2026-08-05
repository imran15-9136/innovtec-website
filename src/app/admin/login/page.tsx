"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Brain, Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@innovtec.ai");
  const [password, setPassword] = useState("••••••••••••");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push("/admin/dashboard");
    }, 600);
  };

  return (
    <div className="min-h-screen bg-space-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md glass-card p-8 rounded-3xl border border-slate-800 space-y-6">
        
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-blue to-brand-cyan flex items-center justify-center text-white mx-auto shadow-lg shadow-brand-blue/20">
            <Brain className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold font-heading text-white">Innovtec CMS Login</h1>
          <p className="text-xs text-slate-400">Content Management & Executive Lead Dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-xs font-medium text-slate-300 block mb-1">Admin Email</label>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-space-900 border border-slate-700 rounded-xl px-3.5 py-2.5 pl-10 text-xs text-white focus:outline-none focus:border-brand-blue"
              />
              <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-slate-300 block mb-1">Security Key / Password</label>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-space-900 border border-slate-700 rounded-xl px-3.5 py-2.5 pl-10 text-xs text-white focus:outline-none focus:border-brand-blue"
              />
              <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
            </div>
          </div>

          <Button type="submit" variant="gradient" className="w-full py-3" disabled={loading} icon={<ArrowRight className="w-4 h-4" />}>
            {loading ? "Authenticating..." : "Access Admin CMS"}
          </Button>
        </form>

        <div className="pt-4 border-t border-slate-800/80 text-center">
          <Link href="/" className="text-xs font-semibold text-slate-400 hover:text-white transition-colors">
            ← Return to Public Website
          </Link>
        </div>

      </div>
    </div>
  );
}
