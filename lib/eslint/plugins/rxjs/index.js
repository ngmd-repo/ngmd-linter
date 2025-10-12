const rxjsPlugin = require('eslint-plugin-rxjs');

module.exports = {
    plugins: {rxjs: rxjsPlugin},
    rules: {
        'rxjs/no-topromise': 'error',
        'rxjs/throw-error': 'error',
        'rxjs/no-ignored-observable': 'error',
        'rxjs/no-exposed-subjects': 'warn',
        'rxjs/finnish': 'off',
        'rxjs/no-unbound-methods': 'off',
    },
};
