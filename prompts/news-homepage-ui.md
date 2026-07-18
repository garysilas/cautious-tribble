# Biasly Homepage UI Implementation

## Goal

Replace the current design-system showcase at `/` with a responsive Biasly news home page that closely follows the supplied reference: compact utility and primary navigation bars, a horizontal topic strip, a three-column grid of editorial article cards, and a dark multi-column footer. Create the work on a new feature branch without disturbing the user’s existing uncommitted or untracked work.

## Skills read

- `/Users/gary/.agents/skills/frontend-design/SKILL.md`
- `node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md`
- `node_modules/next/dist/docs/01-app/01-getting-started/11-css.md`
- `node_modules/next/dist/docs/01-app/01-getting-started/12-images.md`
- `node_modules/next/dist/docs/01-app/01-getting-started/13-fonts.md`

## Existing code inspected

- `AGENTS.md` — the project workflow requires this prompt approval before implementation and specifies that production UI must ultimately display stored data only.
- `app/page.tsx` — currently a static design-system showcase.
- `app/globals.css` — contains the Biasly color, radius, and shadow token foundation.
- `app/layout.tsx` — already self-hosts Poppins through `next/font/google`.
- `package.json` — Next.js 16.2.10, React 19.2.4, and Tailwind CSS v4; no image or icon package is installed.
- `prompts/design-system-reference.md` — documented the preceding visual-system implementation.

## Decisions and assumptions

- This task is strictly the static visual home-page layer; it does not introduce Supabase, scraping, analysis, authentication, or action routes. A later data-integration task should replace the temporary visual card fixture with articles loaded from Supabase, per `AGENTS.md`.
- Work will begin from the current checked-out branch but create a new branch named `feat/news-homepage-ui` before code changes. The existing modified `AGENTS.md` and untracked `.agents/`, `eslint.config 2.mjs`, and `skills-lock.json` will remain untouched and unstaged.
- Reuse the existing Poppins setup and global design tokens. Update metadata from the design-system title to the home-page title only if that is needed for the page to be production-appropriate.
- Use semantic HTML, native buttons, and inline SVG for simple utility/social icons so no dependency is required.
- For the initial visual implementation, use stable, editorially appropriate remote image URLs via native `<img>` elements with explicit dimensions and `object-fit: cover`; do not add an image-host allow-list or a dependency. These are presentation fixtures, not scraped content.
- The reference’s top utility links, navigation choices, category chips, and footer links are visual only in this scope. They must have clear hover/focus affordances but need not navigate to unimplemented routes.

## Visual interpretation

- **Design direction:** compact, trustworthy editorial newsroom. The atmosphere is quiet and practical rather than a marketing landing page: near-black utility bar, warm off-white canvas, white cards, very thin gray rules, restrained corners, and dense but legible content.
- **Top utility bar:** a 24–28px high charcoal strip with small subdued links on each side. Show browser/theme labels left and date, location, and edition controls right. Collapse nonessential details at narrow widths.
- **Primary header:** white row with hamburger, typographic `biasly` wordmark and tiny `News` label, four editorial nav items, a dark Subscribe button, and outlined Login button. Maintain a single fine bottom border.
- **Topic rail:** a narrow, horizontally scrollable rail of pale gray pills separated from the header by rules. Include visible left/right scroll affordances only when useful, without introducing browser-side state.
- **Content area:** centered at approximately 1,180–1,280px wide with a compact `Top News` title. At desktop, use three equal columns and four rows of article cards. Every card includes a consistent 16:9 image, a small category/location line, a bold compact headline, a three-part red/neutral/blue bias meter with labels and percentages, a source count, and a small circular information glyph over the image.
- **Card visual language:** white surface, `1px` cool-gray border, 4–6px radius, no dramatic shadows, image contained at the top, and deliberate 16–18px interior padding. Headlines have a tight editorial rhythm and clamp so card heights remain orderly.
- **Footer:** deep charcoal band with a compact Biasly mark/value statement, Company and Help link columns, a Connect icon cluster, plus a final narrow legal rule and copyright line.
- **Responsive behavior:** use three columns on wide desktop, two on tablet, and one card column on mobile. Header navigation condenses cleanly, chip rail remains horizontally accessible, page gutters reduce, controls preserve tap targets, and no viewport should have horizontal body overflow.

## Files likely to change

- `app/page.tsx`
- `app/globals.css`
- `app/layout.tsx`
- `prompts/news-homepage-ui.md`

## Implementation requirements

1. Create and switch to `feat/news-homepage-ui` before modifying application code. Do not stash, reset, discard, stage, or otherwise alter the pre-existing user changes.
2. Replace the design-system showcase at `app/page.tsx` with a typed, reusable static presentation structure for the header, topic chips, article cards, bias meter, and footer. Keep the page a Server Component; do not add `"use client"` or client-only state for static UI.
3. Populate the page with a 12-item temporary visual fixture that matches the reference’s content density and varied news imagery. Each card must include all fields necessary to render the reference structure and render with a stable React key.
4. Make article card images meaningful and give every image contextual, nonempty `alt` text. Explicitly size or aspect-ratio-constrain the image region to prevent layout shifts.
5. Use CSS/Tailwind consistently with the existing application conventions. Reuse the established `--ink`, `--canvas`, `--surface`, `--border`, `--left`, `--center`, and `--right` variables for core visual styling. Add only narrowly scoped global utilities or tokens where repeated structure makes them valuable.
6. Preserve semantic hierarchy: a single page `<h1>` for `Top News`, articles as `<article>`, navigation as `<nav>` with labels, and a `<footer>`. Decorative inline SVG must be `aria-hidden`; interactive icon-only controls require accessible names.
7. Provide keyboard-visible `:focus-visible` affordances for buttons and links, readable contrast, and usable button sizes.
8. Update root metadata to describe Biasly news analysis rather than the design-system showcase.
9. Do not add database access, API routes, environment variables, dependencies, credentials, authentication, scraping, or mutation behavior.
10. Do not alter `AGENTS.md`, `.agents/`, `eslint.config 2.mjs`, `skills-lock.json`, repository security settings, or unrelated project files.

## Security requirements

- Do not introduce credentials, environment variables, remote data fetching, or any browser-exposed server configuration.
- Treat the temporary fixtures as display-only and do not wire mutations or admin controls into the UI.
- Do not weaken image, build, lint, TypeScript, or repository security configuration.
- Keep existing uncommitted and untracked user files unchanged.

## Acceptance criteria

- A new `feat/news-homepage-ui` branch exists and retains the user’s pre-existing work unchanged.
- `/` visually reads as the provided Biasly news home page at desktop: utility bar, navigation, topic chips, `Top News` title, 12 cards in a three-column grid, and dark footer are all present.
- Each article card contains the expected editorial image, taxonomy line, headline, info glyph, left/center/right meter, and source count.
- The existing Biasly visual language is retained: Poppins typography, warm canvas, restrained borders/radii, charcoal controls/footer, and red-to-blue bias encoding.
- The layout adapts without horizontal overflow at roughly 1280px, 768px, and 375px viewports.
- No client state, database access, API calls, dependencies, secrets, or unrelated configuration changes are introduced.
- `npm run lint` and `npm run build` pass.

## Checks to run

```bash
npm run lint
npm run build
```

## Exact manual test steps expected after implementation

1. From `/Users/gary/Documents/skew-news`, run `npm run dev`.
2. Open `http://localhost:3000` at a desktop viewport around 1280px wide.
3. Confirm the near-black utility strip, white navigation row, topic chip rail, `Top News` heading, three-column card grid, and charcoal footer match the supplied hierarchy and compact editorial density.
4. Confirm all 12 cards show an editorial image, contextual category line, readable headline, three-part political-bias meter, source count, and information indicator.
5. Resize to approximately 768px; confirm the article grid changes to two columns and header/topic content remains orderly.
6. Resize to 375px; confirm cards are one column, controls remain usable, the topic rail scrolls horizontally as needed, and the document has no horizontal overflow.
7. Use Tab to confirm visible focus treatment on navigation, buttons, topic controls, and footer links.
