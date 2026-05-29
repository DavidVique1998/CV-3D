import thumbnailBmc from "../../../assets/thumbnails/bmc.jpg";
import thumbnailUmi from "../../../assets/thumbnails/umi.jpg";
import thumbnailCt from "../../../assets/thumbnails/ct.jpg";
import thumbnailQubex from "../../../assets/thumbnails/qubex.jpg";
import thumbnailEntropia from "../../../assets/thumbnails/entropia.jpg";
import thumbnailOnmidental from "../../../assets/thumbnails/onmidental.jpg";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Benefit Match Center",
    slug: "bmc",
    thumbnail: thumbnailBmc,
    description: "Plataforma de beneficios Section-125",
  },
  {
    title: "UMI — Meeting Intel",
    slug: "umi",
    thumbnail: thumbnailUmi,
    description: "Inteligencia de reuniones con IA",
  },
  {
    title: "Commission Tracker",
    slug: "ct",
    thumbnail: thumbnailCt,
    description: "Analizador PDF serverless",
  },
  {
    title: "Qubex LLM",
    slug: "qubex",
    thumbnail: thumbnailQubex,
    description: "Interfaz de chat con IA",
  },
  {
    title: "Entropía N8N Studio",
    slug: "entropia",
    thumbnail: thumbnailEntropia,
    description: "Agencia de automatización con IA",
  },
  {
    title: "Dental Estudio Tenerife",
    slug: "onmidental",
    thumbnail: thumbnailOnmidental,
    description: "Rediseño de clínica dental",
  },
] as const satisfies ProjectPreview[];
