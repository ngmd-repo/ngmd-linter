const { createFile } = require("./utils/utils");

function createEslintConfigTemplate() {
  return `const { useAggregatorConfigs } = require('@ngmd/linter/eslint');

module.exports = useAggregatorConfigs();
`
}

function initEslint() {
  createFile('eslint.config.js', createEslintConfigTemplate());
}

module.exports = {
  initEslint
}