"use client"
import * as React from "react"

import * as Tooltip from "@radix-ui/react-tooltip"
import { DoubleCheck, Home, Image as ImageIcon, Newspaper } from "akar-icons"
import * as motion from "framer-motion/client"
import Link from "next/link"
import { usePathname } from "next/navigation"

import classNames from "@/utils/classNames"

const links = [
  {
    value: <Home size={16} />,
    text: "Home",
    href: "/",
  },
  {
    value: <DoubleCheck size={16} />,
    text: "Work",
    href: "/work/",
  },
  {
    value: <Newspaper size={16} />,
    text: "Blogs",
    href: "/blogs/",
  },
  {
    value: <ImageIcon size={16} />,
    text: "Photos",
    href: "/photos/",
  },
]

const Navbar: React.FC = () => {
  const pathname = usePathname()

  return (
    <motion.nav
      initial={{ width: 0, borderWidth: 0 }}
      animate={{ width: "min-content", borderWidth: 1 }}
      transition={{ delay: 0.2 }}
      className="fixed bottom-5 left-1/2 z-[999] -translate-x-1/2 rounded-3xl border-neutral-800 bg-neutral-900 shadow-lg"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center justify-center"
      >
        <Tooltip.Provider delayDuration={200}>
          {links.map((link) => (
            <Tooltip.Root key={link.text}>
              <Tooltip.Trigger asChild>
                <Link
                  href={link.href}
                  className={classNames(
                    pathname === link.href ? "bg-neutral-800" : "",
                    "inline-flex items-center gap-2 rounded-3xl px-3.5 py-2 transition-colors text-neutral-200 dark:text-neutral-400 hover:bg-neutral-800"
                  )}
                >
                  {link.value} {link.text}
                </Link>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="select-none rounded-md bg-neutral-800 px-3.5 py-2.5 text-sm leading-none text-neutral-300 will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade"
                  sideOffset={5}
                  side="top"
                >
                  {link.text}
                  <Tooltip.Arrow className="fill-neutral-800" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          ))}
        </Tooltip.Provider>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
