"use client"
import * as React from "react"

import { motion } from "framer-motion"
import Image from "next/image"

import { BASE_TRANSITION } from "@/utils/animation"

const photos = [
  "IMG_0620.jpeg",
  "IMG_0630.jpeg",
  "IMG_1691.jpeg",
  "IMG_2563.jpeg",
  "IMG_2571.jpeg",
  "IMG_2579.jpeg",
  "IMG_5398.jpeg",
  "IMG_5404.jpeg",
  "IMG_5472.jpeg",
  "IMG_5515.jpeg",
  "IMG_6162.jpeg",
  "IMG_6284.jpeg",
  // "IMG_6288.jpeg",
  // "IMG_6406.jpeg",
  "IMG_6422.jpeg",
  "IMG_6441.jpeg",
  // "IMG_6826.jpeg",
  "IMG_6864.jpeg",
  // "IMG_8434.jpeg",
  "IMG_8490.jpeg",
  "IMG_8513.jpeg",
  "IMG_8633.jpeg",
  "IMG_8798.jpeg",
]

const PhotosGallery: React.FC = () => {
  return (
    <div className="mx-auto max-w-[980px] px-4 md:px-0">
      <motion.h1
        initial={{ translateY: 10, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ delay: 0, ...BASE_TRANSITION }}
        className="mt-24 text-3xl font-semibold leading-snug text-neutral-800 dark:text-neutral-300"
      >
        Moments
      </motion.h1>
      <motion.h1
        initial={{ translateY: 10, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ delay: 0.1, ...BASE_TRANSITION }}
        className="mb-7 text-3xl font-semibold leading-snug text-neutral-800 dark:text-neutral-300"
      >
        <span className="text-neutral-400 dark:text-neutral-600">
          & Pictures.
        </span>
      </motion.h1>
      <div className="mb-24 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
        {photos.map((photo, index) => (
          <motion.div
            initial={{ scale: 0.9, rotate: "5deg", opacity: 0 }}
            animate={{ scale: 1, rotate: "0deg", opacity: 1 }}
            transition={{ delay: 0.1 + 0.1 * (index + 1), ...BASE_TRANSITION }}
            key={index}
            className="rounded-3xl bg-white p-2.5 shadow-lg"
          >
            <Image
              src={`/photos/${photo}`}
              alt={photo}
              width={300}
              height={533}
              className="rounded-2xl"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default PhotosGallery
