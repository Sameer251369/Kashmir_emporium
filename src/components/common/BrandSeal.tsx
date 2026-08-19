import { cn } from "@/lib/utils";

export function BrandSeal({ size = 48, className }: { size?: number; className?: string }) {
  return (
    <img
      width={size}
      height={size}
      role="img"
      alt="Kashmir Emporium"
      src="/branding/kashmir-emporium-logo.jpeg"
      className={cn("shrink-0 object-cover", className)}
    />
  );
}
