/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const pkg = require('./package.json');

module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'docs/CHANGELOG.md',
      },
    ],
    ["@semantic-release/npm", {
      "npmPublish": false
    }],
    ['@semantic-release/exec', {
      prepareCmd: 'npm run package',
    }],
    ['@semantic-release/npm', {
      pkgRoot: '.release',
    }],
    ['@semantic-release/github', {
      assets: [pkg.browser],
    }],
    [
      '@semantic-release/git',
      {
        assets: [
          'docs/CHANGELOG.md',
          'package.json',
          'package-lock.json',
        ],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ]
  ],
};
