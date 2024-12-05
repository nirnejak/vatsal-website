import * as React from "react"

import { type Metadata } from "next"

import * as motion from "framer-motion/client"
import Image from "next/image"

import Photo1 from "assets/photos/IMG_0620.jpeg"
import Photo2 from "assets/photos/IMG_0630.jpeg"
import Photo3 from "assets/photos/IMG_1691.jpeg"
import Photo4 from "assets/photos/IMG_2563.jpeg"
import Photo5 from "assets/photos/IMG_2571.jpeg"
import Photo6 from "assets/photos/IMG_2579.jpeg"
import Photo7 from "assets/photos/IMG_5398.jpeg"
import Photo8 from "assets/photos/IMG_5404.jpeg"
import Photo9 from "assets/photos/IMG_5472.jpeg"
import Photo10 from "assets/photos/IMG_5515.jpeg"
import Photo11 from "assets/photos/IMG_6162.jpeg"
import Photo12 from "assets/photos/IMG_6284.jpeg"
import Photo13 from "assets/photos/IMG_6288.jpeg"
import Photo14 from "assets/photos/IMG_6406.jpeg"
import Photo15 from "assets/photos/IMG_6422.jpeg"
import Photo16 from "assets/photos/IMG_6441.jpeg"
import Photo17 from "assets/photos/IMG_6826.jpeg"
import Photo18 from "assets/photos/IMG_6864.jpeg"
import Photo19 from "assets/photos/IMG_8434.jpeg"
import Photo20 from "assets/photos/IMG_8490.jpeg"
import Photo21 from "assets/photos/IMG_8513.jpeg"
import Photo22 from "assets/photos/IMG_8633.jpeg"
import Photo23 from "assets/photos/IMG_8798.jpeg"
import { BASE_TRANSITION } from "utils/animation"
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
              className="rounded-3xl bg-white p-2.5 shadow-lg"
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

const photos = [
  Photo1,
  Photo2,
  Photo3,
  Photo4,
  Photo5,
  Photo6,
  Photo7,
  Photo8,
  Photo9,
  Photo10,
  Photo11,
  Photo12,
  Photo13,
  Photo14,
  Photo15,
  Photo16,
  Photo17,
  Photo18,
  Photo19,
  Photo20,
  Photo21,
  Photo22,
  Photo23,
]
