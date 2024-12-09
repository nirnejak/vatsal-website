import * as React from "react"

import { type Metadata } from "next"

import * as motion from "framer-motion/client"
import Image from "next/image"

import { BASE_TRANSITION } from "utils/animation"
import { photos } from "utils/photos"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/photos/",
  title: "Photos | Vatsal Dhameliya - AI Scientist",
  description: "Stunning pictures captured by Vatsal Dhameliya",
})

const PhotosPage: React.FC = () => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="mx-auto max-w-[980px] px-4 md:px-0">
        <h1>
          <motion.span
            initial={{ translateY: 10, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 0, ...BASE_TRANSITION }}
            className="mt-24 flex text-3xl font-semibold leading-snug text-neutral-800 dark:text-neutral-300"
          >
            Moments
          </motion.span>
          <motion.span
            initial={{ translateY: 10, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 0.1, ...BASE_TRANSITION }}
            className="mb-7 flex text-3xl font-semibold leading-snug text-neutral-800 dark:text-neutral-300"
          >
            <span className="text-neutral-400 dark:text-neutral-600">
              & Pictures.
            </span>
          </motion.span>
        </h1>
        <div className="mb-24 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {photos.map((photo, index) => (
            <motion.div
              initial={{ scale: 0.9, rotate: "5deg", opacity: 0 }}
              animate={{ scale: 1, rotate: "0deg", opacity: 1 }}
              transition={{
                delay: 0.1 + 0.1 * (index + 1),
                ...BASE_TRANSITION,
              }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default PhotosPage
