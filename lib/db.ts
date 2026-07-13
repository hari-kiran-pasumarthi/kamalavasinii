// PrismaClient singleton — avoids exhausting the DB connection pool
// during Next.js dev hot-reload while remaining safe in production.
//
// Usage:  import { prisma } from '@/lib/db';

import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === 'development'
        ? ['warn', 'error']
        : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export type { Prisma } from '@prisma/client';
