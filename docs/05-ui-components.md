# UI Component Guidelines

## shadcn/ui First
- Use `shadcn/ui` components for all UI elements.
- Do not build custom components unless the needed interface is unavailable in `shadcn/ui`.
- Prefer existing shadcn primitives and patterns over ad hoc markup.

## No Custom Components
- Avoid creating custom reusable components for standard UI patterns.
- If a component is missing, check `components.json` first and use the nearest shadcn equivalent.
- Only add custom components when a truly new, app-specific UI behavior is required.

## Component Usage
- Use server components by default in `app/` routes.
- Add `"use client"` only when state, effects, or browser-only APIs are required.
- Keep markup simple and leverage shadcn styling props.

## Examples
- Use `Button`, `Input`, `Card`, `Dialog`, `Toast`, and other shadcn/ui components.
- Compose existing shadcn/ui components instead of copying patterns into new custom components.
