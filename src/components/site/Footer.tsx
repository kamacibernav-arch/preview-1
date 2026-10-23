import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { navLinks, siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="surface-dark border-t border-border">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Webdesign aus dem Heidekreis, Niedersachsen. Individuelle Websites für Selbstständige, kleine und mittelständische Unternehmen sowie lokale Dienstleister.
            </p>
          </div>
          <nav aria-label="Footer" className="md:col-span-3">
            <p className="eyebrow text-muted-foreground">Navigation</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {navLinks.map((l) => <li key={l.href}><a href={l.href} className="hover:text-lime">{l.label}</a></li>)}
            </ul>
          </nav>
          <div className="md:col-span-4">
            <p className="eyebrow text-muted-foreground">Kontakt</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {siteConfig.email ? <li><a href={`mailto:${siteConfig.email}`} className="hover:text-lime">{siteConfig.email}</a></li> : null}
              {siteConfig.phone ? <li><a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-lime">{siteConfig.phone}</a></li> : null}
              <li><a href="/#kontakt" className="hover:text-lime">Projektanfrage stellen</a></li>
              {siteConfig.social.map((s) => <li key={s.href}><a href={s.href} target="_blank" rel="noreferrer" className="hover:text-lime">{s.label}</a></li>)}
            </ul>
          </div>
        </div>
        <p aria-hidden className="mt-20 select-none font-display text-[clamp(3rem,13vw,11rem)] font-semibold leading-none tracking-tighter text-paper/[0.06]">Seitenwerk</p>
        <div className="mt-6 flex flex-col justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {year} {siteConfig.name}</p>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:text-paper">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-paper">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
