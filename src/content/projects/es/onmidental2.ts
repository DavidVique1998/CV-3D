import onmidental2_0 from "../../../assets/images/projects/onmidental2/onmidental2-0.png";
import onmidental2_1 from "../../../assets/images/projects/onmidental2/onmidental2-1.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Clínica Dental Goyanc",
  theme: "dark",
  tags: ["next", "react", "tailwind", "vercel"],
  live: "https://clinicadentalgoyanc.vercel.app/",
  description:
    "Sitio web completo para una clínica dental en España, construido con Next.js 15 y Tailwind CSS. Estética oscura de lujo con acentos dorados, animaciones de revelación de texto impulsadas por scroll, asistente de chat con IA para consultas de pacientes y botón de conversión WhatsApp — entregado como proyecto de portafolio de iniciativa propia.",
  components: [
    {
      type: "media",
      props: { type: "image", src: onmidental2_0, alt: "Sección hero", caption: "Sección hero" },
    },
    {
      type: "media",
      props: { type: "image", src: onmidental2_1, alt: "Vista completa", caption: "Vista completa" },
    },
  ],
} as const satisfies ProjectContent;
