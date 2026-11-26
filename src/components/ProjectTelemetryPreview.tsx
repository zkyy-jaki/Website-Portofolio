import { useState } from 'react';
import { ExternalLink, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';
import type { ProjectItem } from '../types/portfolio';
import { PROJECT_PREVIEWS } from './previews';

interface ProjectTelemetryPreviewProps {
  project: ProjectItem;
  onInspect: (project: ProjectItem) => void;
}

export function ProjectTelemetryPreview({
  project,
  onInspect,
}: ProjectTelemetryPreviewProps) {
  const { locale } = useLanguage();
  const t = UI_TRANSLATIONS[locale].projects;
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const PreviewComponent = PROJECT_PREVIEWS[project.id];

  return (
    <div className="group relative aspect-[16/10] w-full rounded-xl bg-surface border border-line hover:border-volt overflow-hidden shadow-xl transition-all duration-300">
      {!imageError && (
        <img
          src={project.image}
          alt={project.title}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] ${
            imageLoaded ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
          }`}
        />
      )}

      <div className="relative z-0 w-full h-full transition-transform duration-500 group-hover:scale-[1.01]">
        <PreviewComponent />
      </div>

      <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onInspect(project)}
          aria-label={`${t.inspectAriaPrefix} ${project.title}`}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-canvas/90 hover:bg-volt text-white hover:text-ink border border-line hover:border-volt font-mono text-[11px] font-medium transition-all shadow-lg"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>{t.inspectSpec}</span>
        </button>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.openLiveAriaPrefix} ${project.title}`}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-volt text-ink font-mono text-[11px] font-semibold hover:opacity-90 transition-opacity shadow-lg"
          >
            <span>{project.liveUrl.replace('https://', '')}</span>
            <ExternalLink className="w-3 h-3 text-ink" />
          </a>
        )}
      </div>
    </div>
  );
}
