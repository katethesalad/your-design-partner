import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Sparkles, Phone, ArrowRight } from "lucide-react";
import { FeaturedWork } from "@/components/featured-work";
import { cn } from "@/lib/utils";
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

const phases = [
  {
    shape: "shape-triangle",
    color: "bg-[#e0ad34]",
    phase: "PHASE 1",
    title: "Discovery & Planning",
    duration: "1–2 weeks",
    desc: "We dig into your brand's story, audience, and goals through a questionnaire and a kick-off call.",
    details: [
      "Brand questionnaire & goals",
      "Audience & competitor research",
      "Creative direction moodboard",
      "Project scope & timeline",
    ],
  },
  {
    shape: "shape-pinched",
    color: "bg-[#cbaed3]",
    phase: "PHASE 2",
    title: "Strategy & Concepts",
    duration: "1–2 weeks",
    desc: "I translate research into a clear brand position and explore 2–3 visual routes on paper.",
    details: [
      "Brand strategy & positioning",
      "Hand-drawn concept sketches",
      "Colour & typography directions",
      "Moodboard refinement",
    ],
  },
  {
    shape: "shape-starburst",
    color: "bg-[#f58127]",
    phase: "PHASE 3",
    title: "Design & Craft",
    duration: "3–5 weeks",
    desc: "The chosen route becomes a full identity system: logo, type, colour, patterns, and mockups.",
    details: [
      "Logo system & variations",
      "Typography & colour palette",
      "Pattern, illustration & textures",
      "Brand mockups & applications",
    ],
  },
  {
    shape: "shape-triangle",
    color: "bg-[#e0ad34]",
    phase: "PHASE 4",
    title: "Refinement & Feedback",
    duration: "1–2 weeks",
    desc: "We review the designs together, gather feedback, and fine-tune every detail until it feels right.",
    details: [
      "Presentation of the full identity",
      "Two rounds of revisions",
      "Final polish & quality checks",
      "Approval & sign-off",
    ],
  },
  {
    shape: "shape-starburst",
    color: "bg-[#f58127]",
    phase: "PHASE 5",
    title: "Delivery & Launch",
    duration: "1 week",
    desc: "You receive production-ready files, guidelines, and support to launch with confidence.",
    details: [
      "Organised file exports",
      "Brand guidelines PDF",
      "Social templates & assets",
      "Launch support & handoff",
    ],
  },
];

function ProcessSection() {
  const [active, setActive] = useState(0);
  const current = phases[active]!;

  return (
    <section className="px-4 py-14 sm:px-6">
      <h2 className="mb-12 text-center font-sans text-4xl font-semibold tracking-tight sm:text-5xl">My Process</h2>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-10">
        <div className="relative overflow-x-auto px-2 pb-8 pt-2 snap-x sm:px-6">
          <div className="relative flex min-w-max items-start justify-between gap-6">
            <div className="absolute left-0 right-0 top-[4.25rem] h-px bg-foreground/10" />

            {phases.map((p, i) => {
              const isActive = active === i;
              return (
                <button
                  key={p.phase}
                  onClick={() => setActive(i)}
                  className="group relative flex min-w-[170px] flex-1 snap-start flex-col items-center text-center"
                >
                  <span
                    className={cn(
                      "rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-wide transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-foreground ring-1 ring-foreground/10"
                    )}
                  >
                    {p.phase}
                  </span>

                  <span
                    className={cn(
                      "relative z-10 mt-4 grid size-12 place-items-center rounded-full bg-white ring-1 ring-foreground/10 transition-all",
                      isActive
                        ? "scale-110 shadow-[0_10px_25px_-10px_rgba(0,0,0,0.25)] ring-foreground/20"
                        : "group-hover:scale-105"
                    )}
                    aria-hidden="true"
                  >
                    <span className={cn("size-5", p.shape, p.color)} />
                  </span>

                  <span className="mt-5 block text-sm font-semibold uppercase tracking-wide">
                    {p.title}
                  </span>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    {p.duration}
                  </span>
                  <span className="mt-3 block max-w-[200px] text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div
          key={active}
          className="mt-2 rounded-[2rem] bg-card p-6 ring-1 ring-foreground/5 animate-fade-in sm:p-8"
        >
          <h3 className="font-sans text-2xl font-semibold">{current.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{current.desc}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {current.details.map((detail) => (
              <li key={detail} className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                {detail}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/process"
            className="inline-flex rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground ring-1 ring-foreground/10 transition-colors hover:bg-secondary"
          >
            See the full process
          </Link>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main>
      <header className="relative flex flex-col items-center overflow-hidden px-6 pb-10 pt-8 text-center">
        <div className="blob-shape absolute -left-20 top-0 -z-10 size-64 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-petal opacity-60 blur-xl" />
        <div className="blob-shape absolute -right-10 top-20 -z-10 size-48 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-sun opacity-60 blur-xl [animation-delay:2s]" />

        <div className="rise-in mx-auto w-full max-w-5xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-foreground/10 px-4 py-1.5 text-[11px] font-medium tracking-wide text-muted-foreground">
            <span className="availability-dot size-1.5 rounded-full" />
            AVAILABLE FOR NEW PROJECTS
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


      <ProcessSection />

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

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Spark */}
            <div className="flex flex-col rounded-[1.75rem] bg-muted p-8">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground/10">
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/60" />
              </div>
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
