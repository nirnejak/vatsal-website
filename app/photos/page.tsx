import type { Metadata } from "next"
import Image from "next/image"
import type * as React from "react"
import PageHeading from "@/components/atoms/PageHeading"
import getMetadata from "@/utils/metadata"
import { photos } from "@/utils/photos"

export const metadata: Metadata = getMetadata({
  path: "/photos/",
  title: "Photos | Vatsal Dhameliya - AI Scientist",
  description: "Stunning pictures captured by Vatsal Dhameliya",
})

const PhotosPage: React.FC = () => {
  return (
    <main className="mx-auto max-w-[980px] px-4 md:px-0">
      <PageHeading
        title="Moments"
        subtitle="& Pictures."
        className="mt-16 mb-8 text-3xl/snug md:mb-12"
      />
      <div className="mb-24 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="rounded-3xl bg-white p-2.5 shadow-lg dark:bg-neutral-100/10"
          >
            <Image
              src={photo}
              alt="Photograph by Vatsal Dhameliya"
              width={300}
              height={533}
              placeholder="blur"
              className="rounded-2xl"
            />
          </div>
        ))}
      </div>
    </main>
  )
}

export default PhotosPage
