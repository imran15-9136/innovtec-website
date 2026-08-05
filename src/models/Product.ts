import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProductDocument extends Document {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  status: "Live" | "Beta" | "Upcoming";
  features: string[];
  targetAudience: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  demoUrl?: string;
  screenshots: string[];
}

const ProductSchema = new Schema<IProductDocument>(
  {
    slug: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    tagline: { type: String, required: true },
    description: { type: String, required: true },
    badge: { type: String, required: true },
    status: { type: String, enum: ["Live", "Beta", "Upcoming"], default: "Live" },
    features: [{ type: String }],
    targetAudience: [{ type: String }],
    techStack: [{ type: String }],
    metrics: [
      {
        label: { type: String, required: true },
        value: { type: String, required: true },
      },
    ],
    demoUrl: { type: String },
    screenshots: [{ type: String }],
  },
  { timestamps: true }
);

export const ProductModel: Model<IProductDocument> = 
  mongoose.models.Product || mongoose.model<IProductDocument>("Product", ProductSchema);
