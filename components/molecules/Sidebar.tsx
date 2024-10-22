import * as React from "react"

import * as Tooltip from "@radix-ui/react-tooltip"
import { DoubleCheck, Home, Image as ImageIcon, Newspaper } from "akar-icons"
import Link from "next/link"

const links = [
  {
    value: <Home size={21} />,
    text: "Home",
    href: "/",
  },
  {
    value: <DoubleCheck size={21} />,
    text: "Work",
    href: "/work/",
  },
  {
    value: <Newspaper size={21} />,
    text: "Blogs",
    href: "/blogs/",
  },
  {
    value: <ImageIcon size={21} />,
    text: "Photos",
    href: "/photos/",
  },
]

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed flex w-full items-center justify-center gap-1 border-b border-neutral-300 px-2 md:h-screen md:w-min md:flex-col md:border-b-0 md:border-r dark:border-neutral-800">
      <Tooltip.Provider delayDuration={200}>
        {links.map((link) => (
          <Tooltip.Root key={link.text}>
            <Tooltip.Trigger asChild>
              <Link
                href={link.href}
                className="rounded-md p-2.5 text-neutral-600 transition-colors hover:bg-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-800"
              >
                {link.value}
              </Link>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className="select-none rounded-md bg-neutral-200 px-3.5 py-2.5 text-sm leading-none text-neutral-700 will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade dark:bg-neutral-800 dark:text-neutral-300"
                sideOffset={5}
                side="right"
              >
                {link.text}
                <Tooltip.Arrow className="fill-neutral-200 dark:fill-neutral-800" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        ))}
      </Tooltip.Provider>
    </aside>
  )
}

export default Sidebar
