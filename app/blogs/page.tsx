import * as React from "react"

import type { Metadata } from "next"

import { ArrowRight } from "akar-icons"
import * as motion from "motion/react-client"
import Link from "next/link"

import ComingSoon from "@/components/molecules/ComingSoon"
import { BASE_TRANSITION } from "@/utils/animation"
import generateMetadata from "@/utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/blogs/",
  title: "Blogs | Vatsal Dhameliya - AI Scientist",
  description: "Blogs and articles on AI and tech written by Vatsal Dhameliya",
})

const blogs = [
  {
    slug: "the-react-agent-framework",
    title: "The ReACT Agent Framework",
  },
  {
    slug: "from-gpt-1-to-gpt-3-a-new-era-in-nlp",
    title: "From GPT-1 to GPT-3: A New Era in NLP",
  },
  {
    slug: "a-comprehensive-overview-of-bert",
    title: "A Comprehensive Overview of BERT",
  },
  {
    slug: "understanding-the-transformer-architecture",
    title: "Understanding the Transformer Architecture",
  },
  {
    slug: "self-attention",
    title: "Self-Attention: Queries, Keys, and Values in Action",
  },
  {
    slug: "understanding-scaling-in-self-attention",
    title: "Understanding scaling factor in Self-Attention",
  },
  {
    slug: "normalization-in-deep-learning",
    title: "Normalization in Deep Learning",
  },
  {
    slug: "understanding-padding-and-look-ahead-mask-in-the-transformer-decoder",
    title: "Padding and Look-Ahead Mask in the Transformer Decoder",
  },
  {
    slug: "encoder-decoder-attention-in-the-transformer",
    title: "Encoder - Decoder Attention in the Transformer",
  },
  {
    slug: "sinusoidal-positional-encoding-in-the-transformer",
    title: "Sinusoidal Positional Encoding in the Transformer",
  },
  {
    slug: "encoder-decoder-architecture",
    title: "Seq2Seq Learning - An Encoder-Decoder Approach",
  },
  {
    slug: "attention-mechanism",
    title: "Attention Mechanism in Encoder - Decoder Architecture",
  },
  {
    slug: "model-evaluation-sensitivity-specificity-and-roc-auc",
    title: "Model Evaluation: Sensitivity, Specificity, and ROC-AUC",
  },
  {
    slug: "a-lagrange-multiplier-approach-to-pca",
    title: "A Lagrange Multiplier Approach to PCA",
  },
]

const BlogsPage: React.FC = () => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      {blogs.length === 0 ? (
        <ComingSoon />
      ) : (
        <div className="mx-auto w-full max-w-[580px] px-4 md:px-0">
          <h1>
            <motion.span
              initial={{ translateY: 10, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ delay: 0, ...BASE_TRANSITION }}
              className="flex text-3xl font-semibold leading-snug text-neutral-800 dark:text-neutral-300"
            >
              Blogs <br />
            </motion.span>
            <motion.span
              initial={{ translateY: 10, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ delay: 0.1, ...BASE_TRANSITION }}
              className="mb-20 flex text-3xl font-semibold leading-snug text-neutral-800 dark:text-neutral-300"
            >
              <span className="text-neutral-400 dark:text-neutral-600">
                & Articles.
              </span>
            </motion.span>
          </h1>
          <div className="space-y-2.5 text-neutral-800 dark:text-neutral-400">
            {blogs.map((blog, index) => (
              <motion.div
                key={index}
                initial={{ translateY: 10, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{
                  delay: 0.2 + 0.03 * (index + 1),
                  ...BASE_TRANSITION,
                }}
              >
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="group flex items-center gap-2"
                >
                  <p className="font-medium">{blog.title}</p>
                  <div className="flex-1 border-t border-dashed border-neutral-300 dark:border-neutral-800" />
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </main>
  )
}

export default BlogsPage
