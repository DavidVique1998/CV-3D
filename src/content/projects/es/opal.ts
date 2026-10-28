import videoOpal from "../../../assets/videos/opal.mp4";
import videoOpalNarrated from "../../../assets/videos/opal-narrated.mp4";

import opal0 from "../../../assets/images/projects/opal/opal-0.jpg";
import opal1 from "../../../assets/images/projects/opal/opal-1.jpg";
import opal2 from "../../../assets/images/projects/opal/opal-2.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Opal Meetings",
  theme: "dark",
  tags: ["next", "nestjs", "postgresql", "react-native", "azure", "salesforce"],
  live: "https://meetings-dev.opalgroup.net",
  description:
    "Plataforma de reuniones de Opal Group para sus conferencias ejecutivas, diseñada y construida desde cero: app web (Next.js + NestJS + PostgreSQL) y apps iOS y Android (React Native). Delegados y vendors se registran, eligen y priorizan a quién quieren conocer, y un algoritmo de matching agenda cada par en un horario libre para ambos. El dashboard de operaciones muestra cupos, matches y alertas en tiempo real; los portales de asistentes y vendors muestran cada agenda en vivo; Salesforce y MeetMax se mantienen sincronizados. Desplegada en Azure con pipelines CI/CD, con branding, sistema de colores y layout basados en la identidad de Opal Group.",
  components: [
    {
      type: "media",
      props: { type: "video", src: videoOpal, caption: "Recorrido de la landing" },
    },
    {
      type: "media",
      props: {
        type: "video",
        src: videoOpalNarrated,
        controls: true,
        subtitles: "/subtitles/opal-narrated-en.vtt",
        caption: "Recorrido narrado (en inglés)",
      },
    },
    {
      type: "media",
      props: { type: "image", src: opal0, alt: "Landing page", caption: "Landing page" },
    },
    {
      type: "media",
      props: { type: "image", src: opal1, alt: "Dashboard de operaciones", caption: "Dashboard de operaciones" },
    },
    {
      type: "media",
      props: { type: "image", src: opal2, alt: "Credencial del evento y demo", caption: "Credencial del evento y demo" },
    },
  ],
} as const satisfies ProjectContent;
