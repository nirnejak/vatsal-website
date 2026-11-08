import type { Metadata } from "next"
import { Link } from "next-view-transitions"
import type * as React from "react"

import PageHeading from "@/components/atoms/PageHeading"
import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/404/",
  title: "Not Found | Vatsal Dhameliya - AI Scientist",
  description: "Cannot find the page you're looking for",
})

const NotFoundPage: React.FC = () => {
  return (
    <main className="flex min-h-dvh items-center justify-center">
      <div className="mx-auto w-full max-w-145 px-4 md:px-0">
        <PageHeading title="Not" subtitle="Found." className="text-3xl/snug" />
        <p className="mt-10 text-neutral-800 dark:text-neutral-400">
          Cannot find the page you{"'"}re looking for, go{" "}
          <Link
            className="underline underline-offset-2 hover:no-underline"
            href={"/"}
          >
            Home
          </Link>
        </p>
      </div>
    </main>
  )
}

export default NotFoundPage
