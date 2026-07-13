# SKYWAYS Logistics Application Architecture

## Folder Structure

- `app/` — Next.js app routes and global layout.
- `components/` — UI components organized by responsibility.
- `config/` — Centralized application configuration and settings.
- `constants/` — Reusable constants for routes, colors, theme, and UI patterns.
- `providers/` — Future-ready provider wrappers for theme, auth, notifications, analytics.
- `lib/` — Internal utilities, validation, error handling, and shared logic.
- `types/` — Shared TypeScript interfaces and type definitions.
- `hooks/` — Reusable React hooks.
- `docs/` — Project documentation and architecture guidelines.

## Architecture Principles

- Separate UI from business logic.
- Keep configuration and constants centralized.
- Avoid hardcoded company or contact data inside components.
- Preserve existing app functionality while preparing future growth.
- Use strict TypeScript and explicit types.

## Layer Boundaries

- `app/` owns routes, metadata, and composition only. It must not contain reusable UI, business services, or data-access code.
- `components/ui/` contains domain-neutral, accessible primitives. `components/shared/` contains reusable compositions for logistics and marketing.
- `config/` contains static, non-sensitive product configuration. Secrets and environment-specific values must remain in environment variables.
- `lib/validation/` is the single source of truth for validation schemas. Client forms may reuse schemas, but server actions and API routes must validate independently before accepting data.
- `types/` contains shared contracts only. Feature-specific types belong with their future feature module until they are genuinely cross-cutting.

## Future Application Modules

When dashboards and operations features are introduced, use route groups and feature modules rather than adding business logic to shared UI:

- `app/(customer)/dashboard`, `app/(carrier)/dashboard`, `app/(dispatcher)/dashboard`, and `app/(admin)/dashboard` own role-specific route composition.
- `features/crm`, `features/tms`, `features/load-board`, and `features/ai-assistant` should own their services, schemas, queries, and feature components.
- The mobile application should consume versioned API contracts; it must not depend on web component implementations.
- Authorization, tenancy, audit trails, rate limits, and server-side validation are mandatory foundations before operational data is exposed.

## Key Responsibilities

- `config/`: company info, SEO defaults, navigation, contact, socials.
- `constants/`: route constants, theme values, form messages, animation durations.
- `lib/`: utilities, loading helpers, validation schema, error handling.
- `providers/`: placeholder providers for future feature integration.
- `hooks/`: reusable client logic such as breakpoint detection.
- `server/`: server-only API standards, actions, data access, and infrastructure provider boundaries.
- `prisma/`: PostgreSQL foundation schema, future migrations, and seed entry point.
