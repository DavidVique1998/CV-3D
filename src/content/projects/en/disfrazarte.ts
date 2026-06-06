import disfrazarte0 from "../../../assets/images/projects/disfrazarte/disfrazarte-0.jpg";
import disfrazarte1 from "../../../assets/images/projects/disfrazarte/disfrazarte-1.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Disfrazarte",
  theme: "dark",
  tags: ["next", "tailwind", "framer-motion", "vercel"],
  live: "https://disfrazarte-delta.vercel.app",
  description:
    "Landing page for Disfrazarte — costume and dress rental shop with two locations in Ambato and Riobamba, Ecuador. Scrollytelling hero with clip-path parallax that expands on scroll, 3-panel horizontal sticky scroll showcasing services, bento-grid catalog gallery with drag-to-explore on desktop and 2-column mobile grid. WhatsApp CTA flows for catalog requests and reservations.",
  components: [
    {
      type: "media",
      props: { type: "image", src: disfrazarte0, alt: "Hero section", caption: "Hero section" },
    },
    {
      type: "media",
      props: { type: "image", src: disfrazarte1, alt: "Services & catalog", caption: "Services & catalog" },
    },
  ],
} as const satisfies ProjectContent;
