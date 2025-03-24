import * as React from "react"

import type { Metadata } from "next"
import { Link } from "next-view-transitions"

import { ArrowRight } from "akar-icons"

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
      <h1 className="mb-8 mt-12 text-3xl font-semibold leading-snug tracking-tight md:mb-12">
        <span className="flex text-neutral-800 dark:text-neutral-300">
          Blogs <br />
        </span>
        <span className="flex text-neutral-400 dark:text-neutral-600">
          & Articles.
        </span>
      </h1>
      <div className="space-y-2.5 text-neutral-800 dark:text-neutral-400 mb-24">
        {allBlogs.map((blog, index) => (
          <div key={index}>
            <Link
              href={`/blogs/${blog.slug}`}
              className="group flex items-center gap-2"
            >
              <p className="font-medium">{blog.title}</p>
              <div className="flex-1 border-t border-dashed border-neutral-300 dark:border-neutral-800" />
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
