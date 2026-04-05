/**
 * BrightRoof Solar - Static Data
 * All content for testimonials, features, pricing, FAQs, and guarantees
 */

// Company Info
export const companyInfo = {
  name: 'BrightRoof Solar',
  phone: '0800 123 4567',
  stats: {
    homesPowered: '1,200+',
    rating: '4.9',
    reviewCount: '847',
  },
};

// Features/Benefits
export interface Feature {
  icon: 'sun' | 'shield' | 'piggy-bank' | 'leaf' | 'clock' | 'award';
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: 'sun',
    title: 'High-Efficiency Panels',
    description: 'Premium tier-1 solar panels with 25-year performance warranty and industry-leading efficiency ratings.',
  },
  {
    icon: 'shield',
    title: 'MCS Certified Installers',
    description: 'All our installers are MCS certified, ensuring the highest standards of safety and quality.',
  },
  {
    icon: 'piggy-bank',
    title: 'Save Up to 70%',
    description: 'Reduce your electricity bills by up to 70% and protect yourself from rising energy costs.',
  },
  {
    icon: 'leaf',
    title: 'Reduce Carbon Footprint',
    description: 'A typical home solar system saves over 1 tonne of CO2 annually. Do your part for the planet.',
  },
  {
    icon: 'clock',
    title: 'Quick Installation',
    description: 'Most installations completed in just 1-2 days with minimal disruption to your home.',
  },
  {
    icon: 'award',
    title: 'Which? Trusted Trader',
    description: 'Endorsed by Which? Trusted Traders for our commitment to excellent customer service.',
  },
];

// Testimonials
export interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  rating: number;
  badge?: {
    type: 'blue' | 'green';
    text: string;
  };
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah M.',
    location: 'Bristol',
    quote: 'The team were professional from start to finish. Our electricity bills have dropped by 65% since installation. Couldn\'t be happier!',
    rating: 5,
    badge: { type: 'blue', text: 'Excellent Service' },
  },
  {
    id: 2,
    name: 'James W.',
    location: 'Manchester',
    quote: 'Fast, clean installation with zero hassle. The installers even cleaned up after themselves. Highly recommend BrightRoof.',
    rating: 5,
    badge: { type: 'green', text: 'Fast & Clean' },
  },
  {
    id: 3,
    name: 'Emma T.',
    location: 'Leeds',
    quote: 'From the initial quote to final installation, everything was transparent and professional. Now generating our own electricity!',
    rating: 5,
    badge: { type: 'blue', text: 'Great Communication' },
  },
  {
    id: 4,
    name: 'David H.',
    location: 'Birmingham',
    quote: 'We were skeptical at first, but the savings are real. Already saved over £800 in the first year alone.',
    rating: 5,
    badge: { type: 'green', text: 'Real Savings' },
  },
  {
    id: 5,
    name: 'Lisa P.',
    location: 'Cardiff',
    quote: 'The 25-year warranty gave us peace of mind. The panels look great on our roof and perform even better.',
    rating: 5,
    badge: { type: 'blue', text: 'Peace of Mind' },
  },
  {
    id: 6,
    name: 'Michael R.',
    location: 'Southampton',
    quote: 'Straightforward process from start to finish. The team answered all our questions and delivery was on time.',
    rating: 5,
    badge: { type: 'green', text: 'Hassle-free' },
  },
];

// Pricing Tiers
export interface PricingTier {
  id: string;
  name: string;
  systemSize: string;
  price: string;
  priceNote: string;
  popular: boolean;
  features: string[];
  savingsPerYear: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    systemSize: '3.5kW',
    price: '£5,499',
    priceNote: 'Fully installed',
    popular: false,
    features: [
      '8 x High-efficiency panels',
      '10-year inverter warranty',
      '25-year panel warranty',
      'MCS certified installation',
      'Free monitoring app',
    ],
    savingsPerYear: '£400-£550',
  },
  {
    id: 'popular',
    name: 'Family Home',
    systemSize: '5kW',
    price: '£7,299',
    priceNote: 'Fully installed',
    popular: true,
    features: [
      '12 x High-efficiency panels',
      '10-year inverter warranty',
      '25-year panel warranty',
      'MCS certified installation',
      'Free monitoring app',
      'Smart export guarantee',
    ],
    savingsPerYear: '£600-£800',
  },
  {
    id: 'premium',
    name: 'Premium',
    systemSize: '8kW',
    price: '£10,499',
    priceNote: 'Fully installed',
    popular: false,
    features: [
      '18 x High-efficiency panels',
      '10-year inverter warranty',
      '25-year panel warranty',
      'MCS certified installation',
      'Free monitoring app',
      'Smart export guarantee',
      'Battery storage ready',
    ],
    savingsPerYear: '£900-£1,200',
  },
];

// FAQs
export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: 'How much can I save with solar panels?',
    answer: 'The average UK household can save between £400-£1,000 per year on electricity bills with solar panels. Your exact savings depend on your energy usage, roof orientation, and system size. We provide a personalised estimate during your free consultation.',
  },
  {
    id: 2,
    question: 'How long does installation take?',
    answer: 'Most residential solar panel installations are completed in 1-2 days. Our certified installers work efficiently to minimise disruption to your home, and we always leave your property clean and tidy.',
  },
  {
    id: 3,
    question: 'What warranties do you offer?',
    answer: 'We offer a comprehensive 25-year performance warranty on all solar panels, a 10-year warranty on inverters, and a 10-year workmanship guarantee on installation. This gives you complete peace of mind for decades.',
  },
  {
    id: 4,
    question: 'Do solar panels work in the UK climate?',
    answer: 'Absolutely! Solar panels work on daylight, not direct sunlight. The UK receives enough daylight year-round to make solar panels highly effective. Even on cloudy days, your panels will generate electricity.',
  },
  {
    id: 5,
    question: 'Is my roof suitable for solar panels?',
    answer: 'Most UK roofs are suitable for solar panels. Ideally, you want a south-facing roof with minimal shading, but east and west-facing roofs also work well. During your free survey, we assess your roof and provide honest advice.',
  },
  {
    id: 6,
    question: 'What is MCS certification and why does it matter?',
    answer: 'MCS (Microgeneration Certification Scheme) is the UK quality standard for renewable energy products and installers. MCS certification ensures your installation meets strict quality and safety standards, and is required to access government incentives like the Smart Export Guarantee.',
  },
];

// Guarantees
export interface Guarantee {
  id: number;
  title: string;
  description: string;
}

export const guarantees: Guarantee[] = [
  {
    id: 1,
    title: '25-Year Panel Warranty',
    description: 'Our tier-1 solar panels come with a 25-year performance guarantee, ensuring at least 80% output after 25 years.',
  },
  {
    id: 2,
    title: '10-Year Workmanship',
    description: 'Full 10-year warranty on installation workmanship. If anything goes wrong with our work, we fix it free of charge.',
  },
  {
    id: 3,
    title: 'MCS Certified',
    description: 'All installations are MCS certified, meeting the highest UK standards and qualifying you for government incentives.',
  },
  {
    id: 4,
    title: 'Price Match Promise',
    description: 'Found a like-for-like quote cheaper? We\'ll match it. We\'re committed to offering the best value in the UK.',
  },
];

// Time preference options for lead form
export const timePreferences = [
  { value: 'morning', label: 'Morning (9am-12pm)' },
  { value: 'afternoon', label: 'Afternoon (12pm-5pm)' },
  { value: 'evening', label: 'Evening (5pm-8pm)' },
  { value: 'any', label: 'Any time' },
];
