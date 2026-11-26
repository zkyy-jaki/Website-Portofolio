import { MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { UI_TRANSLATIONS } from '../../data/translations';

const STACK_METRICS = [
  { label: 'Responsive', value: '100%', tone: 'text-emerald-400' },
  { label: 'Next.js', value: 'v15 App', tone: 'text-volt' },
  { label: 'Icons', value: 'Lucide', tone: 'text-white' },
] as const;

export function SateSoloPreview() {
  const { locale } = useLanguage();
  const t = UI_TRANSLATIONS[locale].sateSoloPreview;

  return (
    <div className="h-full flex flex-col justify-between p-4 sm:p-5 bg-telemetry-grid">
      <div className="flex items-center justify-between border-b border-line pb-2.5">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-volt/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-xs text-white font-semibold">
            NEXT.JS 15 // SATE SOLO LANDING PAGE
          </span>
        </div>
        <span className="font-mono text-[10px] text-volt bg-canvas px-2 py-0.5 rounded border border-line">
          TS + FRAMER MOTION
        </span>
      </div>

      <div className="my-3 rounded-xl bg-canvas border border-line p-3.5 grid grid-cols-12 gap-3 items-center">
        <div className="col-span-7 space-y-1.5">
          <span className="inline-block px-2 py-0.5 rounded bg-volt/15 text-volt font-mono text-[9px]">
            {t.heritageBadge}
          </span>
          <p className="text-sm sm:text-base font-bold text-white leading-snug">
            {t.headline}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-emerald-500 text-ink font-semibold text-[10px]">
              <MessageCircle className="w-3 h-3" />
              {t.orderCta}
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-surface border border-line text-white text-[10px]">
              <MapPin className="w-3 h-3 text-volt" />
              {t.mapsOutlet}
            </span>
          </div>
        </div>
        <div className="col-span-5 rounded-lg bg-surface border border-line p-2.5 space-y-1.5 font-mono text-[10px]">
          {STACK_METRICS.map((metric) => (
            <div key={metric.label} className="text-muted flex justify-between">
              <span>{metric.label}</span>
              <span className={metric.tone}>{metric.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono text-muted pt-1 border-t border-line">
        <span>STACK: Next.js 15 · React · TypeScript · Tailwind</span>
        <span className="text-volt">{t.conversionReady}</span>
      </div>
    </div>
  );
}
