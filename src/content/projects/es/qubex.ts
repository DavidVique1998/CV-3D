import qubex0 from "../../../assets/images/projects/qubex/qubex-0.jpg";
import qubex1 from "../../../assets/images/projects/qubex/qubex-1.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Qubex LLM",
  theme: "dark",
  tags: ["next", "react", "openai", "vercel"],
  live: "https://qubex-global.vercel.app/",
  description:
    "Interfaz de chat con IA cuidadosamente diseñada para grandes modelos de lenguaje. Construida con Next.js y React, desplegada en Vercel.<br/><br/>Soporta respuestas en streaming, historial de conversación y múltiples configuraciones de modelo. Desarrollada para máxima simplicidad — sin fricciones entre el usuario y el modelo.",
  components: [
    {
      type: "media",
      props: { type: "image", src: qubex0, alt: "Interfaz de chat", caption: "Interfaz de chat" },
    },
    {
      type: "media",
      props: { type: "image", src: qubex1, alt: "Características del modelo", caption: "Características del modelo" },
    },
  ],
} as const satisfies ProjectContent;
