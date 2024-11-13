import fs from "fs"
import { join } from "path"

import matter from "gray-matter"

const blogsDirectory = join(process.cwd(), "blogs")

export const getBlogDirectories = (): any => {
  return fs.readdirSync(blogsDirectory)
}

export const getBlogBySlug = (slug: string, fields: string[] = []): any => {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = join(blogsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  const items: Record<string, string> = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug
    }
    if (field === "content") {
      items[field] = content
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field]
    }
  })

  return items
}

export const getAllBlogs = (fields: string[] = []): any[] => {
  const directories = getBlogDirectories()
  const blogs = directories
    .map((slug: string) => getBlogBySlug(slug, fields))
    .filter((blog: any) => blog.active)
    .sort((blog1: any, blog2: any) => (blog1.date > blog2.date ? -1 : 1))
  return blogs
}
