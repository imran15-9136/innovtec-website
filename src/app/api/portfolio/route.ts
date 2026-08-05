import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { CaseStudyModel } from "@/models/CaseStudy";
import { CASE_STUDIES as DEFAULT_CASE_STUDIES } from "@/data/mockData";

export async function GET() {
  try {
    await connectToDatabase();
    let studies = await CaseStudyModel.find().sort({ createdAt: -1 });

    if (studies.length === 0) {
      await CaseStudyModel.insertMany(DEFAULT_CASE_STUDIES.map((c) => ({
        slug: c.slug,
        clientName: c.clientName,
        clientIndustry: c.clientIndustry,
        title: c.title,
        summary: c.summary,
        challenge: c.challenge,
        solution: c.solution,
        architectureOverview: c.architectureOverview,
        results: c.results,
        techStack: c.techStack,
        image: c.image,
        featured: c.featured,
      })));
      studies = await CaseStudyModel.find().sort({ createdAt: -1 });
    }

    const formatted = studies.map((c) => ({
      id: c._id.toString(),
      slug: c.slug,
      clientName: c.clientName,
      clientIndustry: c.clientIndustry,
      title: c.title,
      summary: c.summary,
      challenge: c.challenge,
      solution: c.solution,
      architectureOverview: c.architectureOverview,
      results: c.results,
      techStack: c.techStack,
      image: c.image,
      featured: c.featured,
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("MongoDB Portfolio Fetch Error:", error);
    return NextResponse.json(DEFAULT_CASE_STUDIES);
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const body = await req.json();

    const newStudy = await CaseStudyModel.create(body);

    return NextResponse.json({
      id: newStudy._id.toString(),
      ...body,
    }, { status: 201 });
  } catch (error) {
    console.error("MongoDB Case Study Save Error:", error);
    return NextResponse.json({ error: "Failed to save case study" }, { status: 500 });
  }
}
