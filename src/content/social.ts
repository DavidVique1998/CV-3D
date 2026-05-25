export const social = [
  { url: "mailto:albert98.developer@gmail.com", name: "mail" },
  { url: "https://github.com/DavidVique1998", name: "github" },
  { url: "https://www.linkedin.com/in/david-vique-b29941206", name: "linkedin" },
  { url: "https://www.instagram.com/david_vique98/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
