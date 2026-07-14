import { prisma } from '@/lib/db';
import type { Category } from '@prisma/client';

export async function listCategories(): Promise<Category[]> {
  return prisma.category.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: 'asc' },
  });
}

export async function getCategoryBySlug(
  slug: string
): Promise<Category | null> {
  return prisma.category.findUnique({ where: { slug } });
}
