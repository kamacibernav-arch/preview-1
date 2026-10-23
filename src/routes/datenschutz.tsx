import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung – Seitenwerk-Heidekreis" },
      { name: "description", content: "Informationen zur Verarbeitung personenbezogener Daten auf der Website von Seitenwerk-Heidekreis." },
      { property: "og:title", content: "Datenschutzerklärung – Seitenwerk-Heidekreis" },
      { property: "og:description", content: "Datenschutzhinweise von Seitenwerk-Heidekreis." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <LegalPage title="Datenschutz">
      <h2>1. Verantwortliche Stelle</h2>
      <p>Seitenwerk-Heidekreis, Loris Rump<br />Berliner Ring 11, 27336 Häuslingen<br />E-Mail: <a className="underline" href="mailto:info@seitenwerk-heidekreis.de">info@seitenwerk-heidekreis.de</a></p>
      <p>Ein Datenschutzbeauftragter ist gesetzlich nicht vorgeschrieben und nicht bestellt.</p>

      <h2>2. Allgemeines</h2>
      <p>Wir verarbeiten personenbezogene Daten nur, soweit dies für eine funktionsfähige Website, unsere Inhalte und Leistungen oder die Bearbeitung deiner Anfrage erforderlich ist. Die Übertragung erfolgt verschlüsselt (TLS/HTTPS).</p>

      <h2>3. Hosting, Domain und Server-Logfiles</h2>
      <p>Die Domain seitenwerk-heidekreis.de sowie unser E-Mail-Postfach werden bei der IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, verwaltet. Die Website selbst wird über die Plattform Lovable (Lovable Labs Incorporated) bereitgestellt, die dafür Rechenzentren und ein weltweites Auslieferungsnetz von Dienstleistern wie Cloudflare und Supabase nutzt. Dabei kann eine Verarbeitung auch außerhalb der EU, insbesondere in den USA, stattfinden; sie erfolgt auf Grundlage der EU-Standardvertragsklauseln bzw. des EU-US Data Privacy Framework.</p>
      <p>Beim Aufruf der Website werden technisch notwendige Zugriffsdaten erfasst (IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browser und Betriebssystem, Referrer). Rechtsgrundlage ist unser berechtigtes Interesse an einem sicheren und stabilen Betrieb (Art. 6 Abs. 1 lit. f DSGVO). Die Daten werden nur kurzfristig gespeichert und nicht mit anderen Daten zusammengeführt. Mit den Anbietern bestehen bzw. werden Verträge zur Auftragsverarbeitung nach Art. 28 DSGVO geschlossen.</p>

      <h2>4. Kontaktformular und E-Mail</h2>
      <p>Wenn du uns über das Anfrageformular oder per E-Mail kontaktierst, verarbeiten wir die von dir angegebenen Daten (Bedarf, Branche, Website-Art, Name, optional Unternehmen und Telefonnummer, E-Mail-Adresse, Nachricht) ausschließlich zur Bearbeitung deiner Anfrage. Formularanfragen werden in einer geschützten Datenbank unseres Hosting-Anbieters gespeichert und an unser E-Mail-Postfach weitergeleitet.</p>
      <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) sowie deine Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO, die du jederzeit mit Wirkung für die Zukunft widerrufen kannst. Kommt kein Auftrag zustande, löschen wir deine Anfrage spätestens nach 6 Monaten. Bei einem Auftrag gelten die gesetzlichen Aufbewahrungsfristen (bis zu 10 Jahre nach HGB/AO).</p>

      <h2>5. Schriftarten</h2>
      <p>Die auf dieser Website verwendeten Schriftarten sind lokal eingebunden. Es wird dafür keine Verbindung zu Servern Dritter (z. B. Google) aufgebaut.</p>

      <h2>6. Cookies und Tracking</h2>
      <p>Diese Website verwendet keine Analyse-, Tracking- oder Marketing-Tools und setzt keine Cookies, die eine Einwilligung erfordern.</p>

      <h2>7. Externe Links</h2>
      <p>Unsere Website kann Links zu Profilen in sozialen Netzwerken (z. B. LinkedIn) enthalten. Erst wenn du einen solchen Link anklickst, werden Daten an den jeweiligen Anbieter übertragen. Für die dortige Verarbeitung gilt die Datenschutzerklärung des Anbieters.</p>

      <h2>8. Deine Rechte</h2>
      <p>Du hast das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen (Art. 21 DSGVO). Erteilte Einwilligungen kannst du jederzeit widerrufen. Wende dich dazu einfach an die oben genannte E-Mail-Adresse.</p>
      <p>Außerdem hast du das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, z. B. bei der Landesbeauftragten für den Datenschutz Niedersachsen, Prinzenstraße 5, 30159 Hannover.</p>

      <h2>9. Aktualität</h2>
      <p>Stand: Oktober 2026. Wir passen diese Datenschutzerklärung an, wenn sich unsere Website oder die rechtlichen Vorgaben ändern.</p>
    </LegalPage>
  ),
});
