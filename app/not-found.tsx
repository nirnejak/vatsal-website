import * as React from "react"

import type { Metadata } from "next"
import { Link } from "next-view-transitions"

import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/404/",
  title: "Not Found | Vatsal Dhameliya - AI Scientist",
  description: "Cannot find the page you're looking for",
})

const NotFoundPage: React.FC = () => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="mx-auto w-full max-w-[580px] px-4 md:px-0">
        <h1>
          <span className="flex text-3xl font-semibold leading-snug text-neutral-800 dark:text-neutral-300">
            Not <br />
          </span>
          <span className="flex text-3xl font-semibold leading-snug text-neutral-800 dark:text-neutral-300">
            <span className="text-neutral-400 dark:text-neutral-600">
              Found.
            </span>
          </span>
        </h1>
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
