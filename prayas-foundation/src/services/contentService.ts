/**
 * CMS-Ready Content Service
 *
 * Currently returns data from local mock files.
 * To switch to a REST API, Headless CMS, Supabase, or Google Sheets,
 * replace the imports below with async fetch calls — no component changes needed.
 */

import { impactStats } from '../data/impactData';
import { programs } from '../data/programsData';
import { testimonials } from '../data/testimonialsData';
import { newsArticles } from '../data/newsData';
import { partners } from '../data/partnersData';
import { galleryItems } from '../data/galleryData';
import { projects } from '../data/projectsData';
import { volunteerRoles, careerOpenings, donationTiers } from '../data/volunteerData';

import type {
  ImpactStat, Program, Testimonial, NewsArticle,
  Partner, GalleryItem, Project, VolunteerRole,
  CareerOpening, DonationTier,
} from '../types';

export const contentService = {
  getImpactStats: (): ImpactStat[] => impactStats,
  getPrograms: (): Program[] => programs,
  getFeaturedPrograms: (): Program[] => programs.filter(p => p.featured),
  getProgramsByCategory: (cat: Program['category']): Program[] => programs.filter(p => p.category === cat),
  getTestimonials: (): Testimonial[] => testimonials,
  getNewsArticles: (): NewsArticle[] => newsArticles,
  getPartners: (): Partner[] => partners,
  getGalleryItems: (): GalleryItem[] => galleryItems,
  getProjects: (): Project[] => projects,
  getProjectsByStatus: (status: Project['status']): Project[] => projects.filter(p => p.status === status),
  getVolunteerRoles: (): VolunteerRole[] => volunteerRoles,
  getCareerOpenings: (): CareerOpening[] => careerOpenings,
  getDonationTiers: (): DonationTier[] => donationTiers,
};
