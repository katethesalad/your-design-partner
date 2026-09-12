import { Link } from "@tanstack/react-router";
import workEditorial from "@/assets/work-editorial.jpg";

function ArrowBadge() {
  return (
    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-background text-primary ring-1 ring-foreground/10">
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
        {/* Top pill bar */}
        <div className="flex items-center justify-between rounded-[28px] bg-card px-5 py-4 ring-1 ring-foreground/5">
          <div className="flex items-center gap-3">
            <span className="rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider ring-1 ring-foreground/15">
              Popular
            </span>
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="text-center">
            <div className="font-display text-lg">Projects</div>
            <div className="mt-1 flex justify-center gap-1.5">
              <span className="size-1.5 rounded-full bg-foreground" />
              <span className="size-1.5 rounded-full bg-foreground" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider ring-1 ring-foreground/15">
              Featured
            </span>
          </div>
        </div>

        {/* Main panel */}
        <div className="rounded-[28px] bg-card p-5 ring-1 ring-foreground/5 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="font-display text-4xl leading-[1.05] tracking-tight md:text-5xl">
                Get started with
                <span className="ml-3 inline-grid size-7 place-items-center rounded-full bg-lilac align-middle">
                  <svg viewBox="0 0 24 24" className="size-3.5 text-lilac-foreground" fill="currentColor">
                    <path d="M4 5h16v10H9l-5 4z" />
                  </svg>
                </span>
              </h2>
              <div className="mt-1 flex items-baseline gap-3">
                <span className="font-mono text-sm text-muted-foreground">02</span>
                <h2 className="font-display text-4xl leading-[1.05] tracking-tight md:text-5xl">
                  my featured projects
                </h2>
              </div>
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
            <article className="flex flex-col rounded-[24px] bg-secondary p-4">
              <img
                src={workEditorial}
                alt="Editorial spread with organic illustrated shapes"
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full rounded-[18px] object-cover"
              />
              <h3 className="mt-5 font-display text-xl">Meadow &amp; Grain</h3>
              <p className="mt-3 text-sm leading-relaxed">
                A full identity for a slow-living florist,{" "}
                <span className="text-muted-foreground">built from hand-drawn botanical marks</span> and
                a warm paper palette.
              </p>
              <div className="mt-auto flex items-center justify-between pt-6">
                <Link to="/work" className="text-sm font-medium">
                  Read More
                </Link>
                <ArrowBadge />
              </div>
            </article>

            {/* Card 2 — colour feature */}
            <article className="relative flex flex-col overflow-hidden rounded-[24px] bg-lilac p-4 text-lilac-foreground">
              <svg
                viewBox="0 0 300 300"
                aria-hidden="true"
                className="pointer-events-none absolute -right-6 top-8 h-64 w-64 text-primary"
                fill="none"
                stroke="currentColor"
                strokeWidth="22"
                strokeLinecap="round"
              >
                <path d="M300 30C240 30 180 20 150 70s40 90 90 70-10 120-90 100-120-30-160-10" />
              </svg>

              <div className="relative flex w-fit items-center gap-3 rounded-full bg-card py-1.5 pl-1.5 pr-5">
                <span className="grid size-9 place-items-center rounded-full bg-accent font-display text-sm text-accent-foreground">
                  K
                </span>
                <span className="leading-tight">
                  <span className="block text-[11px] text-muted-foreground">Designer</span>
                  <span className="block text-sm font-medium">Kate</span>
                </span>
              </div>

              <h3 className="relative mt-24 font-display text-2xl text-card">City Rhythms</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-card/85">
                A risograph zine series printed in two inks — chosen as an AIGA "Best of Print" pick
                in 2024.
              </p>
              <div className="relative mt-auto flex items-center justify-between pt-8">
                <Link to="/work" className="text-sm font-medium text-card">
                  Read More
                </Link>
                <ArrowBadge />
              </div>
            </article>

            {/* Column 3 — two stacked cards */}
            <div className="flex flex-col gap-4">
              <article className="rounded-[24px] bg-secondary p-6">
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

              <article className="flex flex-col justify-between rounded-[24px] bg-secondary p-6">
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
