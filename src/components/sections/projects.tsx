import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/lib/data";
import { MotionDiv } from "../motion-div";
import placeholderImages from "@/lib/placeholder-images.json";

type ImagePlaceholder = {
  id: string;
  imageUrl: string;
  imageHint: string;
};

const imageMap = placeholderImages.placeholderImages.reduce((map, img) => {
  map[img.id] = img;
  return map;
}, {} as Record<string, ImagePlaceholder>);


export function Projects() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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

          <div className="grid gap-8 md:grid-cols-2">
            {projectsData.map((project, index) => (
              <MotionDiv
                key={project.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={project.link} target="_blank" rel="noopener noreferrer" className="group block">
                  <Card className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="p-0">
                      <div className="relative h-60 w-full overflow-hidden">
                        <Image
                          src={imageMap[project.image]?.imageUrl || ''}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={imageMap[project.image]?.imageHint}
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                         <ArrowUpRight className="absolute top-4 right-4 h-6 w-6 text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>
                      <div className="p-6">
                        <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
