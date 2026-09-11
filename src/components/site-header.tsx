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
    <nav className="sticky top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      <div className="relative mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center rounded-full border border-card/60 bg-card/55 py-2 pl-3 pr-2 shadow-sm backdrop-blur-xl md:pl-5 md:pr-2">
        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
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
        </div>

        <div aria-hidden="true" className="md:hidden" />

        <Link to="/" className="flex items-center justify-self-center">
          <img
            src="/logo.png"
            alt="Kate logo"
            className="h-5 w-auto md:h-7"
          />
        </Link>

        <div className="hidden justify-self-end md:block">
          <Link
            to="/contact"
            className="rounded-full bg-[#e0ad34] px-5 py-2 text-background transition-colors duration-300 hover:bg-foreground"
          >
            Let's chat
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid size-9 place-items-center justify-self-end rounded-full bg-foreground text-background md:hidden"
        >
          <span className="text-lg leading-none">{open ? "\u00d7" : "+"}</span>
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-card/60 bg-card/70 px-4 pb-4 pt-2 shadow-sm backdrop-blur-xl md:hidden">
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
