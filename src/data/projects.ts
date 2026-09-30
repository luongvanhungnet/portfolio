export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image?: string;
  date: string;
  displayDate?: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  {
    title: 'VBAS -- Vehicle Breakdown Assistance System',
    subtitle: 'Team project · Full-stack development',
    link: 'https://github.com/luongvanhungnet/ITSS2025.2',
    date: '2026-01-01',
    displayDate: '2026',
    desc: 'Built a platform connecting customers experiencing vehicle breakdowns with rescue staff and companies. It supports service requests, dispatch, price negotiation, payments, chat, and status tracking. Developed REST APIs, JWT authentication, role-based access, and a map showing staff locations, routes, and ETAs.',
    tech: [
      'Java',
      'Spring Boot',
      'React',
      'Vite',
      'PostgreSQL',
      'JWT',
      'Docker',
    ],
    featured: true,
  },
  {
    title: 'BlueMoon Apartment Management System',
    subtitle: 'Team project · System and database development',
    link: 'https://github.com/Kaio54547568/BlueMoonHotel',
    date: '2025-01-01',
    displayDate: '2025 - 2026',
    desc: 'Built an apartment management system for households, residents, fees, invoices, and payment history, with CRUD operations, search, filtering, and role-based access.',
    tech: ['Python', 'Django', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
    featured: true,
  },
  {
    title: 'JP-Taxi -- Online Taxi Booking System',
    subtitle: 'Team project · Full-stack development',
    link: 'https://github.com/luongvanhungnet/JPTaxi',
    date: '2026-01-01',
    displayDate: '2026',
    desc: 'Developed a taxi booking application with role-based interfaces, ride requests and trip management, status tracking, and map and route integration.',
    tech: [
      'Java',
      'Spring Boot',
      'React',
      'PostgreSQL',
      'REST API',
      'Git/GitHub',
    ],
  },
  {
    title: 'Restaurant Finder -- Restaurant Search Application',
    subtitle: 'Team project · Web development',
    link: 'https://github.com/luongvanhungnet/Restaurant-finder-',
    date: '2026-01-01',
    displayDate: '2026',
    desc: 'Built a map-based restaurant search application with detailed listings, search and filters, ratings, interactions, and photos.',
    tech: [
      'Java',
      'Spring Boot',
      'React',
      'PostgreSQL',
      'JavaScript',
      'REST API',
    ],
  },
];

export default data;
