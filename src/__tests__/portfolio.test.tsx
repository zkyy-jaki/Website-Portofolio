import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import {
  OWNER_PROFILE,
  PROJECTS,
  SERVICE_ITEMS,
  TECH_STACK_CATEGORIES,
} from '../data/portfolio';

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

  it('defines the 3 service cards aligned with Zaky engineering focus', () => {
    expect(SERVICE_ITEMS).toHaveLength(3);
    expect(SERVICE_ITEMS.map((s) => s.title)).toEqual([
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
  it('renders Hero section with authentic name, affiliation, and all 5 featured projects initially', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: /My name is Zaky Mubarok Aljauhari/i })
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

  it('filters projects accurately when switching category tabs (All, Web & Security, IoT & Automation, Data & ML)', () => {
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

    fireEvent.click(screen.getByRole('tab', { name: 'IoT & Automation' }));

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

    fireEvent.click(screen.getByRole('tab', { name: 'All' }));
    expect(screen.getAllByRole('article')).toHaveLength(5);
  });

  it('opens and closes the Technical Architecture Spec Modal for projects', () => {
    render(<App />);

    const specButtons = screen.getAllByRole('button', {
      name: /Architecture Spec/i,
    });
    expect(specButtons.length).toBeGreaterThanOrEqual(5);

    fireEvent.click(specButtons[0]);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(
      screen.getByText(/Engineering Architecture & Highlights/i)
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole('button', { name: /Close architecture modal/i })
    );
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('validates empty and invalid inputs on the Contact form before submitting', () => {
    render(<App />);

    const submitButton = screen.getByRole('button', { name: /Send Message/i });
    fireEvent.click(submitButton);

    expect(screen.getByText('Name is required.')).toBeInTheDocument();
    expect(screen.getByText('Email is required.')).toBeInTheDocument();
    expect(screen.getByText('Message is required.')).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'Recruiter' },
    });
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'invalid-email' },
    });
    fireEvent.change(screen.getByLabelText('Message'), {
      target: {
        value: 'Hello Zaky, let us discuss an IoT and Full-Stack role!',
      },
    });

    fireEvent.click(submitButton);
    expect(
      screen.getByText('Please enter a valid email address.')
    ).toBeInTheDocument();
  });
});
