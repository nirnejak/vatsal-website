import type { MetadataRoute } from "next"

import { allBlogs } from "@/app/blogs/data"
import { config } from "@/utils/metadata"

const { baseUrl } = config

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = allBlogs.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/work/`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs/`,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/photos/`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ]

  return [...staticRoutes, ...blogPosts]
}
