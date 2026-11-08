import type { Metadata } from "next"
import type * as React from "react"

import { blogSlugs, blogs } from "@/blogs"
import getMetadata from "@/utils/metadata"

interface Props {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const blog = blogs[slug]
  return getMetadata({
    path: `/blogs/${slug}/`,
    title: blog.title,
    description: blog.description,
    image: blog.cover.src,
  })
}

const BlogPage: React.FC<Props> = async ({ params }) => {
  const { slug } = await params
  const { Content } = blogs[slug]
  return <Content />
}

export default BlogPage
