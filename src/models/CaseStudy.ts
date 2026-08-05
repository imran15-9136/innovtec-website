import mongoose, { Schema, Document, Model } from "mongoose";

export interface ICaseStudyDocument extends Document {
  slug: string;
  clientName: string;
  clientIndustry: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  architectureOverview: string;
  results: { metric: string; label: string }[];
  techStack: string[];
  image: string;
  featured: boolean;
}

const CaseStudySchema = new Schema<ICaseStudyDocument>(
  {
    slug: { type: String, required: true, unique: true, index: true },
    clientName: { type: String, required: true },
    clientIndustry: { type: String, required: true },
    title: { type: String, required: true },
    summary: { type: String, required: true },
    challenge: { type: String, required: true },
    solution: { type: String, required: true },
    architectureOverview: { type: String, required: true },
    results: [
      {
        metric: { type: String, required: true },
        label: { type: String, required: true },
      },
    ],
    techStack: [{ type: String }],
    image: { type: String, required: true },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const CaseStudyModel: Model<ICaseStudyDocument> = 
  mongoose.models.CaseStudy || mongoose.model<ICaseStudyDocument>("CaseStudy", CaseStudySchema);
