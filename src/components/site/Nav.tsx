import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/site-config";
import { Magnetic } from "./motion";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav
        aria-label="Hauptnavigation"
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5 ${
          scrolled ? "glass border border-border shadow-card text-foreground" : "surface-dark !bg-transparent"
        }`}
      >
        <Link to="/" aria-label="Seitenwerk-Heidekreis – Startseite" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-3.5 py-2 text-sm opacity-80 transition hover:bg-current/5 hover:opacity-100">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Magnetic>
            <a href="/#kontakt" className={`btn hidden !py-2.5 text-sm sm:inline-flex ${scrolled ? "btn-ink" : "btn-lime"}`}>
              Projekt besprechen <ArrowUpRight className="h-4 w-4" />
            </a>
          </Magnetic>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={`surface-dark fixed inset-0 -z-10 flex flex-col justify-between px-6 pb-10 pt-28 transition-[clip-path] duration-700 ease-[cubic-bezier(.16,1,.3,1)] lg:hidden ${
          open ? "[clip-path:circle(150%_at_100%_0)]" : "pointer-events-none [clip-path:circle(0%_at_100%_0)]"
        }`}
        aria-hidden={!open}
      >
        <ul className="space-y-1">
          {navLinks.map((l, i) => (
            <li key={l.href} className={open ? "fade-up" : "opacity-0"} style={{ animationDelay: `${120 + i * 60}ms` }}>
              <a href={l.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="flex items-baseline justify-between border-b border-border py-4 font-display text-4xl tracking-tight">
                {l.label}
                <span className="eyebrow text-muted-foreground">0{i + 1}</span>
              </a>
            </li>
          ))}
        </ul>
        <a href="/#kontakt" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="btn btn-lime justify-center">
          Projekt besprechen <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}
