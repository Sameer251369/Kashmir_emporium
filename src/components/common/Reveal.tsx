import type { ReactNode } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Distance in px the element travels into place. */
  distance?: number;
  direction?: "up" | "left" | "right";
  once?: boolean;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 28,
  direction = "up",
  once = true,
}: RevealProps) {
  const offset =
    direction === "up"
      ? { y: distance, x: 0 }
      : direction === "left"
        ? { x: -distance, y: 0 }
        : { x: distance, y: 0 };

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-12% 0px -8% 0px" }}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Reveals a heading word by word — used for the hero and section titles. */
export function RevealWords({
  text,
  className,
  wordClassName,
  delay = 0,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  as?: "span" | "div";
}) {
  const words = text.split(" ");

  return (
    <Tag className={cn("inline-block", className)}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className={cn("inline-block", wordClassName)}
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: 0.9,
              delay: delay + index * 0.07,
              ease: EASE,
            }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
