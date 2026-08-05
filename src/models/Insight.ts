import mongoose, { Schema, Document, Model } from "mongoose";

export interface IInsightDocument extends Document {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "AI" | "Software Engineering" | "Cloud" | "DevOps" | "Cyber Security" | "IoT" | "Architecture";
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  image: string;
  status: "Published" | "Draft";
  featured?: boolean;
}

const InsightSchema = new Schema<IInsightDocument>(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    category: { 
      type: String, 
      required: true,
      enum: ["AI", "Software Engineering", "Cloud", "DevOps", "Cyber Security", "IoT", "Architecture"] 
    },
    author: {
      name: { type: String, required: true },
      role: { type: String, required: true },
      avatar: { type: String, required: true },
    },
    publishedAt: { type: String, required: true },
    readTime: { type: String, default: "5 min read" },
    image: { type: String, required: true },
    status: { type: String, enum: ["Published", "Draft"], default: "Published" },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const InsightModel: Model<IInsightDocument> = 
  mongoose.models.Insight || mongoose.model<IInsightDocument>("Insight", InsightSchema);
