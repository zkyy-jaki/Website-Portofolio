import { beforeEach, describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import { About } from '../components/About';
import { LanguageProvider } from '../context/LanguageContext';
import {
  OWNER_PROFILE,
  PROJECTS,
  SERVICE_ITEMS,
  TECH_STACK_CATEGORIES,
  getPortfolioData,
} from '../data/portfolio';

beforeEach(() => {
  window.localStorage.clear();
  document.documentElement.lang = 'id';
});

describe('Portfolio data integrity', () => {
  it('contains authentic owner profile information for Zaky Mubarok Aljauhari', () => {
    expect(OWNER_PROFILE.name).toBe('Zaky Mubarok Aljauhari');
    expect(OWNER_PROFILE.brand).toBe('ZAKY');
    expect(OWNER_PROFILE.role).toBe(
      'Full-Stack Web Developer, Data Analyst, & IoT Enthusiast'
    );
    expect(OWNER_PROFILE.affiliation).toContain(
      'Universitas Pembangunan Nasional "Veteran" Yogyakarta'
    );
    expect(OWNER_PROFILE.githubUrl).toBe('https://github.com/zkyy-jaki');
    expect(OWNER_PROFILE.linkedinUrl).toContain('zaky-mubarok-aljauhari');
    expect(OWNER_PROFILE.email).toBe('zakymubarok040506@gmail.com');
  });

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

  it('defines the 3 core tech stack categories with all required technologies', () => {
    expect(TECH_STACK_CATEGORIES).toHaveLength(3);

    const frontend = TECH_STACK_CATEGORIES.find((c) => c.id === 'frontend');
    const backend = TECH_STACK_CATEGORIES.find((c) => c.id === 'backend');
    const dataIot = TECH_STACK_CATEGORIES.find((c) => c.id === 'data-iot');

    expect(frontend?.items.map((i) => i.name)).toEqual(
      expect.arrayContaining([
        'Next.js',
        'React.js',
        'TypeScript',
        'Tailwind CSS',
        'Framer Motion',
      ])
    );

    expect(backend?.items.map((i) => i.name)).toEqual(
      expect.arrayContaining([
        'Node.js',
        'Express.js',
        'Laravel',
        'Python',
        'PostgreSQL',
        'MySQL',
        'SQLite',
      ])
    );

    expect(dataIot?.items.map((i) => i.name)).toEqual(
      expect.arrayContaining([
        'Python (Pandas, Scikit-Learn, CRISP-DM)',
        'ESP32',
        'MQTT',
        'Socket.IO',
        'Linux VPS (Ubuntu)',
      ])
    );
  });

  it('defines the 3 service cards aligned with Zaky engineering focus in both ID and EN', () => {
    expect(SERVICE_ITEMS).toHaveLength(3);
    expect(SERVICE_ITEMS.map((s) => s.title)).toEqual([
      'Pengembangan Web Full-Stack',
      'Sistem IoT & Otomasi',
      'Analisis Data & Machine Learning',
    ]);

    const enData = getPortfolioData('en');
    expect(enData.serviceItems.map((s) => s.title)).toEqual([
      'Full-Stack Web Development',
      'IoT & Automation Systems',
      'Data Analysis & Machine Learning',
    ]);
  });

  it('includes all 5 featured projects and excludes trading/EA and cryptography projects', () => {
    expect(PROJECTS).toHaveLength(5);

    const titles = PROJECTS.map((p) => p.title);
    expect(titles).toEqual([
      'Smart Small Rack Warehouse IoT System & Dashboard',
      'Sate Solo Restaurant Landing Page',
      'Digital Image Processing Web App',
      'Automated Moodle Attendance Telegram Bot',
      'Bank Marketing Predictive Analysis (CRISP-DM)',
    ]);

    const smartRack = PROJECTS.find((p) => p.id === 'smart-rack-warehouse');
    expect(smartRack?.liveUrl).toBe('https://ndgl.cloud');
    expect(smartRack?.description).toContain('ESP32');
    expect(smartRack?.description).toContain('MQTT');

    const serialized = JSON.stringify(PROJECTS).toLowerCase();
    expect(serialized).not.toContain('cryptography-integrity-webapp');
    expect(serialized).not.toContain('expert advisor');
    expect(serialized).not.toContain('forex');
    expect(serialized).not.toContain('metatrader');
    expect(serialized).not.toContain('mql4');
    expect(serialized).not.toContain('mql5');
    expect(serialized).not.toContain('lorem ipsum');
  });
});

describe('Portfolio UI interactions', () => {
  it('renders Hero section in Indonesian by default with authentic name, affiliation, and all 5 featured projects', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: /Saya Zaky Mubarok Aljauhari/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Mahasiswa S1 Informatika, Universitas Pembangunan Nasional "Veteran" Yogyakarta/i
      )
    ).toBeInTheDocument();

    for (const project of PROJECTS) {
      expect(
        screen.getByRole('heading', { name: project.title })
      ).toBeInTheDocument();
    }
  });

  it('renders About section with pas foto image, accessible alt text, and fallback on image error', () => {
    render(
      <LanguageProvider>
        <About />
      </LanguageProvider>
    );

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
      screen.getByRole('img', {
        name: /Portrait photo of Zaky Mubarok Aljauhari/i,
      })
    ).toHaveAttribute('src', '/pasfoto.jpeg');
  });

  it('filters projects accurately when switching category tabs', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('tab', { name: 'Data & ML' }));

    expect(
      screen.getByRole('heading', {
        name: 'Bank Marketing Predictive Analysis (CRISP-DM)',
      })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', {
        name: 'Sate Solo Restaurant Landing Page',
      })
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('tab', { name: 'IoT & Otomasi' }));

    expect(
      screen.getByRole('heading', {
        name: 'Smart Small Rack Warehouse IoT System & Dashboard',
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: 'Automated Moodle Attendance Telegram Bot',
      })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', {
        name: 'Bank Marketing Predictive Analysis (CRISP-DM)',
      })
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('tab', { name: 'Semua' }));
    expect(screen.getAllByRole('article')).toHaveLength(5);
  });

  it('opens and closes the Technical Architecture Spec Modal for projects', () => {
    render(<App />);

    const specButtons = screen.getAllByRole('button', {
      name: /Spesifikasi Arsitektur/i,
    });
    expect(specButtons.length).toBeGreaterThanOrEqual(5);

    fireEvent.click(specButtons[0]);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(
      screen.getByText(/Arsitektur Teknis & Poin Utama/i)
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole('button', { name: /Tutup modal spesifikasi arsitektur/i })
    );
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('validates empty and invalid inputs on the Contact form before submitting', () => {
    render(<App />);

    const submitButton = screen.getByRole('button', { name: /Kirim Pesan/i });
    fireEvent.click(submitButton);

    expect(screen.getByText('Nama wajib diisi.')).toBeInTheDocument();
    expect(screen.getByText('Email wajib diisi.')).toBeInTheDocument();
    expect(screen.getByText('Pesan wajib diisi.')).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText('Nama'), {
      target: { value: 'Recruiter' },
    });
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'invalid-email' },
    });
    fireEvent.change(screen.getByLabelText('Pesan'), {
      target: {
        value: 'Halo Zaky, mari diskusikan proyek IoT dan Full-Stack!',
      },
    });

    fireEvent.click(submitButton);
    expect(
      screen.getByText('Masukkan alamat email yang valid.')
    ).toBeInTheDocument();
  });

  it('launches pre-filled mailto link with name, email, and message when submitting valid Contact form', () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText('Nama'), {
      target: { value: 'Budi Recruiter' },
    });
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'budi@company.com' },
    });
    fireEvent.change(screen.getByLabelText('Pesan'), {
      target: {
        value: 'Halo Zaky, kami tertarik mengundang Anda wawancara Full-Stack.',
      },
    });

    fireEvent.click(screen.getByRole('button', { name: /Kirim Pesan/i }));

    const openMailLink = screen.getByRole('link', { name: /Buka Email/i });
    const href = openMailLink.getAttribute('href') ?? '';
    expect(href).toContain('mailto:zakymubarok040506@gmail.com?subject=');
    expect(decodeURIComponent(href)).toContain('Budi Recruiter');
    expect(decodeURIComponent(href)).toContain('budi@company.com');
    expect(decodeURIComponent(href)).toContain(
      'Halo Zaky, kami tertarik mengundang Anda wawancara Full-Stack.'
    );
  });

  it('switches the entire UI consistently between ID and EN using the Navbar language switcher', () => {
    render(<App />);

    expect(document.documentElement.lang).toBe('id');
    expect(screen.getByText('Unduh CV')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'EN' }));

    expect(document.documentElement.lang).toBe('en');
    expect(
      screen.getByRole('heading', { name: /My name is Zaky Mubarok Aljauhari/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Undergraduate Informatics Student, Universitas Pembangunan Nasional "Veteran" Yogyakarta/i
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Download CV')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Send Message/i })
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));
    expect(screen.getByText('Name is required.')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'ID' }));

    expect(document.documentElement.lang).toBe('id');
    expect(
      screen.getByRole('heading', { name: /Saya Zaky Mubarok Aljauhari/i })
    ).toBeInTheDocument();
    expect(screen.getByText('Unduh CV')).toBeInTheDocument();
  });
});
