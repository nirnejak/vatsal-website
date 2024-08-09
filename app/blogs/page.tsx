import * as React from "react"

import { type Metadata } from "next"

import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/blogs/",
  title: "Blogs | Vatsal Dhameliya - AI Scientist",
  description: "Blogs on AI and tech writted by Vatsal Dhameliya",
})

const BlogsPage: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-1 items-center justify-center">
      <div className="mx-auto w-full max-w-[580px] px-4 md:px-0">
        <h1 className="text-3xl font-semibold leading-snug text-neutral-800 dark:text-neutral-300">
          Coming <br />
          <span className="text-neutral-400 dark:text-neutral-600">Soon.</span>
        </h1>
      </div>
    </main>
  )
}

export default BlogsPage
