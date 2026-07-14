// Public helper: exposes basic ping + info without touching DB.

import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/contactSchema';
import { createInquiry } from '@/lib/repositories/inquiryRepository';

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid JSON body' },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return NextResponse.json(
      { ok: false, error: 'Validation failed', fieldErrors },
      { status: 422 }
    );
  }

  try {
    const record = await createInquiry(parsed.data);
    return NextResponse.json(
      { ok: true, id: record.id, message: 'Submission received' },
      { status: 201 }
    );
  } catch (err) {
    console.error('[contact] create failed:', err);
    return NextResponse.json(
      { ok: false, error: 'Server error, please try again' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { ok: true, service: 'contact', accepts: 'POST' },
    { status: 200 }
  );
}
