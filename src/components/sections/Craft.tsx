import { Reveal } from "@/components/common/Reveal";
import { CapsLabel, Eyebrow, Italic, SectionHeading } from "@/components/common/typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CRAFT_STEPS } from "@/data/site";

const LOOM_IMAGE =
  "https://images.unsplash.com/photo-1707978932202-751b08324daf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxjbG9zZSUyMHVwJTIwbWFjcm8lMjBvZiUyMGNhcnBldCUyMHdlYXZpbmclMjBsb29tJTIwdGhyZWFkcyUyMGFydGlzYW4lMjBoYW5kc3xlbnwwfHx8fDE3ODY5ODg4MjN8MA&ixlib=rb-4.1.0&q=85&w=1200";

export function Craft() {
  return (
    <section id="craft" className="relative border-t border-border bg-card">
      <div className="shell section-y">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal direction="left">
              <div className="relative overflow-hidden">
                <img
                  src={LOOM_IMAGE}
                  alt="Close-up of an artisan's hands weaving on a traditional loom, photo by mohammad hassan taheri on Unsplash"
                  width={1200}
                  height={1500}
                  loading="lazy"
                  className="aspect-4/5 w-full object-cover brightness-90"
                />
                <span aria-hidden="true" className="photo-vignette absolute inset-0 opacity-70" />
                <span className="absolute bottom-5 left-5">
                  <CapsLabel className="border-t border-gold/60 pt-2 text-[0.625rem] text-foreground/85">
                    On the loom · Srinagar
                  </CapsLabel>
                </span>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <Eyebrow>The Making</Eyebrow>
              <SectionHeading className="mt-6 max-w-[26ch] text-balance">
                Five stages, <Italic className="text-gold-soft">no shortcuts</Italic>.
              </SectionHeading>
            </Reveal>

            <Reveal delay={0.15} className="mt-10">
              <Accordion type="single" collapsible defaultValue="step-01" className="w-full">
                {CRAFT_STEPS.map((step) => (
                  <AccordionItem
                    key={step.step}
                    value={`step-${step.step}`}
                    className="border-b border-border"
                  >
                    <AccordionTrigger className="group/step gap-6 py-6 text-left hover:no-underline">
                      <span className="flex items-baseline gap-5">
                        <span className="caps-label text-[0.625rem] text-gold">{step.step}</span>
                        <span className="font-display text-xl leading-snug transition-colors duration-500 group-hover/step:text-gold-soft md:text-2xl">
                          {step.title}
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 pl-[3.4rem]">
                      <p className="max-w-prose text-sm leading-relaxed font-light text-muted-foreground">
                        {step.body}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
