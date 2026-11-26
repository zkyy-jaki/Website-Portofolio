import { useLanguage } from '../context/LanguageContext';
import { getPortfolioData } from '../data/portfolio';
import { UI_TRANSLATIONS } from '../data/translations';

export function Footer() {
  const { locale } = useLanguage();
  const { ownerProfile } = getPortfolioData(locale);
  const t = UI_TRANSLATIONS[locale].footer;

  return (
    <footer className="border-t border-line bg-canvas py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="text-xs sm:text-sm text-muted">
          © 2026{' '}
          <span className="text-white font-medium">{ownerProfile.name}</span>.{' '}
          {t.builtWith}
        </p>
        <p className="font-mono text-xs text-muted">{t.affiliationShort}</p>
      </div>
    </footer>
  );
}
