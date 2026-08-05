import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { InsightModel } from "@/models/Insight";
import { INSIGHTS as DEFAULT_INSIGHTS } from "@/data/mockData";

export async function GET() {
  try {
    await connectToDatabase();
    let articles = await InsightModel.find().sort({ createdAt: -1 });

    if (articles.length === 0) {
      await InsightModel.insertMany(DEFAULT_INSIGHTS.map((a) => ({
        slug: a.slug,
        title: a.title,
        excerpt: a.excerpt,
        content: a.content,
        category: a.category,
        author: a.author,
        publishedAt: a.publishedAt,
        readTime: a.readTime,
        image: a.image,
        status: a.status,
        featured: a.featured || false,
      })));
      articles = await InsightModel.find().sort({ createdAt: -1 });
    }

    const formatted = articles.map((a) => ({
      id: a._id.toString(),
      slug: a.slug,
      title: a.title,
      excerpt: a.excerpt,
      content: a.content,
      category: a.category,
      author: a.author,
      publishedAt: a.publishedAt,
      readTime: a.readTime,
      image: a.image,
      status: a.status,
      featured: a.featured,
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("MongoDB Insights Fetch Error:", error);
    return NextResponse.json(DEFAULT_INSIGHTS);
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const body = await req.json();

    const newArticle = await InsightModel.create({
      slug: body.slug,
      title: body.title,
      excerpt: body.excerpt,
      content: body.content,
      category: body.category,
      author: body.author,
      publishedAt: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
      readTime: body.readTime || "5 min read",
      image: body.image || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000",
      status: body.status || "Published",
      featured: body.featured || false,
    });

    return NextResponse.json({
      id: newArticle._id.toString(),
      slug: newArticle.slug,
      title: newArticle.title,
      excerpt: newArticle.excerpt,
      content: newArticle.content,
      category: newArticle.category,
      author: newArticle.author,
      publishedAt: newArticle.publishedAt,
      readTime: newArticle.readTime,
      image: newArticle.image,
      status: newArticle.status,
    }, { status: 201 });
  } catch (error) {
    console.error("MongoDB Insight Creation Error:", error);
    return NextResponse.json({ error: "Failed to create article" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    await connectToDatabase();
    const { id, status } = await req.json();

    const updated = await InsightModel.findByIdAndUpdate(id, { status }, { new: true });

    return NextResponse.json({
      id: updated?._id.toString(),
      status: updated?.status,
    });
  } catch (error) {
    console.error("MongoDB Insight Update Error:", error);
    return NextResponse.json({ error: "Failed to update article status" }, { status: 500 });
  }
}
