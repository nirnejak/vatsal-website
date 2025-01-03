import createMDX from "@next/mdx"

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [["remarkMath"]],
    rehypePlugins: [["rehype-katex"]],
  },
})

export default withMDX(nextConfig)
