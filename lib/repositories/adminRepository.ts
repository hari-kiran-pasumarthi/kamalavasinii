import { prisma } from '@/lib/db';
import type { Admin } from '@prisma/client';
import bcrypt from 'bcryptjs';

export async function findAdminByEmail(
  email: string
): Promise<Admin | null> {
  return prisma.admin.findUnique({
    where: { email: email.toLowerCase().trim() },
  });
}

export async function createAdmin(input: {
  email: string;
  password: string;
  name?: string;
}): Promise<Admin> {
  const passwordHash = await bcrypt.hash(input.password, 12);
  return prisma.admin.create({
    data: {
      email: input.email.toLowerCase().trim(),
      passwordHash,
      name: input.name,
    },
  });
}

export async function verifyAdminPassword(
  admin: Admin,
  password: string
): Promise<boolean> {
  return bcrypt.compare(password, admin.passwordHash);
}

export async function touchAdminLogin(id: string): Promise<void> {
  await prisma.admin.update({
    where: { id },
    data: { lastLoginAt: new Date() },
  });
}
