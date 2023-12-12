module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: ['standard-with-typescript', 'plugin:react/recommended', 'plugin:storybook/recommended'],
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                '.eslintrc.{js,cjs}',
                '**/src/**/*.{test,stories}.{ts,tsx}'
            ],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off'
            },
            parserOptions: {
                sourceType: 'script'
            }
        },
        {
            extends: ['plugin:@typescript-eslint/disable-type-checked'],
            files: ['./**/*.js']
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks'
    ],
    rules: {
        'react/jsx-indent': [2, 4, {}],
        'react/jsx-indent-props': [2, 4],
        '@typescript-eslint/indent': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', 'tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': ['error', { markupOnlu: true, ignoreAttribute: ['data-testid'] }],
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "error", // Checks effect dependencies
        'no-param-reassign': 'off'
    }
}
