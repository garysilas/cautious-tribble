# Biasly Clerk Authentication Implementation

## Goal

Add Clerk authentication to the Biasly Next.js application so visitors can sign up and sign in from the existing site navigation, while signed-in users see an account menu. Preserve the public editorial browsing experience; this task does not add user-specific data, subscriptions, or protected news routes.

## Skills read

- `.agents/skills/clerk/SKILL.md`
- `.agents/skills/clerk-setup/SKILL.md`
- `.agents/skills/clerk-nextjs-patterns/SKILL.md`
- Clerk’s current Next.js quickstart: `https://clerk.com/docs/nextjs/getting-started/quickstart`
- `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/proxy.md`

## Existing code inspected

- `AGENTS.md` — requires an approved implementation prompt before code changes, specifies Clerk as the authentication provider, and requires minimal responsive UI.
- `package.json` — confirms a Next.js 16.2.10 App Router project using npm, React 19.2.4, and no existing authentication SDK.
- `app/layout.tsx` — current root server layout supplies Poppins and application metadata.
- `app/page.tsx` — current public homepage has unconnected Subscribe and Login controls in the primary navigation.
- `app/news/[slug]/page.tsx` — current public article page duplicates the site navigation and unconnected Login control.
- `.gitignore` — environment files are ignored, so Clerk keys must remain local and never be committed.
- No `components.json`, existing Clerk package, Clerk configuration, auth routes, middleware/proxy, or alternative auth implementation is present.

## Decisions and assumptions

- Use the official Clerk CLI setup flow after approval: verify/update the CLI, authenticate with `clerk auth login`, then run `clerk init` from this existing project. The user will complete any browser-based Clerk authentication and application configuration prompts.
- Use the current `@clerk/nextjs` SDK installed by Clerk; do not use Supabase Auth or another authentication provider.
- Because this project uses Next.js 16, use the current `proxy.ts` file convention, not deprecated `middleware.ts`.
- Configure Clerk in a public-first mode: the home page and article detail routes remain readable without an account. There are no existing user-specific capabilities to protect in this task.
- Reuse the existing navigation controls rather than adding a second auth header. Signed-out visitors get Sign up and Login actions; signed-in visitors get Clerk’s `UserButton` in the same position. The existing Subscribe control remains present and is not given subscription behavior.
- Add Clerk-hosted sign-in/sign-up route pages only if `clerk init` does not generate them. Use them as the explicit destinations for navigation controls when appropriate.
- Clerk publishable and secret keys are local environment configuration only. Do not read, print, commit, or expose the secret key to browser code.

## Files likely to change

- `package.json`
- `package-lock.json`
- `app/layout.tsx`
- `app/page.tsx`
- `app/news/[slug]/page.tsx`
- `proxy.ts`
- `app/sign-in/[[...sign-in]]/page.tsx` (only if required after CLI initialization)
- `app/sign-up/[[...sign-up]]/page.tsx` (only if required after CLI initialization)
- local ignored Clerk environment file such as `.env.local` (created and managed by Clerk CLI; never committed)
- `prompts/clerk-authentication.md`

## Implementation requirements

1. Follow the current Clerk quickstart and let `clerk init` configure the existing Next.js app where possible; inspect its changes rather than blindly replacing application code.
2. Install and use `@clerk/nextjs` only. Add `<ClerkProvider>` inside the root layout’s `<body>` without changing the document structure, Poppins setup, or metadata unnecessarily.
3. Add root-level `proxy.ts` using `clerkMiddleware()` and Clerk’s documented static-asset exclusion matcher. Ensure auth/API requests are handled by the matcher without intercepting static files.
4. Ensure accessible, clear sign-up, sign-in, and signed-in account controls are integrated into the existing desktop and responsive navigation on both public page templates. Preserve focus styles, compact typography, and the established Biasly visual language.
5. Use Clerk’s React components from `@clerk/nextjs` for the control states. Do not implement custom credential collection, session cookies, or client-side secret handling.
6. Create Clerk `SignIn` and `SignUp` catch-all routes only if initialization did not create working routes; configure the provider/control paths consistently.
7. Keep the news homepage and article detail routes public. Do not invent dashboard, user profile, organization, billing, saved-story persistence, or protected API functionality.
8. Do not edit `AGENTS.md`, `.agents/`, unrelated project configuration, or repository security controls.

## Security requirements

- Run Clerk authentication/application setup only after the user confirms the CLI checklist and completes any required interactive browser login.
- Never read or display existing environment file contents, Clerk keys, session tokens, or cookies.
- Never commit local environment files or secrets. Confirm ignored environment configuration remains untracked.
- Use Clerk’s server-side proxy integration; do not create custom authentication or expose `CLERK_SECRET_KEY` through public variables or client components.
- Preserve public access to existing news content and avoid accidental route-wide blocking.

## Acceptance criteria

- The project uses the current `@clerk/nextjs` SDK and has a root `<ClerkProvider>` inside `<body>`.
- A valid Next.js 16 `proxy.ts` initializes `clerkMiddleware()` with a matcher that excludes static assets.
- Signed-out visitors can see and use Sign up and Login controls in the shared navigation on the home and article-detail views.
- Signed-in visitors see a Clerk `UserButton` instead of redundant sign-in controls.
- `/sign-in` and `/sign-up` render Clerk authentication flows.
- `/` and `/news/peace-proposal` remain publicly viewable.
- No credentials or environment values are committed or printed.
- `npm run lint`, `npm run build`, and `clerk doctor` pass or any environment-dependent limitation is reported precisely.

## Checks to run

1. `npm run lint`
2. `npm run build`
3. `clerk doctor`
4. Start `npm run dev` and inspect `/`, `/news/peace-proposal`, `/sign-in`, and `/sign-up` in a browser.
5. Confirm `git status --short` does not list any `.env*` file or secret-bearing file for commit.

## Exact manual test steps expected after implementation

1. In a terminal at the project root, run `npm run dev`.
2. Open `http://localhost:3000` and confirm the news feed remains visible without signing in, with Sign up and Login controls in the header.
3. Select Sign up, create a test Clerk account, and complete Clerk’s flow.
4. After returning to the app, confirm the header displays the Clerk profile/account button in place of sign-in actions.
5. Open the account button and confirm the Clerk user menu is available; sign out from it.
6. Select Login and verify that the same test account can sign in again.
7. Open `http://localhost:3000/news/peace-proposal` signed out and verify the article remains public and its header shows the appropriate signed-out controls.
8. Visit `http://localhost:3000/sign-in` and `http://localhost:3000/sign-up` directly to confirm both Clerk routes render.
9. In a separate terminal, run `clerk doctor`, `npm run lint`, and `npm run build`.
