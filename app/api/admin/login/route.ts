import { NextResponse } from 'next/server';
import { z } from 'zod';
import {
  findAdminByEmail,
  verifyAdminPassword,
  touchAdminLogin,
} from '@/lib/repositories/adminRepository';
import {
  signAdminSession,
  ADMIN_SESSION_COOKIE,
  ADMIN_SESSION_TTL_SECONDS,
} from '@/lib/auth';

const loginSchema = z.object({
  email: z.string().trim().email('Invalid email'),
  password: z.string().min(8, 'Password too short'),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid JSON body' },
      { status: 400 }
    );
  }

  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: 'Invalid credentials' },
      { status: 401 }
    );
  }

  const { email, password } = parsed.data;

  try {
    const admin = await findAdminByEmail(email);
    // Constant-ish response time: still run bcrypt.compare against a dummy hash
    // when the user isn't found, to avoid enumeration timing attacks.
    if (!admin || !admin.isActive) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _ = await verifyAdminPassword(
        {
          id: '',
          email: '',
          passwordHash:
            '$2a$12$CwTycUXWue0Thq9StjUM0uJ8OSKreNwjIWvzT9nQfsyu9dSCk9m5m',
          name: null,
          isActive: false,
          lastLoginAt: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        password
      );
      return NextResponse.json(
        { ok: false, error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const ok = await verifyAdminPassword(admin, password);
    if (!ok) {
      return NextResponse.json(
        { ok: false, error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const token = await signAdminSession({
      sub: admin.id,
      email: admin.email,
      role: 'ADMIN',
    });

    await touchAdminLogin(admin.id);

    const res = NextResponse.json(
      {
        ok: true,
        admin: {
          id: admin.id,
          email: admin.email,
          name: admin.name,
        },
      },
      { status: 200 }
    );
    res.cookies.set(ADMIN_SESSION_COOKIE, token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: ADMIN_SESSION_TTL_SECONDS,
    });
    return res;
  } catch (err) {
    console.error('[admin/login] failed:', err);
    return NextResponse.json(
      { ok: false, error: 'Server error' },
      { status: 500 }
    );
  }
}
