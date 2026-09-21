import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import tradeIslands from "@/assets/trade-islands.png";
import tradeIslandsPackaging from "@/assets/trade-islands-packaging-2.png";
import canBlueberry from "@/assets/trade-islands-can-blueberry.webp";
import canLemon from "@/assets/trade-islands-can-lemon.webp";
import canOrange from "@/assets/trade-islands-can-orange.png";
import { LightboxGallery } from "@/components/lightbox";

const heroImage = {
  src: tradeIslands,
  alt: "Trade Islands Iced Tea can with lilac-and-gold branding",
};

const packagingImage = {
  src: tradeIslandsPackaging,
  alt: "Trade Islands Iced Tea packaging — three cans and a set of playful fruit patterns",
};

const flavourCans = [
  { asset: canBlueberry, alt: "Trade Islands Blueberry Iced Tea can close-up" },
  { asset: canLemon, alt: "Trade Islands Lemon Iced Tea can close-up" },
  { asset: canOrange, alt: "Trade Islands Orange Iced Tea can close-up" },
];

const galleryImages = [
  heroImage,
  packagingImage,
  ...flavourCans.map((c) => ({ src: c.asset, alt: c.alt })),
];

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
    <LightboxGallery images={galleryImages}>
      {(open) => (
        <div className="px-4 pb-20 pt-10 md:px-6">
          <div className="mx-auto max-w-6xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Back to home
            </Link>

            {/* Intro */}
            <div className="mt-8 rounded-[36px] border-2 border-foreground bg-background p-6 md:p-12">
              <h1 className="sr-only">Trade Islands Iced Tea</h1>
              <p className="text-justify font-sans text-3xl font-bold leading-[1.12] tracking-tight md:text-6xl">
                Trade Islands is the go-to brand for premium iced teas, offering a refreshing
                range of tropical flavors perfect for every occasion.
              </p>
              <div className="mt-14 flex flex-col gap-8 md:mt-24 md:flex-row md:items-end md:justify-between">
                <div className="flex flex-wrap gap-x-24 gap-y-6">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Year
                    </p>
                    <p className="mt-3 text-sm md:text-base">2024</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Scope
                    </p>
                    <div className="mt-3 space-y-0.5 text-sm md:text-base">
                      <p>Branding</p>
                      <p>Website</p>
                      <p>Packaging</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Software
                    </p>
                    <div className="mt-3 space-y-0.5 text-sm md:text-base">
                      <p>Illustrator</p>
                      <p>Photoshop</p>
                      <p>XD</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {disciplines.map((d) => (
                    <span
                      key={d.label}
                      className={`rounded-full border border-foreground/10 px-4 py-1.5 text-[11px] font-medium tracking-wide text-foreground ${d.color}`}
                    >
                      {d.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => open(0)}
              aria-label="Open fullscreen image"
              className="mt-6 block w-full cursor-zoom-in"
            >
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                width={1200}
                height={900}
                className="aspect-[4/3] w-full rounded-[18px] object-cover transition-opacity hover:opacity-90"
              />
            </button>

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

            {/* Packaging section */}
            <div className="mt-8">
              <h2 className="font-sans text-5xl font-bold tracking-tight md:text-7xl">Packaging</h2>
              <p className="mt-8 text-[11px] font-medium tracking-wide text-muted-foreground">
                DESCRIPTION
              </p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed md:text-base">
                The packaging for Trade Islands Iced Tea was designed to capture a vibrant, carefree
                island spirit. Inspired by tropical landscapes and laid-back beach culture, the visual
                language leans into bright, sun-soaked colors and playful, organic shapes that evoke
                movement and warmth. Fluid forms and beachy hues work together to create a sense of
                refreshment and escape, reinforcing the product's light, easygoing personality. The
                overall aesthetic is bold yet approachable, positioning the brand as both fun and
                inviting while clearly communicating its tropical essence.
              </p>
              <span className="mt-8 inline-flex rounded-full border border-foreground/20 px-4 py-1.5 text-[11px] font-medium tracking-wide text-foreground">
                PATTERN
              </span>
            </div>
            <button
              type="button"
              onClick={() => open(1)}
              aria-label="Open fullscreen image"
              className="mt-8 block w-full cursor-zoom-in"
            >
              <img
                src={packagingImage.src}
                alt={packagingImage.alt}
                width={1335}
                height={1920}
                className="w-full rounded-[24px] object-cover transition-opacity hover:opacity-90"
              />
            </button>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {flavourCans.map((can, i) => (
                <button
                  key={can.alt}
                  type="button"
                  onClick={() => open(2 + i)}
                  aria-label="Open fullscreen image"
                  className="block w-full cursor-zoom-in"
                >
                  <img
                    src={can.asset}
                    alt={can.alt}
                    width={1200}
                    height={1200}
                    className="w-full rounded-[24px] object-cover transition-opacity hover:opacity-90"
                  />
                </button>
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
      )}
    </LightboxGallery>
  );
}
