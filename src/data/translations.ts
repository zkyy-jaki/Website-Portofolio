import type { Locale } from '../context/LanguageContext';
import type { ProjectCategory } from '../types/portfolio';

export interface UiTranslations {
  nav: {
    links: {
      home: string;
      services: string;
      projects: string;
      contact: string;
    };
    downloadCv: string;
    primaryNavAria: string;
    mobileNavAria: string;
    openMenuAria: string;
    closeMenuAria: string;
    switcherAria: string;
  };
  hero: {
    greeting: string;
    introPrefix: string;
    exploreProjects: string;
    connectPrompt: string;
    githubLabelPrefix: string;
    linkedinLabelPrefix: string;
    emailLabelPrefix: string;
  };
  stackedCard: {
    featuredSys: string;
    degree: string;
    callMe: string;
    githubCopied: string;
    endorseAria: string;
    removeEndorseAria: string;
    jumpContactAria: string;
    copyGithubAria: string;
  };
  services: {
    coreCapabilities: string;
    verifiedBuilds: string;
    serviceHeading: string;
    toolsHeading: string;
    domainsLabel: string;
    filterByAriaPrefix: string;
  };
  projects: {
    archivePrefix: string;
    ofWord: string;
    systemsWord: string;
    heading: string;
    filterAria: string;
    categoryLabels: Record<ProjectCategory, string>;
    liveDemoFallback: string;
    githubRepo: string;
    architectureSpec: string;
    inspectSpec: string;
    inspectAriaPrefix: string;
    openLiveAriaPrefix: string;
    footerSummaryPrefix: string;
    footerSummarySuffix: string;
    viewAllRepos: string;
  };
  modal: {
    headerSuffix: string;
    closeAria: string;
    highlightsHeading: string;
    verifiedStackHeading: string;
    liveDemoFallback: string;
    githubRepo: string;
    escToClose: string;
  };
  contact: {
    terminalLabel: string;
    heading: string;
    subtitle: string;
    copyEmailAriaPrefix: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    submittingButton: string;
    successMessage: string;
    openMail: string;
    errors: {
      nameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      messageRequired: string;
      messageMinLength: string;
    };
  };
  footer: {
    builtWith: string;
    affiliationShort: string;
  };
  sateSoloPreview: {
    heritageBadge: string;
    headline: string;
    orderCta: string;
    mapsOutlet: string;
    conversionReady: string;
  };
}

export const UI_TRANSLATIONS: Record<Locale, UiTranslations> = {
  id: {
    nav: {
      links: {
        home: 'Beranda',
        services: 'Layanan',
        projects: 'Proyek',
        contact: 'Kontak',
      },
      downloadCv: 'Unduh CV',
      primaryNavAria: 'Navigasi Utama',
      mobileNavAria: 'Navigasi Mobile',
      openMenuAria: 'Buka menu navigasi',
      closeMenuAria: 'Tutup menu navigasi',
      switcherAria: 'Pilih bahasa',
    },
    hero: {
      greeting: 'Halo,',
      introPrefix: 'Saya',
      exploreProjects: 'Jelajahi Proyek Unggulan',
      connectPrompt: 'Mari terhubung dengan saya di:',
      githubLabelPrefix: 'Profil GitHub',
      linkedinLabelPrefix: 'Profil LinkedIn',
      emailLabelPrefix: 'Email',
    },
    stackedCard: {
      featuredSys: 'SISTEM UNGGULAN',
      degree: 'S1 Informatika UPNVY',
      callMe: 'Panggil saya Zaky!',
      githubCopied: 'URL GitHub Disalin!',
      endorseAria: 'Berikan dukungan profil telemetri',
      removeEndorseAria: 'Hapus dukungan profil telemetri',
      jumpContactAria: 'Buka formulir kontak',
      copyGithubAria: 'Salin tautan profil GitHub',
    },
    services: {
      coreCapabilities: '// KAPABILITAS UTAMA',
      verifiedBuilds: 'PROYEK TERVERIFIKASI',
      serviceHeading: 'Layanan',
      toolsHeading: 'Alat & Tech Stack',
      domainsLabel: 'DOMAIN',
      filterByAriaPrefix: 'Filter proyek berdasarkan',
    },
    projects: {
      archivePrefix: '// ARSIP TELEMETRI',
      ofWord: 'DARI',
      systemsWord: 'SISTEM',
      heading: 'Proyek',
      filterAria: 'Filter proyek berdasarkan kategori keahlian',
      categoryLabels: {
        All: 'Semua',
        'Web & Security': 'Web & Keamanan',
        'IoT & Automation': 'IoT & Otomasi',
        'Data & ML': 'Data & ML',
      },
      liveDemoFallback: 'Demo Langsung',
      githubRepo: 'Repositori GitHub',
      architectureSpec: 'Spesifikasi Arsitektur',
      inspectSpec: 'Lihat Spesifikasi',
      inspectAriaPrefix: 'Lihat spesifikasi arsitektur teknis untuk',
      openLiveAriaPrefix: 'Buka aplikasi langsung untuk',
      footerSummaryPrefix: 'Seluruh',
      footerSummarySuffix:
        'sistem di atas merupakan proyek nyata yang telah teruji di bidang IoT, Full-Stack Web, Computer Vision, Cloud Bot & CRISP-DM.',
      viewAllRepos: 'Lihat Semua Repositori →',
    },
    modal: {
      headerSuffix: '// SPESIFIKASI ARSITEKTUR',
      closeAria: 'Tutup modal spesifikasi arsitektur',
      highlightsHeading: '// Arsitektur Teknis & Poin Utama',
      verifiedStackHeading: '// Stack Terverifikasi',
      liveDemoFallback: 'Demo Langsung',
      githubRepo: 'Repositori GitHub',
      escToClose: '[ESC untuk tutup]',
    },
    contact: {
      terminalLabel: '// TERMINAL KOMUNIKASI LANGSUNG',
      heading: 'Hubungi Saya',
      subtitle:
        'Tertarik berkolaborasi dalam proyek aplikasi Full-Stack Web, sistem telemetri IoT, atau Analisis Data? Kirim pesan di bawah ini atau hubungi langsung melalui email.',
      copyEmailAriaPrefix: 'Salin alamat email',
      nameLabel: 'Nama',
      namePlaceholder: 'Nama Anda',
      emailLabel: 'Email',
      emailPlaceholder: 'alamat@email.com',
      messageLabel: 'Pesan',
      messagePlaceholder: 'Tulis pesan Anda di sini...',
      sendButton: 'Kirim Pesan',
      submittingButton: 'Mengirim...',
      successMessage:
        'Pesan siap! Anda juga dapat langsung membuka aplikasi email:',
      openMail: 'Buka Email',
      errors: {
        nameRequired: 'Nama wajib diisi.',
        emailRequired: 'Email wajib diisi.',
        emailInvalid: 'Masukkan alamat email yang valid.',
        messageRequired: 'Pesan wajib diisi.',
        messageMinLength: 'Pesan minimal harus 10 karakter.',
      },
    },
    footer: {
      builtWith: 'Dibangun dengan React, TypeScript & Tailwind CSS.',
      affiliationShort: 'UPN "Veteran" Yogyakarta · S1 Informatika',
    },
    sateSoloPreview: {
      heritageBadge: 'WARISAN KULINER JAWA',
      headline: 'Warung Sate Solo — Kuliner Tradisional & UX Web Modern',
      orderCta: 'Pesan via WhatsApp',
      mapsOutlet: 'Lokasi Google Maps',
      conversionReady: 'SIAP KONVERSI CTA',
    },
  },
  en: {
    nav: {
      links: {
        home: 'Home',
        services: 'Services',
        projects: 'Projects',
        contact: 'Contact',
      },
      downloadCv: 'Download CV',
      primaryNavAria: 'Primary Navigation',
      mobileNavAria: 'Mobile Navigation',
      openMenuAria: 'Open navigation menu',
      closeMenuAria: 'Close navigation menu',
      switcherAria: 'Select language',
    },
    hero: {
      greeting: 'Hello there,',
      introPrefix: 'My name is',
      exploreProjects: 'Explore Featured Projects',
      connectPrompt: "Let's connect with me at:",
      githubLabelPrefix: 'GitHub Profile',
      linkedinLabelPrefix: 'LinkedIn Profile',
      emailLabelPrefix: 'Email',
    },
    stackedCard: {
      featuredSys: 'FEATURED SYS',
      degree: 'Undergraduate Informatics UPNVY',
      callMe: 'You can call me Zaky!',
      githubCopied: 'GitHub URL Copied!',
      endorseAria: 'Endorse telemetry profile',
      removeEndorseAria: 'Remove telemetry endorsement',
      jumpContactAria: 'Jump to contact form',
      copyGithubAria: 'Copy GitHub profile link',
    },
    services: {
      coreCapabilities: '// CORE CAPABILITIES',
      verifiedBuilds: 'VERIFIED BUILDS',
      serviceHeading: 'Service',
      toolsHeading: 'Tools & Tech Stack',
      domainsLabel: 'DOMAINS',
      filterByAriaPrefix: 'Filter projects by',
    },
    projects: {
      archivePrefix: '// TELEMETRY ARCHIVE',
      ofWord: 'OF',
      systemsWord: 'SYSTEMS',
      heading: 'Projects',
      filterAria: 'Filter projects by engineering category',
      categoryLabels: {
        All: 'All',
        'Web & Security': 'Web & Security',
        'IoT & Automation': 'IoT & Automation',
        'Data & ML': 'Data & ML',
      },
      liveDemoFallback: 'Live Demo',
      githubRepo: 'GitHub Repo',
      architectureSpec: 'Architecture Spec',
      inspectSpec: 'Inspect Spec',
      inspectAriaPrefix: 'Inspect technical architecture for',
      openLiveAriaPrefix: 'Open live deployment for',
      footerSummaryPrefix: 'All',
      footerSummarySuffix:
        'systems above represent verified engineering builds across IoT, Full-Stack Web, Computer Vision, Cloud Bots & CRISP-DM.',
      viewAllRepos: 'View All Repositories →',
    },
    modal: {
      headerSuffix: '// ARCHITECTURE SPEC',
      closeAria: 'Close architecture modal',
      highlightsHeading: '// Engineering Architecture & Highlights',
      verifiedStackHeading: '// Verified Stack',
      liveDemoFallback: 'Live Demo',
      githubRepo: 'GitHub Repository',
      escToClose: '[ESC to close]',
    },
    contact: {
      terminalLabel: '// DIRECT COMMUNICATION TERMINAL',
      heading: 'Get in touch',
      subtitle:
        'Interested in collaborating on Full-Stack Web applications, IoT telemetry systems, or Data Analysis projects? Send a message below or reach out directly via email.',
      copyEmailAriaPrefix: 'Copy email address',
      nameLabel: 'Name',
      namePlaceholder: 'Name',
      emailLabel: 'Email',
      emailPlaceholder: 'Email',
      messageLabel: 'Message',
      messagePlaceholder: 'Message',
      sendButton: 'Send Message',
      submittingButton: 'Transmitting...',
      successMessage:
        'Message ready! You can also launch your mail client directly:',
      openMail: 'Open Mail',
      errors: {
        nameRequired: 'Name is required.',
        emailRequired: 'Email is required.',
        emailInvalid: 'Please enter a valid email address.',
        messageRequired: 'Message is required.',
        messageMinLength: 'Message must be at least 10 characters.',
      },
    },
    footer: {
      builtWith: 'Built with React, TypeScript & Tailwind CSS.',
      affiliationShort: 'UPN "Veteran" Yogyakarta · Undergraduate Informatics',
    },
    sateSoloPreview: {
      heritageBadge: 'AUTHENTIC JAVANESE HERITAGE',
      headline: 'Warung Sate Solo — Traditional Culinary & Modern Web UX',
      orderCta: 'Order via WhatsApp CTA',
      mapsOutlet: 'Google Maps Outlet',
      conversionReady: 'CTA CONVERSION READY',
    },
  },
};
