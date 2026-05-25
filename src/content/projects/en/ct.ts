import ct0 from "../../../assets/images/projects/ct/ct-0.jpg";
import ct1 from "../../../assets/images/projects/ct/ct-1.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Commission Tracker",
  theme: "light",
  tags: ["aws", "openai", "node", "typescript"],
  description:
    "Serverless commission data analyzer for 52 insurance companies. Dynamic prompt templates per company, PDF OCR pipeline with Tesseract, and queue-based flows for batch processing and human-review escalation.<br/><br/>Deployed on AWS Lambda with GitHub Actions CI/CD. Processes hundreds of commission statements per run with structured JSON output for downstream reconciliation.",
  components: [
    {
      type: "media",
      props: { type: "image", src: ct0, alt: "Landing page", caption: "Landing page" },
    },
    {
      type: "media",
      props: { type: "image", src: ct1, alt: "Features section", caption: "Features section" },
    },
  ],
} as const satisfies ProjectContent;
