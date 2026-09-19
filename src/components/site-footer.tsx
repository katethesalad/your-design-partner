import pigeonAsset from "@/assets/pigeon.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-6xl space-y-8 px-6 py-14 text-center">
      <div className="relative mx-auto w-fit">
        <span className="confetti confetti-triangle left-[2%] top-[18%] bg-logo-orange [animation-delay:-1.2s]" />
        <span className="confetti confetti-pill left-[12%] top-[64%] bg-logo-yellow [animation-delay:-3.4s]" />
        <span className="confetti confetti-pinched left-[7%] top-[90%] bg-logo-pink [animation-delay:-2.2s]" />
        <span className="confetti confetti-starburst left-[24%] top-[6%] bg-logo-pink [animation-delay:-4.1s]" />
        <span className="confetti confetti-pill right-[24%] top-[3%] bg-logo-yellow [animation-delay:-.8s]" />
        <span className="confetti confetti-triangle right-[10%] top-[24%] bg-logo-orange [animation-delay:-2.9s]" />
        <span className="confetti confetti-starburst right-[2%] top-[62%] bg-logo-pink [animation-delay:-4.8s]" />
        <span className="confetti confetti-pinched right-[13%] top-[92%] bg-logo-yellow [animation-delay:-1.7s]" />
        <img
          src={pigeonAsset.url}
          alt="Pigeon mascot"
          width={880}
          height={905}
          className="mx-auto h-40 w-auto drop-shadow-sm"
        />
      </div>
      <div className="relative mx-auto w-fit">
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
