import { createRequire } from 'node:module'

import browsersync from 'rollup-plugin-browsersync'
import copy from 'rollup-plugin-copy'

import {
  input,
  IS_DEPLOYMENT,
  IS_DEVELOPMENT,
  name,
  plugins,
} from './rollup.common.mjs'

const pkg = createRequire(import.meta.url)('../package.json')

export default [
  {
    input,
    output: {
      name,
      file: pkg.browser.replace('.min.js', '.js'),
      format: 'umd',
      exports: 'default',
    },
    plugins: [
      ...plugins,

      IS_DEPLOYMENT
      && copy({
        hook: 'writeBundle',
        targets: [
          {
            src: ['static/**/*', 'dist/**.umd.js'],
            dest: '.publish',
          },
        ],
      }),
      IS_DEVELOPMENT
      && browsersync({
        server: ['static', 'dist'],
        watch: true,
      }),
    ],
  },
]
