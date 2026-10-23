import { useEffect, useRef, useState } from "react";
import { ArrowRight, Gauge, Smartphone, Sparkles } from "lucide-react";
import { BrowserFrame, DemoSite, demoMeta, type DemoKind } from "./DemoSite";
import { Magnetic, useFinePointer } from "./motion";

const kinds = Object.keys(demoMeta) as DemoKind[];

export function Hero() {
  const [kind, setKind] = useState<DemoKind>("handwerk");
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const fine = useFinePointer();
  const auto = useRef(true);

  useEffect(() => {
    const id = setInterval(() => {
      if (!auto.current) return;
      setKind((k) => kinds[(kinds.indexOf(k) + 1) % kinds.length] ?? "handwerk");
    }, 4200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!fine) return;
    const on = () => setScrollY(Math.min(window.scrollY, 800));
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [fine]);

  const pick = (k: DemoKind) => {
    auto.current = false;
    setKind(k);
  };

  return (
    <section className="surface-dark relative isolate overflow-hidden pb-24 pt-32 sm:pt-40 lg:pb-32">
      <div aria-hidden className="grid-lines absolute inset-0 -z-10 text-paper/[0.05]" />
      <div aria-hidden className="glow-lime drift absolute -right-40 -top-40 -z-10 h-[620px] w-[620px]" />
      <div aria-hidden className="glow-electric drift absolute -bottom-60 -left-40 -z-10 h-[560px] w-[560px] [animation-delay:-6s]" />

      <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6 lg:pt-6">
          <p className="eyebrow fade-up flex items-center gap-2 text-lime">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" /> Webdesign aus dem Heidekreis
          </p>
          <h1 className="mt-6 text-[clamp(2.6rem,6vw,5.4rem)] font-semibold leading-[0.92]">
            <span className="line-mask"><span>Dein Unternehmen.</span></span>
            <span className="line-mask"><span style={{ animationDelay: "120ms" }}>
              Ein <em className="font-normal italic text-lime">starker</em>
            </span></span>
            <span className="line-mask"><span style={{ animationDelay: "240ms" }}>Auftritt.</span></span>
          </h1>
          <p className="fade-up mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground" style={{ animationDelay: "450ms" }}>
            Wir gestalten moderne Websites, die deine Marke sichtbar machen, Vertrauen schaffen und aus Besuchern potenzielle Kunden machen.
          </p>
          <div className="fade-up mt-10 flex flex-wrap gap-3" style={{ animationDelay: "600ms" }}>
            <Magnetic>
              <a href="#kontakt" className="btn btn-lime group">
                Projekt starten
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#projekte" className="btn btn-ghost">Unsere Arbeit entdecken</a>
            </Magnetic>
          </div>
          <p className="eyebrow fade-up mt-12 text-muted-foreground" style={{ animationDelay: "750ms" }}>
            Individuelles Webdesign · Moderne Technik · Persönliche Betreuung
          </p>
        </div>

        <div className="fade-up relative lg:col-span-6" style={{ animationDelay: "300ms" }}>
          <div
            className="relative [perspective:1400px]"
            onMouseMove={(e) => {
              if (!fine) return;
              const r = e.currentTarget.getBoundingClientRect();
              setTilt({ x: ((e.clientY - r.top) / r.height - 0.5) * -6, y: ((e.clientX - r.left) / r.width - 0.5) * 8 });
            }}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          >
            <div
              className="transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
              style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${scrollY * -0.06}px)` }}
            >
              <BrowserFrame url={demoMeta[kind].url}>
                <div className="relative aspect-[16/11]">
                  {kinds.map((k) => (
                    <div
                      key={k}
                      className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] ${k === kind ? "opacity-100 scale-100" : "pointer-events-none scale-[1.03] opacity-0"}`}
                      aria-hidden={k !== kind}
                    >
                      <DemoSite kind={k} />
                    </div>
                  ))}
                </div>
              </BrowserFrame>
            </div>

            <FloatCard className="-left-4 top-[18%] sm:-left-10" icon={<Smartphone className="h-4 w-4" />} label="Responsive Design" style={{ transform: `translateY(${scrollY * -0.15}px)` }} />
            <FloatCard className="-right-3 top-[48%] sm:-right-8 [animation-delay:-2s]" icon={<Gauge className="h-4 w-4" />} label="Schnelle Ladezeiten" style={{ transform: `translateY(${scrollY * -0.22}px)` }} />
            <FloatCard className="bottom-[-6%] left-[12%] [animation-delay:-4s]" icon={<Sparkles className="h-4 w-4" />} label="Individuell gestaltet" style={{ transform: `translateY(${scrollY * -0.1}px)` }} />
          </div>

          <div role="tablist" aria-label="Branchen-Vorschau wählen" className="mt-14 flex flex-wrap gap-2">
            {kinds.map((k) => (
              <button
                key={k}
                role="tab"
                aria-selected={k === kind}
                onClick={() => pick(k)}
                className={`rounded-full border px-3.5 py-1.5 text-xs transition ${k === kind ? "border-lime bg-lime text-lime-ink" : "border-border text-muted-foreground hover:text-paper"}`}
              >
                {demoMeta[k].label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <a href="#leistungen" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground lg:flex" aria-label="Weiter scrollen">
        <span className="flex h-9 w-5 justify-center rounded-full border border-current pt-1.5">
          <span className="scroll-dot h-1.5 w-1 rounded-full bg-current" />
        </span>
      </a>
    </section>
  );
}

function FloatCard({ className, icon, label, style }: { className: string; icon: React.ReactNode; label: string; style?: React.CSSProperties }) {
  return (
    <div className={`absolute ${className}`} style={style}>
      <div className="glass-dark float flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-xs shadow-float sm:text-sm">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-lime text-lime-ink">{icon}</span>
        {label}
      </div>
    </div>
  );
}
