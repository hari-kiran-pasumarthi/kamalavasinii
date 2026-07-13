import { prisma } from '@/lib/db';
import type { Payment, PaymentStatus, Prisma } from '@prisma/client';

export async function createPayment(input: {
  amount: number; // paise
  currency?: string;
  razorpayOrderId: string;
  receipt?: string;
  notes?: Prisma.InputJsonValue;
  userId?: string;
}): Promise<Payment> {
  return prisma.payment.create({
    data: {
      amount: input.amount,
      currency: input.currency ?? 'INR',
      razorpayOrderId: input.razorpayOrderId,
      receipt: input.receipt,
      notes: input.notes,
      userId: input.userId,
      status: 'CREATED',
    },
  });
}

export async function markPaymentCaptured(input: {
  razorpayOrderId: string;
  razorpayPaymentId: string;
  razorpaySignature: string;
}): Promise<Payment> {
  return prisma.payment.update({
    where: { razorpayOrderId: input.razorpayOrderId },
    data: {
      status: 'CAPTURED',
      razorpayPaymentId: input.razorpayPaymentId,
      razorpaySignature: input.razorpaySignature,
    },
  });
}

export async function markPaymentFailed(
  razorpayOrderId: string
): Promise<Payment> {
  return prisma.payment.update({
    where: { razorpayOrderId },
    data: { status: 'FAILED' },
  });
}

export async function getPaymentByOrderId(
  razorpayOrderId: string
): Promise<Payment | null> {
  return prisma.payment.findUnique({ where: { razorpayOrderId } });
}

export async function listPayments(opts: {
  status?: PaymentStatus;
  take?: number;
} = {}): Promise<Payment[]> {
  const { status, take = 50 } = opts;
  return prisma.payment.findMany({
    where: status ? { status } : undefined,
    orderBy: { createdAt: 'desc' },
    take,
  });
}
