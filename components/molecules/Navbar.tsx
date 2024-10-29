import * as React from "react"

import * as Tooltip from "@radix-ui/react-tooltip"
import { DoubleCheck, Home, Image as ImageIcon, Newspaper } from "akar-icons"
import Link from "next/link"

const links = [
  {
    value: <Home size={18} />,
    text: "Home",
    href: "/",
  },
  {
    value: <DoubleCheck size={18} />,
    text: "Work",
    href: "/work/",
  },
  {
    value: <Newspaper size={18} />,
    text: "Blogs",
    href: "/blogs/",
  },
  {
    value: <ImageIcon size={18} />,
    text: "Photos",
    href: "/photos/",
  },
]

const Navbar: React.FC = () => {
  return (
    <nav className="fixed bottom-3 left-1/2 z-[999] flex w-min -translate-x-1/2 items-center justify-center gap-1 rounded-3xl border border-neutral-300 bg-white shadow-lg dark:border-neutral-800">
      <Tooltip.Provider delayDuration={200}>
        {links.map((link) => (
          <Tooltip.Root key={link.text}>
            <Tooltip.Trigger asChild>
              <Link
                href={link.href}
                className="inline-flex items-center gap-2 rounded-3xl px-4 py-2.5 text-neutral-600 transition-colors hover:bg-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-800"
              >
                {link.value} {link.text}
              </Link>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className="select-none rounded-md bg-neutral-200 px-3.5 py-2.5 text-sm leading-none text-neutral-700 will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade dark:bg-neutral-800 dark:text-neutral-300"
                sideOffset={5}
                side="top"
              >
                {link.text}
                <Tooltip.Arrow className="fill-neutral-200 dark:fill-neutral-800" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        ))}
      </Tooltip.Provider>
    </nav>
  )
}

export default Navbar
