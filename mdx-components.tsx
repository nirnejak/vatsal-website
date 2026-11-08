import type { MDXComponents } from "mdx/types"
import Image, { type ImageProps } from "next/image"
import { Link } from "next-view-transitions"
import type * as React from "react"

import classNames from "./utils/classNames"

interface Props {
  children: React.ReactNode
}

const BlogWrapper: React.FC<Props> = ({ children }) => {
  return (
    <main className="mx-auto w-full max-w-145 px-4 md:px-0">
      <article
        className={classNames(
          "prose prose-neutral dark:prose-invert mb-24",
          "prose-p:opacity-85 dark:prose-p:opacity-80",
          "prose-blockquote:opacity-85 dark:prose-blockquote:opacity-80",
          "prose-headings:font-semibold prose-headings:opacity-85 dark:prose-headings:opacity-80",
          "prose-h1:mt-24 prose-h1:mb-0 prose-h1:text-3xl prose-h1:leading-snug prose-h1:tracking-tight",

          "prose-img:mx-auto md:prose-img:my-28 md:prose-img:scale-125",
          "prose-pre:bg-black prose-pre:px-6 prose-pre:py-5.5 prose-pre:leading-5.5 prose-code:text-sm",
          "prose-table:overflow-hidden prose-table:rounded-xl",
          "prose-thead:border-neutral-300 prose-tr:border-neutral-300 dark:prose-thead:border-neutral-900 dark:prose-tr:border-neutral-900",
          "prose-th:bg-neutral-200 dark:prose-th:bg-neutral-900/60 dark:prose-th:text-neutral-50",
          "prose-tr:bg-neutral-100 dark:prose-tr:bg-neutral-800",
          "prose-td:px-3 prose-th:px-3 prose-td:py-3.5 prose-th:py-3.5"
        )}
      >
        {children}
      </article>
    </main>
  )
}

// Inline images are scaled up 125% from the 580px article column on desktop
const BlogImage: React.FC<ImageProps> = ({ alt, ...props }) => {
  return <Image alt={alt} sizes="(min-width: 768px) 725px, 100vw" {...props} />
}

// The cover is the largest element on the page, so it loads eagerly
const BlogCover: React.FC<ImageProps> = ({ alt, ...props }) => {
  return (
    <Image
      alt={alt}
      preload
      sizes="(min-width: 768px) 580px, 100vw"
      {...props}
    />
  )
}

const components: MDXComponents = {
  Image: BlogImage,
  Cover: BlogCover,
  a: ({
    href = "",
    children,
    ...props
  }: React.ComponentPropsWithoutRef<"a">) => {
    if (href.startsWith("/")) {
      return (
        <Link
          href={href}
          className={`underline underline-offset-2 hover:no-underline`}
          {...props}
        >
          {children}
        </Link>
      )
    }
    if (href.startsWith("#")) {
      return (
        <a
          href={href}
          className={`underline underline-offset-2 hover:no-underline`}
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
        className={`underline underline-offset-2 hover:no-underline`}
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
