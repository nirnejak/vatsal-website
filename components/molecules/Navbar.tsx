"use client"

import { DoubleCheck, Home, Image as ImageIcon, Newspaper } from "akar-icons"
import { usePathname } from "next/navigation"
import { Link } from "next-view-transitions"
import type * as React from "react"

import classNames from "@/utils/classNames"

const links = [
  {
    icon: <Home size={16} />,
    text: "Home",
    href: "/",
  },
  {
    icon: <DoubleCheck size={16} />,
    text: "Work",
    href: "/work/",
  },
  {
    icon: <Newspaper size={16} />,
    text: "Blogs",
    href: "/blogs/",
  },
  {
    icon: <ImageIcon size={16} />,
    text: "Photos",
    href: "/photos/",
  },
]

const Navbar: React.FC = () => {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-2 left-1/2 z-999 -translate-x-1/2 rounded-3xl border-neutral-800 bg-neutral-900 shadow-lg md:bottom-5">
      <div className="flex items-center justify-center">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classNames(
              pathname === link.href ? "bg-neutral-800" : "",
              "flex items-center gap-2 rounded-3xl px-2.5 py-2 text-neutral-200 outline-none transition-colors hover:bg-neutral-800 focus:bg-neutral-800 md:px-3.5 dark:text-neutral-400"
            )}
          >
            {link.icon} {link.text}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
