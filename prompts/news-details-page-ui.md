# Biasly News Details Page UI Implementation

## Goal

Create a responsive, static article-details presentation at `/news/[slug]` that closely follows the supplied Biasly reference: the established compact site chrome, article headline and metadata, a feature image, readable story content and related coverage on the left, and a dense analysis sidebar on the right. The page should make the homepage article fixture navigable to its corresponding details route without adding database, AI, authentication, API, or mutation functionality.

## Skills read

- `/Users/gary/.agents/skills/frontend-design/SKILL.md`
- `node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md`
- `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/dynamic-routes.md`
- `node_modules/next/dist/docs/01-app/01-getting-started/11-css.md`
- `node_modules/next/dist/docs/01-app/01-getting-started/12-images.md`

## Existing code inspected

- `AGENTS.md` — requires an approved prompt before implementation, uses Supabase as the eventual data source, and prohibits UI-driven pipeline mutations.
- `app/page.tsx` — the current static homepage fixture establishes article IDs, article taxonomy, compact navigation/footer conventions, reusable inline SVG icons, remote editorial images, and the `peace-proposal` lead article represented in the reference.
- `app/globals.css` — defines Biasly’s shared canvas, ink, surface, border, left/center/right bias colors, radii, and shadow tokens.
- `app/layout.tsx` — supplies the existing Poppins font and global Biasly metadata.
- `package.json` — confirms Next.js 16.2.10, React 19.2.4, and Tailwind CSS v4 are available; no icon or image package is installed.
- `prompts/news-homepage-ui.md` — documents visual conventions already implemented on the home page.

## Decisions and assumptions

- The new work is on the freshly recreated `feat/news-detail-page-ui` branch, based on the current `main` branch. The prior outdated branch with that name was explicitly deleted and recreated at the user’s direction.
- Create the dynamic Server Component route `app/news/[slug]/page.tsx`. In this display-only phase, it will use a typed local visual fixture keyed by the route slug; `/news/peace-proposal` is the canonical reference fixture. Unknown slugs should use Next.js `notFound()` rather than rendering invented data.
- Update homepage article cards to link to `/news/<article-id>` using Next.js `Link`, preserving their present visual appearance and providing a real navigation path into the detail experience.
- Data remains a temporary UI fixture only. A later Supabase task must replace it with stored `articles`, `article_analyses`, and related-article data while retaining the same visual information hierarchy.
- Reuse the current Poppins typeface, global color tokens, native `<img>` elements with explicit dimensions/aspect ratio, Tailwind utility styling, and inline SVG icons. Do not add dependencies, image remote-host configuration, or image assets.
- The shared visual structure may be copied locally only as necessary. Do not prematurely add component folders or broad abstractions for a single static page.

## Visual interpretation

- **Direction:** a restrained, analytical editorial reading experience that continues the existing warm-off-white canvas, fine gray rules, compact Poppins typography, and near-black utility/header/footer treatments. It should feel like a credible newsroom analysis page, not a dashboard or marketing page.
- **Site chrome:** preserve the existing dark 24px utility strip and compact white primary navigation at desktop. Include the Biasly wordmark, editorial navigation, Subscribe/Login controls, and a subtle horizontal topic rail where appropriate. On small screens, retain brand and essential controls without horizontal page overflow.
- **Desktop composition:** use a centered content wrapper around 1,180–1,280px wide. Place a broad article column and a fixed, narrower right analysis rail in a two-column grid with a 24–32px gutter. The reading column should carry the headline, author/date/read-time/share controls, 16:9 hero image/caption, bias distribution, story paragraphs, and a related-stories grid. The right rail stacks analysis cards.
- **Article header:** show muted `Politics · United States` taxonomy, the reference headline, a compact byline/date/read-time row, and small save/share/more affordances. The headline must be the single page `<h1>`, in a tight bold editorial scale that is visually dominant but does not overwhelm the desktop layout.
- **Story content:** create realistic, readable fixture paragraphs with a lead inset/excerpt and well-spaced body copy. Add an understated hero caption/credit. The main content must read as one coherent story, not a copied web dump.
- **Bias Distribution:** display a bordered card beneath the hero with a compact labeled three-part horizontal meter: Left 20%, Center 31%, Right 49%, and a 12-source label. Preserve the existing red / neutral gray / blue encoding.
- **Right analysis rail:**
  - `Bias Analysis` card: show `Right 49%` as the lead result, a three-row distribution, a short framing explanation, and a bordered `How We Analyze Bias` button.
  - `AI Summary` card: show generated-at/read-time metadata, several concise bullet points, an `AI summaries can make mistakes.` disclosure, and a `Provide Feedback` control.
  - `Source Breakdown` card: show 12 total sources, the same distribution meter, a compact source list with individual Left/Center/Right labels, and a `View All Sources` control.
  - Informational glyphs must be decorative when no interaction is supplied; icon-only interactive controls must have accessible names.
- **Related stories and signup:** add a small, image-led related-story grid after the article copy and an unobtrusive `Stay Informed. Stay Balanced.` newsletter treatment near the bottom, followed by the established dark multi-column footer.
- **Spacing and surface treatment:** prioritize reference density: 1px cool-gray borders, 4–6px radii, white panels, minimal shadows, 12–20px card padding, 24–40px section spacing, and no decorative gradients, oversized rounded cards, or dramatic motion.
- **Responsive behavior:** at tablet sizes, collapse the page to one article column with the analysis cards below it; at phone widths, reduce gutters and headline size, stack metadata/actions cleanly, allow the related stories to use one or two appropriate columns, retain tap-sized controls, and prevent horizontal body overflow.

## Files likely to change

- `app/news/[slug]/page.tsx` (new)
- `app/page.tsx`
- `app/globals.css` (only if a small, reusable global utility or token is necessary)
- `prompts/news-details-page-ui.md`

## Implementation requirements

1. Keep the page a Server Component: do not add `"use client"`, browser state, remote fetching, or client-only routing logic. In Next.js 16, type `params` as a promise and await it before looking up the slug.
2. Create a typed article-detail fixture for `peace-proposal` containing all data used by the details page: article metadata, hero image/caption, body paragraphs, distribution values, summary, source list, and related-story fields.
3. Reject unsupported fixture slugs with `notFound()`. Do not create `generateStaticParams`, because the live app will eventually resolve Supabase-driven article URLs.
4. Update each homepage article card so its headline/image or the entire card is a semantic link to `/news/${article.id}`. Preserve card keyboard focus affordances and avoid invalid nested interactive elements.
5. Use semantic elements: `<header>`, `<nav>`, `<main>`, one `<h1>`, `<article>`, `<aside>` for analysis, headings in logical order, and `<footer>`. Use buttons only for controls, with accessible labels where their purpose is icon-only.
6. Use the existing `--ink`, `--canvas`, `--surface`, `--border`, `--left`, `--center`, and `--right` variables. Do not replace established visual foundations or alter unrelated homepage content.
7. Provide nonempty, contextual alternative text for all meaningful imagery and set explicit width/height or an aspect-ratio-constrained container to avoid layout shifts.
8. Ensure interactive links/buttons have visible focus states, maintain readable contrast, and preserve usable touch targets.
9. Do not add database access, Supabase queries, API routes, AI calls, environment variables, credentials, authentication, dependencies, action routes, or pipeline mutations.
10. Do not modify `AGENTS.md`, `.agents/`, `eslint.config 2.mjs`, `skills-lock.json`, repository security settings, or any other unrelated files.

## Security requirements

- Do not introduce secrets, environment variables, browser-exposed configuration, external API calls, or remote data fetching.
- Keep all content display-only; no form submission, analysis trigger, scrape trigger, or database mutation is permitted.
- Do not weaken TypeScript, lint, build, image, or repository-security configuration.
- Preserve the user’s pre-existing modified `AGENTS.md` and untracked `.agents/`, `eslint.config 2.mjs`, and `skills-lock.json` files without staging or editing them.

## Acceptance criteria

- `feat/news-detail-page-ui` exists, was recreated from current `main`, and contains no changes to the user’s pre-existing local files.
- `/news/peace-proposal` renders an article-details page that closely matches the supplied desktop reference: site chrome, two-column article/analysis composition, hero, three-way distribution, article copy, Bias Analysis, AI Summary, Source Breakdown, related stories, newsletter, and footer.
- The fixture uses the expected `Politics · United States` article and `20% / 31% / 49%` distribution, with Right 49% leading the analysis rail.
- Homepage article cards navigate to matching `/news/<article-id>` routes, and unknown article slugs show the Next.js not-found page rather than generic or fabricated content.
- The desktop page has a clear reading hierarchy and reference-like density; it uses the existing warm canvas, restrained borders/radii, Poppins typography, charcoal chrome, and red/neutral/blue bias encoding.
- At approximately 1280px, 768px, and 375px widths, the layout is legible, balanced, keyboard-accessible, and has no horizontal overflow.
- No dependencies, credentials, network calls, Supabase access, AI calls, API routes, client state, or unrelated configuration changes are introduced.
- `npm run lint` and `npm run build` pass.

## Checks to run

```bash
npm run lint
npm run build
```

## Exact manual test steps expected after implementation

1. From `/Users/gary/Documents/skew-news`, run `npm run dev`.
2. Open `http://localhost:3000/news/peace-proposal` at a viewport around 1280px wide.
3. Confirm the dark utility strip and compact white site header appear above a centered two-column layout: article reading content on the left and the three stacked analysis cards on the right.
4. Confirm the article taxonomy, headline, byline row, hero image/caption, `Left 20% / Center 31% / Right 49%` distribution, coherent body copy, related stories, newsletter treatment, and dark footer are visible in the expected order.
5. Verify the sidebar has `Bias Analysis` with `Right 49%`, `AI Summary` with concise bullets and a disclaimer, and `Source Breakdown` with a 12-source list and left/center/right labels.
6. Navigate to `http://localhost:3000`, use a homepage article card, and confirm it links to `/news/<article-id>` without a full-page navigation error.
7. Open `http://localhost:3000/news/unknown-slug` and confirm it renders the application’s not-found response.
8. Resize to approximately 768px and 375px. Confirm the analysis rail moves below the article content, controls remain readable and usable, and there is no horizontal body overflow.
9. Navigate using the keyboard and confirm visible focus indicators appear on links and controls.
