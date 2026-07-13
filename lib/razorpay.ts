// Razorpay helpers — signature verification and lazy client instantiation.
// The client is created only when needed so /api routes can import this
// module even when the keys are not yet configured.

import crypto from 'node:crypto';
import Razorpay from 'razorpay';

export interface RazorpayConfig {
  keyId: string;
  keySecret: string;
}

export function readRazorpayConfig(): RazorpayConfig | null {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) return null;
  return { keyId, keySecret };
}

export function getRazorpayClient(): Razorpay | null {
  const cfg = readRazorpayConfig();
  if (!cfg) return null;
  return new Razorpay({ key_id: cfg.keyId, key_secret: cfg.keySecret });
}

/**
 * Verify a Razorpay payment signature per the official docs:
 * HMAC_SHA256(order_id + "|" + payment_id, key_secret) === signature
 */
export function verifyRazorpaySignature(input: {
  orderId: string;
  paymentId: string;
  signature: string;
}): boolean {
  const cfg = readRazorpayConfig();
  if (!cfg) return false;

  const expected = crypto
    .createHmac('sha256', cfg.keySecret)
    .update(`${input.orderId}|${input.paymentId}`)
    .digest('hex');

  // constant-time comparison
  const a = Buffer.from(expected);
  const b = Buffer.from(input.signature);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}
