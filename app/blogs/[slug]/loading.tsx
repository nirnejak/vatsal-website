import * as React from "react"

import * as motion from "framer-motion/client"

import { BASE_TRANSITION } from "utils/animation"

const BlogLoadingPage: React.FC = () => {
  return (
    <main className="flex min-h-screen items-center justify-start">
      <div className="mx-auto w-full max-w-[580px] px-4 md:px-0">
        <motion.h1
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0, ...BASE_TRANSITION }}
          className="mb-4 mt-24 text-3xl font-semibold leading-snug text-neutral-800 dark:text-neutral-300"
        >
          Loading...
        </motion.h1>
      </div>
    </main>
  )
}

export default BlogLoadingPage
