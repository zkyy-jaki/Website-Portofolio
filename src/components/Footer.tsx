import { OWNER_PROFILE } from '../data/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="text-xs sm:text-sm text-muted">
          © 2026{' '}
          <span className="text-white font-medium">{OWNER_PROFILE.name}</span>.
          Built with React, TypeScript &amp; Tailwind CSS.
        </p>
        <p className="font-mono text-xs text-muted">
          UPN &quot;Veteran&quot; Yogyakarta · S1 Informatika
        </p>
      </div>
    </footer>
  );
}
