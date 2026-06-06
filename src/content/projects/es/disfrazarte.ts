import disfrazarte0 from "../../../assets/images/projects/disfrazarte/disfrazarte-0.jpg";
import disfrazarte1 from "../../../assets/images/projects/disfrazarte/disfrazarte-1.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Disfrazarte",
  theme: "dark",
  tags: ["next", "tailwind", "framer-motion", "vercel"],
  live: "https://disfrazarte-delta.vercel.app",
  description:
    "Landing page para Disfrazarte — tienda de alquiler de trajes y disfraces con dos locales en Ambato y Riobamba, Ecuador. Hero scrollytelling con clip-path paralaje que se expande al desplazarse, scroll sticky horizontal en 3 paneles con los servicios, galería bento del catálogo con drag-to-explore en escritorio y grilla de 2 columnas en móvil. Flujos CTA por WhatsApp para solicitar catálogo y reservar trajes.",
  components: [
    {
      type: "media",
      props: { type: "image", src: disfrazarte0, alt: "Sección hero", caption: "Sección hero" },
    },
    {
      type: "media",
      props: { type: "image", src: disfrazarte1, alt: "Servicios y catálogo", caption: "Servicios y catálogo" },
    },
  ],
} as const satisfies ProjectContent;
