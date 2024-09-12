import * as React from "react"

import { LinkedinFill, TwitterFill, Envelope, GithubFill } from "akar-icons"
import * as motion from "framer-motion/client"

import { BASE_TRANSITION } from "@/utils/animation"

const HomeHero: React.FC = () => {
  return (
    <div className="mx-auto max-w-[580px] px-4 md:px-0">
      <h1>
        <motion.span
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0, ...BASE_TRANSITION }}
          className="flex text-4xl font-semibold leading-snug text-neutral-800 md:text-5xl md:leading-snug dark:text-neutral-300"
        >
          Hello, I{"'"}m
        </motion.span>
        <motion.span
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.1, ...BASE_TRANSITION }}
          className="mb-7 flex text-4xl font-semibold leading-snug text-neutral-800 md:text-5xl md:leading-snug dark:text-neutral-300"
        >
          <span className="text-neutral-400 dark:text-neutral-600">
            Vatsal Dhameliya.
          </span>
        </motion.span>
      </h1>
      <motion.p
        initial={{ translateY: 10, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ delay: 0.2, ...BASE_TRANSITION }}
        className="mb-20 text-sm text-neutral-600 md:text-base dark:text-neutral-500"
      >
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
        , I specialize in Computer Vision, Large Language Models and Generative
        AI.
      </motion.p>
      <motion.div
        initial={{ translateY: 10, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ delay: 0.3, ...BASE_TRANSITION }}
        className="grid grid-cols-2 gap-4 md:grid-cols-4"
      >
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
      </motion.div>
    </div>
  )
}

export default HomeHero
