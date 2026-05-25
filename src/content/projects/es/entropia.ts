import entropia0 from "../../../assets/images/projects/entropia/entropia-0.jpg";
import entropia1 from "../../../assets/images/projects/entropia/entropia-1.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Entropía N8N Studio",
  theme: "dark",
  tags: ["n8n", "langchain", "docker", "node"],
  live: "https://entropia-n8n-studio.vercel.app/en",
  description:
    "Agencia de automatización con IA con pipelines end-to-end de voz y chat para PYMEs. Flujos de agentes N8N con llamadas a herramientas multi-etapa, memoria RAG y enrutamiento de respaldo.<br/><br/>Integra GoHighLevel, clonación de voz con ElevenLabs para IVR, SMS/Voz con Twilio, agentes de voz multi-turno con Retell AI y embudos de WhatsApp con webhooks CRM.",
  components: [
    {
      type: "media",
      props: { type: "image", src: entropia0, alt: "Landing de la agencia", caption: "Landing de la agencia" },
    },
    {
      type: "media",
      props: { type: "image", src: entropia1, alt: "Sección de servicios", caption: "Sección de servicios" },
    },
  ],
} as const satisfies ProjectContent;
