import type * as React from "react"

import classNames from "@/utils/classNames"

interface Props {
  title: string
  subtitle: string
  className?: string
}

const PageHeading: React.FC<Props> = ({ title, subtitle, className }) => {
  return (
    <h1 className={classNames("font-semibold tracking-tight", className)}>
      <span className="flex text-neutral-800 dark:text-neutral-300">
        {title}
      </span>
      <span className="flex text-neutral-400 dark:text-neutral-600">
        {subtitle}
      </span>
    </h1>
  )
}

export default PageHeading
