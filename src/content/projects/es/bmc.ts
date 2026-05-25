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
    "Plataforma de beneficios Section-125 para empleadores en EE.UU. SPA React 19 en AWS S3 + CloudFront, con dos funciones Lambda serverless para formularios y un widget de chat con IA (streaming) vía la API de Claude.<br/><br/>Envío de emails con Resend. Totalmente gestionado con SST v4 — sin servidores, sin costos en reposo.",
  components: [
    {
      type: "media",
      props: { type: "image", src: bmc0, alt: "Sección hero", caption: "Sección hero" },
    },
    {
      type: "media",
      props: { type: "image", src: bmc1, alt: "Beneficios y características", caption: "Beneficios y características" },
    },
    {
      type: "media",
      props: { type: "image", src: bmc2, alt: "Widget de chat IA", caption: "Widget de chat IA" },
    },
  ],
} as const satisfies ProjectContent;
