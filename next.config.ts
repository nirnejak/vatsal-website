import createMDX from "@next/mdx"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactCompiler: true,
  trailingSlash: true,
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
}

const withMDX = createMDX({
  options: {
    // Turbopack requires serializable loader options, so plugins are named by string
    remarkPlugins: ["remark-math"],
    rehypePlugins: ["rehype-katex"],
  },
})

export default withMDX(nextConfig)
