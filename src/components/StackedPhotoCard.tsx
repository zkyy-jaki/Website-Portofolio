import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  Cpu,
  Database,
  Heart,
  MessageSquare,
  Radio,
  Send,
  ShieldCheck,
  Terminal,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getPortfolioData } from '../data/portfolio';
import { UI_TRANSLATIONS } from '../data/translations';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';

const CAPABILITY_CHIPS = [
  { label: 'IoT & VPS', Icon: Cpu, iconClass: 'text-volt' },
  { label: 'Full-Stack', Icon: ShieldCheck, iconClass: 'text-emerald-400' },
  { label: 'CRISP-DM', Icon: Database, iconClass: 'text-sky-400' },
] as const;

export function StackedPhotoCard() {
  const { locale } = useLanguage();
  const { ownerProfile, projects } = getPortfolioData(locale);
  const t = UI_TRANSLATIONS[locale].stackedCard;
  const [pinged, setPinged] = useState(false);
  const [pingCount, setPingCount] = useState(128);
  const { copied, copy } = useCopyToClipboard();

  const handleTogglePing = () => {
    setPinged((prev) => {
      const next = !prev;
      setPingCount((count) => (next ? count + 1 : count - 1));
      return next;
    });
  };

  return (
    <div className="relative w-full max-w-[360px] mx-auto py-6 select-none">
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-volt/15 via-red-500/10 to-emerald-500/10 blur-2xl pointer-events-none"
      />

      <motion.div
        initial={{ rotate: -8, opacity: 0, scale: 0.94 }}
        animate={{ rotate: -6, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        aria-hidden="true"
        className="absolute inset-0 m-auto w-[92%] h-[90%] rounded-2xl bg-surface border-2 border-white/80 shadow-xl pointer-events-none"
      >
        <div className="p-3 flex items-center justify-between border-b border-line text-[10px] font-mono text-muted">
          <span>NODE // ESP32-MQTT</span>
          <span className="text-volt">ndgl.cloud</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ rotate: 8, opacity: 0, scale: 0.94 }}
        animate={{ rotate: 6, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.18 }}
        aria-hidden="true"
        className="absolute inset-0 m-auto w-[92%] h-[90%] rounded-2xl bg-elevated border-2 border-volt/70 shadow-xl pointer-events-none"
      >
        <div className="p-3 flex items-center justify-between border-b border-line text-[10px] font-mono text-muted">
          <span>API // EXPRESS-PRISMA</span>
          <span className="text-emerald-400">CRISP-DM</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.45 }}
        className="relative z-10 rounded-2xl bg-surface border-2 border-white/90 shadow-2xl overflow-hidden"
      >
        <div className="px-4 py-3 bg-canvas/90 border-b border-line flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-volt text-ink flex items-center justify-center">
              <Terminal className="w-3.5 h-3.5 text-ink" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white leading-none">
                zkyy-jaki
              </p>
              <p className="text-[10px] font-mono text-muted mt-0.5">
                UPN &quot;Veteran&quot; Yogyakarta
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
            <Radio className="w-3 h-3 animate-pulse" />
            ONLINE
          </span>
        </div>

        <div className="relative aspect-[4/4] w-full bg-canvas overflow-hidden flex flex-col justify-between p-4 bg-telemetry-grid">
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono">
            <span className="px-2 py-1 rounded bg-canvas/85 border border-line text-muted">
              {projects.length} {t.featuredSys}
            </span>
            <span className="px-2 py-1 rounded bg-canvas/85 border border-line text-volt">
              ESP32 // NEXT.JS
            </span>
          </div>

          <div className="relative z-10 my-auto rounded-xl bg-surface/95 border border-line shadow-volt-glow-sm overflow-hidden">
            <div className="px-3 py-2 bg-canvas border-b border-line flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-volt/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-mono text-[10px] text-muted">
                zaky@upnvy:~
              </span>
            </div>

            <div className="p-3.5 font-mono text-[11px] space-y-2 text-left leading-relaxed">
              <div>
                <span className="text-emerald-400">$ whoami</span>
                <p className="text-white font-semibold mt-0.5">
                  {ownerProfile.name}
                </p>
              </div>
              <div className="space-y-0.5 text-[10px]">
                <div>
                  <span className="text-muted">role: </span>
                  <span className="text-volt">Full-Stack · Data · IoT</span>
                </div>
                <div>
                  <span className="text-muted">degree: </span>
                  <span className="text-white">{t.degree}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-muted">status: </span>
                  <span className="text-emerald-400">OPEN TO WORK</span>
                  <span
                    aria-hidden="true"
                    className="inline-block w-1.5 h-3.5 bg-volt animate-pulse ml-0.5"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-3 gap-1.5 pt-2">
            {CAPABILITY_CHIPS.map(({ label, Icon, iconClass }) => (
              <div
                key={label}
                className="bg-canvas/90 backdrop-blur-sm border border-line rounded-lg p-2 flex flex-col items-center text-center"
              >
                <Icon className={`w-3.5 h-3.5 ${iconClass} mb-1`} />
                <span className="text-[9px] font-mono text-white">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="px-4 py-3 bg-surface border-t border-line">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleTogglePing}
                aria-label={pinged ? t.removeEndorseAria : t.endorseAria}
                className={`inline-flex items-center gap-1.5 text-xs font-mono transition-colors focus:outline-none ${
                  pinged ? 'text-red-500' : 'text-muted hover:text-white'
                }`}
              >
                <Heart
                  className={`w-5 h-5 ${
                    pinged ? 'fill-red-500 text-red-500' : ''
                  }`}
                />
                <span>{pingCount}</span>
              </button>

              <a
                href="#contact"
                aria-label={t.jumpContactAria}
                className="inline-flex items-center gap-1 text-muted hover:text-white transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={() => copy(ownerProfile.githubUrl)}
                aria-label={t.copyGithubAria}
                className="inline-flex items-center gap-1 text-muted hover:text-volt transition-colors"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-emerald-400" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>

            <span className="text-[11px] font-mono text-muted">
              {copied ? t.githubCopied : t.callMe}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
