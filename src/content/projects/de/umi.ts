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
    "Meeting-Intelligence-Plattform für Google Meet, Zoom und Teams. Transkriptionsanalyse, Upload externer Transkripte, KI-Chat über Meeting-Inhalte und Echtzeit-Statistik-Dashboard.<br/><br/>NestJS-API auf AWS Lambda, Next.js-Frontend, OpenAI Whisper für Transkription, mem0 für persistentes KI-Gedächtnis. Deployment mit SST v4 + GitHub Actions CI/CD.",
  components: [
    {
      type: "media",
      props: { type: "image", src: umi0, alt: "Landing-Seite", caption: "Landing-Seite" },
    },
    {
      type: "media",
      props: { type: "image", src: umi1, alt: "Features-Übersicht", caption: "Features-Übersicht" },
    },
    {
      type: "media",
      props: { type: "image", src: umi2, alt: "Plattform-Details", caption: "Plattform-Details" },
    },
  ],
} as const satisfies ProjectContent;
