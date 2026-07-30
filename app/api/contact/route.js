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
  subject: "CHATGPT TEST 12345",
  html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<style>
body{
    margin:0;
    padding:30px;
    background:#f8f6f2;
    font-family:Arial,Helvetica,sans-serif;
}

.container{
    max-width:700px;
    margin:auto;
    background:#ffffff;
    border-radius:12px;
    overflow:hidden;
    border:1px solid #e5e5e5;
}

.header{
    background:#6B1E28;
    color:white;
    text-align:center;
    padding:30px;
}

.header h1{
    margin:0;
    font-size:28px;
}

.header p{
    margin-top:8px;
    opacity:.9;
}

.section{
    padding:30px;
}

table{
    width:100%;
    border-collapse:collapse;
}

td{
    padding:12px;
    border-bottom:1px solid #eeeeee;
    vertical-align:top;
}

.label{
    width:220px;
    font-weight:bold;
    color:#6B1E28;
}

.footer{
    padding:20px;
    background:#fafafa;
    text-align:center;
    font-size:13px;
    color:#777;
}
</style>
</head>

<body>

<div class="container">

<div class="header">
<h1>Kamalavasinii Jewellery</h1>
<p>New Consultation Request</p>
</div>

<div class="section">

<table>

<tr>
<td class="label">Customer Name</td>
<td>${parsed.data.fullName}</td>
</tr>

<tr>
<td class="label">Phone Number</td>
<td>${parsed.data.phone}</td>
</tr>

<tr>
<td class="label">Email</td>
<td>${parsed.data.email}</td>
</tr>

<tr>
<td class="label">City</td>
<td>${parsed.data.city}</td>
</tr>

<tr>
<td class="label">Service Required</td>
<td>${parsed.data.service}</td>
</tr>

<tr>
<td class="label">Jewellery Type</td>
<td>${parsed.data.jewelleryType ?? "Not Selected"}</td>
</tr>

<tr>
<td class="label">Collection</td>
<td>${parsed.data.collection ?? "Not Selected"}</td>
</tr>

<tr>
<td class="label">Gemstone</td>
<td>${parsed.data.gemstone ?? "Not Selected"}</td>
</tr>

<tr>
<td class="label">Consultation Mode</td>
<td>${parsed.data.mode}</td>
</tr>

<tr>
<td class="label">Preferred Date</td>
<td>${parsed.data.date}</td>
</tr>

<tr>
<td class="label">Preferred Time</td>
<td>${parsed.data.time}</td>
</tr>

<tr>
<td class="label">Requirement</td>
<td>${parsed.data.requirement}</td>
</tr>

</table>

</div>

<div class="footer">
This enquiry was submitted from the Kamalavasinii Jewellery website.
</div>

</div>

</body>
</html>
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
