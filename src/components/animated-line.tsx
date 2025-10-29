"use client";

import { motion } from "framer-motion";

type AnimatedLineProps = {
  id: string;
  from: string;
  to: string;
};

export function AnimatedLine({ id, from, to }: AnimatedLineProps) {
  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const getPath = (isMobile: boolean) => {
    const fromEl = document.getElementById(from);
    const toEl = document.getElementById(to);
    const container = document.getElementById("org-chart-container");

    if (!fromEl || !toEl || !container) return "";

    const containerRect = container.getBoundingClientRect();
    const fromRect = fromEl.getBoundingClientRect();
    const toRect = toEl.getBoundingClientRect();

    const fromX = fromRect.left - containerRect.left + fromRect.width / 2;
    const fromY = fromRect.top - containerRect.top + fromRect.height;
    
    const toX = toRect.left - containerRect.left + toRect.width / 2;
    const toY = toRect.top - containerRect.top;

    if (isMobile) {
      // Straight line for mobile
      return `M ${fromX},${fromY} L ${toX},${toY}`;
    }

    // Curved line for desktop
    const midY = (fromY + toY) / 2;
    return `M ${fromX},${fromY} C ${fromX},${midY} ${toX},${midY} ${toX},${toY}`;
  };

  const pathDesktop = getPath(false);
  const pathMobile = getPath(true);
  
  if (!pathDesktop || !pathMobile) return null;

  return (
    <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
      <defs>
        <marker
          id={`arrowhead-${id}`}
          markerWidth="10"
          markerHeight="7"
          refX="0"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" className="fill-current text-primary" />
        </marker>
      </defs>
      {/* Desktop Path */}
      <motion.path
        d={pathDesktop}
        className="hidden md:block stroke-primary"
        fill="transparent"
        strokeWidth="2"
        markerEnd={`url(#arrowhead-${id})`}
        variants={lineVariants}
      />
      {/* Mobile Path */}
      <motion.path
        d={pathMobile}
        className="block md:hidden stroke-primary"
        fill="transparent"
        strokeWidth="2"
        markerEnd={`url(#arrowhead-${id})`}
        variants={lineVariants}
      />
    </svg>
  );
}
