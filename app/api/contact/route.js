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
    console.log("Parsed Data:", parsed.data);
    const record = await createInquiry(parsed.data);

    // Send email
    const { data, error } = await resend.emails.send({
  from: "Kamalavasinii <info@kamalavasini.in>",
  to: ["admin@kamalavasini.in"],
  subject: `New Consultation Request - ${parsed.data.fullName}`,
  html: `
    <div style="font-family:Arial,sans-serif;padding:20px">
      <h2 style="color:#b8860b;">New Appointment Request</h2>

      <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;">
        <tr>
          <td><strong>Name</strong></td>
          <td>${parsed.data.fullName}</td>
        </tr>

        <tr>
          <td><strong>Phone</strong></td>
          <td>${parsed.data.phone}</td>
        </tr>

        <tr>
          <td><strong>Email</strong></td>
          <td>${parsed.data.email}</td>
        </tr>

        <tr>
          <td><strong>City</strong></td>
          <td>${parsed.data.city}</td>
        </tr>

        <tr>
          <td><strong>Service</strong></td>
          <td>${parsed.data.service}</td>
        </tr>

        <tr>
          <td><strong>Jewellery Type</strong></td>
          <td>${parsed.data.jewelleryType}</td>
        </tr>

        <tr>
          <td><strong>Collection</strong></td>
          <td>${parsed.data.collection}</td>
        </tr>

        <tr>
          <td><strong>Gemstone</strong></td>
          <td>${parsed.data.gemstone}</td>
        </tr>

        <tr>
          <td><strong>Consultation Mode</strong></td>
          <td>${parsed.data.mode}</td>
        </tr>

        <tr>
          <td><strong>Preferred Date</strong></td>
          <td>${parsed.data.date}</td>
        </tr>

        <tr>
          <td><strong>Preferred Time</strong></td>
          <td>${parsed.data.time}</td>
        </tr>

        <tr>
          <td><strong>Requirement</strong></td>
          <td>${parsed.data.requirement}</td>
        </tr>
      </table>
    </div>
  `,
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
