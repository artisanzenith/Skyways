# Coding Standards

## Imports
- Use absolute aliases for project modules.
- Keep component imports separate from config/constants.
- Prefer `@config/*`, `@constants/*`, `@lib/*`, `@types/*`, `@providers/*`, and `@hooks/*`.

## TypeScript
- Use `strict` mode.
- Avoid `any` unless absolutely necessary.
- Prefer reusable types and interfaces in `types/`.

## Components
- Keep reusable UI in `components/ui` or `components/shared`.
- Avoid hardcoded text and configuration values in component markup.
- Use centralized config for company info and navigation.
- Reuse `components/ui` controls before introducing raw styled controls in routes.
- Use `next/link` for internal navigation and keep client component boundaries as small as possible.

## Architecture
- Separate UI from business logic and validation.
- Keep services and API logic outside page components.
- Use `providers/` for future cross-cutting concerns.
- Never rely on client-side validation for security; repeat validation and authorization on the server.
