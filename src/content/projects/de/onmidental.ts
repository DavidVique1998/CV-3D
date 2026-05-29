import onmidental0 from "../../../assets/images/projects/onmidental/onmidental-0.jpg";
import onmidental1 from "../../../assets/images/projects/onmidental/onmidental-1.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Dental Estudio Tenerife",
  theme: "dark",
  tags: ["next", "react", "three", "vercel"],
  live: "https://onmidental.vercel.app/",
  description:
    "Pro-bono-Redesign-Vorschlag für eine Zahnarztpraxis in Teneriffa, Spanien. Von Grund auf neu entwickelt mit Next.js 16, immersiven Three.js-Visualisierungen, Motion-Scroll-Animationen und einem KI-Chat-Assistenten (Gemini Flash) für Patientenfragen zu Behandlungen, Standorten und Terminen — als persönliches Portfolio-Projekt unentgeltlich realisiert.",
  components: [
    {
      type: "media",
      props: { type: "image", src: onmidental0, alt: "Hero-Bereich", caption: "Hero-Bereich" },
    },
    {
      type: "media",
      props: { type: "image", src: onmidental1, alt: "Vollständige Seitenansicht", caption: "Vollständige Seitenansicht" },
    },
  ],
} as const satisfies ProjectContent;
