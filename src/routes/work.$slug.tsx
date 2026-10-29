import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { LightboxGallery } from "@/components/lightbox";
import { Reveal } from "@/components/reveal";
import { getProject, tagColors, type Project } from "@/lib/projects";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { slug: project.slug };
  },
  head: ({ loaderData }) => {
    const p = loaderData ? getProject(loaderData.slug) : undefined;
    if (!p) return { meta: [{ title: "Project not found — Kate" }, { name: "robots", content: "noindex" }] };
    const title = `${p.title} — Kate`;
    return {
      meta: [
        { title },
        { name: "description", content: p.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: p.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="px-6 py-24 text-center">
      <h1 className="font-sans text-4xl font-semibold">Project not found</h1>
      <Link to="/work" className="mt-6 inline-block underline">
        Back to work
      </Link>
    </div>
  ),
  component: ProjectPage,
});

function Pill({ label }: { label: string }) {
  return (
    <span
      className={`rounded-full border border-foreground/10 px-4 py-1.5 text-[11px] font-medium tracking-wide text-foreground ${tagColors[label] ?? "bg-[#D9DAD9]"}`}
    >
      {label}
    </span>
  );
}

function ProjectPage() {
  const { slug } = Route.useLoaderData();
  const p = getProject(slug) as Project;
  const gallery = [p.hero, ...p.sections.flatMap((s) => s.images)];
  let idx = 1;

  return (
    <LightboxGallery images={gallery}>
      {(open) => (
        <div className="px-4 pb-20 pt-10 md:px-6">
          <div className="mx-auto max-w-6xl">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Back to work
            </Link>

            <Reveal className="mt-8">
              <div className="rounded-[36px] border-2 border-foreground bg-background p-6 md:p-12">
                <h1 className="sr-only">{p.title}</h1>
                <div className="mb-6 flex flex-wrap gap-2 md:hidden">
                  {p.tags.map((t) => (
                    <Pill key={t} label={t} />
                  ))}
                </div>
                <p className="text-justify font-sans text-3xl font-bold leading-[1.12] tracking-tight md:text-6xl">
                  {p.statement}
                </p>
                <div className="mb-5 mt-14 flex flex-col gap-8 md:mb-0 md:mt-24 md:flex-row md:items-end md:justify-between">
                  <div className="flex flex-wrap gap-x-24 gap-y-6">
                    {[
                      { label: "Year", items: [p.year] },
                      { label: "Scope", items: p.scope },
                      { label: "Software", items: p.software },
                    ].map((col) => (
                      <div key={col.label}>
                        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          {col.label}
                        </p>
                        <div className="mt-3 space-y-0.5 text-sm md:text-base">
                          {col.items.map((i) => (
                            <p key={i}>{i}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="hidden flex-wrap gap-2 md:flex md:justify-end">
                    {p.tags.map((t) => (
                      <Pill key={t} label={t} />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="mt-6">
              <ImgButton img={p.hero} onClick={() => open(0)} />
            </Reveal>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Reveal className="md:col-span-2">
                <div className="h-full rounded-[24px] bg-card p-6 ring-1 ring-foreground/5">
                  <h2 className="font-sans text-2xl font-semibold tracking-tight">The brief</h2>
                  {p.brief.map((b) => (
                    <p key={b} className="mt-4 text-sm leading-relaxed md:text-base">
                      {b}
                    </p>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="h-full rounded-[24px] bg-card p-6 ring-1 ring-foreground/5">
                  <h2 className="font-sans text-2xl font-semibold tracking-tight">Deliverables</h2>
                  <ul className="mt-4 space-y-3">
                    {p.scope.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            {p.sections.map((s) => (
              <section key={s.title}>
                <Reveal className="mt-12">
                  <h2 className="font-sans text-5xl font-bold tracking-tight md:text-7xl">{s.title}</h2>
                  {s.description && (
                    <>
                      <p className="mt-8 text-[11px] font-medium tracking-wide text-muted-foreground">
                        DESCRIPTION
                      </p>
                      {s.description.map((d) => (
                        <p key={d} className="mt-2 max-w-xl text-sm leading-relaxed md:text-base">
                          {d}
                        </p>
                      ))}
                    </>
                  )}
                  {s.pill && (
                    <span className="mt-8 inline-flex rounded-full border border-foreground/20 px-4 py-1.5 text-[11px] font-medium tracking-wide text-foreground">
                      {s.pill}
                    </span>
                  )}
                </Reveal>
                <div className={`mt-8 grid gap-4 ${s.grid ? "md:grid-cols-2 md:items-start" : ""}`}>
                  {s.images.map((img) => {
                    const i = idx++;
                    return (
                      <Reveal key={img.alt}>
                        <ImgButton img={img} onClick={() => open(i)} />
                      </Reveal>
                    );
                  })}
                </div>
                {s.palette && (
                  <Reveal className="mt-4">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                      {s.palette.map((c) => (
                        <div key={c.hex} className="overflow-hidden rounded-[24px] bg-card ring-1 ring-foreground/5">
                          <div className="h-28" style={{ backgroundColor: c.hex }} />
                          <div className="p-4">
                            <p className="text-sm font-semibold">{c.name}</p>
                            <p className="text-xs text-muted-foreground">HEX {c.hex}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                )}
              </section>
            ))}

            <Reveal className="mt-12">
              <div className="rounded-[28px] bg-card p-8 text-center ring-1 ring-foreground/5 md:p-12">
                <h2 className="font-sans text-3xl font-semibold tracking-tight md:text-4xl">{p.cta}</h2>
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
            </Reveal>
          </div>
        </div>
      )}
    </LightboxGallery>
  );
}

function ImgButton({ img, onClick }: { img: { src: string; alt: string }; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} aria-label="Open fullscreen image" className="block w-full cursor-zoom-in">
      <img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        className="w-full rounded-[24px] object-cover transition-opacity hover:opacity-90"
      />
    </button>
  );
}
