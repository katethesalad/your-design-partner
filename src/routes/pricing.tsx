import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Sophie Arlo, Graphic Designer" },
      {
        name: "description",
        content: "Brand identity and illustration packages for thoughtful small businesses.",
      },
      { property: "og:title", content: "Pricing — Sophie Arlo, Graphic Designer" },
      {
        property: "og:description",
        content: "Brand identity and illustration packages for thoughtful small businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PricingPage,
});

const packages = [
  {
    name: "Spark",
    price: "$2,400 USD",
    intro: "For startups and small ventures ready for a clear visual foundation.",
    items: ["Core identity pack", "Colour and type guide", "Primary wordmark"],
    tint: "bg-sun/40",
  },
  {
    name: "Story",
    price: "$4,800 USD",
    intro: "For brands that need a fuller world built around their story.",
    items: ["Full brand suite", "Custom illustration set", "Social media kit"],
    tint: "bg-petal/40",
  },
];

function PricingPage() {
  return (
    <main className="relative px-6 py-16">
      <div className="blob-shape absolute -right-16 top-10 -z-10 size-56 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-lilac opacity-40 blur-xl" />
      <div className="mx-auto max-w-5xl">
        <h1 className="max-w-[14ch] text-balance font-display text-5xl italic leading-[0.95] md:text-6xl">
          A clear place to begin.
        </h1>
        <p className="mt-6 max-w-[48ch] text-pretty text-lg leading-relaxed text-muted-foreground">
          Two starting points for thoughtful identity work. Every project is shaped around what your
          business actually needs.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {packages.map((item) => (
            <article key={item.name} className={`space-y-7 rounded-[2rem] p-8 ${item.tint}`}>
              <div>
                <h2 className="font-display text-3xl italic">{item.name}</h2>
                <p className="mt-2 text-muted-foreground">{item.intro}</p>
              </div>
              <p className="text-3xl font-medium italic">{item.price}</p>
              <ul className="space-y-2 text-sm">
                {item.items.map((feature) => (
                  <li key={feature}>&mdash; {feature}</li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="block rounded-full bg-foreground px-6 py-4 text-center text-sm font-medium text-background"
              >
                Ask about {item.name}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}