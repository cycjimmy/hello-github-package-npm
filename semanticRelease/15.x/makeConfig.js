/**
 * makeConfig
 * @param npmOptions
 * @param githubOptions
 * @param git
 * @param gitAssets
 * @param changelog
 * @param changelogFile
 * @returns {{plugins: *[]}}
 */
module.exports = ({
                    npmOptions = {},
                    githubOptions = {},
                    git = false,
                    gitAssets,
                    changelog = false,
                    changelogFile,
                  } = {}) => {

  const _plugins = [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
  ];

  if (changelog) {
    const changelogSetting = [
      "@semantic-release/changelog",
      {
        "changelogFile": changelogFile
      }
    ];

    _plugins.push(changelogSetting);
  }

  const npmSetting = ["@semantic-release/npm", npmOptions];
  const githubSetting = ["@semantic-release/github", githubOptions];
  _plugins.push(
    npmSetting,
    githubSetting,
  );

  if (git) {
    const gitSetting = [
      "@semantic-release/git",
      {
        "assets": gitAssets,
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ];

    _plugins.push(gitSetting);
  }

  return {
    "plugins": _plugins
  };
};
