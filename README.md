<p align="center">
  <a href="https://vuejs.org/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png" width="90" alt="Vue Logo" /></a>
  <a href="https://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="90" alt="Nest Logo" /></a>
</p>

# Vue 3 | NestJS | Typescript Monorepo Starter

## Description

* [NPM](https://docs.npmjs.com/cli/v7/using-npm/workspaces) workspaces to manage monorepo
* Full Stack: Front-end, Back-end, Shared/Utils module packages   
* Front-end package: [Vue 3](https://vuejs.org/guide/introduction.html) | [Vite](https://vitejs.dev/guide/)
* Back-end package: [NestJS](https://docs.nestjs.com) | [nest-cli](https://docs.nestjs.com/cli/overview)
* Shared package: shared code used in both front-end and backend-end
* Utils package: shared code used in all packages

## TODO

- [X] Configure NPM workspaces
- [X] Configure .gitignore
- [X] Configure global tsconfig related to apps and libs
- [X] Create npm scripts
- [X] Configure ESLint
- [ ] Script to create binaries from apps

## Prerequisites

Suggest to install [nest-cli](https://docs.nestjs.com/cli/overview) globally in dev environment.

## Quick start

```bash

# 1. Clone the repository
git clone https://github.com/DhivinX/monorepo-vue-nestjs.git project-name

# 2. Install the project and build packages in libs folder
npm i

# 3. Enter your newly-cloned folder
cd project-name

# 6. Dev: Run frontend with hot reload 
npm run web:dev

# 7. Dev: Run backend with hot reload 
npm run server:dev

```

## Top-Level Scripts
 
* `apps:dev` - run front-end and back-end simultaneously with hot reload
* `libs:dev` - run all lib packages simultaneously with hot reload
* `web:dev` - run front-end with hot reload
* `server:dev` - run back-end with hot reload
* `server:cli` - run back-end console
* `libs:build` - build packages in `libs` folder
* `build` - build all packages
* `clean` - clean all packages
* `lint` - lint all packages

## Visual Studio Code extensions

```json

{
  "recommendations": [
    "vue.volar",
    "dbaeumer.vscode-eslint",
    "editorconfig.editorconfig",
    "syler.sass-indented",

    "eamodio.gitlens",
    "aaron-bond.better-comments",
    "visualstudioexptteam.vscodeintellicode",
    "pkief.material-icon-theme",
    "ecmel.vscode-html-css",
    "donjayamanne.githistory"
  ]
}

```

### Required

* `vue.volar` - Vue Language Features (Volar)
* `syler.sass-indented` - Sass syntax highlighting.
* `dbaeumer.vscode-eslint` - VS Code ESLint extension.
* `editorconfig.editorconfig` - EditorConfig for VS Code.

### Optional

* `eamodio.gitlens` - GitLens - Git supercharged.
* `donjayamanne.githistory` - Git History
* `visualstudioexptteam.vscodeintellicode` - IntelliCode
* `pkief.material-icon-theme` - Material Icon Theme in VS Code
* `aaron-bond.better-comments` - Better Comments
* `ecmel.vscode-html-css` - HTML CSS Support

## Visual Studio Code settings

Disables top-level scripts for packages from the npm script panel.

```json

{
  "npm.exclude": [
    "**/apps/**",
    "**/libs/**",
  ]
}

```

## Enhancements and Bug Reports

If you find a bug, or have an enhancement in mind please post [issues](https://github.com/DhivinX/monorepo-vue-nestjs/issues) on GitHub.

## License

MIT
