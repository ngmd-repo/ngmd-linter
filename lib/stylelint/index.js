/**
 * Creates a comprehensive Stylelint configuration for SCSS and CSS files with Angular-specific support.
 * Extends standard SCSS configuration with clean ordering and custom rules for Angular projects.
 * 
 * @param {Object} [overrides] - Configuration override settings
 * @param {string[]} [overrides.plugins] - Additional Stylelint plugins to extend the base configuration.
 *                                         These will be merged with default extends array.
 * @param {Object} [overrides.rules] - Custom Stylelint rules to override or extend default rules.
 *                                    These rules will be merged with the base rule set.
 * 
 * @returns {Object} Complete Stylelint configuration object with extends and rules properties.
 *                   Ready to be exported as stylelint.config.js
 * 
 * @example
 * // Basic usage with default settings
 * const useStylelintConfig = require("@ngmd/linter/stylelint");
 * module.exports = useStylelintConfig();
 * 
 * @example
 * // With custom plugins
 * const useStylelintConfig = require("@ngmd/linter/stylelint");
 * module.exports = useStylelintConfig({
 *   plugins: ["stylelint-scss", "stylelint-order"],
 * });
 * 
 * @example
 * // Only with additional rules
 * module.exports = useStylelintConfig({
 *   rules: {
 *     "max-nesting-depth": 4,
 *     "selector-max-compound-selectors": 3
 *   }
 * });
 */
function useStylelintConfig(overrides) {
  return {
    extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-clean-order',
        ...(overrides?.plugins || [])
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
        ...(overrides?.rules || {})
    },
  };
}

module.exports = useStylelintConfig
