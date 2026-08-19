import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";

import { BrandSeal } from "@/components/common/BrandSeal";
import { WhatsAppCta } from "@/components/common/WhatsAppCta";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { NAV_LINKS } from "@/data/site";
import { cn } from "@/lib/utils";
import { BUSINESS, WA_MESSAGES } from "@/lib/whatsapp";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-gradient-to-b from-ink-deep/70 to-transparent",
      )}
    >
      <div className="shell flex h-16 items-center justify-between gap-4 md:h-20">
        {/* left — desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="caps-label link-underline text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* mobile menu */}
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open menu" className="lg:hidden">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[min(88vw,20rem)] bg-background">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-3 text-left">
                <BrandSeal size={50} className="size-12 text-gold" />
                <span className="font-display text-lg">Kashmir Emporium</span>
              </SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobile" className="mt-2 flex flex-col px-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="caps-label border-b border-border py-4 text-foreground/80 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#enquire"
                onClick={() => setMenuOpen(false)}
                className="caps-label border-b border-border py-4 text-gold"
              >
                Enquire
              </a>
            </nav>
            <div className="mt-auto space-y-3 p-4">
              <WhatsAppCta message={WA_MESSAGES.general} label="Chat on WhatsApp" className="w-full" />
              <a
                href={`tel:${BUSINESS.phoneE164}`}
                className="caps-label flex items-center justify-center gap-2 border border-border py-3 text-foreground/80"
              >
                <Phone className="size-3.5" />
                {BUSINESS.phoneDisplay}
              </a>
            </div>
          </SheetContent>
        </Sheet>

        {/* centre — brand */}
        <a
          href="#top"
          aria-label="Kashmir Emporium — home"
          className="group flex items-center gap-3 lg:absolute lg:left-1/2 lg:-translate-x-1/2"
        >
          <BrandSeal
            size={64}
            className="size-12 text-foreground/85 group-hover:rotate-[8deg] md:size-16"
          />
        </a>

        {/* right — actions */}
        <div className="flex items-center gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={`tel:${BUSINESS.phoneE164}`}
                aria-label={`Call ${BUSINESS.phoneDisplay}`}
                className="hidden size-10 items-center justify-center border border-border text-foreground/70 transition-colors hover:border-gold/60 hover:text-gold md:inline-flex"
              >
                <Phone className="size-4" />
              </a>
            </TooltipTrigger>
            <TooltipContent>{BUSINESS.phoneDisplay}</TooltipContent>
          </Tooltip>

          <a href="#enquire" className="caps-label link-underline hidden text-foreground md:inline-block">
            Enquire
          </a>

          <WhatsAppCta
            message={WA_MESSAGES.general}
            label="WhatsApp"
            size="sm"
            className="md:hidden"
          />
        </div>
      </div>
    </header>
  );
}
