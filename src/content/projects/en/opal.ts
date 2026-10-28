import videoOpal from "../../../assets/videos/opal.mp4";
import videoOpalNarrated from "../../../assets/videos/opal-narrated.mp4";

import opal0 from "../../../assets/images/projects/opal/opal-0.jpg";
import opal1 from "../../../assets/images/projects/opal/opal-1.jpg";
import opal2 from "../../../assets/images/projects/opal/opal-2.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Opal Meetings",
  theme: "dark",
  tags: ["next", "nestjs", "postgresql", "react-native", "azure", "salesforce"],
  live: "https://meetings-dev.opalgroup.net",
  description:
    "Opal Group's meetings platform for its executive conferences, designed and built from scratch: a web app (Next.js + NestJS + PostgreSQL) and iOS and Android apps (React Native). Delegates and vendors register, pick and rank who they want to meet, and a matching algorithm books each pair into a slot both have free. The operations dashboard tracks quotas, matches and alerts in real time; attendee and vendor portals show each schedule live; Salesforce and MeetMax stay in sync. Deployed on Azure with CI/CD pipelines, with branding, color system and layout derived from Opal Group's identity.",
  components: [
    {
      type: "media",
      props: { type: "video", src: videoOpal, caption: "Landing tour" },
    },
    {
      type: "media",
      props: {
        type: "video",
        src: videoOpalNarrated,
        controls: true,
        subtitles: "/subtitles/opal-narrated-en.vtt",
        caption: "Narrated tour",
      },
    },
    {
      type: "media",
      props: { type: "image", src: opal0, alt: "Landing page", caption: "Landing page" },
    },
    {
      type: "media",
      props: { type: "image", src: opal1, alt: "Operations dashboard", caption: "Operations dashboard" },
    },
    {
      type: "media",
      props: { type: "image", src: opal2, alt: "Event badge & live demo", caption: "Event badge & live demo" },
    },
  ],
} as const satisfies ProjectContent;
