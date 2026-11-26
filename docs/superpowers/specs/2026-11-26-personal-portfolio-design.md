# Design Specification: Zaky Mubarok Aljauhari — Personal Portfolio Website

**Date:** 2026-11-26  
**Author:** Zaky Mubarok Aljauhari & Antigravity  
**Status:** Ready for Implementation  
**Theme Name (`theme-factory`):** **Telemetry Volt Console** (Hybrid Melodian High-Contrast Volt + Dark Hardware Telemetry Console)

---

## 1. Intent & The Why

Build a fast, engineering-grade personal portfolio web application for **Zaky Mubarok Aljauhari** (Informatics Student at UPN "Veteran" Yogyakarta) targeting technical recruiters, engineering leads, and freelance clients. 

Unlike generic SaaS-template portfolios, this design bridges the high-contrast layout and `#F1FF26` (Electric Volt) signature from the Melodian reference (`docs/contohdesign.png`) with an authentic **Dark Hardware Console & Telemetry Dashboard** aesthetic that reflects Zaky's actual engineering work across **Full-Stack Web Development**, **Data Analysis (CRISP-DM)**, and **IoT / Automation Systems (ESP32, MQTT, Cryptography, Linux VPS)**.

---

## 2. Goals, Non-Goals, and Anti-Goals

### Goals
- Showcase all **6 mandatory authentic engineering projects** (plus optional UI/UX prototype filter support) with accurate technical architectures, real domain/GitHub links, and custom interactive telemetry/console visual previews when static screenshot files are absent.
- Maintain strict WCAG AAA/AA contrast rules: `#F1FF26` accent buttons and badges **always** use `#0B090C` dark text.
- Deliver a responsive Single Page Application (375px mobile, 768px tablet, 1280px+ desktop) using **Vite + React + TypeScript + Tailwind CSS + Framer Motion + Lucide React**.
- Provide interactive filtering in the Projects section, expandable/inspectable technical architecture specs per project, and a validated Contact Form with direct mailto/copy-email fallback.

### Non-Goals
- Multi-page blog or CMS backend (all portfolio data is statically typed in `src/data/portfolio.ts` for zero-latency rendering).
- Trading or Expert Advisor (EA) projects (explicitly excluded per owner instructions).

### Anti-Goals (What Would Make This a Failure)
- Generic Lorem Ipsum or fake placeholder metrics anywhere in the UI.
- Broken image icons (`<img>` 404s) when `/public/projects/*.png` or `/public/profile.jpg` haven't been dropped in yet — every project and the profile card must have a built-in, high-craft technical schematic / telemetry preview component that automatically renders if the image file is missing, or layers cleanly around the photo.
- Sloppy AI-template tells (gradient-washed generic SaaS cards, poor contrast white-on-yellow text, or unlabelled icon buttons).

---

## 3. Approaches Considered

1. **Approach A — Hybrid Melodian Layout + Hardware Telemetry Console (Chosen):**
   Preserves the recognizable spatial structure and `#0B090C` / `#F1FF26` palette from the PRD and `contohdesign.png` (Sticky header, 12-column Hero with stacked card, 2-column Services & Tools matrix, full-width alternating/stacked Project rows with category tabs, and centered Contact terminal), while elevating every surface with crisp 1px hardware borders, `JetBrains Mono` telemetry readouts, status LEDs, and interactive schematic cards.
2. **Approach B — Pure Full-Screen Multi-Pane IDE / Grafana Dashboard:**
   Trades off recruiter readability and mobile usability by forcing a dense dashboard frame. Rejected because recruiters scanning on mobile or laptop need clear narrative hierarchy first.
3. **Approach C — Next.js 15 App Router SSR:**
   Mentioned in early PRD draft, but superseded by the explicit prompt requirement for **Vite + React + TypeScript + Tailwind CSS + Framer Motion + Lucide React**, which compiles faster, deploys effortlessly to Vercel/Netlify/GitHub Pages as a static SPA, and has zero server cold-start.

---

## 4. Visual Design System (`frontend-design` & `theme-factory`)

### 4.1. Color Palette ("Telemetry Volt Console")

| Token | Hex | CSS Variable | Role & Usage |
| :--- | :--- | :--- | :--- |
| `bg-primary` | `#0B090C` | `--bg-primary` | Deep carbon-obsidian primary canvas background |
| `bg-surface` | `#151318` | `--bg-surface` | Elevated hardware module / card surface |
| `bg-surface-elevated` | `#1C1921` | `--bg-surface-elevated` | Hover states, inner console wells, code/telemetry blocks |
| `border-subtle` | `#26232B` | `--border-subtle` | 1px structural hairline borders, grid dividers |
| `accent-primary` | `#F1FF26` | `--accent-primary` | Electric Volt highlight (active tabs, primary CTAs, name underline, focus ring) |
| `accent-emerald` | `#10B981` | `--accent-emerald` | Live system / online telemetry indicator dot (`ndgl.cloud`, 24/7 VPS daemon) |
| `text-primary` | `#FFFFFF` | `--text-primary` | Primary headings and active labels |
| `text-secondary` | `#A1A1AA` | `--text-secondary` | Technical descriptions, bio narrative, secondary labels |
| `text-muted` | `#71717A` | `--text-muted` | Monospace coordinates, timestamps, port/protocol metadata |
| `text-on-accent` | `#0B090C` | `--text-on-accent` | **Mandatory** high-contrast ink on `#F1FF26` surfaces |

### 4.2. Typography

- **Primary Sans (`--font-sans`):** `'Poppins', sans-serif` (Weights: 400, 500, 600, 700) — matches `contohdesign.png` and PRD Section 3.2 for clean geometric headlines and readable prose.
- **Technical Monospace (`--font-mono`):** `'JetBrains Mono', monospace` (Weights: 400, 500, 600) — used for hardware telemetry tags (`ESP32 // MQTT`, `AES-256-CBC`, `CRISP-DM`), project indices, system status indicators, and tech stack badges.

### 4.3. Layout & Spatial Architecture (ASCII Wireframe)

```text
+-------------------------------------------------------------------------+
| [ZAKY]  SYS.ONLINE              Home  Services  Projects  Contact  [CV] | <- Sticky Console Navbar
+-------------------------------------------------------------------------+
| HERO SECTION (12-Col Grid)                                              |
| +---------------------------------------+ +---------------------------+ |
| | // UPN "VETERAN" YOGYAKARTA · INFORMATICS | |  [Stacked Operator Card]  | |
| | Hello there,                          | |   Rot -6deg / +6deg       | |
| | My name is Zaky Mubarok Aljauhari.    | |   @zkyy-jaki · ID#UPNVY   | |
| | [Full-Stack · Data Analyst · IoT]     | |   Live Telemetry Preview  | |
| | Bio paragraph...                      | |   [♥] [💬] [⚡]           | |
| | Connect: [GH] [IN] [MAIL]             | +---------------------------+ |
| +---------------------------------------+                               |
+-------------------------------------------------------------------------+
| SERVICES & TECH STACK MATRIX (12-Col Grid)                              |
| +-----------------------------------+ +-------------------------------+ |
| | [01] Full-Stack Web Development   | | Service & Engineering Approach| |
| |      4 Projects Completed         | | End-to-end architecture...    | |
| | [02] IoT & Automation Systems     | |                               | |
| |      2 Projects Completed         | | Tools & Tech Stack (3 Groups) | |
| | [03] Data Analysis & ML (CRISP-DM)| | [Frontend] [Backend] [Data/IoT| |
| |      1 Project Completed          | | Interactive Badge Grid        | |
| +-----------------------------------+ +-------------------------------+ |
+-------------------------------------------------------------------------+
| PROJECTS TELEMETRY ARCHIVE                                              |
| Projects                         [All] [Web & Security] [IoT] [Data/ML] |
| +---------------------------------------------------------------------+ |
| | Col 1-5: Category Tag + Title + Authentic Description + Tech Badges | |
| |          [GitHub Repo] [Live Dashboard / Spec Modal]                | |
| | Col 6-12: 16:10 Interactive Console Mockup / Screenshot Frame       | |
| +---------------------------------------------------------------------+ |
| (6 Authentic Projects Rendered)                                         |
+-------------------------------------------------------------------------+
| CONTACT TERMINAL (Centered max-w-[600px])                               |
|                     Get in touch                                        |
|          [Name Input] [Email Input] [Message Textarea]                  |
|          [Send Message (#F1FF26)] + Direct Email Copy Chip              |
+-------------------------------------------------------------------------+
```

---

## 5. Authentic Content & Data Specification

All data in `src/data/portfolio.ts` is strictly populated from Zaky's verified profile:

- **Owner Profile:**
  - **Name:** Zaky Mubarok Aljauhari
  - **Brand:** `ZAKY`
  - **Role:** Full-Stack Web Developer, Data Analyst, & IoT Enthusiast
  - **Affiliation:** Mahasiswa S1 Informatika, Universitas Pembangunan Nasional "Veteran" Yogyakarta
  - **Email:** `zakymubarok040506@gmail.com`
  - **GitHub:** `https://github.com/zkyy-jaki`
  - **LinkedIn:** `https://www.linkedin.com/in/zaky-mubarok-aljauhari-6732b231a/`
- **Tech Stack Groups:**
  - **Frontend:** Next.js, React.js, TypeScript, Tailwind CSS, Framer Motion
  - **Backend & Database:** Node.js, Express.js, Laravel, Python, PostgreSQL, MySQL, SQLite
  - **Data & IoT:** Python (Pandas, Scikit-Learn, CRISP-DM), ESP32, MQTT, Socket.IO, Linux VPS (Ubuntu)
- **Mandatory 6 Featured Projects (Zero Trading/EA Projects):**
  1. **Smart Small Rack Warehouse IoT System & Dashboard** (`IoT & Automation`, `Web & Security`) — ESP32 captive portal Wi-Fi provisioning, 6 ultrasonic sensors, DHT11, MQ2, per-row RGB LED indicators, buzzer, MQTT telemetry, Express.js + Prisma + SQLite + Socket.IO backend, real-time web dashboard at `https://ndgl.cloud` & GitHub `https://github.com/zkyy-jaki/dashboard-iot-smartrack`.
  2. **Sate Solo Restaurant Landing Page** (`Web & Security`) — Next.js 15, React, TypeScript, Tailwind CSS, Framer Motion, Lucide React, WhatsApp ordering CTA & Google Maps integration. GitHub: `https://github.com/zkyy-jaki/sate-solo-landing-page`.
  3. **Cryptography & Integrity Web Application** (`Web & Security`) — Information security web application with Argon2/SHA-256 authentication + external `dongle.key` hardware/file validation, super encryption (classical cipher + AES-256-CBC), file encryption (ChaCha20 / AES-GCM), LSB image steganography, and blockchain-based integrity audit log.
  4. **Digital Image Processing Web App** (`Web & Security`) — Interactive digital image processing web suite supporting 13 operations (Histogram Equalization, Thresholding, Edge Detection, Sharpening, Gaussian/Median/Bilateral/Averaging Blur, Sketch, Grayscale, Brightness, Negative, Mirroring, 2D Convolution) with Live Webcam & Snapshot capture. GitHub: `https://github.com/zkyy-jaki/Aplikasi-Web-Pengolaha--Citra-Digital`.
  5. **Automated Moodle Attendance Telegram Bot** (`IoT & Automation`) — 24/7 automated Telegram bot for Moodle LMS attendance deployed on Ubuntu VPS using Python, `python-telegram-bot`, Asyncio, SQLite (WAL mode), Fernet symmetric credential encryption, and systemd daemonization.
  6. **Bank Marketing Predictive Analysis (CRISP-DM)** (`Data & ML`) — Data analysis and machine learning modeling project applying the CRISP-DM methodology on the Bank Marketing dataset to predict client term deposit subscriptions using Python, Pandas, and Scikit-Learn.
