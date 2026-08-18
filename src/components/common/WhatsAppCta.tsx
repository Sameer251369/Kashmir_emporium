import type { ComponentProps } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { whatsappUrl } from "@/lib/whatsapp";

type WhatsAppCtaProps = {
  message: string;
  label?: string;
  showArrow?: boolean;
} & Omit<ComponentProps<typeof Button>, "asChild" | "children">;

/** Primary conversion element of the site — opens WhatsApp with a pre-drafted message. */
export function WhatsAppCta({
  message,
  label = "WhatsApp Enquiry",
  showArrow = false,
  className,
  variant = "default",
  size = "lg",
  ...props
}: WhatsAppCtaProps) {
  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={cn("group/cta", className)}
      {...props}
    >
      <a
        href={whatsappUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} — opens WhatsApp chat`}
      >
        <MessageCircle aria-hidden="true" />
        {label}
        {showArrow ? (
          <ArrowUpRight
            aria-hidden="true"
            className="transition-transform duration-500 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
          />
        ) : null}
      </a>
    </Button>
  );
}
