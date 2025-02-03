import * as React from "react"

import type { Metadata } from "next"
import Image from "next/image"

import { photos } from "@/utils/photos"
import getMetadata from "@/utils/seo"

export const metadata: Metadata = getMetadata({
  path: "/photos/",
  title: "Photos | Vatsal Dhameliya - AI Scientist",
  description: "Stunning pictures captured by Vatsal Dhameliya",
})

const PhotosPage: React.FC = () => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="mx-auto max-w-[980px] px-4 md:px-0">
        <h1 className="mb-8 mt-12 text-3xl font-semibold leading-snug tracking-tight md:mb-20 md:mt-0">
          <span className="flex text-neutral-800 dark:text-neutral-300">
            Moments
          </span>
          <span className="flex text-neutral-400 dark:text-neutral-600">
            & Pictures.
          </span>
        </h1>
        <div className="mb-24 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-2.5 shadow-lg dark:bg-neutral-100/10"
            >
              <Image
                src={photo}
                alt={photo.src}
                width={300}
                height={533}
                placeholder="blur"
                className="rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default PhotosPage
