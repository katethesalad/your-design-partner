import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logoAsset from "@/assets/logo.png.asset.json";

const links = [
  { to: "/work", label: "Work" },
  { to: "/process", label: "Process" },
  { to: "/pricing", label: "Pricing" },
  { to: "/art", label: "Art" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-foreground/5 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Kate logo"
            className="h-9 w-auto md:h-11"
          />
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-foreground px-5 py-2 text-background transition-colors duration-300 hover:bg-primary"
          >
            Let's chat
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid size-9 place-items-center rounded-full bg-foreground text-background md:hidden"
        >
          <span className="text-lg leading-none">{open ? "\u00d7" : "+"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-foreground/5 px-6 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-2 py-3 font-display text-2xl italic"
                activeProps={{ className: "text-primary" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-foreground px-5 py-3 text-center text-sm font-medium text-background"
            >
              Let's chat
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
