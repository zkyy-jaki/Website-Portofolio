import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Download,
  MapPin,
  ShieldCheck,
  Terminal,
  User,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getPortfolioData } from '../data/portfolio';
import { UI_TRANSLATIONS } from '../data/translations';

export function About() {
  const { locale } = useLanguage();
  const { ownerProfile } = getPortfolioData(locale);
  const t = UI_TRANSLATIONS[locale].about;
  const [photoError, setPhotoError] = useState(false);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 md:py-28 border-b border-line/70 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[360px]">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-volt/15 via-emerald-500/10 to-sky-500/10 blur-2xl pointer-events-none"
              />
              <div className="relative rounded-2xl bg-surface border-2 border-line hover:border-volt/80 transition-colors p-3 shadow-2xl">
                <div className="px-2 pb-2.5 mb-2.5 border-b border-line flex items-center justify-between text-[11px] font-mono">
                  <span className="inline-flex items-center gap-1.5 text-volt">
                    <ShieldCheck className="w-3.5 h-3.5 text-volt" />
                    {t.photoBadge}
                  </span>
                  <span className="text-muted">UPNVY // IF</span>
                </div>

                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-elevated border border-line">
                  {!photoError ? (
                    <img
                      src={ownerProfile.photoUrl}
                      alt={t.photoAlt}
                      onError={() => setPhotoError(true)}
                      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-surface border border-volt/50 flex items-center justify-center">
                        <User className="w-8 h-8 text-volt" />
                      </div>
                      <p className="font-mono text-xs text-muted">
                        {t.photoFallback}
                      </p>
                    </div>
                  )}

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-canvas/95 via-canvas/70 to-transparent p-4 pt-10">
                    <p className="text-sm font-bold text-white leading-tight">
                      {ownerProfile.name}
                    </p>
                    <p className="text-[11px] font-mono text-volt mt-0.5 flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" />
                      <span>{ownerProfile.location}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <span className="font-mono text-xs text-volt tracking-wider">
                {t.sectionLabel}
              </span>
              <h2
                id="about-heading"
                className="text-3xl md:text-4xl font-bold text-white tracking-tight"
              >
                {t.heading}
              </h2>
            </div>

            <div className="space-y-4">
              {ownerProfile.aboutParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm md:text-base text-muted leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="pt-1 space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-volt">
                <Terminal className="w-3.5 h-3.5" />
                <span>{t.highlightsHeading}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ownerProfile.aboutHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl bg-surface border border-line p-4 space-y-1 hover:border-volt/50 transition-colors"
                  >
                    <p className="font-mono text-[11px] text-volt tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-volt text-ink font-semibold text-sm px-5 py-3 rounded-md hover:opacity-90 transition-opacity shadow-volt-glow-sm"
              >
                <span>{t.ctaContact}</span>
                <ArrowUpRight className="w-4 h-4 text-ink" />
              </a>
              <a
                href="/cv.pdf"
                download="CV-Zaky-Mubarok-Aljauhari.pdf"
                className="inline-flex items-center gap-2 bg-surface text-white border border-line hover:border-volt font-medium text-sm px-5 py-3 rounded-md transition-colors"
              >
                <Download className="w-4 h-4 text-volt" />
                <span>{t.ctaCv}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
