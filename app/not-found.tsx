import * as React from "react"

import { type Metadata } from "next"

import * as motion from "framer-motion/client"
import Link from "next/link"

import { BASE_TRANSITION } from "@/utils/animation"
import generateMetadata from "@/utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/404/",
  title: "Not Found | Vatsal Dhameliya - AI Scientist",
  description: "Cannot find the page you're looking for",
})

const NotFoundPage: React.FC = () => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="mx-auto w-full max-w-[580px] px-4 md:px-0">
        <h1>
          <motion.span
            initial={{ translateY: 10, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 0, ...BASE_TRANSITION }}
            className="flex text-3xl font-semibold leading-snug text-neutral-800 dark:text-neutral-300"
          >
            Not <br />
          </motion.span>
          <motion.span
            initial={{ translateY: 10, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 0.1, ...BASE_TRANSITION }}
            className="flex text-3xl font-semibold leading-snug text-neutral-800 dark:text-neutral-300"
          >
            <span className="text-neutral-400 dark:text-neutral-600">
              Found.
            </span>
          </motion.span>
        </h1>
        <motion.p
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.2, ...BASE_TRANSITION }}
          className="mt-10 text-neutral-800 dark:text-neutral-400"
        >
          Cannot find the page you{"'"}re looking for, go{" "}
          <Link
            className="underline underline-offset-2 hover:no-underline"
            href={"/"}
          >
            Home
          </Link>
        </motion.p>
      </div>
    </main>
  )
}

export default NotFoundPage
