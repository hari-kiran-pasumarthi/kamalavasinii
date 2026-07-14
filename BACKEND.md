# Kamalavasinii — Backend Setup

Production-ready backend built on Next.js 15 App Router, Prisma 5 and PostgreSQL.

## Prerequisites

1. A hosted PostgreSQL database (Neon / Supabase / Railway / RDS / etc.).
2. Razorpay test/live keys (optional — payment endpoints return `503` until configured).

## Environment variables

Add the following to `/app/.env` (see `.env.example`):

```
DATABASE_URL="postgresql://user:pass@host/dbname?sslmode=require"
NEXTAUTH_SECRET="<openssl rand -base64 48>"
NEXTAUTH_URL="https://your-domain.example"

RAZORPAY_KEY_ID="rzp_test_xxxxx"
RAZORPAY_KEY_SECRET="xxxxxxxxxxxx"

# Optional — auto-creates the first admin when running `prisma db seed`
ADMIN_EMAIL="admin@kamalavasinii.com"
ADMIN_PASSWORD="a-strong-password"
ADMIN_NAME="Kamalavasinii Admin"
```

## First-time setup

```bash
cd /app

# 1. Generate the Prisma client (safe to re-run).
npx prisma generate

# 2. Create the initial migration & apply it to your database.
npx prisma migrate dev --name init

# 3. Seed categories (and admin if ADMIN_* env vars are set).
npx prisma db seed
```

For production deployments use:

```bash
npx prisma migrate deploy
npx prisma db seed
```

## Architecture

```
prisma/
  schema.prisma        # Data model (Postgres)
  seed.ts              # Idempotent seed — categories + optional admin

lib/
  db.ts                # PrismaClient singleton
  auth.ts              # JWT admin session helpers (jose)
  razorpay.ts          # Razorpay client + HMAC signature verification
  contactSchema.js     # zod schema (shared client + server)
  repositories/
    inquiryRepository.ts
    adminRepository.ts
    paymentRepository.ts
    categoryRepository.ts

app/api/
  contact/route.js               # POST inquiry (delegates to inquiryRepository)
  admin/login/route.ts           # POST { email, password } → sets HttpOnly cookie
  admin/logout/route.ts          # POST → clears cookie
  admin/me/route.ts              # GET (middleware-protected)
  payment/create-order/route.ts  # POST { amount, currency, receipt, notes }
  payment/verify/route.ts        # POST { razorpay_order_id, _payment_id, _signature }

middleware.ts          # Edge middleware protecting /admin/* and /api/admin/*
                       # (login route is public-listed)
```

All DB access is done through repositories — API routes never import
`@prisma/client` directly. This keeps business logic outside HTTP handlers
and makes future refactors (caching, testing, service extraction) trivial.

## Admin auth flow

1. `POST /api/admin/login` with `{ email, password }`.
2. On success, an `HttpOnly` `kv_admin_session` JWT cookie is set (8h TTL).
3. `middleware.ts` verifies the cookie for every request under `/admin/*`
   and `/api/admin/*` (except `/api/admin/login`).
4. The verified admin identity is forwarded to downstream routes via
   `x-admin-id` and `x-admin-email` headers.

Passwords are hashed with `bcryptjs` at cost 12. Login uses a
timing-safe path so unknown emails and wrong passwords take the same time.

## Payments flow (Razorpay)

1. Client calls `POST /api/payment/create-order` with `{ amount, currency, receipt, notes }`.
   The server creates an order on Razorpay, persists a `Payment` row with status
   `CREATED`, and returns the `keyId` + `order`.
2. Client opens the Razorpay checkout with the returned order.
3. On checkout success, client calls `POST /api/payment/verify` with the
   `razorpay_order_id / razorpay_payment_id / razorpay_signature` triple.
4. The server verifies the HMAC-SHA256 signature using `RAZORPAY_KEY_SECRET`
   and marks the `Payment` row as `CAPTURED` (or `FAILED` on mismatch).

If `RAZORPAY_KEY_ID` / `RAZORPAY_KEY_SECRET` are missing, both endpoints
return `503 { ok: false, error: "Razorpay is not configured" }` — never a
mocked success response.
