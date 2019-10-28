import {eslint} from 'rollup-plugin-eslint';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import {terser} from 'rollup-plugin-terser/index';
import pkg from '../package.json';
// config
import terserOption from '@cycjimmy/config-lib/terser/4.x/production';

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const input = './src/index.js';

export const name = 'helloWorld';

export const banner = `/*! 
 * ${pkg.name} v${pkg.version}
 * Homepage: ${pkg.homepage}
 * Released under the ${pkg.license} License.
 */`;

export const plugins = [
  json(),
  postcss({
    modules: {
      generateScopedName: IS_PRODUCTION
        ? '[hash:base64:10]'
        : '[name]__[local]',
    },
    minimize: true,
    plugins: [autoprefixer],
  }),
  eslint({
    fix: true,
    exclude: [
      '**/*.(css|scss)',
    ]
  }),
  resolve(),
  babel(),
  commonjs(),
];

export const terserPlugins = (IS_PRODUCTION && terser(terserOption));

