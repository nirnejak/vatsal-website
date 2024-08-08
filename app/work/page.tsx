import * as React from "react"

import { type Metadata } from "next"

import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/work/",
  title: "Work | Vatsal Dhameliya - AI Scientist",
  description:
    "Generative AI and Large Language Model projects built by Vatsal Dhameliya",
})

const WorkPage: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-1 items-center justify-center">
      <div className="mx-auto w-full max-w-[580px] px-4 md:px-0">
        <h1 className="mb-20 text-3xl font-semibold leading-snug text-neutral-800 dark:text-neutral-300">
          Work <br />
          <span className="text-neutral-300 dark:text-neutral-700">
            Experience.
          </span>
        </h1>
        <div className="space-y-2 text-neutral-800 dark:text-neutral-400">
          <div className="flex items-center gap-2">
            <p>Jupiter Money</p>
            <div className="w-20 flex-1 border-t border-dashed border-neutral-300 dark:border-neutral-800" />
            <p className="text-neutral-300 dark:text-neutral-700">
              2022 - 2024
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p>ZS Associates</p>
            <div className="w-20 flex-1 border-t border-dashed border-neutral-300 dark:border-neutral-800" />
            <p className="text-neutral-300 dark:text-neutral-700">
              2021 - 2022
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default WorkPage
