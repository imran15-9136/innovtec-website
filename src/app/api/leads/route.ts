import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { LeadModel } from "@/models/Lead";
import { INITIAL_LEADS } from "@/data/mockData";

export async function GET() {
  try {
    await connectToDatabase();
    let leads = await LeadModel.find().sort({ createdAt: -1 });

    // Seed database if empty
    if (leads.length === 0) {
      await LeadModel.insertMany(INITIAL_LEADS.map(l => ({
        fullName: l.fullName,
        email: l.email,
        companyName: l.companyName,
        phone: l.phone,
        serviceCategory: l.serviceCategory,
        estimatedBudget: l.estimatedBudget,
        projectDescription: l.projectDescription,
        source: l.source,
        status: l.status,
      })));
      leads = await LeadModel.find().sort({ createdAt: -1 });
    }

    const formattedLeads = leads.map((l) => ({
      id: l._id.toString(),
      fullName: l.fullName,
      email: l.email,
      companyName: l.companyName,
      phone: l.phone,
      serviceCategory: l.serviceCategory,
      estimatedBudget: l.estimatedBudget,
      projectDescription: l.projectDescription,
      source: l.source,
      status: l.status,
      createdAt: l.createdAt ? l.createdAt.toISOString() : new Date().toISOString(),
    }));

    return NextResponse.json(formattedLeads);
  } catch (error) {
    console.error("MongoDB Leads Fetch Error:", error);
    // Fallback gracefully
    return NextResponse.json(INITIAL_LEADS);
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const body = await req.json();

    const newLead = await LeadModel.create({
      fullName: body.fullName,
      email: body.email,
      companyName: body.companyName,
      phone: body.phone,
      serviceCategory: body.serviceCategory,
      estimatedBudget: body.estimatedBudget || "$50k - $100k",
      projectDescription: body.projectDescription || "",
      source: body.source || "Website Form",
      status: "New",
    });

    return NextResponse.json(
      {
        id: newLead._id.toString(),
        fullName: newLead.fullName,
        email: newLead.email,
        companyName: newLead.companyName,
        phone: newLead.phone,
        serviceCategory: newLead.serviceCategory,
        estimatedBudget: newLead.estimatedBudget,
        projectDescription: newLead.projectDescription,
        source: newLead.source,
        status: newLead.status,
        createdAt: newLead.createdAt.toISOString(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("MongoDB Lead Save Error:", error);
    return NextResponse.json({ error: "Failed to save lead to database" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    await connectToDatabase();
    const { id, status } = await req.json();

    const updatedLead = await LeadModel.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedLead) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    return NextResponse.json({
      id: updatedLead._id.toString(),
      status: updatedLead.status,
    });
  } catch (error) {
    console.error("MongoDB Lead Update Error:", error);
    return NextResponse.json({ error: "Failed to update lead status" }, { status: 500 });
  }
}
