import * as React from "react"

import { type Metadata } from "next"

import WorkExperience from "@/components/molecules/WorkExperience"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/work/",
  title: "Work | Vatsal Dhameliya - AI Scientist",
  description:
    "Generative AI and Large Language Model projects built by Vatsal Dhameliya",
})

const WorkPage: React.FC = () => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <WorkExperience />
    </main>
  )
}

export default WorkPage
