import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kate" },
      {
        name: "description",
        content: "Get in touch with Kate about a graphic design, identity or illustration project.",
      },
      { property: "og:title", content: "Contact — Kate" },
      {
        property: "og:description",
        content: "Get in touch with Kate about a graphic design, identity or illustration project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="relative px-6 py-20 text-center">
      <div className="blob-shape absolute -left-20 top-8 -z-10 size-64 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-petal opacity-60 blur-xl" />
      <div className="mx-auto max-w-3xl">
        <span className="font-mono text-xs uppercase text-primary">Start a project</span>
        <h1 className="mt-5 text-balance font-display text-5xl italic leading-[0.95] md:text-7xl">
          Let&apos;s make something that feels like you.
        </h1>
        <p className="mx-auto mt-7 max-w-[42ch] text-pretty text-lg leading-relaxed text-muted-foreground">
          Tell me a little about your business, what you need and when you hope to begin.
        </p>
        <a
          href="mailto:katekhanbek@gmail.com"
          className="mx-auto mt-10 block w-fit rounded-full bg-foreground px-8 py-4 font-medium text-background transition-colors hover:bg-primary"
        >
          katekhanbek@gmail.com
        </a>
        <Link
          to="/pricing"
          className="mt-6 inline-block font-mono text-xs text-muted-foreground underline decoration-foreground/20 underline-offset-4 hover:text-foreground"
        >
          View pricing first
        </Link>
      </div>
    </main>
  );
}