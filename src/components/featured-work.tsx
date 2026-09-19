import { Link } from "@tanstack/react-router";
import tradeIslands from "@/assets/trade-islands.png.asset.json";
import sonaraBudha from "@/assets/sonara-budha.png.asset.json";

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
            <article className="flex flex-col rounded-[24px] bg-background p-4">
              <img
                src={tradeIslands.url}
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
                <Link to="/work" className="text-sm font-medium">
                  Read More
                </Link>
                <ArrowBadge />
              </div>
            </article>

            {/* Card 2 */}
            <article className="flex flex-col rounded-[24px] bg-background p-4">
              <img
                src={sonaraBudha.url}
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
              <article className="rounded-[24px] bg-background p-6">
                <h3 className="font-display text-xl leading-tight">
                  Kindred Coffee <br /> Packaging
                </h3>
                <p className="mt-4 text-sm leading-relaxed">
                  A kraft-and-ink range for{" "}
                  <span className="text-primary">a small-batch roastery</span> — labels, bags and a
                  hand-lettered wordmark.
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <Link to="/work" className="text-sm font-medium">
                    Read More
                  </Link>
                  <ArrowBadge />
                </div>
              </article>

              <article className="flex flex-col justify-between rounded-[24px] bg-background p-6">
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground">
                    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M4 14v-2a8 8 0 1 1 16 0v2" strokeLinecap="round" />
                      <rect x="2.5" y="13" width="4" height="6" rx="2" fill="currentColor" stroke="none" />
                      <rect x="17.5" y="13" width="4" height="6" rx="2" fill="currentColor" stroke="none" />
                    </svg>
                  </span>
                  <svg viewBox="0 0 40 24" className="h-5 w-10 text-lilac" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M4 6l6 6-6 6M16 6l6 6-6 6M28 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="mt-6 text-sm leading-relaxed">
                  <span className="text-muted-foreground">The studio which promises to</span> make
                  your brand feel handmade and human.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
