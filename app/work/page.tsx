import type { Metadata } from "next"
import type * as React from "react"

import PageHeading from "@/components/atoms/PageHeading"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/work/",
  title: "Work | Vatsal Dhameliya - AI Scientist",
  description:
    "Generative AI and Large Language Model projects built by Vatsal Dhameliya",
})

const EXPERIENCE = [
  { company: "Visa", period: "2026 - Now" },
  { company: "JPMorganChase & Co.", period: "2025 - 2026" },
  { company: "Jupiter Money", period: "2022 - 2025" },
  { company: "ZS Associates", period: "2021 - 2022" },
]

const WorkPage: React.FC = () => {
  return (
    <main className="flex min-h-dvh items-center justify-center">
      <div className="mx-auto w-full max-w-145 px-4 md:px-0">
        <PageHeading
          title="Work"
          subtitle="Experience."
          className="mt-16 mb-8 text-3xl/snug md:mb-12"
        />
        <div className="space-y-2.5 text-neutral-800 dark:text-neutral-400">
          {EXPERIENCE.map((job) => (
            <div key={job.company} className="flex items-center gap-2">
              <p className="font-medium">{job.company}</p>
              <div className="flex-1 border-t border-dashed border-neutral-300 dark:border-neutral-800" />
              <p className="w-24 shrink-0">{job.period}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default WorkPage
