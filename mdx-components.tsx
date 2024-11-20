import * as React from "react"

import * as motion from "framer-motion/client"
import type { MDXComponents } from "mdx/types"
import Link from "next/link"
import { codeToHtml } from "shiki"

import { BASE_TRANSITION } from "./utils/animation"
import classNames from "./utils/classNames"

interface Props {
  children: React.ReactNode
}

const BlogWrapper: React.FC<Props> = ({ children }) => {
  return (
    <main className="mx-auto w-full max-w-[580px] px-4 md:px-0">
      <motion.div
        initial={{ translateY: 10, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ delay: 0.3, ...BASE_TRANSITION }}
        className="mb-24 space-y-2 text-neutral-800 dark:text-neutral-400"
      >
        <article
          className={classNames(
            "prose prose-neutral dark:prose-invert",
            "prose-pre:p-0 prose-pre:bg-black prose-code:text-sm prose-pre:px-3",
            "md:prose-img:scale-125 md:prose-img:my-28 md:prose-img:border-[40px] md:prose-img:border-solid md:prose-img:border-neutral-50",
            "dark:prose-tr:bg-neutral-800 dark:prose-th:bg-neutral-950/30 prose-td:py-2 prose-td:px-2.5 prose-th:py-2 prose-th:px-2.5 prose-table:rounded-xl",
            "prose-h1:tracking-tight prose-h1:mt-24 prose-h1:mb-0 prose-h1:text-3xl prose-h1:leading-snug",
            "prose-headings:font-semibold prose-headings:opacity-85 dark:prose-headings:opacity-80",
            "prose-p:opacity-85 dark:prose-p:opacity-80",
            "prose-ul:opacity-85 dark:prose-ul:opacity-80",
            "prose-ol:opacity-85 dark:prose-ol:opacity-80",
            "prose-blockquote:opacity-85 dark:prose-blockquote:opacity-80"
          )}
        >
          {children}
        </article>
      </motion.div>
    </main>
  )
}

const components: MDXComponents = {
  code: async ({
    children,
    ...props
  }: React.ComponentPropsWithoutRef<"code">) => {
    const codeHTML = await codeToHtml(children as string, {
      lang: "python",
      theme: "vitesse-black",
    })
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
  },
  a: ({
    href = "",
    children,
    ...props
  }: React.ComponentPropsWithoutRef<"a">) => {
    if (href?.startsWith("/")) {
      return (
        <Link
          href={href}
          className={"underline underline-offset-2 hover:no-underline"}
          {...props}
        >
          {children}
        </Link>
      )
    }
    if (href?.startsWith("#")) {
      return (
        <a
          href={href}
          className={"underline underline-offset-2 hover:no-underline"}
          {...props}
        >
          {children}
        </a>
      )
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={"underline underline-offset-2 hover:no-underline"}
        {...props}
      >
        {children}
      </a>
    )
  },
}

export function useMDXComponents(
  otherComponents: MDXComponents
): MDXComponents {
  return {
    ...otherComponents,
    ...components,
    wrapper: BlogWrapper,
  }
}
