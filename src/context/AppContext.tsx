"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { 
  ConsultationLead, 
  InsightArticle, 
  CaseStudy,
  ProductItem 
} from "@/types";
import { 
  INITIAL_LEADS, 
  INSIGHTS as DEFAULT_INSIGHTS, 
  CASE_STUDIES as DEFAULT_CASE_STUDIES,
  PRODUCTS as DEFAULT_PRODUCTS 
} from "@/data/mockData";

interface AppContextType {
  leads: ConsultationLead[];
  addLead: (lead: Omit<ConsultationLead, "id" | "createdAt" | "status">) => Promise<void>;
  updateLeadStatus: (id: string, status: ConsultationLead["status"]) => Promise<void>;
  
  insights: InsightArticle[];
  addInsight: (article: Omit<InsightArticle, "id" | "publishedAt">) => Promise<void>;
  updateInsight: (id: string, article: Partial<InsightArticle>) => Promise<void>;
  
  caseStudies: CaseStudy[];
  addCaseStudy: (item: Omit<CaseStudy, "id">) => Promise<void>;
  
  products: ProductItem[];
  
  isConsultationModalOpen: boolean;
  openConsultationModal: (defaultService?: string) => void;
  closeConsultationModal: () => void;
  selectedModalService: string;

  isAIModalOpen: boolean;
  openAIModal: () => void;
  closeAIModal: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [leads, setLeads] = useState<ConsultationLead[]>(INITIAL_LEADS);
  const [insights, setInsights] = useState<InsightArticle[]>(DEFAULT_INSIGHTS);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>(DEFAULT_CASE_STUDIES);
  const [products, setProducts] = useState<ProductItem[]>(DEFAULT_PRODUCTS);
  
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedModalService, setSelectedModalService] = useState<string>("");
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);

  // Initial Sync with Mongoose MongoDB API Routes
  useEffect(() => {
    async function loadData() {
      try {
        const [leadsRes, insightsRes, caseRes, prodRes] = await Promise.all([
          fetch("/api/leads").then((r) => (r.ok ? r.json() : null)),
          fetch("/api/insights").then((r) => (r.ok ? r.json() : null)),
          fetch("/api/portfolio").then((r) => (r.ok ? r.json() : null)),
          fetch("/api/products").then((r) => (r.ok ? r.json() : null)),
        ]);

        if (leadsRes) setLeads(leadsRes);
        if (insightsRes) setInsights(insightsRes);
        if (caseRes) setCaseStudies(caseRes);
        if (prodRes) setProducts(prodRes);
      } catch (err) {
        console.warn("MongoDB API Sync Warning (Using Fallback Data):", err);
      }
    }
    loadData();
  }, []);

  const addLead = async (leadData: Omit<ConsultationLead, "id" | "createdAt" | "status">) => {
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadData),
      });

      if (res.ok) {
        const created: ConsultationLead = await res.json();
        setLeads((prev) => [created, ...prev]);
        return;
      }
    } catch (e) {
      console.error("MongoDB Add Lead Exception:", e);
    }

    // Client fallback
    const fallback: ConsultationLead = {
      ...leadData,
      id: `lead-${Date.now()}`,
      status: "New",
      createdAt: new Date().toISOString(),
    };
    setLeads((prev) => [fallback, ...prev]);
  };

  const updateLeadStatus = async (id: string, status: ConsultationLead["status"]) => {
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));

    try {
      await fetch("/api/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
    } catch (e) {
      console.error("MongoDB Update Lead Exception:", e);
    }
  };

  const addInsight = async (articleData: Omit<InsightArticle, "id" | "publishedAt">) => {
    try {
      const res = await fetch("/api/insights", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(articleData),
      });

      if (res.ok) {
        const created: InsightArticle = await res.json();
        setInsights((prev) => [created, ...prev]);
        return;
      }
    } catch (e) {
      console.error("MongoDB Add Insight Exception:", e);
    }

    const fallback: InsightArticle = {
      ...articleData,
      id: `insight-${Date.now()}`,
      publishedAt: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
    };
    setInsights((prev) => [fallback, ...prev]);
  };

  const updateInsight = async (id: string, updatedData: Partial<InsightArticle>) => {
    setInsights((prev) => prev.map((art) => (art.id === id ? { ...art, ...updatedData } : art)));

    try {
      await fetch("/api/insights", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: updatedData.status }),
      });
    } catch (e) {
      console.error("MongoDB Update Insight Exception:", e);
    }
  };

  const addCaseStudy = async (itemData: Omit<CaseStudy, "id">) => {
    try {
      const res = await fetch("/api/portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(itemData),
      });

      if (res.ok) {
        const created: CaseStudy = await res.json();
        setCaseStudies((prev) => [created, ...prev]);
        return;
      }
    } catch (e) {
      console.error("MongoDB Add Portfolio Exception:", e);
    }

    const fallback: CaseStudy = { ...itemData, id: `cs-${Date.now()}` };
    setCaseStudies((prev) => [fallback, ...prev]);
  };

  const openConsultationModal = (defaultService = "") => {
    setSelectedModalService(defaultService);
    setIsConsultationModalOpen(true);
  };

  const closeConsultationModal = () => {
    setIsConsultationModalOpen(false);
  };

  const openAIModal = () => setIsAIModalOpen(true);
  const closeAIModal = () => setIsAIModalOpen(false);

  return (
    <AppContext.Provider
      value={{
        leads,
        addLead,
        updateLeadStatus,
        insights,
        addInsight,
        updateInsight,
        caseStudies,
        addCaseStudy,
        products,
        isConsultationModalOpen,
        openConsultationModal,
        closeConsultationModal,
        selectedModalService,
        isAIModalOpen,
        openAIModal,
        closeAIModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
