import rehypeFormat from "rehype-format"
import rehypeMathjax from "rehype-mathjax"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeRaw from "rehype-raw"
import rehypeStringify from "rehype-stringify"
import math from "remark-math"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { unified } from "unified"

export default async function markdownToHtml(
  markdown: string
): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(math)
    .use(rehypeMathjax)
    .use(rehypePrettyCode, {
      theme: "vitesse-black",
    })
    .use(rehypeRaw)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(markdown)

  return result.toString()
}
