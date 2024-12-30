import * as React from "react"

import classNames from "@/utils/classNames"

const Skeleton: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={classNames(
        "animate-pulse rounded-md bg-neutral-800/30",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
