/**
 * Zentrale Unternehmensangaben. Leere Werte werden auf der Website als
 * Platzhalter angezeigt bzw. ausgeblendet – bitte durch echte Angaben ersetzen.
 */
export const siteConfig = {
  name: "Seitenwerk-Heidekreis",
  region: "Heidekreis, Niedersachsen",
  email: "info@seitenwerk-heidekreis.de",
  phone: "",
  owner: "Loris Rump",
  street: "Berliner Ring 11",
  city: "27336 Häuslingen",
  vatId: "",
  social: [] as { label: string; href: string }[],
};

export const navLinks = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Projekte", href: "/#projekte" },
  { label: "Über uns", href: "/#ueber-uns" },
  { label: "Ablauf", href: "/#ablauf" },
  { label: "FAQ", href: "/#faq" },
  { label: "Kontakt", href: "/#kontakt" },
];
