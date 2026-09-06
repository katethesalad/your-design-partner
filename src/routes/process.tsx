import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "My Design Process — Sophie Arlo" },
      {
        name: "description",
        content:
          "How I work: discovery, sketching, refining and handover. A clear four-step design process so you always know what happens next.",
      },
      { property: "og:title", content: "My Design Process — Sophie Arlo" },
      {
        property: "og:description",
        content:
          "How I work: discovery, sketching, refining and handover. A clear four-step design process so you always know what happens next.",
      },
    ],
  }),
  component: ProcessPage,
});

const steps = [
  {
    n: "01",
    title: "Discovery",
    body: "We sit down for coffee — in person or on a call — and dig into your brand's soul. Who you're for, what you sell, what you never want to look like.",
    detail: "Week 1",
  },
  {
    n: "02",
    title: "Sketching",
    body: "I move to paper first. Hundreds of messy, honest marks before anything touches a screen. This is where the character of the brand shows up.",
    detail: "Week 1–2",
  },
  {
    n: "03",
    title: "Refining",
    body: "The strongest direction gets built out properly: type, colour, illustration, and every awkward real-world application we can think of.",
    detail: "Week 2–3",
  },
  {
    n: "04",
    title: "Handover",
    body: "Final files, a short guideline document and a call to walk you through it, so you can use the whole thing confidently without me.",
    detail: "Week 4",
  },
];

function ProcessPage() {
  return (
    <main className="relative px-6 py-16">
      <div className="blob-shape absolute -left-20 top-6 -z-10 size-64 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-sun opacity-60 blur-xl" />

      <div className="mx-auto max-w-4xl">
        <h1 className="max-w-[16ch] text-balance font-display text-5xl italic leading-[0.95] md:text-6xl">
          My design process
        </h1>
        <p className="mt-6 max-w-[45ch] text-pretty text-lg leading-relaxed text-muted-foreground">
          Four steps, roughly four weeks. Nothing mysterious — you'll always know where we are and
          what's coming next.
        </p>

        <div className="mt-16 space-y-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-[2rem] border border-foreground/5 bg-card p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs text-primary">{s.n}</span>
                <span className="font-mono text-xs text-muted-foreground">{s.detail}</span>
              </div>
              <h2 className="mt-4 font-display text-2xl italic">{s.title}</h2>
              <p className="mt-3 text-pretty leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] bg-forest p-10 text-center text-forest-foreground">
          <h2 className="font-display text-3xl italic">Sound like a good fit?</h2>
          <p className="mx-auto mt-3 max-w-[40ch] text-pretty opacity-80">
            Have a look at what each kind of project costs, or just send me a note about what you're
            making.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/pricing"
              className="rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground"
            >
              See pricing
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-background/20 px-6 py-3 text-sm font-medium"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
