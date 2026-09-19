import pigeon from "@/assets/pigeon.png";

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-6xl space-y-8 px-6 py-14 text-center">
      <div className="relative mx-auto w-fit">
        <span className="confetti confetti-sm confetti-triangle left-[-16%] top-[14%] bg-logo-orange [animation-delay:-1.2s]" />
        <span className="confetti confetti-sm confetti-pill left-[-7%] top-[60%] bg-logo-yellow [animation-delay:-3.4s]" />
        <span className="confetti confetti-sm confetti-pinched left-[-20%] top-[86%] bg-logo-pink [animation-delay:-2.2s]" />
        <span className="confetti confetti-sm confetti-starburst left-[-2%] top-[-4%] bg-logo-pink [animation-delay:-4.1s]" />
        <span className="confetti confetti-sm confetti-pill right-[-2%] top-[-4%] bg-logo-yellow [animation-delay:-.8s]" />
        <span className="confetti confetti-sm confetti-triangle right-[-18%] top-[26%] bg-logo-orange [animation-delay:-2.9s]" />
        <span className="confetti confetti-sm confetti-starburst right-[-6%] top-[58%] bg-logo-pink [animation-delay:-4.8s]" />
        <span className="confetti confetti-sm confetti-pinched right-[-20%] top-[88%] bg-logo-yellow [animation-delay:-1.7s]" />
        <img
          src={pigeon}
          alt="Pigeon mascot"
          width={880}
          height={905}
          className="mx-auto h-40 w-auto drop-shadow-sm"
        />
      </div>
      <div className="relative mx-auto w-fit">
        {/* Mesh gradient ambient lighting behind the heading */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[560px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 opacity-70 blur-3xl"
          style={{
            background: [
              "radial-gradient(circle at 18% 30%, #e0ad34 0%, transparent 42%)",
              "radial-gradient(circle at 82% 24%, #cbaed3 0%, transparent 46%)",
              "radial-gradient(circle at 30% 78%, #f58127 0%, transparent 40%)",
              "radial-gradient(circle at 76% 72%, #cbaed3 0%, transparent 44%)",
            ].join(", "),
          }}
        />
        <h2 className="relative font-sans text-4xl italic leading-tight">
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
