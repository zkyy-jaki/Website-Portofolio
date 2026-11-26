import { useState } from 'react';
import { Activity, Download, Menu, Terminal, X } from 'lucide-react';
import { OWNER_PROFILE } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';

const NAV_LINKS = [
  { id: 'home', label: 'Home', href: '#home', code: '01' },
  { id: 'services', label: 'Services', href: '#services', code: '02' },
  { id: 'projects', label: 'Projects', href: '#projects', code: '03' },
  { id: 'contact', label: 'Contact', href: '#contact', code: '04' },
] as const;

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

export function Navbar() {
  const { activeSection, setActiveSection, isScrolled } =
    useActiveSection(SECTION_IDS);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 backdrop-blur-md border-b border-line ${
        isScrolled ? 'bg-canvas/92 shadow-lg shadow-black/40' : 'bg-canvas/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a
            href="#home"
            onClick={() => handleNavClick('home')}
            className="group flex items-center gap-2.5 text-white font-bold text-xl tracking-tight focus:outline-none focus:ring-2 focus:ring-volt rounded-md px-1"
            aria-label={`${OWNER_PROFILE.brand} Home`}
          >
            <span className="w-8 h-8 rounded-md bg-surface border border-line group-hover:border-volt flex items-center justify-center transition-colors">
              <Terminal className="w-4 h-4 text-volt" />
            </span>
            <span>{OWNER_PROFILE.brand}</span>
          </a>

          <div className="hidden xl:flex items-center gap-2 pl-3 border-l border-line text-xs font-mono text-muted">
            <span>UPNVY // INFORMATICS</span>
          </div>
        </div>

        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-1 bg-surface border border-line rounded-lg p-1"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-volt text-ink font-semibold shadow-volt-glow-sm'
                    : 'text-muted hover:text-white hover:bg-elevated'
                }`}
              >
                <span
                  className={`font-mono text-[11px] ${
                    isActive ? 'text-ink/80' : 'text-volt/70'
                  }`}
                >
                  {link.code}.
                </span>
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center gap-2 bg-volt text-ink font-semibold text-sm rounded-md px-4 py-2.5 hover:opacity-90 transition-all shadow-volt-glow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-canvas focus:ring-volt"
          >
            <Download className="w-4 h-4 text-ink" />
            <span>Download CV</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center p-2.5 rounded-md bg-surface border border-line text-white hover:border-volt focus:outline-none focus:ring-2 focus:ring-volt"
          aria-label={
            mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-volt" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-line px-4 pt-3 pb-5 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-muted px-2 py-1.5 rounded bg-canvas border border-line">
            <Activity className="w-3.5 h-3.5 text-volt" />
            <span>{OWNER_PROFILE.statusText}</span>
          </div>
          <nav
            aria-label="Mobile Navigation"
            className="flex flex-col space-y-1.5"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2.5 rounded-md text-sm font-medium flex items-center justify-between ${
                    isActive
                      ? 'bg-volt text-ink font-semibold'
                      : 'text-muted hover:text-white hover:bg-canvas'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs">{link.code}</span>
                </a>
              );
            })}
          </nav>
          <a
            href="#contact"
            onClick={() => handleNavClick('contact')}
            className="w-full inline-flex items-center justify-center gap-2 bg-volt text-ink font-semibold text-sm rounded-md px-4 py-3 hover:opacity-90 transition-opacity"
          >
            <Download className="w-4 h-4 text-ink" />
            <span>Download CV</span>
          </a>
        </div>
      )}
    </header>
  );
}
