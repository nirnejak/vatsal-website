/** @type {import("prettier").Config} */

import tailwindConfig from "prettier-plugin-tailwindcss"

const config = {
  plugins: [tailwindConfig],
  tailwindFunctions: ["classNames"],
}

export default config
