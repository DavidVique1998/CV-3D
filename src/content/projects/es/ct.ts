import ct0 from "../../../assets/images/projects/ct/ct-0.jpg";
import ct1 from "../../../assets/images/projects/ct/ct-1.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Commission Tracker",
  theme: "light",
  tags: ["aws", "openai", "node", "typescript"],
  description:
    "Analizador serverless de comisiones para 52 compañías de seguros. Plantillas de prompt dinámicas por empresa, pipeline de OCR en PDF con Tesseract y flujos basados en cola para procesamiento por lotes y escalación manual.<br/><br/>Desplegado en AWS Lambda con CI/CD de GitHub Actions. Procesa cientos de liquidaciones de comisiones por ejecución con salida JSON estructurada.",
  components: [
    {
      type: "media",
      props: { type: "image", src: ct0, alt: "Página de inicio", caption: "Página de inicio" },
    },
    {
      type: "media",
      props: { type: "image", src: ct1, alt: "Sección de características", caption: "Sección de características" },
    },
  ],
} as const satisfies ProjectContent;
