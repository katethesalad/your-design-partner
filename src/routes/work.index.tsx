import { createFileRoute, Link } from "@tanstack/react-router";
import workMeadow from "@/assets/work-meadow.jpg";
import workCity from "@/assets/work-city.jpg";
import workKindred from "@/assets/work-kindred.jpg";
import workEditorial from "@/assets/work-editorial.jpg";
import tradeIslands from "@/assets/trade-islands.png.asset.json";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — Kate" },
      {
        name: "description",
        content:
          "Selected brand identity, packaging and editorial design projects by independent graphic designer Kate.",
      },
      { property: "og:title", content: "Work — Kate" },
      {
        property: "og:description",
        content:
          "Selected brand identity, packaging and editorial design projects by independent graphic designer Kate.",
      },
    ],
  }),
  component: WorkPage,
});

const projects = [
  {
    title: "Trade Islands Iced Tea",
    meta: "Branding, UI/UX, Packaging",
    body: "A full rebranding for a lemon iced tea, from logo and packaging to a bold lilac-and-gold visual identity.",
    image: tradeIslands.url,
    tint: "bg-sand",
    to: "/work/trade-islands-iced-tea",
  },
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
          {projects.map((p) => {
            if (p.to) {
              return (
                <Link
                  key={p.title}
                  to={p.to}
                  className="group flex flex-col gap-5 md:col-span-2"
                >
                  <div
                    className={`relative w-full overflow-hidden rounded-[2rem] ring-1 ring-foreground/5 ${p.tint}`}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="aspect-[16/7] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] md:aspect-[5/2]"
                    />
                  </div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <div>
                      <h2 className="font-sans text-2xl md:text-3xl">{p.title}</h2>
                      <p className="text-sm text-muted-foreground">{p.meta}</p>
                      <p className="mt-3 max-w-[55ch] text-pretty leading-relaxed">{p.body}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-medium">
                      View project
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              );
            }
            const card = (
              <article className="group space-y-4">
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
                  <h2 className="font-sans text-2xl">{p.title}</h2>
                  <p className="text-sm text-muted-foreground">{p.meta}</p>
                  <p className="mt-3 text-pretty leading-relaxed">{p.body}</p>
                </div>
              </article>
            );
            return card;
          })}
        </div>
      </div>
    </main>
  );
}
