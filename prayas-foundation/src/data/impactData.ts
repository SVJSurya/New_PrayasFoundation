import type { ImpactStat } from '../types';

export const impactStats: ImpactStat[] = [
  {
    id: 'education',
    icon: 'school',
    value: '15,000+',
    numericValue: 15000,
    suffix: '+',
    label: 'Education & Literacy',
    description: 'Quality elementary education and adult literacy programs reaching the heart of rural communities.',
    color: 'secondary',
  },
  {
    id: 'skill-training',
    icon: 'engineering',
    value: '250+',
    numericValue: 250,
    suffix: '+',
    label: 'Skill Training Centers',
    description: 'Vocational training centers equipped with modern labs for industrial and digital skills.',
    color: 'primary',
  },
  {
    id: 'livelihoods',
    icon: 'payments',
    value: '8,500',
    numericValue: 8500,
    suffix: '',
    label: 'Livelihoods Created',
    description: 'Successful placements and micro-entrepreneurship support for youth and self-help groups.',
    color: 'accent',
  },
  {
    id: 'states',
    icon: 'map',
    value: '12',
    numericValue: 12,
    suffix: '',
    label: 'States Covered',
    description: 'Driving sustainable development through grassroots initiatives across 12 states of India.',
    color: 'secondary',
  },
];
