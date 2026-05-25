import umi0 from "../../../assets/images/projects/umi/umi-0.jpg";
import umi1 from "../../../assets/images/projects/umi/umi-1.jpg";
import umi2 from "../../../assets/images/projects/umi/umi-2.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "UMI — Unified Meeting Intel",
  theme: "dark",
  tags: ["nestjs", "next", "openai", "aws", "postgresql"],
  live: "https://d9shobjqv3rms.cloudfront.net/landing",
  description:
    "Multi-platform meeting intelligence system for Google Meet, Zoom, and Teams. Transcription analysis, third-party transcript uploads, AI chat flows over meeting content, and real-time statistics dashboard.<br/><br/>NestJS API on AWS Lambda, Next.js frontend, OpenAI Whisper for transcription, mem0 for persistent AI memory across sessions. Deployed with SST v4 + GitHub Actions CI/CD.",
  components: [
    {
      type: "media",
      props: { type: "image", src: umi0, alt: "Landing hero", caption: "Landing hero" },
    },
    {
      type: "media",
      props: { type: "image", src: umi1, alt: "Features overview", caption: "Features overview" },
    },
    {
      type: "media",
      props: { type: "image", src: umi2, alt: "Platform details", caption: "Platform details" },
    },
  ],
} as const satisfies ProjectContent;
