import { createFileRoute, Link } from "@tanstack/react-router";
import { FeaturedWork } from "@/components/featured-work";
import workMeadow from "@/assets/work-meadow.jpg";
import workCity from "@/assets/work-city.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sophie Arlo — Graphic Designer & Illustrator" },
      {
        name: "description",
        content:
          "Independent graphic designer creating tactile, illustration-led brand identities. See selected work, my design process and pricing.",
      },
      { property: "og:title", content: "Sophie Arlo — Graphic Designer & Illustrator" },
      {
        property: "og:description",
        content:
          "Independent graphic designer creating tactile, illustration-led brand identities. See selected work, my design process and pricing.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <header className="relative flex flex-col items-center px-6 pb-20 pt-16 text-center">
        <div className="blob-shape absolute -left-20 top-0 -z-10 size-64 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-petal opacity-60 blur-xl" />
        <div className="blob-shape absolute -right-10 top-20 -z-10 size-48 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-sun opacity-60 blur-xl [animation-delay:2s]" />

        <div className="rise-in mx-auto max-w-3xl">
          <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            Independent Graphic Designer
          </span>
          <h1 className="mb-6 text-balance font-display text-5xl italic leading-[0.9] md:text-7xl">
            Sophie <span className="text-accent">Arlo</span> creates tactile visual identities.
          </h1>
          <p className="mx-auto mb-10 max-w-[32ch] text-pretty text-lg leading-relaxed text-muted-foreground">
            Blending organic illustration with editorial precision to build brands that feel human
            and lived-in.
          </p>
          <div className="flex justify-center gap-4">
            <div className="grid size-12 animate-bounce place-items-center rounded-full border border-foreground/10">
              <span className="font-mono text-xs opacity-40">&darr;</span>
            </div>
          </div>
        </div>
      </header>

      <FeaturedWork />

      <section className="space-y-12 px-6 py-20">
        <div className="mx-auto flex max-w-6xl items-end justify-between border-b border-foreground/10 pb-4">
          <h2 className="font-display text-3xl italic">Selected Work</h2>
          <Link to="/work" className="font-mono text-xs text-muted-foreground hover:text-foreground">
            (view all)
          </Link>
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <Link to="/work" className="group space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-sky ring-1 ring-foreground/5">
              <img
                src={workMeadow}
                alt="Hand-drawn floral brand pattern in soft blues"
                loading="lazy"
                width={1080}
                height={1350}
                className="size-full object-cover"
              />
            </div>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-medium">Meadow &amp; Grain</h3>
                <p className="text-sm text-muted-foreground">Identity, Illustration, 2024</p>
              </div>
              <div className="grid size-10 place-items-center rounded-full border border-foreground/10 transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                &rarr;
              </div>
            </div>
          </Link>

          <Link to="/work" className="group space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-petal ring-1 ring-foreground/5">
              <img
                src={workCity}
                alt="Risograph zine cover with bold typographic shapes"
                loading="lazy"
                width={1080}
                height={1350}
                className="size-full object-cover"
              />
            </div>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-medium">City Rhythms</h3>
                <p className="text-sm text-muted-foreground">Editorial Design, 2023</p>
              </div>
              <div className="grid size-10 place-items-center rounded-full border border-foreground/10 transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                &rarr;
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="rounded-t-[3rem] bg-forest px-6 py-20 text-forest-foreground">
        <h2 className="mb-12 text-center font-display text-4xl italic">The Sketchbook Method</h2>
        <div className="mx-auto grid max-w-4xl gap-4">
          {[
            ["01 // Discovery", "We sit down for coffee and dig into your brand's soul."],
            ["02 // Sketching", "I move to paper first. Hundreds of messy, honest marks."],
            ["03 // Refining", "The best ideas get polished into a digital reality."],
          ].map(([step, text]) => (
            <div
              key={step}
              className="space-y-4 rounded-3xl border border-background/10 bg-background/5 p-8"
            >
              <span className="font-mono text-xs text-primary">{step}</span>
              <h3 className="text-xl">{text}</h3>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/process"
            className="inline-flex rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground"
          >
            See the full process
          </Link>
        </div>
      </section>

      <section className="bg-background px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 font-display text-3xl italic">Investment</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-6 rounded-[2rem] border border-foreground/5 bg-sun/40 p-8">
              <div>
                <h3 className="font-display text-2xl italic">Spark</h3>
                <p className="text-sm text-muted-foreground">For startups and small ventures.</p>
              </div>
              <div className="text-3xl font-medium italic">
                $2,400
                <span className="ml-2 font-mono text-xs not-italic text-muted-foreground">USD</span>
              </div>
              <ul className="space-y-2 text-sm opacity-80">
                <li>&mdash; Core Identity Pack</li>
                <li>&mdash; Colour &amp; Type Guide</li>
                <li>&mdash; Primary Wordmark</li>
              </ul>
              <Link
                to="/pricing"
                className="block w-full rounded-full bg-foreground py-4 text-center text-sm font-medium text-background"
              >
                Start here
              </Link>
            </div>

            <div className="space-y-6 rounded-[2rem] border border-foreground/5 bg-petal/40 p-8">
              <div>
                <h3 className="font-display text-2xl italic">Story</h3>
                <p className="text-sm text-muted-foreground">Deep identity and collateral.</p>
              </div>
              <div className="text-3xl font-medium italic">
                $4,800
                <span className="ml-2 font-mono text-xs not-italic text-muted-foreground">USD</span>
              </div>
              <ul className="space-y-2 text-sm opacity-80">
                <li>&mdash; Full Brand Suite</li>
                <li>&mdash; Custom Illustration Set</li>
                <li>&mdash; Social Media Kit</li>
              </ul>
              <Link
                to="/pricing"
                className="block w-full rounded-full bg-primary py-4 text-center text-sm font-medium text-primary-foreground"
              >
                Most loved
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
