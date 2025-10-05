const { createFile } = require("./utils/utils");

function createStylelintConfigTemplate() {
  return `module.exports = {
  extends: [
    '@ngmd/linter/stylelint',
    '@ngmd/linter/stylelint-prettier',
  ],
  rules: {
    'scss/function-no-unknown': [
      true,
      {
        ignoreFunctions: ['/^assets/', '/^cdn/'],
      },
    ],
  },
};
`
}

function initStylelint() {
  createFile('stylelint.config.js', createStylelintConfigTemplate());
}

module.exports = {
  initStylelint
}