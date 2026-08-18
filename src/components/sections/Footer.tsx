import { Mail, MapPin, Phone } from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { BrandSeal } from "@/components/common/BrandSeal";
import { CapsLabel } from "@/components/common/typography";
import { WhatsAppCta } from "@/components/common/WhatsAppCta";
import { BUSINESS, WA_MESSAGES } from "@/lib/whatsapp";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border">
      <div className="shell py-16 md:py-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand + tagline */}
          <Reveal direction="left" className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <BrandSeal size={40} className="text-gold" />
              <div>
                <div className="font-display text-base font-semibold text-foreground">
                  {BUSINESS.name}
                </div>
                <CapsLabel className="text-[0.6rem] text-foreground/60">
                  {BUSINESS.region}
                </CapsLabel>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-foreground/70">
              {BUSINESS.tagline}
            </p>
          </Reveal>

          {/* Navigation */}
          <Reveal delay={0.1} direction="left">
            <CapsLabel className="block text-[0.625rem] text-gold">Browse</CapsLabel>
            <nav aria-label="Footer" className="mt-5 space-y-2">
              {[
                { label: "Home", href: "#top" },
                { label: "Heritage", href: "#heritage" },
                { label: "Collections", href: "#collections" },
                { label: "Carpets", href: "#carpets" },
                { label: "Gallery", href: "#gallery" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-foreground/70 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </Reveal>

          {/* Direct contact */}
          <Reveal delay={0.15} direction="left">
            <CapsLabel className="block text-[0.625rem] text-gold">Contact</CapsLabel>
            <div className="mt-5 space-y-3">
              <a
                href={`tel:${BUSINESS.phoneE164}`}
                className="flex items-start gap-2 text-sm text-foreground/70 transition-colors hover:text-gold"
              >
                <Phone className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                <span>{BUSINESS.phoneDisplay}</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-foreground/70">
                <MapPin className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                <div>
                  <div>{BUSINESS.city}</div>
                  <div className="text-xs">{BUSINESS.region}</div>
                </div>
              </div>
              <div className="flex items-start gap-2 text-sm text-foreground/70">
                <Mail className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                <span className="text-xs">{BUSINESS.responseTime}</span>
              </div>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal delay={0.2} direction="left" className="flex flex-col justify-between">
            <div>
              <CapsLabel className="block text-[0.625rem] text-gold">Quick action</CapsLabel>
              <p className="mt-5 text-xs leading-relaxed text-foreground/60">
                Start a WhatsApp chat for live photos and pricing.
              </p>
            </div>
            <WhatsAppCta
              message={WA_MESSAGES.general}
              label="Message Us"
              showArrow
              size="sm"
              className="mt-6 w-full"
            />
          </Reveal>
        </div>

        {/* Bottom divider + copyright */}
        <div className="mt-12 border-t border-border/50 pt-8 md:mt-20 md:pt-12">
          <Reveal delay={0.25} className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-xs text-foreground/50">
              © {currentYear} {BUSINESS.name}. All pieces handmade.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#top"
                className="text-xs text-foreground/50 transition-colors hover:text-foreground/75"
              >
                Back to top
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </footer>
  );
}
