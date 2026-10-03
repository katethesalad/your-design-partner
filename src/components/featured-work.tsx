import { Link } from "@tanstack/react-router";
import { LayoutGrid } from "lucide-react";
import tradeIslands from "@/assets/trade-islands.png";
import sonaraBudha from "@/assets/sonara-budha.png";
import krussRealEstate from "@/assets/kruss-real-estate.png";

function ArrowBadge() {
  return (
    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-card text-primary ring-1 ring-foreground/10">
      <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function FeaturedWork() {
  return (
    <section className="px-4 pb-10 pt-4 md:px-6">
      <div className="mx-auto max-w-6xl space-y-3">
        {/* Main panel */}
        <div className="rounded-[28px] bg-card p-5 ring-1 ring-foreground/5 md:p-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 px-4 py-1.5 text-[11px] font-medium tracking-wide text-muted-foreground">
              01 <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" /> FEATURED PROJECTS
            </span>
          </div>
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="font-sans text-4xl font-semibold tracking-tight md:text-5xl">
                My Featured Projects
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-relaxed md:pt-2">
              <span className="text-primary">My goal is to build brands with three</span> key
              characteristics — they have purpose, they are consistent, and they help cultivate a
              community around your mission.
            </p>
          </div>

          {/* Three cards */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {/* Card 1 */}
            <Link
              to="/work/trade-islands-iced-tea"
              className="group flex flex-col rounded-[24px] bg-background p-4 transition-shadow hover:shadow-md"
            >
              <img
                src={tradeIslands}
                alt="Trade Islands lemon iced tea can rebranding"
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full rounded-[18px] object-cover"
              />
              <h3 className="mt-5 font-display text-xl">Trade Islands Iced Tea</h3>
              <p className="mt-3 text-sm leading-relaxed">
                A full rebranding for a lemon iced tea,{" "}
                <span className="text-muted-foreground">from logo and packaging</span> to a bold
                lilac-and-gold visual identity.
              </p>
              <div className="mt-auto flex items-center justify-between pt-6">
                <span className="text-sm font-medium">Read More</span>
                <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowBadge />
                </span>
              </div>
            </Link>

            {/* Card 2 */}
            <article className="flex flex-col rounded-[24px] bg-background p-4">
              <img
                src={sonaraBudha}
                alt="Sonara Budha jewellers rebranding"
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full rounded-[18px] object-cover"
              />
              <h3 className="mt-5 font-display text-xl">Sonara Budha</h3>
              <p className="mt-3 text-sm leading-relaxed">
                A complete rebrand for a Kenyan jewelry store,{" "}
                <span className="text-muted-foreground">from logo and illustration</span> to
                elegant packaging and brand identity.
              </p>
              <div className="mt-auto flex items-center justify-between pt-6">
                <Link to="/work" className="text-sm font-medium">
                  Read More
                </Link>
                <ArrowBadge />
              </div>
            </article>

            {/* Column 3 — two stacked cards */}
            <div className="flex flex-col gap-4">
              <article className="rounded-[24px] bg-background p-4">
                <img
                  src={krussRealEstate}
                  alt="Kruss Real Estate rebranding"
                  loading="lazy"
                  className="aspect-[16/9] w-full rounded-[18px] object-cover"
                />
                <h3 className="mt-4 font-display text-xl leading-tight">Kruss Real Estate</h3>
                <p className="mt-3 text-sm leading-relaxed">
                  A rebranding for{" "}
                  <span className="text-primary">a real estate company in Mombasa</span> — a fresh,
                  trustworthy identity for homes by the coast.
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <Link to="/work" className="text-sm font-medium">
                    Read More
                  </Link>
                  <ArrowBadge />
                </div>
              </article>

              <Link
                to="/work"
                className="group flex flex-1 flex-col justify-between rounded-[24px] bg-background p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground">
                    <LayoutGrid className="size-5" strokeWidth={1.8} />
                  </span>
                  <svg viewBox="0 0 40 24" className="h-5 w-10 text-lilac transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M4 6l6 6-6 6M16 6l6 6-6 6M28 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="mt-6">
                  <h3 className="font-display text-xl leading-tight">View more projects</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Explore the full portfolio of brands, packaging and illustration.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
