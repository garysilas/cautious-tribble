# Biasly Design System Reference Implementation

## Goal

Replace the starter Next.js landing page with a responsive, polished Biasly design-system showcase that faithfully interprets the supplied reference. Establish reusable visual tokens and demonstrate them through the brand, typography, color, controls, iconography, card, spacing, grid, elevation, radius, and footer specimens shown in the reference.

## Skills read

- `/Users/gary/.agents/skills/frontend-design/SKILL.md`
- `node_modules/next/dist/docs/01-app/01-getting-started/11-css.md`
- `node_modules/next/dist/docs/01-app/01-getting-started/13-fonts.md`

## Existing code inspected

- `app/page.tsx` — default Create Next App starter screen.
- `app/globals.css` — Tailwind v4 import plus starter colors and type rules.
- `app/layout.tsx` — root layout currently loads Geist and has starter metadata.
- `package.json` — Next.js 16.2.10, React 19.2.4, Tailwind CSS v4; no component or icon libraries are installed.

## Decisions and assumptions

- The supplied image is a visual reference for the initial Biasly design-system page, so the current `/` route will become the showcase rather than a production news feed.
- The look should be restrained editorial software design: warm off-white canvas, thin cool-gray borders, black/charcoal typography, dark primary controls, and a clear red-to-blue political-bias spectrum.
- Use the `Poppins` font through `next/font/google` to match the reference’s typography, retaining the compact, bold display treatment and readable regular body copy.
- Implement the illustration/news-card imagery using a remote source only if Next Image configuration is not required; otherwise use a CSS gradient/image-free editorial placeholder. Do not add a dependency merely for icons: use accessible inline SVG icon specimens.
- The implementation should establish color, spacing, typography, shadow, and radius custom properties in global CSS so later product pages can reuse the same system.
- Preserve the user’s existing untracked files (`.agents/`, `eslint.config 2.mjs`, and `skills-lock.json`) without modifying or staging them.

## Files likely to change

- `app/layout.tsx`
- `app/globals.css`
- `app/page.tsx`
- `prompts/design-system-reference.md`

## Implementation requirements

1. **Root document and visual primitives**
   - Update application metadata for Biasly.
   - Load Poppins with the required weights and expose it as the app font variable.
   - Remove the starter automatic dark-mode inversion so the reference’s light theme stays stable.
   - Define reusable CSS custom properties for the reference palette: primary/text, text-muted, surface, borders/dividers, red left-bias, neutral center, blue right-bias, and 4px-based spacing, radii, and elevation levels.

2. **Page composition**
   - Build a large, centered design-board canvas with a two-column top row, modular middle rows, and a full-width dark footer.
   - Use a restrained 8–10px radius on panels, 1px light borders, modest section padding, and an information-dense layout that stays breathable.
   - Make every panel stack or reflow cleanly on tablet and mobile; no essential content may be clipped or require horizontal scrolling.

3. **Reference sections**
   - **Brand / Colors:** reproduce the Biasly wordmark typographically (no generated logo asset), its `News` submark, tagline, color swatches, semantic swatches, and neutral swatches.
   - **Typography:** show Poppins and an H1–caption scale with visual hierarchy, usage labels, and the reference-like size, weight, and line-height table.
   - **UI elements:** demonstrate primary, secondary, text, hover/disabled/outline button variants; category chips; and the red-to-white-to-blue bias meter with its percentage labels.
   - **Icons / Card:** create a tidy grid of recognizable, accessible inline SVG interface icons and a realistic article-card specimen with category, title, summary, source/time metadata, and sentiment/bias meter.
   - **Foundation specimens:** show the 4px spacing scale, a 12-column grid illustration, four elevation samples, and the small/medium/large/full radius scale.
   - **Footer:** create the dark strip with compact wordmark, value statement, version/date metadata, and closing principle as shown in the reference.

4. **Quality and accessibility**
   - Use semantic headings and sections in proper hierarchy.
   - Ensure color contrast is suitable for interface labels and that muted text remains readable.
   - Use actual `<button>` elements for button examples and mark purely decorative SVGs `aria-hidden="true"`.
   - Avoid client-side state, APIs, database access, scraping, authentication, and placeholder generated-app content. The design-system page is static and presentation-only.

## Security requirements

- Do not add credentials, environment values, or external data access.
- Do not expose server-only configuration in client code.
- Do not modify the unrelated untracked files or repository security configuration.

## Acceptance criteria

- `/` renders a polished Biasly design-system board closely matching the supplied reference’s structure, hierarchy, palette, type scale, and compact editorial character.
- The page includes all ten reference areas: brand, colors, typography, UI elements, icons, article card, spacing, grid, shadows, border radius, and footer.
- Global CSS contains reusable system tokens instead of one-off, scattered color values for the core design language.
- The page works at desktop, tablet, and narrow mobile widths without horizontal overflow.
- The default Next.js content and dark-mode starter styles are gone.
- `npm run lint` and `npm run build` succeed.

## Checks to run

```bash
npm run lint
npm run build
```

## Manual test steps after implementation

1. Run `npm run dev` from `/Users/gary/Documents/skew-news`.
2. Open `http://localhost:3000`.
3. At a desktop viewport, verify the design-board panels visually match the provided reference and all specimens are present.
4. Resize to approximately 768px and 375px wide; confirm panels stack/reflow, body text remains legible, and the page has no horizontal overflow.
5. Verify primary/secondary/text button examples have visible hover and disabled treatments, and the bias meter clearly communicates left, center, and right labels.
