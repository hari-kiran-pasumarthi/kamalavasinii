// Lightweight JWT-based admin session using `jose` — no dependency on
// running a full NextAuth pipeline. Keeps `/api/admin/*` self-contained
// and works cleanly with Next.js middleware (which runs on the Edge).
//
// NEXTAUTH_SECRET is used as the signing key (a single source of truth
// for the whole app, so future NextAuth wiring can adopt it).

import { SignJWT, jwtVerify } from 'jose';

const SESSION_COOKIE = 'kv_admin_session';
const DEFAULT_TTL_SECONDS = 60 * 60 * 8; // 8 hours

function getSecretKey(): Uint8Array {
  const secret = process.env.NEXTAUTH_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error(
      'NEXTAUTH_SECRET is missing or too short (need >=32 chars).'
    );
  }
  return new TextEncoder().encode(secret);
}

export interface AdminSessionPayload {
  sub: string;    // admin id
  email: string;
  role: 'ADMIN';
}

export async function signAdminSession(
  payload: AdminSessionPayload,
  ttlSeconds: number = DEFAULT_TTL_SECONDS
): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  return new SignJWT({ email: payload.email, role: payload.role })
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(payload.sub)
    .setIssuedAt(now)
    .setExpirationTime(now + ttlSeconds)
    .setIssuer('kamalavasinii')
    .setAudience('kamalavasinii-admin')
    .sign(getSecretKey());
}

export async function verifyAdminSession(
  token: string
): Promise<AdminSessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, getSecretKey(), {
      issuer: 'kamalavasinii',
      audience: 'kamalavasinii-admin',
    });
    if (!payload.sub || payload.role !== 'ADMIN') return null;
    return {
      sub: payload.sub as string,
      email: payload.email as string,
      role: 'ADMIN',
    };
  } catch {
    return null;
  }
}

export const ADMIN_SESSION_COOKIE = SESSION_COOKIE;
export const ADMIN_SESSION_TTL_SECONDS = DEFAULT_TTL_SECONDS;
