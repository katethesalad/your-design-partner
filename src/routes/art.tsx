import { createFileRoute } from "@tanstack/react-router";
import artOne from "@/assets/art-1.jpg";
import artTwo from "@/assets/art-2.jpg";
import artFour from "@/assets/art-4.jpg";

export const Route = createFileRoute("/art")({
  head: () => ({
    meta: [
      { title: "Art — Kate" },
      {
        name: "description",
        content: "A separate collection of personal artwork and illustration experiments by Kate.",
      },
      { property: "og:title", content: "Art — Kate" },
      {
        property: "og:description",
        content: "A separate collection of personal artwork and illustration experiments by Kate.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ArtPage,
});

const artworks = [
  { src: artOne, alt: "Abstract botanical illustration", shape: "md:col-span-2" },
  { src: artTwo, alt: "Colourful hand-drawn art study", shape: "" },
  { src: artFour, alt: "Playful organic illustration", shape: "" },
];

function ArtPage() {
  return (
    <main className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-display text-5xl italic md:text-6xl">Art, just because.</h1>
        <p className="mt-6 max-w-[44ch] text-pretty text-lg leading-relaxed text-muted-foreground">
          Personal drawings, colour studies and ideas made away from client work.
        </p>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {artworks.map((art) => (
            <figure
              key={art.src}
              className={`overflow-hidden rounded-[2rem] bg-card ring-1 ring-foreground/5 ${art.shape}`}
            >
              <img
                src={art.src}
                alt={art.alt}
                loading="lazy"
                className="h-full max-h-[48rem] w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </main>
  );
}