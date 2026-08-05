import mongoose, { Schema, Document, Model } from "mongoose";

export interface ILeadDocument extends Document {
  fullName: string;
  email: string;
  companyName: string;
  phone?: string;
  serviceCategory: string;
  estimatedBudget: string;
  projectDescription: string;
  source: "Website Form" | "AI Assistant" | "Direct Contact";
  status: "New" | "Contacted" | "In Discovery" | "Proposal Sent" | "Closed";
  createdAt: Date;
}

const LeadSchema = new Schema<ILeadDocument>(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    companyName: { type: String, required: true, trim: true },
    phone: { type: String, required: false },
    serviceCategory: { type: String, required: true },
    estimatedBudget: { type: String, required: true, default: "$50k - $100k" },
    projectDescription: { type: String, required: false },
    source: { 
      type: String, 
      enum: ["Website Form", "AI Assistant", "Direct Contact"], 
      default: "Website Form" 
    },
    status: { 
      type: String, 
      enum: ["New", "Contacted", "In Discovery", "Proposal Sent", "Closed"], 
      default: "New" 
    },
  },
  { timestamps: true }
);

export const LeadModel: Model<ILeadDocument> = 
  mongoose.models.Lead || mongoose.model<ILeadDocument>("Lead", LeadSchema);
