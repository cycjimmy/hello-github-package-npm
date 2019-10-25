import {input, IS_PRODUCTION, name, plugins,} from './rollup.common';

import browsersync from 'rollup-plugin-browsersync';

export default [
  {
    input,
    output: {
      name,
      file: '.publish/hello-world.umd.js',
      format: 'umd',
    },
    plugins: [
      ...plugins,
      (!IS_PRODUCTION && browsersync({
        server: '.publish',
        watch: true,
      })),
    ],
  },
];
