const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

const sharedOverrides = require("./.shared-overrides");

const imports = require("../plugins/import");
const prettier = require("../plugins/prettier");
// const rxjs = require('../plugins/rxjs');

const angularModelRules = require("../plugins/angular/model");
const typescriptRules = require("../plugins/typescript");
const eslintRules = require("../plugins/eslint");
const angularTemplateRules = require("../plugins/angular/template");

module.exports = (tsConfig = "./tsconfig.app.json") => [
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,

      imports,
      prettier,

      // todo вернуть, когда eslint 9 начнет поддерживать этот плагин: "eslint-plugin-rxjs": "~5.0.3"
      // rxjs
    ],

    languageOptions: {
      parserOptions: {
        project: tsConfig,
        tsconfigRootDir: process.cwd(),
      },
    },

    processor: angular.processInlineTemplates,
    rules: {
      ...angularModelRules,
      ...typescriptRules,
      ...eslintRules,
    },
  },

  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: angularTemplateRules,
  },

  ...sharedOverrides,
];
