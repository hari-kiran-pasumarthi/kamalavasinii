import { NextResponse } from 'next/server';
import { z } from 'zod';
import { readRazorpayConfig, verifyRazorpaySignature } from '@/lib/razorpay';
import {
  markPaymentCaptured,
  markPaymentFailed,
  getPaymentByOrderId,
} from '@/lib/repositories/paymentRepository';

const verifySchema = z.object({
  razorpay_order_id: z.string().min(1),
  razorpay_payment_id: z.string().min(1),
  razorpay_signature: z.string().min(1),
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

  const parsed = verifySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: 'Missing signature fields' },
      { status: 422 }
    );
  }

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    parsed.data;

  // Make sure the order was created by us.
  const payment = await getPaymentByOrderId(razorpay_order_id);
  if (!payment) {
    return NextResponse.json(
      { ok: false, error: 'Unknown order' },
      { status: 404 }
    );
  }

  const valid = verifyRazorpaySignature({
    orderId: razorpay_order_id,
    paymentId: razorpay_payment_id,
    signature: razorpay_signature,
  });

  if (!valid) {
    await markPaymentFailed(razorpay_order_id).catch(() => undefined);
    return NextResponse.json(
      { ok: false, error: 'Invalid signature' },
      { status: 400 }
    );
  }

  try {
    const updated = await markPaymentCaptured({
      razorpayOrderId: razorpay_order_id,
      razorpayPaymentId: razorpay_payment_id,
      razorpaySignature: razorpay_signature,
    });
    return NextResponse.json(
      {
        ok: true,
        payment: {
          id: updated.id,
          status: updated.status,
          razorpayOrderId: updated.razorpayOrderId,
          razorpayPaymentId: updated.razorpayPaymentId,
        },
      },
      { status: 200 }
    );
  } catch (err) {
    console.error('[payment/verify] failed:', err);
    return NextResponse.json(
      { ok: false, error: 'Failed to record payment' },
      { status: 500 }
    );
  }
}
