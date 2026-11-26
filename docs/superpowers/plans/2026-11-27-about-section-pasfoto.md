# About Section & Portrait Photo Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a bilingual (`id` / `en`) About / Tentang section (`#about`) to the portfolio showcasing the owner's portrait photo (`public/pasfoto.jpeg`), personal engineering narrative, and key profile highlights, integrated into the main layout and sticky navigation bar.

**Architecture:** Extend the existing typed portfolio data layer (`src/types/portfolio.ts`, `src/data/portfolio.ts`) and UI translation dictionary (`src/data/translations.ts`) with `about` content and `/pasfoto.jpeg` asset reference, then build a dedicated `About` component (`src/components/About.tsx`) matching the dark volt-accented telemetry aesthetic, and wire it into `src/App.tsx` and `src/components/Navbar.tsx`.

**Tech Stack:** React 18, TypeScript, Tailwind CSS, Framer Motion, Lucide React, Vitest + React Testing Library.

**Spec:** Baseline design system in `docs/superpowers/specs/2026-11-26-personal-portfolio-design.md` + user request to add an About/Tentang section featuring `public/pasfoto.jpeg`.

## Global Constraints

- Default language is Indonesian (`id`) with full `en` parity via `LanguageContext` and `UI_TRANSLATIONS`.
- Portrait asset path must be `/pasfoto.jpeg` (served from `public/pasfoto.jpeg`).
- Design tokens must use existing Tailwind theme (`bg-canvas`, `bg-surface`, `bg-elevated`, `border-line`, `text-volt`, `text-muted`, `font-mono`).
- Zero placeholder or Lorem Ipsum copy; all profile details must match `OWNER_PROFILE` (`Zaky Mubarok Aljauhari`, `UPN "Veteran" Yogyakarta`, `S1 Informatika`).
- All existing 9 tests in `src/__tests__/portfolio.test.tsx` must continue to pass alongside new tests.

## Review Focus

- **Missing or failed image load for `/pasfoto.jpeg`:** If `<img>` fires `onError`, render a clean styled initials/icon fallback (`ZAKY // PHOTO UNAVAILABLE`) instead of a broken image icon (pinned to Task 2).
- **Language switching (`id` ↔ `en`) on About section & Navbar link:** Switching locale in Navbar must update the About heading, narrative, metadata labels, photo `alt` text, and nav item (`Tentang` ↔ `About`) (pinned to Task 2 & Task 3).
- **Portrait aspect ratio / head cropping:** `<img>` must use `object-cover object-top` inside an `aspect-[3/4]` container so a formal portrait ("pas foto") never crops the top of the head (pinned to Task 2).
- **Accessibility & keyboard navigation:** Section must use `<section id="about" aria-labelledby="about-heading">`, descriptive `alt` text, and keyboard-focusable CV/Contact CTAs (pinned to Task 2).
- **Navbar active section tracking & numbering:** `NAV_ITEMS` must have sequential codes `01`–`05` (`home`, `about`, `services`, `projects`, `contact`) and `href="#about"` in both desktop and mobile navs (pinned to Task 3).

---

### Task 1: About Profile Data & Bilingual Translations (`id` / `en`)

**Files:**
- Modify: `src/types/portfolio.ts:16-28`
- Modify: `src/data/portfolio.ts:25-54`
- Modify: `src/data/translations.ts:4-20,108-135,220-245`
- Test: `src/__tests__/portfolio.test.tsx`

**Interfaces:**
- Consumes: `Locale` (`'id' | 'en'`) from `src/context/LanguageContext.tsx`
- Produces:
  - `OwnerProfile` extended with `photoUrl: string`, `location: string`, `aboutParagraphs: string[]`, `aboutHighlights: Array<{ label: string; value: string }>`
  - `UiTranslations['nav']['links']` extended with `about: string`
  - `UiTranslations['about']`: `{ sectionLabel: string; heading: string; photoBadge: string; photoAlt: string; photoFallback: string; highlightsHeading: string; ctaContact: string; ctaCv: string }`

- [ ] **Step 1: Write the failing test in `src/__tests__/portfolio.test.tsx`**

```tsx
  it('provides About section profile data, portrait photo path, and ID/EN translations', () => {
    const idData = getPortfolioData('id');
    const enData = getPortfolioData('en');

    expect(idData.ownerProfile.photoUrl).toBe('/pasfoto.jpeg');
    expect(enData.ownerProfile.photoUrl).toBe('/pasfoto.jpeg');
    expect(idData.ownerProfile.aboutParagraphs.length).toBeGreaterThanOrEqual(2);
    expect(enData.ownerProfile.aboutParagraphs.length).toBeGreaterThanOrEqual(2);
    expect(idData.ownerProfile.aboutHighlights.length).toBeGreaterThanOrEqual(3);
    expect(enData.ownerProfile.aboutHighlights.length).toBeGreaterThanOrEqual(3);
  });
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL because `photoUrl`, `aboutParagraphs`, and `aboutHighlights` are undefined on `OwnerProfile`.

- [ ] **Step 3: Update `OwnerProfile` in `src/types/portfolio.ts`, `OWNER_PROFILE_BY_LOCALE` in `src/data/portfolio.ts`, and `UI_TRANSLATIONS` in `src/data/translations.ts`**

- In `src/types/portfolio.ts`: add `AboutHighlight` interface (`label: string; value: string`) and extend `OwnerProfile` with `photoUrl: string`, `location: string`, `aboutParagraphs: string[]`, and `aboutHighlights: AboutHighlight[]`.
- In `src/data/portfolio.ts`: add `photoUrl: '/pasfoto.jpeg'` and `location: 'Yogyakarta, Indonesia'` to `SHARED_OWNER_BASE`, and add authentic `id` and `en` `aboutParagraphs` (2 concise paragraphs covering Informatics UPNVY background, Full-Stack Web, IoT ESP32/MQTT, and CRISP-DM data analysis) plus `aboutHighlights` (4 items: Education, Focus, Location, Availability) in `OWNER_PROFILE_BY_LOCALE`.
- In `src/data/translations.ts`: add `about: string` to `nav.links` (`'Tentang'` for `id`, `'About'` for `en`) and add the `about` translation block to `UiTranslations`, `UI_TRANSLATIONS.id`, and `UI_TRANSLATIONS.en`.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test`
Expected: PASS (10 tests passing).

- [ ] **Step 5: Commit**

```bash
git add src/types/portfolio.ts src/data/portfolio.ts src/data/translations.ts src/__tests__/portfolio.test.tsx
git commit -m "feat: add bilingual About profile data and pasfoto path"
```

---

### Task 2: `About` Section Component with Portrait Photo (`/pasfoto.jpeg`)

**Files:**
- Create: `src/components/About.tsx`
- Test: `src/__tests__/portfolio.test.tsx`

**Interfaces:**
- Consumes:
  - `useLanguage()` from `../context/LanguageContext`
  - `getPortfolioData(locale)` from `../data/portfolio`
  - `UI_TRANSLATIONS[locale].about` from `../data/translations`
- Produces:
  - `export function About(): JSX.Element` rendering `<section id="about" aria-labelledby="about-heading">`

- [ ] **Step 1: Write the failing tests in `src/__tests__/portfolio.test.tsx`**

```tsx
  it('renders About section with pas foto image, accessible alt text, and fallback on image error', () => {
    render(<About />);

    expect(
      screen.getByRole('heading', { name: /Tentang Saya/i })
    ).toBeInTheDocument();

    const photo = screen.getByRole('img', {
      name: /Pas foto Zaky Mubarok Aljauhari/i,
    }) as HTMLImageElement;
    expect(photo).toHaveAttribute('src', '/pasfoto.jpeg');

    fireEvent.error(photo);
    expect(screen.getByText(/Foto tidak tersedia/i)).toBeInTheDocument();
  });
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL because `src/components/About.tsx` does not exist.

- [ ] **Step 3: Create `src/components/About.tsx`**

Implement `About()`:
- Section wrapper: `<section id="about" aria-labelledby="about-heading" className="py-20 md:py-28 border-b border-line/70">` with `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` and `grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`.
- Left column (`lg:col-span-5`): Portrait card (`bg-surface border border-line rounded-2xl p-3 shadow-2xl`) containing a top status bar (`t.photoBadge` + `UPNVY // ID`) and an `aspect-[3/4]` frame (`rounded-xl overflow-hidden bg-elevated border border-line`). Inside, render `<img src={ownerProfile.photoUrl} alt={t.photoAlt} onError={() => setPhotoError(true)} className="w-full h-full object-cover object-top" />` when `!photoError`, or a centered fallback with `<User className="w-12 h-12 text-volt" />` and `{t.photoFallback}` when `photoError` is true.
- Right column (`lg:col-span-7 space-y-6`):
  - Eyebrow label (`font-mono text-xs text-volt tracking-wider`): `{t.sectionLabel}`
  - Heading (`<h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-white">{t.heading}</h2>`)
  - Narrative paragraphs from `ownerProfile.aboutParagraphs` (`text-sm md:text-base text-muted leading-relaxed`)
  - Highlights 2x2 grid (`grid grid-cols-1 sm:grid-cols-2 gap-3`) mapping `ownerProfile.aboutHighlights` into `bg-surface border border-line rounded-xl p-4` cards.
  - Action row: `#contact` link (`t.ctaContact`) and `/cv.pdf` download link (`t.ctaCv`).

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test`
Expected: PASS (11 tests passing).

- [ ] **Step 5: Commit**

```bash
git add src/components/About.tsx src/__tests__/portfolio.test.tsx
git commit -m "feat: create About section component with portrait photo and fallback"
```

---

### Task 3: Integrate `About` into `App.tsx` and `Navbar.tsx`

**Files:**
- Modify: `src/App.tsx:1-31`
- Modify: `src/components/Navbar.tsx:8-14`
- Test: `src/__tests__/portfolio.test.tsx`

**Interfaces:**
- Consumes: `About` from `./components/About`, `UI_TRANSLATIONS[locale].nav.links.about`
- Produces: Updated `App` layout (`Hero` -> `About` -> `ServicesTools` -> `Projects` -> `Contact`) and `Navbar` links (`01`..`05`)

- [ ] **Step 1: Write the failing test in `src/__tests__/portfolio.test.tsx`**

```tsx
  it('renders About section in App and switches About navigation and content between ID and EN', () => {
    render(<App />);

    expect(screen.getByRole('link', { name: /Tentang/i })).toHaveAttribute(
      'href',
      '#about'
    );
    expect(
      screen.getByRole('img', { name: /Pas foto Zaky Mubarok Aljauhari/i })
    ).toHaveAttribute('src', '/pasfoto.jpeg');

    fireEvent.click(screen.getByRole('button', { name: 'EN' }));

    expect(screen.getByRole('link', { name: /About/i })).toHaveAttribute(
      'href',
      '#about'
    );
    expect(
      screen.getByRole('heading', { name: /About Me/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: /Portrait photo of Zaky Mubarok Aljauhari/i })
    ).toHaveAttribute('src', '/pasfoto.jpeg');
  });
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL because `App` does not render `<About />` and `Navbar` does not have the `about` link.

- [ ] **Step 3: Update `src/App.tsx` and `src/components/Navbar.tsx`**

- In `src/App.tsx`: import `About` from `./components/About` and render `<About />` directly after `<Hero />` and before `<ServicesTools />`.
- In `src/components/Navbar.tsx`: update `NAV_ITEMS` to:
  - `{ id: 'home', href: '#home', code: '01' }`
  - `{ id: 'about', href: '#about', code: '02' }`
  - `{ id: 'services', href: '#services', code: '03' }`
  - `{ id: 'projects', href: '#projects', code: '04' }`
  - `{ id: 'contact', href: '#contact', code: '05' }`

- [ ] **Step 4: Run tests, typecheck, and build to verify everything passes**

Run: `npm test && npm run lint && npm run build`
Expected: All 12 Vitest tests PASS, `tsc --noEmit` exits 0, `vite build` succeeds without errors.

- [ ] **Step 5: Commit**

```bash
git add src/App.tsx src/components/Navbar.tsx src/__tests__/portfolio.test.tsx
git commit -m "feat: integrate About section into App layout and Navbar"
```
