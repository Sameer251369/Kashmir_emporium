import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Seamless infinite marquee. Children are rendered twice; the track translates
 * exactly -50% so the loop is invisible.
 */
export function Marquee({
  children,
  reverse = false,
  className,
  trackClassName,
}: {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
  trackClassName?: string;
}) {
  return (
    <div
      className={cn(
        "group/marquee relative flex w-full overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max shrink-0",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          "group-hover/marquee:[animation-play-state:paused]",
          trackClassName,
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
