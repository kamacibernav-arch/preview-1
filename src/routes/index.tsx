import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services, Why, Process, Projects, Faq, FinalCta } from "@/components/site/Sections";
import { Contact } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";

const title = "Webdesign Heidekreis – Seitenwerk-Heidekreis | Websites für Unternehmen";
const description =
  "Seitenwerk-Heidekreis gestaltet individuelle, responsive Websites für Selbstständige und Unternehmen in Niedersachsen – von der neuen Website bis zum Relaunch.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-lime focus:px-4 focus:py-2 focus:text-lime-ink">Zum Inhalt springen</a>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <Services />
        <Why />
        <Process />
        <Projects />
        <Contact />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

function Marquee() {
  const items = ["Individuelles Webdesign", "Responsive Webentwicklung", "Website-Relaunch", "SEO-Grundlagen", "Performance", "Wartung"];
  return (
    <div className="overflow-hidden border-b bg-lime py-5 text-lime-ink" aria-hidden>
      <div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-2xl font-medium">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-10">{t}<span className="h-2 w-2 rounded-full bg-lime-ink" /></span>
        ))}
      </div>
    </div>
  );
}
