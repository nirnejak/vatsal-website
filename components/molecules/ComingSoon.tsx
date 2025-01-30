import * as React from "react"

const ComingSoon: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-[580px] px-4 md:px-0">
      <h1>
        <span className="flex text-3xl font-semibold leading-snug text-neutral-800 dark:text-neutral-300">
          Coming <br />
        </span>
        <span className="flex text-3xl font-semibold leading-snug text-neutral-800 dark:text-neutral-300">
          <span className="text-neutral-400 dark:text-neutral-600">Soon.</span>
        </span>
      </h1>
    </div>
  )
}

export default ComingSoon
