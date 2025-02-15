import * as React from "react"

import type { Metadata } from "next"

import { LinkedinFill, Envelope, GithubFill, XFill } from "akar-icons"

import getMetadata from "@/utils/metadata"

export const metadata: Metadata = getMetadata({
  path: "/",
  title: "Vatsal Dhameliya - AI Scientist",
  description:
    "Personal website of Vatsal Dhameliya, a machine learning scientist.",
})

const SOCIAL_LINKS = [
  {
    icon: <LinkedinFill size={15} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vatsal-patel-70420b112/",
  },
  {
    icon: <XFill size={15} />,
    label: "X / Twitter",
    href: "https://x.com/vats_al_/",
  },
  {
    icon: <GithubFill size={15} />,
    label: "Github",
    href: "https://github.com/vats-al/",
  },
  {
    icon: <Envelope size={15} />,
    label: "Email",
    href: "mailto:vatsalkumar.dhameliya@gmail.com",
  },
]

const HomePage: React.FC = () => {
  return (
    <main className="flex min-h-dvh items-center justify-center">
      <div className="mx-auto max-w-[580px] px-4 md:px-0">
        <h1 className="text-4xl font-semibold leading-snug tracking-tight md:text-5xl">
          <span className="flex text-neutral-800 dark:text-neutral-300">
            Hello, I{"'"}m
          </span>
          <span className="mb-7 flex  text-neutral-400 dark:text-neutral-600">
            Vatsal Dhameliya.
          </span>
        </h1>
        <p className="mb-20 text-sm text-neutral-600 md:text-base dark:text-neutral-500">
          I{"'"}m a{" "}
          <span className="font-semibold text-neutral-800 dark:text-neutral-300">
            Senior AI Scientist @
          </span>{" "}
          <span className="font-semibold text-neutral-800 dark:text-neutral-300">
            Jupiter Money
          </span>
          . With a degree in{" "}
          <span className="font-semibold text-neutral-800 dark:text-neutral-300">
            Artificial Intelligence
          </span>{" "}
          from{" "}
          <span className="font-semibold text-neutral-800 dark:text-neutral-300">
            IIIT Bangalore
          </span>
          , I specialize in Computer Vision, Large Language Models and
          Generative AI.
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {SOCIAL_LINKS.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="flex items-center justify-center gap-2.5 rounded-md bg-neutral-200 px-3.5 py-2 text-xs text-neutral-700  outline-none transition-all hover:bg-neutral-300 focus:bg-neutral-300 active:scale-95 md:px-5 md:py-2.5 md:text-base dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
              target="_blank"
            >
              {link.icon}
              <span className="text-sm">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}

export default HomePage
