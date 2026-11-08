import createMDX from "@next/mdx"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
}

const withMDX = createMDX({
  options: {
    // Turbopack requires serializable loader options, so plugins are named by string
    remarkPlugins: ["remark-math"],
    rehypePlugins: [
      "rehype-katex",
      ["@shikijs/rehype", { theme: "vitesse-black" }],
    ],
  },
})

export default withMDX(nextConfig)
