# Skyways Component Library

The component library is organized by responsibility so pages compose interfaces rather than re-create styling. Import primitives from `@components/ui` and domain-neutral compositions from `@components/shared`.

## UI primitives

| Component group | Purpose and variants | Accessibility and future extension |
| --- | --- | --- |
| `Button` | Actions with primary, secondary, outline, ghost, link, danger, success, warning, CTA, and gradient variants; sm, md, lg, and icon sizes. Supports loading, icons, disabled, full width, and `className`. | Native button semantics, visible focus, and busy state. Add link polymorphism only if a shared routing abstraction is needed. |
| `Card` | Flexible surface with default, glass, hover, outlined, muted, dark, and empty variants. Includes content parts and named content-card presets. | Use semantic `as` when needed. Presets are visual only, keeping content ownership in the consuming feature. |
| `Typography` | Headings, hero/gradient titles, paragraphs, captions, labels, eyebrow, highlights, quote, and badge text. | Semantic heading level remains the caller’s choice; all text has contrast-safe defaults. |
| `Layout` | Container, section, grid, flex, stack, sidebar, page/content/responsive wrappers. | Responsive spacing and max-widths are built in; layout stays content-agnostic. |
| `Form` | Input, textarea, select, checkbox, radio, switch, search, placeholders, helpers, messages, and required marker. | Native controls, explicit error/status roles, focus styles. Connect formatting, date, and upload services later. |
| `Feedback` | Alert/toast/snackbar surfaces, spinner, skeleton, progress, status/notification badges, and empty/error/success/offline/maintenance states. | Uses alert/status roles where appropriate. Wire toast lifecycle into the notification provider later. |
| `Overlay` | Modal, drawer, side panel, bottom sheet, confirmation/alert dialogs, and wizard shell. | Includes dialog semantics and close affordances. Add focus trapping and Escape handling when overlays gain centralized state. |
| `DataDisplay` | Table, pagination, data list/statistics, chart placeholder, timeline, accordion, tabs, and collapsible. | Table headers, captions, tab roles, and accessible disclosure elements are included. Add sorting/virtualization only when data demands it. |

## Compositions

`Sections` supplies hero, content, feature, CTA, FAQ, statistics, timeline, grid, split, and newsletter shells. `Navigation` provides desktop/mobile menus, dropdown/mega-menu placeholder, breadcrumbs, groups, and sticky navigation. `Marketing` supplies banners, logo/trust collections, review/FAQ cards, grid shells, map placeholder, newsletter/contact blocks, and CTA strip. `Freight` provides display-only shipment, tracking, quote, carrier/equipment, invoice/load, document, dispatch/load, and TMS shells.

All compositions accept children and leave business data, mutations, analytics, and page copy to their callers. Examples:

```tsx
<ContentSection eyebrow="Services" title="Built to compose">
  <ServiceGrid>
    <ServiceCard title="Title" description="Description" />
  </ServiceGrid>
</ContentSection>

<Button variant="cta" loading={isSaving} rightIcon={<ArrowRight />}>Save</Button>
```
