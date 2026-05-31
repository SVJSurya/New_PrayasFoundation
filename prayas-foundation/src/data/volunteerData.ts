import type { VolunteerRole, CareerOpening, DonationTier } from '../types';

export const volunteerRoles: VolunteerRole[] = [
  {
    id: 'trainer',
    title: 'Skill Trainer',
    description: 'Conduct vocational training sessions at our partner centers across India. Share your expertise in a trade or profession to transform lives.',
    commitment: '2 days/week',
    location: 'Various Centres',
    skills: ['Teaching', 'Vocational Expertise', 'Patience'],
    icon: 'school',
  },
  {
    id: 'mentor',
    title: 'Career Mentor',
    description: 'Guide trainees in career planning, interview preparation, and professional development through one-on-one sessions.',
    commitment: '4 hrs/week',
    location: 'Remote / In-person',
    skills: ['Professional Experience', 'Communication', 'Empathy'],
    icon: 'psychology',
  },
  {
    id: 'digital',
    title: 'Digital Literacy Volunteer',
    description: 'Teach basic computer skills, internet usage, and digital safety to first-time users in rural communities.',
    commitment: '1 day/week',
    location: 'Rural Centres',
    skills: ['Tech Literacy', 'Communication', 'Regional Language'],
    icon: 'computer',
  },
  {
    id: 'fundraiser',
    title: 'Community Fundraiser',
    description: 'Help organize local fundraising events and donor outreach in your city to support our programs.',
    commitment: 'Flexible',
    location: 'Your City',
    skills: ['Networking', 'Event Management', 'Communication'],
    icon: 'volunteer_activism',
  },
];

export const careerOpenings: CareerOpening[] = [
  {
    id: 'senior-pm',
    title: 'Senior Program Manager',
    type: 'Full-Time · New Delhi',
    location: 'New Delhi, IN',
    description: 'Lead the strategic execution of our skill development programs. Oversee multi-state teams and ensure operational excellence across all program pillars.',
    requirements: ['8+ years in NGO/development sector', 'Proven large-scale program delivery', 'Strong data analysis skills', 'Fluent in Hindi and English'],
    icon: 'strategy',
  },
  {
    id: 'regional-coordinator',
    title: 'Regional Coordinator',
    type: 'Contract · Mumbai',
    location: 'Mumbai, IN',
    description: 'Coordinate on-the-ground operations for our Western India programs. Strong local networking and logistical expertise required.',
    requirements: ['5+ years field experience', 'Regional language proficiency (Marathi/Gujarati)', 'Valid driving license', 'Community mobilization experience'],
    icon: 'location_on',
  },
  {
    id: 'comms-lead',
    title: 'Communications Lead',
    type: 'Full-Time · Remote',
    location: 'Remote',
    description: 'Develop and execute our digital narrative strategy. Create compelling content that communicates our impact to donors, partners, and communities.',
    requirements: ['5+ years content/communications', 'NGO sector experience preferred', 'Social media & SEO proficiency', 'Strong writing portfolio'],
    icon: 'campaign',
  },
];

export const donationTiers: DonationTier[] = [
  {
    id: 'supporter',
    amount: 500,
    label: 'Supporter',
    impact: 'Provides one month of digital literacy training materials for a rural learner.',
    icon: 'favorite',
  },
  {
    id: 'champion',
    amount: 2000,
    label: 'Champion',
    impact: 'Sponsors a full 2-month digital literacy course for one beneficiary.',
    icon: 'star',
    featured: true,
  },
  {
    id: 'patron',
    amount: 5000,
    label: 'Patron',
    impact: 'Funds a complete vocational certification program including materials and assessment fees.',
    icon: 'workspace_premium',
  },
  {
    id: 'benefactor',
    amount: 15000,
    label: 'Benefactor',
    impact: 'Equips an entire classroom with tools, materials, and trainer stipend for one month.',
    icon: 'volunteer_activism',
  },
];
