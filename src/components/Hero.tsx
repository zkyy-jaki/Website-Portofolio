import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  TerminalSquare,
} from 'lucide-react';
import { OWNER_PROFILE } from '../data/portfolio';
import { StackedPhotoCard } from './StackedPhotoCard';

const SOCIAL_LINKS = [
  {
    href: OWNER_PROFILE.githubUrl,
    label: 'GitHub Profile Zaky Mubarok Aljauhari',
    Icon: Github,
    external: true,
  },
  {
    href: OWNER_PROFILE.linkedinUrl,
    label: 'LinkedIn Profile Zaky Mubarok Aljauhari',
    Icon: Linkedin,
    external: true,
  },
  {
    href: `mailto:${OWNER_PROFILE.email}`,
    label: 'Email Zaky Mubarok Aljauhari',
    Icon: Mail,
    external: false,
  },
] as const;

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden border-b border-line/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-line text-xs font-mono text-muted">
              <GraduationCap className="w-4 h-4 text-volt" />
              <span>{OWNER_PROFILE.affiliation}</span>
            </div>

            <div className="space-y-2">
              <p className="text-xl md:text-2xl font-medium text-white">
                Hello there,
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
                My name is{' '}
                <span className="text-volt underline decoration-volt decoration-2 underline-offset-8">
                  {OWNER_PROFILE.name}.
                </span>
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-volt text-ink font-mono text-xs font-semibold">
                <TerminalSquare className="w-3.5 h-3.5 text-ink" />
                {OWNER_PROFILE.role}
              </span>
            </div>

            <p className="text-sm md:text-base text-muted leading-relaxed max-w-2xl">
              {OWNER_PROFILE.bio}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-volt text-ink font-semibold text-sm px-5 py-3 rounded-md hover:opacity-90 transition-opacity shadow-volt-glow-sm"
              >
                <span>Explore Featured Projects</span>
                <ArrowUpRight className="w-4 h-4 text-ink" />
              </a>
              <a
                href={OWNER_PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-surface text-white border border-line hover:border-volt font-medium text-sm px-5 py-3 rounded-md transition-colors"
              >
                <Github className="w-4 h-4 text-volt" />
                <span>github.com/zkyy-jaki</span>
              </a>
            </div>

            <div className="pt-4 space-y-3">
              <p className="text-xs md:text-sm text-muted font-medium">
                Let&apos;s connect with me at:
              </p>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map(({ href, label, Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className="w-10 h-10 rounded-full bg-surface border border-line hover:border-volt hover:text-volt text-white flex items-center justify-center transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
                <span className="hidden sm:inline-block pl-2 font-mono text-xs text-muted">
                  {OWNER_PROFILE.email}
                </span>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <StackedPhotoCard />
          </div>
        </div>
      </div>
    </section>
  );
}
