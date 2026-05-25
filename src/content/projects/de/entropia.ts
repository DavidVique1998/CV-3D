import entropia0 from "../../../assets/images/projects/entropia/entropia-0.jpg";
import entropia1 from "../../../assets/images/projects/entropia/entropia-1.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Entropía N8N Studio",
  theme: "dark",
  tags: ["n8n", "langchain", "docker", "node"],
  live: "https://entropia-n8n-studio.vercel.app/en",
  description:
    "KI-Automatisierungsagentur mit End-to-End-Voice- und Chat-Pipelines für KMUs. N8N-Agenten-Flows mit mehrstufigen Tool-Calls, RAG-Memory und Fallback-Routing.<br/><br/>Integriert GoHighLevel, ElevenLabs Voice-Cloning für IVR, Twilio SMS/Voice, Retell AI Multi-Turn Voice Agents und WhatsApp-Funnels mit CRM-Webhooks.",
  components: [
    {
      type: "media",
      props: { type: "image", src: entropia0, alt: "Agentur-Landing", caption: "Agentur-Landing" },
    },
    {
      type: "media",
      props: { type: "image", src: entropia1, alt: "Services-Bereich", caption: "Services-Bereich" },
    },
  ],
} as const satisfies ProjectContent;
