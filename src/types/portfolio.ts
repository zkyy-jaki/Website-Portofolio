export type ProjectId =
  | 'smart-rack-warehouse'
  | 'sate-solo-landing-page'
  | 'digital-image-processing'
  | 'moodle-attendance-bot'
  | 'bank-marketing-crisp-dm';

export type ProjectCategory =
  | 'All'
  | 'Web & Security'
  | 'IoT & Automation'
  | 'Data & ML';

export type ServiceId = 'fullstack-web' | 'iot-automation' | 'data-ml';

export interface OwnerProfile {
  name: string;
  brand: string;
  role: string;
  affiliation: string;
  statusText: string;
  bio: string;
  serviceOverview: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
}

export interface ServiceItem {
  id: ServiceId;
  code: string;
  title: string;
  projectsCompleted: string;
  summary: string;
  metricsLabel: string;
  filterTarget: ProjectCategory;
}

export interface TechStackItem {
  name: string;
  tag: string;
  role: string;
}

export interface TechStackCategory {
  id: 'frontend' | 'backend' | 'data-iot';
  code: string;
  title: string;
  items: TechStackItem[];
}

export interface TelemetryMetric {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: ProjectId;
  indexCode: string;
  title: string;
  categories: Exclude<ProjectCategory, 'All'>[];
  primaryTag: string;
  description: string;
  highlights: string[];
  techStack: string[];
  telemetryMetrics: TelemetryMetric[];
  githubUrl?: string;
  liveUrl?: string;
  liveLabel?: string;
  statusBadge: string;
  image: string;
}
