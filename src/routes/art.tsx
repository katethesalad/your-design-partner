import { createFileRoute } from "@tanstack/react-router";
import art1 from "@/assets/art-piece-1.jpg";
import art2 from "@/assets/art-piece-2.jpg";
import art3 from "@/assets/art-piece-3.jpg";
import art4 from "@/assets/art-piece-4.jpg";
import art5 from "@/assets/art-piece-5.jpg";

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
  { src: art1, alt: "Artwork by Kate 1", shape: "md:col-span-2" },
  { src: art2, alt: "Artwork by Kate 2", shape: "" },
  { src: art3, alt: "Artwork by Kate 3", shape: "" },
  { src: art4, alt: "Artwork by Kate 4", shape: "" },
  { src: art5, alt: "Artwork by Kate 5", shape: "" },
];

function ArtPage() {
  return (
    <main className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-sans text-5xl font-semibold tracking-tight md:text-6xl">Art besides design</h1>
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