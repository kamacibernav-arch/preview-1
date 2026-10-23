import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { Reveal, Magnetic, useInView, useFinePointer } from "./motion";
import { BrowserFrame, DemoSite, type DemoKind } from "./DemoSite";

function SectionHead({ index, eyebrow, title, intro, dark }: { index: string; eyebrow: string; title: React.ReactNode; intro?: string; dark?: boolean }) {
  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <Reveal className="lg:col-span-3">
        <p className={`eyebrow flex items-center gap-3 ${dark ? "text-lime" : "text-muted-foreground"}`}>
          <span className="font-mono">{index}</span>
          <span className="h-px w-8 bg-current" /> {eyebrow}
        </p>
      </Reveal>
      <div className="lg:col-span-9">
        <Reveal as="h2" className="max-w-4xl text-[clamp(2.2rem,5vw,4.4rem)] font-semibold leading-[0.98]">{title}</Reveal>
        {intro && <Reveal delay={120} as="p" className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</Reveal>}
      </div>
    </div>
  );
}

/* ---------------- Leistungen ---------------- */
const services = [
  { t: "Individuelles Webdesign", d: "Ein eigenständiges Design, das die Identität deines Unternehmens widerspiegelt und sich von austauschbaren Vorlagen abhebt.", icon: <path d="M4 20h16M6 16l8-8 3 3-8 8H6v-3zM14 8l2-2 3 3-2 2" /> },
  { t: "Responsive Webentwicklung", d: "Websites, die auf Smartphone, Tablet und Desktop gleichermaßen überzeugend funktionieren.", icon: <><rect x="3" y="5" width="13" height="10" rx="1.5" /><rect x="15" y="9" width="6" height="11" rx="1.5" /><path d="M7 19h5" /></> },
  { t: "Website-Relaunch", d: "Bestehende Websites modernisieren, die Benutzerführung verbessern und den digitalen Auftritt neu ausrichten.", icon: <path d="M20 11a8 8 0 1 0-2.3 5.7M20 5v6h-6" /> },
  { t: "SEO-Grundlagen", d: "Technische und strukturelle Grundlagen, damit Suchmaschinen deine Website besser verstehen – ohne unrealistische Ranking-Versprechen.", icon: <><circle cx="10.5" cy="10.5" r="6" /><path d="M15 15l5 5M8 10.5h5M10.5 8v5" /></> },
  { t: "Performance & Technik", d: "Schnelle Ladezeiten, sauberer Code, zuverlässige Darstellung und eine solide technische Basis.", icon: <path d="M13 3L5 14h6l-1 7 8-11h-6l1-7z" /> },
  { t: "Wartung & Weiterentwicklung", d: "Unterstützung bei Aktualisierungen, Änderungen und der kontinuierlichen Verbesserung deiner Website.", icon: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" /></> },
];

export function Services() {
  return (
    <section id="leistungen" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead
          index="01"
          eyebrow="Leistungen"
          title={<>Websites, die mehr können <span className="text-muted-foreground">als gut aussehen.</span></>}
          intro="Wir verbinden individuelles Design, durchdachte Technik und eine klare Struktur zu Websites, die zu deinem Unternehmen passen."
        />
        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={(i % 3) * 90} className="h-full">
              <article className="group relative h-full overflow-hidden bg-card p-8 transition-colors duration-500 hover:bg-ink hover:text-paper sm:p-10">
                <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-lime transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-x-100" />
                <div className="flex items-start justify-between">
                  <svg viewBox="0 0 24 24" className="h-10 w-10 fill-none stroke-current transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:text-lime" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {s.icon}
                  </svg>
                  <span className="font-mono text-xs opacity-50">0{i + 1}</span>
                </div>
                <h3 className="mt-14 text-2xl font-semibold">{s.t}</h3>
                <p className="mt-3 leading-relaxed opacity-70">{s.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Warum ---------------- */
const reasons = [
  ["Individuell statt von der Stange", "Jede Website entsteht für genau ein Unternehmen – nicht aus einem Baukasten."],
  ["Persönliche Kommunikation", "Ein fester Ansprechpartner, kurze Wege und verständliche Sprache."],
  ["Moderne, responsive Umsetzung", "Aktuelle Technik, die auf jedem Gerät sauber funktioniert."],
  ["Klare Strukturen", "Intuitive Bedienung, damit Besucher schnell finden, was sie suchen."],
  ["Transparente Abstimmung", "Du weißt jederzeit, woran wir arbeiten und was als Nächstes kommt."],
  ["Fokus auf deine Ziele", "Design und Inhalte richten sich danach, was deine Website erreichen soll."],
];

export function Why() {
  return (
    <section id="ueber-uns" className="surface-dark relative scroll-mt-24 overflow-hidden py-28 sm:py-36">
      <div aria-hidden className="glow-lime absolute -left-60 top-1/3 h-[500px] w-[500px] opacity-50" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-12">
        <div className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
          <Reveal as="p" className="eyebrow flex items-center gap-3 text-lime"><span>02</span><span className="h-px w-8 bg-current" /> Warum Seitenwerk</Reveal>
          <Reveal as="h2" className="mt-8 text-[clamp(2.4rem,5vw,4.6rem)] font-semibold leading-[0.95]">
            Gutes Webdesign beginnt mit einem <em className="font-normal italic text-lime">klaren Plan.</em>
          </Reveal>
          <Reveal as="p" delay={120} className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            Seitenwerk-Heidekreis ist eine Webdesign-Agentur aus Niedersachsen für Selbstständige, kleine und mittelständische Unternehmen sowie lokale Dienstleister. Bevor wir gestalten, verstehen wir.
          </Reveal>
          <Reveal delay={200} className="relative mt-12 hidden h-40 w-40 lg:block">
            <svg viewBox="0 0 200 200" className="spin-slow h-full w-full text-muted-foreground" aria-hidden>
              <defs><path id="circ" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" /></defs>
              <text className="fill-current font-mono text-[13px] uppercase tracking-[0.3em]"><textPath href="#circ">Planen · Gestalten · Umsetzen · Begleiten ·</textPath></text>
            </svg>
            <span className="absolute inset-0 m-auto h-3 w-3 rounded-full bg-lime" />
          </Reveal>
        </div>
        <ol className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {reasons.map(([t, d], i) => (
            <Reveal as="li" key={t} delay={(i % 2) * 100} className={i % 2 === 1 ? "sm:translate-y-12" : ""}>
              <div className="group h-full rounded-2xl border border-border bg-ink-soft/60 p-7 transition duration-500 hover:-translate-y-1 hover:border-lime/50">
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl font-semibold text-paper/10 transition-colors group-hover:text-lime">{String(i + 1).padStart(2, "0")}</span>
                  <span className="h-2 w-2 rounded-full bg-lime opacity-0 transition group-hover:opacity-100" />
                </div>
                <h3 className="mt-8 text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Ablauf ---------------- */
const steps = [
  ["Kennenlernen", "Wir sprechen über dein Unternehmen, deine Zielgruppe und deine Vorstellungen."],
  ["Konzept & Design", "Wir entwickeln eine passende Struktur und ein individuelles visuelles Konzept."],
  ["Umsetzung", "Wir erstellen die Website, optimieren sie für verschiedene Geräte und stimmen die Details mit dir ab."],
  ["Feinschliff & Veröffentlichung", "Nach der gemeinsamen Prüfung wird die Website für den Einsatz vorbereitet und veröffentlicht."],
];

export function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const on = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const p = (window.innerHeight * 0.6 - r.top) / r.height;
      setProgress(Math.max(0, Math.min(1, p)));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <section id="ablauf" className="scroll-mt-24 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead index="03" eyebrow="Ablauf" title={<>Vom ersten Gespräch <span className="text-muted-foreground">bis zum Go-live.</span></>} />
        <ol ref={ref} className="relative mt-20 lg:ml-[25%]">
          <span aria-hidden className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />
          <span aria-hidden className="absolute left-[19px] top-2 w-px origin-top bg-ink transition-[height] duration-200" style={{ height: `calc(${progress * 100}% - 16px)` }} />
          {steps.map(([t, d], i) => {
            const active = progress > i / steps.length + 0.05;
            return (
              <li key={t} className="relative grid grid-cols-[40px_1fr] gap-6 pb-16 last:pb-0 sm:gap-10">
                <span className={`relative z-10 grid h-10 w-10 place-items-center rounded-full border font-mono text-xs transition-all duration-500 ${active ? "border-ink bg-lime text-lime-ink scale-110" : "border-border bg-background text-muted-foreground"}`}>
                  0{i + 1}
                </span>
                <Reveal className="grid gap-3 border-b pb-10 sm:grid-cols-2 sm:gap-10">
                  <h3 className="text-3xl font-semibold sm:text-4xl">{t}</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">{d}</p>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Projekte ---------------- */
type Project = { title: string; industry: string; type: string; kind: DemoKind; desc: string; url?: string };
// Konzeptprojekte – echte Kundenprojekte hier ergänzen (mit `url` für "Projekt ansehen").
const projects: Project[] = [
  { title: "Holzwerk Nord", industry: "Handwerk", type: "Unternehmenswebsite", kind: "handwerk", desc: "Ruhige, materialbetonte Gestaltung für einen Tischlereibetrieb mit Fokus auf Referenzen und Anfragen." },
  { title: "Heidekrug", industry: "Gastronomie", type: "Onepager", kind: "gastro", desc: "Atmosphärischer Auftritt mit Speisekarte, Öffnungszeiten-Bereich und klarer Reservierungsführung." },
  { title: "Kanzlei Lindenhof", industry: "Dienstleistung", type: "Unternehmenswebsite", kind: "service", desc: "Seriöse, gut strukturierte Website, die komplexe Leistungen verständlich gliedert." },
  { title: "Nordlicht Labs", industry: "Modernes Unternehmen", type: "Landingpage", kind: "modern", desc: "Kontrastreiche Produktseite mit starkem Typo-Fokus und datengetriebenen Elementen." },
];
const filters = ["Alle", "Handwerk", "Dienstleistung", "Gastronomie", "Modernes Unternehmen"];

export function Projects() {
  const [filter, setFilter] = useState("Alle");
  const fine = useFinePointer();
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);
  const list = projects.filter((p) => filter === "Alle" || p.industry === filter);

  return (
    <section id="projekte" className="relative scroll-mt-24 bg-paper-dim py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead
          index="04"
          eyebrow="Projekte"
          title={<>Digitale Auftritte <span className="italic font-normal">mit Charakter.</span></>}
          intro="Eine Auswahl an Konzeptprojekten, die zeigen, wie unterschiedlich Branchen digital wirken können. Sie dienen als Gestaltungsbeispiele und sind keine Kundenprojekte."
        />
        <div role="tablist" aria-label="Projekte filtern" className="mt-14 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button key={f} role="tab" aria-selected={filter === f} onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-sm transition ${filter === f ? "border-ink bg-ink text-paper" : "border-border hover:border-ink"}`}>
              {f}
            </button>
          ))}
        </div>

        <div
          className="relative mt-12 grid gap-8 md:grid-cols-2"
          onMouseLeave={() => setCursor(null)}
        >
          {list.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 120} className={i % 2 === 1 ? "md:mt-24" : ""}>
              <article
                className="group"
                onMouseMove={(e) => fine && setCursor({ x: e.clientX, y: e.clientY })}
                onMouseLeave={() => setCursor(null)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-ink p-4 sm:p-8">
                  <span className="eyebrow absolute left-4 top-4 z-10 rounded-full bg-lime px-2.5 py-1 !text-[10px] text-lime-ink sm:left-6 sm:top-6">Konzept</span>
                  <div className="transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-2 group-hover:scale-[1.02]">
                    <BrowserFrame url={`${p.title.toLowerCase().replace(/\s+/g, "-")}.konzept`} className="mt-6">
                      <div className="aspect-[16/11]"><DemoSite kind={p.kind} /></div>
                    </BrowserFrame>
                  </div>
                  <div className="surface-dark absolute inset-x-0 bottom-0 translate-y-full bg-ink/90 p-6 backdrop-blur transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0 group-focus-within:translate-y-0">
                    <p className="text-sm leading-relaxed text-paper/80">{p.desc}</p>
                  </div>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.industry} · {p.type}</p>
                  </div>
                  {p.url && (
                    <a href={p.url} className="btn btn-ink !py-2 text-sm">Projekt ansehen <ArrowUpRight className="h-4 w-4" /></a>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:hidden">{p.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      {cursor && (
        <div aria-hidden className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime px-4 py-2 text-xs font-medium text-lime-ink shadow-float" style={{ left: cursor.x, top: cursor.y }}>
          Konzept ansehen
        </div>
      )}
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const faqs = [
  ["Was kostet eine professionelle Website?", "Das hängt vom Umfang ab – etwa von der Anzahl der Seiten, gewünschten Funktionen und davon, ob Inhalte bereits vorhanden sind. Nach einem ersten Gespräch erhältst du ein individuelles, transparentes Angebot."],
  ["Wie lange dauert die Erstellung einer Website?", "Die Dauer ist projektabhängig und hängt unter anderem vom Umfang und der Bereitstellung von Inhalten ab. Einen realistischen Zeitplan stimmen wir zu Projektbeginn gemeinsam ab."],
  ["Können bestehende Websites überarbeitet werden?", "Ja. Wir analysieren deine bestehende Website und entwickeln daraus einen Relaunch – von einer gestalterischen Auffrischung bis zur kompletten Neuausrichtung."],
  ["Ist die Website für Smartphones optimiert?", "Ja. Jede Website wird responsiv umgesetzt und auf Smartphone, Tablet und Desktop geprüft."],
  ["Können wir Inhalte später selbst ändern?", "Das ist möglich. Welche Lösung zur Pflege von Inhalten sinnvoll ist, besprechen wir anhand deiner Anforderungen individuell."],
  ["Unterstützt ihr auch nach der Veröffentlichung?", "Ja, wir bieten Unterstützung bei Aktualisierungen, Änderungen und der Weiterentwicklung an. Umfang und Konditionen werden individuell vereinbart."],
  ["Was benötigt ihr für den Start eines Projekts?", "Für den Start reicht ein erstes Gespräch. Hilfreich sind vorhandene Logos, Texte, Bilder und eine Vorstellung davon, was die Website erreichen soll – fehlende Inhalte erarbeiten wir gemeinsam."],
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-24 py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal as="p" className="eyebrow flex items-center gap-3 text-muted-foreground"><span>06</span><span className="h-px w-8 bg-current" /> FAQ</Reveal>
          <Reveal as="h2" className="mt-8 text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold leading-[0.98]">Häufige Fragen.</Reveal>
          <Reveal as="p" delay={100} className="mt-6 text-muted-foreground">Deine Frage ist nicht dabei? <a href="#kontakt" className="underline decoration-lime decoration-2 underline-offset-4">Schreib uns.</a></Reveal>
        </div>
        <div className="lg:col-span-8">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q} className="border-b">
                <h3>
                  <button
                    className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-medium sm:text-xl"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    {q}
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-500 ${isOpen ? "rotate-45 border-ink bg-lime" : ""}`}>
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <div id={`faq-${i}`} role="region" className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 leading-relaxed text-muted-foreground">{a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
export function FinalCta() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section className="surface-dark relative overflow-hidden py-32 sm:py-44">
      <div aria-hidden className="grid-lines absolute inset-0 text-paper/[0.05]" />
      <div ref={ref} aria-hidden className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {[0, 1, 2].map((i) => (
          <span key={i} className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-lime/20 transition-all duration-[1600ms] ease-[cubic-bezier(.16,1,.3,1)] ${inView ? "opacity-100" : "scale-50 opacity-0"}`}
            style={{ width: 360 + i * 240, height: 360 + i * 240, transitionDelay: `${i * 200}ms` }} />
        ))}
      </div>
      <div className="relative mx-auto max-w-5xl px-5 text-center">
        <Reveal as="h2" className="text-[clamp(2.6rem,7vw,6rem)] font-semibold leading-[0.95]">
          Deine nächste Website beginnt mit einer <em className="font-normal italic text-lime">Idee.</em>
        </Reveal>
        <Reveal as="p" delay={120} className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground">
          Erzähl uns, was du vorhast. Gemeinsam machen wir daraus einen überzeugenden digitalen Auftritt.
        </Reveal>
        <Reveal delay={220} className="mt-12">
          <Magnetic strength={0.35}>
            <a href="#kontakt" className="btn btn-lime group !px-8 !py-5 text-base">
              Unverbindlich Kontakt aufnehmen <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
