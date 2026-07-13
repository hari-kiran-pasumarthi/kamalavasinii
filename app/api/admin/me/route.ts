// Simple session-echo endpoint for the (future) admin dashboard to check
// whether the current cookie is valid. The middleware already gates this
// path, so if we reach the handler we ARE authenticated.

import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const email = request.headers.get('x-admin-email');
  const id = request.headers.get('x-admin-id');
  return NextResponse.json({
    ok: true,
    admin: { id, email },
  });
}
