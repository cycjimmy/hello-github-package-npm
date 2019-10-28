import {input, IS_PRODUCTION, name, plugins,} from './rollup.common';

import browsersync from 'rollup-plugin-browsersync';
import copy from 'rollup-plugin-copy';
import pkg from '../package.json';

export default [
  {
    input,
    output: {
      name,
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [
      ...plugins,

      copy({
        targets: [{
          src: [
            'static/**/*',
            'dist/**.umd.js',
          ],
          dest: '.publish'
        }],
      }),

      (!IS_PRODUCTION && browsersync({
        server: '.publish',
        watch: true,
      })),
    ],
  },
];
