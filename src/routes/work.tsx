import { createFileRoute } from "@tanstack/react-router";
import workMeadow from "@/assets/work-meadow.jpg";
import workCity from "@/assets/work-city.jpg";
import workKindred from "@/assets/work-kindred.jpg";
import workEditorial from "@/assets/work-editorial.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Sophie Arlo, Graphic Designer" },
      {
        name: "description",
        content:
          "Selected brand identity, packaging and editorial design projects by independent graphic designer Sophie Arlo.",
      },
      { property: "og:title", content: "Work — Sophie Arlo, Graphic Designer" },
      {
        property: "og:description",
        content:
          "Selected brand identity, packaging and editorial design projects by independent graphic designer Sophie Arlo.",
      },
    ],
  }),
  component: WorkPage,
});

const projects = [
  {
    title: "Meadow & Grain",
    meta: "Identity, Illustration — 2024",
    body: "A full visual identity for a slow-living florist collective, built from hand-drawn botanical marks and a soft paper palette.",
    image: workMeadow,
    tint: "bg-sky",
  },
  {
    title: "City Rhythms",
    meta: "Editorial Design — 2023",
    body: "A two-ink risograph zine series exploring the shapes of a city at night, printed in short runs on uncoated stock.",
    image: workCity,
    tint: "bg-petal",
  },
  {
    title: "Kindred Coffee",
    meta: "Packaging — 2025",
    body: "Kraft-and-ink packaging for a small-batch roastery, including labels, bags and a hand-lettered wordmark.",
    image: workKindred,
    tint: "bg-sand",
  },
  {
    title: "Field Notes Quarterly",
    meta: "Art Direction — 2025",
    body: "Layout system and illustrated section openers for an independent quarterly about growing things slowly.",
    image: workEditorial,
    tint: "bg-sun",
  },
];

function WorkPage() {
  return (
    <main className="relative px-6 py-16">
      <div className="blob-shape absolute -right-16 top-10 -z-10 size-56 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-sky opacity-60 blur-xl" />

      <div className="mx-auto max-w-6xl">
        <h1 className="max-w-[16ch] text-balance font-display text-5xl italic leading-[0.95] md:text-6xl">
          Work made with hands and patience.
        </h1>
        <p className="mt-6 max-w-[45ch] text-pretty text-lg leading-relaxed text-muted-foreground">
          A handful of identities, packaging systems and editorial projects. Each one starts on
          paper and ends as something a client can actually run with.
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="group space-y-4">
              <div
                className={`relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-foreground/5 ${p.tint}`}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div>
                <h2 className="font-display text-2xl">{p.title}</h2>
                <p className="text-sm text-muted-foreground">{p.meta}</p>
                <p className="mt-3 text-pretty leading-relaxed">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
