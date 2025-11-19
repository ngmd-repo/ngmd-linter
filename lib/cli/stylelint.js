const { createFile } = require("./utils/utils");



function createStylelintConfigTemplate() {
  return `const useStylelintConfig = require('@ngmd/linter/stylelint');

module.exports = useStylelintConfig();
`
}

function initStylelint() {
  createFile('stylelint.config.js', createStylelintConfigTemplate());
}

module.exports = {
  initStylelint
}