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
    <main className="grid min-h-screen flex-1 place-content-center">
      <div className="mx-auto max-w-[580px] px-4 md:px-0">
        <h1 className="mb-7 text-5xl font-semibold leading-snug text-neutral-800 dark:text-neutral-300">
          <span className="text-neutral-300 dark:text-neutral-700">Soon.</span>
        </h1>
      </div>
    </main>
  )
}

export default WorkPage
