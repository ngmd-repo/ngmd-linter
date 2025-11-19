const { createFile } = require("./utils/utils");

function createPrettierIgnoreTemplate() {
  return `# See http://help.github.com/ignore-files/ for more about ignoring files.
# Compiled output
/dist
/tmp
/out-tsc
/bazel-out
# Node
/node_modules
npm-debug.log
yarn-error.log
# IDEs and editors
.idea/
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace
# Visual Studio Code
.vscode
.history/*
# Miscellaneous
/.angular/cache
.sass-cache/
/connect.lock
/coverage
/libpeerconnection.log
testem.log
/typings
# System files
.DS_Store
Thumbs.db
**/*.md
`;
}

function createPrettierConfigTemplate() {
  return `const prettierConfig = require('@ngmd/linter/prettier');

module.exports = prettierConfig;
`;
}

function createPrettierIgnore() {
  createFile('.prettierignore', createPrettierIgnoreTemplate());
}

function createPrettierConfig() {
  createFile('.prettierrc.js', createPrettierConfigTemplate());
}

function initPrettier() {
  createPrettierConfig();
  createPrettierIgnore();
}

module.exports = {
  initPrettier
}