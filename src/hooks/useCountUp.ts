import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

/**
 * Counts from 0 to `target` once the element scrolls into view.
 * Returns a ref to attach to the element and the current display value.
 */
export function useCountUp(target: number, duration = 1600) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration]);

  return { ref, value };
}
