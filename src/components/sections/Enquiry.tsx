import { useState } from "react";
import { Mail } from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { CapsLabel, Eyebrow, Italic, SectionHeading } from "@/components/common/typography";
import { WhatsAppCta } from "@/components/common/WhatsAppCta";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { BUSINESS, formatEnquiry, type EnquiryDraft } from "@/lib/whatsapp";
import { INTEREST_OPTIONS } from "@/data/site";

export function Enquiry() {
  const [enquiry, setEnquiry] = useState<EnquiryDraft>({
    intent: "retail",
    name: "",
    country: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleChange = (
    field: keyof EnquiryDraft,
    value: string
  ) => {
    setEnquiry((prev) => ({ ...prev, [field]: value }));
  };

  const isComplete =
    enquiry.name.trim() && enquiry.interest && enquiry.message.trim();

  const whatsappMessage = formatEnquiry(enquiry);

  return (
    <section id="enquire" className="relative border-t border-border">
      <div className="shell section-y">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left column — heading + guidance */}
          <Reveal direction="left" className="lg:sticky lg:top-28 lg:self-start lg:max-w-md">
            <Eyebrow>Get in Touch</Eyebrow>
            <SectionHeading className="mt-6 text-balance">
              Send us your <Italic className="text-gold-soft">enquiry directly</Italic>.
            </SectionHeading>
            <p className="body-lead mt-7 text-foreground/75">
              Answer a few quick questions and we&apos;ll send you photos, videos, and pricing of
              what&apos;s available right now. Replies usually within a few hours.
            </p>
            <div className="mt-8 flex items-center gap-2">
              <Mail className="size-4 text-gold" aria-hidden="true" />
              <CapsLabel className="text-[0.625rem] text-foreground/60">
                Chat on WhatsApp or email {BUSINESS.phoneDisplay}
              </CapsLabel>
            </div>
          </Reveal>

          {/* Right column — form */}
          <div className="space-y-7">
            {/* Intent toggle */}
            <Reveal delay={0.1}>
              <Label htmlFor="intent" className="text-xs font-semibold uppercase tracking-wider">
                I&apos;m enquiring for:
              </Label>
              <div className="mt-3 flex gap-3">
                <ToggleGroup
                  type="single"
                  value={enquiry.intent}
                  onValueChange={(value) =>
                    value && handleChange("intent", value as EnquiryDraft["intent"])
                  }
                  className="justify-start"
                >
                  <ToggleGroupItem value="retail" aria-label="Retail">
                    <span className="text-xs font-medium">Retail</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="wholesale" aria-label="Wholesale">
                    <span className="text-xs font-medium">Wholesale</span>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </Reveal>

            {/* Name */}
            <Reveal delay={0.15}>
              <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider">
                Your name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Your full name"
                value={enquiry.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="mt-2"
              />
            </Reveal>

            {/* Country */}
            <Reveal delay={0.2}>
              <Label htmlFor="country" className="text-xs font-semibold uppercase tracking-wider">
                Country <span className="text-foreground/40">(optional)</span>
              </Label>
              <Input
                id="country"
                type="text"
                placeholder="Your country"
                value={enquiry.country}
                onChange={(e) => handleChange("country", e.target.value)}
                className="mt-2"
              />
            </Reveal>

            {/* Phone */}
            <Reveal delay={0.25}>
              <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider">
                Phone <span className="text-foreground/40">(optional)</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={enquiry.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="mt-2"
              />
            </Reveal>

            {/* Interest */}
            <Reveal delay={0.3}>
              <Label htmlFor="interest" className="text-xs font-semibold uppercase tracking-wider">
                What are you interested in?
              </Label>
              <select
                id="interest"
                value={enquiry.interest}
                onChange={(e) => handleChange("interest", e.target.value)}
                className="mt-2 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">Select an option...</option>
                {INTEREST_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Reveal>

            {/* Message */}
            <Reveal delay={0.35}>
              <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider">
                Your message
              </Label>
              <Textarea
                id="message"
                placeholder="Tell us more about what you're looking for..."
                value={enquiry.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="mt-2 min-h-28 resize-none"
              />
            </Reveal>

            {/* CTA */}
            <Reveal delay={0.4}>
              <WhatsAppCta
                message={whatsappMessage}
                label={`Send Enquiry on WhatsApp`}
                showArrow
                disabled={!isComplete}
                className="w-full"
              />
              <p className="mt-3 text-xs text-foreground/50">
                You'll be taken to WhatsApp Web to send the message. If you prefer, you can also
                call {BUSINESS.phoneDisplay} directly.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
