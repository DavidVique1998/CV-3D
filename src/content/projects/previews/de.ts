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
    description: "Section-125-Benefits-Plattform",
  },
  {
    title: "UMI — Meeting Intel",
    slug: "umi",
    thumbnail: thumbnailUmi,
    description: "KI-Meeting-Intelligence",
  },
  {
    title: "Commission Tracker",
    slug: "ct",
    thumbnail: thumbnailCt,
    description: "Serverloser PDF-Analyzer",
  },
  {
    title: "Qubex LLM",
    slug: "qubex",
    thumbnail: thumbnailQubex,
    description: "KI-Chat-Interface",
  },
  {
    title: "Entropía N8N Studio",
    slug: "entropia",
    thumbnail: thumbnailEntropia,
    description: "KI-Automatisierungsagentur",
  },
  {
    title: "Dental Estudio Tenerife",
    slug: "onmidental",
    thumbnail: thumbnailOnmidental,
    description: "Zahnarztpraxis-Redesign",
  },
] as const satisfies ProjectPreview[];
