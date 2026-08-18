import { Quote } from "lucide-react";

import { Marquee } from "@/components/common/Marquee";
import { Reveal } from "@/components/common/Reveal";
import { CapsLabel, Eyebrow, Italic, SectionHeading } from "@/components/common/typography";
import { TESTIMONIALS } from "@/data/site";

function TestimonialCard({
  quote,
  author,
  location,
}: {
  quote: string;
  author: string;
  location: string;
}) {
  return (
    <figure className="mr-5 flex w-[19rem] shrink-0 flex-col justify-between border border-border bg-card/70 p-7 transition-colors duration-500 hover:border-gold/40 sm:w-[23rem]">
      <Quote aria-hidden="true" className="size-5 text-gold/70" />
      <blockquote className="mt-5 font-display text-lg leading-snug text-foreground/90">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 border-t border-border pt-4">
        <span className="block font-display text-base text-foreground">{author}</span>
        <CapsLabel className="mt-1 block text-[0.625rem]">{location}</CapsLabel>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const firstRow = TESTIMONIALS.slice(0, 3);
  const secondRow = TESTIMONIALS.slice(3).concat(TESTIMONIALS.slice(0, 2));

  return (
    <section id="clients" className="relative border-t border-border">
      <div className="shell pt-[clamp(4.5rem,9vw,9rem)]">
        <Reveal className="max-w-2xl">
          <Eyebrow>In Their Words</Eyebrow>
          <SectionHeading className="mt-6 text-balance">
            Bought once, <Italic className="text-gold-soft">recommended often</Italic>.
          </SectionHeading>
        </Reveal>
      </div>

      <div className="mt-12 space-y-5 pb-[clamp(4.5rem,9vw,9rem)]">
        <Marquee>
          {firstRow.map((item, index) => (
            <TestimonialCard key={`row1-${item.author}-${index}`} {...item} />
          ))}
        </Marquee>
        <Marquee reverse>
          {secondRow.map((item, index) => (
            <TestimonialCard key={`row2-${item.author}-${index}`} {...item} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
