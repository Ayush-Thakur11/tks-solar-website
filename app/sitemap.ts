import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tkssolar.in";

  return [
    {
      url: baseUrl,
    },
    {
      url: `${baseUrl}/our-work`,
    },
    {
      url: `${baseUrl}/about-solar`,
    },
    {
      url: `${baseUrl}/earn-with-solar`,
    },
    {
      url: `${baseUrl}/government-schemes`,
    },
    {
      url: `${baseUrl}/start-project`,
    },
  ];
}