import * as React from "react"

import type { Viewport } from "next"

import { Inter, Source_Serif_4 } from "next/font/google"
import localFont from "next/font/local"

import classNames from "utils/classNames"

import "../styles/main.css"

const sansFont = Inter({
  variable: "--sans-font",
  subsets: ["latin"],
})

const serifFont = Source_Serif_4({
  variable: "--serif-font",
  subsets: ["latin"],
})

const monoFont = localFont({
  variable: "--mono-font",
  src: [
    {
      path: "../fonts/JetBrainsMono-Regular.ttf",
      weight: "regular",
      style: "normal",
    },
  ],
})

export const viewport: Viewport = {
  themeColor: "#000000",
}

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-domain="vatsal.website"
          src="https://plausible.io/js/script.js"
        />
      </head>

      <body
        className={classNames(
          sansFont.variable,
          serifFont.variable,
          monoFont.variable,
          "overflow-x-hidden bg-zinc-50 dark:bg-zinc-900 font-serif"
        )}
      >
        {children}
      </body>
    </html>
  )
}

export default RootLayout
