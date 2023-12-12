export interface Skill {
  id: number;
  name: string;
  icon: string;
}

export interface ExperienceItem {
  id: number;
  name: string;
  position: string;
  workYears: string;
  description?: string;
}

export interface Client {
  id: number;
  name: string;
  image: string;
  url: string;
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

export interface CertificateItem {
  id: number;
  name: string;
  image: string;
  url: string;
}
