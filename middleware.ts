// Next.js Edge middleware — protects /admin (dashboard, not yet built) and
// any /api/admin/* routes except the login endpoint.
//
// The dashboard UI is intentionally NOT built yet per the requirements;
// this middleware is ready for it.

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyAdminSession, ADMIN_SESSION_COOKIE } from '@/lib/auth';

export const config = {
  matcher: [
    /*
     * Match:
     *   - /admin
     *   - /admin/*
     *   - /api/admin/*   (but the login route below is allowlisted)
     */
    '/admin/:path*',
    '/api/admin/:path*',
  ],
};

const PUBLIC_ADMIN_API_PATHS = new Set<string>([
  '/api/admin/login',
]);

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (PUBLIC_ADMIN_API_PATHS.has(pathname)) {
    return NextResponse.next();
  }

  const token = req.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  if (!token) {
    return unauthorized(req);
  }

  const session = await verifyAdminSession(token);
  if (!session) {
    return unauthorized(req);
  }

  // Forward session identity to downstream handlers.
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('x-admin-id', session.sub);
  requestHeaders.set('x-admin-email', session.email);

  return NextResponse.next({ request: { headers: requestHeaders } });
}

function unauthorized(req: NextRequest) {
  const isApi = req.nextUrl.pathname.startsWith('/api/');
  if (isApi) {
    return NextResponse.json(
      { ok: false, error: 'Unauthorized' },
      { status: 401 }
    );
  }
  const url = req.nextUrl.clone();
  url.pathname = '/admin/login';
  url.searchParams.set('next', req.nextUrl.pathname);
  return NextResponse.redirect(url);
}
