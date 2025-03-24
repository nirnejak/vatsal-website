import type { MetadataRoute } from "next"

import { allBlogs } from "@/app/blogs/data"
import { config } from "@/utils/metadata"

const { baseUrl } = config

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = allBlogs.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/work/`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs/`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/photos/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ]

  return [...staticRoutes, ...blogPosts]
}
