# Backend Architecture

## Boundaries

- `app/api` contains thin HTTP route definitions only.
- `server/api` provides typed responses and one shared route guard.
- `server/actions` standardizes future Server Actions.
- `server/services` coordinates business use-cases; `server/repositories` owns database access.
- `server/database` owns Prisma client lifecycle; UI components must never import it.
- `server/security`, `server/logger`, `server/email`, `server/storage`, `server/cache`, and `server/jobs` are provider boundaries.

## API and actions

Use `createApiRoute` with `apiSuccess` for all new endpoints. Validate untrusted input with Zod in `server/validators`; errors are converted to the standard response envelope. Use `createServerAction` from a module marked `"use server"` when a feature action is added.

## Database

`prisma/schema.prisma` targets PostgreSQL and contains only shared foundation entities. Run `npm run db:validate` to validate the schema, `npm run db:generate` after setting `DATABASE_URL`, and create migrations only once an environment database is approved. Repositories receive the Prisma client through `BaseRepository`; services, actions, and routes must not query Prisma directly.

## Environment and security

Copy `.env.example` to `.env.local`. Only `NEXT_PUBLIC_*` values are browser-safe. Server configuration is validated on use, allowing the app to build and deploy without external credentials. The shared route wrapper already creates request IDs, logs failures, and provides a rate-limit integration point. Authentication, authorization, CSRF, spam protection, and provider integrations remain deliberately unimplemented until their respective modules.
