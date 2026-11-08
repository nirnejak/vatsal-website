"use client"

import { usePathname } from "next/navigation"
import { Link } from "next-view-transitions"
import type * as React from "react"

import classNames from "@/utils/classNames"

interface Props {
  href: string
  children: React.ReactNode
}

const NavLink: React.FC<Props> = ({ href, children }) => {
  const pathname = usePathname()
  const isActive = href === "/" ? pathname === href : pathname.startsWith(href)

  return (
    <Link
      href={href}
      className={classNames(
        isActive ? "bg-neutral-800" : "",
        "flex items-center gap-2 rounded-3xl px-2.5 py-2 text-neutral-200 transition-colors outline-none hover:bg-neutral-800 focus:bg-neutral-800 md:px-3.5 dark:text-neutral-400"
      )}
    >
      {children}
    </Link>
  )
}

export default NavLink
