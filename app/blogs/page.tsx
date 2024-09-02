import * as React from "react"

import { type Metadata } from "next"

import ComingSoon from "@/components/molecules/ComingSoon"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/blogs/",
  title: "Blogs | Vatsal Dhameliya - AI Scientist",
  description: "Blogs on AI and tech writted by Vatsal Dhameliya",
})

const BlogsPage: React.FC = () => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <ComingSoon />
    </main>
  )
}

export default BlogsPage
