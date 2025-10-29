"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { orgChartData } from "@/lib/data";
import placeholderImages from "@/lib/placeholder-images.json";
import { useRef, useEffect, useState } from "react";
import { AnimatedLine } from "../animated-line";
import { cn } from "@/lib/utils";

type ImagePlaceholder = {
  id: string;
  imageUrl: string;
  imageHint: string;
};

const imageMap = placeholderImages.placeholderImages.reduce((map, img) => {
  map[img.id] = img;
  return map;
}, {} as Record<string, ImagePlaceholder>);

type Member = {
  id: string;
  name: string;
  role: string;
  image: string;
};

const MemberCard = ({ member, id }: { member: Member; id: string }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      id={id}
      variants={cardVariants}
      className="flex flex-col items-center text-center"
    >
      <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 rounded-full">
        <Image
          src={imageMap[member.image]?.imageUrl || ""}
          alt={`Photo of ${member.name}`}
          fill
          className="object-cover rounded-full border-4 border-background dark:border-slate-800"
          data-ai-hint={imageMap[member.image]?.imageHint}
        />
      </div>
      <h3 className="font-bold text-lg">{member.name}</h3>
      <p className="text-primary text-sm">{member.role}</p>
    </motion.div>
  );
};

export function OrgChart() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ensure the component is mounted on the client before rendering lines
    setIsMounted(true);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="org-chart" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Structure</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Meet the leadership and the talented individuals driving our projects forward.
          </p>
        </div>

        <motion.div
          ref={ref}
          id="org-chart-container"
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {isMounted && isInView && (
            <>
              <AnimatedLine id="line-manager-lead" from="manager" to="team-lead" />
              {orgChartData.employees.map((employee) => (
                <AnimatedLine
                  key={employee.id}
                  id={`line-lead-${employee.id}`}
                  from="team-lead"
                  to={`employee-${employee.id}`}
                />
              ))}
            </>
          )}

          <div className="flex flex-col items-center gap-12 md:gap-16">
            {/* Manager */}
            <MemberCard member={orgChartData.manager} id="manager" />
            
            {/* Team Lead */}
            <MemberCard member={orgChartData.teamLead} id="team-lead" />

            {/* Employees */}
            <div className={cn(
              "grid gap-x-8 gap-y-12 w-full",
              "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
              // Dynamically adjust for 4 or 5 employees on large screens
              orgChartData.employees.length === 5 && "lg:grid-cols-5",
              orgChartData.employees.length === 4 && "lg:grid-cols-4",
              orgChartData.employees.length === 2 && "sm:grid-cols-2 lg:grid-cols-2"
            )}>
              {orgChartData.employees.map((employee) => (
                <MemberCard key={employee.id} member={employee} id={`employee-${employee.id}`} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
