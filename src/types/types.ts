export interface Skill {
  id: number;
  name: string;
  icon: string;
}

export interface Client {
  id: number;
  name: string;
  image: string;
  position: string;
  workYears: string;
  url: string;
  description?: string;
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
