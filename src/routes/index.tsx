import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Sparkles, Phone, ArrowRight } from "lucide-react";
import { FeaturedWork } from "@/components/featured-work";
import workMeadow from "@/assets/work-meadow.jpg";
import workCity from "@/assets/work-city.jpg";
import heroArtwork from "@/assets/sophie-arlo-hero-art.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kate" },
      {
        name: "description",
        content:
          "Independent graphic designer creating tactile, illustration-led brand identities. See selected work, my design process and pricing.",
      },
      { property: "og:title", content: "Kate" },
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
      <header className="relative flex flex-col items-center overflow-hidden px-6 pb-10 pt-8 text-center">
        <div className="blob-shape absolute -left-20 top-0 -z-10 size-64 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-petal opacity-60 blur-xl" />
        <div className="blob-shape absolute -right-10 top-20 -z-10 size-48 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-sun opacity-60 blur-xl [animation-delay:2s]" />

        <div className="rise-in mx-auto w-full max-w-5xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-card/60 px-4 py-1.5 font-sans text-[11px] lowercase tracking-wide text-foreground backdrop-blur-md">
            <span className="availability-dot size-1.5 rounded-full" />
            available for new projects
          </span>
          <h1 className="sr-only">Kate creates tactile visual identities</h1>
          <div className="relative mx-auto mb-4">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
              <span className="confetti confetti-triangle left-[8%] top-[19%] bg-logo-orange [animation-delay:-1.4s]" />
              <span className="confetti confetti-pill left-[19%] top-[68%] bg-logo-yellow [animation-delay:-3.2s]" />
              <span className="confetti confetti-pinched left-[31%] top-[10%] bg-logo-pink [animation-delay:-2.1s]" />
              <span className="confetti confetti-starburst left-[44%] top-[79%] bg-logo-orange [animation-delay:-4.6s]" />
              <span className="confetti confetti-pill right-[38%] top-[16%] bg-logo-yellow [animation-delay:-.7s]" />
              <span className="confetti confetti-pinched right-[24%] top-[72%] bg-logo-pink [animation-delay:-3.8s]" />
              <span className="confetti confetti-triangle right-[12%] top-[29%] bg-logo-orange [animation-delay:-2.7s]" />
              <span className="confetti confetti-pill right-[6%] top-[61%] bg-logo-yellow [animation-delay:-5.1s]" />
            </div>
            <img
              src="/art3.png"
              alt="Kate logo illustrated with hand-drawn pastel confetti"
              width={1920}
              height={1119}
              className="hero-artwork mx-auto h-auto w-full"
            />
          </div>
          <div className="flex justify-center gap-4">
            <div className="grid size-12 animate-bounce place-items-center rounded-full border border-foreground/10">
              <span className="font-mono text-xs opacity-40">&darr;</span>
            </div>
          </div>
        </div>
      </header>

      <FeaturedWork />

      <section className="space-y-9 px-6 py-12">
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

      <section className="rounded-t-[3rem] bg-forest px-6 py-14 text-forest-foreground">
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

      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-white px-6 py-14 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.15)] sm:px-12">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 px-4 py-1.5 text-[11px] font-medium tracking-wide text-muted-foreground">
              004 <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" /> INVESTMENT
            </span>
            <h2 className="mt-6 font-sans text-4xl font-semibold tracking-tight sm:text-5xl">
              Design for Every Stage
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Whether you're starting small or scaling fast, there's a package that fits.
            </p>
          </div>

          <div className="relative mt-12">
            <div className="absolute inset-x-0 top-8 bottom-8 hidden rounded-[2rem] bg-muted md:block" />
            <div className="relative grid gap-6 md:grid-cols-3">
            {/* Spark */}
            <div className="flex flex-col rounded-[1.75rem] bg-muted p-8 md:bg-transparent">
              <h3 className="mt-6 text-lg font-semibold">Spark</h3>
              <p className="mt-1 text-sm text-muted-foreground">For startups and small ventures.</p>
              <div className="mt-5 text-4xl font-semibold tracking-tight">
                $2,400
                <span className="ml-1 text-sm font-normal text-muted-foreground">USD</span>
              </div>
              <hr className="my-6 border-foreground/10" />
              <p className="text-xs font-medium text-muted-foreground">What's included:</p>
              <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
                {["Core Identity Pack", "Colour & Type Guide", "Primary Wordmark"].map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <Check className="h-3.5 w-3.5 shrink-0 text-foreground" /> {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/pricing"
                className="mt-auto block w-full rounded-full bg-foreground py-3.5 text-center text-sm font-medium text-background transition-colors hover:bg-foreground/85"
              >
                Start here
              </Link>
            </div>

            {/* Story — most popular */}
            <div className="relative flex flex-col rounded-[1.75rem] border border-foreground/10 bg-white p-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.18)]">
              <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-foreground/10 px-3 py-1 text-[10px] font-medium">
                <Sparkles className="h-3 w-3" /> Most Popular
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-petal">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">Story</h3>
              <p className="mt-1 text-sm text-muted-foreground">Deep identity and collateral.</p>
              <div className="mt-5 text-4xl font-semibold tracking-tight">
                $4,800
                <span className="ml-1 text-sm font-normal text-muted-foreground">USD</span>
              </div>
              <hr className="my-6 border-foreground/10" />
              <p className="text-xs font-medium text-muted-foreground">Everything in Spark, plus:</p>
              <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
                {["Full Brand Suite", "Custom Illustration Set", "Social Media Kit"].map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <Check className="h-3.5 w-3.5 shrink-0 text-foreground" /> {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/pricing"
                className="mt-auto block w-full rounded-full bg-foreground py-3.5 text-center text-sm font-medium text-background transition-colors hover:bg-foreground/85"
              >
                Get the Story package
              </Link>
            </div>

            {/* Bloom */}
            <div className="flex flex-col rounded-[1.75rem] bg-muted p-8">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground/10">
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/60" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">Bloom</h3>
              <p className="mt-1 text-sm text-muted-foreground">The full garden, end to end.</p>
              <div className="mt-5 text-4xl font-semibold tracking-tight">
                $8,900
                <span className="ml-1 text-sm font-normal text-muted-foreground">USD</span>
              </div>
              <hr className="my-6 border-foreground/10" />
              <p className="text-xs font-medium text-muted-foreground">Everything in Story, plus:</p>
              <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
                {["Packaging & Print Design", "Art Direction Support", "3 Months of Design Care"].map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <Check className="h-3.5 w-3.5 shrink-0 text-foreground" /> {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/pricing"
                className="mt-auto block w-full rounded-full bg-foreground py-3.5 text-center text-sm font-medium text-background transition-colors hover:bg-foreground/85"
              >
                Get the Bloom package
              </Link>
            </div>
          </div>

          {/* Consultation banner */}
          <div className="mt-8 flex flex-col items-center rounded-[1.75rem] bg-[linear-gradient(120deg,#f9eec4,#f5d5ef_35%,#d9e4fb_70%,#fdf3d8)] px-8 py-10 text-center">
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 font-display text-lg italic">
                K.
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <Phone className="h-4 w-4" />
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold">Not sure which package is right for you?</h3>
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
      </section>
    </main>
  );
}
