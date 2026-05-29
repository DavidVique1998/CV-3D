import onmidental0 from "../../../assets/images/projects/onmidental/onmidental-0.jpg";
import onmidental1 from "../../../assets/images/projects/onmidental/onmidental-1.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Dental Estudio Tenerife",
  theme: "dark",
  tags: ["next", "react", "three", "vercel"],
  live: "https://onmidental.vercel.app/",
  description:
    "Pro bono redesign proposal for a dental clinic in Tenerife, Spain. Built from scratch with Next.js 16, Three.js immersive visuals, Motion scroll animations, and an AI chat assistant powered by Gemini Flash for patient queries about treatments, clinic locations, and appointment booking — delivered at no charge as a self-initiated portfolio project.",
  components: [
    {
      type: "media",
      props: { type: "image", src: onmidental0, alt: "Hero section", caption: "Hero section" },
    },
    {
      type: "media",
      props: { type: "image", src: onmidental1, alt: "Full page view", caption: "Full page view" },
    },
  ],
} as const satisfies ProjectContent;
