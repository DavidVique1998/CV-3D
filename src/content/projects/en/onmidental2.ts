import onmidental2_0 from "../../../assets/images/projects/onmidental2/onmidental2-0.png";
import onmidental2_1 from "../../../assets/images/projects/onmidental2/onmidental2-1.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Clínica Dental Goyanc",
  theme: "dark",
  tags: ["next", "react", "tailwind", "vercel"],
  live: "https://clinicadentalgoyanc.vercel.app/",
  description:
    "Full website for a dental clinic in Spain, built with Next.js 15 and Tailwind CSS. Features a luxury dark aesthetic with gold accents, scroll-driven text reveal animations, an AI chat assistant for patient enquiries, and a WhatsApp conversion button — delivered as a self-initiated portfolio project.",
  components: [
    {
      type: "media",
      props: { type: "image", src: onmidental2_0, alt: "Hero section", caption: "Hero section" },
    },
    {
      type: "media",
      props: { type: "image", src: onmidental2_1, alt: "Full page view", caption: "Full page view" },
    },
  ],
} as const satisfies ProjectContent;
