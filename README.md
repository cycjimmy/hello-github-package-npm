# hello-github-package-npm

The repository is used for private testing based on [Codertocat/hello-world-npm](https://github.com/Codertocat/hello-world-npm)

## Steps
Step 0: [Create a personal access token for the command line](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line)

Step 1: Use `publishConfig` option in your package.json
```json
{
  "publishConfig": { 
    "registry": "https://npm.pkg.github.com/"
  }
}
```

Step 2: Authenticate
```shell
$ npm login --registry=https://npm.pkg.github.com/
```

Step 3: Publish
```shell
$ npm publish
```

## 相关
* https://help.github.com/cn/articles/configuring-npm-for-use-with-github-package-registry
