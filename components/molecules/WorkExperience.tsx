"use client"
import * as React from "react"

import { motion } from "framer-motion"

import { BASE_TRANSITION } from "@/utils/animation"

const WorkExperience: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-[580px] px-4 md:px-0">
      <motion.h1
        initial={{ translateY: 10, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ delay: 0, ...BASE_TRANSITION }}
        className="mb-20 text-3xl font-semibold leading-snug text-neutral-800 dark:text-neutral-300"
      >
        Work <br />
        <span className="text-neutral-400 dark:text-neutral-600">
          Experience.
        </span>
      </motion.h1>
      <motion.div
        initial={{ translateY: 10, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ delay: 0.1, ...BASE_TRANSITION }}
        className="space-y-2 text-neutral-800 dark:text-neutral-400"
      >
        <div className="flex items-center gap-2">
          <p className="font-medium">Jupiter Money</p>
          <div className="flex-1 border-t border-dashed border-neutral-300 dark:border-neutral-800" />
          <p>2022 - Now</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-medium">ZS Associates</p>
          <div className="flex-1 border-t border-dashed border-neutral-300 dark:border-neutral-800" />
          <p>2021 - 2022</p>
        </div>
      </motion.div>
    </div>
  )
}

export default WorkExperience
