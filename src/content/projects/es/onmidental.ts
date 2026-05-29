import onmidental0 from "../../../assets/images/projects/onmidental/onmidental-0.jpg";
import onmidental1 from "../../../assets/images/projects/onmidental/onmidental-1.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Dental Estudio Tenerife",
  theme: "dark",
  tags: ["next", "react", "three", "vercel"],
  live: "https://onmidental.vercel.app/",
  description:
    "Propuesta de rediseño pro bono para una clínica dental en Tenerife, España. Construida desde cero con Next.js 16, visuales inmersivos Three.js, animaciones Motion y un asistente de chat IA con Gemini Flash para consultas de pacientes sobre tratamientos, sedes y citas — entregada sin costo como iniciativa de portafolio.",
  components: [
    {
      type: "media",
      props: { type: "image", src: onmidental0, alt: "Sección hero", caption: "Sección hero" },
    },
    {
      type: "media",
      props: { type: "image", src: onmidental1, alt: "Vista completa", caption: "Vista completa" },
    },
  ],
} as const satisfies ProjectContent;
