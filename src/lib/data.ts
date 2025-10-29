export const projectsData = [
  {
    title: 'Modern Web Platform',
    category: 'Web',
    description: 'A cutting-edge web platform built with Next.js for server-side rendering and static site generation, ensuring optimal performance and SEO.',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    link: '#',
    image: 'project-1',
  },
  {
    title: 'Mobile Finance App',
    category: 'Mobile',
    description: 'A secure and intuitive mobile application for personal finance management, featuring real-time tracking and budgeting tools.',
    technologies: ['React Native', 'Firebase'],
    link: '#',
    image: 'project-2',
  },
  {
    title: 'AI Analytics Dashboard',
    category: 'AI',
    description: 'A powerful MERN stack dashboard with Python-based AI for predictive analytics, helping businesses make data-driven decisions.',
    technologies: ['MERN Stack', 'Python', 'AI'],
    link: '#',
    image: 'project-3',
  },
  {
    title: 'Corporate Website',
    category: 'Web',
    description: 'A professional corporate website developed with .NET Core and hosted on Azure, offering scalability and robust security.',
    technologies: ['.NET Core', 'Azure'],
    link: '#',
    image: 'project-4',
  },
  {
    title: 'E-commerce Store',
    category: 'Web',
    description: 'A full-featured e-commerce solution with a custom backend, providing a seamless shopping experience from browsing to checkout.',
    technologies: ['Laravel', 'Vue.js', 'MySQL'],
    link: '#',
    image: 'project-ecommerce',
  },
  {
    title: 'Smart Home Automation',
    category: 'AI',
    description: 'An AI-powered system to control and automate home devices, learning user preferences for a personalized living experience.',
    technologies: ['Python', 'TensorFlow', 'IoT'],
    link: '#',
    image: 'project-ai-home',
  },
  {
    title: 'Fitness Tracking App',
    category: 'Mobile',
    description: 'A cross-platform mobile app built with Flutter that monitors workout routines, tracks progress, and offers personalized fitness plans.',
    technologies: ['Flutter', 'Firebase Auth', 'Firestore'],
    link: '#',
    image: 'project-fitness-app',
  },
];

const allTeamMembers = [
  { id: 'ali', name: 'Ali Farhan', role: 'Manager', image: 'team-ali' },
  { id: 'rajeel', name: 'Rajeel Siddiqui', role: 'Team Leader', image: 'team-rajeel' },
  { id: 'jane', name: 'Jane Doe', role: 'Frontend Developer', image: 'team-frontend' },
  { id: 'john', name: 'John Smith', role: 'Backend Developer', image: 'team-backend' },
  { id: 'emily', name: 'Emily White', role: 'Mobile App Developer', image: 'team-mobile' },
  { id: 'alex', name: 'Alex Johnson', role: 'AI Specialist', image: 'team-ai' },
  { id: 'sarah', name: 'Sarah Brown', role: 'UI/UX Designer', image: 'team-uiux' },
  { id: 'michael', name: 'Michael Clark', role: 'QA Engineer', image: 'team-qa' },
];

export const teamData = allTeamMembers.filter(m => m.id !== 'ali' && m.id !== 'rajeel');

export const orgChartData = {
  manager: allTeamMembers.find(m => m.id === 'ali')!,
  teamLead: allTeamMembers.find(m => m.id === 'rajeel')!,
  employees: allTeamMembers.filter(m => !['ali', 'rajeel'].includes(m.id)),
};
