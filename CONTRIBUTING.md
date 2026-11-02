# Contributing

The repository is released under the MIT license, and follows a standard Github development process, using Github tracker for issues and merging pull requests into main.

## Development

```shell
$ npm install          # Node ^22.18.0 || >=24.11.0
$ npm run dev          # Vite dev server with the root index.html
$ npm run lint         # ESLint (flat config, @antfu/eslint-config)
$ npm run lint:style   # Stylelint for src/**/*.{css,scss}
$ npm test             # Jest
$ npm run package      # build dist/ and assemble .release/
```

`index.html` in the repository root is the Vite dev entry and imports `src/` directly. `static/index.html` is the GitHub Pages demo: it loads the bundled `hello-world.umd.js` through a `<script>` tag and is deployed by `npm run build:deployment`.

## Repository settings required by the bots

`.github/workflows/dependabotAutoMerge.yml` merges non-major Dependabot pull requests automatically. Three settings cannot be expressed in code and must be enabled by a maintainer:

1. **Settings → Actions → General → Workflow permissions**: choose *Read and write permissions*. Dependabot opens its pull requests from branches inside this repository, which is why the `pull_request` event can hand `GITHUB_TOKEN` a write token there. Pull requests from forks stay read-only, and the workflow skips them through the `head.repo.full_name` guard.
2. **Settings → General**: enable *Allow auto-merge*.
3. **Branch protection on `main`**: require the `Test CI Summary` status check. `Test CI` reports one check per matrix cell (`test (22, ubuntu-latest)` and so on), so the `test-status` job aggregates them into a single, stable name to require.

`dependabotAutoMerge.yml` refuses to run while auto-merge is disabled or the base branch requires no status checks: GitHub treats an auto-merge request with no requirements as already satisfied and merges immediately, before any workflow reports.

`Test CI` keeps the write token away from the steps that execute repository code: the `test` job is read-only, and the semantic-release dry-run lives in its own `release-dry-run` job gated to same-repository pull requests.

If write permissions cannot be granted to `pull_request` runs at all, switch the trigger of `dependabotAutoMerge.yml` to `pull_request_target`. `dependabot/fetch-metadata` never checks out the pull request code, so the elevated token stays out of the fork's reach.

## Labels

The triage bot and the issue forms reference labels that have to exist in the repository. `issues.addLabels` fails with `422` for unknown labels, so keep this list in sync when a rule changes:

| Label | Used by |
| --- | --- |
| `bug` | `bug_report.yml` form |
| `enhancement` | `feature_request.yml` form |
| `needs-info` | triage rule 3, plus the 7-day lifecycle in `stale.yml` |
| `publish-auth` | triage rule 1 (npm / GPR publishing failures) |
| `usage` | triage rule 2 (questions about using the template) |
| `triaged` | manual exemption from the half-year staleness in `stale.yml` |
| `stale` | applied and removed by `actions/stale` |
| `ci` | `dependabot.yml` github-actions group |
| `dependencies` | `dependabot.yml` both ecosystems |

## Commits

[Conventional Commits](https://www.conventionalcommits.org/) are required: `semantic-release` derives the version and the changelog from them. A breaking change must be marked with `!` and a `BREAKING CHANGE:` footer. Commit subjects and bodies are written in English.
