import * as React from "react"

import { type Metadata } from "next"

import { LinkedinFill, TwitterFill, Envelope, GithubFill } from "akar-icons"

import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Vatsal Dhameliya - AI Scientist",
  description:
    "Personal website of Vatsal Dhameliya, a machine learning scientist.",
})

const HomePage: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-1 items-center justify-center">
      <div className="mx-auto max-w-[580px] px-4 md:px-0">
        <h1 className="mb-7 text-4xl font-semibold leading-snug text-neutral-800 md:text-5xl dark:text-neutral-300">
          Hello, I{"'"}m <br />{" "}
          <span className="text-neutral-400 dark:text-neutral-600">
            Vatsal Dhameliya.
          </span>
        </h1>
        <p className="mb-20 text-sm text-neutral-600 md:text-base dark:text-neutral-500">
          I{"'"}m a{" "}
          <span className="font-semibold text-neutral-800 dark:text-neutral-300">
            Senior AI Scientist @
          </span>{" "}
          <span className="font-semibold text-neutral-800 dark:text-neutral-300">
            Jupiter Money
          </span>
          . With a degree in{" "}
          <span className="font-semibold text-neutral-800 dark:text-neutral-300">
            Artificial Intelligence
          </span>{" "}
          from{" "}
          <span className="font-semibold text-neutral-800 dark:text-neutral-300">
            IIIT Bangalore
          </span>
          , I specialize in Computer Vision, Large Language Models and
          Generative AI.
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <a
            href="https://www.linkedin.com/in/vatsal-dhameliya-70420b112/"
            className="flex items-center justify-center gap-2.5 rounded-md bg-neutral-200 px-3.5 py-2 text-xs text-neutral-700 transition-colors hover:bg-neutral-300 md:px-5 md:py-2.5 md:text-base dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
            target="_blank"
          >
            <LinkedinFill size={15} />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a
            href="https://x.com/vats_al_/"
            className="flex items-center justify-center gap-2.5 rounded-md bg-neutral-200 px-3.5 py-2 text-xs text-neutral-700 transition-colors hover:bg-neutral-300 md:px-5 md:py-2.5 md:text-base dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
            target="_blank"
          >
            <TwitterFill size={15} />
            <span className="text-sm">Twitter</span>
          </a>
          <a
            href="https://github.com/vats-al/"
            className="flex items-center justify-center gap-2.5 rounded-md bg-neutral-200 px-3.5 py-2 text-xs text-neutral-700 transition-colors hover:bg-neutral-300 md:px-5 md:py-2.5 md:text-base dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
            target="_blank"
          >
            <GithubFill size={15} />
            <span className="text-sm">Github</span>
          </a>
          <a
            href="mailto:vatsalkumar.dhameliya@gmail.com"
            className="flex items-center justify-center gap-2.5 rounded-md bg-neutral-200 px-3.5 py-2 text-xs text-neutral-700 transition-colors hover:bg-neutral-300 md:px-5 md:py-2.5 md:text-base dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
            target="_blank"
          >
            <Envelope size={15} />
            <span className="text-sm">Email</span>
          </a>
        </div>
      </div>
    </main>
  )
}

export default HomePage
