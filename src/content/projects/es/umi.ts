import umi0 from "../../../assets/images/projects/umi/umi-0.jpg";
import umi1 from "../../../assets/images/projects/umi/umi-1.jpg";
import umi2 from "../../../assets/images/projects/umi/umi-2.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "UMI — Unified Meeting Intel",
  theme: "dark",
  tags: ["nestjs", "next", "openai", "aws", "postgresql"],
  live: "https://d9shobjqv3rms.cloudfront.net/landing",
  description:
    "Plataforma de inteligencia de reuniones para Google Meet, Zoom y Teams. Análisis de transcripciones, carga de transcripciones externas, chat con IA sobre el contenido de reuniones y dashboard de estadísticas en tiempo real.<br/><br/>API NestJS en AWS Lambda, frontend Next.js, OpenAI Whisper para transcripción, mem0 para memoria de IA persistente. Despliegue con SST v4 + GitHub Actions CI/CD.",
  components: [
    {
      type: "media",
      props: { type: "image", src: umi0, alt: "Página de inicio", caption: "Página de inicio" },
    },
    {
      type: "media",
      props: { type: "image", src: umi1, alt: "Vista de características", caption: "Vista de características" },
    },
    {
      type: "media",
      props: { type: "image", src: umi2, alt: "Detalles de la plataforma", caption: "Detalles de la plataforma" },
    },
  ],
} as const satisfies ProjectContent;
