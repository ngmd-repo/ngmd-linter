const tseslint = require('typescript-eslint');
const DEFAULT_LINT_IGNORES = require('./constants/eslint.constants')
const recommendedConfig = require('./configs/recommended');

function expandLintIgnores(ignores) {
    return DEFAULT_LINT_IGNORES.concat(ignores)
}

/**
 * Creates and configures a comprehensive ESLint configuration using TypeScript ESLint
 * with Angular-specific rules, combining recommended configurations with custom overrides.
 * 
 * @param {Object} [overrideSettings={}] - Configuration override settings
 * @param {string[]} [overrideSettings.ignores] - Array of file patterns to ignore during linting.
 *                                                If provided, replaces default ignore patterns.
 * @param {Object[]} [overrideSettings.overrides] - Array of ESLint configuration override objects.
 *                                                  Each object can contain files, rules, and other ESLint config properties.
 * @param {string} [overrideSettings.tsConfig] - path to TypeScript config file.
 * 
 * @returns {Object[]} Array of ESLint configuration objects compatible with typescript-eslint config format.
 *                     Includes recommended configurations, ignore patterns, and any custom overrides.
 * 
 * @example
 * // Basic usage with default settings
 * module.exports = useAggregatorConfigs();
 * 
 * @example
 * // With custom ignore patterns
 * module.exports = useAggregatorConfigs({
 *   ignores: expandLintIgnores(['dist', 'coverage'])
 * });
 * 
 * @example
 * // Override tsconfig path
 * module.exports = useAggregatorConfigs({
 *   tsConfig: './tsconfig.eslint.json',
 * });
 * 
 * @example
 * // With custom rules and TypeScript config
 * const config = {   
 *   overrides: [{
 *     files: ['**\/*.ts'],
 *     rules: {
 *       '@angular-eslint/component-selector': ['error', {
 *         type: 'element',
 *         prefix: 'app',
 *         style: 'kebab-case'
 *       }]
 *     }
 *   }]
 * };
 * module.exports = useAggregatorConfigs(config);
 */
function useAggregatorConfigs(overrideSettings = {}) {
    let overrides = [];
    let ignores = DEFAULT_LINT_IGNORES;

    if (overrideSettings?.ignores) {
        ignores = overrideSettings.ignores;
    }

    if (overrideSettings?.overrides) {
        overrides = overrideSettings.overrides;
    }

    return tseslint.config(...recommendedConfig(overrideSettings.tsConfig), { ignores }, ...overrides);
}

module.exports = { expandLintIgnores, useAggregatorConfigs };
