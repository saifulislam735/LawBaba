export const lawyers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    specialization: 'Corporate Law',
    experience: '15 years',
    rating: 4.8,
    reviewCount: 127,
    imageUrl: 'https://images.unsplash.com/photo-1598257006626-48b0c252070d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    hourlyRate: 200,
    availability: true,
    location: 'New York, NY',
    languages: ['English', 'Spanish'],
    education: 'Harvard Law School',
    description: 'Specialized in corporate law with extensive experience in mergers and acquisitions.',
    cases: 234,
    successRate: '92%'
  },
  {
    id: 2,
    name: 'Michael Chen',
    specialization: 'Criminal Law',
    experience: '10 years',
    rating: 4.5,
    reviewCount: 98,
    imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    hourlyRate: 150,
    availability: true,
    location: 'Los Angeles, CA',
    languages: ['English', 'Mandarin'],
    education: 'Yale Law School',
    description: 'Expert in criminal defense with a strong track record of successful cases.',
    cases: 189,
    successRate: '88%'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    specialization: 'Family Law',
    experience: '8 years',
    rating: 4.9,
    reviewCount: 156,
    imageUrl: 'https://images.unsplash.com/photo-1594751543129-6701ad444259?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    hourlyRate: 175,
    availability: false,
    location: 'Miami, FL',
    languages: ['English', 'Spanish', 'Portuguese'],
    education: 'Stanford Law School',
    description: 'Dedicated family law attorney specializing in divorce and custody cases.',
    cases: 312,
    successRate: '95%'
  },
  {
    id: 4,
    name: 'David Kim',
    specialization: 'Intellectual Property',
    experience: '12 years',
    rating: 4.7,
    reviewCount: 143,
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    hourlyRate: 225,
    availability: true,
    location: 'San Francisco, CA',
    languages: ['English', 'Korean'],
    education: 'Berkeley Law School',
    description: 'Patent attorney with expertise in technology and software patents.',
    cases: 178,
    successRate: '91%'
  },
  {
    id: 5,
    name: 'Rachel Thompson',
    specialization: 'Real Estate Law',
    experience: '9 years',
    rating: 4.6,
    reviewCount: 112,
    imageUrl: 'https://images.unsplash.com/photo-1578496781985-452d4a934d50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    hourlyRate: 165,
    availability: true,
    location: 'Chicago, IL',
    languages: ['English'],
    education: 'Columbia Law School',
    description: 'Expert in real estate transactions and property law.',
    cases: 245,
    successRate: '89%'
  }
];

export const specializations = [
  'Corporate Law',
  'Criminal Law',
  'Family Law',
  'Intellectual Property',
  'Real Estate Law',
  'Immigration Law',
  'Tax Law',
  'Employment Law',
  'Environmental Law',
  'Civil Rights Law'
];

export const cities = [
  'New York, NY',
  'Los Angeles, CA',
  'Chicago, IL',
  'Houston, TX',
  'Phoenix, AZ',
  'Philadelphia, PA',
  'San Antonio, TX',
  'San Diego, CA',
  'Dallas, TX',
  'San Jose, CA'
];

export const priceRanges = [
  { label: '$100-150/hr', value: '100-150' },
  { label: '$150-200/hr', value: '150-200' },
  { label: '$200-250/hr', value: '200-250' },
  { label: '$250+/hr', value: '250-plus' }
];

export const experienceLevels = [
  { label: '0-5 years', value: '0-5' },
  { label: '5-10 years', value: '5-10' },
  { label: '10-15 years', value: '10-15' },
  { label: '15+ years', value: '15-plus' }
];
