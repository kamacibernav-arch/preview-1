# Seitenwerk-Heidekreis

Website von Seitenwerk-Heidekreis (Webdesign & digitale Dienstleistungen aus dem Heidekreis).

## Entwicklung

Node.js und npm installiert? Dann:

```sh
git clone <repository-url>
cd seitenwerk-heidekreis
npm install
npm run dev
```

Die Seite läuft danach unter http://localhost:8080.

## Konfiguration

Kopiere die Datei `.env.example` zu `.env` und trage dort die Zugangsdaten deines Backends ein. Diese Werte sind öffentlich (können im Browser sichtbar sein) und gelten nur für den Lese-Zugriff der Seite.

## Produktion

```sh
npm run build
```

Das fertige Ergebnis liegt anschließend im Ordner `dist/` und kann bei einem Hoster deiner Wahl veröffentlicht werden.
