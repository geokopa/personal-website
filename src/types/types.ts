export interface Skill {
  id: number;
  name: string;
  icon: string;
}

export interface Project {
  id: number;
  name: string;
  images: readonly string[];
  demoUri: string;
  sourceUri: string;
  description: string;
  technologies: readonly string[];
}

export interface NavItem {
  id: number;
  name: string;
  uri: string;
  offset: number;
}

export interface TestimonialItem {
  id: number;
  text: string;
  name: string;
  position: string;
}
