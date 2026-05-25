import qubex0 from "../../../assets/images/projects/qubex/qubex-0.jpg";
import qubex1 from "../../../assets/images/projects/qubex/qubex-1.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Qubex LLM",
  theme: "dark",
  tags: ["next", "react", "openai", "vercel"],
  live: "https://qubex-global.vercel.app/",
  description:
    "Durchdachte KI-Chat-Oberfläche für Large Language Models. Gebaut mit Next.js und React, deployed auf Vercel.<br/><br/>Unterstützt Streaming-Antworten, Gesprächsverlauf und mehrere Modellkonfigurationen. Entwickelt für maximale Einfachheit — kein Aufwand zwischen Nutzer und Modell.",
  components: [
    {
      type: "media",
      props: { type: "image", src: qubex0, alt: "Chat-Oberfläche", caption: "Chat-Oberfläche" },
    },
    {
      type: "media",
      props: { type: "image", src: qubex1, alt: "Modell-Features", caption: "Modell-Features" },
    },
  ],
} as const satisfies ProjectContent;
