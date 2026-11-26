import type { KeyboardEvent } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Database, Layers, Radio } from 'lucide-react';
import {
  OWNER_PROFILE,
  PROJECTS,
  SERVICE_ITEMS,
  TECH_STACK_CATEGORIES,
} from '../data/portfolio';
import type { ProjectCategory, TechStackCategory } from '../types/portfolio';
import { ServiceThumbnail } from './ServiceThumbnail';

interface ServicesToolsProps {
  onSelectCategory?: (category: ProjectCategory) => void;
}

const CATEGORY_ICONS: Record<TechStackCategory['id'], JSX.Element> = {
  frontend: <Layers className="w-4 h-4 text-volt" />,
  backend: <Database className="w-4 h-4 text-emerald-400" />,
  'data-iot': <Radio className="w-4 h-4 text-sky-400" />,
};

export function ServicesTools({ onSelectCategory }: ServicesToolsProps) {
  const handleSelectService = (category: ProjectCategory) => {
    onSelectCategory?.(category);
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCardKeyDown = (
    event: KeyboardEvent<HTMLDivElement>,
    category: ProjectCategory
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleSelectService(category);
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 border-b border-line/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs text-volt tracking-wider">
                // CORE CAPABILITIES
              </span>
              <span className="font-mono text-xs text-muted">
                {PROJECTS.length} VERIFIED BUILDS
              </span>
            </div>

            {SERVICE_ITEMS.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => handleSelectService(service.filterTarget)}
                onKeyDown={(e) => handleCardKeyDown(e, service.filterTarget)}
                role="button"
                tabIndex={0}
                aria-label={`Filter projects by ${service.title}`}
                className="group cursor-pointer rounded-xl bg-surface border border-line hover:border-volt p-4 transition-all flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-lg"
              >
                <ServiceThumbnail serviceId={service.id} />

                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-volt">
                      {service.code}
                    </span>
                    <span className="font-mono text-[11px] text-muted group-hover:text-white transition-colors">
                      {service.projectsCompleted}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-volt transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted leading-relaxed">
                    {service.summary}
                  </p>
                  <p className="pt-1 font-mono text-[11px] text-white/80">
                    {service.metricsLabel}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                Service
              </h2>
              <p className="text-sm md:text-base text-muted leading-relaxed">
                {OWNER_PROFILE.serviceOverview}
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  Tools &amp; Tech Stack
                </h2>
                <span className="font-mono text-xs text-volt bg-surface border border-line px-2.5 py-1 rounded">
                  {TECH_STACK_CATEGORIES.length} DOMAINS
                </span>
              </div>

              <div className="space-y-4">
                {TECH_STACK_CATEGORIES.map((category) => (
                  <div
                    key={category.id}
                    className="rounded-xl bg-surface border border-line p-4 space-y-3"
                  >
                    <div className="flex items-center justify-between border-b border-line pb-2.5">
                      <div className="flex items-center gap-2">
                        {CATEGORY_ICONS[category.id]}
                        <h3 className="text-sm md:text-base font-semibold text-white">
                          {category.title}
                        </h3>
                      </div>
                      <span className="font-mono text-[11px] text-muted">
                        {category.code}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.items.map((tool) => (
                        <div
                          key={tool.name}
                          title={`${tool.name} — ${tool.role}`}
                          className="inline-flex items-center gap-2 bg-canvas border border-line hover:border-volt px-3 py-2 rounded-lg transition-all"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-volt shrink-0" />
                          <span className="text-xs md:text-sm font-medium text-white">
                            {tool.name}
                          </span>
                          <span className="font-mono text-[10px] text-muted bg-surface px-1.5 py-0.5 rounded">
                            {tool.tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
