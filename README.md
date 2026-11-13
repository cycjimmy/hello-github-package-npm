# hello-github-package-npm

[![Test CI][workflows-badge-image]][workflows-url]
[![libraries dependency status][libraries-status-image]][libraries-status-url]
[![libraries sourcerank][libraries-sourcerank-image]][libraries-sourcerank-url]
[![Coverage Status][coverage-image]][coverage-url]
[![Release date][release-date-image]][release-url]
[![vite][vite-image]][vite-url]
[![semantic-release][semantic-image]][semantic-url]
[![jest][jest-image]][jest-url]
[![npm license][license-image]][download-url]

This is a private javascript lib template for automatic test, release and so on. [Demo][github-pages-url]

## Install

[![NPM latest version][npm-latest-image]][npm-url]
[![NPM next version][npm-next-image]][npm-url]
[![NPM alpha version][npm-alpha-image]][npm-url]
[![NPM beta version][npm-beta-image]][npm-url]
[![NPM bundle size][npm-bundle-size-image]][npm-url]
[![npm download][download-image]][download-url]

```shell
# via npm
$ npm install @cycjimmy/hello-github-package-npm --save

# or via yarn
$ yarn add @cycjimmy/hello-github-package-npm
```

## Module format

The package is **ESM only**:

| File | Format | Purpose |
| --- | --- | --- |
| `dist/hello-world.esm.js` | ESM | `main`, `module` and `exports` entry (bundlers, `import`) |
| `dist/hello-world.umd.js` | UMD | unminified browser build, used by the GitHub Pages demo |
| `dist/hello-world.umd.min.js` | UMD | minified browser/CDN build, `browser`/`unpkg`/`jsdelivr` |

* There is no CommonJS bundle. Node.js 20.19+ / 22.12+ can `require()` the ESM
  entry, because those versions load an ES module synchronously.
* The UMD builds target ES2015, so Internet Explorer is no longer supported.
* The stylesheet is not shipped as a separate `.css` file: the CSS Modules output
  is inlined into the entry chunk and injected as a `<style>` element while the
  module is evaluated, so a plain `<script>` tag needs nothing else. See the
  `injectCss` plugin in `vite.config.mjs`.

The toolchain itself needs Node.js `^22.18.0 || >=24.11.0` (see `engines` in
`package.json` and the requirements in [CONTRIBUTING.md](CONTRIBUTING.md)).

## Usage

```javascript
import helloWorld from '@cycjimmy/hello-github-package-npm'

helloWorld.helloWorld() // 'hello world!'
document.body.innerHTML += helloWorld.helloElement
```

The default export is an object with three members:

* `helloWorld()`: returns the `hello world!` string.
* `helloElement`: an HTML string rendered from the CSS Modules template.
* `_style`: the generated class name map (`{ helloWrapper, hello }`).

## CDN

[![jsdelivr][jsdelivr-image]][jsdelivr-url]

To use via a CDN include this in your HTML:

```text
<script src="https://cdn.jsdelivr.net/npm/@cycjimmy/hello-github-package-npm@10/dist/hello-world.umd.min.js"></script>
```

The UMD build exposes the global `helloWorld`, which is the same default export
as the ESM entry.

<!-- Links: -->
[npm-latest-image]: https://img.shields.io/npm/v/@cycjimmy/hello-github-package-npm/latest
[npm-next-image]: https://img.shields.io/npm/v/@cycjimmy/hello-github-package-npm/next
[npm-alpha-image]: https://img.shields.io/npm/v/@cycjimmy/hello-github-package-npm/alpha
[npm-beta-image]: https://img.shields.io/npm/v/@cycjimmy/hello-github-package-npm/beta
[npm-url]: https://npmjs.org/package/@cycjimmy/hello-github-package-npm
[npm-bundle-size-image]: https://img.shields.io/bundlephobia/min/@cycjimmy/hello-github-package-npm

[download-image]: https://img.shields.io/npm/dt/@cycjimmy/hello-github-package-npm
[download-url]: https://npmjs.org/package/@cycjimmy/hello-github-package-npm

[jsdelivr-image]: https://img.shields.io/jsdelivr/npm/hy/@cycjimmy/hello-github-package-npm
[jsdelivr-url]: https://www.jsdelivr.com/package/npm/@cycjimmy/hello-github-package-npm

[workflows-badge-image]: https://github.com/cycjimmy/hello-github-package-npm/workflows/Test%20CI/badge.svg
[workflows-url]: https://github.com/cycjimmy/hello-github-package-npm/actions/workflows/nodeTestCI.yml

[libraries-status-image]: https://img.shields.io/librariesio/release/npm/@cycjimmy/hello-github-package-npm
[libraries-sourcerank-image]: https://img.shields.io/librariesio/sourcerank/npm/@cycjimmy/hello-github-package-npm
[libraries-status-url]: https://libraries.io/github/cycjimmy/hello-github-package-npm
[libraries-sourcerank-url]: https://libraries.io/npm/@cycjimmy%2Fhello-github-package-npm

[coverage-image]: https://img.shields.io/coveralls/github/cycjimmy/hello-github-package-npm
[coverage-url]: https://coveralls.io/github/cycjimmy/hello-github-package-npm

[release-date-image]: https://img.shields.io/github/release-date/cycjimmy/hello-github-package-npm
[release-url]: https://github.com/cycjimmy/hello-github-package-npm/releases

[vite-image]: https://img.shields.io/github/package-json/dependency-version/cycjimmy/hello-github-package-npm/dev/vite
[vite-url]: https://github.com/vitejs/vite

[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%20%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release

[jest-image]: https://img.shields.io/badge/tested_with-jest-99424f.svg
[jest-url]: https://github.com/facebook/jest

[license-image]: https://img.shields.io/npm/l/@cycjimmy/hello-github-package-npm

[github-pages-url]: https://cycjimmy.github.io/hello-github-package-npm/
