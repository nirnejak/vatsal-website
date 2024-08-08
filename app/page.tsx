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
    <main className="grid min-h-screen flex-1 place-content-center">
      <div className="mx-auto max-w-[580px] px-4 md:px-0">
        <h1 className="mb-7 text-5xl font-semibold leading-snug text-neutral-800 dark:text-neutral-300">
          Hello, I{"'"}m <br />{" "}
          <span className="text-neutral-700">Vatsal Dhameliya</span>
        </h1>
        <p className="mb-16 text-base text-neutral-600 dark:text-neutral-400">
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
        <div className="flex items-center justify-stretch gap-2">
          <a
            href="https://www.linkedin.com/in/vatsal-dhameliya-70420b112/"
            className="flex items-center gap-2.5 rounded-md bg-neutral-800 px-5 py-2.5 text-neutral-600 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300"
            target="_blank"
          >
            <LinkedinFill size={15} />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a
            href="https://x.com/vats_al_/"
            className="flex items-center gap-2.5 rounded-md bg-neutral-800 px-5 py-2.5 text-neutral-600 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300"
            target="_blank"
          >
            <TwitterFill size={15} />
            <span className="text-sm">Twitter</span>
          </a>
          <a
            href="https://github.com/vats-al/"
            className="flex items-center gap-2.5 rounded-md bg-neutral-800 px-5 py-2.5 text-neutral-600 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300"
            target="_blank"
          >
            <GithubFill size={15} />
            <span className="text-sm">Github</span>
          </a>
          <a
            href="mailto:vatsalkumar.dhameliya@gmail.com"
            className="flex items-center gap-2.5 rounded-md bg-neutral-800 px-5 py-2.5 text-neutral-600 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300"
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
