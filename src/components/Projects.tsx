import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getPortfolioData } from '../data/portfolio';
import { UI_TRANSLATIONS } from '../data/translations';
import type { ProjectCategory, ProjectItem } from '../types/portfolio';
import { ProjectSpecModal } from './ProjectSpecModal';
import { ProjectTelemetryPreview } from './ProjectTelemetryPreview';

const FILTER_TABS: ProjectCategory[] = [
  'All',
  'Web & Security',
  'IoT & Automation',
  'Data & ML',
];

interface ProjectsProps {
  activeCategory: ProjectCategory;
  onCategoryChange: (category: ProjectCategory) => void;
}

export function Projects({ activeCategory, onCategoryChange }: ProjectsProps) {
  const { locale } = useLanguage();
  const { ownerProfile, projects } = getPortfolioData(locale);
  const t = UI_TRANSLATIONS[locale].projects;

  const [selectedProjectId, setSelectedProjectId] = useState<
    ProjectItem['id'] | null
  >(null);

  const selectedProject =
    projects.find((project) => project.id === selectedProjectId) ?? null;

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) =>
          project.categories.includes(activeCategory)
        );

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-line/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-volt tracking-wider block">
              {t.archivePrefix} ({filteredProjects.length} {t.ofWord}{' '}
              {projects.length} {t.systemsWord})
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              {t.heading}
            </h2>
          </div>

          <div
            role="tablist"
            aria-label={t.filterAria}
            className="flex flex-wrap items-center gap-2"
          >
            {FILTER_TABS.map((tab) => {
              const isActive = activeCategory === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => onCategoryChange(tab)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm transition-all focus:outline-none focus:ring-2 focus:ring-volt ${
                    isActive
                      ? 'bg-volt text-ink font-semibold shadow-volt-glow-sm'
                      : 'bg-surface text-white border border-line hover:border-volt/60'
                  }`}
                >
                  {t.categoryLabels[tab]}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-14">
          {filteredProjects.map((project) => {
            const hasExternalLinks = Boolean(
              project.liveUrl || project.githubUrl
            );

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl bg-surface/45 border border-line p-5 sm:p-7 hover:border-line/90 transition-colors"
              >
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs font-semibold text-volt">
                      {project.primaryTag}
                    </span>
                    <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-canvas border border-line text-muted">
                      {project.statusBadge}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold text-white leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm md:text-base text-muted leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {project.telemetryMetrics.slice(0, 2).map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-lg bg-canvas border border-line px-3 py-2"
                      >
                        <span className="font-mono text-[10px] text-muted block">
                          {metric.label}
                        </span>
                        <span className="font-mono text-xs text-white font-medium">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded-full bg-surface border border-line text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-volt text-ink font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-md hover:opacity-90 transition-opacity shadow-volt-glow-sm"
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
                        className="inline-flex items-center gap-2 bg-surface text-white border border-line hover:border-volt font-medium text-xs sm:text-sm px-4 py-2.5 rounded-md transition-colors"
                      >
                        <Github className="w-4 h-4 text-volt" />
                        <span>{t.githubRepo}</span>
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={() => setSelectedProjectId(project.id)}
                      className={`inline-flex items-center gap-2 font-medium text-xs sm:text-sm px-4 py-2.5 rounded-md transition-colors ${
                        hasExternalLinks
                          ? 'bg-canvas text-muted hover:text-white border border-line hover:border-volt'
                          : 'bg-volt text-ink font-semibold hover:opacity-90'
                      }`}
                    >
                      <Layers className="w-4 h-4" />
                      <span>{t.architectureSpec}</span>
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <ProjectTelemetryPreview
                    project={project}
                    onInspect={(item) => setSelectedProjectId(item.id)}
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="rounded-xl bg-surface border border-line p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-muted">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-volt shrink-0" />
            <span>
              {t.footerSummaryPrefix} {projects.length} {t.footerSummarySuffix}
            </span>
          </div>
          <a
            href={ownerProfile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-volt hover:underline shrink-0"
          >
            {t.viewAllRepos}
          </a>
        </div>
      </div>

      <ProjectSpecModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
      />
    </section>
  );
}
