# Product Requirements Document (PRD): Personal Portfolio Website

**Versi:** 1.0

**Target Bahasa UI:** English (Profesional untuk Recruiter & Klien)

**Tujuan Dokumen:** Blueprint teknis, desain, dan konten sebagai referensi utama pengembangan website portofolio personal (AI-ready specification).

## 1. Ringkasan Proyek (Project Overview)

Membangun website portofolio personal bertema *dark minimalist* yang modern, responsif, dan cepat untuk menampilkan profil, layanan, *tech stack*, serta 5 proyek unggulan di bidang **Full-Stack Web Development**, **IoT & Automation**, dan **UI/UX Design**.

### Profil Pemilik (Owner Persona)

* **Nama:** `ZAKY MUBAROK ALJAUHARI`

* **Brand / Logo Navbar:** `ZAKY`

* **Status:** Mahasiswa Informatika, UPN "Veteran" Yogyakarta

* **Fokus Utama:** Full-Stack Web Development, IoT & Automation, UI/UX Design

* **GitHub:** `https://github.com/zkyy-jaki`

* **LinkedIn:** https://www.linkedin.com/in/zaky-mubarok-aljauhari-6732b231a/

* **Email:** `zakymubarok040506@gmail.com`

* **File CV:** `/public/cv.pdf (belum saya update)`

## 2. Rekomendasi Tech Stack

Agar selaras dengan proyek-proyek yang sudah ada dan mudah di-deploy ke Vercel:

* **Framework:** Next.js 15 (App Router) + React 19

* **Bahasa:** TypeScript (Strict mode)

* **Styling:** Tailwind CSS

* **Animasi:** Framer Motion (transisi halus, hover micro-interactions, filter tab animation)

* **Ikon:** Lucide React + Simple Icons (atau SVG kustom untuk logo *tech stack*) + Framer Motion

* **Font:** `Poppins` via `next/font/google`

* **Deployment:** Vercel

## 3. Design System & Visual Guidelines

Desain mengadopsi gaya *dark-mode* dengan aksen kontras tinggi (mengacu pada referensi *Melodian Portfolio*).

### 3.1. Palet Warna (Color Tokens)

| Token | Hex Code | Penggunaan | 
| ----- | ----- | ----- | 
| `bg-primary` | `#0B090C` | Latar belakang utama halaman | 
| `bg-surface` | `#151318` | Latar belakang kartu (service cards, project cards, input form) | 
| `border-subtle` | `#26232B` | Garis tepi kartu, input field, dan divider | 
| `accent-primary` | `#F1FF26` | Highlight nama, tombol CTA utama, tab aktif, focus ring | 
| `text-primary` | `#FFFFFF` | Heading dan teks utama | 
| `text-secondary` | `#A1A1AA` | Paragraf bio, deskripsi proyek, dan label pendukung | 
| `text-on-accent` | `#0B090C` | **Wajib** digunakan untuk teks di atas tombol berlatar `#F1FF26` agar kontras terjaga | 

### 3.2. Tipografi

* **Font Family:** `Poppins` (weights: `400`, `500`, `600`, `700`)

* **Hierarki:**

  * Hero Title: `text-4xl md:text-5xl lg:text-6xl font-bold leading-tight`

  * Section Heading: `text-3xl md:text-4xl font-semibold`

  * Card Title: `text-xl md:text-2xl font-semibold`

  * Body Text: `text-sm md:text-base text-[#A1A1AA] leading-relaxed`

## 4. Struktur Halaman & Spesifikasi Fungsional

Website menggunakan arsitektur **Single Page Application (SPA)** dengan *smooth scroll navigation*.

### 4.1. Navigation Bar (Header)

* **Layout:** Sticky top (`backdrop-blur-md bg-[#0B090C]/80 border-b border-[#26232B]`).

* **Kiri:** Brand/Nama (`font-semibold text-white`).

* **Tengah:** Link navigasi (`Home`, `Services`, `Projects`, `Contact`) dengan *active state indicator*.

* **Kanan:** Tombol CTA `Download CV` (`bg-[#F1FF26] text-[#0B090C] font-semibold rounded-md px-4 py-2 hover:opacity-90`).

* **Mobile:** Hamburger menu drawer responsif.

### 4.2. Hero Section (`#home`)

* **Layout:** Grid 2 kolom (`grid-cols-1 lg:grid-cols-12`), vertikal center.

* **Kolom Kiri (7 kolom):**

  * Sub-greeting: `Hello there,`

  * Headline: `My name is ` + `<span class="text-[#F1FF26] underline decoration-[#F1FF26] underline-offset-8">[Nama Lengkap].</span>`

  * Bio Singkat:

    > "I'm an Informatics Engineering student at UPN 'Veteran' Yogyakarta, specializing in full-stack web development, IoT automation systems, and UI/UX design. Through hands-on engineering projects, I build scalable applications that bridge hardware, backend automation, and intuitive user interfaces."

  * Social Row ("Let's connect with me at:"): Ikon klik-able untuk GitHub, LinkedIn, Instagram, X/Twitter, dan Email.

* **Kolom Kanan (5 kolom):**

  * **Stacked Photo Card:** Komponen visual kartu foto profil bertumpuk (3 lapisan kartu dengan rotasi miring `-6deg`, `6deg`, dan kartu utama di depan) bergaya *social media card* (header username, foto profil, footer ikon like/comment/share) dengan aksen *glow* halus di belakangnya.

### 4.3. Services & Tools Section (`#services`)

* **Layout:** Grid 2 kolom (`grid-cols-1 lg:grid-cols-12 gap-12`).

* **Kolom Kiri (6 kolom) — Service Cards:**
  Menampilkan 3 kartu layanan bertumpuk vertikal dengan thumbnail preview mini di kiri dan info di kanan:

  1. **Full-Stack Web Development** — `3 Projects completed`

  2. **IoT & Automation Systems** — `2 Projects completed`

  3. **UI/UX Design** — `1 Project completed`

* **Kolom Kanan (6 kolom) — Deskripsi & Tools:**

  * **Service Overview:** Penjelasan singkat tentang pendekatan kerja (end-to-end development mulai dari riset UI/UX, integrasi hardware/backend, hingga deployment cloud).

  * **Tools & Tech Stack Grid:** Deretan ikon kotak (`bg-[#151318] border border-[#26232B] p-3 rounded-lg hover:border-[#F1FF26]`) dengan tooltip nama teknologi:

    * TypeScript, Next.js, React, Tailwind CSS, Express.js, Prisma, Python, SQLite, ESP32/MQTT, Linux/Systemd, Figma, Git/GitHub.

### 4.4. Projects Section (`#projects`)

* **Header Section:**

  * Kiri: Judul `Projects`

  * Kanan: Filter Tabs interaktif (`All`, `Web`, `IoT & Bot`, `UI/UX`). Tab aktif menggunakan `bg-[#F1FF26] text-[#0B090C] font-semibold`, tab non-aktif menggunakan `bg-[#151318] text-white border border-[#26232B]`.

* **Project Card Layout:**

  * Ditampilkan secara vertikal (1 proyek per baris pada desktop) dengan grid 2 kolom (`grid-cols-1 lg:grid-cols-12 gap-8 items-center`):

    * **Kiri (5 kolom):**

      * Category Tag (teks kecil warna `#F1FF26`)

      * Project Title

      * Project Description

      * Tech Stack Badges (`text-xs px-2.5 py-1 rounded-full bg-[#151318] border border-[#26232B] text-[#A1A1AA]`)

      * Action Buttons:

        * `GitHub Repo` (jika tersedia) — secondary outline button

        * `Live Demo` / `View Prototype` (jika tersedia) — primary button `#F1FF26`

    * **Kanan (7 kolom):**

      * Container mockup/screenshot proyek dengan rasio `16:10`, sudut membulat (`rounded-xl`), dan efek *subtle zoom* saat hover.

### 4.5. Contact Section (`#contact`)

* **Header:** Judul `Get in touch` (rata tengah) + subteks ajakan kolaborasi/peluang kerja.

* **Form:** Max-width `600px`, rata tengah:

  * Input `Name` (required)

  * Input `Email` (required, validasi format email)

  * Textarea `Message` (required, min 4 rows)

  * Tombol Submit `Send Message` (`w-full bg-[#F1FF26] text-[#0B090C] font-semibold py-3 rounded-md`)

* **Behavior:** Menampilkan *loading state* saat mengirim dan *toast/alert* sukses atau gagal. Dapat diintegrasikan dengan **Web3Forms**, **Formspree**, atau **Resend API** (Next.js Route Handler).

### 4.6. Footer

* Minimalis, rata tengah, dipisahkan oleh `border-t border-[#26232B]`.

* Konten: `© 2026 [Nama Lengkap]. Built with Next.js & Tailwind CSS.`

## 5. Data Proyek (Pre-filled Content)

Gunakan struktur data berikut di dalam file `src/data/projects.ts`:

```
export type ProjectCategory = "All" | "Web" | "IoT & Bot" | "UI/UX";

export interface ProjectItem {
  id: string;
  title: string;
  categories: Exclude<ProjectCategory, "All">[];
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  liveLabel?: string; // Default: "Live Demo"
  image: string; // Path ke folder /public/projects/
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "moodle-attendance-bot",
    title: "Automated Moodle Attendance Bot",
    categories: ["IoT & Bot"],
    description:
      "An asynchronous, multi-user automation bot built with Python and asyncio that handles automated lecture attendance on Moodle LMS (SPADA). Features a 3-minute background worker, Fernet (AES-128) credential encryption, in-memory CSV schedule parsing, and dynamic web scraping with CSRF token extraction and strict radio option heuristics. Daemonized on an Ubuntu 24.04 Cloud VPS via Systemd for 24/7 reliability.",
    techStack: [
      "Python",
      "Asyncio",
      "python-telegram-bot",
      "BeautifulSoup4",
      "SQLite (WAL)",
      "Cryptography",
      "Systemd",
      "Linux VPS",
    ],
    githubUrl: "", // Opsional: isi jika repo dibuat public
    image: "/projects/moodle-bot.png",
  },
  {
    id: "smart-rack-warehouse",
    title: "Smart Small Rack Warehouse IoT & Dashboard",
    categories: ["IoT & Bot", "Web"],
    description:
      "An end-to-end IoT warehouse monitoring system integrating an ESP32 microcontroller with a real-time web dashboard deployed on Vercel. Hardware features an ESP32 Wi-Fi provisioning flow via captive portal DNS, six ultrasonic sensors across three 58 cm rack tiers, DHT11 and MQ2 environmental sensors, three per-row RGB LEDs, and a buzzer. Real-time telemetry is streamed via MQTT into an Express.js, Prisma, SQLite, and Socket.IO backend.",
    techStack: [
      "TypeScript",
      "Express.js",
      "Prisma",
      "SQLite",
      "Socket.IO",
      "MQTT",
      "ESP32",
      "Vercel",
    ],
    githubUrl: "https://github.com/zkyy-jaki/dashboard-iot-smartrack",
    liveUrl: "https://ndgl.cloud",
    liveLabel: "Live Dashboard",
    image: "/projects/smart-rack.png",
  },
  {
    id: "digital-image-processing",
    title: "Digital Image Processing Web Application",
    categories: ["Web"],
    description:
      "A web-based digital image processing suite built with TypeScript that supports core spatial and histogram transformations, including Grayscale, Brightness, Negative, Mirroring, Histogram, Equalization, Thresholding, Sketch, Sharpening, Edge Detection, 2D Convolution Filtering, and four blurring kernels (Gaussian, Averaging, Median, and Bilateral).",
    techStack: ["TypeScript", "Next.js", "HTML5 Canvas", "Tailwind CSS"],
    githubUrl: "https://github.com/zkyy-jaki/Aplikasi-Web-Pengolaha--Citra-Digital", // Disarankan rename repo di GitHub
    liveUrl: "", // Isi jika sudah di-deploy
    image: "/projects/image-processing.png",
  },
  {
    id: "sate-solo-landing-page",
    title: "Sate Solo Restaurant Landing Page",
    categories: ["Web"],
    description:
      "A responsive modern restaurant landing page built with Next.js 15 and TypeScript, featuring smooth UI transitions, Google Maps location integration, and direct WhatsApp call-to-action flows for customer orders and inquiries.",
    techStack: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
    ],
    githubUrl: "https://github.com/zkyy-jaki/sate-solo-landing-page",
    liveUrl: "", // Isi URL Vercel jika sudah live
    image: "/projects/sate-solo.png",
  },
  {
    id: "frugal-vault-uiux",
    title: "Frugal Vault (UI/UX Mobile Prototype)",
    categories: ["UI/UX"],
    description:
      "A mobile UI/UX prototype for a personal finance application centered on a fund-locking feature. Designed with a blue and green primary palette, separating transaction history into its own dedicated menu while surfacing Frugal Vault directly on the profile screen.",
    techStack: ["Figma", "Google Stitch", "UI/UX Design", "Mobile Prototyping"],
    liveUrl: "", // Isi link prototipe Figma
    liveLabel: "Figma Prototype",
    image: "/projects/frugal-vault.png",
  },
];

```

## 6. Struktur Folder Proyek (Recommended Architecture)

```
src/
├── app/
│   ├── layout.tsx          # Setup font Poppins, metadata SEO, dark background
│   ├── page.tsx            # Halaman utama yang merangkai semua section
│   └── globals.css         # Konfigurasi Tailwind & custom scrollbar
├── components/
│   ├── Navbar.tsx          # Sticky navbar + mobile menu
│   ├── Hero.tsx            # Hero text + StackedPhotoCard
│   ├── StackedPhotoCard.tsx# Animasi kartu foto bertumpuk di Hero
│   ├── ServicesTools.tsx   # Service cards + Tools grid
│   ├── Projects.tsx        # Filter tabs + daftar ProjectCard
│   ├── Contact.tsx         # Form "Get in touch" + state validasi
│   └── Footer.tsx          # Copyright footer
└── data/
    └── projects.ts         # Data proyek, services, tools, dan social links
public/
├── cv.pdf                  # File CV untuk tombol Download CV
├── profile.jpg             # Foto profil untuk Hero section
└── projects/               # Screenshot/mockup untuk 5 proyek

```

## 7. Kebutuhan Non-Fungsional (Non-Functional Requirements)

1. **Responsivitas:** Tampilan harus optimal di Mobile (`375px`), Tablet (`768px`), dan Desktop (`1280px+`).

2. **Performa:** Gunakan `next/image` untuk optimasi seluruh aset gambar proyek dan foto profil. Target Lighthouse score > 90 untuk Performance, Accessibility, dan SEO.

3. **Aksesibilitas (A11y):**

   * Kontras warna teks tombol aksen `#F1FF26` wajib menggunakan warna gelap `#0B090C`.

   * Semua ikon sosial media dan tombol ikon wajib memiliki atribut `aria-label`.

4. **Animasi:** Gunakan `framer-motion` dengan `viewport={{ once: true }}` untuk *scroll reveal* yang halus dan tidak mengganggu keterbacaan.

## 8. Checklist Aset Sebelum Implementasi

* \[ \] Siapkan foto profil rasio portrait/square (`public/profile.jpg`).

* \[ \] Siapkan file CV terbaru (`public/cv.pdf`).

* \[ \] Ambil screenshot/mockup rasio `16:10` untuk kelima proyek dan simpan di `public/projects/`.

* \[ \] Rename repositori `Aplikasi-Web-Pengolaha--Citra-Digital` di GitHub agar tidak ada typo, lalu perbarui URL di `src/data/projects.ts`.

* \[ \] Isi placeholder nama lengkap, email, LinkedIn, link Figma Frugal Vault, dan URL live demo yang masih kosong.