import * as React from "react"

import * as motion from "framer-motion/client"

import { BASE_TRANSITION } from "@/utils/animation"

const ComingSoon: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-[580px] px-4 md:px-0">
      <h1>
        <motion.span
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0, ...BASE_TRANSITION }}
          className="flex text-3xl font-semibold leading-snug text-neutral-800 dark:text-neutral-300"
        >
          Coming <br />
        </motion.span>
        <motion.span
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.1, ...BASE_TRANSITION }}
          className="flex text-3xl font-semibold leading-snug text-neutral-800 dark:text-neutral-300"
        >
          <span className="text-neutral-400 dark:text-neutral-600">Soon.</span>
        </motion.span>
      </h1>
    </div>
  )
}

export default ComingSoon
