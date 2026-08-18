import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { CardHeading, Eyebrow, Italic, Lead, SectionHeading } from "@/components/common/typography";
import { COLLECTIONS, type Collection } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";

function CollectionCard({ collection, index }: { collection: Collection; index: number }) {
  return (
    <Reveal delay={(index % 3) * 0.12} className="h-full">
      <a
        href={whatsappUrl(collection.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="group/card flex h-full flex-col outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
        aria-label={`Enquire about ${collection.title} on WhatsApp`}
      >
        <div className="relative aspect-4/5 overflow-hidden bg-muted">
          <img
            src={collection.image}
            alt={collection.imageAlt}
            width={800}
            height={1000}
            loading="lazy"
            className="size-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-[1.06]"
          />
          <div
            aria-hidden="true"
            className="photo-vignette absolute inset-0 opacity-90 transition-opacity duration-700 group-hover/card:opacity-60"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 border border-transparent transition-colors duration-500 group-hover/card:border-gold/40"
          />
        </div>

        <div className="flex items-start justify-between gap-4 pt-6">
          <CardHeading className="transition-colors duration-500 group-hover/card:text-gold-soft">
            {collection.title}
          </CardHeading>
          <ArrowUpRight
            aria-hidden="true"
            className="mt-1 size-5 shrink-0 text-muted-foreground transition-all duration-500 group-hover/card:translate-x-1 group-hover/card:-translate-y-1 group-hover/card:text-gold"
          />
        </div>
        <p className="mt-3 text-sm leading-relaxed font-light text-muted-foreground">
          {collection.description}
        </p>
      </a>
    </Reveal>
  );
}

export function Collections() {
  return (
    <section id="collections" className="relative border-t border-border">
      <div className="shell section-y">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <Eyebrow>Signature Collections</Eyebrow>
            <SectionHeading className="mt-6 text-balance">
              A curator&apos;s selection of Kashmir&apos;s{" "}
              <Italic className="text-gold-soft">finest handwork</Italic>.
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.15} className="md:max-w-xs">
            <Lead className="text-sm">
              Tap any collection to open WhatsApp — we reply with live photos, videos and prices of
              what is on the shelf today.
            </Lead>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {COLLECTIONS.map((collection, index) => (
            <CollectionCard key={collection.title} collection={collection} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
