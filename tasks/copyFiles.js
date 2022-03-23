/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint no-console: 0 */
import path from 'path';
import fs from 'fs-extra';

const { copy } = fs;

Promise.resolve()
  .then(() => copy(
    path.resolve('dist'),
    path.resolve('package', 'dist'),
  ))
  .then(() => copy(
    path.resolve('README.md'),
    path.resolve('package', 'README.md'),
  ))
  .then(() => copy(
    path.resolve('LICENSE'),
    path.resolve('package', 'LICENSE'),
  ))
  .then(() => {
    console.log('copyFiles success!');
  })
  .catch((err) => {
    console.error(err);
  });
