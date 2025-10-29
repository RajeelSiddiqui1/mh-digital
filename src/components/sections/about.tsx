import { Award, CheckCircle, Code, Smartphone, BrainCircuit, Cloud, Palette } from "lucide-react";
import { MotionDiv } from "../motion-div";

const services = [
  { icon: Code, title: "Web Development", technologies: "Laravel, .NET Core, MERN, Next.js" },
  { icon: Smartphone, title: "Mobile Apps", technologies: "Flutter, React Native" },
  { icon: BrainCircuit, title: "AI Solutions", technologies: "Chatbots, Automation, Predictive Systems" },
  { icon: Palette, title: "UI/UX Design", technologies: "Figma, Adobe XD" },
  { icon: Cloud, title: "Cloud & Hosting", technologies: "AWS, Azure, Google Cloud" },
];

export function About() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/50 dark:bg-secondary/20">
      <div className="container">
        <MotionDiv 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About MH Enterprise</h2>
                <p className="text-muted-foreground text-lg">
                  We are a dynamic team of developers, designers, and strategists passionate about building exceptional digital products. With a global clientele, we blend innovation with industry best practices to deliver solutions that drive growth and efficiency.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4 rounded-lg bg-background p-4 shadow-sm">
                  <Award className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold">6+ Years of Experience</h3>
                    <p className="text-muted-foreground">Delivering excellence and innovation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 rounded-lg bg-background p-4 shadow-sm">
                  <CheckCircle className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold">100+ Successful Projects</h3>
                    <p className="text-muted-foreground">Proven track record of success.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Our Core Services</h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <MotionDiv 
                    key={service.title}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-start space-x-4 group">
                      <div className="flex-shrink-0 rounded-md bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{service.title}</h4>
                        <p className="text-muted-foreground">{service.technologies}</p>
                      </div>
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
