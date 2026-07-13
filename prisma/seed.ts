// Prisma seed — idempotent (safe to run multiple times).
//
// Seeds:
//   • Categories: Jewellery, Silks, Gemstones, Clay Jewellery, Couture
//   • An initial Admin, if ADMIN_EMAIL + ADMIN_PASSWORD env vars are set.
//     (Never hard-code credentials — seeding admin is a no-op without
//     the env vars, so `prisma db seed` is safe on any environment.)
//
// Run:  npx prisma db seed

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

interface CategorySeed {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  sortOrder: number;
}

const CATEGORIES: CategorySeed[] = [
  {
    slug: 'jewellery',
    name: 'Swarna Jewellery',
    subtitle: 'Jewellery',
    description: 'Handcrafted jewellery inspired by Indian heritage.',
    sortOrder: 1,
  },
  {
    slug: 'silks',
    name: 'Silks',
    subtitle: 'Sarees',
    description: 'GI-tagged South Indian silk sarees, sourced with care.',
    sortOrder: 2,
  },
  {
    slug: 'gemstones',
    name: 'Gemstones',
    subtitle: 'Ratna Mandira',
    description: 'Curated precious and semi-precious gemstones.',
    sortOrder: 3,
  },
  {
    slug: 'clay-jewellery',
    name: 'Clay Jewellery',
    subtitle: 'Artisan Crafts',
    description: 'Terracotta and clay artisan creations.',
    sortOrder: 4,
  },
  {
    slug: 'couture',
    name: 'Couture',
    subtitle: 'Costumes',
    description: 'Bespoke Indian couture and heritage costumes.',
    sortOrder: 5,
  },
];

async function seedCategories() {
  console.log('[seed] Categories...');
  for (const c of CATEGORIES) {
    await prisma.category.upsert({
      where: { slug: c.slug },
      update: {
        name: c.name,
        subtitle: c.subtitle,
        description: c.description,
        sortOrder: c.sortOrder,
      },
      create: c,
    });
    console.log(`  ✓ ${c.slug}`);
  }
}

async function seedAdmin() {
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD;
  const name = process.env.ADMIN_NAME ?? 'Kamalavasinii Admin';

  if (!email || !password) {
    console.log(
      '[seed] ADMIN_EMAIL/ADMIN_PASSWORD not set — skipping admin seed.'
    );
    return;
  }
  if (password.length < 8) {
    throw new Error('ADMIN_PASSWORD must be at least 8 characters.');
  }

  console.log('[seed] Admin...');
  const passwordHash = await bcrypt.hash(password, 12);
  await prisma.admin.upsert({
    where: { email },
    update: { passwordHash, name, isActive: true },
    create: { email, passwordHash, name, isActive: true },
  });
  console.log(`  ✓ ${email}`);
}

async function main() {
  await seedCategories();
  await seedAdmin();
  console.log('[seed] Done.');
}

main()
  .catch((e) => {
    console.error('[seed] Failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
