import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <Nav />
      <main>
        <section className="surface-dark pb-16 pt-40">
          <div className="mx-auto max-w-3xl px-5">
            <p className="eyebrow text-lime">Rechtliches</p>
            <h1 className="mt-4 text-5xl font-semibold sm:text-6xl">{title}</h1>
          </div>
        </section>
        <div className="mx-auto max-w-3xl space-y-6 px-5 py-16 leading-relaxed [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}

export function Placeholder({ children }: { children: ReactNode }) {
  return <span className="rounded bg-accent px-1.5 py-0.5 font-mono text-sm text-accent-foreground">[{children}]</span>;
}
