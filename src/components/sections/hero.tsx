import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MotionDiv } from '@/components/motion-div';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-[-1] bg-gradient-to-br from-primary/20 via-background to-background animated-gradient dark:from-primary/10" />
      <div className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Building Digital Experiences with Code, Creativity, and Intelligence.
          </h1>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
        >
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            We create scalable websites, mobile apps, and AI systems that empower businesses.
          </p>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Button asChild size="lg">
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#contact">Get a Quote</Link>
          </Button>
        </MotionDiv>
      </div>
    </section>
  );
}
