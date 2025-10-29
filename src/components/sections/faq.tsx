"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { MotionDiv } from "../motion-div";

const faqData = [
    {
        question: "What services do you offer?",
        answer: "We offer a wide range of digital services, including web and mobile app development, UI/UX design, AI-powered solutions, and cloud & hosting services. We are a one-stop-shop for all your digital needs."
    },
    {
        question: "Do you work with startups?",
        answer: "Absolutely! We love working with startups and helping them build their digital products from scratch. We provide guidance and support throughout the entire development process to ensure your vision comes to life."
    },
    {
        question: "What technologies do you specialize in?",
        answer: "Our team is proficient in a variety of modern technologies, including Next.js, React Native, Flutter, Laravel, .NET Core, and Python for AI. We choose the best tech stack to fit your project's needs."
    },
    {
        question: "How long does it take to build a website or app?",
        answer: "The timeline depends on the complexity and features of the project. A simple website can take a few weeks, while a more complex application might take several months. We provide a detailed timeline after our initial consultation."
    },
    {
        question: "What is your development process like?",
        answer: "We follow an agile development process that includes discovery, design, development, testing, and deployment. We maintain clear communication with our clients throughout the project to ensure we are aligned with their goals."
    }
];

export function Faq() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container">
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have questions? We have answers. If you can&apos;t find what you&apos;re looking for, feel free to contact us.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}
