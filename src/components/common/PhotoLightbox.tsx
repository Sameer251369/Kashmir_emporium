import { useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { WhatsAppCta } from "@/components/common/WhatsAppCta";
import { CapsLabel } from "@/components/common/typography";
import { WA_MESSAGES } from "@/lib/whatsapp";

export type LightboxPhoto = { id: string; src: string; alt: string };

type PhotoLightboxProps = {
  photos: LightboxPhoto[];
  index: number | null;
  onIndexChange: (index: number | null) => void;
};

export function PhotoLightbox({ photos, index, onIndexChange }: PhotoLightboxProps) {
  const open = index !== null;
  const photo = index !== null ? photos[index] : undefined;

  const step = useCallback(
    (direction: 1 | -1) => {
      if (index === null) return;
      const next = (index + direction + photos.length) % photos.length;
      onIndexChange(next);
    },
    [index, photos.length, onIndexChange],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  return (
    <Dialog open={open} onOpenChange={(next) => !next && onIndexChange(null)}>
      <DialogContent className="max-w-[min(96vw,64rem)] border-border bg-ink-deep/95 p-0 backdrop-blur-sm sm:max-w-[min(92vw,64rem)]">
        <DialogTitle className="sr-only">
          {photo ? photo.alt : "Kashmir Emporium showroom photograph"}
        </DialogTitle>

        {photo ? (
          <div className="grid gap-0 md:grid-cols-[minmax(0,1fr)_18rem]">
            <div className="relative flex max-h-[78vh] items-center justify-center bg-black/50 p-2 sm:p-4">
              <img
                src={photo.src}
                alt={photo.alt}
                width={900}
                height={1200}
                className="max-h-[74vh] w-auto object-contain"
              />

              <Button
                variant="ghost"
                size="icon"
                aria-label="Previous photograph"
                onClick={() => step(-1)}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 text-foreground backdrop-blur-sm hover:bg-black/70"
              >
                <ChevronLeft className="size-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Next photograph"
                onClick={() => step(1)}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 text-foreground backdrop-blur-sm hover:bg-black/70"
              >
                <ChevronRight className="size-5" />
              </Button>
            </div>

            <div className="flex flex-col justify-between gap-6 border-t border-border p-6 md:border-t-0 md:border-l">
              <div className="space-y-4">
                <CapsLabel className="text-gold">Showroom piece</CapsLabel>
                <p className="font-display text-2xl leading-tight">Ref. {photo.id}</p>
                <p className="text-sm leading-relaxed font-light text-muted-foreground">
                  Photographed as-is inside our Srinagar showroom. Ask us for close-up videos,
                  exact measurements and pricing — pieces are one of a kind.
                </p>
              </div>

              <div className="space-y-3">
                <WhatsAppCta
                  message={WA_MESSAGES.piece(photo.id)}
                  label="Ask price on WhatsApp"
                  className="w-full"
                />
                <CapsLabel className="block text-center text-[0.625rem]">
                  {index !== null ? index + 1 : 0} / {photos.length}
                </CapsLabel>
              </div>
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
