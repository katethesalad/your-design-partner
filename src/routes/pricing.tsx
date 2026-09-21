import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Sparkles, Phone, ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Kate" },
      {
        name: "description",
        content:
          "Brand identity and illustration packages for thoughtful small businesses. Spark, Story and Bloom — expand each package to see the full scope.",
      },
      { property: "og:title", content: "Pricing — Kate" },
      {
        property: "og:description",
        content:
          "Brand identity and illustration packages for thoughtful small businesses. Spark, Story and Bloom — expand each package to see the full scope.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PricingPage,
});

const packages = [
  {
    name: "Spark",
    price: "$2,400",
    intro: "For startups and small ventures.",
    included: ["Core Identity Pack", "Colour & Type Guide", "Primary Wordmark"],
    details: [
      "Timeline: 2–3 weeks",
      "One round of revisions",
      "Print-ready & web file exports",
      "Intro call & brand questionnaire",
    ],
    featured: false,
  },
  {
    name: "Story",
    price: "$4,800",
    intro: "Deep identity and collateral.",
    included: ["Full Brand Suite", "Custom Illustration Set", "Social Media Kit"],
    details: [
      "Timeline: 4–6 weeks",
      "Two rounds of revisions",
      "Brand guidelines PDF",
      "Patterns, textures & mockups",
      "Priority scheduling",
    ],
    featured: true,
  },
  {
    name: "Bloom",
    price: "$8,900",
    intro: "The full garden, end to end.",
    included: ["Packaging & Print Design", "Art Direction Support", "3 Months of Design Care"],
    details: [
      "Timeline: 8–12 weeks",
      "Unlimited revisions during the care period",
      "Print production oversight",
      "Ongoing design support & updates",
    ],
    featured: false,
  },
];

function PackageCard({ item, index }: { item: (typeof packages)[number]; index: number }) {
  const [open, setOpen] = useState(false);

  const card = (
    <div
      className={cn(
        "flex h-full flex-col",
        item.featured ? "rounded-[calc(2rem-2px)] bg-white p-8" : "rounded-[1.75rem] bg-white p-8",
      )}
    >
      <h2 className="text-lg font-semibold">{item.name}</h2>
      <p className="mt-1 text-sm text-muted-foreground">{item.intro}</p>
      <div className="mt-5 text-4xl font-semibold tracking-tight">
        {item.price}
        <span className="ml-1 text-sm font-normal text-muted-foreground">USD</span>
      </div>
      <hr className="my-6 border-foreground/10" />
      <p className="text-xs font-medium text-muted-foreground">What's included:</p>
      <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
        {item.included.map((f) => (
          <li key={f} className="flex items-center gap-2.5">
            <Check className="h-3.5 w-3.5 shrink-0 text-foreground" /> {f}
          </li>
        ))}
      </ul>

      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="mt-5 rounded-2xl bg-background/70 p-5">
            <p className="text-xs font-medium text-muted-foreground">Full scope & details:</p>
            <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
              {item.details.map((d) => (
                <li key={d} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" /> {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-6 inline-flex items-center justify-center gap-1.5 self-start rounded-full px-4 py-2 text-xs font-medium text-muted-foreground ring-1 ring-foreground/10 transition-colors hover:bg-secondary hover:text-foreground"
      >
        {open ? "Show less" : "Expand details"}
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", open && "rotate-180")} />
      </button>
    </div>
  );

  if (!item.featured) return card;

  return (
    <div className="relative rounded-[2rem] bg-[linear-gradient(120deg,#e0ad34,#cbaed3,#f58127,#cbaed3,#e0ad34)] p-[2px] shadow-[0_24px_55px_-20px_rgba(0,0,0,0.22)] md:-mt-5">
      <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-[#e0ad34] via-[#cbaed3] to-[#f58127] px-4 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
        <Sparkles className="h-3 w-3" /> Recommended
      </span>
      {card}
    </div>
  );
}

function PricingPage() {
  return (
    <main className="relative px-4 py-16 sm:px-6">
      <div className="blob-shape absolute -right-16 top-10 -z-10 size-56 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-lilac opacity-40 blur-xl" />
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-balance font-sans text-4xl font-semibold tracking-tight sm:text-5xl">
            A clear place to begin.
          </h1>
          <p className="mx-auto mt-4 max-w-[48ch] text-pretty text-sm text-muted-foreground">
            Whether you're starting small or scaling fast, there's a package that fits. Expand each
            package to see the full scope.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {packages.map((item, i) => (
            <PackageCard key={item.name} item={item} index={i} />
          ))}
        </div>

        {/* Consultation banner */}
        <div className="mt-8 flex flex-col items-center rounded-[1.75rem] bg-[radial-gradient(at_0%_0%,#e0ad34_0px,transparent_50%),radial-gradient(at_100%_0%,#cbaed3_0px,transparent_55%),radial-gradient(at_100%_100%,#f58127_0px,transparent_50%),radial-gradient(at_0%_100%,#e0ad34_0px,transparent_55%)] px-8 py-10 text-center">
          <div className="flex items-center justify-center">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <Phone className="h-4 w-4" />
            </span>
          </div>
          <h2 className="mt-4 text-lg font-semibold">Not sure which package is right for you?</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Book a free 30-minute intro call and we'll figure it out together.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/85"
          >
            Book a free consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
