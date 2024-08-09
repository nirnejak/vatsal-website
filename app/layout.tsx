import * as React from "react"

import type { Viewport } from "next"

import { Inter } from "next/font/google"
import localFont from "next/font/local"

import Sidebar from "components/molecules/Sidebar"
import classNames from "utils/classNames"

import "../styles/main.css"

const sansFont = Inter({
  variable: "--sans-font",
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
          monoFont.variable,
          "overflow-x-hidden bg-neutral-50 dark:bg-neutral-900 font-sans flex flex-col md:flex-row"
        )}
      >
        <Sidebar />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
