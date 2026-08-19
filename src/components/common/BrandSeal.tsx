import { cn } from "@/lib/utils";

export function BrandSeal({ size = 48, className }: { size?: number; className?: string }) {
  return (
    <img
      width={size}
      height={size}
      role="img"
      alt="Kashmir Emporium"
      src="/branding/kashmir-emporium-logo.jpeg"
      className={cn(
        "shrink-0 rounded-full border border-gold/40 object-cover transition-all duration-500 group-hover:scale-105 group-hover:border-gold group-hover:shadow-[0_0_0_4px_rgba(196,154,82,0.16)]",
        className,
      )}
    />
  );
}
