const tseslint = require('typescript-eslint');
const DEFAULT_LINT_IGNORES = require('./constants/eslint.constants')
const recommendedConfig = require('./configs/recommended');

function expandLintIgnores(ignores) {
    return DEFAULT_LINT_IGNORES.concat(ignores)
}

function useAggregatorConfigs(overrideSettings = {}) {
    let overrides = [];
    let ignores = DEFAULT_LINT_IGNORES;

    if (overrideSettings?.ignores) {
        ignores = overrideSettings.ignores;
    }

    if (overrideSettings?.overrides) {
        overrides = overrideSettings.overrides;
    }

    return tseslint.config(...recommendedConfig, { ignores }, ...overrides);
}

module.exports = { expandLintIgnores, useAggregatorConfigs };
