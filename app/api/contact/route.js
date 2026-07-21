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
    const { data, error } = await resend.emails.send({
  from: "Kamalavasinii <info@kamalavasini.in>",
  to: ["admin@kamalavasini.in"],
  subject: `New Consultation Request - ${parsed.data.fullName}`,
  html: `...`,
});

console.log("Resend data:", data);
console.log("Resend error:", error);

if (error) {
  throw new Error(JSON.stringify(error));
}

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
