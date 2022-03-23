/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const makeConfig = require('@cycjimmy/config-lib/cjs/semanticRelease/15.x/makeConfig.cjs').default;
const pkg = require('./package.json');

module.exports = makeConfig({
  changelog: true,
  changelogFile: 'docs/CHANGELOG.md',
  exec: true,
  execOptions: {
    prepareCmd: 'npm run package',
  },
  npmOptions: {
    pkgRoot: '.release',
  },
  githubOptions: {
    assets: [pkg.browser],
  },
  git: true,
  gitAssets: [
    'docs/CHANGELOG.md',
    'package.json',
    'package-lock.json',
  ],
});
