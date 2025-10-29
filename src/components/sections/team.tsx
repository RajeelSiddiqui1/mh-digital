import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { teamData } from "@/lib/data";
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


export function Team() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="team" className="py-16 md:py-24 bg-secondary/50 dark:bg-secondary/20">
      <div className="container">
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <div className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Team</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The driving force behind our success is our team of dedicated and talented professionals.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teamData.map((member, index) => (
              <MotionDiv
                key={member.name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="text-center overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary">
                  <CardContent className="p-0">
                    <div className="relative h-48 w-full bg-muted">
                       <Image
                        src={imageMap[member.image]?.imageUrl || ''}
                        alt={`Photo of ${member.name}`}
                        fill
                        className="object-cover"
                        data-ai-hint={imageMap[member.image]?.imageHint}
                      />
                    </div>
                  </CardContent>
                  <CardHeader>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="text-primary">{member.role}</CardDescription>
                  </CardHeader>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
