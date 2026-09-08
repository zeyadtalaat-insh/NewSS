import { MetadataRoute } from "next";

const BASE_URL = "https://www.superstudios.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/na`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          "en-CA": `${BASE_URL}/na`,
          "x-default": `${BASE_URL}/na`,
        },
      },
    },
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: BASE_URL,
          "ar-SA": `${BASE_URL}/ar`,
          "x-default": BASE_URL,
        },
      },
    },
    {
      url: `${BASE_URL}/ar`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: BASE_URL,
          "ar-SA": `${BASE_URL}/ar`,
          "x-default": BASE_URL,
        },
      },
    },
    {
      url: `${BASE_URL}/partner`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${BASE_URL}/partner`,
          "ar-SA": `${BASE_URL}/ar/partner`,
          "x-default": `${BASE_URL}/partner`,
        },
      },
    },
    {
      url: `${BASE_URL}/ar/partner`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${BASE_URL}/partner`,
          "ar-SA": `${BASE_URL}/ar/partner`,
          "x-default": `${BASE_URL}/partner`,
        },
      },
    },
    {
      url: `${BASE_URL}/academy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${BASE_URL}/academy`,
          "ar-SA": `${BASE_URL}/ar/academy`,
          "x-default": `${BASE_URL}/academy`,
        },
      },
    },
    {
      url: `${BASE_URL}/ar/academy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${BASE_URL}/academy`,
          "ar-SA": `${BASE_URL}/ar/academy`,
          "x-default": `${BASE_URL}/academy`,
        },
      },
    },
  ];
}
