module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: { parser: '@typescript-eslint/parser' },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    rules: {
        'comma-dangle': ['error', 'always-multiline'],
        semi: ['error', 'always'],
        'no-extra-semi': 'error',
        indent: 'off',
        '@typescript-eslint/indent': ['error', 4],
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true,
            },
        ],
        'object-curly-spacing': ['error', 'always'],
        'array-bracket-spacing': ['error', 'never'],
        'computed-property-spacing': ['error', 'never'],
        'no-trailing-spaces': 'error',
        'array-element-newline': ['error', 'consistent'],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true,
            },
        ],
        'max-len': [
            'warn',
            {
                code: 150,
                ignoreComments: true,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignorePattern: '<.+',
                ignoreRegExpLiterals: true,
            },
        ],
        curly: 'error',
        'brace-style': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multiple-empty-lines': 'error',
        'no-var': 'error',
        'no-with': 'error',
        'one-var': ['error', 'never'],
        'no-empty': 'error',
        'no-cond-assign': ['error', 'always'],
        'eol-last': ['error', 'always'],
        'no-shadow': 'off',
        'no-prototype-builtins': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
    },
    overrides: [
        {
            files: ['**/__tests__/**/*.test.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                jest: true,
            },
            rules: {
                '@typescript-eslint/no-empty-function': 'off',
            },
        },
    ],
};
