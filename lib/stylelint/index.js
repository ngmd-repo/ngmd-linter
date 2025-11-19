function useStylelintConfig(overrides = {
  plugins: [],
  rules: {}
}) {
  return {
    extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-clean-order',
        ...overrides?.plugins
    ],
    rules: {
        'function-url-quotes': 'always',
        'annotation-no-unknown': true,
        'keyframe-declaration-no-important': true,
        'no-empty-source': null,
        'no-descending-specificity': null,
        'scss/dollar-variable-pattern': ['^[a-z]+([-]{1}[a-z]+)*$'],
        'selector-pseudo-element-no-unknown': [
            true,
            {
                ignorePseudoElements: ['ng-deep'],
            },
        ],
        'function-no-unknown': null,
        'scss/at-extend-no-missing-placeholder': null,
        'scss/function-no-unknown': [
            true,
            {
                ignoreFunctions: [],
            },
        ],
        ...overrides?.rules
    },
  };
}

module.exports = useStylelintConfig
