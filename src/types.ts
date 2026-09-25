export type ThemeMode = 'dark' | 'light' | 'system';
export type AccentColor = 'indigo' | 'emerald' | 'violet' | 'amber' | 'cyan';
export type ViewMode = 'web' | 'mobile-sim';

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'architecture';
  proficiency: number; // 0-100
  iconName: string;
  yearsOfExp: number;
  featured: boolean;
  description: string;
  codeSnippet: string;
}

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'Full-Stack' | 'Frontend UI' | 'Mobile PWA' | 'AI & Tools' | 'Open Source';
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
  architecture?: string[];
  highlights: string[];
  mockupType: 'web' | 'mobile' | 'dashboard';
  codeSample?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Lead' | 'Freelance';
  description: string;
  responsibilities: string[];
  technologies: string[];
  impactMetric?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType: 'fullstack' | 'frontend' | 'consulting' | 'fulltime' | 'other';
  budget?: string;
}

export interface PlaygroundWidget {
  id: string;
  title: string;
  description: string;
  type: 'chart' | 'editor' | 'api' | 'palette';
}
