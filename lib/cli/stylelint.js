const { createFile } = require("./utils/utils");


function createStylelintIgnoreTemplate() {
  return `dist`;
}

function createStylelintConfigTemplate() {
  return `const useStylelintConfig = require('@ngmd/linter/stylelint');

module.exports = useStylelintConfig();
`
}

function initStylelint() {
  createFile('stylelint.config.js', createStylelintConfigTemplate());
  createFile('.stylelintignore', createStylelintIgnoreTemplate());
}

module.exports = {
  initStylelint
}