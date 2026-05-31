// Shared TypeScript interfaces for Prayas Foundation

export interface ImpactStat {
  id: string;
  icon: string;
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  description: string;
  color: 'primary' | 'secondary' | 'accent';
}

export interface Partner {
  id: string;
  name: string;
  icon: string;
  url?: string;
}

export interface Program {
  id: string;
  title: string;
  category: 'vocational' | 'digital' | 'women' | 'education' | 'csr' | 'government';
  categoryLabel: string;
  description: string;
  duration?: string;
  participants?: string;
  icon: string;
  featured?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  status: 'ongoing' | 'completed' | 'upcoming';
  progress?: number;
  location: string;
  image?: string;
  beneficiaries?: string;
  year?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  quote: string;
  image?: string;
}

export interface GalleryItem {
  id: string;
  src?: string;
  alt: string;
  caption: string;
  category: 'events' | 'training' | 'community' | 'team';
  span?: 'single' | 'wide' | 'tall';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  social?: { linkedin?: string; twitter?: string; };
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  image?: string;
  url?: string;
}

export interface VolunteerRole {
  id: string;
  title: string;
  description: string;
  commitment: string;
  location: string;
  skills: string[];
  icon: string;
}

export interface DonationTier {
  id: string;
  amount: number;
  label: string;
  impact: string;
  icon: string;
  featured?: boolean;
}

export interface CareerOpening {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
  icon: string;
}
