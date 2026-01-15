import * as React from "react"

import type { Metadata } from "next"

import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/work/",
  title: "Work | Vatsal Dhameliya - AI Scientist",
  description:
    "Generative AI and Large Language Model projects built by Vatsal Dhameliya",
})

const WorkPage: React.FC = () => {
  return (
    <main className="flex min-h-dvh items-center justify-center">
      <div
        className="
          mx-auto w-full max-w-[580px] px-4
          md:px-0
        "
      >
        <h1
          className="
            mt-16 mb-8 text-3xl/snug font-semibold tracking-tight
            md:mb-12
          "
        >
          <span
            className="
              flex text-neutral-800
              dark:text-neutral-300
            "
          >
            Work <br />
          </span>
          <span
            className="
              flex text-neutral-400
              dark:text-neutral-600
            "
          >
            Experience.
          </span>
        </h1>
        <div
          className="
            space-y-2.5 text-neutral-800
            dark:text-neutral-400
          "
        >
          <div className="flex items-center gap-2">
            <p className="font-medium">JPMorgan Chase & Co.</p>
            <div
              className="
                flex-1 border-t border-dashed border-neutral-300
                dark:border-neutral-800
              "
            />
            <p>2025 - Now</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-medium">Jupiter Money</p>
            <div
              className="
                flex-1 border-t border-dashed border-neutral-300
                dark:border-neutral-800
              "
            />
            <p>2022 - 2025</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-medium">ZS Associates</p>
            <div
              className="
                flex-1 border-t border-dashed border-neutral-300
                dark:border-neutral-800
              "
            />
            <p>2021 - 2022</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default WorkPage
