export const projectsData = [
  {
    title: "Modern Web Platform",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "#",
    image: "project-1",
  },
  {
    title: "Mobile Finance App",
    technologies: ["React Native", "Firebase"],
    link: "#",
    image: "project-2",
  },
  {
    title: "AI Analytics Dashboard",
    technologies: ["MERN Stack", "Python", "AI"],
    link: "#",
    image: "project-3",
  },
  {
    title: "Corporate Website",
    technologies: [".NET Core", "Azure"],
    link: "#",
    image: "project-4",
  },
];

const allTeamMembers = [
  { id: "ali", name: "Ali Farhan", role: "Manager", image: "team-ali" },
  { id: "rajeel", name: "Rajeel Siddiqui", role: "Team Leader", image: "team-rajeel" },
  { id: "jane", name: "Jane Doe", role: "Frontend Developer", image: "team-frontend" },
  { id: "john", name: "John Smith", role: "Backend Developer", image: "team-backend" },
  { id: "emily", name: "Emily White", role: "Mobile App Developer", image: "team-mobile" },
  { id: "alex", name: "Alex Johnson", role: "AI Specialist", image: "team-ai" },
  { id: "sarah", name: "Sarah Brown", role: "UI/UX Designer", image: "team-uiux" },
  { id: "michael", name: "Michael Clark", role: "QA Engineer", image: "team-qa" },
];

export const teamData = allTeamMembers.filter(m => m.id !== 'ali' && m.id !== 'rajeel');

export const orgChartData = {
  manager: allTeamMembers.find(m => m.id === 'ali')!,
  teamLead: allTeamMembers.find(m => m.id === 'rajeel')!,
  employees: allTeamMembers.filter(m => !['ali', 'rajeel'].includes(m.id)),
};
