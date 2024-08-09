import * as React from "react"

import { type Metadata } from "next"

import PhotosGallery from "@/components/molecules/PhotosGallery"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/photos/",
  title: "Photos | Vatsal Dhameliya - AI Scientist",
  description: "Stunning pictures captured by Vatsal Dhameliya",
})

const PhotosPage: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-1 items-center justify-center">
      <PhotosGallery />
    </main>
  )
}

export default PhotosPage
