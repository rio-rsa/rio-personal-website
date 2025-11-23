export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Publication {
  id: string;
  title: string;
  journal: string;
  year: number;
  abstract: string;
  link?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  tags: string[];
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
