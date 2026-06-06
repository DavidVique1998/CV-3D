import thumbnailBmc from "../../../assets/thumbnails/bmc.jpg";
import thumbnailUmi from "../../../assets/thumbnails/umi.jpg";
import thumbnailCt from "../../../assets/thumbnails/ct.jpg";
import thumbnailQubex from "../../../assets/thumbnails/qubex.jpg";
import thumbnailEntropia from "../../../assets/thumbnails/entropia.jpg";
import thumbnailOnmidental from "../../../assets/thumbnails/onmidental.jpg";
import thumbnailOnmidental2 from "../../../assets/thumbnails/onmidental2.jpg";
import thumbnailDisfrazarte from "../../../assets/thumbnails/disfrazarte.jpg";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Disfrazarte",
    slug: "disfrazarte",
    thumbnail: thumbnailDisfrazarte,
    description: "Costume shop landing page",
  },
  {
    title: "Clínica Dental Goyanc",
    slug: "onmidental2",
    thumbnail: thumbnailOnmidental2,
    description: "Luxury dental clinic website",
  },
  {
    title: "Dental Estudio Tenerife",
    slug: "onmidental",
    thumbnail: thumbnailOnmidental,
    description: "Dental clinic redesign",
  },
  {
    title: "Benefit Match Center",
    slug: "bmc",
    thumbnail: thumbnailBmc,
    description: "Section 125 benefits platform",
  },
  {
    title: "UMI — Meeting Intel",
    slug: "umi",
    thumbnail: thumbnailUmi,
    description: "AI meeting intelligence",
  },
  {
    title: "Commission Tracker",
    slug: "ct",
    thumbnail: thumbnailCt,
    description: "Serverless PDF analyzer",
  },
  {
    title: "Qubex LLM",
    slug: "qubex",
    thumbnail: thumbnailQubex,
    description: "AI chat interface",
  },
  {
    title: "Entropía N8N Studio",
    slug: "entropia",
    thumbnail: thumbnailEntropia,
    description: "AI automation agency",
  },
] as const satisfies ProjectPreview[];
