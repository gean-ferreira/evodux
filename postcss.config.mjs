// @ts-expect-error - No types for modules
import postcssNesting from 'postcss-nested'

const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

export default config
