/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint no-console: 0 */
import path from 'path';
import fs from 'fs-extra';

const { readJson, outputJson } = fs;

Promise.resolve()
  .then(() => readJson(
    path.resolve('package.json'),
  ))
  .then((data) => {
    const jsonData = data;
    if (jsonData.scripts) {
      delete jsonData.scripts;
    }

    if (jsonData.dependencies) {
      delete jsonData.dependencies;
    }

    if (jsonData.devDependencies) {
      delete jsonData.devDependencies;
    }

    if (jsonData.publishConfig) {
      delete jsonData.publishConfig;
    }

    if (jsonData.config) {
      delete jsonData.config;
    }

    return outputJson(
      path.resolve('package', 'package.json'),
      jsonData,
      {
        spaces: 2,
      },
    );
  })
  .then(() => {
    console.log('handlePackageJson success!');
  })
  .catch((err) => {
    console.error(err);
  });
