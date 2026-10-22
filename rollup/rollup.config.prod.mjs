import { createRequire } from 'node:module'

import {
  banner,
  input,
  name,
  plugins,
  terserPlugins,
} from './rollup.common.mjs'

const pkg = createRequire(import.meta.url)('../package.json')

export default [
  {
    input,
    output: { file: pkg.module, format: 'es', exports: 'default' },
    plugins,
  },
  {
    input,
    output: {
      name,
      file: pkg.browser,
      format: 'umd',
      banner,
      exports: 'default',
    },
    plugins: [...plugins, terserPlugins],
  },
]
