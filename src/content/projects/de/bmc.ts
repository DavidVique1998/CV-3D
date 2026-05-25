import bmc0 from "../../../assets/images/projects/bmc/bmc-0.jpg";
import bmc1 from "../../../assets/images/projects/bmc/bmc-1.jpg";
import bmc2 from "../../../assets/images/projects/bmc/bmc-2.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Benefit Match Center",
  theme: "light",
  tags: ["react", "aws", "typescript"],
  live: "https://benefitmatchcenter.com/",
  description:
    "Section-125-Benefits-Plattform für US-Arbeitgeber. React-19-SPA auf AWS S3 + CloudFront, mit zwei serverlosen Lambda-Funktionen für Formulare und einem KI-Chat-Widget (streaming) über die Claude API.<br/><br/>E-Mail-Versand via Resend. Vollständig mit SST v4 verwaltet — keine Server, keine Leerlaufkosten.",
  components: [
    {
      type: "media",
      props: { type: "image", src: bmc0, alt: "Hero-Bereich", caption: "Hero-Bereich" },
    },
    {
      type: "media",
      props: { type: "image", src: bmc1, alt: "Benefits-Features", caption: "Benefits-Features" },
    },
    {
      type: "media",
      props: { type: "image", src: bmc2, alt: "KI-Chat-Widget", caption: "KI-Chat-Widget" },
    },
  ],
} as const satisfies ProjectContent;
