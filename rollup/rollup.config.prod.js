import {banner, input, name, plugins, terserPlugins,} from './rollup.common';

import pkg from '../package.json';

export default [
  {
    input,
    output: [
      {file: pkg.main, format: 'cjs'},
      {file: pkg.module, format: 'es'}
    ],
    plugins,
  },
  {
    input,
    output: {
      name,
      file: pkg.browser.replace('.js', '.min.js'),
      format: 'umd',
      banner,
    },
    plugins: [
      ...plugins,
      terserPlugins,
    ]
  },
];
