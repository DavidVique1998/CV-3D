import qubex0 from "../../../assets/images/projects/qubex/qubex-0.jpg";
import qubex1 from "../../../assets/images/projects/qubex/qubex-1.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Qubex LLM",
  theme: "dark",
  tags: ["next", "react", "openai", "vercel"],
  live: "https://qubex-global.vercel.app/",
  description:
    "Polished AI chat interface exposing large language models through a clean, fast UI. Built with Next.js and React, deployed on Vercel.<br/><br/>Supports streaming responses, conversation history, and multiple model configurations. Designed for simplicity — no friction between the user and the model.",
  components: [
    {
      type: "media",
      props: { type: "image", src: qubex0, alt: "Chat interface", caption: "Chat interface" },
    },
    {
      type: "media",
      props: { type: "image", src: qubex1, alt: "Model features", caption: "Model features" },
    },
  ],
} as const satisfies ProjectContent;
