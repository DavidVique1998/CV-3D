export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "nestjs"
  | "openai"
  | "aws"
  | "n8n"
  | "langchain"
  | "docker"
  | "typescript"
  | "vercel";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  nestjs: "NestJS",
  openai: "OpenAI",
  aws: "AWS Lambda",
  n8n: "N8N",
  langchain: "LangChain",
  docker: "Docker",
  typescript: "TypeScript",
  vercel: "Vercel",
} as const satisfies Record<TagVariant, string>;
