import rehypeShiki from "@shikijs/rehype"
import rehypeFormat from "rehype-format"
import rehypeRaw from "rehype-raw"
import rehypeStringify from "rehype-stringify"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { unified } from "unified"

export default async function markdownToHtml(
  markdown: string
): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    .use(rehypeShiki, {
      theme: "vitesse-dark",
    })
    .use(rehypeRaw)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(markdown)

  return result.toString()
}
