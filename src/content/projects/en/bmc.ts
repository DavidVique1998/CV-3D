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
    "Section 125 benefits platform built for US employers. React 19 SPA deployed on AWS S3 + CloudFront, with two serverless Lambda functions handling form submissions and a streaming AI chat widget powered by Claude API.<br/><br/>Email delivery via Resend. Fully managed infrastructure using SST v4 — zero servers, zero idle cost.",
  components: [
    {
      type: "media",
      props: { type: "image", src: bmc0, alt: "Hero section", caption: "Hero section" },
    },
    {
      type: "media",
      props: { type: "image", src: bmc1, alt: "Benefits features", caption: "Benefits features" },
    },
    {
      type: "media",
      props: { type: "image", src: bmc2, alt: "AI chat widget", caption: "AI chat widget" },
    },
  ],
} as const satisfies ProjectContent;
