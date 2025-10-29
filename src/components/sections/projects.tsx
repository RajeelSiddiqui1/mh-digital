"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { projectsData } from "@/lib/data";
import { MotionDiv } from "../motion-div";
import placeholderImages from "@/lib/placeholder-images.json";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


type ImagePlaceholder = {
  id: string;
  imageUrl: string;
  imageHint: string;
};

const imageMap = placeholderImages.placeholderImages.reduce((map, img) => {
  map[img.id] = img;
  return map;
}, {} as Record<string, ImagePlaceholder>);

const categories = ["All", "Web", "Mobile", "AI"];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);
  
  const useCarousel = filteredProjects.length > 4;

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.3 } },
  };

  const ProjectCard = ({ project }: { project: typeof projectsData[0] }) => (
     <MotionDiv
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="h-full"
    >
      <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={imageMap[project.image]?.imageUrl || ''}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={imageMap[project.image]?.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
          <CardDescription className="text-muted-foreground pt-2 flex-grow">{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
            <Button asChild variant="outline" className="w-full transition-colors duration-300 hover:bg-primary hover:text-primary-foreground">
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    View Details
                </Link>
            </Button>
        </CardFooter>
      </Card>
    </MotionDiv>
  )

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container">
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <div className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Work</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore a selection of our projects that showcase our commitment to quality and innovation.
            </p>
          </div>

          <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "rounded-full px-6 transition-all duration-300",
                  selectedCategory === category ? 'shadow-md' : 'text-muted-foreground'
                )}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <AnimatePresence mode="wait">
            {useCarousel ? (
               <Carousel
                opts={{ align: "start", loop: true }}
                className="w-full"
              >
                <CarouselContent>
                  {filteredProjects.map((project, index) => (
                    <CarouselItem key={`${project.title}-${index}`} className="md:basis-1/2">
                       <div className="p-1 h-full">
                        <ProjectCard project={project} />
                       </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            ) : (
              <div className="grid gap-8 md:grid-cols-2">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={`${project.title}-${index}`} project={project} />
                ))}
              </div>
            )}
            </AnimatePresence>

        </MotionDiv>
      </div>
    </section>
  );
}
