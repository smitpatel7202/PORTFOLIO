export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'ai' | 'mern' | 'nextjs' | 'ecommerce' | 'live';
  categoryLabel: string;
  description: string;
  fullDescription: string[];
  techStack: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: string;
  gradient: string;
  icon: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'database' | 'ai' | 'tools';
  experienceYears?: string;
  isTop?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  grade: string;
  highlights: string[];
  current?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  skillsCovered: string[];
  badgeColor: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}
