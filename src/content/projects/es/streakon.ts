import streakon0 from "../../../assets/images/projects/streakon/streakon-0.webp";
import streakon1 from "../../../assets/images/projects/streakon/streakon-1.webp";
import streakon2 from "../../../assets/images/projects/streakon/streakon-2.webp";
import streakon3 from "../../../assets/images/projects/streakon/streakon-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "StreakOn",
  theme: "dark",
  tags: ["next", "node", "postgresql", "redis"],
  videoBorder: false,
  live: "https://www.streakon.app",
  description:
    "StreakOn ayuda a grupos pequeños a mantener hábitos diarios mediante rachas compartidas y check-ins sencillos.<br/><br/>La app fue desarrollada con foco en reducir la fricción de interacción, uso móvil y funciones sociales ligeras — con Next.js, Node.js, PostgreSQL y Redis.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: streakon0,
        alt: "Rachas individuales y grupales",
        caption: "Rachas individuales y grupales",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon1,
        alt: "Progreso de racha",
        caption: "Progreso de racha",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon2,
        alt: "Animar a amigos",
        caption: "Animar a amigos",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon3,
        alt: "Flujo de invitación",
        caption: "Flujo de invitación",
      },
    },
  ],
} as const satisfies ProjectContent;
