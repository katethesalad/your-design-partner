import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type LightboxImage = {
  src: string;
  alt: string;
};

/**
 * Wrap images in this gallery to make them clickable and openable fullscreen.
 * Renders children untouched and shows a fullscreen overlay when one of the
 * images is clicked. Close with the X, a click outside the image, or Escape.
 * Navigate with the arrows or the left/right arrow keys.
 */
export function LightboxGallery({
  images,
  children,
}: {
  images: LightboxImage[];
  children: (
    open: (index: number) => void,
  ) => React.ReactNode;
}) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((cur) =>
        cur === null ? cur : (cur + dir + images.length) % images.length,
      ),
    [images.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active, close, step]);

  return (
    <>
      {children((index) => setActive(index))}
      {active !== null && images[active] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4 md:p-10 animate-fade-in"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={images[active].alt}
        >
          <img
            src={images[active].src}
            alt={images[active].alt}
            className="max-h-full max-w-full rounded-[18px] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            aria-label="Close fullscreen image"
            onClick={close}
            className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-background/90 text-foreground transition-colors hover:bg-background md:right-6 md:top-6"
          >
            <X className="size-5" />
          </button>
          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                className="absolute left-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground transition-colors hover:bg-background md:left-6"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                className="absolute right-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground transition-colors hover:bg-background md:right-6"
              >
                <ChevronRight className="size-5" />
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
