import * as React from "react"

import * as motion from "framer-motion/client"

import { Skeleton } from "components/atoms/Skeleton"
import { BASE_TRANSITION } from "utils/animation"

const Loading: React.FC = () => {
  return (
    <main className="flex min-h-screen items-center justify-start">
      <div className="mx-auto w-full max-w-[580px] px-4 md:px-0">
        <motion.h1
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0, ...BASE_TRANSITION }}
          className="mb-4 mt-24 text-3xl font-semibold leading-snug text-neutral-800 dark:text-neutral-300"
        >
          <Skeleton className="h-[82.5px] w-full rounded-md" />
        </motion.h1>
        <motion.p
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.1, ...BASE_TRANSITION }}
          className="mb-8 text-base leading-snug text-neutral-400 dark:text-neutral-600"
        >
          <Skeleton className="h-[66px] w-full rounded-md" />
        </motion.p>
        <motion.div
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.2, ...BASE_TRANSITION }}
          className="mb-8"
        >
          <Skeleton className="h-[387px] w-full rounded-md" />
        </motion.div>
        <motion.div
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.3, ...BASE_TRANSITION }}
          className="mb-24 space-y-1 text-neutral-800 dark:text-neutral-400"
        >
          <Skeleton className="h-[21px] w-full rounded-md" />
          <Skeleton className="h-[21px] w-full rounded-md" />
          <Skeleton className="h-[21px] w-full rounded-md" />
          <Skeleton className="h-[21px] w-full rounded-md" />
          <Skeleton className="h-[21px] w-full rounded-md" />

          <Skeleton className="h-[21px] w-full rounded-md" />
          <Skeleton className="h-[21px] w-full rounded-md" />
          <Skeleton className="h-[21px] w-full rounded-md" />
        </motion.div>
      </div>
    </main>
  )
}

export default Loading
