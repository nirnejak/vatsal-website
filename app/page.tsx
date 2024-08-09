import * as React from "react"

import { type Metadata } from "next"

import HomeHero from "@/components/molecules/HomeHero"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Vatsal Dhameliya - AI Scientist",
  description:
    "Personal website of Vatsal Dhameliya, a machine learning scientist.",
})

const HomePage: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-1 items-center justify-center">
      <HomeHero />
    </main>
  )
}

export default HomePage
