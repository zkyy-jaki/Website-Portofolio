# Zaky Mubarok Aljauhari — Personal Portfolio Web App Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an authentic, responsive personal portfolio web application for Zaky Mubarok Aljauhari using a **Dark Hardware Console & Telemetry Dashboard** aesthetic blended with the high-contrast `#F1FF26` / `#0B090C` Melodian reference layout.

**Architecture:** Single Page Application (SPA) powered by **Vite + React 18/19 + TypeScript + Tailwind CSS + Framer Motion + Lucide React**. All profile data, tech stack categories, service summaries, and the 6 mandatory featured projects live in a strongly typed data layer (`src/data/portfolio.ts`). Each project renders both an authentic `/projects/*.png` screenshot (if present in `public/projects/`) and a rich interactive **Hardware Telemetry / Console Schematic Preview** fallback so there are never broken images or generic placeholders.

**Tech Stack:** Vite, React, TypeScript (Strict), Tailwind CSS, Framer Motion, Lucide React, Vitest + React Testing Library (for unit/component verification).

**Spec:** `docs/superpowers/specs/2026-11-26-personal-portfolio-design.md` and `docs/prd_website_portofolio_personal.md`

---

## Global Constraints

- **Authentic Owner Data Only:** No Lorem Ipsum or placeholder copy anywhere. Name: `Zaky Mubarok Aljauhari`, Brand: `ZAKY`, Role: `Full-Stack Web Developer, Data Analyst, & IoT Enthusiast`, Affiliation: `Mahasiswa S1 Informatika, Universitas Pembangunan Nasional "Veteran" Yogyakarta`, GitHub: `https://github.com/zkyy-jaki`, LinkedIn: `https://www.linkedin.com/in/zaky-mubarok-aljauhari-6732b231a/`, Email: `zakymubarok040506@gmail.com`.
- **Mandatory 6 Projects & Exclusion Rule:** Must display exact 6 featured projects (`Smart Small Rack Warehouse IoT System & Dashboard`, `Sate Solo Restaurant Landing Page`, `Cryptography & Integrity Web Application`, `Digital Image Processing Web App`, `Automated Moodle Attendance Telegram Bot`, `Bank Marketing Predictive Analysis (CRISP-DM)`). **Strictly exclude** any trading / Expert Advisor (EA) projects.
- **High-Contrast Color Tokens:** Background `#0B090C` (`bg-primary`), Surface `#151318` (`bg-surface`), Border `#26232B` (`border-subtle`), Accent `#F1FF26` (`accent-primary`), Text Primary `#FFFFFF`, Text Secondary `#A1A1AA`. Any button, badge, or active tab with `#F1FF26` background **must** use `#0B090C` text (`text-[#0B090C]`).
- **Typography:** Google Fonts `Poppins` (weights 400, 500, 600, 700) for primary UI & headings, paired with `JetBrains Mono` (weights 400, 500, 600) for telemetry readouts, hardware indices, and tech stack tags.
- **Accessibility & Responsiveness:** Every icon link/button must include a descriptive `aria-label`. Layout must adapt cleanly across mobile (`375px`), tablet (`768px`), and desktop (`1280px+`).

## Review Focus

1. **Missing Static Image Assets (`/public/profile.jpg` or `/public/projects/*.png`):** When a local image file does not exist yet or fails to load (`onError`), the UI must seamlessly render a custom domain-specific Hardware/Telemetry SVG Console Preview (e.g., ESP32 6-ultrasonic rack telemetry visualizer for Smart Rack, AES-256/Argon2 cipher pipeline for Cryptography, 13-kernel canvas preview for Image Processing, CRISP-DM confusion matrix/ROC curve for Bank Marketing) rather than showing a broken `<img>` icon.
2. **Project Category Filtering Edge Cases:** Switching between `All`, `Web & Security`, `IoT & Automation`, and `Data & ML` must filter accurately (including multi-category projects like Smart Small Rack which belongs to both `IoT & Automation` and `Web & Security`) and update the displayed project count without layout jump.
3. **Projects Without Public Live URLs or Private Repos:** Projects like *Automated Moodle Attendance Telegram Bot* (deployed as a systemd service on Ubuntu VPS) or projects without a live web URL must not render dead/empty `<a href="">` links; instead, they render an interactive **"Inspect Architecture / Telemetry Spec"** modal trigger or a clear deployment status pill (`24/7 Ubuntu VPS Daemon` / `CRISP-DM Pipeline`).
4. **Contact Form Validation & Submission Fallback:** Submitting empty fields or an invalid email address must show clear inline error messages. Submitting valid inputs must provide immediate user feedback (toast notification + pre-filled `mailto:zakymubarok040506@gmail.com` dispatch & one-click copy email utility) so recruiters can always reach Zaky even without a backend server.
5. **Strict Prohibition of Trading / EA Content:** Automated tests must assert that all 6 required projects render and zero references to "Trading", "Expert Advisor", "Forex", or "MQL" exist anywhere in the dataset or rendered DOM.

---

## 1. Folder Structure & Component Architecture

```text
c:\Users\LENOVO\OneDrive\Documents\KULYEAHHH\Web Portofolio\
├── index.html                           # Loads Poppins & JetBrains Mono fonts, SEO metadata, title
├── package.json                         # Vite + React + TS + Tailwind + Framer Motion + Lucide + Vitest
├── tsconfig.json                        # Strict TypeScript configuration
├── vite.config.ts                       # Vite + React plugin + Vitest configuration
├── postcss.config.js                    # Tailwind CSS & Autoprefixer
├── tailwind.config.js                   # Custom color tokens (#0B090C, #151318, #26232B, #F1FF26) & fonts
├── public/
│   └── cv-zaky-mubarok-aljauhari.pdf    # Placeholder/printable CV summary or downloadable resume route
└── src/
    ├── main.tsx                         # React DOM root mount
    ├── App.tsx                          # Main SPA shell assembling Navbar, Hero, ServicesTools, Projects, Contact, Footer
    ├── index.css                        # Tailwind directives, custom scrollbar, subtle hardware grid background
    ├── data/
    │   └── portfolio.ts                 # Authentic profile, social links, 3 service cards, 3 tech stack groups, 6 featured projects
    ├── components/
    │   ├── Navbar.tsx                   # Sticky console header, section spy navigation, mobile drawer, CV CTA
    │   ├── Hero.tsx                     # 12-col hero, telemetry status pill, bio, social row, StackedPhotoCard
    │   ├── StackedPhotoCard.tsx         # 3-layer rotated (-6deg, +6deg, 0deg) operator/social telemetry card with interactive like/ping state
    │   ├── ServicesTools.tsx            # Left: 3 service cards with project counts; Right: engineering approach & categorized tech stack grid
    │   ├── Projects.tsx                 # Category filter tabs, animated project rows, architecture modal trigger
    │   ├── ProjectTelemetryPreview.tsx  # Bespoke interactive hardware/telemetry visual preview for each of the 6 projects + image fallback
    │   ├── ProjectSpecModal.tsx         # Deep-dive technical architecture & telemetry modal for inspecting project internals
    │   ├── Contact.tsx                  # Centered "Get in touch" console form with validation, mailto dispatch, & one-click email copy
    │   └── Footer.tsx                   # Minimalist telemetry footer with system status & copyright
    └── __tests__/
        └── portfolio.test.tsx           # Automated tests verifying all 6 authentic projects, filtering, contrast classes, and form validation
```

---

## 2. Atomic Tasks

### Task 1: Scaffold Vite + React + TypeScript + Tailwind CSS & Design System Tokens

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `postcss.config.js`
- Create: `tailwind.config.js`
- Create: `index.html`
- Create: `src/index.css`
- Create: `src/main.tsx`

**Interfaces:**
- Produces: Configured Tailwind theme tokens (`bg-primary: #0B090C`, `bg-surface: #151318`, `border-subtle: #26232B`, `accent-primary: #F1FF26`, `text-secondary: #A1A1AA`) and font families (`font-sans: Poppins`, `font-mono: JetBrains Mono`).

- [ ] **Step 1: Initialize project configuration files (`package.json`, `vite.config.ts`, `tsconfig.json`, `tailwind.config.js`, `postcss.config.js`, `index.html`)**
  Configure dependencies: `react`, `react-dom`, `framer-motion`, `lucide-react`, and devDependencies: `typescript`, `vite`, `@vitejs/plugin-react`, `tailwindcss`, `postcss`, `autoprefixer`, `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`.
- [ ] **Step 2: Configure `src/index.css` with design tokens, custom scrollbar, and subtle hardware telemetry grid pattern**
  Define CSS custom properties `--bg-primary: #0B090C`, `--bg-surface: #151318`, `--border-subtle: #26232B`, `--accent-primary: #F1FF26`, smooth scrolling (`html { scroll-behavior: smooth; }`), and selection highlight (`selection:bg-[#F1FF26] selection:text-[#0B090C]`).
- [ ] **Step 3: Install dependencies and verify Vite build pipeline**
  Run: `npm install`
  Expected: Packages install cleanly with exit code 0.

---

### Task 2: Authentic Data Layer (`src/data/portfolio.ts`) & Data Verification Tests

**Files:**
- Create: `src/data/portfolio.ts`
- Create: `src/__tests__/portfolio.test.tsx`

**Interfaces:**
- Produces:
  - `OWNER_PROFILE`: Authentic metadata for Zaky Mubarok Aljauhari (UPN "Veteran" Yogyakarta, roles, bio, GitHub, LinkedIn, Email).
  - `SERVICE_ITEMS`: 3 service categories (`Full-Stack Web Development` — 4 Projects, `IoT & Automation Systems` — 2 Projects, `Data Analysis & Predictive Modeling` — 1 Project) with custom telemetry icons and descriptions.
  - `TECH_STACK_CATEGORIES`: 3 exact categories from prompt (`Frontend`, `Backend & Database`, `Data & IoT`) with all required technologies.
  - `ProjectCategory`: `"All" | "Web & Security" | "IoT & Automation" | "Data & ML"`
  - `ProjectItem`: Typed interface containing `id`, `indexCode`, `title`, `categories`, `description`, `highlights`, `techStack`, `telemetryMetrics`, `githubUrl`, `liveUrl`, `liveLabel`, `statusBadge`, `image`.
  - `PROJECTS`: Array of the exact 6 required authentic projects.

- [ ] **Step 1: Write unit tests in `src/__tests__/portfolio.test.tsx` asserting authentic owner data, exact 6 projects, and zero trading/EA content**
  Assert that `OWNER_PROFILE.name` equals `"Zaky Mubarok Aljauhari"`, `PROJECTS` has length 6, includes `ndgl.cloud` for Smart Small Rack Warehouse IoT, and contains no trading/EA strings.
- [ ] **Step 2: Create `src/data/portfolio.ts` with complete authentic data**
  Populate all 6 projects with rich technical descriptions, telemetry metrics (e.g., `6x Ultrasonic + DHT11 + MQ2`, `13 Spatial & Frequency Kernels`, `Argon2 + AES-256-CBC + ChaCha20 + LSB`, `24/7 Systemd + Fernet AES-128`, `CRISP-DM + Scikit-Learn`), and exact GitHub/live URLs.
- [ ] **Step 3: Run Vitest to confirm data integrity tests pass**
  Run: `npx vitest run`
  Expected: PASS

---

### Task 3: Sticky Console Navbar & Hero Section with Interactive Stacked Operator Card

**Files:**
- Create: `src/components/Navbar.tsx`
- Create: `src/components/StackedPhotoCard.tsx`
- Create: `src/components/Hero.tsx`

**Interfaces:**
- Consumes: `OWNER_PROFILE` from `src/data/portfolio.ts`
- Produces:
  - `Navbar`: Sticky top header (`backdrop-blur-md bg-[#0B090C]/85 border-b border-[#26232B]`) with brand `ZAKY`, live telemetry dot (`SYS.ONLINE // YOGYAKARTA`), section links (`Home`, `Services`, `Projects`, `Contact`), responsive mobile drawer, and high-contrast `Download CV` button (`bg-[#F1FF26] text-[#0B090C]`).
  - `StackedPhotoCard`: 3-layer rotated card stack (`-6deg`, `+6deg`, `0deg`) combining the Melodian social card aesthetic from `contohdesign.png` with an operator telemetry ID card (shows `/profile.jpg` if present, or an engineered interactive monogram/avatar portrait with live ESP32/Full-Stack telemetry badges, interactive like/ping counter, and share/copy profile link button).
  - `Hero`: 12-column responsive hero section matching PRD Section 4.2 + authentic affiliation and social links (`aria-label` on all icons).

- [ ] **Step 1: Implement `src/components/Navbar.tsx` with active section tracking and mobile drawer**
- [ ] **Step 2: Implement `src/components/StackedPhotoCard.tsx` with 3-card Framer Motion tilt, interactive like/signal ping button, and graceful `/profile.jpg` fallback**
- [ ] **Step 3: Implement `src/components/Hero.tsx` with underlined `#F1FF26` name headline, role badges, authentic UPN "Veteran" Yogyakarta bio, and social connection bar**

---

### Task 4: Services & Categorized Tech Stack Matrix (`src/components/ServicesTools.tsx`)

**Files:**
- Create: `src/components/ServicesTools.tsx`

**Interfaces:**
- Consumes: `SERVICE_ITEMS`, `TECH_STACK_CATEGORIES` from `src/data/portfolio.ts`
- Produces: `ServicesTools` section (`#services`) featuring the 2-column layout from `contohdesign.png`:
  - **Left Column (6 cols):** 3 stacked horizontal service cards with custom schematic mini-thumbnails, project counts, and active hover telemetry border (`hover:border-[#F1FF26]`).
  - **Right Column (6 cols):** Service engineering overview + categorized Tech Stack Console (`Frontend`, `Backend & Database`, `Data & IoT`) with interactive tool badges and tooltips.

- [ ] **Step 1: Implement `src/components/ServicesTools.tsx` with 3 service cards and 3 categorized tech stack groups**
- [ ] **Step 2: Add component test in `src/__tests__/portfolio.test.tsx` verifying all 3 tech stack groups and service cards render accurately**

---

### Task 5: Projects Telemetry Archive, Bespoke Schematic Previews & Architecture Modal

**Files:**
- Create: `src/components/ProjectTelemetryPreview.tsx`
- Create: `src/components/ProjectSpecModal.tsx`
- Create: `src/components/Projects.tsx`

**Interfaces:**
- Consumes: `PROJECTS`, `ProjectCategory`, `ProjectItem` from `src/data/portfolio.ts`
- Produces:
  - `ProjectTelemetryPreview`: Renders a `16:10` hardware-framed viewport (`rounded-xl border border-[#26232B] bg-[#151318]`). Attempts to load the local project screenshot (`project.image`) and layers an interactive live telemetry HUD; if the image file is not yet placed in `public/projects/`, renders a bespoke, project-specific interactive SVG/UI schematic for each of the 6 projects:
    1. *Smart Small Rack IoT:* 3-tier rack ultrasonic fill-level gauges, DHT11/MQ2 telemetry readouts, RGB LED row indicators, and `ndgl.cloud` MQTT packet ticker.
    2. *Sate Solo Landing Page:* Responsive restaurant hero mockup frame with WhatsApp order CTA & Google Maps pin preview.
    3. *Cryptography & Integrity Web App:* Multi-stage encryption pipeline diagram (`dongle.key` + Argon2 → Classical + AES-256-CBC → ChaCha20/LSB → Blockchain Hash Log).
    4. *Digital Image Processing Web App:* Split-view image kernel workstation showing 13 operations & live histogram/webcam status.
    5. *Automated Moodle Attendance Bot:* Ubuntu VPS systemd terminal + Telegram bot command log + Fernet AES-128 encrypted SQLite WAL status.
    6. *Bank Marketing Predictive Analysis (CRISP-DM):* 6-phase CRISP-DM pipeline + feature importance & subscription probability confusion matrix preview.
  - `ProjectSpecModal`: Accessible modal dialog opened via "Architecture Spec" button on any project card to inspect full system architecture, hardware/software stack, and key engineering highlights.
  - `Projects`: Full `#projects` section with interactive category tabs (`All`, `Web & Security`, `IoT & Automation`, `Data & ML`), animated Framer Motion layout transitions, GitHub Repo button, Live Dashboard link (`ndgl.cloud`), and Architecture Spec trigger.

- [ ] **Step 1: Implement `src/components/ProjectTelemetryPreview.tsx` with bespoke schematics for all 6 projects and automatic image fallback**
- [ ] **Step 2: Implement `src/components/ProjectSpecModal.tsx` for deep-dive technical inspection**
- [ ] **Step 3: Implement `src/components/Projects.tsx` with category filter tabs (`bg-[#F1FF26] text-[#0B090C]` active state) and 12-column project rows**
- [ ] **Step 4: Add filter interaction tests in `src/__tests__/portfolio.test.tsx` verifying tab switching filters the 6 projects properly**

---

### Task 6: Contact Terminal, Footer, App Assembly & Full Verification

**Files:**
- Create: `src/components/Contact.tsx`
- Create: `src/components/Footer.tsx`
- Create: `src/App.tsx`

**Interfaces:**
- Consumes: `Navbar`, `Hero`, `ServicesTools`, `Projects`, `Contact`, `Footer`, `OWNER_PROFILE`
- Produces:
  - `Contact`: Centered `max-w-[600px]` section (`#contact`) matching `contohdesign.png` ("Get in touch") with validated `Name`, `Email`, and `Message` fields, high-contrast submit CTA (`w-full bg-[#F1FF26] text-[#0B090C] font-semibold py-3 rounded-md`), instant toast feedback, direct `mailto:` trigger, and one-click email copy button (`zakymubarok040506@gmail.com`).
  - `Footer`: Minimalist telemetry footer with copyright, tech stack credit, and quick back-to-top anchor.
  - `App`: Complete portfolio application shell.

- [ ] **Step 1: Implement `src/components/Contact.tsx` with client-side validation, loading/success feedback, and direct email copy chip**
- [ ] **Step 2: Implement `src/components/Footer.tsx` and assemble all sections in `src/App.tsx`**
- [ ] **Step 3: Write integration tests in `src/__tests__/portfolio.test.tsx` covering full page render, category filtering, and contact form validation**
- [ ] **Step 4: Run Vitest test suite and production TypeScript + Vite build**
  Run: `npx vitest run && npm run build`
  Expected: All tests pass and `dist/` production bundle compiles with zero TypeScript or CSS errors.
