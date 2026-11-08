import { DoubleCheck, Home, Image as ImageIcon, Newspaper } from "akar-icons"
import type * as React from "react"

import NavLink from "@/components/atoms/NavLink"

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
  return (
    <nav className="fixed bottom-2 left-1/2 z-999 -translate-x-1/2 rounded-3xl border-neutral-800 bg-neutral-900 shadow-lg md:bottom-5">
      <div className="flex items-center justify-center">
        {links.map((link) => (
          <NavLink key={link.href} href={link.href}>
            {link.icon} {link.text}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
