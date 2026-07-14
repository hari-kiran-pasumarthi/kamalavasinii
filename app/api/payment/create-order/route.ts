import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getRazorpayClient, readRazorpayConfig } from '@/lib/razorpay';
import { createPayment } from '@/lib/repositories/paymentRepository';
import { Prisma } from "@prisma/client";

const orderSchema = z.object({
  // amount is in the smallest currency unit (paise for INR)
  amount: z
    .number()
    .int('Amount must be an integer (in paise)')
    .positive('Amount must be positive')
    .max(1_000_000_00, 'Amount is unreasonably large'),
  currency: z.string().length(3).default('INR'),
  receipt: z.string().max(40).optional(),
  notes: z.record(z.string(), z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.null()
  ])).optional(),
});

export async function POST(request: Request) {
  if (!readRazorpayConfig()) {
    return NextResponse.json(
      {
        ok: false,
        error:
          'Razorpay is not configured. Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in the environment.',
      },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid JSON body' },
      { status: 400 }
    );
  }

  const parsed = orderSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Validation failed',
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  const { amount, currency, receipt, notes } = parsed.data;

  try {
    const rzp = getRazorpayClient()!;
    const order = await rzp.orders.create({
      amount, // paise
      currency,
      receipt: receipt ?? `rcpt_${Date.now()}`,
      notes: notes as Record<string, string> | undefined,
    });

    await createPayment({
      amount,
      currency,
      razorpayOrderId: order.id,
      receipt: order.receipt,
      notes: (notes ?? {}) as Prisma.InputJsonValue,
    });

    return NextResponse.json(
      {
        ok: true,
        keyId: process.env.RAZORPAY_KEY_ID,
        order: {
          id: order.id,
          amount: order.amount,
          currency: order.currency,
          receipt: order.receipt,
          status: order.status,
        },
      },
      { status: 201 }
    );
  } catch (err) {
    console.error('[payment/create-order] failed:', err);
    return NextResponse.json(
      { ok: false, error: 'Failed to create payment order' },
      { status: 500 }
    );
  }
}
