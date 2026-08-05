"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  FolderKanban, 
  Package, 
  Settings, 
  LogOut, 
  Brain, 
  Bell, 
  Lock, 
  Sparkles,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { leads } = useApp();

  const newLeadsCount = leads.filter((l) => l.status === "New").length;

  const sidebarLinks = [
    { name: "Dashboard Overview", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Consultation Leads", href: "/admin/leads", icon: Users, badge: newLeadsCount > 0 ? newLeadsCount : undefined },
    { name: "Insights CMS", href: "/admin/insights", icon: FileText },
    { name: "Portfolio CMS", href: "/admin/portfolio", icon: FolderKanban },
    { name: "Product Manager", href: "/admin/products", icon: Package },
    { name: "System Settings", href: "/admin/settings", icon: Settings },
  ];

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-space-950 text-slate-100 flex font-sans">
      
      {/* Admin Sidebar */}
      <aside className="w-64 bg-space-900 border-r border-slate-800 flex flex-col justify-between shrink-0">
        <div>
          {/* Header Branding */}
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <Link href="/admin/dashboard" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-blue to-brand-cyan flex items-center justify-center text-white">
                <Brain className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold font-heading text-white tracking-tight">INNOVTEC</span>
                <span className="text-[9px] font-mono text-amber-400 uppercase">Admin CMS Panel</span>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5">
            <div className="text-[10px] font-mono uppercase text-slate-500 px-3 py-1">Management</div>
            {sidebarLinks.map((link) => {
              const IconComp = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-brand-blue text-white shadow-md shadow-brand-blue/20 font-semibold"
                      : "text-slate-400 hover:text-white hover:bg-space-850"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <IconComp className="w-4 h-4" />
                    <span>{link.name}</span>
                  </div>
                  {link.badge !== undefined && (
                    <span className="px-1.5 py-0.5 rounded-full bg-rose-500 text-white text-[10px] font-bold">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-800 space-y-3">
          <Link
            href="/"
            target="_blank"
            className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-space-950 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white hover:border-brand-blue transition-colors"
          >
            <span>View Public Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <div className="flex items-center gap-3 px-2 pt-2">
            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-white text-xs font-bold">
              AD
            </div>
            <div className="flex-1 truncate">
              <div className="text-xs font-bold text-white truncate">Admin User</div>
              <div className="text-[10px] text-slate-400 truncate">admin@innovtec.ai</div>
            </div>
            <Link href="/admin/login" className="text-slate-400 hover:text-rose-400" title="Logout">
              <LogOut className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Admin Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* Admin Top Header */}
        <header className="h-16 bg-space-900/80 border-b border-slate-800 px-6 flex items-center justify-between sticky top-0 z-30 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400">System Mode:</span>
            <span className="px-2.5 py-1 rounded-full bg-brand-emerald/15 border border-brand-emerald/30 text-emerald-400 text-xs font-mono font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Production CMS Online
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell className="w-4 h-4 text-slate-400 hover:text-white cursor-pointer" />
              {newLeadsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-rose-500" />
              )}
            </div>
            <div className="text-xs font-mono text-slate-400">
              {new Date().toLocaleDateString("en-US", { weekday: 'short', month: 'short', day: 'numeric' })}
            </div>
          </div>
        </header>

        {/* Content Viewport */}
        <main className="p-8 flex-1">{children}</main>
      </div>

    </div>
  );
}
