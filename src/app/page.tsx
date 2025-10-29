import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { Team } from '@/components/sections/team';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { OrgChart } from '@/components/sections/org-chart';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Team />
      <OrgChart />
      <Contact />
    </>
  );
}
