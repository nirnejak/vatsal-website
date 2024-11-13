import * as React from "react"

import { type Metadata } from "next"

import * as motion from "framer-motion/client"
import Image from "next/image"

import { BASE_TRANSITION } from "utils/animation"
import { getBlogBySlug } from "utils/blog"
import classNames from "utils/classNames"
import markdownToHtml from "utils/markdownToHtml"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  // TODO: get these from the markdown
  path: "/blogs/slug-of-the-blog/",
  title: "Blogs | Vatsal Dhameliya - AI Scientist",
  description: "Blogs on AI and tech writted by Vatsal Dhameliya",
})

interface Props {
  params: {
    slug: string
  }
}

const BlogPage: React.FC<Props> = async ({ params }) => {
  const post = getBlogBySlug(params.slug, [
    "slug",
    "title",
    "description",
    "image",
    "content",
  ])
  const content = await markdownToHtml(
    post.content !== null ? (post.content as string) : ""
  )

  return (
    <main className="flex min-h-screen items-center justify-start">
      <div className="mx-auto w-full max-w-[580px] px-4 md:px-0">
        <motion.h1
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0, ...BASE_TRANSITION }}
          className="mb-4 mt-24 text-3xl font-semibold leading-snug text-neutral-800 dark:text-neutral-300"
        >
          {post.title}
        </motion.h1>
        <motion.p
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.1, ...BASE_TRANSITION }}
          className="mb-8 text-base leading-snug text-neutral-400 dark:text-neutral-600"
        >
          {post.description}
        </motion.p>
        <motion.div
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.2, ...BASE_TRANSITION }}
          className="mb-8"
        >
          <Image
            className="rounded-md shadow"
            src={`/images/blogs/${post.slug}/${post.image}`}
            alt={post.title}
            width={680}
            height={450}
          />
        </motion.div>
        <motion.div
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.3, ...BASE_TRANSITION }}
          className="mb-24 space-y-2 text-neutral-800 dark:text-neutral-400"
        >
          <article
            className={classNames(
              "prose prose-neutral dark:prose-invert",
              "dark:prose-tr:bg-neutral-800 dark:prose-th:bg-neutral-950/30",
              "prose-blockquote:opacity-85 dark:prose-blockquote:opacity-80",
              "prose-hr:opacity-85 dark:prose-hr:opacity-80",
              "prose-p:opacity-85 dark:prose-p:opacity-80",
              "prose-a::opacity-85 dark:prose-a:opacity-80",
              "prose-h1:opacity-85 dark:prose-h1:opacity-80",
              "prose-h2:opacity-85 dark:prose-h2:opacity-80",
              "prose-h3:opacity-85 dark:prose-h3:opacity-80",
              "prose-ul:opacity-85 dark:prose-ul:opacity-80",
              "prose-ol:opacity-85 dark:prose-ol:opacity-80",
              "prose-li:opacity-85 dark:prose-li:opacity-80"
            )}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </motion.div>
      </div>
    </main>
  )
}

export default BlogPage
