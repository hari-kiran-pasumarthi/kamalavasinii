/**
 * Contact submission store — temporary local persistence.
 *
 * Designed with a small repository interface so it can be replaced by Prisma
 * later without touching the API route:
 *
 *   import { prisma } from '@/lib/prisma';
 *   return prisma.contactSubmission.create({ data });
 *
 * For now we persist to a JSON file in /tmp so submissions survive across
 * hot reloads within a single container life.
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { randomUUID } from 'node:crypto';

const STORE_PATH = path.join('/tmp', 'kamalavasinii-contact-submissions.json');

async function readAll() {
  try {
    const raw = await fs.readFile(STORE_PATH, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    if (err.code === 'ENOENT') return [];
    throw err;
  }
}

async function writeAll(items) {
  await fs.writeFile(STORE_PATH, JSON.stringify(items, null, 2), 'utf8');
}

/**
 * Create a submission.
 * @param {object} data - validated payload (already zod-parsed)
 * @returns {Promise<object>} the persisted record with `id` + timestamps
 */
export async function createContactSubmission(data) {
  const items = await readAll();
  const record = {
    id: randomUUID(),
    ...data,
    createdAt: new Date().toISOString(),
  };
  items.push(record);
  await writeAll(items);
  return record;
}

/**
 * List submissions (newest first). Not used by the public page, but useful
 * for a future admin view or for verifying the API in dev.
 */
export async function listContactSubmissions() {
  const items = await readAll();
  return items.slice().reverse();
}
