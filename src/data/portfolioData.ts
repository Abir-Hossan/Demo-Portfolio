import { Project, Skill, Experience, Testimonial } from '../types';

export const PERSONAL_INFO = {
  name: 'Kabir Hossan',
  title: 'Senior Web Developer & UI Architect',
  tagline: 'Crafting ultra-responsive web applications, resilient backend architectures, and delightful digital user experiences.',
  shortBio: 'Passionate Full-Stack Developer with 6+ years of experience engineering high-performance web applications, responsive user interfaces, and scalable REST APIs using React, TypeScript, Tailwind CSS, Node.js, and modern Vite ecosystems.',
  location: 'San Francisco, CA (Available Remote Worldwide)',
  email: 'tKc4o@example.com',
  phone: '+1 (415) 555-1234',
  status: 'Open to Senior Web Developer & Contract Roles',
  availability: 'Available Immediately',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  stats: [
    { label: 'Years Experience', value: '6' },
    { label: 'Projects Completed', value: '45+' },
    { label: 'GitHub Commits', value: '3,800+' },
    { label: 'Client Satisfaction', value: '99%' }
  ]
};

export const SKILLS: Skill[] = [
  {
    id: 'react',
    name: 'React 19 & Hooks',
    category: 'frontend',
    proficiency: 96,
    iconName: 'Atom',
    yearsOfExp: 6,
    featured: true,
    description: 'Advanced React patterns, Server Components, Custom Hooks, Context, State management (Zustand, Redux Toolkit, TanStack Query).',
    codeSnippet: `// Custom Reactive Hook Pattern
import { useState, useEffect } from 'react';

export function useWindowDimensions() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return dimensions;
}`
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    proficiency: 94,
    iconName: 'Code2',
    yearsOfExp: 5,
    featured: true,
    description: 'Strict type safety, generics, mapped types, utility types, and API schema validation with Zod.',
    codeSnippet: `// Polymorphic Component Type Definition
type PropsOf<C extends React.ElementType> = React.ComponentPropsWithoutRef<C>;

export type BoxProps<C extends React.ElementType> = {
  as?: C;
  children?: React.ReactNode;
} & PropsOf<C>;`
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS v4',
    category: 'frontend',
    proficiency: 98,
    iconName: 'Palette',
    yearsOfExp: 5,
    featured: true,
    description: 'Fluid responsive design systems, custom theme configuration, dark mode architecture, and CSS animation pipelines.',
    codeSnippet: `/* Fluid Responsive Typography & Grid System */
@import "tailwindcss";

@layer components {
  .btn-primary {
    @apply px-5 py-2.5 rounded-xl font-medium text-white bg-indigo-600 hover:bg-indigo-500 transition-all duration-200 active:scale-95 shadow-md shadow-indigo-500/20;
  }
}`
  },
  {
    id: 'vite',
    name: 'Vite & Webpack',
    category: 'tools',
    proficiency: 92,
    iconName: 'Zap',
    yearsOfExp: 4,
    featured: true,
    description: 'HMR bundlers, module resolution, code splitting, performance optimization, and build environment automation.',
    codeSnippet: `// vite.config.ts Optimization Configuration
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: { vendor: ['react', 'react-dom'] }
      }
    }
  }
});`
  },
  {
    id: 'nodejs',
    name: 'Node.js & Express',
    category: 'backend',
    proficiency: 90,
    iconName: 'Server',
    yearsOfExp: 5,
    featured: true,
    description: 'RESTful API routing, middleware creation, JWT authentication pipelines, rate limiting, and microservice architecture.',
    codeSnippet: `// Express Async Handler & Middleware
import express, { Request, Response, NextFunction } from 'express';

export const apiRouter = express.Router();

apiRouter.get('/v1/health', (req: Request, res: Response) => {
  res.json({ status: 'healthy', uptime: process.uptime(), timestamp: new Date().toISOString() });
});`
  },
  {
    id: 'database',
    name: 'PostgreSQL & MongoDB',
    category: 'database',
    proficiency: 88,
    iconName: 'Database',
    yearsOfExp: 4,
    featured: true,
    description: 'Relational data modeling, index optimization, ORM integrations (Drizzle, Prisma), and transaction management.',
    codeSnippet: `// Drizzle ORM Schema Definition
import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: text('name').notNull(),
  createdAt: timestamp('created_at').defaultNow()
});`
  },
  {
    id: 'responsive',
    name: 'Responsive UI/UX Architecture',
    category: 'architecture',
    proficiency: 98,
    iconName: 'Smartphone',
    yearsOfExp: 6,
    featured: true,
    description: 'Mobile-first breakpoints, touch gesture handling, device shell simulation, dynamic layout scaling, and WCAG accessibility.',
    codeSnippet: `// Responsive Container Breakpoint Handler
export function getResponsiveLayout(screenWidth: number) {
  if (screenWidth < 640) return { view: 'mobile', columns: 1 };
  if (screenWidth < 1024) return { view: 'tablet', columns: 2 };
  return { view: 'desktop', columns: 3 };
}`
  },
  {
    id: 'git',
    name: 'Git & CI/CD Pipelines',
    category: 'devops',
    proficiency: 92,
    iconName: 'GitBranch',
    yearsOfExp: 6,
    featured: false,
    description: 'Branching strategies (GitFlow, Trunk-based), GitHub Actions, automated unit testing, deployment pipelines to Cloud Run & Vercel.',
    codeSnippet: `name: CI Deployment Pipeline
on:
  push:
    branches: [ main ]
jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci && npm test`
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'cloud-analytics-suite',
    title: 'CloudPulse Analytics Platform',
    category: 'Full-Stack',
    shortDesc: 'Real-time telemetry and API usage analytics dashboard with interactive charts and export options.',
    fullDesc: 'CloudPulse is a enterprise-grade full-stack monitoring platform designed for web developers and DevOps engineers. Features real-time WebSocket metrics streaming, custom dashboard widgets, RESTful API integrations, automated alerts, and detailed PDF report generation.',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'Recharts'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://example.com/demo/cloudpulse',
    githubUrl: 'https://github.com',
    featured: true,
    mockupType: 'dashboard',
    metrics: [
      { label: 'Latency Reduced', value: '45ms' },
      { label: 'Data Throughput', value: '1.2M req/sec' },
      { label: 'Lighthouse Score', value: '99/100' }
    ],
    architecture: [
      'Frontend built with React 19, TypeScript, and Tailwind CSS for 60fps renders',
      'Express Node.js backend proxying live WebSocket telemetry streams',
      'Modular widget dashboard layout with local state persistence and responsive grid'
    ],
    highlights: [
      'Interactive real-time line charts with live filtering and timeframe zoom',
      'Dark and light mode optimized UI with high contrast accessibility',
      'Instant search and tag-based metric filtering'
    ],
    codeSample: `// CloudPulse Telemetry Hook
export function useRealtimeMetrics(intervalMs = 1000) {
  const [data, setData] = useState<MetricPoint[]>([]);
  useEffect(() => {
    const timer = setInterval(() => {
      setData(prev => [...prev.slice(-20), { time: new Date().toLocaleTimeString(), value: Math.floor(Math.random() * 80) + 20 }]);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [intervalMs]);
  return data;
}`
  },
  {
    id: 'nexus-design-system',
    title: 'Nexus Component Library & Design System',
    category: 'Frontend UI',
    shortDesc: 'Accessible React & Tailwind UI component library with 40+ interactive components and live preview storybook.',
    fullDesc: 'A comprehensive React component library crafted for ultra-responsive web applications. Built from the ground up prioritizing keyboard accessibility, fluid CSS tokens, zero-dependency motion transitions, and seamless dark mode support.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Accessibility', 'Vite'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://example.com/demo/nexus',
    githubUrl: 'https://github.com',
    featured: true,
    mockupType: 'web',
    metrics: [
      { label: 'Components', value: '42+' },
      { label: 'Bundle Size', value: '12.4 kB gzipped' },
      { label: 'Accessibility', value: 'WCAG AAA' }
    ],
    architecture: [
      'Tree-shakeable ESM module structure',
      'Tailwind CSS v4 plugin extension with design tokens',
      'Strict TypeScript prop interface definitions with JSDoc auto-completion'
    ],
    highlights: [
      'Custom modal dialogs, drawer menus, datatables, and toast notifications',
      'Built-in theme switcher (Light, Dark, High Contrast, Custom Accents)',
      '100% test coverage with Vitest and Testing Library'
    ]
  },
  {
    id: 'swift-task-pwa',
    title: 'SwiftTask Mobile Native PWA',
    category: 'Mobile PWA',
    shortDesc: 'Offline-first progressive web app task manager with drag-and-drop Kanban, touch gestures, and local sync.',
    fullDesc: 'Designed to deliver a desktop-quality and mobile-native user experience across all screen sizes. Features offline support via Service Workers, touch swipe gesture actions, local IndexedDB persistence, push notifications, and biometric login simulation.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'PWA', 'IndexedDB'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://example.com/demo/swifttask',
    githubUrl: 'https://github.com',
    featured: true,
    mockupType: 'mobile',
    metrics: [
      { label: 'Offline Support', value: '100% Functional' },
      { label: 'App Shell Size', value: '< 250KB' },
      { label: 'Frame Rate', value: '60 FPS Touch' }
    ],
    architecture: [
      'Service Worker caching strategy for instant offline launches',
      'Touch event listeners supporting swipe-to-delete and pull-to-refresh',
      'Responsive dual-view layout: Mobile frame view & Full-screen desktop view'
    ],
    highlights: [
      'Kanban board and list view toggles with fluid animations',
      'Category tags, task priority filters, and due date countdown timers',
      'Export and import task boards in JSON format'
    ]
  },
  {
    id: 'ai-code-copilot-studio',
    title: 'CodeCraft AI Assistant Studio',
    category: 'AI & Tools',
    shortDesc: 'Full-stack AI developer workbench for code explanation, refactoring, and automated test generation.',
    fullDesc: 'An intelligent code assistant web application leveraging the Gemini API. Allows developers to paste code snippets, select refactoring goals (Performance, Type Safety, Readability), execute live TypeScript syntax checking, and generate instant unit tests.',
    tags: ['React 19', 'TypeScript', 'Gemini API', 'Express', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    demoUrl: 'https://example.com/demo/codecraft',
    githubUrl: 'https://github.com',
    featured: true,
    mockupType: 'dashboard',
    metrics: [
      { label: 'Refactor Time', value: '< 1.5s' },
      { label: 'Supported Languages', value: '12+' },
      { label: 'User Rating', value: '4.9/5' }
    ],
    architecture: [
      'Server-side Gemini 2.5 Flash API proxy route via Express preventing client key exposure',
      'Streaming token response renderer for real-time AI code generation',
      'Monaco/Prism-styled syntax highlighting preview window'
    ],
    highlights: [
      'One-click unit test suite generator for React components and Express routes',
      'Interactive diff viewer comparing original vs refactored code',
      'Download refactored files directly or copy code with single click'
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'Senior Web Developer & Lead UI Architect',
    company: 'Apex Digital Solutions',
    location: 'San Francisco, CA',
    period: '2023 - Present',
    type: 'Full-time',
    description: 'Leading a cross-functional engineering team building enterprise React SaaS applications and responsive front-end design systems.',
    responsibilities: [
      'Architected modular React 19 component design system used across 8 flagship web products, reducing front-end development cycle times by 35%.',
      'Migrated legacy client codebases to TypeScript and modern Vite build tooling, improving initial bundle load times by 48%.',
      'Mentored 6 junior developers on modern React hooks patterns, performance optimization, and WCAG accessibility standards.'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js', 'Express', 'Jest'],
    impactMetric: '35% faster feature delivery & 99.8% crash-free sessions'
  },
  {
    id: 'exp-2',
    role: 'Full-Stack Web Engineer',
    company: 'Vanguard Web Labs',
    location: 'Austin, TX (Remote)',
    period: '2020 - 2023',
    type: 'Full-time',
    description: 'Developed scalable customer-facing web applications, RESTful microservices, and interactive dashboard platforms.',
    responsibilities: [
      'Engineered real-time analytics portal consuming REST APIs and WebSockets to render high-density charts with Recharts and Tailwind CSS.',
      'Designed and deployed Node.js Express microservices integrated with PostgreSQL database for secure OAuth authentication and session management.',
      'Collaborated closely with product designers to implement pixel-perfect mobile-first responsive web interfaces.'
    ],
    technologies: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Docker'],
    impactMetric: 'Scaled app to handle 150K+ daily active users'
  },
  {
    id: 'exp-3',
    role: 'Frontend Developer & UI Designer',
    company: 'PixelCraft Interactive',
    location: 'Remote',
    period: '2018 - 2020',
    type: 'Contract',
    description: 'Crafted bespoke web application interfaces, e-commerce landing experiences, and responsive client websites.',
    responsibilities: [
      'Built 25+ fully responsive client websites using HTML5, CSS3, JavaScript, and Tailwind CSS.',
      'Optimized asset pipeline, image delivery, and lazy-loading scripts to achieve sub-second Google Lighthouse PageSpeed scores.'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'React', 'Git'],
    impactMetric: 'Achieved average 98+ Google PageSpeed score on all client sites'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Sarah Jenkins',
    role: 'VP of Product',
    company: 'Apex Digital',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    content: 'Kabir is one of those rare web developers who combines deep architectural understanding with meticulous visual design polish. His speed and quality of execution on React and TypeScript projects is unparalleled.',
    rating: 5
  },
  {
    id: 't-2',
    name: 'Marcus Vance',
    role: 'Chief Technology Officer',
    company: 'Vanguard Labs',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    content: 'Working with Kabir transformed our web application experience. He engineered a responsive frontend that loaded twice as fast and looked stunning across mobile, tablet, and ultra-wide desktop monitors.',
    rating: 5
  },
  {
    id: 't-3',
    name: 'Elena Rostova',
    role: 'Lead UX Designer',
    company: 'PixelCraft',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    content: 'Kabir turns design mockups into living, breathing web applications with flawless precision. His attention to micro-interactions, responsive touch targets, and code organization made collaboration seamless.',
    rating: 5
  }
];

export const RESUME_DATA = {
  summary: 'Senior Web Developer & UI Architect with 6+ years of expertise building modern, responsive, high-performance web applications using HTML5, CSS3, React 19, TypeScript, Tailwind CSS, Node.js, and Vite.',
  coreCompetencies: [
    'Responsive Web & Mobile Layouts',
    'React 19, Hooks, State Architecture',
    'TypeScript Strict Typing & Generics',
    'Tailwind CSS v4 & Modern Styling',
    'Full-Stack Node.js & Express REST APIs',
    'Web Performance & Lighthouse Optimization',
    'WCAG Accessibility & Keyboard UX',
    'CI/CD, Git Workflows, & Deployment'
  ],
  education: [
    {
      degree: 'B.S. in Computer Science & Engineering',
      institution: 'University of Technology',
      year: '2014 - 2018',
      details: 'Graduated Magna Cum Laude. Focus on Software Architecture, Web Protocols, and Human-Computer Interaction.'
    }
  ],
  certifications: [
    'AWS Certified Developer - Associate',
    'Meta Front-End Developer Professional Certificate',
    'MongoDB Certified Developer'
  ]
};
