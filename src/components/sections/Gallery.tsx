import { useState } from "react";

import { PhotoLightbox } from "@/components/common/PhotoLightbox";
import { Reveal } from "@/components/common/Reveal";
import { CapsLabel, Eyebrow, Italic, Lead, SectionHeading } from "@/components/common/typography";
import { SHAWL_PHOTOS } from "@/data/site";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative border-t border-border">
      <div className="shell section-y">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <Eyebrow>From the Showroom</Eyebrow>
            <SectionHeading className="mt-6 text-balance">
              Real pieces, <Italic className="text-gold-soft">photographed on the shelf</Italic>.
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.15} className="md:max-w-xs">
            <Lead className="text-sm">
              No studio styling and no stock images — these are shot inside our Srinagar showroom.
              Tap a piece to enlarge it and ask for its price.
            </Lead>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-14">
          <div className="columns-2 gap-4 sm:gap-5 md:columns-3 xl:columns-4">
            {SHAWL_PHOTOS.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Enlarge showroom piece ${photo.id}`}
                className="group/photo relative mb-4 block w-full overflow-hidden bg-muted outline-none sm:mb-5 focus-visible:ring-2 focus-visible:ring-gold/60"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={760}
                  height={1013}
                  loading="lazy"
                  className="w-full object-cover brightness-[0.82] saturate-[0.92] transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/photo:scale-[1.05] group-hover/photo:brightness-105 group-hover/photo:saturate-100"
                />
                {/* keeps the busy showroom background quiet, as the client asked */}
                <span
                  aria-hidden="true"
                  className="photo-vignette pointer-events-none absolute inset-0 opacity-95 transition-opacity duration-700 group-hover/photo:opacity-45"
                />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between p-4 opacity-0 transition-opacity duration-500 group-hover/photo:opacity-100">
                  <CapsLabel className="text-[0.625rem] text-foreground">Ref. {photo.id}</CapsLabel>
                  <CapsLabel className="text-[0.625rem] text-gold">View</CapsLabel>
                </span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <PhotoLightbox photos={SHAWL_PHOTOS} index={activeIndex} onIndexChange={setActiveIndex} />
    </section>
  );
}
