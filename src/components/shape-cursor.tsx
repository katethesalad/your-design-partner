import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor: a small gold triangle that replaces the native cursor on
 * devices with a fine pointer (mouse / trackpad). Grows over interactive
 * elements and dips on click. Touch devices keep their native behaviour.
 */
export function ShapeCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    let visible = false;

    const show = () => {
      if (!visible) {
        visible = true;
        outer.style.opacity = "1";
      }
    };
    const hide = () => {
      visible = false;
      outer.style.opacity = "0";
    };

    const onMove = (e: MouseEvent) => {
      outer.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      show();
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const interactive = target?.closest?.(
        "a, button, [role='button'], input, textarea, select, label, summary",
      );
      inner.style.scale = interactive ? "1.7" : "1";
      inner.style.rotate = interactive ? "180deg" : "0deg";
    };

    const onDown = () => {
      inner.style.scale = "0.85";
    };
    const onUp = () => {
      inner.style.scale = "1";
    };
    const onLeave = (e: MouseEvent) => {
      if (!e.relatedTarget) hide();
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={outerRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[300] opacity-0"
    >
      <div
        ref={innerRef}
        className="shape-triangle h-4 w-4 bg-[#e0ad34] transition-[scale,rotate] duration-200 ease-out will-change-transform"
        style={{ translate: "-50% -62%" }}
      />
    </div>
  );
}
