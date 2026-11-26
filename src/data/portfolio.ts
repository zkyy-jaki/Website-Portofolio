import type { Locale } from '../context/LanguageContext';
import type {
  OwnerProfile,
  ProjectCategory,
  ProjectId,
  ProjectItem,
  ServiceId,
  ServiceItem,
  TechStackCategory,
  TelemetryMetric,
} from '../types/portfolio';

export type {
  OwnerProfile,
  ProjectCategory,
  ProjectId,
  ProjectItem,
  ServiceId,
  ServiceItem,
  TechStackCategory,
  TechStackItem,
  TelemetryMetric,
} from '../types/portfolio';

const SHARED_OWNER_BASE = {
  name: 'Zaky Mubarok Aljauhari',
  brand: 'ZAKY',
  role: 'Full-Stack Web Developer, Data Analyst, & IoT Enthusiast',
  statusText: 'SYS.ONLINE // AVAILABLE FOR COLLABORATION',
  githubUrl: 'https://github.com/zkyy-jaki',
  linkedinUrl:
    'https://www.linkedin.com/in/zaky-mubarok-aljauhari-6732b231a/',
  email: 'zakymubarok040506@gmail.com',
} as const;

const OWNER_PROFILE_BY_LOCALE: Record<Locale, OwnerProfile> = {
  id: {
    ...SHARED_OWNER_BASE,
    affiliation:
      'Mahasiswa S1 Informatika, Universitas Pembangunan Nasional "Veteran" Yogyakarta',
    bio: 'Mahasiswa S1 Informatika di Universitas Pembangunan Nasional "Veteran" Yogyakarta yang berfokus pada pengembangan aplikasi Full-Stack Web, analisis data berbasis metodologi CRISP-DM, serta sistem terintegrasi IoT & otomasi server. Membangun solusi end-to-end mulai dari firmware mikrokontroler ESP32 dan backend terstruktur hingga web dashboard real-time yang presisi.',
    serviceOverview:
      'Pendekatan engineering end-to-end yang menjembatani perangkat keras (ESP32 & jaringan sensor), backend berkinerja tinggi (Express.js, Laravel, Python, SQL/Prisma), analisis prediktif berbasis CRISP-DM, hingga antarmuka pengguna modern yang responsif dan terukur.',
  },
  en: {
    ...SHARED_OWNER_BASE,
    affiliation:
      'Undergraduate Informatics Student, Universitas Pembangunan Nasional "Veteran" Yogyakarta',
    bio: 'Undergraduate Informatics student at Universitas Pembangunan Nasional "Veteran" Yogyakarta specializing in Full-Stack Web application development, CRISP-DM data analysis, and integrated IoT & server automation systems. Building end-to-end solutions from ESP32 microcontroller firmware and structured backends to precision real-time web dashboards.',
    serviceOverview:
      'An end-to-end engineering approach bridging hardware (ESP32 & sensor networks), high-performance backends (Express.js, Laravel, Python, SQL/Prisma), CRISP-DM predictive analytics, and responsive, measurable modern user interfaces.',
  },
};

interface ServiceBase {
  id: ServiceId;
  code: string;
  metricsLabel: string;
  filterTarget: ProjectCategory;
}

const SERVICE_BASES: ServiceBase[] = [
  {
    id: 'fullstack-web',
    code: 'SRV-01',
    metricsLabel: 'Next.js · React · TypeScript · Express.js',
    filterTarget: 'Web & Security',
  },
  {
    id: 'iot-automation',
    code: 'SRV-02',
    metricsLabel: 'ESP32 · MQTT · Socket.IO · Ubuntu VPS',
    filterTarget: 'IoT & Automation',
  },
  {
    id: 'data-ml',
    code: 'SRV-03',
    metricsLabel: 'Python · Pandas · Scikit-Learn · CRISP-DM',
    filterTarget: 'Data & ML',
  },
];

const SERVICE_COPY: Record<
  Locale,
  Record<ServiceId, { title: string; projectsCompleted: string; summary: string }>
> = {
  id: {
    'fullstack-web': {
      title: 'Pengembangan Web Full-Stack',
      projectsCompleted: '3 Proyek selesai',
      summary:
        'Aplikasi web modern, dashboard telemetri real-time, serta workstation pengolahan citra digital interaktif langsung di sisi klien.',
    },
    'iot-automation': {
      title: 'Sistem IoT & Otomasi',
      projectsCompleted: '2 Proyek selesai',
      summary:
        'Jaringan sensor ESP32 dengan provisioning Wi-Fi captive portal, streaming telemetri MQTT & Socket.IO, serta bot daemon systemd 24/7 di Linux VPS.',
    },
    'data-ml': {
      title: 'Analisis Data & Machine Learning',
      projectsCompleted: '1 Proyek selesai',
      summary:
        'Pemodelan prediktif terstruktur dan analisis data eksploratif menggunakan metodologi standar industri CRISP-DM dengan Python.',
    },
  },
  en: {
    'fullstack-web': {
      title: 'Full-Stack Web Development',
      projectsCompleted: '3 Projects completed',
      summary:
        'Modern web apps, real-time telemetry dashboards, and interactive client-side digital image processing workstations.',
    },
    'iot-automation': {
      title: 'IoT & Automation Systems',
      projectsCompleted: '2 Projects completed',
      summary:
        'ESP32 sensor networks with captive portal provisioning, MQTT & Socket.IO telemetry streaming, and 24/7 systemd daemon bots on Linux VPS.',
    },
    'data-ml': {
      title: 'Data Analysis & Machine Learning',
      projectsCompleted: '1 Project completed',
      summary:
        'Structured predictive modeling and exploratory data analysis applying the industry-standard CRISP-DM methodology with Python.',
    },
  },
};

function buildServices(locale: Locale): ServiceItem[] {
  return SERVICE_BASES.map((base) => ({
    ...base,
    ...SERVICE_COPY[locale][base.id],
  }));
}

interface TechStackBase {
  id: TechStackCategory['id'];
  code: string;
  items: { name: string; tag: string; role: Record<Locale, string> }[];
}

const TECH_STACK_BASES: TechStackBase[] = [
  {
    id: 'frontend',
    code: 'STK // 01',
    items: [
      {
        name: 'Next.js',
        tag: 'SSR / App Router',
        role: {
          id: 'Framework React full-stack',
          en: 'Full-stack React framework',
        },
      },
      {
        name: 'React.js',
        tag: 'UI Library',
        role: {
          id: 'Arsitektur SPA berbasis komponen',
          en: 'Component-driven SPA architecture',
        },
      },
      {
        name: 'TypeScript',
        tag: 'Strict Typing',
        role: {
          id: 'Keamanan tipe statis & kontrak API',
          en: 'Static type safety & contracts',
        },
      },
      {
        name: 'Tailwind CSS',
        tag: 'Design Tokens',
        role: {
          id: 'Sistem styling utility-first',
          en: 'Utility-first styling system',
        },
      },
      {
        name: 'Framer Motion',
        tag: 'Physics UI',
        role: {
          id: 'Animasi layout & state deklaratif',
          en: 'Declarative layout & state animations',
        },
      },
    ],
  },
  {
    id: 'backend',
    code: 'STK // 02',
    items: [
      {
        name: 'Node.js',
        tag: 'Runtime',
        role: {
          id: 'Runtime server asinkron berbasis event',
          en: 'Asynchronous event-driven server runtime',
        },
      },
      {
        name: 'Express.js',
        tag: 'REST & WS',
        role: {
          id: 'Orkestrator REST API & Socket.IO',
          en: 'Backend API & Socket.IO orchestrator',
        },
      },
      {
        name: 'Laravel',
        tag: 'PHP MVC',
        role: {
          id: 'Framework aplikasi web enterprise',
          en: 'Enterprise web application framework',
        },
      },
      {
        name: 'Python',
        tag: 'Automation & Data',
        role: {
          id: 'Bot asinkron, pipeline data & skrip backend',
          en: 'Async bots, data pipelines & backend scripts',
        },
      },
      {
        name: 'PostgreSQL',
        tag: 'RDBMS',
        role: {
          id: 'Basis data relasional skala produksi',
          en: 'Production relational database',
        },
      },
      {
        name: 'MySQL',
        tag: 'RDBMS',
        role: {
          id: 'Sistem manajemen basis data relasional',
          en: 'Relational database management',
        },
      },
      {
        name: 'SQLite',
        tag: 'Embedded / WAL',
        role: {
          id: 'Penyimpanan lokal & edge konkurensi tinggi',
          en: 'High-concurrency local & edge persistence',
        },
      },
    ],
  },
  {
    id: 'data-iot',
    code: 'STK // 03',
    items: [
      {
        name: 'Python (Pandas, Scikit-Learn, CRISP-DM)',
        tag: 'Data & ML',
        role: {
          id: 'Analitik prediktif end-to-end & feature engineering',
          en: 'End-to-end predictive analytics & feature engineering',
        },
      },
      {
        name: 'ESP32',
        tag: 'Microcontroller',
        role: {
          id: 'Captive portal Wi-Fi & telemetri multi-sensor',
          en: 'Captive portal Wi-Fi & multi-sensor telemetry',
        },
      },
      {
        name: 'MQTT',
        tag: 'Pub/Sub Broker',
        role: {
          id: 'Komunikasi mesin-ke-mesin latensi rendah',
          en: 'Low-latency machine-to-machine messaging',
        },
      },
      {
        name: 'Socket.IO',
        tag: 'WebSockets',
        role: {
          id: 'Telemetri browser dua arah secara real-time',
          en: 'Bi-directional real-time browser telemetry',
        },
      },
      {
        name: 'Linux VPS (Ubuntu)',
        tag: 'Systemd / Cloud',
        role: {
          id: 'Deployment daemon produksi 24/7',
          en: '24/7 production daemon deployment',
        },
      },
    ],
  },
];

const TECH_CATEGORY_TITLES: Record<
  Locale,
  Record<TechStackCategory['id'], string>
> = {
  id: {
    frontend: 'Frontend Engineering',
    backend: 'Backend & Basis Data',
    'data-iot': 'Data Science & Perangkat IoT',
  },
  en: {
    frontend: 'Frontend Engineering',
    backend: 'Backend & Database',
    'data-iot': 'Data Science & IoT Hardware',
  },
};

function buildTechStack(locale: Locale): TechStackCategory[] {
  return TECH_STACK_BASES.map((category) => ({
    id: category.id,
    code: category.code,
    title: TECH_CATEGORY_TITLES[locale][category.id],
    items: category.items.map((item) => ({
      name: item.name,
      tag: item.tag,
      role: item.role[locale],
    })),
  }));
}

interface ProjectBase {
  id: ProjectId;
  indexCode: string;
  categories: Exclude<ProjectCategory, 'All'>[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  statusBadge: string;
  image: string;
}

const PROJECT_BASES: ProjectBase[] = [
  {
    id: 'smart-rack-warehouse',
    indexCode: 'PRJ-01 // IOT-WEB',
    categories: ['IoT & Automation', 'Web & Security'],
    techStack: [
      'ESP32',
      'MQTT',
      'Express.js',
      'Prisma',
      'SQLite',
      'Socket.IO',
      'TypeScript',
      'Tailwind CSS',
    ],
    githubUrl: 'https://github.com/zkyy-jaki/dashboard-iot-smartrack',
    liveUrl: 'https://ndgl.cloud',
    statusBadge: 'LIVE // NDGL.CLOUD',
    image: '/projects/smart-rack.png',
  },
  {
    id: 'sate-solo-landing-page',
    indexCode: 'PRJ-02 // WEB-FE',
    categories: ['Web & Security'],
    techStack: [
      'Next.js 15',
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Lucide React',
    ],
    githubUrl: 'https://github.com/zkyy-jaki/sate-solo-landing-page',
    statusBadge: 'NEXT.JS 15 // PRODUCTION UI',
    image: '/projects/sate-solo.png',
  },
  {
    id: 'digital-image-processing',
    indexCode: 'PRJ-03 // WEB-VISION',
    categories: ['Web & Security'],
    techStack: [
      'TypeScript',
      'Next.js',
      'React.js',
      'HTML5 Canvas API',
      'WebRTC Live Webcam',
      'Tailwind CSS',
    ],
    githubUrl:
      'https://github.com/zkyy-jaki/Aplikasi-Web-Pengolaha--Citra-Digital',
    statusBadge: '13 KERNELS + LIVE WEBCAM',
    image: '/projects/image-processing.png',
  },
  {
    id: 'moodle-attendance-bot',
    indexCode: 'PRJ-04 // BOT-VPS',
    categories: ['IoT & Automation'],
    techStack: [
      'Python',
      'python-telegram-bot',
      'SQLite (WAL Mode)',
      'Fernet Encryption',
      'Systemd Daemon',
      'Linux VPS (Ubuntu)',
    ],
    statusBadge: '24/7 UBUNTU VPS DAEMON',
    image: '/projects/moodle-bot.png',
  },
  {
    id: 'bank-marketing-crisp-dm',
    indexCode: 'PRJ-05 // DATA-ML',
    categories: ['Data & ML'],
    techStack: [
      'Python',
      'Pandas',
      'Scikit-Learn',
      'CRISP-DM Methodology',
      'Predictive Modeling',
      'Data Visualization',
    ],
    statusBadge: 'CRISP-DM // SCIKIT-LEARN',
    image: '/projects/bank-marketing.png',
  },
];

interface LocalizedProjectText {
  title: string;
  primaryTag: string;
  description: string;
  highlights: string[];
  telemetryMetrics: TelemetryMetric[];
  liveLabel?: string;
}

const PROJECT_COPY: Record<Locale, Record<ProjectId, LocalizedProjectText>> = {
  id: {
    'smart-rack-warehouse': {
      title: 'Smart Small Rack Warehouse IoT System & Dashboard',
      primaryTag: 'Telemetri IoT & Dashboard Web Real-Time',
      description:
        'Sistem monitoring rak gudang berbasis ESP32 (hotspot captive portal Wi-Fi provisioning, 6 sensor ultrasonik, DHT11, MQ2, indikator LED RGB per baris rak, buzzer), komunikasi MQTT, backend Express.js + Prisma + SQLite + Socket.IO, dan web dashboard real-time di ndgl.cloud.',
      highlights: [
        'Hotspot Captive Portal DNS untuk provisioning kredensial Wi-Fi ESP32 tanpa hardcode SSID.',
        'Akuisisi data presisi dari 6 sensor ultrasonik (3 baris rak), sensor suhu/kelembapan DHT11, dan sensor gas/asap MQ2.',
        'Aktuator fisik langsung di perangkat: indikator LED RGB per baris rak serta alarm buzzer otomatis.',
        'Pipeline telemetri real-time via protokol MQTT menuju backend Express.js + Prisma + SQLite + Socket.IO dan web dashboard live di ndgl.cloud.',
      ],
      telemetryMetrics: [
        { label: 'Sensor', value: '6x Ultrasonik + DHT11 + MQ2' },
        { label: 'Aktuator', value: 'LED RGB Per Baris + Buzzer' },
        { label: 'Protokol', value: 'MQTT + Socket.IO' },
        { label: 'Deployment', value: 'ndgl.cloud' },
      ],
      liveLabel: 'Dashboard Live (ndgl.cloud)',
    },
    'sate-solo-landing-page': {
      title: 'Sate Solo Restaurant Landing Page',
      primaryTag: 'Web Kuliner Modern & UX Konversi',
      description:
        'Web landing page restoran responsif yang dibangun menggunakan Next.js 15, React, TypeScript, Tailwind CSS, Framer Motion, dan Lucide React, lengkap dengan integrasi CTA pemesanan WhatsApp dan lokasi Google Maps.',
      highlights: [
        'Arsitektur komponen modern berbasis Next.js 15 dan React dengan pengetikan ketat TypeScript.',
        'Transisi antarmuka yang halus dan responsif di perangkat mobile maupun desktop menggunakan Framer Motion & Tailwind CSS.',
        'Alur konversi pelanggan langsung melalui integrasi CTA pemesanan WhatsApp otomatis.',
        'Integrasi peta interaktif Google Maps untuk memudahkan navigasi pelanggan ke lokasi outlet.',
      ],
      telemetryMetrics: [
        { label: 'Framework', value: 'Next.js 15 + React' },
        { label: 'Animasi', value: 'Framer Motion UI' },
        { label: 'Konversi', value: 'CTA Langsung WhatsApp' },
        { label: 'Integrasi Peta', value: 'Google Maps Embed' },
      ],
    },
    'digital-image-processing': {
      title: 'Digital Image Processing Web App',
      primaryTag: 'Computer Vision & Kernel Canvas Real-Time',
      description:
        'Aplikasi web pengolahan citra digital interaktif yang mendukung 13 operasi pemrosesan citra (Histogram Equalization, Thresholding, Edge Detection, Sharpening, Gaussian/Median/Bilateral Blur, Sketch, dan lainnya), dilengkapi fitur Snapshot dan Live Webcam.',
      highlights: [
        'Mendukung 13 operasi pemrosesan citra digital secara interaktif langsung di browser tanpa latensi server.',
        'Transformasi spasial & histogram lengkap: Histogram Equalization, Thresholding, Edge Detection, Sharpening, Sketch, Grayscale, Brightness, Negative, dan Mirroring.',
        'Implementasi 2D Convolution Filtering dengan kernel Gaussian Blur, Median Blur, Bilateral Filter, dan Averaging Blur.',
        'Dilengkapi fitur akuisisi kamera langsung (Live Webcam stream) dan tangkapan layar instan (Snapshot) untuk eksperimen real-time.',
      ],
      telemetryMetrics: [
        { label: 'Operasi', value: '13 Kernel Pengolahan Citra' },
        { label: 'Filter Blur', value: 'Gaussian · Median · Bilateral' },
        { label: 'Ekstraksi Fitur', value: 'Edge Detection & Histogram Eq' },
        { label: 'Mode Kamera', value: 'Live Webcam + Snapshot' },
      ],
    },
    'moodle-attendance-bot': {
      title: 'Automated Moodle Attendance Telegram Bot',
      primaryTag: 'Otomasi Cloud 24/7 & Worker LMS Terenkripsi',
      description:
        'Bot Telegram otomatis 24/7 untuk presensi portal LMS berbasis Moodle yang di-deploy di Ubuntu VPS menggunakan Python, python-telegram-bot, SQLite (WAL mode), enkripsi Fernet, dan systemd.',
      highlights: [
        'Worker asinkron 24/7 yang menangani presensi kuliah otomatis pada portal LMS berbasis Moodle melalui antarmuka Telegram.',
        'Keamanan kredensial pengguna dijamin dengan enkripsi simetris Fernet (AES-128-CBC + HMAC) sebelum disimpan ke database.',
        'Penyimpanan lokal konkurensi tinggi menggunakan SQLite dengan mode Write-Ahead Logging (WAL).',
        'Dijalankan sebagai service daemon systemd di atas Linux Ubuntu VPS untuk menjamin uptime berkelanjutan dan auto-restart.',
      ],
      telemetryMetrics: [
        { label: 'Runtime', value: 'Python + python-telegram-bot' },
        { label: 'Basis Data', value: 'SQLite (WAL Mode)' },
        { label: 'Keamanan', value: 'Vault Kredensial Fernet' },
        { label: 'Host', value: 'Ubuntu VPS (Systemd 24/7)' },
      ],
    },
    'bank-marketing-crisp-dm': {
      title: 'Bank Marketing Predictive Analysis (CRISP-DM)',
      primaryTag: 'Data Science & Machine Learning Prediktif',
      description:
        'Proyek analisis data dan pemodelan machine learning menggunakan metodologi CRISP-DM pada dataset Bank Marketing untuk memprediksi langganan deposito berjangka nasabah.',
      highlights: [
        'Implementasi terstruktur mengikuti 6 tahapan CRISP-DM: Business Understanding, Data Understanding, Data Preparation, Modeling, Evaluation, dan Deployment.',
        'Pembersihan data, penanganan ketidakseimbangan kelas, encoding fitur kategorikal, dan analisis korelasi atribut kampanye perbankan.',
        'Pelatihan dan komparasi model klasifikasi Scikit-Learn untuk memprediksi probabilitas nasabah berlangganan deposito berjangka (term deposit).',
        'Evaluasi komprehensif berbasis metrik Precision, Recall, F1-Score, dan Confusion Matrix untuk rekomendasi strategi pemasaran bank.',
      ],
      telemetryMetrics: [
        { label: 'Metodologi', value: 'CRISP-DM (6 Fase Siklus)' },
        { label: 'Dataset', value: 'Bank Marketing Campaign' },
        { label: 'Stack Utama', value: 'Python · Pandas · Scikit-Learn' },
        { label: 'Target Output', value: 'Langganan Deposito Berjangka' },
      ],
    },
  },
  en: {
    'smart-rack-warehouse': {
      title: 'Smart Small Rack Warehouse IoT System & Dashboard',
      primaryTag: 'IoT Telemetry & Real-Time Web Dashboard',
      description:
        'ESP32-based warehouse rack monitoring system featuring captive portal Wi-Fi provisioning, 6 ultrasonic sensors, DHT11, MQ2 gas sensor, per-row RGB LED indicators, buzzer, MQTT communication, Express.js + Prisma + SQLite + Socket.IO backend, and a live web dashboard at ndgl.cloud.',
      highlights: [
        'DNS Captive Portal hotspot for zero-hardcode ESP32 Wi-Fi credential provisioning.',
        'Precision data acquisition from 6 ultrasonic sensors (3 rack rows), DHT11 temperature/humidity sensor, and MQ2 gas/smoke sensor.',
        'Direct onboard physical actuators: per-row RGB LED status indicators and automated buzzer alarms.',
        'Real-time telemetry pipeline over MQTT into an Express.js + Prisma + SQLite + Socket.IO backend powering the live dashboard at ndgl.cloud.',
      ],
      telemetryMetrics: [
        { label: 'Sensors', value: '6x Ultrasonic + DHT11 + MQ2' },
        { label: 'Actuators', value: 'Per-Row RGB LED + Buzzer' },
        { label: 'Transport', value: 'MQTT + Socket.IO' },
        { label: 'Deployment', value: 'ndgl.cloud' },
      ],
      liveLabel: 'Live Dashboard (ndgl.cloud)',
    },
    'sate-solo-landing-page': {
      title: 'Sate Solo Restaurant Landing Page',
      primaryTag: 'Modern Culinary Web & Conversion UX',
      description:
        'Responsive restaurant landing page built with Next.js 15, React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React, complete with WhatsApp ordering CTA integration and Google Maps outlet location.',
      highlights: [
        'Modern component architecture built on Next.js 15 and React with strict TypeScript typing.',
        'Smooth, responsive UI transitions across mobile and desktop using Framer Motion & Tailwind CSS.',
        'Direct customer conversion flow via automated WhatsApp ordering CTA integration.',
        'Interactive Google Maps integration to guide customers effortlessly to the restaurant outlet.',
      ],
      telemetryMetrics: [
        { label: 'Framework', value: 'Next.js 15 + React' },
        { label: 'Motion', value: 'Framer Motion UI' },
        { label: 'Conversion', value: 'WhatsApp Direct CTA' },
        { label: 'Geo Integration', value: 'Google Maps Embed' },
      ],
    },
    'digital-image-processing': {
      title: 'Digital Image Processing Web App',
      primaryTag: 'Computer Vision & Real-Time Canvas Kernels',
      description:
        'Interactive digital image processing web application supporting 13 image manipulation operations (Histogram Equalization, Thresholding, Edge Detection, Sharpening, Gaussian/Median/Bilateral Blur, Sketch, and more), complete with Snapshot and Live Webcam features.',
      highlights: [
        'Supports 13 interactive digital image processing operations directly in the browser with zero server latency.',
        'Comprehensive spatial & histogram transforms: Histogram Equalization, Thresholding, Edge Detection, Sharpening, Sketch, Grayscale, Brightness, Negative, and Mirroring.',
        '2D Convolution Filtering implementation with Gaussian Blur, Median Blur, Bilateral Filter, and Averaging Blur kernels.',
        'Equipped with Live Webcam streaming and instant Snapshot capture for real-time experimentation.',
      ],
      telemetryMetrics: [
        { label: 'Operations', value: '13 Image Processing Kernels' },
        { label: 'Blur Filters', value: 'Gaussian · Median · Bilateral' },
        { label: 'Feature Extraction', value: 'Edge Detection & Histogram Eq' },
        { label: 'Capture Mode', value: 'Live Webcam + Snapshot' },
      ],
    },
    'moodle-attendance-bot': {
      title: 'Automated Moodle Attendance Telegram Bot',
      primaryTag: '24/7 Cloud Automation & Encrypted LMS Worker',
      description:
        '24/7 automated Telegram bot for Moodle-based LMS attendance, deployed on an Ubuntu VPS using Python, python-telegram-bot, SQLite (WAL mode), Fernet encryption, and systemd.',
      highlights: [
        '24/7 asynchronous worker handling automated course attendance on Moodle-based LMS portals via a Telegram interface.',
        'User credentials secured with symmetric Fernet encryption (AES-128-CBC + HMAC) prior to database persistence.',
        'High-concurrency local storage powered by SQLite in Write-Ahead Logging (WAL) mode.',
        'Managed as a systemd daemon service on Linux Ubuntu VPS to guarantee continuous uptime and auto-restart.',
      ],
      telemetryMetrics: [
        { label: 'Runtime', value: 'Python + python-telegram-bot' },
        { label: 'Database', value: 'SQLite (WAL Mode)' },
        { label: 'Security', value: 'Fernet Credential Vault' },
        { label: 'Host', value: 'Ubuntu VPS (24/7 Systemd)' },
      ],
    },
    'bank-marketing-crisp-dm': {
      title: 'Bank Marketing Predictive Analysis (CRISP-DM)',
      primaryTag: 'Data Science & Predictive Machine Learning',
      description:
        'Data analysis and machine learning modeling project applying the CRISP-DM methodology on the Bank Marketing dataset to predict customer term deposit subscriptions.',
      highlights: [
        'Structured implementation following all 6 CRISP-DM phases: Business Understanding, Data Understanding, Data Preparation, Modeling, Evaluation, and Deployment.',
        'Data cleaning, class imbalance handling, categorical feature encoding, and banking campaign attribute correlation analysis.',
        'Training and comparison of Scikit-Learn classification models to predict customer term deposit subscription probabilities.',
        'Comprehensive evaluation using Precision, Recall, F1-Score, and Confusion Matrix metrics to inform bank marketing strategy.',
      ],
      telemetryMetrics: [
        { label: 'Methodology', value: 'CRISP-DM (6 Lifecycle Phases)' },
        { label: 'Dataset', value: 'Bank Marketing Campaign' },
        { label: 'Core Stack', value: 'Python · Pandas · Scikit-Learn' },
        { label: 'Target Output', value: 'Term Deposit Subscription' },
      ],
    },
  },
};

function buildProjects(locale: Locale): ProjectItem[] {
  return PROJECT_BASES.map((base) => ({
    ...base,
    ...PROJECT_COPY[locale][base.id],
  }));
}

export function getPortfolioData(locale: Locale) {
  return {
    ownerProfile: OWNER_PROFILE_BY_LOCALE[locale],
    serviceItems: buildServices(locale),
    techStackCategories: buildTechStack(locale),
    projects: buildProjects(locale),
  };
}

export const OWNER_PROFILE: OwnerProfile = OWNER_PROFILE_BY_LOCALE.id;
export const SERVICE_ITEMS: ServiceItem[] = buildServices('id');
export const TECH_STACK_CATEGORIES: TechStackCategory[] = buildTechStack('id');
export const PROJECTS: ProjectItem[] = buildProjects('id');
