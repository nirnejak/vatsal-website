"use client"
import * as React from "react"

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
      className="fixed bottom-2 left-1/2 z-[999] -translate-x-1/2 rounded-3xl border-neutral-800 bg-neutral-900 shadow-lg md:bottom-5"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center justify-center"
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classNames(
              pathname === link.href ? "bg-neutral-800" : "",
              "flex items-center gap-2 rounded-3xl px-2.5 py-1.5 md:px-3.5 md:py-2 transition-colors text-neutral-200 dark:text-neutral-400 hover:bg-neutral-800"
            )}
          >
            {link.value} {link.text}
          </Link>
        ))}
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
