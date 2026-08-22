import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Skroll — Event Ticketing & Business Tech Solutions",
    short_name: "Skroll",
    description:
      "Sri Lanka's premier event ticketing platform and custom software solutions studio.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F3F0",
    theme_color: "#E8521A",
    icons: [
      {
        src: "/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
