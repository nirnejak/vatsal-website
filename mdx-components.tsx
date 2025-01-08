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
      <motion.article
        initial={{ translateY: 10, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ delay: 0.3, ...BASE_TRANSITION }}
        className={classNames(
          "mb-24 prose prose-neutral dark:prose-invert prose:leading-snug prose:tracking-tight",
          "prose-p:opacity-85 dark:prose-p:opacity-80",
          "prose-blockquote:opacity-85 dark:prose-blockquote:opacity-80",
          "prose-headings:font-semibold prose-headings:opacity-85 dark:prose-headings:opacity-80",
          "prose-h1:tracking-tight prose-h1:mt-24 prose-h1:mb-0 prose-h1:text-3xl prose-h1:leading-snug",

          "md:prose-img:scale-125 md:prose-img:my-28 prose-img:mx-auto",
          "prose-pre:p-0 prose-pre:bg-black prose-code:text-sm prose-pre:px-3",
          "prose-table:rounded-xl prose-table:overflow-hidden",
          "prose-thead:border-neutral-300 prose-tr:border-neutral-300 dark:prose-thead:border-neutral-900 dark:prose-tr:border-neutral-900",
          "prose-th:bg-neutral-200 dark:prose-th:text-neutral-50 dark:prose-th:bg-neutral-900/60",
          "prose-tr:bg-neutral-100 dark:prose-tr:bg-neutral-800",
          "prose-th:py-3.5 prose-th:px-3 prose-td:py-3.5 prose-td:px-3"
        )}
      >
        {children}
      </motion.article>
    </main>
  )
}

const components: MDXComponents = {
  code: async ({
    className = "",
    children,
    ...props
  }: React.ComponentPropsWithoutRef<"code">) => {
    const isInline = !className.includes("language-")

    const codeHTML = await codeToHtml(children as string, {
      lang: className != null ? className.replace(/language-/, "") : "text",
      theme: "vitesse-black",
    })

    if (isInline) {
      return (
        <code
          className="rounded bg-neutral-100 px-1.5 py-0.5 font-semibold text-green-600 before:hidden after:hidden dark:bg-neutral-950 dark:text-green-400"
          {...props}
        >
          {(children as string).replaceAll("`", "")}
        </code>
      )
    } else {
      return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
    }
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
