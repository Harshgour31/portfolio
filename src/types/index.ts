export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  skills: string[];
  metrics?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  context: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  description: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  major: string;
  institution: string;
  period: string;
  location: string;
}

export interface NavLink {
  label: string;
  href: string;
}

