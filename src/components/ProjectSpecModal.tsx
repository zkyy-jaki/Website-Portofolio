import { useEffect } from 'react';
import { CheckCircle2, ExternalLink, Github, Terminal, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';
import type { ProjectItem } from '../types/portfolio';

interface ProjectSpecModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectSpecModal({ project, onClose }: ProjectSpecModalProps) {
  const { locale } = useLanguage();
  const t = UI_TRANSLATIONS[locale].modal;

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-surface border border-volt/60 shadow-2xl overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 bg-canvas border-b border-line flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-xs text-volt">
            <Terminal className="w-4 h-4" />
            <span>
              {project.indexCode} {t.headerSuffix}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.closeAria}
            className="p-1.5 rounded-lg bg-surface border border-line hover:border-volt text-muted hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          <div>
            <span className="font-mono text-xs text-volt">
              {project.primaryTag}
            </span>
            <h3
              id="modal-project-title"
              className="text-2xl font-bold text-white mt-1"
            >
              {project.title}
            </h3>
            <p className="text-sm text-muted mt-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {project.telemetryMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg bg-canvas border border-line p-3"
              >
                <span className="font-mono text-[10px] text-muted uppercase block">
                  {metric.label}
                </span>
                <span className="font-mono text-xs font-semibold text-white mt-1 block">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-2.5">
            <h4 className="font-mono text-xs text-volt uppercase tracking-wider">
              {t.highlightsHeading}
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-muted"
                >
                  <CheckCircle2 className="w-4 h-4 text-volt shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-mono text-xs text-muted uppercase tracking-wider">
              {t.verifiedStackHeading}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded-full bg-canvas border border-line text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 py-4 bg-canvas border-t border-line flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-volt text-ink font-semibold text-xs sm:text-sm px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
              >
                <span>{project.liveLabel ?? t.liveDemoFallback}</span>
                <ExternalLink className="w-4 h-4 text-ink" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-surface text-white border border-line hover:border-volt font-medium text-xs sm:text-sm px-4 py-2 rounded-md transition-colors"
              >
                <Github className="w-4 h-4 text-volt" />
                <span>{t.githubRepo}</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-xs font-mono text-muted hover:text-white px-3 py-1.5"
          >
            {t.escToClose}
          </button>
        </div>
      </div>
    </div>
  );
}
