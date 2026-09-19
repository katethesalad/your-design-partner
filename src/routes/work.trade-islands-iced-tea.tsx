import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import tradeIslands from "@/assets/trade-islands.png.asset.json";

export const Route = createFileRoute("/work/trade-islands-iced-tea")({
  head: () => ({
    meta: [
      { title: "Trade Islands Iced Tea — Kate" },
      {
        name: "description",
        content:
          "A full rebranding case study for Trade Islands Iced Tea — logo, packaging, UI and UX for a lemon iced tea with a bold lilac-and-gold visual identity.",
      },
      { property: "og:title", content: "Trade Islands Iced Tea — Kate" },
      {
        property: "og:description",
        content:
          "A full rebranding case study for Trade Islands Iced Tea — logo, packaging, UI and UX with a bold lilac-and-gold visual identity.",
      },
    ],
  }),
  component: TradeIslandsPage,
});

const disciplines = [
  { label: "BRANDING", color: "bg-[#e0ad34]" },
  { label: "UI/UX", color: "bg-[#D9DAD9]" },
  { label: "PACKAGING", color: "bg-[#cbaed3]" },
];

const deliverables = [
  "Logo & wordmark redesign",
  "Packaging & label system",
  "Lilac-and-gold visual identity",
  "Website UI & UX",
];

const highlights = [
  {
    title: "A refreshed mark",
    body: "The new logo keeps the brand's island spirit but leans into a bold, contemporary feel — confident letterforms with a sun-and-wave motif that works from a can lid all the way up to a storefront.",
  },
  {
    title: "Packaging that pops",
    body: "The can design pairs a rich lilac base with warm gold accents so the range stands out on the shelf while staying unmistakably refreshing. A simple layout system makes it easy to extend to new flavours.",
  },
  {
    title: "Digital, done right",
    body: "The UI and UX work carries the same identity online — a light, summery interface where the product photography and the lilac-and-gold palette do the talking.",
  },
];

function TradeIslandsPage() {
  return (
    <div className="px-4 pb-20 pt-10 md:px-6">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to home
        </Link>

        {/* Hero */}
        <div className="mt-8 rounded-[28px] bg-card p-5 ring-1 ring-foreground/5 md:p-10">
          <div className="flex flex-wrap gap-2">
            {disciplines.map((d) => (
              <span
                key={d.label}
                className={`rounded-full border border-foreground/10 px-4 py-1.5 text-[11px] font-medium tracking-wide text-foreground ${d.color}`}
              >
                {d.label}
              </span>
            ))}
          </div>
          <h1 className="mt-6 font-sans text-4xl font-semibold tracking-tight md:text-6xl">
            Trade Islands Iced Tea
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            A full rebranding for a lemon iced tea — from logo and packaging to a bold
            lilac-and-gold visual identity, carried through the brand's digital experience.
          </p>
          <img
            src={tradeIslands.url}
            alt="Trade Islands Iced Tea can with lilac-and-gold branding"
            width={1200}
            height={900}
            className="mt-8 aspect-[4/3] w-full rounded-[18px] object-cover"
          />
        </div>

        {/* Overview + deliverables */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-[24px] bg-card p-6 ring-1 ring-foreground/5 md:col-span-2">
            <h2 className="font-sans text-2xl font-semibold tracking-tight">The brief</h2>
            <p className="mt-4 text-sm leading-relaxed md:text-base">
              Trade Islands wanted to grow from a local favourite into a brand people recognise at
              a glance. The rebrand needed to keep the easy, sunny character of the original while
              giving it a bolder shelf presence and a consistent look across packaging and digital.
            </p>
            <p className="mt-4 text-sm leading-relaxed md:text-base">
              We landed on a lilac-and-gold identity: playful but premium, with a flexible system
              that stretches from cans and labels to the website without losing its voice.
            </p>
          </div>
          <div className="rounded-[24px] bg-card p-6 ring-1 ring-foreground/5">
            <h2 className="font-sans text-2xl font-semibold tracking-tight">Deliverables</h2>
            <ul className="mt-4 space-y-3">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {highlights.map((h) => (
            <div key={h.title} className="rounded-[24px] bg-card p-6 ring-1 ring-foreground/5">
              <h3 className="font-sans text-lg font-semibold tracking-tight">{h.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 rounded-[28px] bg-card p-8 text-center ring-1 ring-foreground/5 md:p-12">
          <h2 className="font-sans text-3xl font-semibold tracking-tight md:text-4xl">
            Want a rebrand like this?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Let's build something people recognise at a glance.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center rounded-full bg-[#e0ad34] px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Let's chat
          </Link>
        </div>
      </div>
    </div>
  );
}
