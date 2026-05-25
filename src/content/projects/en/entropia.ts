import entropia0 from "../../../assets/images/projects/entropia/entropia-0.jpg";
import entropia1 from "../../../assets/images/projects/entropia/entropia-1.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Entropía N8N Studio",
  theme: "dark",
  tags: ["n8n", "langchain", "docker", "node"],
  live: "https://entropia-n8n-studio.vercel.app/en",
  description:
    "AI automation agency delivering end-to-end voice and chat pipelines for SMBs. N8N agentic flows with multi-step tool calls, RAG memory, and fallback routing.<br/><br/>Integrates GoHighLevel embedded apps, ElevenLabs voice cloning for IVR, Twilio SMS/voice, Retell AI multi-turn voice agents, and WhatsApp funnels wired into CRM webhooks.",
  components: [
    {
      type: "media",
      props: { type: "image", src: entropia0, alt: "Agency landing", caption: "Agency landing" },
    },
    {
      type: "media",
      props: { type: "image", src: entropia1, alt: "Services section", caption: "Services section" },
    },
  ],
} as const satisfies ProjectContent;
