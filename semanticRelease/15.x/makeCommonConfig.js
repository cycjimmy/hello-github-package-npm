const makeConfig = require("./makeConfig");

/**
 * makeCommonConfig
 * @param githubOptions
 * @param gitAssets
 * @param changelogFile
 * @returns {{plugins: *[]}}
 */
module.exports = ({
                    githubOptions,
                    gitAssets = [
                      "docs/CHANGELOG.md",
                      "package.json",
                      "package-lock.json"
                    ],
                    changelogFile = "docs/CHANGELOG.md"
                  } = {}) => makeConfig({
  githubOptions,
  git: true,
  gitAssets,
  changelog: true,
  changelogFile,
});
