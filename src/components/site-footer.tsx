import pigeonAsset from "@/assets/pigeon.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-6xl space-y-8 px-6 py-14 text-center">
      <img
        src={pigeonAsset.url}
        alt="Pigeon mascot"
        width={880}
        height={905}
        className="mx-auto h-40 w-auto drop-shadow-sm"
      />
      <div className="relative inline-block">
        <div className="absolute -right-10 -top-10 size-20 rounded-full bg-accent/20 blur-xl" />
        <h2 className="font-sans text-4xl italic leading-tight">
          Ready to make <br /> something <span className="text-primary">real</span>?
        </h2>
      </div>

      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        Currently taking new projects for Q3
      </p>

      <a
        href="mailto:katekhanbek@gmail.com"
        className="mx-auto block w-fit border-b-2 border-foreground/10 pb-2 text-2xl font-medium transition-colors hover:border-primary"
      >
        katekhanbek@gmail.com
      </a>

      <div className="flex justify-center gap-6 pt-10">
        <a href="#" className="font-mono text-xs text-muted-foreground hover:text-foreground">
          Behance
        </a>
      </div>
    </footer>
  );
}
