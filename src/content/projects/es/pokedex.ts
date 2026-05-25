import videoPokedex from "../../../assets/videos/pokedex.mp4";

import pokedex0 from "../../../assets/images/projects/pokedex/pokedex-0.webp";
import pokedex1 from "../../../assets/images/projects/pokedex/pokedex-1.webp";
import pokedex2 from "../../../assets/images/projects/pokedex/pokedex-2.webp";
import pokedex3 from "../../../assets/images/projects/pokedex/pokedex-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Pokédex",
  theme: "light",
  tags: ["javascript", "html", "css"],
  live: "https://pokedex.david-hckh.com/",
  source: "https://github.com/davidhckh/pokedex",
  videoBorder: true,
  description:
    "Uno de mis primeros proyectos web para practicar conceptos fundamentales del desarrollo web. La Pokédex es de código abierto para que otros desarrolladores puedan aprender igual que yo.<br/><br/>También interactúa con una API pública para ganar experiencia adicional.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoPokedex,
        caption: "Aplicación Pokédex",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex0,
        alt: "Vista por defecto",
        caption: "Vista por defecto",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex1,
        alt: "Función de búsqueda",
        caption: "Función de búsqueda",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex2,
        alt: "Diseño responsive",
        caption: "Diseño responsive",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex3,
        alt: "Carga diferida",
        caption: "Carga diferida",
      },
    },
  ],
} as const satisfies ProjectContent;
