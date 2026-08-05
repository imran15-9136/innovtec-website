import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { ProductModel } from "@/models/Product";
import { PRODUCTS as DEFAULT_PRODUCTS } from "@/data/mockData";

export async function GET() {
  try {
    await connectToDatabase();
    let products = await ProductModel.find().sort({ createdAt: -1 });

    if (products.length === 0) {
      await ProductModel.insertMany(DEFAULT_PRODUCTS.map((p) => ({
        slug: p.slug,
        name: p.name,
        tagline: p.tagline,
        description: p.description,
        badge: p.badge,
        status: p.status,
        features: p.features,
        targetAudience: p.targetAudience,
        techStack: p.techStack,
        metrics: p.metrics,
        demoUrl: p.demoUrl,
        screenshots: p.screenshots,
      })));
      products = await ProductModel.find().sort({ createdAt: -1 });
    }

    const formatted = products.map((p) => ({
      id: p._id.toString(),
      slug: p.slug,
      name: p.name,
      tagline: p.tagline,
      description: p.description,
      badge: p.badge,
      status: p.status,
      features: p.features,
      targetAudience: p.targetAudience,
      techStack: p.techStack,
      metrics: p.metrics,
      demoUrl: p.demoUrl,
      screenshots: p.screenshots,
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("MongoDB Products Fetch Error:", error);
    return NextResponse.json(DEFAULT_PRODUCTS);
  }
}
