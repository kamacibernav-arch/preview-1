import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Placeholder } from "@/components/site/LegalPage";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Seitenwerk-Heidekreis" },
      { name: "description", content: "Impressum und Anbieterkennzeichnung von Seitenwerk-Heidekreis, Webdesign aus dem Heidekreis." },
      { property: "og:title", content: "Impressum – Seitenwerk-Heidekreis" },
      { property: "og:description", content: "Anbieterkennzeichnung von Seitenwerk-Heidekreis." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <LegalPage title="Impressum">
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>Seitenwerk-Heidekreis<br />Inhaber: Loris Rump<br />Berliner Ring 11<br />27336 Häuslingen</p>
      <h2>Kontakt</h2>
      <p>Telefon: <Placeholder>folgt in Kürze</Placeholder><br />E-Mail: <a className="underline" href="mailto:info@seitenwerk-heidekreis.de">info@seitenwerk-heidekreis.de</a></p>
      <h2>Umsatzsteuer-ID</h2>
      <p><Placeholder>USt-IdNr. gemäß § 27a UStG – folgt in Kürze</Placeholder></p>
      <h2>Verbraucherstreitbeilegung</h2>
      <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      <h2>Haftung für Inhalte und Links</h2>
      <p>Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität können wir jedoch keine Gewähr übernehmen. Für Inhalte externer Websites, auf die wir verlinken, sind ausschließlich deren Betreiber verantwortlich; zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar.</p>
      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>Loris Rump<br />Berliner Ring 11<br />27336 Häuslingen</p>
    </LegalPage>
  ),
});
