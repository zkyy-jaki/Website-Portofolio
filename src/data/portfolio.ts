import type {
  OwnerProfile,
  ProjectItem,
  ServiceItem,
  TechStackCategory,
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

export const OWNER_PROFILE: OwnerProfile = {
  name: 'Zaky Mubarok Aljauhari',
  brand: 'ZAKY',
  role: 'Full-Stack Web Developer, Data Analyst, & IoT Enthusiast',
  affiliation:
    'Mahasiswa S1 Informatika, Universitas Pembangunan Nasional "Veteran" Yogyakarta',
  statusText: 'SYS.ONLINE // AVAILABLE FOR COLLABORATION',
  bio: 'Mahasiswa S1 Informatika di Universitas Pembangunan Nasional "Veteran" Yogyakarta yang berfokus pada pengembangan aplikasi Full-Stack Web, analisis data berbasis metodologi CRISP-DM, serta sistem terintegrasi IoT & otomasi server. Membangun solusi end-to-end mulai dari firmware mikrokontroler ESP32 dan backend terstruktur hingga web dashboard real-time yang presisi.',
  serviceOverview:
    'Pendekatan engineering end-to-end yang menjembatani perangkat keras (ESP32 & jaringan sensor), backend berkinerja tinggi (Express.js, Laravel, Python, SQL/Prisma), analisis prediktif berbasis CRISP-DM, hingga antarmuka pengguna modern yang responsif dan terukur.',
  githubUrl: 'https://github.com/zkyy-jaki',
  linkedinUrl:
    'https://www.linkedin.com/in/zaky-mubarok-aljauhari-6732b231a/',
  email: 'zakymubarok040506@gmail.com',
};

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: 'fullstack-web',
    code: 'SRV-01',
    title: 'Full-Stack Web Development',
    projectsCompleted: '3 Projects completed',
    summary:
      'Modern web apps, real-time telemetry dashboards, and interactive client-side image processing workstations.',
    metricsLabel: 'Next.js · React · TypeScript · Express.js',
    filterTarget: 'Web & Security',
  },
  {
    id: 'iot-automation',
    code: 'SRV-02',
    title: 'IoT & Automation Systems',
    projectsCompleted: '2 Projects completed',
    summary:
      'ESP32 sensor networks with captive portal provisioning, MQTT & Socket.IO telemetry streaming, and 24/7 systemd daemon bots on Linux VPS.',
    metricsLabel: 'ESP32 · MQTT · Socket.IO · Ubuntu VPS',
    filterTarget: 'IoT & Automation',
  },
  {
    id: 'data-ml',
    code: 'SRV-03',
    title: 'Data Analysis & Machine Learning',
    projectsCompleted: '1 Project completed',
    summary:
      'Structured predictive modeling and exploratory data analysis applying the industry-standard CRISP-DM methodology with Python.',
    metricsLabel: 'Python · Pandas · Scikit-Learn · CRISP-DM',
    filterTarget: 'Data & ML',
  },
];

export const TECH_STACK_CATEGORIES: TechStackCategory[] = [
  {
    id: 'frontend',
    code: 'STK // 01',
    title: 'Frontend Engineering',
    items: [
      { name: 'Next.js', tag: 'SSR / App Router', role: 'Full-stack React framework' },
      { name: 'React.js', tag: 'UI Library', role: 'Component-driven SPA architecture' },
      { name: 'TypeScript', tag: 'Strict Typing', role: 'Static type safety & contracts' },
      { name: 'Tailwind CSS', tag: 'Design Tokens', role: 'Utility-first styling system' },
      { name: 'Framer Motion', tag: 'Physics UI', role: 'Declarative layout & state animations' },
    ],
  },
  {
    id: 'backend',
    code: 'STK // 02',
    title: 'Backend & Database',
    items: [
      { name: 'Node.js', tag: 'Runtime', role: 'Asynchronous event-driven server runtime' },
      { name: 'Express.js', tag: 'REST & WS', role: 'Backend API & Socket.IO orchestrator' },
      { name: 'Laravel', tag: 'PHP MVC', role: 'Enterprise web application framework' },
      { name: 'Python', tag: 'Automation & Data', role: 'Async bots, data pipelines & backend scripts' },
      { name: 'PostgreSQL', tag: 'RDBMS', role: 'Production relational database' },
      { name: 'MySQL', tag: 'RDBMS', role: 'Relational database management' },
      { name: 'SQLite', tag: 'Embedded / WAL', role: 'High-concurrency local & edge persistence' },
    ],
  },
  {
    id: 'data-iot',
    code: 'STK // 03',
    title: 'Data Science & IoT Hardware',
    items: [
      {
        name: 'Python (Pandas, Scikit-Learn, CRISP-DM)',
        tag: 'Data & ML',
        role: 'End-to-end predictive analytics & feature engineering',
      },
      { name: 'ESP32', tag: 'Microcontroller', role: 'Captive portal Wi-Fi & multi-sensor telemetry' },
      { name: 'MQTT', tag: 'Pub/Sub Broker', role: 'Low-latency machine-to-machine messaging' },
      { name: 'Socket.IO', tag: 'WebSockets', role: 'Bi-directional real-time browser telemetry' },
      { name: 'Linux VPS (Ubuntu)', tag: 'Systemd / Cloud', role: '24/7 production daemon deployment' },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'smart-rack-warehouse',
    indexCode: 'PRJ-01 // IOT-WEB',
    title: 'Smart Small Rack Warehouse IoT System & Dashboard',
    categories: ['IoT & Automation', 'Web & Security'],
    primaryTag: 'IoT Telemetry & Real-Time Web Dashboard',
    description:
      'Sistem monitoring rak gudang berbasis ESP32 (hotspot captive portal Wi-Fi provisioning, 6 sensor ultrasonik, DHT11, MQ2, indikator LED RGB per baris rak, buzzer), komunikasi MQTT, backend Express.js + Prisma + SQLite + Socket.IO, dan web dashboard real-time di ndgl.cloud.',
    highlights: [
      'Hotspot Captive Portal DNS untuk provisioning kredensial Wi-Fi ESP32 tanpa hardcode SSID.',
      'Akuisisi data presisi dari 6 sensor ultrasonik (3 baris rak), sensor suhu/kelembapan DHT11, dan sensor gas/asap MQ2.',
      'Aktuator fisik langsung di perangkat: indikator LED RGB per baris rak serta alarm buzzer otomatis.',
      'Pipeline telemetri real-time via protokol MQTT menuju backend Express.js + Prisma + SQLite + Socket.IO dan web dashboard live di ndgl.cloud.',
    ],
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
    telemetryMetrics: [
      { label: 'Sensors', value: '6x Ultrasonic + DHT11 + MQ2' },
      { label: 'Actuators', value: 'Per-Row RGB LED + Buzzer' },
      { label: 'Transport', value: 'MQTT + Socket.IO' },
      { label: 'Deployment', value: 'ndgl.cloud' },
    ],
    githubUrl: 'https://github.com/zkyy-jaki/dashboard-iot-smartrack',
    liveUrl: 'https://ndgl.cloud',
    liveLabel: 'Live Dashboard (ndgl.cloud)',
    statusBadge: 'LIVE // NDGL.CLOUD',
    image: '/projects/smart-rack.png',
  },
  {
    id: 'sate-solo-landing-page',
    indexCode: 'PRJ-02 // WEB-FE',
    title: 'Sate Solo Restaurant Landing Page',
    categories: ['Web & Security'],
    primaryTag: 'Modern Culinary Web & Conversion UX',
    description:
      'Web landing page restoran responsif yang dibangun menggunakan Next.js 15, React, TypeScript, Tailwind CSS, Framer Motion, dan Lucide React, lengkap dengan integrasi CTA pemesanan WhatsApp dan lokasi Google Maps.',
    highlights: [
      'Arsitektur komponen modern berbasis Next.js 15 dan React dengan pengetikan ketat TypeScript.',
      'Transisi antarmuka yang halus dan responsif di perangkat mobile maupun desktop menggunakan Framer Motion & Tailwind CSS.',
      'Alur konversi pelanggan langsung melalui integrasi CTA pemesanan WhatsApp otomatis.',
      'Integrasi peta interaktif Google Maps untuk memudahkan navigasi pelanggan ke lokasi outlet.',
    ],
    techStack: [
      'Next.js 15',
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Lucide React',
    ],
    telemetryMetrics: [
      { label: 'Framework', value: 'Next.js 15 + React' },
      { label: 'Motion', value: 'Framer Motion UI' },
      { label: 'Conversion', value: 'WhatsApp Direct CTA' },
      { label: 'Geo Integration', value: 'Google Maps Embed' },
    ],
    githubUrl: 'https://github.com/zkyy-jaki/sate-solo-landing-page',
    statusBadge: 'NEXT.JS 15 // PRODUCTION UI',
    image: '/projects/sate-solo.png',
  },
  {
    id: 'digital-image-processing',
    indexCode: 'PRJ-03 // WEB-VISION',
    title: 'Digital Image Processing Web App',
    categories: ['Web & Security'],
    primaryTag: 'Computer Vision & Real-Time Canvas Kernels',
    description:
      'Aplikasi web pengolahan citra digital interaktif yang mendukung 13 operasi pemrosesan citra (Histogram Equalization, Thresholding, Edge Detection, Sharpening, Gaussian/Median/Bilateral Blur, Sketch, dll.) Fitur Snapshot , Live Webcam.',
    highlights: [
      'Mendukung 13 operasi pemrosesan citra digital secara interaktif langsung di browser tanpa latensi server.',
      'Transformasi spasial & histogram lengkap: Histogram Equalization, Thresholding, Edge Detection, Sharpening, Sketch, Grayscale, Brightness, Negative, dan Mirroring.',
      'Implementasi 2D Convolution Filtering dengan kernel Gaussian Blur, Median Blur, Bilateral Filter, dan Averaging Blur.',
      'Dilengkapi fitur akuisisi kamera langsung (Live Webcam stream) dan tangkapan layar instan (Snapshot) untuk eksperimen real-time.',
    ],
    techStack: [
      'TypeScript',
      'Next.js',
      'React.js',
      'HTML5 Canvas API',
      'WebRTC Live Webcam',
      'Tailwind CSS',
    ],
    telemetryMetrics: [
      { label: 'Operations', value: '13 Image Processing Kernels' },
      { label: 'Blur Filters', value: 'Gaussian · Median · Bilateral' },
      { label: 'Feature Extraction', value: 'Edge Detection & Histogram Eq' },
      { label: 'Capture Mode', value: 'Live Webcam + Snapshot' },
    ],
    githubUrl:
      'https://github.com/zkyy-jaki/Aplikasi-Web-Pengolaha--Citra-Digital',
    statusBadge: '13 KERNELS + LIVE WEBCAM',
    image: '/projects/image-processing.png',
  },
  {
    id: 'moodle-attendance-bot',
    indexCode: 'PRJ-04 // BOT-VPS',
    title: 'Automated Moodle Attendance Telegram Bot',
    categories: ['IoT & Automation'],
    primaryTag: '24/7 Cloud Automation & Encrypted LMS Worker',
    description:
      'Bot Telegram otomatis 24/7 untuk presensi portal LMS Berbasis Moodle yang di-deploy di Ubuntu VPS menggunakan Python, python-telegram-bot, SQLite (WAL mode), enkripsi Fernet, dan systemd.',
    highlights: [
      'Worker asinkron 24/7 yang menangani presensi kuliah otomatis pada portal LMS berbasis Moodle melalui antarmuka Telegram.',
      'Keamanan kredensial pengguna dijamin dengan enkripsi simetris Fernet (AES-128-CBC + HMAC) sebelum disimpan ke database.',
      'Penyimpanan lokal konkurensi tinggi menggunakan SQLite dengan mode Write-Ahead Logging (WAL).',
      'Dijalankan sebagai service daemon systemd di atas Linux Ubuntu VPS untuk menjamin uptime berkelanjutan dan auto-restart.',
    ],
    techStack: [
      'Python',
      'python-telegram-bot',
      'SQLite (WAL Mode)',
      'Fernet Encryption',
      'Systemd Daemon',
      'Linux VPS (Ubuntu)',
    ],
    telemetryMetrics: [
      { label: 'Runtime', value: 'Python + python-telegram-bot' },
      { label: 'Database', value: 'SQLite (WAL Mode)' },
      { label: 'Security', value: 'Fernet Credential Vault' },
      { label: 'Host', value: 'Ubuntu VPS (24/7 Systemd)' },
    ],
    statusBadge: '24/7 UBUNTU VPS DAEMON',
    image: '/projects/moodle-bot.png',
  },
  {
    id: 'bank-marketing-crisp-dm',
    indexCode: 'PRJ-05 // DATA-ML',
    title: 'Bank Marketing Predictive Analysis (CRISP-DM)',
    categories: ['Data & ML'],
    primaryTag: 'Data Science & Predictive Machine Learning',
    description:
      'Proyek analisis data dan pemodelan machine learning menggunakan metodologi CRISP-DM pada dataset Bank Marketing untuk memprediksi langganan deposito berjangka nasabah.',
    highlights: [
      'Implementasi terstruktur mengikuti 6 tahapan CRISP-DM: Business Understanding, Data Understanding, Data Preparation, Modeling, Evaluation, dan Deployment.',
      'Pembersihan data, penanganan ketidakseimbangan kelas, encoding fitur kategorikal, dan analisis korelasi atribut kampanye perbankan.',
      'Pelatihan dan komparasi model klasifikasi Scikit-Learn untuk memprediksi probabilitas nasabah berlangganan deposito berjangka (term deposit).',
      'Evaluasi komprehensif berbasis metrik Precision, Recall, F1-Score, dan Confusion Matrix untuk rekomendasi strategi pemasaran bank.',
    ],
    techStack: [
      'Python',
      'Pandas',
      'Scikit-Learn',
      'CRISP-DM Methodology',
      'Predictive Modeling',
      'Data Visualization',
    ],
    telemetryMetrics: [
      { label: 'Methodology', value: 'CRISP-DM (6 Lifecycle Phases)' },
      { label: 'Dataset', value: 'Bank Marketing Campaign' },
      { label: 'Core Stack', value: 'Python · Pandas · Scikit-Learn' },
      { label: 'Target Output', value: 'Term Deposit Subscription' },
    ],
    statusBadge: 'CRISP-DM // SCIKIT-LEARN',
    image: '/projects/bank-marketing.png',
  },
];
