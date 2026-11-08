import type * as React from "react"

const DotPattern: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[-1] bg-[radial-gradient(circle_at_1px_1px,var(--color-neutral-400)_1px,transparent_0)] bg-size-[16px_16px] opacity-20 dark:opacity-10"
    />
  )
}

export default DotPattern
