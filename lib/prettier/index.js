const baseConfig = {
    printWidth: 100,
    tabWidth: 2,
    useTabs: false,
    semi: true,
    singleQuote: true,
    quoteProps: 'as-needed',
    trailingComma: 'all',
    bracketSpacing: true,
    arrowParens: 'avoid',
    requirePragma: false,
    multilineArraysWrapThreshold: 3,
    endOfLine: 'auto',
    embeddedLanguageFormatting: 'auto',
    attributeSort: 'ASC',
    attributeGroups: [
        '$ANGULAR_STRUCTURAL_DIRECTIVE',
        '$ANGULAR_ELEMENT_REF',
        '$ID',
        '$DEFAULT',
        '$CLASS',
        '$ANGULAR_ANIMATION',
        '$ANGULAR_ANIMATION_INPUT',
        '$ANGULAR_INPUT',
        '$ANGULAR_TWO_WAY_BINDING',
        '$ANGULAR_OUTPUT',
    ],
    plugins: [
        require.resolve('prettier-plugin-multiline-arrays'),
        require.resolve('prettier-plugin-organize-attributes'),
    ],
    overrides: [
        {
            files: ['*.html'],
            options: { parser: 'html' },
        },
        {
            files: [
              '*.html',
            ],
            options: {
                parser: 'angular',
                htmlWhitespaceSensitivity: 'ignore',
                bracketSameLine: false,
                singleAttributePerLine: true,
            },
        },
        {
            files: ['*.js'],
            options: {
                parser: 'babel',
                multilineArraysWrapThreshold: 2,
            },
        },
        {
            files: ['*.json'],
            options: {
                parser: 'json',
                multilineArraysWrapThreshold: 2,
            },
        },
        {
            files: ['*.ts'],
            options: {
                parser: 'typescript',
                multilineArraysWrapThreshold: 3,
                semi: true,
                singleQuote: true,
            },
        },
    ],
};

module.exports = baseConfig;
