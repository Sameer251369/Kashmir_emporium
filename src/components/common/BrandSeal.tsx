import { cn } from "@/lib/utils";

/**
 * Circular brand seal with curved lettering, echoing the stamped
 * showroom mark. Pure SVG so it stays crisp at any size.
 */
export function BrandSeal({ size = 48, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role="img"
      aria-label="Kashmir Emporium seal"
      className={cn("shrink-0", className)}
    >
      <defs>
        <path id="seal-arc-top" d="M60,60 m-46,0 a46,46 0 1,1 92,0" fill="none" />
        <path id="seal-arc-bottom" d="M60,60 m-40,0 a40,40 0 1,0 80,0" fill="none" />
      </defs>

      <circle cx="60" cy="60" r="58" fill="none" stroke="currentColor" strokeOpacity="0.55" />
      <circle cx="60" cy="60" r="51" fill="none" stroke="currentColor" strokeOpacity="0.25" />

      <text
        fill="currentColor"
        style={{ fontSize: "11px", letterSpacing: "2.6px", fontWeight: 500 }}
      >
        <textPath href="#seal-arc-top" startOffset="50%" textAnchor="middle">
          KASHMIR EMPORIUM
        </textPath>
      </text>

      <text fill="currentColor" style={{ fontSize: "9px", letterSpacing: "2.2px" }}>
        <textPath href="#seal-arc-bottom" startOffset="50%" textAnchor="middle">
          SRINAGAR · KASHMIR
        </textPath>
      </text>

      {/* stylised chinar leaf */}
      <g transform="translate(60 62)" fill="currentColor">
        <path d="M0,-20 C7,-13 12,-8 12,-1 C12,5 7,9 1,10 L1,19 L-1,19 L-1,10 C-7,9 -12,5 -12,-1 C-12,-8 -7,-13 0,-20 Z" />
        <path d="M0,-24 L2,-19 L-2,-19 Z" />
      </g>
    </svg>
  );
}
