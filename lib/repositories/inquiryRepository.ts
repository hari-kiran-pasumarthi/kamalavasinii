// Inquiry repository — the ONLY place that talks to prisma.inquiry.
// API routes call these functions instead of Prisma directly so we can
// swap the storage later without touching route handlers.

import { prisma } from '@/lib/db';
import type { ConsultMode, InquiryStatus, Inquiry } from '@prisma/client';

export interface CreateInquiryInput {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  mode: 'In Person' | 'Video Call' | 'WhatsApp';
  date: string;
  time: string;
  requirement: string;
}

// Map the UI's human-readable value to the Prisma enum.
const MODE_MAP: Record<CreateInquiryInput['mode'], ConsultMode> = {
  'In Person': 'IN_PERSON',
  'Video Call': 'VIDEO_CALL',
  WhatsApp: 'WHATSAPP',
};

export async function createInquiry(
  data: CreateInquiryInput
): Promise<Inquiry> {
  return prisma.inquiry.create({
    data: {
      fullName: data.fullName,
      phone: data.phone,
      email: data.email,
      city: data.city,
      service: data.service,
      mode: MODE_MAP[data.mode],
      date: data.date,
      time: data.time,
      requirement: data.requirement,
    },
  });
}

export async function listInquiries(opts: {
  status?: InquiryStatus;
  take?: number;
  skip?: number;
} = {}): Promise<Inquiry[]> {
  const { status, take = 50, skip = 0 } = opts;
  return prisma.inquiry.findMany({
    where: status ? { status } : undefined,
    orderBy: { createdAt: 'desc' },
    take,
    skip,
  });
}

export async function getInquiryById(id: string): Promise<Inquiry | null> {
  return prisma.inquiry.findUnique({ where: { id } });
}

export async function updateInquiryStatus(
  id: string,
  status: InquiryStatus
): Promise<Inquiry> {
  return prisma.inquiry.update({
    where: { id },
    data: { status },
  });
}
