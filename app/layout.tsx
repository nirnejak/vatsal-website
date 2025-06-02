import * as React from "react"

import type { Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { ViewTransitions } from "next-view-transitions"

import DotPattern from "@/components/atoms/DotPattern"
import Navbar from "@/components/molecules/Navbar"
import classNames from "@/utils/classNames"

import "katex/dist/katex.min.css"
import "../styles/main.css"

const sansFont = Inter({
  variable: "--sans-font",
  subsets: ["latin"],
})

const monoFont = JetBrains_Mono({
  variable: "--mono-font",
  subsets: ["latin"],
})

export const viewport: Viewport = {
  themeColor: "#171717",
}

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={classNames(sansFont.variable, monoFont.variable)}
      >
        <head>
          <script
            defer
            data-domain="vatsal.website"
            src="https://plausible.io/js/script.js"
          />
        </head>

        <body className="overflow-x-hidden bg-neutral-50 dark:bg-neutral-900 font-sans">
          <Navbar />
          {children}

          <DotPattern />
        </body>
      </html>
    </ViewTransitions>
  )
}

export default RootLayout
