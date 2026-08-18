import { Reveal } from "@/components/common/Reveal";
import { CapsLabel, Eyebrow, Italic, SectionHeading } from "@/components/common/typography";
import { useCountUp } from "@/hooks/useCountUp";
import { STATS } from "@/data/site";

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: current } = useCountUp(value);

  return (
    <div className="border-t border-border pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-8">
      <span ref={ref} className="display-numeral block text-foreground">
        {current}
        <span className="text-gold">{suffix}</span>
      </span>
      <span className="mt-4 block h-px w-8 bg-gold/70" aria-hidden="true" />
      <CapsLabel className="mt-4 block text-[0.625rem]">{label}</CapsLabel>
    </div>
  );
}

export function Heritage() {
  return (
    <section id="heritage" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="lattice absolute inset-0 -z-10 opacity-40" />

      <div className="shell section-y">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Heritage</Eyebrow>
            <SectionHeading className="mt-6 max-w-[24ch] text-balance">
              Three generations of Kashmiri <Italic className="text-gold-soft">craftsmanship</Italic>.
            </SectionHeading>
          </Reveal>

          <Reveal delay={0.15} className="space-y-6 lg:pt-14">
            <p className="body-lead">
              Kashmir Emporium began as a family loom in Srinagar and grew into a showroom that
              collectors, designers and hotels buy from directly. We do not resell mill goods —
              every shawl, stole and carpet here is made by a weaver or embroiderer we know by name.
            </p>
            <p className="body-lead">
              Because we sit between the artisan and you, there is no middle margin: you see the
              real piece on video, hear the honest grade, and pay the honest price.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-24 md:grid-cols-4 md:gap-0">
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.1}>
              <Stat value={stat.value} suffix={stat.suffix} label={stat.label} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
