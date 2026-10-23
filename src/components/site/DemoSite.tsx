export type DemoKind = "handwerk" | "service" | "gastro" | "modern";

export const demoMeta: Record<DemoKind, { label: string; url: string; brand: string }> = {
  handwerk: { label: "Handwerk", url: "tischlerei-beispiel.de", brand: "Holzwerk Nord" },
  service: { label: "Dienstleistung", url: "kanzlei-beispiel.de", brand: "Kanzlei Lindenhof" },
  gastro: { label: "Gastronomie", url: "restaurant-beispiel.de", brand: "Heidekrug" },
  modern: { label: "Modernes Unternehmen", url: "startup-beispiel.de", brand: "Nordlicht Labs" },
};

/** Fully drawn demo layouts – no external websites, purely illustrative. */
export function DemoSite({ kind, compact = false }: { kind: DemoKind; compact?: boolean }) {
  const m = demoMeta[kind];
  return (
    <div className={`demo demo-${kind} h-full w-full overflow-hidden`}>
      <div className="flex items-center justify-between px-[6%] py-[3.5%] text-[10px] sm:text-xs">
        <span className={`font-semibold ${kind === "gastro" ? "font-display italic" : "font-display"}`}>{m.brand}</span>
        {!compact && (
          <span className="hidden gap-4 opacity-70 sm:flex">
            <span>Leistungen</span><span>Über uns</span><span>Kontakt</span>
          </span>
        )}
        <span className="demo-ac rounded-full px-2.5 py-1 text-[9px] font-medium sm:text-[10px]">Anfragen</span>
      </div>

      {kind === "handwerk" && (
        <div className="grid grid-cols-5 gap-[4%] px-[6%] pt-[4%]">
          <div className="col-span-3">
            <p className="demo-ac-text eyebrow !text-[8px] sm:!text-[9px]">Meisterbetrieb</p>
            <p className="mt-2 font-display text-lg font-bold leading-[1.05] sm:text-3xl">Massivholz,<br />das bleibt.</p>
            <div className="mt-3 h-1.5 w-2/3 rounded demo-soft" />
            <div className="mt-1.5 h-1.5 w-1/2 rounded demo-soft" />
          </div>
          <div className="col-span-2 aspect-[3/4] rounded-md demo-ac opacity-80 [background-image:repeating-linear-gradient(100deg,transparent_0_6px,rgba(0,0,0,.08)_6px_8px)]" />
          <div className="col-span-5 mt-2 grid grid-cols-3 gap-2">
            {["Küchen", "Treppen", "Möbel"].map((t) => (
              <div key={t} className="rounded-md border demo-line p-2 text-[9px] sm:text-[11px]">{t}</div>
            ))}
          </div>
        </div>
      )}

      {kind === "service" && (
        <div className="px-[6%] pt-[6%] text-center">
          <p className="font-display text-lg font-semibold leading-tight sm:text-3xl">Beratung, die Klarheit schafft.</p>
          <div className="mx-auto mt-3 h-1.5 w-1/2 rounded demo-soft" />
          <div className="mt-[6%] grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-lg border demo-line p-2 text-left">
                <div className="h-4 w-4 rounded-full demo-ac sm:h-6 sm:w-6" />
                <div className="mt-2 h-1.5 w-3/4 rounded demo-soft" />
                <div className="mt-1 h-1.5 w-1/2 rounded demo-soft" />
              </div>
            ))}
          </div>
        </div>
      )}

      {kind === "gastro" && (
        <div className="relative px-[6%] pt-[5%]">
          <div className="absolute right-[6%] top-[8%] h-[70%] w-[42%] rounded-t-full demo-ac opacity-25" />
          <p className="demo-ac-text eyebrow !text-[8px] sm:!text-[9px]">Regional · Saisonal</p>
          <p className="mt-2 font-display text-xl italic leading-none sm:text-4xl">Gutes Essen<br />aus der Heide.</p>
          <div className="mt-4 flex gap-2 text-[9px] sm:text-[11px]">
            <span className="demo-ac rounded-full px-3 py-1 font-medium text-(--d-bg)">Tisch reservieren</span>
            <span className="rounded-full border demo-line px-3 py-1">Speisekarte</span>
          </div>
        </div>
      )}

      {kind === "modern" && (
        <div className="px-[6%] pt-[5%]">
          <p className="font-display text-xl font-bold leading-[0.95] tracking-tighter sm:text-4xl">
            Software für <span className="demo-ac-text">morgen.</span>
          </p>
          <div className="mt-[5%] grid grid-cols-4 gap-2">
            <div className="col-span-3 flex h-16 items-end gap-1 rounded-lg demo-soft p-2 sm:h-24">
              {[40, 65, 50, 80, 60, 95, 75].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm demo-ac" style={{ height: `${h}%`, opacity: 0.4 + i * 0.08 }} />
              ))}
            </div>
            <div className="rounded-lg demo-soft p-2">
              <div className="h-5 w-5 rounded-full demo-ac" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function BrowserFrame({ url, children, className = "" }: { url: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-ink-line bg-ink-soft shadow-float ${className}`}>
      <div className="flex items-center gap-3 border-b border-ink-line px-3 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
        </div>
        <div className="mx-auto truncate rounded-md bg-paper/10 px-3 py-1 font-mono text-[10px] text-paper/60">{url}</div>
        <span className="w-8" />
      </div>
      {children}
    </div>
  );
}
