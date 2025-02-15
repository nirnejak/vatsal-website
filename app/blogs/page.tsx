import * as React from "react"

import type { Metadata } from "next"
import { Link } from "next-view-transitions"

import { ArrowRight } from "akar-icons"

import getMetadata from "@/utils/metadata"

import ComingSoon from "@/components/molecules/ComingSoon"

export const metadata: Metadata = getMetadata({
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
    slug: "lora-low-rank-adaptation-for-efficient-fine-tuning",
    title: "LoRA: Low-Rank Adaptation for Efficient Fine-Tuning",
  },
  {
    slug: "t5-the-text-to-text-transfer-transformer",
    title: "T5: The Text-to-Text Transfer Transformer",
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
    slug: "attention-mechanism",
    title: "Attention Mechanism in Encoder - Decoder Architecture",
  },
  {
    slug: "encoder-decoder-architecture",
    title: "Seq2Seq Learning - An Encoder-Decoder Approach",
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
    <main className="flex min-h-dvh items-center justify-center">
      {blogs.length === 0 ? (
        <ComingSoon />
      ) : (
        <div className="mx-auto w-full max-w-[580px] px-4 md:px-0">
          <h1 className="mb-8 mt-12 text-3xl font-semibold leading-snug tracking-tight md:mb-20 md:mt-0">
            <span className="flex text-neutral-800 dark:text-neutral-300">
              Blogs <br />
            </span>
            <span className="flex text-neutral-400 dark:text-neutral-600">
              & Articles.
            </span>
          </h1>
          <div className="space-y-2.5 text-neutral-800 dark:text-neutral-400">
            {blogs.map((blog, index) => (
              <div key={index}>
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
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  )
}

export default BlogsPage
