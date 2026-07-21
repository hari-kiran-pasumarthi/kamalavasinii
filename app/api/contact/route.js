import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactSchema } from "@/lib/contactSchema";
import { createInquiry } from "@/lib/repositories/inquiryRepository";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Validation failed",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  try {
    // Save to database
    const record = await createInquiry(parsed.data);

    // Send email
    await resend.emails.send({
      from: "Kamalavasinii <onboarding@resend.dev>",
      to: ["admin@kamalavasini.in"],

      subject: `New Consultation Request - ${parsed.data.fullName}`,

      html: `
        <h2>New Consultation Request</h2>

        <p><strong>Name:</strong> ${parsed.data.fullName}</p>

        <p><strong>Phone:</strong> ${parsed.data.phone}</p>

        <p><strong>Email:</strong> ${parsed.data.email}</p>

        <p><strong>City:</strong> ${parsed.data.city}</p>

        <p><strong>Service:</strong> ${parsed.data.service}</p>

        <p><strong>Consultation:</strong> ${parsed.data.mode}</p>

        <p><strong>Date:</strong> ${parsed.data.date}</p>

        <p><strong>Time:</strong> ${parsed.data.time}</p>

        <p><strong>Requirement:</strong></p>

        <p>${parsed.data.requirement}</p>
      `,
    });

    return NextResponse.json(
      {
        ok: true,
        id: record.id,
        message: "Submission received",
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("[contact] create failed:", err);

    return NextResponse.json(
      {
        ok: false,
        error: String(err),
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      ok: true,
      service: "contact",
      accepts: "POST",
    },
    { status: 200 }
  );
}
