import { ArrowRight } from "akar-icons"

import type { Metadata } from "next"
import { Link } from "next-view-transitions"
import type * as React from "react"

import getMetadata from "@/utils/metadata"

import { allBlogs } from "./data"

export const metadata: Metadata = getMetadata({
  path: "/blogs/",
  title: "Blogs | Vatsal Dhameliya - AI Scientist",
  description: "Blogs and articles on AI and tech written by Vatsal Dhameliya",
})

const BlogsPage: React.FC = () => {
  return (
    <main className="mx-auto w-full max-w-[580px] px-4 md:px-0">
      <h1 className="mt-12 mb-8 font-semibold text-3xl/snug tracking-tight md:mb-12">
        <span className="flex text-neutral-800 dark:text-neutral-300">
          Blogs <br />
        </span>
        <span className="flex text-neutral-400 dark:text-neutral-600">
          & Articles.
        </span>
      </h1>
      <div className="mb-24 space-y-2.5 text-neutral-800 dark:text-neutral-400">
        {allBlogs.map((blog) => (
          <div key={blog.slug}>
            <Link
              href={`/blogs/${blog.slug}/`}
              className="group flex items-center gap-2"
            >
              <p className="font-medium">{blog.title}</p>
              <div className="flex-1 border-neutral-300 border-t border-dashed dark:border-neutral-800" />
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}

export default BlogsPage
