import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { Team } from '@/components/sections/team';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { OrgChart } from '@/components/sections/org-chart';
import { Faq } from '@/components/sections/faq';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Team />
      <Faq />
      <OrgChart />
      <Contact />
    </>
  );
}
