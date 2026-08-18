import type { ComponentProps, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Small all-caps label with a hairline rule above it — used to open every section. */
export function Eyebrow({
  children,
  className,
  tone = "gold",
}: {
  children: ReactNode;
  className?: string;
  tone?: "gold" | "muted";
}) {
  return (
    <span
      className={cn(
        "caps-label inline-block border-t pt-2",
        tone === "gold" ? "border-gold/60 text-gold" : "border-border text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function DisplayHeading({
  as: Tag = "h1",
  className,
  children,
  ...props
}: { as?: ElementType; children: ReactNode } & ComponentProps<"h1">) {
  return (
    <Tag className={cn("display-hero text-foreground", className)} {...props}>
      {children}
    </Tag>
  );
}

export function SectionHeading({
  as: Tag = "h2",
  className,
  children,
  ...props
}: { as?: ElementType; children: ReactNode } & ComponentProps<"h2">) {
  return (
    <Tag className={cn("display-section text-foreground", className)} {...props}>
      {children}
    </Tag>
  );
}

export function CardHeading({
  as: Tag = "h3",
  className,
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return <Tag className={cn("display-card text-foreground", className)}>{children}</Tag>;
}

export function Lead({ className, children }: { className?: string; children: ReactNode }) {
  return <p className={cn("body-lead text-muted-foreground", className)}>{children}</p>;
}

export function CapsLabel({
  className,
  children,
  ...props
}: { children: ReactNode } & ComponentProps<"span">) {
  return (
    <span className={cn("caps-label text-muted-foreground", className)} {...props}>
      {children}
    </span>
  );
}

/** Serif italic accent used inside display headings for the second line. */
export function Italic({ children, className }: { children: ReactNode; className?: string }) {
  return <em className={cn("font-display italic", className)}>{children}</em>;
}
