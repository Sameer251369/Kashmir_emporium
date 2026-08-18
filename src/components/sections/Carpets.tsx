import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Phone } from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { CapsLabel, Eyebrow, Italic, SectionHeading } from "@/components/common/typography";
import { WhatsAppCta } from "@/components/common/WhatsAppCta";
import { CARPET_SPECS } from "@/data/site";
import { BUSINESS, WA_MESSAGES } from "@/lib/whatsapp";

const CARPET_IMAGE =
  "https://images.unsplash.com/photo-1634442747349-3a969d4432df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxoYW5kJTIwa25vdHRlZCUyMG9yaWVudGFsJTIwc2lsayUyMGNhcnBldCUyMHdpdGglMjBpbnRyaWNhdGUlMjBmbG9yYWwlMjBtZWRhbGxpb24lMjBwYXR0ZXJuJTIwZGFyayUyMG1vb2R5JTIwbGlnaHRpbmd8ZW58MHx8fHwxNzg2OTg4ODIwfDA&ixlib=rb-4.1.0&q=85&w=1600";

export function Carpets() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="carpets" ref={sectionRef} className="relative isolate overflow-hidden bg-ink-deep">
      <motion.div style={{ y: imageY }} className="absolute inset-0 -z-10 scale-110">
        <img
          src={CARPET_IMAGE}
          alt="Hand-knotted Kashmiri silk carpet with a floral medallion, photo by MERT MEHDI on Unsplash"
          width={1600}
          height={1067}
          loading="lazy"
          className="size-full object-cover"
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-deep via-ink-deep/85 to-ink-deep/40"
      />
      <div aria-hidden="true" className="grain absolute inset-0 -z-10 opacity-[0.06] mix-blend-overlay" />

      <div className="shell section-y">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Hand-Knotted Carpets</Eyebrow>
            <SectionHeading className="mt-6 text-balance">
              Silk carpets, knotted{" "}
              <Italic className="text-gold-soft">one thread at a time</Italic>.
            </SectionHeading>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="body-lead mt-7 text-foreground/75">
              Our carpet weavers work from a coded talim, tying up to 900 knots in a single square
              inch of mulberry silk. Send us your room size or a reference photo and we will show
              you what is on the loom right now.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <dl className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2">
              {CARPET_SPECS.map((spec) => (
                <div key={spec.label} className="bg-background/70 p-5 backdrop-blur-sm">
                  <dt className="caps-label text-[0.625rem] text-gold">{spec.label}</dt>
                  <dd className="mt-2 font-display text-lg leading-snug text-foreground">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.35} className="mt-10 flex flex-wrap items-center gap-4">
            <WhatsAppCta
              message={WA_MESSAGES.carpets}
              label="Enquire about carpets"
              showArrow
              size="lg"
            />
            <a
              href={`tel:${BUSINESS.phoneE164}`}
              className="caps-label inline-flex items-center gap-2 text-foreground/75 transition-colors hover:text-gold"
            >
              <Phone className="size-3.5" aria-hidden="true" />
              {BUSINESS.phoneDisplay}
            </a>
          </Reveal>

          <Reveal delay={0.45}>
            <CapsLabel className="mt-6 block text-[0.625rem] text-foreground/45">
              Chats open directly with {BUSINESS.proprietor} · {BUSINESS.responseTime}
            </CapsLabel>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
