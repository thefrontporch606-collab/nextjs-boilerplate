# The Front Porch

The Front Porch is being rebuilt as a mobile-first veteran navigation platform for Kentucky with future nationwide scalability.

> **Mission:** Ensure no Veteran ever runs out of places to turn for help.

## Project status

Active redesign work is isolated on feature branches. The production branch must not be replaced until the redesigned application has passed content review, accessibility checks, responsive testing, and deployment verification.

Safety branches:

- `main` — current production source
- `backup/pre-redesign-2026-07-29` — point-in-time backup from before the redesign
- `redesign/foundation` — active design-system and application-foundation work

## Technology

The repository currently runs:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS tooling
- GitHub source control
- Cloudflare deployment

The planned data platform is Supabase/PostgreSQL. Public resources, organizations, Hometown Heroes, events, discounts, and verification records should be structured and database-driven rather than embedded permanently inside page components.

## Product principles

Every decision should answer one question:

> **Does this make it easier for a Veteran to get help?**

Core standards:

1. Mobile-first before desktop enhancement.
2. Accessible by keyboard, screen reader, touch, and assistive technology.
3. Fast enough for rural cellular connections.
4. Verified information with visible review dates.
5. Search by a Veteran's need, not only by organization name.
6. Reusable components and structured data instead of page-specific duplication.
7. Restrained use of patriotic styling: professional navy, white, warm neutrals, and purposeful red accents.

## Primary navigation

Navigation order is fixed unless the organization approves a change:

1. Home
2. Veteran Support
3. Veteran Resources
4. Shop
5. Hometown Heroes
6. Donate

Donate remains visually prominent and available from every page. Its destination is configured with:

```bash
NEXT_PUBLIC_DONATION_URL=https://givebutter.com/your-campaign
```

Until the final Givebutter URL is supplied, the site uses the existing campaign URL as a fallback.

## Design system

Global design tokens live in `app/globals.css` and use the `--tfp-*` prefix. Shared navigation configuration lives in `lib/site-config.ts`.

The system establishes:

- Brand colors
- Spacing and content width
- Border radiuses
- Shadows
- Focus states
- Sticky global navigation
- Mobile navigation behavior
- Reduced-motion support

Do not introduce isolated color values or new navigation arrays inside individual pages unless a documented design-system need requires it.

## Planned architecture

```text
app/
  layout.tsx
  page.tsx
  veteran-support/
  veteran-resources/
  shop/
  hometown-heroes/

components/
  navigation/
  resources/
  heroes/
  layout/
  ui/

lib/
  site-config.ts
  resources/
  supabase/

types/
  resource.ts
  hero.ts
```

## Hometown Heroes requirements

The redesign must preserve all legitimate existing hero records and their current information.

Display order:

1. Fallen/KIA heroes
2. Veterans who served

Required features:

- Existing memorial quotes retained
- Modern mobile-first cards
- Individual memorial view or page
- Share action
- Print action
- Submit correction action
- Submit a Hometown Hero action
- Search and future filtering
- No fake public placeholder veteran records

## Veteran Resources requirements

Resources are grouped consistently:

1. London / Corbin
2. Southeastern Kentucky
3. Kentucky
4. Federal

Each resource should ultimately include structured fields for organization, category, region, county, city, address, phone, website, email, eligibility, services, description, tags, verification date, and internal notes.

Unverified or incomplete records must not be presented as verified public information.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Quality checks:

```bash
npm run lint
npm run build
```

A branch is not ready for production until both commands pass.

## Deployment workflow

1. Build work on a feature branch.
2. Run lint and production build checks.
3. Review mobile and desktop layouts.
4. Verify all navigation and external destinations.
5. Open a pull request into `main`.
6. Review the Cloudflare preview deployment.
7. Merge only after approval.
8. Confirm `frontporch606.com` after deployment.

Do not push unfinished redesign work directly to `main`.

## Environment variables

Create `.env.local` for local-only values. Never commit credentials or service-role keys.

```bash
NEXT_PUBLIC_DONATION_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

Only variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. The Supabase service-role key must remain server-side.

## Content maintenance

When adding a resource:

1. Confirm the organization is usable by Veterans.
2. Record the source used for verification.
3. Confirm contact information and service area.
4. Assign category, region, and internal tags.
5. Add the verified date and next review date.
6. Publish only after review.

When adding a Hometown Hero:

1. Confirm permission to publish the submitted material.
2. Preserve names, ranks, branch information, dates, and memorial wording accurately.
3. Optimize photographs without altering their historical meaning.
4. Review spelling and service information before publication.

## Accessibility baseline

- Semantic landmarks and headings
- Skip link
- Visible keyboard focus
- Minimum touch-target sizing
- Sufficient text contrast
- Meaningful alt text
- No critical information conveyed only by color
- Respect `prefers-reduced-motion`
- Dialogs and mobile menus must manage labels and keyboard behavior correctly

## Backup and recovery

The pre-redesign source is preserved on `backup/pre-redesign-2026-07-29`. Git history should remain intact even after obsolete files are removed from the final production branch.

Before large deletions:

1. Confirm the replacement feature is complete.
2. Search for imports and asset references.
3. Verify a production build.
4. Review the deletion in a pull request.
5. Keep the backup branch unchanged.

## Long-term direction

The Front Porch should evolve from a directory into a navigation platform where a Veteran describes the problem and receives the strongest available local, regional, state, and federal pathways. The architecture should support resource relationships, guided search, maps, favorites, verification workflows, and future expansion beyond Kentucky without requiring a rebuild.

<!-- Cloudflare preview deployment trigger: 2026-07-30 -->
