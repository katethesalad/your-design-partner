import { createFileRoute, Link } from "@tanstack/react-router";
import { FeaturedWork } from "@/components/featured-work";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kate" },
      {
        name: "description",
        content:
          "Independent graphic designer creating tactile, illustration-led brand identities. See selected work, my design process, and how to start a project.",
      },
      { property: "og:title", content: "Kate" },
      {
        property: "og:description",
        content:
          "Independent graphic designer creating tactile, illustration-led brand identities. See selected work, my design process, and how to start a project.",
      },
    ],
  }),
  component: Index,
});

const phases = [
  {
    shape: "shape-triangle",
    color: "bg-[#e0ad34]",
    colorMuted: "bg-[#e0ad34]/40",
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
    colorMuted: "bg-[#cbaed3]/40",
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
    colorMuted: "bg-[#f58127]/40",
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
    colorMuted: "bg-[#e0ad34]/40",
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
    shape: "shape-pinched",
    color: "bg-[#cbaed3]",
    colorMuted: "bg-[#cbaed3]/40",
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
  return (
    <section className="px-4 pt-14 pb-10 sm:px-6">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 px-4 py-1.5 text-[11px] font-medium tracking-wide text-muted-foreground">
          02 <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" /> PROCESS
        </span>
      </div>
      <h2 className="mb-12 mt-6 text-center font-sans text-4xl font-semibold tracking-tight sm:text-5xl">My Process</h2>

      <div className="mx-auto max-w-6xl space-y-4">
        {phases.map((p) => (
          <div
            key={p.phase}
            className="flex items-start gap-4 rounded-[1.75rem] bg-card p-6 ring-1 ring-foreground/5 sm:p-7"
          >
            <span className={cn("mt-1 size-4 shrink-0", p.shape, p.color)} aria-hidden="true" />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <span className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                  {p.phase}
                </span>
                <span className="text-xs text-muted-foreground">{p.duration}</span>
              </div>
              <h3 className="mt-1.5 font-sans text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 max-w-[70ch] text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/process"
          className="inline-flex rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground ring-1 ring-foreground/10 transition-colors hover:bg-secondary"
        >
          See the full process
        </Link>
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
    </main>
  );
}
