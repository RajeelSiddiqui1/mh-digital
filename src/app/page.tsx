import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { Team } from '@/components/sections/team';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Team />
      <Contact />
    </>
  );
}
