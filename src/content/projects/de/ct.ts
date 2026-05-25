import ct0 from "../../../assets/images/projects/ct/ct-0.jpg";
import ct1 from "../../../assets/images/projects/ct/ct-1.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Commission Tracker",
  theme: "light",
  tags: ["aws", "openai", "node", "typescript"],
  description:
    "Serverloser Provisionsanalyzer für 52 Versicherungsunternehmen. Dynamische Prompt-Vorlagen pro Unternehmen, PDF-OCR-Pipeline mit Tesseract und warteschlangenbasierte Flows für Stapelverarbeitung und manuelle Eskalation.<br/><br/>Auf AWS Lambda mit GitHub Actions CI/CD. Verarbeitet hunderte Provisionsabrechnungen pro Lauf mit strukturiertem JSON-Output.",
  components: [
    {
      type: "media",
      props: { type: "image", src: ct0, alt: "Landing-Seite", caption: "Landing-Seite" },
    },
    {
      type: "media",
      props: { type: "image", src: ct1, alt: "Features-Bereich", caption: "Features-Bereich" },
    },
  ],
} as const satisfies ProjectContent;
