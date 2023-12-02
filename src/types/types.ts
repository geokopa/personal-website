export interface Skill {
  id: number;
  name: string;
  icon: string;
}

export interface Project {
  id: number;
  name: string;
  imageUri: string;
  demoUri: string;
  sourceUri: string;
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
