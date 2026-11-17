# Contributing

The repository is released under the MIT license, and follows a standard Github development process, using Github tracker for issues and merging pull requests into main.

## Requirements

* Node.js `^22.18.0 || >=24.11.0`, the same range as `engines` in `package.json` (CI runs the test matrix on 22 and 24)
* npm 10+

## Development

```shell
$ npm install
$ npm run dev          # Vite dev server, opens static/index.html
$ npm run type-check   # tsc --noEmit over src, __test__, tasks and the configs
$ npm run lint         # ESLint (flat config, @antfu/eslint-config)
$ npm run lint:style   # Stylelint for src/**/*.{css,scss}
$ npm test             # Vitest
$ npm run package      # build dist/ and assemble .release/
```

`static/index.html` is the only page: it imports `src/` directly, so the dev
server and the GitHub Pages demo share it. `npm run dev` opens
`/static/index.html`; `build:deployment` builds that same file with `static/` as
the Vite root, which is what puts `index.html` at the root of the `.publish`
artifact.

## TypeScript specifics

* `tsconfig.json` type-checks everything (`noEmit`) and is the config the CI
  `type-check` step uses. `tsconfig.build.json` is the declaration-only config
  that writes `dist/index.d.ts` during the build.
* `tasks/*.ts` are executed by Node's built-in type stripping, so they may only
  use syntax that can be erased: no `enum`, `namespace` or constructor parameter
  properties. `erasableSyntaxOnly` enforces this during `type-check`, and Node's
  ESM resolver requires relative imports to carry the `.ts` extension.
* `release.config.js` stays JavaScript on purpose: semantic-release loads it
  through cosmiconfig, whose TypeScript loader resolves `typescript` from
  semantic-release's own install tree (inside the action) rather than from this
  project.
* `src/types/*.d.ts` holds the ambient declarations for CSS Modules and for
  `@cycjimmy/config-lib`, which ships no types.

## Build outputs

`npm run build` writes three files into `dist/`:

| File | Format | Purpose |
| --- | --- | --- |
| `hello-world.esm.js` | ESM | `main`, `module` and `exports` entry (bundlers, `import`) |
| `hello-world.umd.js` | UMD | unminified browser build for `<script>` tags |
| `hello-world.umd.min.js` | UMD | minified browser/CDN build, attached to the GitHub release |
| `index.d.ts` | Types | declarations for `types` and the `exports` `types` condition |

`npm run build` runs `build:types` (`tsc -p tsconfig.build.json`) before the
three Vite builds; Vite runs with `emptyOutDir: false`, so the declarations
survive the JS builds.

`npm run build:deployment` builds `static/index.html` as a regular Vite app into
`.publish/` (`base: './'` so it works under the repository subpath). The
`Deploy To GitHub Pages` workflow uploads `.publish` as a Pages artifact and
publishes it with `actions/deploy-pages`. The deployed page loads the bundled
ESM entry plus an extracted stylesheet, not the UMD build.

## Repository settings required by the deployment

The Pages deployment cannot be fully expressed in code, so the switch itself lives in the repository settings:

1. **Settings → Pages → Build and deployment → Source**: select **GitHub Actions**. With *Deploy from a branch* selected, `actions/deploy-pages` refuses to run, because no Pages site is served from the artifact flow.
2. `ACCESS_TOKEN` and the `gh-pages` branch are no longer used: the site is uploaded as an artifact and published with the workflow's own OIDC token, so no stored credential is involved. Both can be removed once the first deployment from `main` has succeeded.

## Repository settings required by the bots

`.github/workflows/dependabotAutoMerge.yml` merges non-major Dependabot pull requests automatically. Three settings cannot be expressed in code and must be enabled by a maintainer:

1. **Settings → Actions → General → Workflow permissions**: choose *Read and write permissions*. Dependabot opens its pull requests from branches inside this repository, which is why the `pull_request` event can hand `GITHUB_TOKEN` a write token there. Pull requests from forks stay read-only, and the workflow skips them through the `head.repo.full_name` guard.
2. **Settings → General**: enable *Allow auto-merge*.
3. **Branch protection on `main`**: block force pushes and deletions, but leave *Require status checks to pass before merging* **off**. `semantic-release` pushes `chore(release): … [skip ci]` straight to `main`, and GitHub rejects that push while a required check is configured. A repository owned by a personal account cannot add the GitHub Actions app to a ruleset bypass list either, so there is no way to have both.

The CI gate for Dependabot lives in `dependabotAutoMerge.yml` instead: it polls `gh pr checks` for the expected check names, squash merges only after they pass, and confirms the pull request reached `MERGED` before it asks for the Pages deployment. `Test CI` reports one check per matrix cell (`test (22, ubuntu-latest)` and so on), so the `test-status` job aggregates them into a single `Test CI Summary` check that is easy to read.

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
