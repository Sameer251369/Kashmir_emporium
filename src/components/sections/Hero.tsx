import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";

import { Reveal, RevealWords } from "@/components/common/Reveal";
import { CapsLabel } from "@/components/common/typography";
import { WhatsAppCta } from "@/components/common/WhatsAppCta";
import { Button } from "@/components/ui/button";
import { BUSINESS, WA_MESSAGES } from "@/lib/whatsapp";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.16]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      {/* AI-generated carpet film — muted, looping, decorative only */}
      <motion.div style={{ y: mediaY, scale: mediaScale }} className="absolute inset-0 -z-10">
        <video
          className="size-full object-cover"
          src="/media/hero-carpet.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
        />
      </motion.div>

      {/* legibility + warmth stack */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-deep/92 via-ink-deep/65 to-ink-deep/25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-ink-deep/30 to-ink-deep/55"
      />
      <div aria-hidden="true" className="ember-glow absolute inset-x-0 bottom-0 -z-10 h-1/2" />
      <div aria-hidden="true" className="grain absolute inset-0 -z-10 opacity-[0.05] mix-blend-overlay" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="shell relative pt-32 pb-16 md:pb-24"
      >
        <Reveal delay={0.1}>
          <CapsLabel className="text-gold">MG Road, Bengaluru</CapsLabel>
        </Reveal>

        <h1 className="display-hero mt-6 max-w-[22ch] text-balance">
          <RevealWords text="Handwoven Heritage." delay={0.2} as="div" />
          <RevealWords
            text="Carried Down Generations."
            delay={0.45}
            as="div"
            className="text-gold-soft"
            wordClassName="font-display italic"
          />
        </h1>

        <Reveal delay={0.75} className="mt-8 max-w-xl">
          <p className="body-lead text-foreground/75">
            Pure pashmina shawls, kani jamawar, sozni hand-embroidery and museum-grade
            hand-knotted carpets — sourced directly from the artisans who make them.
          </p>
        </Reveal>

        <Reveal
          delay={0.9}
          className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
        >
          <Button asChild size="lg" className="group/explore w-full sm:w-auto">
            <a href="#collections" className="inline-flex w-full items-center justify-center gap-2 sm:w-auto">
              Explore Collection
              <ArrowRight
                aria-hidden="true"
                className="transition-transform duration-500 group-hover/explore:translate-x-1"
              />
            </a>
          </Button>
          <WhatsAppCta
            message={WA_MESSAGES.general}
            variant="outline"
            className="w-full border-foreground/30 text-foreground hover:border-gold/70 hover:bg-gold/10 sm:w-auto"
          />
        </Reveal>

        {/* footer rail */}
        <div className="mt-16 flex flex-col items-center gap-3 md:mt-20 md:flex-row md:items-end md:justify-between">
          <div className="hidden flex-col items-center gap-3 md:flex">
            <CapsLabel className="text-[0.625rem] text-foreground/60">Scroll</CapsLabel>
            <span
              aria-hidden="true"
              className="animate-scroll-line block h-16 w-px bg-gradient-to-b from-gold to-transparent"
            />
          </div>

          <div className="w-full text-center md:w-auto md:text-right">
            <CapsLabel className="inline-block border-t border-gold/50 pt-2 text-foreground/80">
              {BUSINESS.name}
            </CapsLabel>
            <CapsLabel className="mt-2 block text-[0.625rem] text-foreground/50">
              Est. Bengaluru · Three Generations
            </CapsLabel>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
