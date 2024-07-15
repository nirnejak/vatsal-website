import * as React from "react"

import { type Metadata } from "next"

import { LinkedinFill, TwitterFill } from "akar-icons"

import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Vatsal Dhameliya - AI Scientist",
  description:
    "Personal website of Vatsal Dhameliya, a machine learning scientist.",
})

const HomePage: React.FC = () => {
  return (
    <main className="grid min-h-screen place-content-center">
      <div className="mx-auto max-w-[580px] px-4 md:px-0">
        <div className="mb-3.5">
          <svg
            viewBox="0 0 36 36"
            fill="none"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
          >
            <mask
              id=":rj6:"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="36"
              height="36"
            >
              <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
            </mask>
            <g mask="url(#:rj6:)">
              <rect width="36" height="36" fill="#fdf4b0"></rect>
              <rect
                x="0"
                y="0"
                width="36"
                height="36"
                transform="translate(7 7) rotate(37 18 18) scale(1.1)"
                fill="#5bcebf"
                rx="6"
              ></rect>
              <g transform="translate(3.5 3.5) rotate(-7 18 18)">
                <path d="M13,20 a1,0.75 0 0,0 10,0" fill="#000000"></path>
                <rect
                  x="12"
                  y="14"
                  width="1.5"
                  height="2"
                  rx="1"
                  stroke="none"
                  fill="#000000"
                ></rect>
                <rect
                  x="22"
                  y="14"
                  width="1.5"
                  height="2"
                  rx="1"
                  stroke="none"
                  fill="#000000"
                ></rect>
              </g>
            </g>
          </svg>
        </div>
        <h1 className="mb-7 text-xl font-medium text-zinc-800 dark:text-zinc-300">
          Vatsal Dhameliya
        </h1>
        <p className="mb-8 font-serif text-base text-zinc-600 dark:text-zinc-400">
          I{"'"}m a{" "}
          <span className="font-semibold text-zinc-800 dark:text-zinc-300">
            Senior AI scientist at
          </span>{" "}
          <span className="font-semibold text-zinc-800 dark:text-zinc-300">
            Jupiter Money
          </span>
          . With a degree in{" "}
          <span className="font-semibold text-zinc-800 dark:text-zinc-300">
            Artificial Intelligence
          </span>{" "}
          from{" "}
          <span className="font-semibold text-zinc-800 dark:text-zinc-300">
            IIIT Bangalore
          </span>
          , I specialize in developing innovative AI solutions. My expertise
          spans computer vision, natural language processing, and predictive
          analytics. I strive to bridge theoretical research and practical
          applications, driving impact across industries while actively
          contributing to the AI community through mentoring and open-source
          projects.
        </p>
        <div className="flex items-center justify-between gap-2 border-t border-dashed border-zinc-300 pt-4 dark:border-zinc-600">
          <a
            href="https://www.linkedin.com/in/vatsal-dhameliya-70420b112/"
            className="text-gray-600 transition-colors hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
          >
            <LinkedinFill size={20} />
          </a>
          <a
            href="https://x.com/199vatsal/"
            className="text-gray-600 transition-colors hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
          >
            <TwitterFill size={20} />
          </a>
        </div>
      </div>
    </main>
  )
}

export default HomePage
