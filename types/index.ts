export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string[];
  tags: ProjectTag[];
  description: string;
  longDescription?: string;
  technologies: string[];
  badges: Badge[];
  featured: boolean;
  metrics?: Metric[];
  links: ProjectLinks;
  architecture?: ArchNode[];
  methodology?: string[];
  results?: Result[];
  dataset?: DatasetInfo;
  image: string;
}

export type ProjectTag =
  | "Machine Learning"
  | "Deep Learning"
  | "NLP"
  | "Data Engineering"
  | "Computer Vision"
  | "Data Analytics"
  | "Full Stack"
  | "Research";

export interface Badge {
  type: "demo" | "notebook" | "report" | "presentation" | "source";
  label: string;
  url?: string;
}

export interface Metric {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface ProjectLinks {
  demo?: string;
  github?: string;
  notebook?: string;
  report?: string;
  presentation?: string;
}

export interface ArchNode {
  layer: string;
  components: string[];
  color?: string;
}

export interface Result {
  model: string;
  metric: string;
  value: string;
}

export interface DatasetInfo {
  size?: string;
  classes?: number;
  description: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  type: "internship" | "full-time" | "contract";
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  icon: string;
  credentialUrl?: string;  
  credentialId?: string;   
}

export interface Stat {
  value: string;
  label: string;
}
